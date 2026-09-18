---
fase: 5
titulo: "Reranking + transformación de consultas"
tier: A
horas_estimadas: 5
evalua_seguridad: false
prerrequisitos: [4]
temario_utn: "M1 · Clase 4 (Re-ranking y Transformación de Consultas)"
---

## Objetivo (una oración)

Mejorar la precisión del top-K con reranking y hacer queries más recuperables con reescritura, multi-query e HyDE.

## Conceptos a dominar (ver `glosario.md`)

Reranking (cross-encoder vs simulado); pipeline retrieval 20 → rerank → 5 → LLM; query transformation: reescritura, multi-query, HyDE; costo/latencia vs ganancia.

## Pregunta ancla

"¿Por qué recuperar 20 y reranquear a 5 puede ser mejor y más caro que top-5 directo?"

## Ejercicio y criterios de aceptación (medibles)

`retrieval/reranker.ts` (simulado primero) + transformación de queries antes del retrieval.

- [ ] El reranker simulado usa una heurística explícita (documentada).
- [ ] Reescritura de query y multi-query funcionan sobre al menos 1 caso cada una.
- [ ] HyDE explicado (conceptual) y cuándo NO usarlo.
- [ ] Comparación vs línea base 3E: números en `PROGRESS.md`.

## Casos de aceptación manuales

1. Caso donde el chunk correcto estaba en posición 7 y el rerank lo sube a 1.
2. Query ambigua → reescritura la vuelve específica.
3. Multi-query → 3 variantes → fusión de resultados.

## Errores frecuentes a vigilar

- Reranquear TODO el corpus (solo se reranquea el top-K del retrieval).
- Sumar latencia sin medir (el trade-off es parte del score).

## Semillas de preguntas (SIN respuestas)

1. ¿Por qué? ¿Por qué un cross-encoder ranquea mejor que el coseno?
2. ¿Qué pasaría si...? el reranker es más lento que el retrieval entero?
3. Diseño: ¿dónde pondrías la reescritura de query en el pipeline y por qué?

## Cambios en vivo que el tutor puede pedir

- "Agregá HyDE a una query ambigua y mostrá el antes/después."
- "Medí la latencia con y sin rerank y documentá el trade-off."

## Definition of Done

- [ ] Ejecuta y cumple los criterios
- [ ] Explica cada decisión sin mirar el código
- [ ] Resuelve el cambio en vivo
- [ ] Sección de la fase en PROGRESS.md completa (+ comparación vs 3E)
- [ ] Ledger actualizado
