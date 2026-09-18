# Curriculum — Temario oficial UTN mapeado al pre-curso

Curso oficial: **Desarrollo de Aplicaciones de IA con RAG y Arquitectura de Agentes** (UTN FRBA, Sceu).
Inicio 18/11/2026 · 14 semanas · jueves 18-20h AR · 12 clases en 3 módulos.
[página del curso](https://sceu.frba.utn.edu.ar/e-learning/detalle/curso/185834/desarrollo-de-aplicaciones-de-inteligencia-artificial-con-rag-y-arquitectura-de-agentes?id=186006)

Frameworks del curso: **LangChain, LlamaIndex, LangGraph, CrewAI**.
Vector DBs mencionadas: Pinecone, Weaviate, Milvus, Supabase.
Evaluación de sistemas: **RAGAS, Phoenix, TruLens**.
Modelos de frontera: GPT-4o, Claude 3.5, Gemini Pro.
Requisitos previos (según la web): POO/funcional, tipado, estructuras nativas, `async/await`,
consumo de APIs.

> **Fuente:** títulos de clases y temas de la web oficial (consultado 2026-09-18).
> La web lista 3 módulos y "12 clases" pero solo muestra los títulos de 10: faltan la
> Clase 1 del Módulo 2 y la Clase 1 del Módulo 3 → marcadas **TBC** acá. No inventar su contenido.
> La **numeración global 1–12 es inferida** (M1 = 1–4, M2 = 5–8, M3 = 9–12): confirmar con el coordinador.

---

## Temario UTN oficial (títulos reales publicados)

### Módulo 1 — Arquitectura RAG de Alta Precisión y Gestión de Datos

| Clase | Título oficial                                    | Temas publicados                                                                                                                                  |
| ----- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| M1·1  | Estrategias de Segmentación Avanzada              | Limitaciones del RAG estándar en producción · chunking semántico y recursivo · Parent-Document Retrieval · impacto de la estructura del documento |
| M1·2  | Bases Vectoriales y Embeddings de Alta Eficiencia | embeddings, dimensiones, índices, vector DBs                                                                                                      |
| M1·3  | Recuperación Híbrida y Filtrado                   | vector search + keyword/BM25, metadata filtering                                                                                                  |
| M1·4  | Re-ranking y Transformación de Consultas          | reranking, query rewriting/expansión                                                                                                              |

### Módulo 2 — Contexto Avanzado, Gráficos de Conocimiento y Evaluación

| Clase | Título oficial                                                  | Temas                                                                                                    |
| ----- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| M2·1  | **TBC — título no publicado en la web (consultado 2026-09-18)** | —                                                                                                        |
| M2·2  | Evaluación de Sistemas RAG                                      | métricas de retrieval, faithfulness, groundedness, answer relevance; RAGAS / Phoenix / TruLens; datasets |
| M2·3  | Fundamentos del Razonamiento Agéntico                           | ReAct, planificación, reflexión (título oficial; contenido esperado)                                     |
| M2·4  | Function Calling y Tool Design                                  | tool schema, JSON Schema, validación, tools sobre APIs y DBs                                             |

### Módulo 3 — Orquestación Agéntica, Sistemas Multi-Agente y Despliegue

| Clase | Título oficial                                                  | Temas                                                                         |
| ----- | --------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| M3·1  | **TBC — título no publicado en la web (consultado 2026-09-18)** | —                                                                             |
| M3·2  | Orquestación con LangGraph                                      | grafos de estado, nodes/edges, checkpoints                                    |
| M3·3  | Sistemas Multi-Agente y Seguridad                               | supervisor, handoffs, CrewAI; seguridad agéntica                              |
| M3·4  | Taller de Integración y Proyecto Final                          | integración; no hay clase "Despliegue" (aparece solo en el título del módulo) |

---

## Matriz de cobertura (tema UTN → fase → estado → acción)

| #   | Tema UTN                                    | Fase actual                                                  | Estado   | Acción |
| --- | ------------------------------------------- | ------------------------------------------------------------ | -------- | ------ |
| 1   | Limitaciones del RAG estándar en producción | 3E (catálogo de fallas)                                      | Cubierto | —      |
| 2   | Chunking semántico y recursivo              | 2 (recursivo ✓, semántico conceptual)                        | Cubierto | —      |
| 3   | Parent-Document Retrieval                   | **2b**                                                       | Cubierto | —      |
| 4   | Impacto de la estructura del documento      | 2 (metadata) + 2b (chunking por encabezados)                 | Cubierto | —      |
| 5   | Bases vectoriales e índices (HNSW/IVF)      | 1 (dimensión ✓) + cuadro comparativo #18                     | Cubierto | —      |
| 6   | Recuperación híbrida y filtrado             | 4                                                            | Cubierto | —      |
| 7   | Re-ranking                                  | 5                                                            | Cubierto | —      |
| 8   | Transformación de consultas                 | 5 (reescritura, multi-query, HyDE)                           | Cubierto | —      |
| 9   | Contexto avanzado                           | 10b (long-context vs RAG, compresión)                        | Cubierto | —      |
| 10  | Gráficos de conocimiento / GraphRAG         | 10b (conceptual + mini-lab opcional)                         | Cubierto | —      |
| 11  | Evaluación (RAGAS/Phoenix/TruLens)          | 3E (temprana) + 14 (completa)                                | Cubierto | —      |
| 12  | Fundamentos del razonamiento agéntico       | 9 (loop + ReAct + plan-and-execute + reflexión)              | Cubierto | —      |
| 13  | Function Calling y Tool Design              | 6–7                                                          | Cubierto | —      |
| 14  | Orquestación con LangGraph                  | 11                                                           | Cubierto | —      |
| 15  | Multi-agente y Seguridad                    | 12–13                                                        | Cubierto | —      |
| 16  | Taller de integración / proyecto final      | 15                                                           | Cubierto | —      |
| 17  | LangChain y LlamaIndex                      | 3F (puente a frameworks)                                     | Cubierto | —      |
| 18  | Pinecone / Weaviate / Milvus / Supabase     | 1 (cuadro comparativo conceptual; pgvector ≈ Supabase)       | Cubierto | —      |
| 19  | GPT-4o / Claude / Gemini vía API            | 0 (tabla comparativa de proveedores)                         | Cubierto | —      |
| 20  | CrewAI                                      | 12 (demostración de lectura) + P (labs/python, D1=TS+Python) | Cubierto | —      |
| 21  | Despliegue                                  | 15 (Docker del stack)                                        | Cubierto | —      |

---

## Mapeo fases del pre-curso → clases UTN

| Fase                                              | Clase UTN                                 |
| ------------------------------------------------- | ----------------------------------------- |
| 0 — Mapa mental de LLMs                           | base previa + modelos de frontera vía API |
| 1 — Tokens y embeddings                           | M1·2                                      |
| 2 — Chunking                                      | M1·1                                      |
| 2b — Parent-Document Retrieval                    | M1·1                                      |
| 3 — Primer RAG                                    | M1·1 y M1·2                               |
| 3E — Evaluación temprana (recall@k, MRR)          | M2·2 (anticipada)                         |
| 3F — Puente a frameworks (LlamaIndex/LangChain)   | transversal (objetivo del curso)          |
| 4 — Retrieval de calidad                          | M1·3                                      |
| 5 — Reranking + transformación de consultas       | M1·4                                      |
| 6 — Tool calling                                  | M2·4                                      |
| 7 — Tools + SQL                                   | M2·4                                      |
| 8 — RAG + tools                                   | M2·4                                      |
| 9 — Agent loop + ReAct/plan-and-execute/reflexión | M2·3                                      |
| 10 — Estado y memoria                             | M2·1 (TBC)                                |
| 10b — Contexto largo, compresión, GraphRAG        | título del M2                             |
| — **E1 (bloquea fase 11)**                        | —                                         |
| 11 — LangGraph (Python, labs/python)              | M3·2                                      |
| — **E2 (bloquea fase 12)**                        | —                                         |
| 12 — Multi-agent (TS + CrewAI/AutoGen labs)       | M3·3                                      |
| 13 — Seguridad + human-in-the-loop                | M3·3                                      |
| 14 — Evaluación completa (RAGAS en Python)        | M2·2                                      |
| 15 — Proyecto final + Docker + examen final       | M3·4                                      |

> Seguridad vive en M3·3 junto a multi-agente, pero es **transversal** (se practica desde
> la Fase 6 con tools autorizadas y policies).

---

## Fases del pre-curso (resumen)

> El detalle completo (objetivo, ejercicio, criterios medibles, semillas de preguntas,
> casos de aceptación manuales, DoD) vive en `docs/fases/fase-XX.md` — un archivo por fase.

| Fase  | Nombre                                         | Tier | Horas est. | Detalle                                  |
| ----- | ---------------------------------------------- | ---- | ---------- | ---------------------------------------- |
| D     | Diagnóstico inicial                            | —    | 1          | `skills/diagnostico`                     |
| 0     | Mapa mental de LLMs                            | A    | 4          | [`fase-00.md`](fases/fase-00.md)         |
| 1     | Tokens y embeddings                            | A    | 4          | [`fase-01.md`](fases/fase-01.md)         |
| 2     | Chunking                                       | A    | 5          | [`fase-02.md`](fases/fase-02.md)         |
| 2b    | Parent-Document Retrieval                      | A    | 3          | [`fase-02b.md`](fases/fase-02b.md)       |
| 3     | Primer RAG                                     | A    | 8          | [`fase-03.md`](fases/fase-03.md)         |
| 3E    | Evaluación temprana (recall@k, MRR)            | A    | 4          | [`fase-03E.md`](fases/fase-03E.md)       |
| 4     | Retrieval de calidad                           | A    | 5          | [`fase-04.md`](fases/fase-04.md)         |
| 5     | Reranking + query transformation               | A    | 5          | [`fase-05.md`](fases/fase-05.md)         |
| 3F-Py | Puente a Python (LangChain en labs/python)     | C    | 3          | [`fase-03F-Py.md`](fases/fase-03F-Py.md) |
| Cx    | Mini-examen de módulo RAG (no bloqueante)      | —    | 1          | después de la fase 5                     |
| 6     | Tool calling                                   | B    | 5          | [`fase-06.md`](fases/fase-06.md)         |
| 7     | Tools + SQL                                    | B    | 5          | [`fase-07.md`](fases/fase-07.md)         |
| 8     | RAG + tools                                    | B    | 4          | [`fase-08.md`](fases/fase-08.md)         |
| 9     | Agent loop + ReAct/plan-execute/reflexión      | B    | 6          | [`fase-09.md`](fases/fase-09.md)         |
| 10    | Estado y memoria                               | B    | 5          | [`fase-10.md`](fases/fase-10.md)         |
| E1    | **Examen global pre-LangGraph (bloqueante)**   | B    | 2          | `skills/examen-global`                   |
| 11    | LangGraph (Python, labs/python — D6)           | C    | 6          | [`fase-11.md`](fases/fase-11.md)         |
| E2    | **Examen global pre-Multi-Agent (bloqueante)** | C    | 2          | `skills/examen-global`                   |
| 12    | Multi-agent (TS + CrewAI/AutoGen labs)         | D    | 6          | [`fase-12.md`](fases/fase-12.md)         |
| 13    | Seguridad + human-in-the-loop                  | C    | 4          | [`fase-13.md`](fases/fase-13.md)         |
| 14    | Evaluación completa (RAGAS en Python)          | D    | 6          | [`fase-14.md`](fases/fase-14.md)         |
| 15    | Proyecto final + Docker + examen final         | D    | 10         | [`fase-15.md`](fases/fase-15.md)         |
| P     | Puente a Python (labs/python) — D1=TS+Python   | C    | 3          | [`fase-P.md`](fases/fase-P.md)           |
| 3F    | Puente a frameworks (LlamaIndex/LangChain)     | C    | 3          | [`fase-03F.md`](fases/fase-03F.md)       |
| 10b   | Contexto largo, compresión, GraphRAG           | C    | 2          | [`fase-10b.md`](fases/fase-10b.md)       |

**Tiers** (decisión D2 = 8 h/semana → objetivo **A + B** antes del 18/11; C si hay tiempo;
D durante el curso). Detalle del calendario en `decisiones.md` y `PROGRESS.md` (columna Tier).

### Phase 0 — Mapa mental de LLMs

LLM, tokens, context window, prompt, roles system/user/assistant, temperature, structured
output, hallucination, inference, model vs API. **Tabla comparativa de proveedores**
(GPT-4o / Claude 3.5 / Gemini Pro / GLM: contexto, costo, latencia, soporte de tools —
contexto, no elección de stack).
Ejercicio: `POST /chat` con system prompt, temperatura configurable, límite de tokens,
respuesta estructurada.

### Phase 1 — Tokens y embeddings

Tokenización, embeddings, vector, dimensión, cosine similarity, semantic search.
**Nivel conceptual:** HNSW/IVF (índices), costo de embeddings, normalización de vectores.
Ejercicio: script con 10 frases (pagos/SAP/Docker, en `data/embeddings/`), similitud vs
3 queries. **T-10 ANTES:** verificar el proveedor de embeddings con un script mínimo en
Python (lo escribe el estudiante en `labs/python/`; obliga a tener el entorno listo en
semana 1).
**Pregunta ancla:** "¿Por qué embeddings encuentran significado aunque las palabras no coincidan?"

### Phase 2 — Chunking

Fixed-size con overlap → recursive. **Chunking por encabezados Markdown** y **chunking
semántico** (conceptual + ejercicio corto). Metadata por chunk (documentId, title, section,
source, chunkIndex). Preguntas: chunk demasiado grande/pequeño, por qué metadata, por qué
no basta partir cada N caracteres.

### Phase 2b — Parent-Document Retrieval _(nueva)_

Chunks hijos para buscar, documento padre para responder. Chunking por encabezados
Markdown + metadata de jerarquía (parent_id). Comparar retrieval por chunk pequeño vs
respuesta con contexto padre.

### Phase 3 — Primer RAG

Pipeline completo: ingestion → chunking → embeddings → vector store → query embedding →
similarity → top-K → LLM con contexto → respuesta con fuentes.
**Regla crítica:** el prompt exige responder solo con contexto recuperado y admitir
cuando no hay información suficiente. Testear: pregunta cubierta, parcial, ausente, y
pregunta que intenta inducir invención.

### Phase 3E — Evaluación mínima temprana _(nueva)_

Conjunto de ~15 preguntas doradas (`data/golden/questions.json`: question,
expectedAnswer, expectedSources — compartido con RAGAS en la Fase 14); medir **recall@k** y
**MRR** sobre el RAG de la Fase 3. **Catálogo de fallas del RAG estándar**: chunk mal
cortado, consulta ambigua, pregunta multi-hop, dato desactualizado. Las fases 4 y 5 se
comparan contra estos números, no contra intuición.

### Phase 3F — Puente a frameworks _(nueva, Tier C)_

Rehacer el RAG de la Fase 3 con **LlamaIndex.TS o LangChain.js** y comparar: líneas de
código, control, qué oculta el framework. Primero a mano (fase 3), después el framework.

### Phase 4 — Retrieval de calidad

Vector vs keyword (BM25) vs hybrid; metadata filtering (service, environment,
documentType, version, topic). Comparar contra la línea base de 3E.

### Phase 5 — Reranking + transformación de consultas

Pipeline: retrieval 20 → rerank → 5 → LLM. Reranker simulado primero. **Query
transformation**: reescritura, multi-query, HyDE (conceptual + ejercicio corto). Comparar
precisión/costo/latencia/complejidad contra 3E.

### Mini-examen Cx (no bloqueante)

Al terminar la Fase 5: 12-15 preguntas de todo el bloque RAG. Alimenta el ledger (no es
bloqueante; los bloqueantes son E1, E2 y final).

### Phase 6 — Tool calling

RAG = buscar conocimiento; Tool = ejecutar acción. Tools: `getPayment`, `getPaymentEvents`,
`getRetryHistory` sobre datos ficticios. El LLM decide cuándo; el código controla qué.
JSON Schema + validación + autorización. **Nunca SQL arbitrario generado por el LLM.**

> Patrones rescatados: `analisis-agents-sdk-demos.md` §Phase 6 — tools definidas con
> schema, ids sensibles fuera de los args del modelo (run context), tools read-only sin
> policy layer.

### Phase 7 — Tools + SQL

DB real (payments, payment_events, payment_retries) con repository/service/tool adapter.
`executeSql(sqlFromLLM)` está PROHIBIDO; solo tools de dominio.

> Patrones rescatados: `analisis-agents-sdk-demos.md` §Phase 7 — toda mutación pasa por
> helpers/repositorio que validan (repository → service → tool adapter con zod).

### Phase 8 — RAG + tools

Pregunta integradora: "¿Por qué falló el payment 12345?" → tool payment + tool events +
RAG de docs + síntesis. Diferenciar en la respuesta: hechos de DB, info de docs, inferencias.

### Phase 9 — Agent loop + razonamiento agéntico

Loop manual `while (!finished)`: toolCall → result → state, con max iterations, timeout,
allowed tools, error handling, cancellation. Sin LangGraph todavía. Comparar con chain.
**Conceptos de la Clase M2·3:** ReAct, plan-and-execute, reflexión — compararlos con el
loop manual.

> Patrones rescatados: `analisis-agents-sdk-demos.md` §Phase 9 — el Runner del SDK es la
> versión "comprada" del loop; comparar recién DESPUÉS de implementarlo a mano.

### Phase 10 — Estado y memoria

CONTEXT (lo que viaja al modelo) vs STATE (estado del workflow) vs MEMORY (persistido
entre interacciones). `AgentState` con persistencia simple. Ejemplo: "Analizá el payment
12345." → luego → "¿Y tuvo retries?" sin re-pedir todo.

> Patrones rescatados: `analisis-agents-sdk-demos.md` §Phase 10 — run context = STATE que
> viaja a tools pero NUNCA al modelo; session persistida = MEMORY.

### Examen global #1 (bloqueante) → ver `protocolo-tutor.md` §6

### Phase 3F-Py — Puente a Python _(nueva, Tier C, D1=TS+Python)_

Portar el RAG de la Fase 3 a **LangChain en Python** (`labs/python/`): entorno virtual +
dependencias fijadas (D8), Pydantic en los límites, tabla de mapeo TS ↔ Python y
comparación del JSON Schema de zod vs Pydantic. Requisito: entorno creado y verificado
(el script T-10 de la Fase 1 ya obliga a esto).

### Phase 11 — LangGraph (Python)

Recrear el caso "investigar un payment fallido" como grafo de estados en
`labs/python/` (LangGraph en Python, D6): nodes, edges, conditional edges, state, loop,
termination, checkpoint. Comparar con el agent loop manual en TypeScript de la Fase 9:
qué aporta el grafo, qué decide el LLM, qué queda determinístico.

### Examen global #2 (bloqueante) → ver `protocolo-tutor.md` §6

### Phase 12 — Multi-agent

Supervisor + Payment Agent + SAP Agent + Documentation Agent. Responsabilidad y contexto
limitados, tools específicas, handoffs tipados. Documentar cuándo multi-agent **aumenta**
complejidad/latencia/costo/superficie de ataque y cuándo aporta valor. La implementación
manual (supervisor + handoffs tipados) sigue en TypeScript; **CrewAI y AutoGen: leer y
modificar un ejemplo mínimo en `labs/python/`**.

> Patrones rescatados: `analisis-agents-sdk-demos.md` §Phase 12 — triage/supervisor enruta
> (no resuelve), agentes con tools propias, handoffs habilitados por estado
> (conditional edge pre-LangGraph).

### Phase 13 — Seguridad + human-in-the-loop

Prompt injection (directa e indirecta), data exfiltration, tool abuse, excessive agency,
input/output validation. **Human-in-the-loop explícito** (emparejada con la 12: el curso
las dicta en la misma clase). Ataques de práctica: documento RAG con "instrucciones"
hostiles (tratarlo como DATA) y usuario pidiendo operaciones destructivas (la arquitectura
debe impedirlo aunque el LLM lo pida). Reglas: least privilege, allowlist de tools,
schemas estrictos, límites, auditoría, human approval.

> Patrones rescatados: `analisis-agents-sdk-demos.md` §Phase 13 — policy layer
> determinística fail-closed (re-ejecutada dentro de la tool), confirmation gate por turno
> de propuesta, guardrail determinístico vs LLM judge, respuestas deliberadamente vagas
> ante cross-account (anti-enumeración).

### Phase 14 — Evaluación

Dataset `data/golden/questions.json` con ≥20 preguntas (question, expectedAnswer,
expectedSources). Medir retrieval quality, answer relevance, **faithfulness,
groundedness**, latency, tokens, costo. Comparar: RAG básico vs hybrid vs reranking.
**RAGAS en Python** (`labs/python/`) en modo demostración + tracing básico; comparar en
`PROGRESS.md` las métricas de la 3E (recall@k, MRR) con las de RAGAS.

### Phase 15 — Proyecto final

"Payment Investigation Agent" con: RAG, vector search, metadata filtering, tool calling,
pagos/eventos/retries, agent loop, state, memory, LangGraph, evaluación, seguridad,
logs/tracing, **Docker del stack completo**. + **Examen final** con ejercicio nuevo (ver protocolo §6).

### Phase P — Puente a Python _(nueva, D1=TS+Python)_

En `labs/python/` (carpeta aparte, sin tocar el monorepo TS): leer y modificar un ejemplo
mínimo de **LangChain** y uno de **CrewAI** en Python. Objetivo: que el idioma no sea la
barrera en la primera clase del curso.
