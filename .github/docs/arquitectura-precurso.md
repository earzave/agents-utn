# Arquitectura del proyecto "AI Engineering Assistant"

La aplicación objetivo del pre-curso es un asistente para un proyecto ficticio de
pagos/microservicios ("Payment Investigation Agent" al final). Este documento define el
plan del monorepo y las reglas de construcción **por fase**.

## Regla de oro

**El código de la app NO se genera completo de entrada.** Cada fase agrega su slice:

1. El tutor delega en el subagente `Scaffolder de Fases` → crea estructura + archivos con TODOs.
2. El estudiante implementa la lógica (el tutor NO escribe la lógica por él).
3. El tutor revisa (leer y comentar, no reescribir; delega en el `Revisor de Código`), el estudiante ajusta.
4. La fase cierra con: endpoint/función ejecutable + **Evidencia** (commit, comando + salida,
   cambio en vivo) + sección de la fase en `PROGRESS.md` + PHASE REVIEW.

> Regla de docs: hay **5 READMEs** (raíz, `.github/`, `apps/web`, `apps/server`,
> `packages/contracts`); sin carpetas `docs/` dentro de los apps. Todo el contexto útil
> para la IA vive consolidado en `.github/` (README + INDEX + PROGRESS + docs +
> instructions + agents + skills + prompts).

---

## Estructura del monorepo (real, con npm workspaces)

> Decisión final (2026-09-18): monorepo npm workspaces en la raíz del workspace. Los
> proyectos se generaron con sus CLIs oficiales y luego se movieron a `apps/`. Ventaja
> clave: `packages/contracts` comparte DTOs/interfaces/schemas zod entre FE y BE
> (contrato único; cambia una vez, lo ven ambos).

```
PrecursoUtnAgents/                (raíz = package.json con workspaces apps/* packages/*)
├── .github/                      (toda la tutoría: protocolo, curriculum, skills, ...)
├── apps/
│   ├── server/                   (@precurso/server — NestJS 11 + TS estricto)
│   │   ├── src/
│   │   │   ├── domain/           (entidades y reglas puras: Payment, PaymentEvent, ...)
│   │   │   ├── llm/              (LlmProvider interfaz + adapter del proveedor)
│   │   │   ├── retrieval/        (chunker, embedder, vector-store, retriever, reranker)
│   │   │   ├── chat/             (controllers + wiring de schemas zod de contracts)
│   │   │   ├── tools/            (definiciones zod + adapters sobre services)
│   │   │   ├── orchestration/    (agent loop, luego grafo, luego supervisor)
│   │   │   ├── memory/           (sesiones/persistencia)
│   │   │   ├── evaluation/       (dataset, harness de métricas)
│   │   │   ├── security/         (guardrails, allowlist, sanitización)
│   │   │   ├── infra/            (db sqlite/pg, config, logging)
│   │   │   ├── scripts/          (scripts de fases, ej. embeddings-similarity)
│   │   │   ├── app.module.ts     (punto de arranque; módulos por fase)
│   │   │   └── main.ts
│   │   ├── README.md             (setup del backend; sin carpeta docs/ — notas por
│   │   │                          fase en .github/PROGRESS.md)
│   │   └── .env.example          (sin secrets; copiar a .env)
│   └── web/                      (@precurso/web — Vite + React 19 + Tailwind v4
│                                  + shadcn/ui + Redux Toolkit + redux-saga)
│       └── src/
│           ├── features/
│           │   ├── chat/         (chat + fuentes + tool-calls — "lab de pruebas")
│           │   └── tutor/        (panel de tutoría: fases, rúbrica, repaso — "modo tutor")
│           ├── components/ui/    (shadcn/ui ya instalado)
│           ├── store/            (Redux Toolkit + sagas; slices/sagas del estudiante)
│           ├── hooks/
│           └── lib/              (utils, api client, tipos)
└── packages/
    └── contracts/                (@precurso/contracts — el paquete compartido)
        └── src/
            ├── index.ts          (punto de entrada; re-exports por fase)
            └── <dominio>/        (ej. chat/chat.schema.ts — schemas zod + z.infer)
```

## `packages/contracts` (código común FE/BE)

Fuente **única** de DTOs, interfaces y schemas zod compartidos. Reglas:

- El **schema zod es la fuente de verdad**; los tipos TS se exponen con `z.infer`.
- **Cero lógica de negocio**: solo schemas, tipos, constantes y errores tipados
  compartidos (unions discriminadas).
