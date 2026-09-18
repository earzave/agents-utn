# Ledger de conceptos

Niveles: 0 no lo puedo explicar · 1 lo explico con ayuda · 2 lo explico solo · 3 lo transfiero a un caso nuevo.
Ayuda usada: 0 ninguna · 1 pista conceptual · 2 estructura · 3 pseudocódigo/diagrama.
Intervalos de próximo repaso: nivel 0 → próxima sesión · 1 → 2 días · 2 → 5 días · 3 → 12 días.
Regla de actualización: sube un nivel si responde bien **sin pista** y **con un ejemplo distinto**; baja un nivel si falla.

| Concepto                                              | Fase | Nivel | Último test | Próximo repaso | Fallos | Ayuda | Confianza alta + error |
| ----------------------------------------------------- | ---- | ----- | ----------- | -------------- | ------ | ----- | ---------------------- |
| LLM (qué es, qué no es)                               | 0    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Token                                                 | 0    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Context window                                        | 0    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Prompt / roles (system/user/assistant)                | 0    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Temperature                                           | 0    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Structured output                                     | 0    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Hallucination                                         | 0    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Model vs API                                          | 0    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Embedding (¿qué representa?)                          | 1    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Dimensión de un vector                                | 1    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Cosine similarity                                     | 1    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Semantic search                                       | 1    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| HNSW / IVF (índices vectoriales, conceptual)          | 1    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Chunking (fixed, overlap, recursive)                  | 2    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Chunking semántico (conceptual)                       | 2    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Chunking por estructura (encabezados Markdown)        | 2    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Metadata por chunk                                    | 2    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Parent-Document Retrieval                             | 2b   | 0     | —           | próxima sesión | 0      | —     | 0                      |
| RAG (pipeline completo)                               | 3    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Responder solo con contexto (grounding)               | 3    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Recall@k / MRR (evaluación de retrieval)              | 3E   | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Catálogo de fallas del RAG estándar                   | 3E   | 0     | —           | próxima sesión | 0      | —     | 0                      |
| BM25 / keyword search                                 | 4    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Hybrid search                                         | 4    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Metadata filtering                                    | 4    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Reranking (cross-encoder vs simulado)                 | 5    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Query transformation (reescritura, multi-query, HyDE) | 5    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| LlamaIndex / LangChain (qué ocultan, qué aportan)     | 3F   | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Tool calling                                          | 6    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Tool schema (JSON Schema + zod)                       | 6    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Tool ≠ conocimiento (RAG busca, tool ejecuta)         | 6    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Repository/service/tool adapter                       | 7    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| SQL arbitrario del LLM (por qué está prohibido)       | 7    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| RAG + tools (composición)                             | 8    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Agent loop (while !finished)                          | 9    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| ReAct (conceptual)                                    | 9    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Plan-and-execute (conceptual)                         | 9    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Reflexión (conceptual)                                | 9    | 0     | —           | próxima sesión | 0      | —     | 0                      |
| CONTEXT vs STATE vs MEMORY                            | 10   | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Persistencia de estado del agente                     | 10   | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Contexto largo vs RAG (conceptual)                    | 10b  | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Compresión de contexto                                | 10b  | 0     | —           | próxima sesión | 0      | —     | 0                      |
| GraphRAG (entidades/relaciones, cuándo no conviene)   | 10b  | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Nodes / edges / conditional edges (LangGraph)         | 11   | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Checkpoints                                           | 11   | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Supervisor + handoffs                                 | 12   | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Cuándo NO usar multi-agent                            | 12   | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Human-in-the-loop                                     | 13   | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Prompt injection (directa e indirecta)                | 13   | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Least privilege / allowlist de tools                  | 13   | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Fail-closed policy layer                              | 13   | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Faithfulness / groundedness                           | 14   | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Answer relevance                                      | 14   | 0     | —           | próxima sesión | 0      | —     | 0                      |
| RAGAS / Phoenix / TruLens (qué miden)                 | 14   | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Tracing / observabilidad                              | 14   | 0     | —           | próxima sesión | 0      | —     | 0                      |
| Puente a Python (LangChain/CrewAI en labs/python)     | P    | 0     | —           | próxima sesión | 0      | —     | 0                      |

## Exit tickets (cierre de sesión)

> El Registrador agrega un bloque por sesión: fecha · qué entendí · qué duda me queda ·
> qué predigo que voy a olvidar.
