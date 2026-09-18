---
fase: 14
titulo: "Evaluación completa (faithfulness, RAGAS/Phoenix/TruLens, tracing)"
tier: D
horas_estimadas: 6
evalua_seguridad: false
prerrequisitos: [13]
temario_utn: "M2 · Clase 2 (Evaluación de Sistemas RAG)"
---

## Objetivo (una oración)

Evaluar el sistema completo con métricas de retrieval y de respuesta, probar un framework de evaluación y agregar tracing.

## Conceptos a dominar (ver `glosario.md`)

Faithfulness, groundedness, answer relevance; RAGAS / Phoenix / TruLens (qué mide cada uno — probar al menos uno en modo demostración); tracing/observabilidad; comparación de configuraciones (básico vs hybrid vs reranking).

## Pregunta ancla

"¿Cómo detectarías en producción una respuesta fiel al contexto pero inútil para el usuario?"

## Ejercicio y criterios de aceptación (medibles)

Dataset ≥20 preguntas + harness completo + un framework de evaluación + tracing básico.

- [ ] Métricas de retrieval (recall@k, MRR de 3E) + de respuesta (faithfulness, groundedness, answer relevance).
- [ ] Un framework (RAGAS/Phoenix/TruLens) probado en modo demostración.
- [ ] Comparación documentada: RAG básico vs hybrid vs reranking.
- [ ] Latencia, tokens y costo logueados por request.

## Casos de aceptación manuales

1. Respuesta con alucinación → faithfulness bajo (detectada).
2. Respuesta correcta pero con fuentes irrelevantes → groundedness/answer relevance diferencian.
3. Comparación de las 3 configs con números.

## Errores frecuentes a vigilar

- Evaluar solo el retrieval (la respuesta también se evalúa).
- Confundir faithfulness con answer relevance.

## Semillas de preguntas (SIN respuestas)

1. ¿Por qué? ¿Por qué faithfulness necesita el contexto de la respuesta?
2. ¿Qué pasaría si...? el dataset de evaluación se filtra a producción?
3. Diseño: ¿qué trazas loggearías para debuggear un agente en producción?

## Cambios en vivo que el tutor puede pedir

- "Agregá una métrica de costo por request y documéntala."
- "Mostrá una traza completa de una tool call fallida."

## Definition of Done

- [ ] Ejecuta y cumple los criterios
- [ ] Explica cada decisión sin mirar el código
- [ ] Resuelve el cambio en vivo
- [ ] Sección de la fase en PROGRESS.md completa (+ comparaciones)
- [ ] Ledger actualizado
