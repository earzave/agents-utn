/**
 * Fase 0 — Contrato del chat (FE/BE).
 *
 * TODO(estudiante): definí los schemas zod del endpoint POST /chat y exportá los
 * tipos con z.infer. Pistas conceptuales (no la solución):
 *
 * - ChatRequestSchema: mensaje del usuario (string, mínimo 1), system prompt
 *   opcional, temperature acotada (¿qué rango permite el proveedor y por qué
 *   acotarlo acá y no confiar en el cliente?), maxTokens opcional.
 * - ChatResponseSchema: contenido de la respuesta, modelo usado, uso de tokens
 *   opcional (¿para qué te sirve exponer el uso en el lab?).
 * - Pensá en el contrato como la API pública de un servicio: strict() en los
 *   límites, mensajes de error de validación accionables.
 *
 * Al terminar: re-exportalo desde src/index.ts (descomentando la línea).
 */

import { z } from 'zod'

export {};