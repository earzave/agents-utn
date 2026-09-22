---
name: scaffold-fase
description: "Crea el scaffold del ejercicio de una fase del pre-curso: carpetas, archivos y TODOs marcados en apps/server, apps/web y packages/contracts, sin implementar la lógica. Use when: el estudiante ya entiende el concepto de la fase y pide la estructura para empezar a implementar, o el tutor aprueba generar el scaffold."
user-invocable: true
---

# Scaffold de fase (estructura + TODOs, sin lógica)

Crea el slice correspondiente a la fase en el monorepo — `packages/contracts`
(si cambia el contrato FE/BE), `apps/server` (NestJS) y/o `apps/web` (Vite+React) —
con TODOs para el estudiante.

## Reglas

1. **Nada de lógica resuelta.** Todo cuerpo:
   `// TODO(estudiante): <qué implementar> — <pista conceptual, no la solución>`
   (en Python: `# TODO(estudiante): ...`).
2. NUNCA crear archivos de test (`.spec.ts`, `test_*.py` ni similares). Los specs del
   template Nest ya fueron eliminados: no regenerarlos.
3. No instalar dependencias nuevas sin pedido explícito del tutor/estudiante (en
   `labs/python/`: NUNCA instalar dependencias ni crear el venv — eso es del estudiante).
4. Estructura y capas según `.github/docs/arquitectura-precurso.md` (monorepo npm
   workspaces: `apps/server`, `apps/web`, `packages/contracts`; labs en `labs/python/`).
5. Los READMEs del repo son SOLO 3: raíz, `apps/web` y `apps/server`. NO crear carpetas
   `docs/` dentro de los apps ni READMEs dentro de `labs/python/`. Las notas/trade-offs
   de cada fase van a la sección de la fase en `.github/PROGRESS.md` (secciones para
   completar: Objetivo · Decisiones y trade-offs · Cómo ejecutar).
6. **Frontend 100% IA (D9):** si la fase requiere cambio en `apps/web`, implementarlo
   completo (sin `TODO(estudiante)`); es lab visual, no práctica del curso (mensaje de
   commit sugerido: `fe(phase-N)`). Los TODOs del estudiante van solo en `apps/server`,
   `packages/contracts` y `labs/python/`.
7. Si la fase cambia el contrato FE/BE, el scaffold empieza en `packages/contracts/src/`
   (nuevo schema zod + TODO) y re-exporta desde `src/index.ts` (línea lista para
   descomentar). Recordar al estudiante buildear/watch contracts para que TS vea el
   tipo nuevo. El lado FE de esa integración lo implementa la IA (D9).
8. Los datos compartidos viven en **`data/`** (raíz del repo, **solo lectura** para el
   código): docs RAG en `data/docs/`, payments en `data/payments.json`, frases en
   `data/embeddings/`, golden set en `data/golden/questions.json`. NUNCA recrear
   `apps/server/seed/` ni duplicar datos en `labs/python/`.
9. En `labs/python/` los TODOs van como `# TODO(estudiante): ...`; nunca lógica
   resuelta, nunca dependencias instaladas, nunca tests, ningún README.

## Procedimiento

1. Confirmar con el tutor la fase objetivo (leer `PROGRESS.md`).
2. La base YA EXISTE: monorepo raíz + `apps/server` (Nest CLI) + `apps/web` (Vite +
   shadcn/ui + RTK + sagas) + `packages/contracts` (linkeado en ambos apps). NO
   regenerar proyectos ni reinstalar dependencias sin pedido explícito.
3. Crear los archivos de la fase según el mapeo (los cuerpos van con TODO):

| Fase  | Archivos                                                                                                                                                                                                                                        |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0     | `packages/contracts/src/chat/chat.schema.ts` (zod, ya scaffoldado) + `apps/server/src/llm/llm-provider.ts` (interfaz) + `chat/chat.controller.ts` + módulo Nest del chat + registro en `app.module.ts`, reemplazo del AppController placeholder |
| 1     | script `apps/server/src/scripts/embeddings-similarity.ts` + `retrieval/embedder.ts` (stub) + dataset 10 frases en `data/embeddings/` (raíz del repo)                                                                                            |
| 2     | `retrieval/chunker.ts` + `data/docs/{architecture,payments,sap,retries,troubleshooting}.md`                                                                                                                                                     |
| 3     | `retrieval/{indexer,vector-store,searcher}.ts` + `chat/ask.controller.ts` con fuentes + contrato del `/ask` en contracts + primera integración FE lab (`apps/web/src/features/chat/`)                                                           |
| 4     | `retrieval/keyword-search.ts` (BM25) + `hybrid-search.ts` + `retrieval/metadata.schema.ts`                                                                                                                                                      |
| 5     | `retrieval/reranker.ts` (simulado)                                                                                                                                                                                                              |
| 6     | contracts: `ToolDefinition`/schemas de tools + `tools/tools.registry.ts` + `tools/schemas.ts` (zod→JSON Schema) + `tools/adapters.ts` + timeline de tool calls en FE lab                                                                        |
| 7     | `infra/db/sqlite.ts` + migraciones seed (desde `data/payments.json`) + `payments/{repository,service}.ts` + contratos de payments en contracts                                                                                                  |
| 8     | `orchestration/combined-answering.ts` (RAG+tools)                                                                                                                                                                                               |
| 9     | `orchestration/agent-loop.ts` (maxIterations, timeout, allowedTools) + indicador de iteración en FE lab                                                                                                                                         |
| 10    | `memory/state-store.ts` + `orchestration/agent-state.ts` (persistencia JSON/SQLite)                                                                                                                                                             |
| 11    | `labs/python/graph/` (LangGraph en Python, solo si E1 aprobó) — TODOs como `# TODO(estudiante): ...`                                                                                                                                            |
| 12    | `orchestration/multi-agent/` (TS, solo si E2 aprobó) + `labs/python/crewai-demo.py` (ejemplo CrewAI con TODOs)                                                                                                                                  |
| 13    | `security/guardrails.ts` + doc RAG "envenenado" en `data/docs/` + casos manuales                                                                                                                                                                |
| 14    | `evaluation/dataset/questions.json` (20 preguntas seed) + `evaluation/harness.ts` + `labs/python/ragas-demo.py` (RAGAS con TODOs)                                                                                                               |
| 15    | integración final `orchestration/` + refinamiento del FE (lab + modo tutor)                                                                                                                                                                     |
| 3F-Py | `labs/python/`: script/embedding de LangChain con TODOs (la estructura de carpetas del lab la crea el estudiante con su venv; solo archivos marcados con `# TODO(estudiante)`)                                                                  |

4. Agregar (o dejar listas) las secciones VACÍAS de la fase en `.github/PROGRESS.md`
   (Objetivo · Decisiones y trade-offs · Cómo ejecutar) para que el estudiante las
   use al documentar. No crear READMEs ni carpetas `docs/` en los apps.
5. **NUNCA ejecutar commits** (ni `git commit`, ni `git push`): solo sugerir el mensaje
   (formato según autoría del contenido, punto 5 del reporte) y el momento de commitear;
   el estudiante revisa el diff y commitea.

## Prohibido

- Implementar la solución (parcial o total).
- Código "de ejemplo" que ya resuelva el TODO.
- Ejecutar commits (solo se sugieren mensajes y momentos; el estudiante commitea).
- Tests.
- Secrets reales en `.env.example`.
- Dockerfiles/compose en el scaffold base: solo se scaffoldea docker-compose cuando la
  fase introduce ese servicio (pg, Qdrant) — y el stack completo solo en fase 15
  (ver "Infraestructura y Docker" en arquitectura-precurso.md).
