# Pre-Curso UTN — Monorepo

Monorepo npm workspaces para el pre-curso tutoreado. La tutoría vive en
[`.github/`](.github/README.md); este README cubre el código.

> Estado del avance y fases: [`.github/PROGRESS.md`](.github/PROGRESS.md) (fuente única
> de verdad) · detalle de cada fase: [`.github/docs/fases/`](.github/docs/fases/).

## Objetivo del monorepo

Base de código donde se implementan las fases del pre-curso UTN **"RAG y Arquitectura de
Agentes"** (preparación para el curso oficial, inicio 18/11/2026). Cada fase agrega un
slice real: el backend en `apps/server`, los DTOs zod en `packages/contracts` si cambia
el contrato FE/BE, y el lab en `apps/web` donde se prueba lo implementado. El método de
estudio y el protocolo del tutor viven en [`.github/README.md`](.github/README.md) — este
README cubre el código; el índice de abajo es navegación, no una copia del temario.

## Mapa de fases (índice de navegación)

El estado y el detalle de cada fase están en [`.github/PROGRESS.md`](.github/PROGRESS.md)
y en [`.github/docs/fases/`](.github/docs/fases/). Bloqueantes: **E1** antes de LangGraph ·
**E2** antes de Multi-Agent.

- **Fundamentos + RAG (00–05):** [00](.github/docs/fases/fase-00.md) Mapa mental de LLMs ·
  [01](.github/docs/fases/fase-01.md) Tokens y embeddings ·
  [02](.github/docs/fases/fase-02.md) Chunking ·
  [02b](.github/docs/fases/fase-02b.md) Parent-Document Retrieval ·
  [03](.github/docs/fases/fase-03.md) Primer RAG ·
  [03E](.github/docs/fases/fase-03E.md) Evaluación temprana (recall@k, MRR, catálogo de fallas) ·
  [03F](.github/docs/fases/fase-03F.md) Puente a frameworks (LlamaIndex / LangChain) ·
  [04](.github/docs/fases/fase-04.md) Retrieval de calidad (hybrid, BM25, metadata) ·
  [05](.github/docs/fases/fase-05.md) Reranking + transformación de consultas
- **Tools (06–08):** [06](.github/docs/fases/fase-06.md) Tool calling ·
  [07](.github/docs/fases/fase-07.md) Tools + SQL ·
  [08](.github/docs/fases/fase-08.md) RAG + tools
- **Agentes (09–12):** [09](.github/docs/fases/fase-09.md) Agent loop + razonamiento agéntico ·
  [10](.github/docs/fases/fase-10.md) Estado y memoria ·
  [10b](.github/docs/fases/fase-10b.md) Contexto largo, compresión y GraphRAG ·
  [11](.github/docs/fases/fase-11.md) LangGraph ·
  [12](.github/docs/fases/fase-12.md) Multi-agent (supervisor + handoffs tipados)
- **Cierre (13–15):** [13](.github/docs/fases/fase-13.md) Seguridad + human-in-the-loop ·
  [14](.github/docs/fases/fase-14.md) Evaluación completa (faithfulness, RAGAS/Phoenix/TruLens, tracing) ·
  [15](.github/docs/fases/fase-15.md) Proyecto final + Docker + examen final
- **Extra:** [P](.github/docs/fases/fase-P.md) Puente a Python

## Cómo se trabaja una fase

1. **`/siguiente-fase`** → concepto + preguntas + scaffold con TODOs (lo genera el tutor).
2. **Implementás vos** la lógica (commits `feat(phase-N)` / `fix(phase-N)`).
3. **`/evaluar-fase`** → rúbrica /20 + PHASE REVIEW, con doble validación
   (práctica + conceptual). Que compile no alcanza.
4. El avance se registra en `PROGRESS.md` y el ledger agenda los repasos espaciados.

Repaso corto: **`/repaso`**. Exámenes bloqueantes: **E1** antes de la fase 11 (LangGraph) ·
**E2** antes de la fase 12 (multi-agent). Cero tests en todo el proyecto (D3): la
verificación es manual, con los casos de aceptación de cada `fase-XX.md`.

## Estructura

```txt
PrecursoUtnAgents/
├── .github/              ← tutoría: protocolo, curriculum, fases, skills, PROGRESS.md,
│                            tutor/concept-ledger.md (repaso espaciado), tutor/tutor-smoke-tests.md
├── apps/
│   ├── server/           ← NestJS 11 + TS estricto ("AI Engineering Assistant" backend)
│   └── web/              ← Vite + React 19 + Tailwind v4 + shadcn/ui + RTK + sagas
│                            (lab de pruebas + vista de estudio del pre-curso)
└── packages/
    └── contracts/        ← @precurso/contracts: DTOs, interfaces y schemas zod
                             compartidos FE/BE
```

## Comandos (desde la raíz)

| Comando                   | Qué hace                                                                                                               |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `npm install`             | instala todos los workspaces + buildea `contracts` (postinstall)                                                       |
| `npm start`               | **levanta todo el monorepo**: buildea contracts + server y arranca `dev:server` + `dev:web` en paralelo (concurrently) |
| `npm run dev:server`      | NestJS en watch (usa `npm start` salvo que quieras un solo servicio)                                                   |
| `npm run dev:web`         | Vite dev server (ídem)                                                                                                 |
| `npm run build`           | buildea contracts → server → web                                                                                       |
| `npm run lint`            | lints todos los workspaces (no modifica archivos; `lint:fix` sí)                                                       |
| `npm run typecheck`       | type-check de server y web                                                                                             |
| `npm run check`           | build + lint + typecheck de todos los workspaces                                                                       |
| `npm run watch:contracts` | tsc watch de contracts (dejalo corriendo mientras editás DTOs)                                                         |

> En desarrollo: `npm start` levanta front + back juntos con prefijos `[server]` /
> `[web]` en la salida. Alternativa por servicio: `npm run dev:server` + `dev:web` en
> dos terminales. Si el server falla con `Cannot find module dist/main`, corré
> `npm run build --workspace @precurso/server` (eliminá `*.tsbuildinfo` si persiste).
> Node 22 (ver `.nvmrc`). Siempre correr `npm` desde la raíz, nunca dentro de los apps.

## `@precurso/contracts`

Fuente **única** de DTOs e interfaces compartidas entre `apps/server` y `apps/web`:
schemas zod (+ tipos inferidos con `z.infer`), interfaces de dominio compartidas y
constantes. Se compila con `tsc` a `dist/` y se consume importando `@precurso/contracts`.

Reglas del paquete:

- Solo schemas, tipos y constantes compartidas — **cero lógica de negocio**.
- Es el primer código que el estudiante toca en cada fase cuando cambia el contrato
  FE/BE (el tutor scaffoldea con TODOs).
- Cambió el contrato → se cambia acá una sola vez, y FE y BE ven el mismo tipo.

## Convención de commits

Para distinguir autoría en el historial:

- `scaffold(...)` / `docs(...)` — hecho por la IA (scaffold de fase, documentación).
- `feat(phase-N)` / `fix(phase-N)` — hecho por el estudiante (implementación de la fase).
- Revisar el `git diff` por commit es el control real de la regla anti-código del tutor.