- Se compila a `dist/` con `tsc` (npm lo resuelve vía workspace). Comandos desde la
  raíz: `npm run build:contracts` / `npm run watch:contracts` (watch mientras editás
  DTOs en desarrollo).
- Cuando una fase cambia el contrato FE/BE, el scaffold empieza **acá**: TODO(estudiante)
  en el schema de `packages/contracts`, luego el endpoint en `apps/server`, luego el FE
  consume el mismo tipo importando `@precurso/contracts`.
- Dependencia declarada en ambos apps (`@precurso/contracts`), por lo que TS/VS Code
  autocompleta sin paths mágicos.

> Seed (docs markdown ficticios + payments.json): se crea en fase 1-2; ubicación:
> `data/` en la **raíz del repo** (fuera de los apps; lo comparten TypeScript y
> `labs/python/`). Ver "Datos compartidos (data/)" más abajo.

## Doble rol del frontend

El frontend NO es solo la UI del producto "AI Engineering Assistant". Cumple dos roles
simultáneos:

1. **Laboratorio de pruebas** (`apps/web/src/features/chat/`): el lugar donde el
   estudiante ve funcionar lo que implementa en `apps/server` en cada fase — respuestas
   con fuentes citadas (fase 3), timeline de tool calls con args y resultados (fase 6),
   indicador de iteración del agente (fase 9). Hoy es un mock sin backend; se va
   reemplazando slice a slice con cada fase.
2. **Modo tutor** (`apps/web/src/features/tutor/`): panel donde el estudiante repasa
   conceptos con el agente de VS Code: mapa de fases y estados, rúbrica /20, repaso de
   conceptos, preguntas de transferencia. En fases avanzadas puede conectarse a
   endpoints del backend para reflejar el progreso real (PROGRESS.md o DB).

> Implicancia para el tutor: ante un pedido de frontend, distinguir si es para el
> **lab** (probar mi backend) o para el **modo tutor** (estudiar/repasar). El tutor
> puede scaffoldear y revisar ambos, pero la lógica la escribe el estudiante.

## Por qué esta forma

- Separación de capas exigida por el plan: dominio / LLM / retrieval / tools /
  orchestration / infraestructura, cada una en su carpeta.
- NestJS real desde la fase 0 (no server Node simple): el estudiante ya lo domina y
  evita distracciones de setup.
- Fases 6+ agregan SQL real (SQLite → luego pg si hace falta).
- `packages/contracts` elimina la duplicación de schemas zod FE/BE: el contrato se
  escribe una vez y ambos lados compilan contra el mismo tipo (fail-fast al cambiarlo).

## Datos ficticios (seed, en `data/` de la raíz)

> Decisión técnica (2026-09-18): los datos de prueba viven en **`data/`** (raíz del
> repo), NO en `apps/server/seed/`. Motivo: los labs Python (`labs/python/`) y el
> monorepo TS leen el **mismo** dataset sin rutas cruzadas entre apps ni datos
> acoplados a una app. Detalle de los archivos en la lista.

- `data/docs/`: markdown con secciones — architecture.md, payments.md, sap.md, retries.md,
  troubleshooting.md (+ un doc "envenenado" para la fase de seguridad).
- `data/payments.json`: payments + payment_events + payment_retries (payment 12345 FAILED,
  provider SAP, retryCount 2, etc.).
- `data/embeddings/`: las 10 frases de la Fase 1.
- `data/golden/questions.json`: golden set de la Fase 3E (question, expectedAnswer,
  expectedSources) — mismo archivo que leerá RAGAS en la Fase 14.

Reglas de `data/`:

1. **`data/` es solo lectura para el código de las fases** (TS y Python): ninguna fase
   escribe ahí dentro.
2. Los datos **derivados** (SQLite de la Fase 7, índices, caches) van a rutas ignoradas
   por git (ej. `apps/server/.data/` o `labs/python/.data/`).

## LLM provider (abstracción desde el día 1)

```ts
interface LlmProvider {
  chat(req: ChatRequest): Promise<ChatResponse>;
  chatWithTools?(
    req: ChatRequest & { tools: ToolDefinition[] },
  ): Promise<ChatResponse>;
  embed(texts: string[]): Promise<number[][]>;
}
```

Implementaciones posibles: OpenAI-compatible (local o API económica), más adelante
Anthropic/Gemini. La interfaz vive en `apps/server/src/llm/`; ninguna otra capa conoce el
proveedor. Secrets solo por `.env`.

