# Pre-Curso UTN — Progress

> Única fuente de verdad del avance (junto a `.github/tutor/concept-ledger.md`).
> Estados permitidos: `NOT_STARTED`, `IN_PROGRESS`, `NEEDS_REVIEW`, `APPROVED`.
> **Nunca usar COMPLETE.** Una fase solo es `APPROVED` tras doble validación (práctica +
> conceptual) con rúbrica /20, **Evidencia** (commit + comando + salida + cambio en vivo)
> y confirmación del estudiante. La escritura la hace el subagente `Registrador de Progreso`.

Tiers (decisión D2 = 8 h/sem → objetivo A + B): A imprescindible · B muy recomendable ·
C si hay tiempo · D durante el curso. Detalle por fase: `.github/docs/fases/fase-XX.md`.

## Calendario (8 h/semana, hasta el 18/11)

> Excepción (A2 + T-10 en Python): la **semana 1 son 10 h** — el
> entorno Python (`labs/python/`) + la verificación de embeddings con script Python
> (T-10) entran antes de las fases D, 0 y 1. Ninguna otra semana supera las 8 h.

| Semana | Fechas       | Contenido                                                                                           |
| ------ | ------------ | --------------------------------------------------------------------------------------------------- |
| 1      | 21–27 sep    | Entorno Python (`labs/python/`) + T-10 script embeddings (10 h): decisiones D1–D5, entorno, D, 0, 1 |
| 2      | 28 sep–4 oct | 2, 2b                                                                                               |
| 3      | 5–11 oct     | 3, 3E                                                                                               |
| 4      | 12–18 oct    | 4, 5 y mini-examen `Cx`                                                                             |
| 5      | 19–25 oct    | 6, 7                                                                                                |
| 6      | 26 oct–1 nov | 8, 9                                                                                                |
| 7      | 2–8 nov      | 10, **E1** (fecha tope 8/11)                                                                        |
| 8      | 9–15 nov     | Repaso espaciado + Tier C según horas                                                               |
| —      | 16–18 nov    | **Sin contenido nuevo.** Repaso, verificar cuentas/keys/entorno                                     |

Durante el curso (después del 18/11): fases **11, 12 y 14 se practican en
`labs/python/`** según la tabla de "justo a tiempo" (D1=TS+Python, D6).

## Resumen

| #     | Fase                                           | Tier | Horas est. | Estado      | Score | Fecha | Evidencia |
| ----- | ---------------------------------------------- | ---- | ---------- | ----------- | ----- | ----- | --------- |
| D     | Diagnóstico inicial                            | —    | 1          | NOT_STARTED | —     | —     | —         |
| 0     | Mapa mental de LLMs                            | A    | 4          | NOT_STARTED | —     | —     | —         |
| 1     | Tokens y embeddings                            | A    | 4          | NOT_STARTED | —     | —     | —         |
| 2     | Chunking                                       | A    | 5          | NOT_STARTED | —     | —     | —         |
| 2b    | Parent-Document Retrieval                      | A    | 3          | NOT_STARTED | —     | —     | —         |
| 3     | Primer RAG                                     | A    | 8          | NOT_STARTED | —     | —     | —         |
| 3E    | Evaluación temprana (recall@k, MRR)            | A    | 4          | NOT_STARTED | —     | —     | —         |
| 4     | Retrieval de calidad                           | A    | 5          | NOT_STARTED | —     | —     | —         |
| 5     | Reranking + query transformation               | A    | 5          | NOT_STARTED | —     | —     | —         |
| Cx    | Mini-examen de módulo RAG (no bloqueante)      | —    | 1          | NOT_STARTED | —     | —     | —         |
| 6     | Tool calling                                   | B    | 5          | NOT_STARTED | —     | —     | —         |
| 7     | Tools + SQL                                    | B    | 5          | NOT_STARTED | —     | —     | —         |
| 8     | RAG + tools                                    | B    | 4          | NOT_STARTED | —     | —     | —         |
| 9     | Agent loop + razonamiento agéntico             | B    | 6          | NOT_STARTED | —     | —     | —         |
| 10    | Estado y memoria                               | B    | 5          | NOT_STARTED | —     | —     | —         |
| E1    | **Examen global pre-LangGraph (bloqueante)**   | B    | 2          | NOT_STARTED | —     | —     | —         |
| 11    | LangGraph (Python, labs/python)                | C    | 6          | NOT_STARTED | —     | —     | —         |
| E2    | **Examen global pre-Multi-Agent (bloqueante)** | C    | 2          | NOT_STARTED | —     | —     | —         |
| 12    | Multi-agent (TS + CrewAI/AutoGen labs)         | D    | 6          | NOT_STARTED | —     | —     | —         |
| 13    | Seguridad + human-in-the-loop                  | C    | 4          | NOT_STARTED | —     | —     | —         |
| 14    | Evaluación completa (RAGAS en Python)          | D    | 6          | NOT_STARTED | —     | —     | —         |
| 15    | Proyecto final + Docker + examen final         | D    | 10         | NOT_STARTED | —     | —     | —         |
| P     | Puente a Python (labs/python)                  | C    | 3          | NOT_STARTED | —     | —     | —         |
| 3F    | Puente a frameworks (LlamaIndex/LangChain)     | C    | 3          | NOT_STARTED | —     | —     | —         |
| 3F-Py | Puente a Python (LangChain en labs/python)     | C    | 3          | NOT_STARTED | —     | —     | —         |
| 10b   | Contexto largo, compresión, GraphRAG           | C    | 2          | NOT_STARTED | —     | —     | —         |

