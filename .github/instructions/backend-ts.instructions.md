---
applyTo: "apps/server/**/*.ts,packages/contracts/**/*.ts"
---

# Convenciones backend TypeScript (apps/server + packages/contracts)

Estas reglas aplican al código que **el estudiante escribe**. El tutor solo hace scaffold
con TODOs y revisa.

## packages/contracts (contrato compartido FE/BE)

- Fuente única de DTOs/interfaces/schemas zod. El **schema zod es la fuente de verdad**;
  los tipos se exponen con `z.infer`.
- **Cero lógica de negocio**: solo schemas, tipos, constantes y errores tipados
  compartidos. No importar de apps/server ni de apps/web jamás.
- Cambio de contrato: primero acá, luego server y web. Recordar buildear
  (`npm run build:contracts`) o dejar `npm run watch:contracts` corriendo, porque los
  apps consumen `dist/`.
- Re-exportar cada módulo nuevo desde `src/index.ts`.

## TypeScript

- `strict: true` (ya activo en el `tsconfig` del proyecto Nest). Sin `any` implícito;
  `unknown` + narrowing.
- `const` por defecto; enums con union types de string literal salvo que se necesite runtime.
- Nombres de dominio en inglés (Payment, PaymentEvent, RetryPolicy), comentarios en español.

## Estructura del proyecto (ya generado con Nest CLI en apps/server)

- Los módulos de cada fase se registran en `apps/server/src/app.module.ts`.
- El `AppController`/`AppService` del template son placeholders: se reemplazan al
  implementar la fase 0 (chat).
- NO crear/editar specs: los specs del template fueron eliminados; nunca regenerarlos.
- Consumir contratos desde `@precurso/contracts` (nunca redefinir schemas que ya
  existen en el paquete compartido).

## Límites con zod

- Todo límite externo valida con zod: endpoints HTTP, tool calls, outputs estructurados del
  LLM, mensajes del frontend.
- Inferir tipos TS desde schemas (`z.infer<typeof X>`) — el schema es la fuente de verdad.
- Rechazar explícitamente campos extra cuando el schema defina `strict()`.

## Separación de capas (obligatoria)

```
domain/         entidades y reglas puras, sin dependencias
llm/            interfaz LlmProvider + adapters de proveedor; NADIE más importa el SDK
retrieval/      chunker, embedder, vector-store, retriever, reranker
tools/          definición zod + adapter; los adapters llaman a services, no a la DB directo
orchestration/  agent loop, grafo, supervisor
memory/         sesiones y persistencia
infra/          db (sqlite/pg), config, logging
```

Reglas de dependencias:
- `domain` no importa de ninguna otra capa.
- `tools` y `orchestration` no acceden a la DB: pasan por services.
- `llm` es la única capa que conoce el proveedor (OpenAI-compatible u otro).

## Configuración

- `.env` + `.env.example` (plantilla sin secrets). Variables con defaults sensatos.
- Nunca loguear prompts completos ni keys; logs útiles y truncados.

## Errores

- Errores de dominio tipados (clases/union), nunca strings mágicos.
- Los endpoints mapean errores de dominio a códigos HTTP coherentes.

## Prohibido

- `executeSql(sqlFromLLM)` o cualquier SQL generado por el modelo.
- Credenciales en código.
- Frameworks (LangChain/LangGraph/etc.) antes de la fase que los introduce.
