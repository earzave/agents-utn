# Glosario — conceptos que debo poder explicar al final del pre-curso

Uso: el tutor consulta este checklist en los exámenes globales y en la PHASE REVIEW.
Cada concepto debe poder explicarse **con palabras propias + analogía backend**, no de memoria.

> Cada concepto de este glosario arranca en nivel 0 en `.github/tutor/concept-ledger.md`
> (repaso espaciado: 0 → próxima sesión · 1 → 2 días · 2 → 5 días · 3 → 12 días).

## LLM

- [ ] ¿Qué es un LLM?
- [ ] ¿Qué es un token?
- [ ] ¿Qué es context window?
- [ ] ¿Qué es hallucination?
- [ ] prompt vs contexto
- [ ] temperature y sus trade-offs
- [ ] structured output
- [ ] model vs API
- [ ] modelos de frontera vía API (GPT-4o / Claude / Gemini / GLM: contexto, costo, latencia, tools)

## Embeddings

- [ ] ¿Qué es un embedding?
- [ ] ¿Qué representa?
- [ ] ¿Qué significa similitud vectorial (cosine)?
- [ ] dimensión y por qué importa
- [ ] tokenización (y por qué embeddings ≠ tokens)

## RAG

- [ ] ¿Qué problema resuelve?
- [ ] diferencia retrieval vs generation
- [ ] ¿Qué es chunking? (fixed, overlap, recursive, semántico)
- [ ] chunking por estructura (encabezados Markdown)
- [ ] parent-document retrieval
- [ ] ¿Qué es metadata y para qué sirve?
- [ ] ¿Qué es hybrid search?
- [ ] ¿Qué es BM25 y cuándo aporta?
- [ ] ¿Qué es reranking?
- [ ] query transformation: reescritura, multi-query, HyDE
- [ ] limitaciones del RAG estándar (catálogo de fallas)
- [ ] contexto largo vs RAG (long-context: costo/frescura/filtrado)
- [ ] compresión de contexto
- [ ] GraphRAG: entidades/relaciones, cuándo NO conviene
- [ ] frameworks (LangChain / LlamaIndex): qué aportan y qué ocultan

## Vector Database

- [ ] ¿Por qué existe?
- [ ] ¿Qué guarda?
- [ ] ¿Qué es HNSW? / ¿Qué es IVF? (a nivel conceptual)
- [ ] comparativa: Pinecone / Weaviate / Milvus / Supabase / pgvector (conceptual)
- [ ] ¿Cuándo conviene una DB vectorial dedicada?

## Tools

- [ ] ¿Qué es function calling?
- [ ] ¿Qué es un tool schema (JSON Schema)?
- [ ] ¿Por qué el LLM no debería generar SQL arbitrario?
- [ ] ¿Cómo se valida una tool call?
- [ ] autorización de tools (allowlist, least privilege)

## Agents

- [ ] ¿Qué diferencia hay entre chatbot y agente?
- [ ] ¿Qué es el agent loop?
- [ ] ¿Qué es ReAct?
- [ ] plan-and-execute vs reflexión (conceptual)
- [ ] ¿Qué es state?
- [ ] ¿Qué es memory? (y por qué memory ≠ RAG)
- [ ] context vs state vs memory
- [ ] max iterations / timeout / cancellation: por qué existen

## LangGraph

- [ ] ¿Qué es un node?
- [ ] ¿Qué es un edge?
- [ ] ¿Qué es un conditional edge?
- [ ] ¿Por qué usar un state graph?
- [ ] ¿Qué es un checkpoint?

## Multi-agent

- [ ] ¿Cuándo tiene sentido?
- [ ] ¿Qué costos agrega?
- [ ] ¿Qué es un supervisor?
- [ ] handoffs estructurados vs prosa

## Security

- [ ] ¿Qué es prompt injection (directa e indirecta)?
- [ ] ¿Por qué un documento RAG puede ser malicioso?
- [ ] ¿Qué es least privilege?
- [ ] ¿Qué es human-in-the-loop?
- [ ] ¿Qué es excessive agency?
- [ ] data exfiltration
- [ ] ¿Por qué el prompt NO es una frontera de seguridad?

## Evaluation

- [ ] ¿Qué es faithfulness?
- [ ] ¿Qué es groundedness?
- [ ] ¿Qué es retrieval precision?
- [ ] recall vs precision en retrieval
- [ ] ¿Qué es MRR y para qué sirve?
- [ ] ¿Cómo medir calidad de un RAG?
- [ ] qué hacen RAGAS / Phoenix / TruLens (a nivel conceptual)
- [ ] tracing / observabilidad de agentes

## Python (labs/python)

- [ ] Pydantic vs zod (mismo problema, distinta herramienta; qué genera cada uno)
- [ ] entorno virtual y reproducibilidad de dependencias (venv + requirements)
- [ ] mapeo de conceptos TS ↔ Python (provider, tool, agent)
