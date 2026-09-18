---
fase: "3F"
titulo: "Puente a frameworks (LlamaIndex / LangChain)"
tier: C
horas_estimadas: 3
evalua_seguridad: false
prerrequisitos: [3, "3E"]
temario_utn: "transversal (el curso usa LangChain y LlamaIndex desde el inicio)"
---

## Objetivo (una oración)

Rehacer el RAG de la Fase 3 con un framework (LlamaIndex.TS o LangChain.js) y entender qué aporta, qué oculta y qué cede.

## Conceptos a dominar (ver `glosario.md`)

Qué oculta un framework (chunking, embeddings, retrieval); comparación por líneas de código, control y debuggabilidad; cuándo conviene y cuándo no; regla del plan: primero a mano, después el framework.

## Pregunta ancla

"¿Qué pasa cuando el framework hace algo distinto a lo que tu versión a mano hacía? ¿Podés debuggearlo?"

## Ejercicio y criterios de aceptación (medibles)

Mismo pipeline de la Fase 3 con el framework elegido, comparado contra tu versión.

- [ ] El RAG funciona con el framework (misma pregunta dorada de 3E).
- [ ] Tabla comparativa en `PROGRESS.md`: líneas, control, qué oculta.
- [ ] Podés explicar qué harías si el framework no soporta tu filtro de metadata.

## Casos de aceptación manuales

1. Misma query → misma fuente top-1 (o explicar la diferencia).
2. Customizar el chunking del framework (o documentar por qué no).
3. Comparar recall@k vs tu versión a mano.

## Errores frecuentes a vigilar

- Adoptar el framework sin entender qué hace por debajo.
- Copiar la config default sin justificar (chunk size, top-K).

## Semillas de preguntas (SIN respuestas)

1. ¿Por qué? ¿Por qué el plan insiste en hacer a mano primero?
2. ¿Qué pasaría si...? el framework cambia su API en la próxima versión?
3. Diseño: ¿qué capa encapsularías vos y cuál delegarías al framework?

## Cambios en vivo que el tutor puede pedir

- "Cambiá el retriever del framework por el tuyo en un endpoint."
- "Mostrá dónde quedó la metadata en el pipeline del framework."

## Definition of Done

- [ ] Ejecuta y cumple los criterios
- [ ] Explica cada decisión sin mirar el código
- [ ] Resuelve el cambio en vivo
- [ ] Sección de la fase en PROGRESS.md completa (tabla comparativa)
- [ ] Ledger actualizado