## Diagnóstico inicial

- Fecha:
- Puntajes por pregunta (LLM / RAG / embeddings / vector DB / RAG vs tools / agente / memory / prompt injection):
- Gaps detectados:
- Fases a acelerar:
- Fases a reforzar:
- Plan ajustado:

## Phase 0 — Mapa mental de LLMs (Tier A · ~4h)

- Estado: NOT_STARTED
- Fecha:
- Score: __/20 (Conceptos __ · Aplicación __ · Trade-offs __ · Seguridad __)
- Conceptos aprobados:
- Conceptos débiles:
- Errores recurrentes:
- Ejercicios completados:
- Decisiones y trade-offs:
- Evidencia (commit · comando + salida · cambio en vivo):
- Notas:

## Phase 1 — Tokens y embeddings (Tier A · ~4h)

- Estado: NOT_STARTED
- Fecha:
- Score: __/20 (Conceptos __ · Aplicación __ · Trade-offs __ · Seguridad __)
- Conceptos aprobados:
- Conceptos débiles:
- Errores recurrentes:
- Ejercicios completados:
- Decisiones y trade-offs:
- Evidencia (commit · comando + salida · cambio en vivo):
- Notas:

## Phase 2 — Chunking (Tier A · ~5h)

- Estado: NOT_STARTED
- Fecha:
- Score: __/20 (Conceptos __ · Aplicación __ · Trade-offs __ · Seguridad __)
- Conceptos aprobados:
- Conceptos débiles:
- Errores recurrentes:
- Ejercicios completados:
- Decisiones y trade-offs:
- Evidencia (commit · comando + salida · cambio en vivo):
- Notas:

## Phase 2b — Parent-Document Retrieval (Tier A · ~3h)

- Estado: NOT_STARTED
- Fecha:
- Score: __/20 (Conceptos __ · Aplicación __ · Trade-offs __ · Seguridad __)
- Conceptos aprobados:
- Conceptos débiles:
- Errores recurrentes:
- Ejercicios completados:
- Decisiones y trade-offs:
- Evidencia (commit · comando + salida · cambio en vivo):
- Notas:

## Phase 3 — Primer RAG (Tier A · ~8h)

- Estado: NOT_STARTED
- Fecha:
- Score: __/20 (Conceptos __ · Aplicación __ · Trade-offs __ · Seguridad __)
- Conceptos aprobados:
- Conceptos débiles:
- Errores recurrentes:
- Ejercicios completados:
- Decisiones y trade-offs:
- Evidencia (commit · comando + salida · cambio en vivo):
- Notas:

## Phase 3E — Evaluación temprana (Tier A · ~4h) — línea base

- Estado: NOT_STARTED
- Fecha:
- Score: __/20 (Conceptos __ · Aplicación __ · Trade-offs __ · Seguridad __)
- Línea base (recall@k / MRR sobre RAG de la Fase 3):
- Catálogo de fallas detectado:
- Conceptos aprobados:
- Conceptos débiles:
- Errores recurrentes:
- Ejercicios completados:
- Decisiones y trade-offs:
- Evidencia (commit · comando + salida · cambio en vivo):
- Notas:

