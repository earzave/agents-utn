---
fase: "3F-Py"
titulo: "Puente a Python (LangChain en labs/python)"
tier: C
horas_estimadas: 3
evalua_seguridad: false
prerrequisitos: [3, "3E", "P"]
temario_utn: "transversal (D1=TS+Python: conceptos a mano en TS, frameworks del curso en Python)"
---

## Objetivo (una oración)

Portar el RAG de la Fase 3 a Python (LangChain) en `labs/python/`, mapeando cada concepto
TS ya aprendido a su equivalente Python y comparando los schemas zod vs Pydantic.

## Conceptos a dominar (ver `glosario.md`)

Entorno virtual y reproducibilidad de dependencias (venv + requirements); Pydantic como
equivalente de zod en los límites; JSON Schema generado por zod vs Pydantic (mismo
concepto, distinta herramienta); mapeo de capas TS → Python; LangChain (Python) qué
oculta vs tu pipeline a mano.

## Pregunta ancla

"Los conceptos ya los tenés: ¿qué cambia con solo cambiar de idioma?"

## Prerrequisito bloqueante: entorno Python creado y verificado

Antes de escribir código: **entorno virtual creado y verificado** (ver sección
"Preparar el entorno") y **gestor de dependencias elegido** (por defecto pip +
`requirements.txt`; si se elige otro, registrarlo en `decisiones.md`). La verificación
de embeddings con script Python ya se hizo en T-10 (semana 1), así que el entorno existe.

## Preparar el entorno (Windows / PowerShell)

- Antes de elegir la versión de Python, **verificar qué versiones soportan las librerías
  del curso** (LlamaIndex o LangChain, CrewAI, RAGAS, AutoGen, LangGraph). No asumir;
  consultar la documentación de cada una y registrar la decisión en `decisiones.md`.
- Crear el entorno virtual **dentro de `labs/python/`** (`.venv/`) y usar siempre el
  intérprete de ese entorno.
- Si PowerShell bloquea la activación del entorno por la política de ejecución de
  scripts, dos salidas: cambiar la política para el usuario actual
  (`Set-ExecutionPolicy -Scope CurrentUser`) o invocar directamente
  `labs\python\.venv\Scripts\python.exe`. Anotar la elegida en `decisiones.md`.
- Fijar las dependencias en el archivo del gestor elegido (`requirements.txt` por
  defecto) para poder reproducir el entorno.

## Ejercicio y criterios de aceptación (medibles)

Mismo pipeline de la Fase 3 con LangChain en `labs/python/`, leyendo `data/` (solo
lectura) y comparado contra tu versión TS.

- [ ] El RAG corre en `labs/python/` con los docs de `data/docs/` y la misma pregunta
      dorada de 3E.
- [ ] Los límites (entrada de la tool / salida estructurada del LLM) validan con
      **Pydantic**, sin compartir schemas con TS.
- [ ] Tabla de mapeo en `PROGRESS.md`: concepto TS ↔ Python (LlmProvider ↔ provider,
      ToolDefinition ↔ `@tool`/schema Pydantic, vector store, chunker).
- [ ] Comparación de JSON Schema: el que genera zod para una tool de la Fase 6 vs el
      que genera Pydantic para la misma tool — diferencias anotadas.

**Criterio opcional (recomendado):** armar la tabla completa de diferencias del JSON
Schema generado (opcionalidad de campos, defaults, strict, coerción) y anotarla en la
tabla de mapeo TS ↔ Python.

## Casos de aceptación manuales

1. Misma query de 3E → misma fuente top-1 en Python (o explicar la diferencia).
2. Cambiar el modelo del provider en Python y correr de nuevo.
3. Pasar un payload inválido → Pydantic lo rechaza (equivalente al zod de la Fase 0).

## Errores frecuentes a vigilar

- Portar TODO el monorepo: es un puente, no un re-write.
- Duplicar los datos dentro de `labs/python/` (leerlos de `data/`).
- Usar el Python global en vez del intérprete de `.venv/`.

## Semillas de preguntas (SIN respuestas)

1. ¿Por qué? ¿Por qué Pydantic y zod resuelven el mismo problema de forma distinta?
2. ¿Qué pasaría si...? el modelo de embeddings en Python no es el mismo que en TS?
3. Diseño: ¿qué estructura de tu agente TS traducirías directo y qué conviene re-pensar?

## Cambios en vivo que el tutor puede pedir

- "Cambiar una tool del ejemplo por otra y correr."
- "Mostrá dónde quedó la metadata en el pipeline de Python."

## Definition of Done

- [ ] Ejecuta y cumple los criterios
- [ ] Explica cada decisión sin mirar el código
- [ ] Resuelve el cambio en vivo
- [ ] Sección de la fase en PROGRESS.md completa (tabla de mapeo TS ↔ Python)
- [ ] Ledger actualizado
