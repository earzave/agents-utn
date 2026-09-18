---
name: scaffold-fase
description: 'Crea el scaffold del ejercicio de una fase del pre-curso: carpetas, archivos y TODOs marcados en apps/server, apps/web y packages/contracts, sin implementar la lógica. Use when: el estudiante ya entiende el concepto de la fase y pide la estructura para empezar a implementar, o el tutor aprueba generar el scaffold.'
user-invocable: true
---

# Scaffold de fase (estructura + TODOs, sin lógica)

Crea el slice correspondiente a la fase en el monorepo — `packages/contracts`
(si cambia el contrato FE/BE), `apps/server` (NestJS) y/o `apps/web` (Vite+React) —
con TODOs para el estudiante.

## Reglas

1. **Nada de lógica resuelta.** Todo cuerpo:
   `// TODO(estudiante): <qué implementar> — <pista conceptual, no la solución>`
2. NUNCA crear archivos de test (`.spec.ts` ni similares). Los specs del template Nest
   ya fueron eliminados: no regenerarlos.
3. No instalar dependencias nuevas sin pedido explícito del tutor/estudiante.
4. Estructura y capas según `.github/docs/arquitectura-precurso.md` (monorepo npm
   workspaces: `apps/server`, `apps/web`, `packages/contracts`).
5. Los READMEs del repo son SOLO 3: raíz, `apps/web` y `apps/server`. NO crear carpetas
   `docs/` dentro de los apps. Las notas/trade-offs de cada fase van a la sección de
   la fase en `.github/PROGRESS.md` (secciones para completar: Objetivo · Decisiones
   y trade-offs · Cómo ejecutar).
6. Si la fase cambia el contrato FE/BE, el scaffold empieza en `packages/contracts/src/`
   (nuevo schema zod + TODO) y re-exporta desde `src/index.ts` (línea lista para
   descomentar). Recordar al estudiante buildear/watch contracts para que TS vea el
   tipo nuevo.

## Procedimiento

1. Confirmar con el tutor la fase objetivo (leer `PROGRESS.md`).
2. La base YA EXISTE: monorepo raíz + `apps/server` (Nest CLI) + `apps/web` (Vite +
   shadcn/ui + RTK + sagas) + `packages/contracts` (linkeado en ambos apps). NO
   regenerar proyectos ni reinstalar dependencias sin pedido explícito.
3. Crear los archivos de la fase según el mapeo (los cuerpos van con TODO):

| Fase | Archivos |
|---|---|
| 0 | `packages/contracts/src/chat/chat.schema.ts` (zod, ya scaffoldado) + `apps/server/src/llm/llm-provider.ts` (interfaz) + `chat/chat.controller.ts` + módulo Nest del chat + registro en `app.module.ts`, reemplazo del AppController placeholder |
| 1 | script `apps/server/src/scripts/embeddings-similarity.ts` + `retrieval/embedder.ts` (stub) + dataset 10 frases en `apps/server/seed/` |
| 2 | `retrieval/chunker.ts` + `apps/server/seed/docs/{architecture,payments,sap,retries,troubleshooting}.md` |
| 3 | `retrieval/{indexer,vector-store,searcher}.ts` + `chat/ask.controller.ts` con fuentes + contrato del `/ask` en contracts + primera integración FE lab (`apps/web/src/features/chat/`) |
| 4 | `retrieval/keyword-search.ts` (BM25) + `hybrid-search.ts` + `retrieval/metadata.schema.ts` |
| 5 | `retrieval/reranker.ts` (simulado) |
| 6 | contracts: `ToolDefinition`/schemas de tools + `tools/tools.registry.ts` + `tools/schemas.ts` (zod→JSON Schema) + `tools/adapters.ts` + timeline de tool calls en FE lab |
| 7 | `infra/db/sqlite.ts` + migraciones seed + `payments/{repository,service}.ts` + contratos de payments en contracts |
| 8 | `orchestration/combined-answering.ts` (RAG+tools) |
| 9 | `orchestration/agent-loop.ts` (maxIterations, timeout, allowedTools) + indicador de iteración en FE lab |
| 10 | `memory/state-store.ts` + `orchestration/agent-state.ts` (persistencia JSON/SQLite) |
| 11 | `orchestration/graph/` (LangGraph solo si E1 aprobó) |
| 12 | `orchestration/multi-agent/` (solo si E2 aprobó) |
| 13 | `security/guardrails.ts` + doc RAG "envenenado" en seed + casos manuales |
| 14 | `evaluation/dataset/questions.json` (20 preguntas seed) + `evaluation/harness.ts` |
| 15 | integración final `orchestration/` + refinamiento del FE (lab + modo tutor) |

4. Agregar (o dejar listas) las secciones VACÍAS de la fase en `.github/PROGRESS.md`
   (Objetivo · Decisiones y trade-offs · Cómo ejecutar) para que el estudiante las
   use al documentar. No crear READMEs ni carpetas `docs/` en los apps.
5. Reportar: archivos creados, lista de TODOs en orden sugerido (empezando por
   contracts si cambió el contrato), qué NO se implementó a propósito.

## Prohibido

- Implementar la solución (parcial o total).
- Código "de ejemplo" que ya resuelva el TODO.
- Tests.
- Secrets reales en `.env.example`.
- Dockerfiles/compose en el scaffold base: solo se scaffoldea docker-compose cuando la
  fase introduce ese servicio (pg, Qdrant) — y el stack completo solo en fase 15
  (ver "Infraestructura y Docker" en arquitectura-precurso.md).