## Phase 4 — Retrieval de calidad (Tier A · ~5h)

- Estado: NOT_STARTED
- Fecha:
- Score: __/20 (Conceptos __ · Aplicación __ · Trade-offs __ · Seguridad __)
- Comparación vs línea base 3E:
- Conceptos aprobados:
- Conceptos débiles:
- Errores recurrentes:
- Ejercicios completados:
- Decisiones y trade-offs:
- Evidencia (commit · comando + salida · cambio en vivo):
- Notas:

## Phase 5 — Reranking + query transformation (Tier A · ~5h)

- Estado: NOT_STARTED
- Fecha:
- Score: __/20 (Conceptos __ · Aplicación __ · Trade-offs __ · Seguridad __)
- Comparación vs línea base 3E:
- Conceptos aprobados:
- Conceptos débiles:
- Errores recurrentes:
- Ejercicios completados:
- Decisiones y trade-offs:
- Evidencia (commit · comando + salida · cambio en vivo):
- Notas:

## Mini-examen Cx — bloque RAG (no bloqueante · 12-15 preguntas)

- Fecha:
- Resultado:
- Conceptos débiles detectados (→ ledger):
- Notas:

## Phase 6 — Tool calling (Tier B · ~5h)

- Estado: NOT_STARTED
- Fecha:
- Score: __/20 (Conceptos __ · Aplicación __ · Trade-offs __ · Seguridad __)
- Conceptos aprobados:
- Conceptos débiles:
- Errores recurrentes:
- Ejercicios completados:
- Decisiones y trade-offs:
- Evidencia (commit · comando + salida · cambio en vivo):
- Notas:

## Phase 7 — Tools + SQL (Tier B · ~5h)

- Estado: NOT_STARTED
- Fecha:
- Score: __/20 (Conceptos __ · Aplicación __ · Trade-offs __ · Seguridad __)
- Conceptos aprobados:
- Conceptos débiles:
- Errores recurrentes:
- Ejercicios completados:
- Decisiones y trade-offs:
- Evidencia (commit · comando + salida · cambio en vivo):
- Notas:

## Phase 8 — RAG + tools (Tier B · ~4h)

- Estado: NOT_STARTED
- Fecha:
- Score: __/20 (Conceptos __ · Aplicación __ · Trade-offs __ · Seguridad __)
- Conceptos aprobados:
- Conceptos débiles:
- Errores recurrentes:
- Ejercicios completados:
- Decisiones y trade-offs:
- Evidencia (commit · comando + salida · cambio en vivo):
- Notas:

## Phase 9 — Agent loop + razonamiento agéntico (Tier B · ~6h)

- Estado: NOT_STARTED
- Fecha:
- Score: __/20 (Conceptos __ · Aplicación __ · Trade-offs __ · Seguridad __)
- Conceptos aprobados:
- Conceptos débiles:
- Errores recurrentes:
- Ejercicios completados:
- Decisiones y trade-offs:
- Evidencia (commit · comando + salida · cambio en vivo):
- Notas:

## Phase 10 — Estado y memoria (Tier B · ~5h)

- Estado: NOT_STARTED
- Fecha:
- Score: __/20 (Conceptos __ · Aplicación __ · Trade-offs __ · Seguridad __)
- Conceptos aprobados:
- Conceptos débiles:
- Errores recurrentes:
- Ejercicios completados:
- Decisiones y trade-offs:
- Evidencia (commit · comando + salida · cambio en vivo):
- Notas:

## Examen global #1 — Pre-LangGraph (bloqueante · Tier B)

- Estado: NOT_STARTED
- Fecha:
- Preguntas:
- % correctas (umbral ≥ 90 %):
- Confusiones fundamentales (deben ser CERO):
- Conceptos que fallaron (para repaso dirigido):
- Veredicto (bloquea Phase 11; APROBADO / NEEDS_REVIEW — nunca COMPLETE):

## Phase 11 — LangGraph (Tier C · ~6h)

- Estado: NOT_STARTED
- Fecha:
- Score: __/20 (Conceptos __ · Aplicación __ · Trade-offs __ · Seguridad __)
- Conceptos aprobados:
- Conceptos débiles:
- Errores recurrentes:
- Ejercicios completados:
- Decisiones y trade-offs:
- Evidencia (commit · comando + salida · cambio en vivo):
- Notas:

