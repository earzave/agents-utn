---
fase: P
titulo: "Puente a Python (labs/python)"
tier: C
horas_estimadas: 3
evalua_seguridad: false
prerrequisitos: [D]
temario_utn: "transversal (pre-curso híbrido: conceptos a mano en TS, labs de frameworks en Python — D1)"
---

## Objetivo (una oración)

Que el idioma no sea la barrera: leer y modificar ejemplos mínimos de LangChain y CrewAI en Python sin entrar en profundidad.

## Conceptos a dominar (ver `glosario.md`)

Python para IA (ecosistema va primero en Python); LangChain (Python) vs LangChain.js; CrewAI (Python-only); mapeo de conceptos ya aprendidos en TS a su equivalente Python.

## Pregunta ancla

"Los conceptos ya los tenés; ¿qué cambia con solo cambiar de idioma?"

## Ejercicio y criterios de aceptación (medibles)

En `labs/python/` (carpeta aparte, SIN tocar el monorepo TS): leer y modificar un ejemplo mínimo de LangChain y uno de CrewAI.

- [ ] Un ejemplo de LangChain (Python) corre con tus datos de pagos ficticios.
- [ ] Un ejemplo de CrewAI corre y podés explicar su estructura (agentes/tasks/crew).
- [ ] Tabla de mapeo en `PROGRESS.md`: concepto TS ↔ Python (provider, tool, agent).

## Casos de aceptación manuales

1. Cambiar el modelo del ejemplo LangChain y correrlo.
2. Agregar un task al Crew de CrewAI.
3. Explicar qué es un `@tool` decorator vs tu ToolDefinition de zod.

## Errores frecuentes a vigilar

- Confundir versiones de Python/librerías (usar venv).
- Tratar de portar TODO el monorepo: es un puente, no un re-write.

## Semillas de preguntas (SIN respuestas)

1. ¿Por qué? ¿Por qué CrewAI no tiene versión TypeScript?
2. ¿Qué pasaría si...? el curso usa otra librería distinta a estas?
3. Diseño: ¿qué estructura de tu agente TS traducirías directo a Python?

## Cambios en vivo que el tutor puede pedir

- "Cambiar una tool del ejemplo LangChain por otra y correr."
- "Agregar un agente al Crew y describir su rol."

## Definition of Done

- [ ] Ejecuta y cumple los criterios
- [ ] Explica cada decisión sin mirar el código
- [ ] Resuelve el cambio en vivo
- [ ] Sección de la fase en PROGRESS.md completa (tabla de mapeo)
- [ ] Ledger actualizado
