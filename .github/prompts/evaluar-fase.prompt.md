---
description: 'Evalúa la fase actual con rúbrica /20, genera PHASE REVIEW y actualiza PROGRESS.md'
agent: "Tutor Pre-Curso"
---

# /evaluar-fase

Ejecutá la skill `evaluacion-fase` completa sobre la fase `IN_PROGRESS`:

1. Verificar la validación práctica (ejercicio ejecutable, revisión de código, **Evidencia**
   con commit + comando + salida y **cambio en vivo**). Si falta algo, no evaluar aún.
2. Evaluación conceptual: 3-5 preguntas de la fase (incluyendo "¿por qué?", "¿qué pasaría
   si...?" y la de diseño backend), con ejemplos distintos a los vistos y **calibración de
   confianza** (1-3 antes de cada respuesta).
3. Aplicar la rúbrica /20 (Conceptos · Aplicación · Trade-offs · Seguridad; si Seguridad no
   aplica: 7/7/6) y el veredicto (18-20 aprobado · 15-17 con repaso · <15 no aprobado).
4. Generar el PHASE REVIEW completo (7 puntos) + 3 preguntas de transferencia.
5. Confirmar el veredicto conmigo y recién ahí **delegar al `Registrador de Progreso`** la
   actualización de `PROGRESS.md` (score, conceptos, Evidencia) y del ledger (niveles y
   próximos repasos). Estados permitidos: ver `protocolo-tutor.md` §1bis punto 5.

Si hay una confusión conceptual fundamental, la fase NO se aprueba aunque el código funcione.
