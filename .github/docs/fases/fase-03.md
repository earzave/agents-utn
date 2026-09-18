---
fase: 3
titulo: "Primer RAG"
tier: A
horas_estimadas: 8
evalua_seguridad: false
prerrequisitos: [1, 2, "2b"]
temario_utn: "M1 · Clases 1-2"
---

## Objetivo (una oración)

Implementar el pipeline RAG end-to-end a mano, con grounding estricto (responder solo con el contexto recuperado).

## Conceptos a dominar (ver `glosario.md`)

Pipeline ingestion → chunking → embeddings → vector store → query embedding → similarity → top-K → LLM con contexto → respuesta con fuentes; grounding; admitir cuando no hay información suficiente; vector store in-memory.

## Pregunta ancla

"¿Por qué RAG reduce alucinaciones y por qué NO las elimina?"

## Ejercicio y criterios de aceptación (medibles)

Pipeline completo + `POST /ask` con fuentes citadas + primer wiring del FE lab.

- [ ] El prompt exige responder SOLO con el contexto y admite "no tengo información".
- [ ] La respuesta incluye las fuentes usadas (documentId + sección).
- [ ] El vector store es in-memory/JSON (Docker recién con Qdrant/pg en su fase).
- [ ] El FE lab (`features/chat/`) muestra la respuesta con fuentes.

## Casos de aceptación manuales

1. Pregunta cubierta → respuesta correcta con fuentes.
2. Pregunta parcial → responde lo que hay y NO inventa el resto.
3. Pregunta ausente → admite que no hay información.
4. Pregunta que intenta inducir invención → no inventa.

## Errores frecuentes a vigilar

- Pensar que RAG entrena al modelo (confusión bloqueante).
- Meter el contexto entero sin top-K.
- Olvidar el embedding de la query (usar el mismo modelo que en indexación).

## Semillas de preguntas (SIN respuestas)

1. ¿Por qué? ¿Por qué el mismo modelo de embeddings debe usarse en index y query?
2. ¿Qué pasaría si...? el top-K devuelve chunks contradictorios?
3. Diseño: ¿qué componentes tendría tu arquitectura RAG en producción?

## Cambios en vivo que el tutor puede pedir

- "Bajá top-K a 2 y mostrá qué pregunta empieza a fallar."
- "Agregá a la respuesta el porqué de cada fuente citada."

## Definition of Done

- [ ] Ejecuta y cumple los criterios
- [ ] Explica cada decisión sin mirar el código
- [ ] Resuelve el cambio en vivo
- [ ] Sección de la fase en PROGRESS.md completa (+ Evidencia)
- [ ] Ledger actualizado
