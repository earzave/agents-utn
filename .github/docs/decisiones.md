# Decisiones (ADR cortos)

Registro de decisiones del pre-curso: contexto → decisión → alternativa descartada → fecha.
Formato corto; una entrada por decisión. Referenciado por `copilot-instructions.md` y el protocolo.

---

## D1 — Lenguaje del pre-curso (híbrido TS + Python)

- **Contexto:** CrewAI es Python-only; LangChain, LangGraph y LlamaIndex tienen versión JS
  pero el ecosistema y los ejemplos del curso van primero en Python. El curso puede
  dictarse en TS, Python o ambos (a confirmar con el coordinador).
- **Decisión (estudiante, 2026-09-18, NO depende de lo que dicte el curso):**
  **híbrido**.
  - **TypeScript** para aprender los conceptos del curso a mano (Tier A + B: RAG,
    embeddings, tools, agent loop, estado, seguridad) — es el idioma donde el estudiante
    construye comprensión.
  - **Python** (`labs/python/`) para los temas y tecnologías que lo requieren:
    **LangGraph (Fase 11), CrewAI/AutoGen (Fase 12), RAGAS (Fase 14)** y los ejemplos de
    clase.
  - Conviven en el mismo repo: `apps/*` + `packages/*` (npm workspaces) y `labs/python/`
    como carpeta hermana con venv propio; los datos compartidos viven en `data/`.
- **Pendiente con el coordinador (fecha límite 11/10, NO bloquea la decisión):** versión
  de Python/librerías del curso y gestor de dependencias (alimenta D8 y D7).
- **Consecuencias:** la 3F-Py hace el puente TS → Python; **T-10** es script Python
  (entorno listo en semana 1). No existe plan de reversión: la decisión no cambia según
  la respuesta del coordinador (a lo sumo se agregan lecturas en LangGraph.js si el
  curso usa TS).
- **Alternativa descartada:** decidir el idioma del pre-curso en función del curso
  (dejaría la comprensión a merced de lo que esconde cada framework).

## D6 — Idioma de la Fase 11 (LangGraph)

- **Decisión (estudiante, 2026-09-18):** LangGraph en **Python** (`labs/python/`),
  independiente de la respuesta del coordinador (parte del híbrido D1).
- **Nota:** si el curso resulta dictarse en TypeScript, la práctica de la fase **sigue
  en Python** (es el ecosistema de referencia de LangGraph); los mismos conceptos se
  leen por analogía en LangGraph.js sin cambiar el ejercicio.

## D7 — Arquitectura del proyecto final con Python

- **Contexto:** el proyecto final puede integrar Python como servicio o dejarlo como lab.
- **Decisión:** **pendiente, se decide al llegar a la Fase 15**, según lo que pida el
  proyecto del curso (opciones: Python como servicio detrás del mismo endpoint — ej.
  FastAPI — o laboratorio aparte en `labs/python/`).

## D8 — Gestor de dependencias de los labs Python

- **Contexto:** 3F-Py exige fijar dependencias para reproducir el entorno.
- **Decisión:** **pip + `requirements.txt` por defecto**; si el coordinador confirma otro
  gestor (poetry, uv, conda), se cambia y se registra acá.

---

## D2 — Horas por semana hasta el 18/11

- **Contexto:** ~8 semanas hasta la apertura (18/11). El plan original apuntaba a 3
  semanas y a cubrir contenido que el curso mismo enseña.
- **Decisión (estudiante, 2026-09-18):** **8 h/semana**.
- **Consecuencias:** objetivo **Tier A + B** (fases D, 0, 1, 2, 2b, 3, 3E, 4, 5, 6, 7, 8,
  9, 10 + E1 ≈ 66 h). Tier C (3F, 10b, 11, E2, 13, P) solo si hay tiempo; **Tier D**
  (12, 14 completa, 15) se hace durante el curso.
- Tiers y horas por fase: tabla en `curriculum.md`. Bosquejo semanal en `PROGRESS.md`.

## D3 — Política de tests

- **Contexto:** el plan fuente pedía Jest y "Tests:" por fase; la regla dura decía
  "cero tests" (contradicción).
- **Decisión (estudiante, 2026-09-18):** **cero tests en todo el proyecto** — ni la IA ni
  el estudiante generan tests (`.spec.ts`, `.test.ts`, unit, e2e). Regla única en
  `protocolo-tutor.md` §1bis.
- **Consecuencias:** las "Tests:" del plan fuente pasan a ser **casos de aceptación
  manuales** en cada `docs/fases/fase-XX.md`. El plan fuente (`precurso-utn-plan-fuente.txt`)
  queda intacto con una nota al inicio de que esta decisión lo supera.
- **Alternativa descartada:** que el estudiante escriba tests de funciones puras
  (chunker, coseno, BM25, policy) revisados por el tutor.

## D4 — Proveedor de LLM y embeddings

- **Contexto:** la Fase 1 depende de tener embeddings funcionando; conviene resolverlo
  antes, no en la sesión.
- **Decisión (estudiante, 2026-09-18):** **Ollama Cloud** (API OpenAI-compatible) para
  chat y embeddings.
- **Consecuencias:** `.env.example` define `LLM_BASE_URL/KEY/MODEL` y
  `EMBEDDINGS_BASE_URL/KEY/MODEL/DIMENSIONS` apuntando a Ollama Cloud. La interfaz
  `LlmProvider` sigue siendo la abstracción (el proveedor vive solo en `llm/`).
- **Pendiente (T-10):** verificar con un script mínimo que el endpoint de embeddings
  responde antes de la Fase 1.

## D5 — Estado en el frontend (RTK + sagas)

- **Contexto:** RTK + redux-saga con store placeholder en un front cuyo objetivo es
  probar el backend de IA.
- **Decisión (estudiante, 2026-09-18):** **mantener Redux Toolkit + redux-saga** — ya lo
  domina, no es un objetivo de práctica, pero sirve para el scaffold y la arquitectura del
  proyecto (el lab puede necesitar cancelación de corridas de agente, ej. `takeLatest`).
- **Consecuencias:** no se quita nada; slices/sagas los escribe el estudiante en su fase.

---

## Decisiones técnicas previas (scaffold, 2026-09-18)

- **Datos compartidos en `data/`** (raíz del repo): docs RAG en `data/docs/`,
  `data/payments.json`, frases en `data/embeddings/`, golden set en
  `data/golden/questions.json`. **Solo lectura para el código** (TS y Python); los
  derivados (SQLite, índices) van a rutas ignoradas por git. Reemplaza la ubicación
  previa `apps/server/seed/` (motivo: labs Python y TS leen el mismo dataset sin rutas
  cruzadas).
- **Monorepo npm workspaces** en la raíz (`apps/*`, `packages/*`).
- **`@precurso/contracts` se consume desde `dist/`**: hay que buildear (`build:contracts`)
  o dejar `watch:contracts`. Trade-off aceptado; dos terminales + watch en dev (T-12).
- **Vector store in-memory primero**; Qdrant/pgvector con Docker recién en las fases que
  los introducen; stack completo dockerizado en fase 15 ("Docker como ejercicio").
- **SQLite antes que pg** para las fases de tools (fase 7).
- **NestJS 11 + TS estricto** desde la fase 0 (el estudiante ya lo domina).
- **RTK + redux-saga** en el front (ver D5).
- **T-6 (audit multer):** actualizar `@nestjs/*` a la última versión estable que corrija la
  cadena (el server quedó en NestJS ^12 en el scaffold final); verificar con
  `npm audit --omit=dev` y registrar el resultado acá.
- **T-11 (zod):** decidir versión (3 vs 4, JSON Schema para tools) **antes de la Fase 6**
  y registrar acá.
