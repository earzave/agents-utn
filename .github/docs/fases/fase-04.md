---
fase: 4
titulo: "Retrieval de calidad (hybrid, BM25, metadata)"
tier: A
horas_estimadas: 5
evalua_seguridad: false
prerrequisitos: [3, "3E"]
temario_utn: "M1 · Clase 3 (Recuperación Híbrida y Filtrado)"
---

## Objetivo (una oración)

Combinar búsqueda vectorial con keyword (BM25) y filtros de metadata, y demostrar la mejora con números de 3E.

## Conceptos a dominar (ver `glosario.md`)

Vector search vs keyword (BM25) vs hybrid; fusión de rankings; metadata filtering (service, environment, documentType, version, topic); cuándo cada técnica gana.

## Pregunta ancla

"¿Por qué una query con código de error exacto gana BM25 y una pregunta semántica gana vectores?"

## Ejercicio y criterios de aceptación (medibles)

`retrieval/keyword-search.ts` (BM25) + `hybrid-search.ts` + filtros de metadata.

- [ ] BM25 implementado a mano (TF-IDF/ scoring BM25) sobre los docs de `data/docs/`.
- [ ] Hybrid fusiona ambos rankings (método simple, explicado).
- [ ] Los filtros de metadata se aplican ANTES del ranking.
- [ ] Comparás recall@k/MRR vs la línea base de 3E y lo documentás.

## Casos de aceptación manuales

1. Query con código de error → BM25 gana.
2. Query semántica → vector gana.
3. Filtro `service=SAP` → solo docs de SAP en resultados.

## Errores frecuentes a vigilar

- Filtrar DESPUÉS del top-K (recortás resultados buenos).
- Pensar que hybrid siempre gana (a veces no, y hay que mostrarlo con números).

## Semillas de preguntas (SIN respuestas)

1. ¿Por qué? ¿Por qué BM25 entiende exactitud y no sinónimos?
2. ¿Qué pasaría si...? la metadata está mal etiquetada en la indexación?
3. Diseño: ¿qué índices construirías sobre metadata en una DB real?

## Cambios en vivo que el tutor puede pedir

- "Agregá el filtro `version` a la query y mostrá el cambio."
- "Cambiá el peso de la fusión y explicá el efecto en MRR."

## Definition of Done

- [ ] Ejecuta y cumple los criterios
- [ ] Explica cada decisión sin mirar el código
- [ ] Resuelve el cambio en vivo
- [ ] Sección de la fase en PROGRESS.md completa (+ comparación vs 3E)
- [ ] Ledger actualizado
