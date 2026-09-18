---
fase: 7
titulo: "Tools + SQL"
tier: B
horas_estimadas: 5
evalua_seguridad: true
prerrequisitos: [6]
temario_utn: "M2 · Clase 4 (Function Calling y Tool Design)"
---

## Objetivo (una oración)

Conectar tools a una DB real con repositorio/service/adapter, prohibiendo el SQL generado por el modelo.

## Conceptos a dominar (ver `glosario.md`)

Repository → service → tool adapter (con zod en cada límite); SQL arbitrario del LLM (PROHIBIDO); tools de dominio; transacciones y límites de consulta; SQLite primero.

## Pregunta ancla

"¿Qué impediría que un prompt malicioso ejecute una operación peligrosa en la DB?"

## Ejercicio y criterios de aceptación (medibles)

SQLite con payments, payment_events, payment_retries + repository/service/tool adapter.

- [ ] La DB está seedeada desde `payments.json` con migraciones simples.
- [ ] Ninguna tool acepta SQL del modelo (solo operaciones de dominio con params validados).
- [ ] Queries limitadas (LIMIT/timeout) y errores tipados.
- [ ] `executeSql(sqlFromLLM)` no existe en ninguna capa.

## Casos de aceptación manuales

1. "¿Cuántas retries tuvo el payment X?" → tool de dominio, no SQL.
2. Intento de inyección en un parámetro → bloqueado por el schema.
3. Query sin resultados → error/respuesta tipada, no crash.

## Errores frecuentes a vigilar

- "Solo es un prototipo" → abrir SQL arbitrario igual (deuda de seguridad).
- Acceder a la DB desde tools sin pasar por el repository.

## Semillas de preguntas (SIN respuestas)

1. ¿Por qué? ¿Por qué tools de dominio y no SQL genérico?
2. ¿Qué pasaría si...? un agente con SQL puede hacer `DROP TABLE`?
3. Diseño: ¿qué validaciones tendría tu repository en producción?

## Cambios en vivo que el tutor puede pedir

- "Agregá paginación a una tool y validá el límite."
- "Logueá cada tool call con args (sin datos sensibles)."

## Definition of Done

- [ ] Ejecuta y cumple los criterios
- [ ] Explica cada decisión sin mirar el código
- [ ] Resuelve el cambio en vivo
- [ ] Sección de la fase en PROGRESS.md completa (+ Evidencia)
- [ ] Ledger actualizado
