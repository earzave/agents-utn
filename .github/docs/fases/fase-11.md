---
fase: 11
titulo: "LangGraph (Python, labs/python)"
tier: C
horas_estimadas: 6
evalua_seguridad: false
prerrequisitos: [10, E1, "3F-Py"]
temario_utn: "M3 · Clase 2 (Orquestación con LangGraph)"
---

## Objetivo (una oración)

Recrear el caso "investigar un payment fallido" como grafo de estados con **LangGraph en
Python** (`labs/python/`, decisión D6) y entender qué queda determinístico y qué decide el modelo.

## Conceptos a dominar (ver `glosario.md`)

Nodes, edges, conditional edges, state, loop, termination, checkpoint; loop manual (Fase 9) vs grafo; qué aporta el framework de orquestación; mapeo del agent loop TS (Fase 9) al grafo Python.

## Pregunta ancla

"¿Qué partes de tu loop de la Fase 9 son edges y cuáles conditional edges?"

## Ejercicio y criterios de aceptación (medibles)

El caso "investigar un payment fallido" recreado como grafo de estados en `labs/python/`,
leyendo `data/payments.json` y `data/docs/`, y **comparado con el agent loop manual en
TypeScript de la Fase 9** (qué aporta el grafo, qué decide el LLM, qué queda
determinístico). Palabras clave de M3·2: **ciclos de retroalimentación, transiciones
condicionales, control determinístico**.

- [ ] El grafo tiene nodes con responsabilidades claras y state tipado (Pydantic/TypedDict).
- [ ] La terminación es explícita (conditional edge), no un maxIterations oculto.
- [ ] Checkpoint: pausar y reanudar una corrida.
- [ ] Comparación documentada en `PROGRESS.md`: loop TS a mano vs grafo Python.

## Casos de aceptación manuales

1. Tarea multi-paso → el grafo resuelve igual que el loop.
2. Pausa + reanudación desde checkpoint.
3. Caso de error → conditional edge lo redirige (no crash).

## Errores frecuentes a vigilar

- Usar LangGraph sin haber hecho el loop a mano (la Fase 9 es prerrequisito + E1).
- Poner TODA la lógica en el LLM (el determinismo es parte del valor).

## Semillas de preguntas (SIN respuestas)

1. ¿Por qué? ¿Por qué un grafo explicita la terminación mejor que un while?
2. ¿Qué pasaría si...? el checkpoint se guarda a mitad de una tool call?
3. Diseño: ¿qué nodos serían determinísticos en tu agente de payments?

## Cambios en vivo que el tutor puede pedir

- "Agregá un nodo de validación antes de ejecutar tools."
- "Cambiá una conditional edge y explicá el nuevo flujo."

## Definition of Done

- [ ] Ejecuta y cumple los criterios
- [ ] Explica cada decisión sin mirar el código
- [ ] Resuelve el cambio en vivo
- [ ] Sección de la fase en PROGRESS.md completa (comparación loop TS vs grafo Python)
- [ ] Ledger actualizado
