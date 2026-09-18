---
fase: 6
titulo: "Tool calling"
tier: B
horas_estimadas: 5
evalua_seguridad: true
prerrequisitos: [5]
temario_utn: "M2 · Clase 4 (Function Calling y Tool Design)"
---

## Objetivo (una oración)

Distinguir RAG (buscar conocimiento) de tools (ejecutar acciones) y construir el ciclo de tool calling validado y autorizado.

## Conceptos a dominar (ver `glosario.md`)

Tool calling, tool schema (JSON Schema generado de zod), el LLM decide QUÉ, el código decide QUÉ existe; adapters sobre services; autorización de tools; never SQL arbitrario del LLM.

## Pregunta ancla

"Una tool es conceptualmente más parecida a una API capability controlada que a una función mágica que el LLM puede ejecutar. ¿Por qué?"

## Ejercicio y criterios de aceptación (medibles)

Tools `getPayment`, `getPaymentEvents`, `getRetryHistory` sobre datos ficticios + timeline de tool calls en el FE lab.

- [ ] Cada tool tiene schema zod → JSON Schema, y la llamada se valida ANTES de ejecutar.
- [ ] El adapter llama al service, nunca a la DB directo.
- [ ] El FE muestra timeline: qué tool, args, resultado.
- [ ] Podés explicar quién decide y quién puede: el LLM elige, tu código define y permite.

## Casos de aceptación manuales

1. "¿Qué pasó con el payment 12345?" → tool call visible con args validados.
2. Args inválidos (id negativo) → error tipado, la tool NO se ejecuta.
3. Tool inexistente pedida por el modelo → rechazada por el registry.

## Errores frecuentes a vigilar

- Pensar que el LLM ejecuta la tool (confusión bloqueante).
- Confiar en el schema del modelo sin validar (zod en el límite).
- Pasar secrets/ids sensibles como argumentos del modelo.

## Semillas de preguntas (SIN respuestas)

1. ¿Por qué? ¿Por qué el schema es la "API pública" de la tool?
2. ¿Qué pasaría si...? dos tools tienen descripciones ambiguas?
3. Diseño: ¿qué parte controla el LLM y qué parte tu backend?

## Cambios en vivo que el tutor puede pedir

- "Agregá una tool nueva con su schema y probala."
- "Restringí una tool por rol y mostrá cómo se bloquea."

## Definition of Done

- [ ] Ejecuta y cumple los criterios
- [ ] Explica cada decisión sin mirar el código
- [ ] Resuelve el cambio en vivo
- [ ] Sección de la fase en PROGRESS.md completa (+ Evidencia)
- [ ] Ledger actualizado
