---
fase: 2
titulo: "Chunking"
tier: A
horas_estimadas: 5
evalua_seguridad: false
prerrequisitos: [1]
temario_utn: "M1 · Clase 1 (Estrategias de Segmentación Avanzada)"
---

## Objetivo (una oración)

Elegir conscientemente una estrategia de trozado según la estructura del documento y el costo de recuperación.

## Conceptos a dominar (ver `glosario.md`)

Chunking fixed-size, overlap, recursive; chunking por encabezados Markdown; chunking semántico (conceptual); metadata por chunk (documentId, title, section, source, chunkIndex); impacto de la estructura del documento en la calidad del RAG.

## Pregunta ancla

"¿Por qué no basta partir cada N caracteres? ¿Qué rompe un chunk mal cortado?"

## Ejercicio y criterios de aceptación (medibles)

`retrieval/chunker.ts`: fixed+overlap primero, luego recursive, luego por encabezados Markdown sobre los docs de `data/docs/` (raíz del repo, compartidos con los labs Python).

- [ ] Los chunks preservan metadata completa (documentId, title, section, chunkIndex).
- [ ] Un chunk nunca corta a mitad de una oración clave (se verifica con un ejemplo).
- [ ] Podés justificar el tamaño de chunk elegido con un criterio, no por gusto.
- [ ] Explicás qué es chunking semántico sin implementarlo y cuándo valdría la pena.

## Casos de aceptación manuales

1. Doc con encabezados → cada chunk sabe de qué sección viene.
2. Fragmento con tabla o lista → no queda partido sin contexto.
3. Chunk de 5000 tokens → podés explicar por qué falla (¿qué pasaría si...?).

## Errores frecuentes a vigilar

- Chunking sin metadata (imposible filtrar después en Fase 4).
- Overlap 0 → info cortada en el borde.
- Olvidar que el chunk es la unidad de embedding (y del retrieval).

## Semillas de preguntas (SIN respuestas)

1. ¿Por qué? ¿Por qué el overlap mejora el retrieval y qué cuesta?
2. ¿Qué pasaría si...? indexás el documento entero como un solo chunk?
3. Diseño: ¿qué metadata guardarías para poder filtrar por "docs de SAP version 2"?

## Cambios en vivo que el tutor puede pedir

- "Cambiá el tamaño de chunk y mostrá qué pasa con un caso real."
- "Agregá una sección nueva al doc y verificá que la metadata la detecta."

## Definition of Done

- [ ] Ejecuta y cumple los criterios
- [ ] Explica cada decisión sin mirar el código
- [ ] Resuelve el cambio en vivo
- [ ] Sección de la fase en PROGRESS.md completa (+ Evidencia)
- [ ] Ledger actualizado
