---
fase: 1
titulo: "Tokens y embeddings"
tier: A
horas_estimadas: 4
evalua_seguridad: false
prerrequisitos: [0]
temario_utn: "M1 · Clase 2 (Bases Vectoriales y Embeddings)"
---

## Objetivo (una oración)

Entender qué representa un embedding y por qué la similitud coseno encuentra significado aunque las palabras no coincidan.

## Conceptos a dominar (ver `glosario.md`)

Tokenización, embedding, vector, dimensión, cosine similarity, semantic search; nivel conceptual: HNSW/IVF (índices vectoriales), costo de embeddings, normalización de vectores; cuadro comparativo conceptual de vector DBs (Pinecone / Weaviate / Milvus / Supabase / pgvector ≈ Supabase).

## Pregunta ancla

"¿Por qué embeddings encuentran significado aunque las palabras no coincidan?"

## Ejercicio y criterios de aceptación (medibles)

Script con 10 frases (pagos/SAP/Docker, en `data/embeddings/`) + similitud contra 3 queries, con el proveedor D4 (Ollama Cloud, embeddings por API OpenAI-compatible).

- [ ] **T-10 ANTES de la Fase 1**: verificar que el proveedor responde embeddings con un
      **script mínimo en Python** (lo escribís vos en `labs/python/`, pide el embedding de
      una frase al proveedor D4 y muestra la dimensión). Obliga a tener el entorno Python
      listo en la semana 1 y comprueba el proveedor de una vez.
- [ ] El script imprime el ranking de similitud por query y es reproducible.
- [ ] Sabés explicar qué dimensión tiene el vector y de dónde sale.
- [ ] Podés explicar qué pasaría si NO normalizás los vectores antes del coseno.

## Casos de aceptación manuales

1. Query "el pago falló" rankea arriba la frase "transacción rechazada" (sin palabras en común).
2. Query sin similitud → rankea abajo.
3. Comparar similitud de una frase consigo misma (= ~1).

## Errores frecuentes a vigilar

- Confundir embeddings con tokens (confusión bloqueante).
- Pensar que la vector DB "entiende" el texto (confusión bloqueante).
- Confundir dimensión del embedding con longitud del texto.

## Semillas de preguntas (SIN respuestas)

1. ¿Por qué? ¿Por qué "auto" y "vehículo" quedan cerca en el espacio de embeddings?
2. ¿Qué pasaría si...? usás el mismo modelo de chat para generar embeddings?
3. Diseño: ¿dónde generarías el embedding y dónde lo almacenarías en una app real?

## Cambios en vivo que el tutor puede pedir

- "Agregá una frase ambigua y explicá dónde cae."
- "Mostrá cómo cambiaría el ranking si usás otro modelo de embeddings."

## Definition of Done

- [ ] Ejecuta y cumple los criterios
- [ ] Explica cada decisión sin mirar el código
- [ ] Resuelve el cambio en vivo
- [ ] Sección de la fase en PROGRESS.md completa (+ Evidencia)
- [ ] Ledger actualizado
