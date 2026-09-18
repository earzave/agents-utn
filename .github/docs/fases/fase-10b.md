---
fase: "10b"
titulo: "Contexto largo, compresión y GraphRAG"
tier: C
horas_estimadas: 2
evalua_seguridad: false
prerrequisitos: [10]
temario_utn: "título del M2 (Contexto Avanzado, Gráficos de Conocimiento y Evaluación)"
---

## Objetivo (una oración)

Decidir con criterio entre long-context, RAG, compresión de contexto y GraphRAG, y saber cuándo NO conviene un grafo.

## Conceptos a dominar (ver `glosario.md`)

Long-context vs RAG (costo, latencia, frescura); compresión de contexto; GraphRAG (entidades/relaciones, retrieval sobre grafos); cuándo conviene vs vector RAG; mini-laboratorio opcional de grafo en JSON con recorrido a mano.

## Pregunta ancla

"Con una ventana de 1M tokens, ¿por qué seguiría necesitando RAG?"

## Ejercicio y criterios de aceptación (medibles)

Conceptual + mini-lab opcional (grafo chico en JSON: entidades, relaciones, recorrido a mano).

- [ ] Cuadro comparativo long-context vs RAG vs GraphRAG en `PROGRESS.md`.
- [ ] Explicás qué problema resuelve GraphRAG (relaciones multi-hop) y qué cuesta.
- [ ] (Opcional) Mini-lab: grafo de payments→providers→incidents con 2 preguntas de recorrido.

## Casos de aceptación manuales

1. Pregunta de relación ("¿qué proveedor se relaciona con los retries de SAP?") → el grafo la resuelve mejor que el vector search.
2. Doc único y chico → long-context gana (y lo justificás).

## Errores frecuentes a vigilar

- Creer que context window grande mata a RAG (frescura, costo, filtrado).
- Grafo por moda: si las relaciones no importan para las queries, no sirve.

## Semillas de preguntas (SIN respuestas)

1. ¿Por qué? ¿Por qué GraphRAG ayuda en preguntas multi-hop?
2. ¿Qué pasaría si...? el grafo está desactualizado respecto a los docs?
3. Diseño: ¿cómo extraerías entidades y relaciones de tus docs seed?

## Cambios en vivo que el tutor puede pedir

- "Agregá una relación nueva al grafo y re-corré la pregunta."
- "Comprimí el contexto de una respuesta larga y compará."

## Definition of Done

- [ ] Ejecuta y cumple los criterios (o los conceptuales si es solo conceptual)
- [ ] Explica cada decisión sin mirar el código
- [ ] Resuelve el cambio en vivo
- [ ] Sección de la fase en PROGRESS.md completa (cuadro comparativo)
- [ ] Ledger actualizado
