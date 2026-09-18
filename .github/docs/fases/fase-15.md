---
fase: 15
titulo: "Proyecto final + Docker + examen final"
tier: D
horas_estimadas: 10
evalua_seguridad: true
prerrequisitos: [12, 13, 14]
temario_utn: "M3 · Clase 4 (Taller de Integración y Proyecto Final)"
---

## Objetivo (una oración)

Integrar todo en el "Payment Investigation Agent" con Docker del stack, y cerrar con el examen final integrador.

## Conceptos a dominar (ver `glosario.md`)

Integración de todo el stack (RAG, hybrid, reranking, tools, agent loop, state, memory, LangGraph, evaluación, seguridad, tracing); Docker del stack completo (docker-compose); proyecto vs producto; examen final con ejercicio nuevo.

## Pregunta ancla

"Si tuvieras que dejarlo corriendo en producción el lunes, ¿qué te falta?"

## Ejercicio y criterios de aceptación (medibles)

"Payment Investigation Agent" completo + `docker-compose` del stack (pg, Qdrant, server, web) + **examen final** (protocolo §6).

- [ ] El agente responde la pregunta integradora con trazabilidad total.
- [ ] `docker-compose up` levanta el stack completo.
- [ ] Evaluación corriendo sobre el sistema integrado (métricas de 14).
- [ ] Seguridad: guardrails + human-in-the-loop activos.
- [ ] Examen final aprobado (ejercicio nuevo, ver `protocolo-tutor.md` §6).

## Casos de aceptación manuales

1. "¿Por qué falló el payment 12345?" end-to-end con fuentes + tool calls + inferencias marcadas.
2. Stack desde cero con docker-compose (sin estado local).
3. Ataque de injection → bloqueado por la arquitectura.

## Errores frecuentes a vigilar

- Dockerizar "todo de una" sin haber dockerizado los servicios cuando entraron.
- Olvidar la evaluación: un sistema sin métricas no es un sistema.

## Semillas de preguntas (SIN respuestas)

1. ¿Por qué? ¿Por qué el examen final usa un dominio nuevo?
2. ¿Qué pasaría si...? Qdrant se cae? ¿Y la LLM API?
3. Diseño: ¿cómo escalarías este agente a 10.000 usuarios?

## Cambios en vivo que el tutor puede pedir

- "Agregá un healthcheck al compose."
- "Documentá cómo recupera el agente una corrida interrumpida."

## Definition of Done

- [ ] Ejecuta y cumple los criterios
- [ ] Explica cada decisión sin mirar el código
- [ ] Resuelve el cambio en vivo
- [ ] Sección de la fase en PROGRESS.md completa (+ Evidencia)
- [ ] Ledger actualizado
- [ ] Examen final registrado
