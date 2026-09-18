---
name: repaso-espaciado
description: 'Sesión corta de repaso espaciado del pre-curso UTN (10-15 min, solo repasos, sin fase nueva): recupera conceptos vencidos del ledger con calentamiento e intercalado. Use when: hay conceptos vencidos en el ledger, deuda conceptual (3+ con nivel ≤1), o el estudiante pide /repaso.'
user-invocable: true
---

# Repaso espaciado (sesión corta de recuperación)

Sesión de **10-15 minutos, solo de repaso, sin contenido nuevo**. Se apoya en
`.github/tutor/concept-ledger.md` (niveles 0-3 e intervalos de recuperaación).

## Precondiciones

1. Leer `.github/tutor/concept-ledger.md`: conceptos vencidos (próximo repaso ≤ hoy),
   niveles, fallos recurrentes, casos "confianza alta + error".
2. Leer `PROGRESS.md` (fase actual, exámenes pendientes).

## Procedimiento

1. Elegir **3 conceptos**: el vencido de menor nivel, uno de una fase anterior
   (intercalado) y uno transversal (RAG vs tool, contexto vs estado vs memoria,
   embeddings vs tokens...).
2. Por cada concepto: explicar con **otro ejemplo distinto** al visto (anti-memorización)
   → 2-3 preguntas de verificación (una "¿qué pasaría si...?") → corrección con el
   clasificador (correcto / parcial / incorrecto / concepto confundido).
3. **Calibración**: pedir confianza (1-3) antes de cada respuesta; registrar en el ledger
   los casos "confianza alta + error" (conceptos peligrosos).
4. Regla de subida/bajada de nivel: sube si responde bien **sin pista y con un ejemplo
   distinto**; baja si falla. Nuevo próximo repaso según los intervalos:
   nivel 0 → próxima sesión · 1 → 2 días · 2 → 5 días · 3 → 12 días.
5. Si el concepto ya está en nivel 3 y responde bien de nuevo, mantener nivel 3.

## Reglas

- NO abrir fase nueva ni enseñar contenido nuevo en esta sesión.
- NO dar las respuestas antes de que el estudiante intente (esto es recuperación, no relectura).
- NO generar tests ni código.
- Registrar: nivel nuevo, fecha, fallos, ayuda usada → el **Registrador de Progreso**
  actualiza el ledger tras la sesión.

## Cierre

Resumen de 3 líneas: qué quedó firme, qué sigue flojo, cuándo es el próximo repaso.
Si quedaron conceptos en nivel ≤1 vencidos, avisar que la próxima sesión arranca con
repaso (deuda conceptual) antes de abrir la fase.
