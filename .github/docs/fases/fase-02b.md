---
fase: "2b"
titulo: "Parent-Document Retrieval"
tier: A
horas_estimadas: 3
evalua_seguridad: false
prerrequisitos: [2]
temario_utn: "M1 · Clase 1 (tema oficial: Parent-Document Retrieval)"
---

## Objetivo (una oración)

Buscar con chunks chicos (precisión) y responder con el documento padre (contexto), entendiendo la recuperación jerárquica.

## Conceptos a dominar (ver `glosario.md`)

Parent-Document Retrieval (buscás el hijo, devolvés el padre); chunking por encabezados Markdown; metadata de jerarquía (parent_id, level); trade-off precisión vs contexto.

## Pregunta ancla

"¿Por qué buscar y responder con la misma unidad suele ser la peor opción?"

## Ejercicio y criterios de aceptación (medibles)

Índice de chunks hijos + mapa a padres (`apps/server/src/retrieval/`): buscás por hijo, devolvés el padre al LLM.

- [ ] Cada chunk hijo referencia a su padre (parent_id en metadata).
- [ ] El top-K se elige sobre hijos y la respuesta usa el contexto del padre.
- [ ] Podés explicar cuándo NO conviene (docs largos con padres enormes → context window).

## Casos de aceptación manuales

1. Pregunta específica → matchea un hijo chico → respuesta usa la sección completa.
2. Comparar con Fase 3: ¿la respuesta mejora al devolver el padre?
3. Doc muy largo → decidir (y explicar) recortar el padre.

## Errores frecuentes a vigilar

- Devolver TODOS los padres de los K hijos (explosión de contexto).
- Confundir parent-document con "resumen jerárquico" (son cosas distintas).

## Semillas de preguntas (SIN respuestas)

1. ¿Por qué? ¿Por qué un chunk chico matchea mejor que uno grande?
2. ¿Qué pasaría si...? el padre es un documento de 50 páginas?
3. Diseño: ¿qué guardarías en la metadata para reconstruir el padre sin buscarlo?

## Cambios en vivo que el tutor puede pedir

- "Limitá el tamaño del padre y explicá qué sacrificás."
- "Hacé que la respuesta cite sección exacta además del doc."

## Definition of Done

- [ ] Ejecuta y cumple los criterios
- [ ] Explica cada decisión sin mirar el código
- [ ] Resuelve el cambio en vivo
- [ ] Sección de la fase en PROGRESS.md completa (+ Evidencia)
- [ ] Ledger actualizado
