# Pre-Curso UTN — RAG y Arquitectura de Agentes (modo tutor)

Pre-curso guiado por IA para llegar con base sólida al curso oficial de la UTN:
**"Desarrollo de Aplicaciones de Inteligencia Artificial con RAG y Arquitectura de Agentes"**
(inicio 18/11/2026 · 14 semanas · jueves 18-20h AR · [página del curso](https://sceu.frba.utn.edu.ar/e-learning/detalle/curso/185834/desarrollo-de-aplicaciones-de-inteligencia-artificial-con-rag-y-arquitectura-de-agentes?id=186006)).

## Filosofía

El agente de VS Code actúa como **TUTOR y EXAMINADOR**, no como implementador:

- Explica conceptos con analogías de backend (APIs, repositories, colas, state machines, authz).
- Hace preguntas conceptuales (siempre incluye un "¿por qué?" y un "¿qué pasaría si...?").
- **NO escribe el código de los ejercicios**: el estudiante implementa, el tutor revisa y corrige.
- No avanza de fase sin **doble validación** (práctica + conceptual) y sin registrar en
  `PROGRESS.md` — la escritura la hace el subagente `Registrador de Progreso`.
- Confusión conceptual fundamental ⇒ fase NO aprobada, aunque el código funcione.

Protocolo completo y reglas duras únicas: [`docs/protocolo-tutor.md`](docs/protocolo-tutor.md) §1bis.

## Cómo empezar

1. Abrir Copilot Chat y ejecutar **`/iniciar-precurso`** → evaluación diagnóstica + plan ajustado.
2. En cada sesión: **`/siguiente-fase`** → calentamiento (repaso espaciado del ledger) + ciclo de la fase.
3. Al terminar el ejercicio de una fase: **`/evaluar-fase`** → rúbrica /20 + PHASE REVIEW.
4. Repaso corto: **`/repaso`** (sesión de 10-15 min desde el ledger) o **`/repasar-concepto <concepto>`**.
5. Exámenes globales con **`/examen-global`** (bloqueantes: E1 antes de LangGraph, E2 antes de Multi-Agent).

También podés seleccionar el agente **"Tutor Pre-Curso"** en el selector de agentes del chat.

## Cómo se estudia

- **Detalle de cada fase**: [`docs/fases/fase-XX.md`](docs/fases/) (objetivo, ejercicio,
  criterios medibles, casos de aceptación manuales, semillas de preguntas, DoD).
- **Temario UTN + matriz de cobertura**: [`docs/curriculum.md`](docs/curriculum.md).
- **Repaso espaciado**: [`tutor/concept-ledger.md`](tutor/concept-ledger.md) — cada concepto
  tiene nivel 0-3 y fecha de próximo repaso (0 → próxima sesión · 1 → 2 días · 2 → 5 días · 3 → 12 días).
- **Tiers**: A imprescindible · B muy recomendable · C si hay tiempo · D durante el curso
  (decisión D2 = 8 h/semana → objetivo A + B). Ver [`docs/decisiones.md`](docs/decisiones.md).

## Cómo se evalúa

- **Rúbrica /20**: Conceptos · Aplicación · Trade-offs · Seguridad (si la fase no la evalúa:
  **Conceptos 7 · Aplicación 7 · Trade-offs 6**; cada fase lo declara en su frontmatter).
- Veredicto: 18-20 APROBADO · 15-17 APROBADO CON REPASO · <15 NO APROBADO.
- **Evidencia obligatoria**: commit del estudiante + comando ejecutado y su salida + un
  **cambio en vivo** resuelto explicando cada decisión. Que compile no alcanza.
- **PHASE REVIEW** (7 puntos) + 3 preguntas de transferencia + **exit ticket** al cerrar cada sesión.
- **Repaso espaciado**: el ledger agenda los repasos; con 3+ conceptos vencidos de nivel ≤1,
  la sesión se dedica a `/repaso` antes de contenido nuevo.

## Estructura

```txt
PrecursoUtnAgents/                (monorepo npm workspaces)
├── .github/                         ← toda la tutoría (incluido este README)
│   ├── README.md / INDEX.md         ← guía de uso / mapa de archivos
│   ├── PROGRESS.md                  ← fuente de verdad del avance (+ Tier/Horas/Evidencia)
│   ├── tutor/                       ← concept-ledger (repaso espaciado) + smoke tests
│   ├── copilot-instructions.md      ← resumen corto de reglas (fuente única: protocolo §1bis)
│   ├── docs/                        ← protocolo, curriculum, decisiones, arquitectura, glosario,
│   │   │                               análisis agents-sdk, plan fuente
│   │   └── fases/fase-XX.md         ← un archivo por fase (00, 1, 2, 2b, 3, 3E…15, P, 3F, 10b)
│   ├── instructions/                ← por contexto (applyTo string): evaluación, backend, frontend
│   ├── agents/                      ← tutor (sin edit) + registrador (solo PROGRESS/ledger)
│   │                                   + evaluador + revisor + scaffolder (subagentes)
│   ├── skills/                      ← diagnostico, avance-fase, evaluacion-fase,
│   │                                   repaso-espaciado, examen-global, scaffold-fase
│   └── prompts/                     ← /iniciar-precurso, /siguiente-fase, /evaluar-fase,
│                                       /repaso, /repasar-concepto, /examen-global
├── apps/
│   ├── server/                      ← @precurso/server: NestJS 11 + TS estricto — slices por fase con TODOs
│   └── web/                         ← @precurso/web: Vite + React 19 + Tailwind v4 + shadcn/ui + RTK + sagas
├── packages/
│   └── contracts/                   ← @precurso/contracts: DTOs, interfaces y schemas zod FE/BE
├── data/                            ← datos compartidos TS/Python (solo lectura; lo crea el Scaffolder en fases 1-2)
└── labs/
    └── python/                      ← labs Python con venv propio (D1: fases 3F-Py, 11, 12, 14; fuera del monorepo npm)
```

Mapa completo de archivos: [`INDEX.md`](INDEX.md).

## Stack

| Capa                | Tecnología                                                                                         |
| ------------------- | -------------------------------------------------------------------------------------------------- |
| Monorepo            | npm workspaces (raíz) — `apps/server`, `apps/web`, `packages/contracts`                            |
| Backend             | Node.js + TypeScript estricto + NestJS                                                             |
| Contrato compartido | `@precurso/contracts` — schemas zod + tipos inferidos (fuente única FE/BE)                         |
| Validación          | Zod (contracts, endpoints, tool calls, structured output)                                          |
| Frontend            | React 19 + Vite + TypeScript + Tailwind v4 + shadcn/ui                                             |
| LLM + embeddings    | Ollama Cloud (API OpenAI-compatible) tras la interfaz `LlmProvider` (decisión D4)                  |
| Vector DB           | In-memory/JSON al principio → Qdrant/pgvector cuando la fase los introduce (Docker como ejercicio) |
| Datos               | JSON/SQLite primero; SQL real en fases de tools · datos compartidos en `data/` (solo lectura)      |
| Docs RAG            | Markdown ficticio (`data/docs/`, creado en fase 2)                                                 |
| Tests               | **Cero tests en todo el proyecto** (decisión D3; casos de aceptación manuales por fase)            |
| FE estado           | Redux Toolkit + redux-saga (decisión D5; slices/sagas implementados por la IA)                     |
| Labs Python         | `labs/python/` con venv propio (D1: fases 3F-Py, 11, 12, 14; Pydantic en límites; Ruff)            |

## Doble rol del frontend

1. **Lab de pruebas**: donde el estudiante prueba lo que implementa en `apps/server`
   de cada fase (fuentes citadas, tool calls, iteraciones del agente visibles en el chat).
2. **Modo tutor**: página "Tutor & evaluación" para repasar conceptos con el agente de
   VS Code — **vista de estudio, no es el registro oficial** (el registro oficial es
   `PROGRESS.md`; la rúbrica de esa pantalla está alineada a la /20 oficial).

> Todo cambio FE lo desarrolla íntegramente la IA (decisión D9): es lab visual, no
> práctica del curso.

## Fases y estado

El detalle y el estado actual viven en [`PROGRESS.md`](PROGRESS.md) (fuente única de
verdad, con columnas Tier / Horas est. / Evidencia) y el detalle de cada fase en
[`docs/fases/`](docs/fases/). Bloqueos: **E1** antes de LangGraph · **E2** antes de Multi-Agent.

## Estado actual del código (2026-09-18)

- Monorepo raíz (`package.json` con workspaces `apps/*` y `packages/*`; comandos
  `dev:server`, `dev:web`, `build`, `build:contracts`, `watch:contracts`).
- `apps/web/` YA funciona (`npm run dev:web` desde la raíz):
  - **Chat IA** (`features/chat/`): mock sin backend — placeholder que se va reemplazando
    por cada fase del backend.
  - **Tutor & evaluación** (`features/tutor/`): vista de estudio del pre-curso (no es el
    registro oficial; la autoridad es `PROGRESS.md`).
  - Store (RTK + sagas): slices/sagas los implementa la IA (D9).
- `apps/server/` YA EXISTE: NestJS generado con Nest CLI (template vacío). Los specs
  del template ya fueron eliminados — no son modelos a seguir.
- `packages/contracts/` YA EXISTE: `@precurso/contracts` con scaffold de
  `chat/chat.schema.ts` (TODO para la fase 0) y re-export en `src/index.ts`.
- Los slices de cada fase se crean con la skill `scaffold-fase` (estructura + TODOs en
  server/contracts) y el estudiante implementa la lógica del backend; el FE lo
  desarrolla la IA (D9). Ver
  [`.github/docs/arquitectura-precurso.md`](.github/docs/arquitectura-precurso.md).

## Reglas de oro

- TypeScript estricto; zod en todos los límites; secrets por `.env` (nunca hardcodear).
- Separación de capas: dominio / LLM / retrieval / tools / orchestration / infraestructura.
- Primero implementar simple y a mano; frameworks (LangChain, LlamaIndex, LangGraph, CrewAI) recién en su fase.
- Documentar trade-offs de cada técnica (sección de la fase en `PROGRESS.md` + Evidencia).
- Criterio de éxito: puedo explicarlo con mis palabras, modificarlo y explicar cuándo NO usarlo.
