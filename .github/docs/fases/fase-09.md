---
fase: 9
titulo: "Agent loop + razonamiento agéntico"
tier: B
horas_estimadas: 6
evalua_seguridad: false
prerrequisitos: [8]
temario_utn: "M2 · Clase 3 (Fundamentos del Razonamiento Agéntico)"
---

## Objetivo (una oración)

Implementar el loop agéntico a mano con límites y cancellation, y ubicarlo entre ReAct, plan-and-execute y reflexión.

## Conceptos a dominar (ver `glosario.md`)

Agent loop (`while (!finished)` con toolCall → result → state); max iterations, timeout, allowed tools, error handling, cancellation; ReAct, plan-and-execute, reflexión (conceptual); loop manual vs chain; indicador de iteración en el FE.

## Pregunta ancla

"¿Qué decisiones puede tomar el modelo y cuáles deberían ser determinísticas?"

## Ejercicio y criterios de aceptación (medibles)

`orchestration/agent-loop.ts` con límites + FE mostrando cada iteración.

- [ ] El loop tiene maxIterations, timeout y allowedTools (fail-closed).
- [ ] Cada iteración es visible en el FE (qué tool, args, resultado, estado).
- [ ] Cancelación: abortar la corrida a mitad y limpiar estado.
- [ ] Podés explicar ReAct vs tu loop y plan-and-execute vs reflexión (sin código).

## Casos de aceptación manuales

1. Tarea de 3 pasos → loop termina solo con respuesta final.
2. Task imposible → corta por maxIterations con estado claro.
3. Tool falla → error manejado, loop decide reintentar o abortar.

## Errores frecuentes a vigilar

- Loop infinito sin maxIterations (y sin estado de error).
- Pensar que un agente es simplemente un chatbot (confusión bloqueante).
- Pasar TODO el historial al modelo en cada vuelta (context window).

## Semillas de preguntas (SIN respuestas)

1. ¿Por qué? ¿Por qué allowedTools y no "dejá elegir todo"?
2. ¿Qué pasaría si...? la tool devuelve el error en el texto y el LLM lo ignora?
3. Diseño: ¿qué parte del Runner de un SDK harías vos y qué comprás?

## Cambios en vivo que el tutor puede pedir

- "Bajá maxIterations a 2 y mostrá qué tarea ya no se resuelve."
- "Agregá un log de decisiones por iteración."

## Definition of Done

- [ ] Ejecuta y cumple los criterios
- [ ] Explica cada decisión sin mirar el código
- [ ] Resuelve el cambio en vivo
- [ ] Sección de la fase en PROGRESS.md completa (+ Evidencia)
- [ ] Ledger actualizado
