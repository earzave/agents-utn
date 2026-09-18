---
fase: 10
titulo: "Estado y memoria"
tier: B
horas_estimadas: 5
evalua_seguridad: false
prerrequisitos: [9]
temario_utn: "M2 · Clase 1 (TBC — título no publicado)"
---

## Objetivo (una oración)

Distinguir CONTEXT vs STATE vs MEMORY y persistir el estado del agente para conversaciones multi-turno.

## Conceptos a dominar (ver `glosario.md`)

CONTEXT (lo que viaja al modelo) vs STATE (estado del workflow) vs MEMORY (persistido entre interacciones); run context (viaja a tools, nunca al modelo); persistencia JSON/SQLite; referencias anafóricas ("¿y tuvo retries?").

## Pregunta ancla

"¿Qué diferencia hay entre el contexto que mandás al modelo y el estado que persistís del agente?"

## Ejercicio y criterios de aceptación (medibles)

`memory/state-store.ts` + `orchestration/agent-state.ts` con persistencia simple.

- [ ] `AgentState` persiste entre requests (JSON o SQLite).
- [ ] El ejemplo "Analizá el payment 12345" → "¿Y tuvo retries?" funciona sin re-pedir todo.
- [ ] El run context NO se manda al modelo (verificable en el prompt que sale).
- [ ] Podés explicar cuándo memory ≠ contexto y cuándo memory ≠ state.

## Casos de aceptación manuales

1. Dos turnos: la pregunta de seguimiento usa el estado previo.
2. Reinicio del server → el estado persiste (o se explica por qué no).
3. Un dato sensible en run context → no aparece en el prompt enviado.

## Errores frecuentes a vigilar

- Confundir memory con RAG (confusión bloqueante).
- Persistir TODO el historial (crece sin límite).

## Semillas de preguntas (SIN respuestas)

1. ¿Por qué? ¿Por qué el run context va a las tools pero no al modelo?
2. ¿Qué pasaría si...? dos sesiones concurrentes comparten el mismo estado?
3. Diseño: ¿qué guardarías en memory a largo plazo y qué no?

## Cambios en vivo que el tutor puede pedir

- "Agregá TTL al estado y explicá qué pasa al expirar."
- "Mostrá el prompt exacto que sale al modelo en el turno 2."

## Definition of Done

- [ ] Ejecuta y cumple los criterios
- [ ] Explica cada decisión sin mirar el código
- [ ] Resuelve el cambio en vivo
- [ ] Sección de la fase en PROGRESS.md completa (+ Evidencia)
- [ ] Ledger actualizado