## Examen global #2 — Pre-Multi-Agent (bloqueante · Tier C)

- Estado: NOT_STARTED
- Fecha:
- Resultado:
- Diseño propuesto (resumen):
- Faltantes detectados:
- Veredicto (bloquea Phase 12; APROBADO / NEEDS_REVIEW — nunca COMPLETE):

## Phase 12 — Multi-agent (Tier D · ~6h)

- Estado: NOT_STARTED
- Fecha:
- Score: __/20 (Conceptos __ · Aplicación __ · Trade-offs __ · Seguridad __)
- Conceptos aprobados:
- Conceptos débiles:
- Errores recurrentes:
- Ejercicios completados:
- Decisiones y trade-offs:
- Evidencia (commit · comando + salida · cambio en vivo):
- Notas:

## Phase 13 — Seguridad + human-in-the-loop (Tier C · ~4h)

- Estado: NOT_STARTED
- Fecha:
- Score: __/20 (Conceptos __ · Aplicación __ · Trade-offs __ · Seguridad __)
- Conceptos aprobados:
- Conceptos débiles:
- Errores recurrentes:
- Ejercicios completados:
- Decisiones y trade-offs:
- Evidencia (commit · comando + salida · cambio en vivo):
- Notas:

## Phase 14 — Evaluación completa (Tier D · ~6h)

- Estado: NOT_STARTED
- Fecha:
- Score: __/20 (Conceptos __ · Aplicación __ · Trade-offs __ · Seguridad __)
- Comparación de configuraciones (básico/hybrid/reranking):
- Framework de evaluación probado (RAGAS/Phoenix/TruLens):
- Conceptos aprobados:
- Conceptos débiles:
- Errores recurrentes:
- Ejercicios completados:
- Decisiones y trade-offs:
- Evidencia (commit · comando + salida · cambio en vivo):
- Notas:

## Phase 15 — Proyecto final + Docker + examen final (Tier D · ~10h)

- Estado: NOT_STARTED
- Fecha:
- Score: __/20 (Conceptos __ · Aplicación __ · Trade-offs __ · Seguridad __)
- Docker del stack (compose verificado):
- Entregables completados:
- Examen final (fecha · veredicto):
- Veredicto final del pre-curso:
- Conceptos aprobados:
- Conceptos débiles:
- Errores recurrentes:
- Ejercicios completados:
- Decisiones y trade-offs:
- Evidencia (commit · comando + salida · cambio en vivo):
- Notas:

## Phase P — Puente a Python (labs/python) (Tier C · ~3h · D1=TS+Python)

- Estado: NOT_STARTED
- Fecha:
- Score: __/20 (Conceptos __ · Aplicación __ · Trade-offs __ · Seguridad __)
- Tabla de mapeo TS ↔ Python:
- Conceptos aprobados:
- Conceptos débiles:
- Errores recurrentes:
- Ejercicios completados:
- Decisiones y trade-offs:
- Evidencia (commit · comando + salida · cambio en vivo):
- Notas:

## Phase 3F — Puente a frameworks (Tier C · ~3h)

- Estado: NOT_STARTED
- Fecha:
- Score: __/20 (Conceptos __ · Aplicación __ · Trade-offs __ · Seguridad __)
- Framework usado (LlamaIndex.TS / LangChain.js):
- Tabla comparativa (líneas · control · qué oculta):
- Comparación recall@k vs versión a mano:
- Conceptos aprobados:
- Conceptos débiles:
- Errores recurrentes:
- Ejercicios completados:
- Decisiones y trade-offs:
- Evidencia (commit · comando + salida · cambio en vivo):
- Notas:

## Phase 10b — Contexto largo, compresión y GraphRAG (Tier C · ~2h)

- Estado: NOT_STARTED
- Fecha:
- Score: __/20 (Conceptos __ · Aplicación __ · Trade-offs __ · Seguridad __)
- Cuadro comparativo (long-context vs RAG vs GraphRAG):
- Mini-lab grafo (si se hizo):
- Conceptos aprobados:
- Conceptos débiles:
- Errores recurrentes:
- Ejercicios completados:
- Decisiones y trade-offs:
- Evidencia (commit · comando + salida · cambio en vivo):
- Notas:
