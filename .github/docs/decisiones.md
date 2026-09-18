# Decisiones (ADR cortos)

Registro de decisiones del pre-curso: contexto → decisión → alternativa descartada → fecha.
Formato corto; una entrada por decisión. Referenciado por `copilot-instructions.md` y el protocolo.

---

## D1 — Lenguaje de los laboratorios del curso

- **Contexto:** CrewAI es Python-only; LangChain, LangGraph y LlamaIndex tienen versión JS
  pero el ecosistema y los ejemplos van primero en Python. Un pre-curso 100% TS deja un
  hueco si el curso se dicta en Python.
- **Decisión (estudiante, 2026-09-18):** el curso es/se asume en **Python**.
- **Consecuencias:** se agrega la **Fase P — Puente a Python** (Tier C): leer y modificar
  ejemplos mínimos de LangChain y CrewAI en `labs/python/` (carpeta aparte, sin tocar el
  monorepo TS). CrewAI en Fase 12 queda como demostración de lectura.
- **Alternativa descartada:** descartar Python del pre-curso (riesgo de barrera de idioma
  en la primera clase).
- **Pendiente de confirmar con el coordinador:** versión de Python/librerías del curso.

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
