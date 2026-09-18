# Análisis de `agents-sdk-demos` — patrones rescatados

> **Nota:** el código original de `agents-sdk-demos/` (Python, OpenAI Agents SDK, demos
> de un compañero) fue eliminado del workspace después de extraer estos patrones.
> Este documento conserva lo útil como **material de referencia conceptual**.

El compañero investigó el **OpenAI Agents SDK (Python)** con dos demos complementarios:

| Demo | Shape | Conceptos demostrados |
|---|---|---|
| Support (`support_agents.py`) | Multi-agent: 4 agentes, handoffs estructurados, policy layer en Python, instrucciones dinámicas por turno | Fases 6, 9, 12, 13 |
| Card (`credit_card_agent.py`) | Single-agent: 1 agente, instrucción estática, 6 tools read-only, 2 guardrails | Fases 6, 13 |

## Veredicto general

Útil como material de referencia conceptual, NO como código a portar. El pre-curso
construye todo en TypeScript sin frameworks al principio, y el curso UTN usa el stack
LangChain/LangGraph/CrewAI. Los **patrones** del código son los que el plan exige aprender.

---

## Patrones rescatados (por fase)

### Phase 6 — Tool calling
- Tools **definidas con schema + docstring**, devuelven strings planos al modelo.
  En TypeScript: zod → JSON Schema, mismo concepto.
- **Las tools no reciben ids sensibles como argumento cuando el contexto ya los conoce**:
  en el demo de tarjeta ninguna tool toma `card_id` — el id vive en el *run context* que
  el modelo no puede escribir. Lección de seguridad: *"un argumento que el modelo llena
  es un argumento que el modelo puede llenar con la tarjeta de otro"*.
- Tools read-only ⇒ no necesitan policy layer. Mapeo directo a la regla del pre-curso:
  el LLM decide *qué* tool, el código decide *qué* operaciones existen.

### Phase 7 — Tools + SQL
- Toda mutación pasa por helpers de escritura y el repositorio valida.
  En el pre-curso: repository → service → tool adapter (zod en el adapter).

### Phase 9 — Agent loop
- El `Runner` del SDK es la versión "comprada" del loop manual que construiremos a mano.
  Útil para comparar después de la fase 9: qué hizo el SDK por nosotros (loop, guardrails,
  session, handoff routing) y qué haríamos nosotros.

### Phase 10 — Estado y memoria
- Run context = **state local que viaja a tools y callbacks pero NUNCA al modelo**. Es la
  separación STATE/CONTEXT que pide la fase 10, en un solo objeto.
- SQLite session = **memory** persistida entre turnos. Mismo split conceptual: context
  (mensajes de esta ejecución) vs session (persistencia).
- Handoff payloads = estado tipado entre agentes, que sobrevive filtros porque viaja por
  callback → local context → instrucciones dinámicas. Para la fase 12: los handoffs son
  *estructuras validadas*, no prosa.

### Phase 12 — Multi-agent
- Agente de triage que **clasifica y deriva** (handoffs), agentes especializados con tools
  propias, y handoffs habilitados por estado (`is_enabled`) — un *conditional edge* antes
  de LangGraph.
- El supervisor/triage no resuelve: enruta. Mapea al Supervisor del plan.

### Phase 13 — Seguridad (lo más valioso)
- **Policy layer determinística fuera del prompt**: la política se re-ejecuta *dentro* de
  la tool que muta ("fail closed"). El modelo no puede discutir con aritmética.
- **Confirmation gate por número de turno**: "nada irreversible ocurre en el turno en que
  fue propuesto" — un `1 < 1` no es negociable con palabras. Equivale a human-in-the-loop
  asincrónico.
- **Dos tipos de guardrail**: (a) lookup real en DB para cross-account y (b) LLM judge
  para on-topic. La lección: *"la diferencia entre escribir código o usar un modelo
  juzgador es la pregunta central de cuándo escribir código"*. En el pre-curso: primero
  guardrails determinísticos; el juez-LLM es opcional y auditable.
- **Deliberadamente vagos frente a cross-account**: no confirman la existencia de datos de
  otro cliente (evita enumeración). Buena práctica para las respuestas de las tools.
- Al derivar a un agente especializado se le quitan las tools del agente anterior
  (least privilege por contexto).

---

## Qué NO portar (igual tras la eliminación del código)

- **No portar código Python**: el pre-curso es TypeScript puro sin SDK de agentes en las
  primeras fases. Los patrones se re-implementan a mano para entenderlos.
- **No usar el OpenAI Agents SDK como framework del pre-curso**: el plan exige loop manual
  antes de frameworks; el curso UTN usa LangChain/LangGraph/CrewAI. El SDK puede
  estudiarse opcionalmente en la fase 9 como "cómo lo resuelve la industria".

## Ideas opcionales adoptadas

1. **Modo `--selftest`-like**: los demos tenían un harness sin API key. El estudiante no
   quiere tests generados, pero sí puede construir un *demo script offline* por fase
   (entrada → salida esperada en consola) para verificar sin gastar tokens. Opcional.
2. **README con tabla comparativa** por demo — buen ejemplo de cómo documentar cada fase.
3. **Env vars con defaults + `.env`** — misma convención adoptada en el scaffold.