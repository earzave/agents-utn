---
fase: 0
titulo: "Mapa mental de LLMs"
tier: A
horas_estimadas: 4
evalua_seguridad: false
prerrequisitos: [D]
temario_utn: "base previa + modelos de frontera vía API"
---

# Objetivo (una oración)

Tener un mapa mental preciso de qué es y qué NO es un LLM, y consumir uno vía API con salida estructurada.

## Conceptos a dominar (ver `glosario.md`)

LLM, token, context window, prompt, roles system/user/assistant, temperature, structured output, hallucination, inference, model vs API, comparativa de proveedores de frontera (GPT-4o / Claude 3.5 / Gemini Pro / GLM: contexto, costo, latencia, soporte de tools — solo contexto, no decision).

## Pregunta ancla

"¿Qué parte del comportamiento de un LLM es determinística y cuál no? ¿Qué controlás vos y qué controla el proveedor?"

## Ejercicio y criterios de aceptación (medibles)

`POST /chat` con system prompt, temperatura configurable, límite de tokens y respuesta estructurada (zod valida el output).

- [ ] El endpoint valida entrada y salida con zod (schema en `packages/contracts`).
- [ ] La temperatura y el límite de tokens llegan por request, con defaults sensatos.
- [ ] `LlmProvider` es una interfaz; el proveedor (Ollama Cloud, OpenAI-compatible) vive solo en `llm/`.
- [ ] Un output malformado del modelo produce un error tipado, no un crash.

## Casos de aceptación manuales (reemplazan "tests")

1. Pedir una respuesta JSON estructurada → se parsea y valida.
2. Pedir algo que rompe el schema → error tipado claro.
3. Temperatura 0 vs 1.5 → diferencias observables y explicables.

## Errores frecuentes a vigilar

- Confundir tokens con palabras (confusión bloqueante).
- Pensar que temperature controla "calidad".
- Hardcodear la API key.

## Semillas de preguntas (SIN respuestas)

1. "¿Por qué?" — ¿por qué el mismo prompt puede dar respuestas distintas?
2. "¿Qué pasaría si...?" el prompt excede la context window?
3. Diseño: ¿dónde pondrías la llamada al LLM en una app NestJS y por qué?

## Cambios en vivo que el tutor puede pedir

- "Cambiá el modelo por otro proveedor sin tocar el controller."
- "Agregá un límite de longitud a la respuesta y validalo."

## Definition of Done

- [ ] Ejecuta y cumple los criterios
- [ ] Explica cada decisión sin mirar el código
- [ ] Resuelve el cambio en vivo
- [ ] Sección de la fase en PROGRESS.md completa (decisiones y trade-offs + Evidencia)
- [ ] Ledger actualizado
