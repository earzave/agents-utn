---
fase: 8
titulo: "RAG + tools"
tier: B
horas_estimadas: 4
evalua_seguridad: false
prerrequisitos: [6, 7]
temario_utn: "M2 · Clase 4 (Function Calling y Tool Design)"
---

## Objetivo (una oración)

Componer retrieval y tools en una misma respuesta, separando hechos de DB, info de docs e inferencias.

## Conceptos a dominar (ver `glosario.md`)

Composición RAG + tools; síntesis multi-fuente; trazabilidad de la respuesta (hechos/inferencias); orquestación simple combinada.

## Pregunta ancla

"¿Cómo hace el usuario para saber si 'el payment falló por X' viene de la DB, del doc, o lo inventó el modelo?"

## Ejercicio y criterios de aceptación (medibles)

Pregunta integradora: "¿Por qué falló el payment 12345?" → tool payment + tool events + RAG de docs + síntesis.

- [ ] La respuesta distingue: hechos de DB / info de docs / inferencias.
- [ ] Cada afirmación es trazable a una tool call o una fuente de RAG.
- [ ] El flujo combina ambas fuentes en una sola respuesta coherente.

## Casos de aceptación manuales

1. Pregunta que necesita DB + docs → ambas fuentes aparecen.
2. Pregunta solo-DB → no fuerza RAG.
3. Pregunta sin datos → admite y no inventa.

## Errores frecuentes a vigilar

- Mezclar todo en un prompt gigante sin diferenciar fuentes.
- Olvidar que cada fuente tiene confiabilidad distinta.

## Semillas de preguntas (SIN respuestas)

1. ¿Por qué? ¿Por qué no basta con un RAG sobre la DB?
2. ¿Qué pasaría si...? la DB y los docs se contradicen?
3. Diseño: ¿cómo ordenarías las llamadas (tools primero? RAG primero?) y por qué?

## Cambios en vivo que el tutor puede pedir

- "Agregá la marca [DB]/[DOC]/[INFERENCIA] a cada párrafo de la respuesta."
- "Forzá un caso de contradicción entre fuentes y mostrá cómo se resuelve."

## Definition of Done

- [ ] Ejecuta y cumple los criterios
- [ ] Explica cada decisión sin mirar el código
- [ ] Resuelve el cambio en vivo
- [ ] Sección de la fase en PROGRESS.md completa (+ Evidencia)
- [ ] Ledger actualizado
