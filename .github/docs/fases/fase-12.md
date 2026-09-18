---
fase: 12
titulo: "Multi-agent (supervisor + handoffs tipados)"
tier: D
horas_estimadas: 6
evalua_seguridad: true
prerrequisitos: [11, E2]
temario_utn: "M3 · Clase 3 (Sistemas Multi-Agente y Seguridad)"
---

## Objetivo (una oración)

Componer un sistema multi-agente manual con supervisor que enruta y handoffs tipados, y saber cuándo NO conviene.

## Conceptos a dominar (ver `glosario.md`)

Supervisor (enruta, no resuelve); handoffs tipados; agentes con contexto y tools limitados; cuándo multi-agent aumenta complejidad/latencia/costo/superficie de ataque; CrewAI como demostración de lectura (D1=Python → ver Fase P).

## Pregunta ancla

"¿Cuándo un segundo agente resuelve el problema y cuándo solo duplica el costo?"

## Ejercicio y criterios de aceptación (medibles)

Supervisor + Payment Agent + SAP Agent + Documentation Agent (multi-agente manual).

- [ ] El supervisor enruta por clasificación (no resuelve la tarea).
- [ ] Cada agente tiene su allowlist de tools y contexto mínimo.
- [ ] Handoffs tipados (estado explícito entre agentes).
- [ ] Documentado: caso donde multi-agent vale y caso donde no (con costo).

## Casos de aceptación manuales

1. Pregunta de payments → Payment Agent, sin pasar por SAP.
2. Pregunta mixta → supervisor enruta dos veces.
3. Agente sin tool pedida → la rechaza (allowlist).

## Errores frecuentes a vigilar

- Supervisor que resuelve en vez de enrutar.
- Multi-agent "porque sí" (trade-off: siempre es más caro).

## Semillas de preguntas (SIN respuestas)

1. ¿Por qué? ¿Por qué contextos limitados reducen el riesgo de injection?
2. ¿Qué pasaría si...? dos agentes se pasan el control en círculo?
3. Diseño: ¿qué agente separarías en tu dominio y qué tools le das?

## Cambios en vivo que el tutor puede pedir

- "Agregá un agente nuevo al supervisor."
- "Forzá una pregunta ambigua y mostrá cómo decide el supervisor."

## Definition of Done

- [ ] Ejecuta y cumple los criterios
- [ ] Explica cada decisión sin mirar el código
- [ ] Resuelve el cambio en vivo
- [ ] Sección de la fase en PROGRESS.md completa (+ Evidencia)
- [ ] Ledger actualizado