## Frontend (lab + tutor)

Mínimo y útil, no decorativo:

- Chat con respuestas + **fuentes citadas** (desde fase 3).
- Timeline de **tool calls** visibles (desde fase 6): qué tool, con qué args, qué devolvió.
- Indicador de estado del agent loop (iteración, herramientas usadas) desde fase 9.
- Panel de tutoría: fases/estados, rúbrica /20, repaso de conceptos (ya scaffoldado,
  se va refinando por fase).

## Comandos del monorepo (desde la raíz)

| Comando                   | Qué hace                                                       |
| ------------------------- | -------------------------------------------------------------- |
| `npm install`             | instala todos los workspaces + buildea contracts (postinstall) |
| `npm run dev:server`      | NestJS en watch (apps/server)                                  |
| `npm run dev:web`         | Vite dev server (apps/web)                                     |
| `npm run build`           | buildea contracts → server → web                               |
| `npm run build:contracts` | buildea contracts una vez                                      |
| `npm run watch:contracts` | tsc watch de contracts (dejalo corriendo mientras editás DTOs) |

> Ojo: si consumís un schema nuevo de contracts y TS no lo ve, es que falta buildear
> contracts (dist está desactualizado) — con `watch:contracts` corriendo no pasa.

## Infraestructura y Docker (criterio)

**El scaffold NO incluye Dockerfiles ni docker-compose.** Docker es ejercicio, no setup:

- Fases 0-6: sin DB ni servicios externos (vector store in-memory, JSON). Nada que
  contenerizar; el dev loop (nest --watch + Vite HMR) es más rápido sin contenedores,
  y bind mounts en Windows penalizan el file watching.
- Fase 7 (SQLite): es un archivo, no requiere contenedor.
- Migración SQLite → pg (cuando toque): el `docker-compose.yml` con postgres es parte
  del slice de esa fase (el aprendizaje es el repository pattern + migración, no el YAML).
- Vector DB real (Qdrant/pgvector): mismo criterio — el compose entra con la fase que
  lo introduce. Antes, in-memory: entender índices/similitud primero es requisito.
- Fase 15 (proyecto final): dockerizar el stack completo (server + web + pg + qdrant).
  Coincide con "Taller de Integración y Proyecto Final" (UTN M3 · Clase 4; la web no
  publica una clase "Despliegue": despliegue aparece solo en el título del módulo) y ahí
  sí es objetivo de la fase.

Criterio general: **cada fase que introduce un servicio de infraestructura incluye su
docker-compose como parte del ejercicio** (scaffold del compose con TODOs, implementación
del estudiante).

## Trade-offs de arquitectura (documentados con el tutor)

| Decisión                                                                  | Alternativa                                  | Trade-off                                                                                                                                      |
| ------------------------------------------------------------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Monorepo npm workspaces + contracts compartido                            | 2 proyectos independientes                   | Setup inicial mayor vs. contrato único FE/BE sin duplicar schemas zod                                                                          |
| Contracts compilados a dist (tsc)                                         | tsconfig paths a source                      | El dist fuerza a buildear/watch antes de consumir; paths requiere config en cada tsconfig de app                                               |
| Docker solo cuando la fase introduce el servicio (compose como ejercicio) | Compose desde día 1                          | Fricción en dev loop (watch/HMR, bind mounts Windows lentos) y caja negra temprana vs. reproducibilidad; despliegue completo recién en fase 15 |
| Empezar in-memory/JSON como vector store                                  | Qdrant/pgvector directo                      | Perder el aprendizaje del concepto de índice; ganar velocidad de iteración                                                                     |
| SQLite antes que pg                                                       | pg desde el inicio                           | Menos setup; migración posterior es barata si los repos aíslan el acceso                                                                       |
| Agent loop manual antes de LangGraph                                      | LangGraph directo                            | Entender el concepto antes del framework (requisito del examen global #1)                                                                      |
| Zod en todos los límites                                                  | class-validator                              | Un solo formato de schema reutilizable en contracts, tools, endpoints y FE                                                                     |
| Redux Toolkit + sagas en web                                              | Estado local / server-state (TanStack Query) | Más estructura para chat streaming/tool-calls vs. peso extra; decidir por fase                                                                 |
| No tests generados                                                        | TDD                                          | Preferencia del estudiante; el criterio de éxito es conceptual + ejecutable                                                                    |
