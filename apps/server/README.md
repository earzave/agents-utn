# @precurso/server — Backend del pre-curso

Backend NestJS 11 del "AI Engineering Assistant" (Payment Investigation Agent). Los
slices de cada fase se agregan en `src/` (ver `.github/docs/arquitectura-precurso.md`
para la separación de capas: domain / llm / retrieval / chat / tools / orchestration /
memory / evaluation / security / infra / scripts).

## Setup

```bash
# desde la raíz del monorepo
npm install          # instala workspaces + buildea @precurso/contracts
npm run dev:server   # NestJS en watch (puerto 3000 por defecto)
```

Configuración por `.env`: copiar `.env.example` a `.env` y completar. Nunca commitear
secrets (`.env` ya está en `.gitignore`).

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run start:dev` | NestJS en watch mode |
| `npm run build` | compila a `dist/` |
| `npm run lint` | ESLint + Prettier (fix) |

## Contratos FE/BE

Los DTOs/schemas zod viven en `@precurso/contracts` (`packages/contracts`). Si agregás
un schema nuevo y TS no lo ve, buildeá contracts (`npm run build:contracts` desde la
raíz) o dejá `npm run watch:contracts` corriendo.

## Notas por fase

Las decisiones y trade-offs de cada fase se registran en `.github/PROGRESS.md`
(sección de la fase + PHASE REVIEW); todo el contexto para la IA vive consolidado en
`.github/`. El estado del avance es fuente única: `.github/PROGRESS.md`.

> Nota: este proyecto **no incluye tests** — decisión del estudiante; el criterio de
> éxito de cada fase es el endpoint/función ejecutable + el PHASE REVIEW conceptual.
