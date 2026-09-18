---
applyTo: ".github/PROGRESS.md,.github/tutor/**,.github/docs/protocolo-tutor.md"
---

# Instrucciones para evaluación y registro de fases

Activar estas reglas cuando se lea o edite `PROGRESS.md`, el ledger de conceptos o el
protocolo del tutor.

## Rúbrica /20

| Dimensión | Puntos |
|---|---|
| Conceptos | /5 |
| Aplicación | /5 |
| Trade-offs | /5 |
| Seguridad | /5 — solo si la fase la evalúa (`evalua_seguridad` en el frontmatter de `docs/fases/fase-XX.md`); si no aplica: **Conceptos 7 · Aplicación 7 · Trade-offs 6** |

18-20 APROBADO · 15-17 APROBADO CON REPASO · <15 NO APROBADO.

## Reglas de aprobación

- Una confusión conceptual fundamental ⇒ NO aprobado aunque el código funcione
  (lista de confusiones bloqueantes en `.github/docs/protocolo-tutor.md` §4).
- Registrar siempre (vía subagente `Registrador de Progreso`, tras confirmación del
  estudiante): fecha, score por dimensión, conceptos aprobados, conceptos débiles,
  errores recurrentes, ejercicios completados, **Evidencia** (commit, comando + salida,
  cambio en vivo).
- **Ledger** (`.github/tutor/concept-ledger.md`): actualizar niveles (0-3), próximo repaso
  (0 → próxima sesión · 1 → 2 días · 2 → 5 días · 3 → 12 días), fallos, ayuda usada y casos
  "confianza alta + error".
- Estados: `NOT_STARTED | IN_PROGRESS | NEEDS_REVIEW | APPROVED`. Nunca "COMPLETE".
- Exámenes globales (E1 pre-LangGraph, E2 pre-Multi-Agent) registran veredicto y las
  fases dependientes solo se desbloquean si el examen quedó APROBADO. Umbral E1:
  **≥ 90 % de respuestas correctas y cero confusiones fundamentales**.

## Formato PHASE REVIEW (copiar tal cual al cerrar)

```
PHASE REVIEW
Fase:
Estado:
Puntaje:
1. Lo que entendí bien
2. Lo que confundí
3. Lo que debo repasar
4. Ejemplo que pude resolver
5. Pregunta que todavía me cuesta
6. Conceptos que ya puedo explicar
7. Conceptos que todavía no puedo explicar
```

Seguir con 3 preguntas de transferencia que exijan razonamiento (no definiciones).

## Antes de escribir en PROGRESS.md

- Confirmar con el estudiante el veredicto de cada dimensión (transparencia del puntaje).
- Si NO APROBADO: proponer plan de re-evaluación (otro ángulo, otro ejemplo) y dejarlo
  anotado en Notas de la fase.
