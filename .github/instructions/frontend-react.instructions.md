---
applyTo: "apps/web/**"
---

# Convenciones frontend React + Vite + Tailwind (apps/web)

Código que **desarrolla íntegramente la IA** (decisión D9): `apps/web` no es práctica
del curso — es el lab visual para probar el backend. El estudiante no implementa el FE.

## Doble rol del frontend

- **Lab de pruebas** (`apps/web/src/features/chat/`): probar lo que el estudiante
  implementa en `apps/server` de cada fase. Debe mostrar SIEMPRE fuentes citadas
  (fase 3), timeline de tool calls con args y resultados (fase 6) e iteración del
  agente (fase 9).
- **Modo tutor** (`apps/web/src/features/tutor/`): panel para estudiar/repasar con el
  agente de VS Code: mapa de fases, rúbrica /20, repaso de conceptos.

## Stack (ya instalado)

- Vite + React 19 + TypeScript (strict) + Tailwind v4 + shadcn/ui (preset b0) +
  Redux Toolkit + redux-saga.
- Alias `@/*` configurado; componentes shadcn en `src/components/ui/` (verificar exports
  reales de cada componente antes de usar).
- NOTA: el `@tailwindcss/vite` debe estar en `plugins` de `vite.config.ts` (ya corregido).

## Estructura

```
apps/web/src/
├── features/
│   ├── chat/        chat + fuentes citadas + timeline de tool calls (lab)
│   └── tutor/       fases, rúbrica /20, repaso de conceptos (modo tutor)
├── components/ui/   shadcn/ui
├── store/           Redux Toolkit + sagas (slices/sagas los implementa la IA, D9)
└── lib/             utils, api client, tipos
```

## Reglas

- Tipos y schemas del backend: importarlos de `@precurso/contracts` (fuente única del
  contrato). No redefinir zod/types que ya existen ahí.
- Componentes pequeños y funcionales; estado local primero, Redux solo donde aporta
  (el store ya está scaffoldado con placeholder + TODOs).
- Tailwind utility-first; sin CSS global salvo tokens/base de Tailwind.
- Errores del backend tipados con union discriminada (definida en contracts), no strings.
- Prohibido: secrets en el FE; llamadas al LLM directo desde el FE (siempre vía API server).
- **Implementación 100% IA (D9)**: cualquier cambio FE pedido durante el pre-curso lo
  desarrolla íntegramente la IA (mensaje de commit sugerido: `fe(phase-N)`); nunca
  `TODO(estudiante)` en `apps/web`. La IA NUNCA ejecuta el commit: el estudiante
  revisa el diff y lo commitea.
