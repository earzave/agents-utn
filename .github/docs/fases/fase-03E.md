---
fase: "3E"
titulo: "Evaluación temprana (recall@k, MRR, catálogo de fallas)"
tier: A
horas_estimadas: 4
evalua_seguridad: false
prerrequisitos: [3]
temario_utn: "M2 · Clase 2 (Evaluación de Sistemas RAG — anticipada a propósito)"
---

## Objetivo (una oración)

Medir el RAG con números (recall@k, MRR) y armar el catálogo de fallas del RAG estándar, para que las fases 4-5 se comparen contra datos y no contra intuición.

## Conceptos a dominar (ver `glosario.md`)

Conjunto de preguntas doradas; recall@k; MRR; catálogo de fallas del RAG estándar (chunk mal cortado, consulta ambigua, multi-hop, dato desactualizado); por qué medir ANTES de optimizar.

## Pregunta ancla

"¿Cómo sabés que el retrieval mejoró, si no tenés un número de antes?"

## Ejercicio y criterios de aceptación (medibles)

Dataset de ~15 preguntas doradas (`evaluation/dataset/questions.json`: question, expectedSources) + harness que calcula recall@k y MRR sobre la Fase 3.

- [ ] El harness corre sobre el RAG de la Fase 3 y produce recall@k y MRR.
- [ ] El dataset cubre los 4 tipos de falla del catálogo.
- [ ] Cada falla del catálogo tiene un caso reproducible en los datos.
- [ ] Guardás la línea base en `PROGRESS.md` para comparar en 4 y 5.

## Casos de aceptación manuales

1. Pregunta con fuente conocida → recall@k la encuentra.
2. Pregunta multi-hop → falla, y podés explicar por qué.
3. Cambiar top-K → el número cambia y lo podés explicar.

## Errores frecuentes a vigilar

- Medir "a ojo" (screenshot) en vez de con métricas.
- Esperarse a la Fase 14 para medir (medir antes de optimizar).
- Confundir recall@k con precision@k.

## Semillas de preguntas (SIN respuestas)

1. ¿Por qué? ¿Por qué evaluar el retrieval sin el LLM?
2. ¿Qué pasaría si...? las preguntas doradas están mal etiquetadas?
3. Diseño: ¿qué métricas loggearías en producción además de recall@k?

## Cambios en vivo que el tutor puede pedir

- "Agregá una pregunta nueva al dataset y corré el harness."
- "Mostrá el caso donde el chunk correcto está en posición 4 y explicá el MRR."

## Definition of Done

- [ ] Ejecuta y cumple los criterios
- [ ] Explica cada decisión sin mirar el código
- [ ] Resuelve el cambio en vivo
- [ ] Sección de la fase en PROGRESS.md completa (línea base incluida)
- [ ] Ledger actualizado
