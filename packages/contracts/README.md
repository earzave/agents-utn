# @precurso/contracts

Schemas zod, DTOs e interfaces compartidos entre `apps/server` y `apps/web`.

- **Build:** `npm run build` (desde el paquete) o `npm run build:contracts` (raíz).
  Salida en `dist/` (CJS + `.d.ts`).
- **Dev:** correr `npm run watch:contracts` desde la raíz mientras se editan DTOs.
- **Consumo:** `import { ChatRequestSchema, type ChatRequest } from '@precurso/contracts'`

Reglas: solo schemas/tipos/constantes. Nada de lógica de negocio, nada de imports de
NestJS ni de React. TODOs marcados con `// TODO(estudiante):`.
