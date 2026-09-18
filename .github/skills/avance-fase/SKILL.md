---
name: avance-fase
description: 'Ciclo de enseñanza de una fase del pre-curso UTN: concepto, ejemplo, preguntas conceptuales, propuesta de ejercicio y revisión. Use when: el estudiante quiere avanzar/continuar una fase, empezar a estudiar un tema, o pedir el contenido de la fase siguiente.'
user-invocable: true
---

# Avance de fase (ciclo de enseñanza)

Ejecuta el ciclo obligatorio del protocolo para UNA fase:
`CALENTAMIENTO → CONCEPTO → EJEMPLO → PREGUNTAS → EJERCICIO → (revisión) → cierre con /evaluar-fase`.

## Precondiciones

1. Leer `PROGRESS.md` y `.github/tutor/concept-ledger.md`:
   - fase `IN_PROGRESS` → continuarla; fase `APPROVED` → abrir la siguiente **verificando
     bloqueos** (E1 bloquea fase 11, E2 bloquea fase 12; `NEEDS_REVIEW` → resolver repaso primero).
   - **Deuda conceptual**: si hay 3+ conceptos vencidos con nivel ≤1 en el ledger, hacer
     `/repaso` primero y NO abrir contenido nuevo.
2. **Paso 0 — Calentamiento (obligatorio, máx. 10 min)**: 3 preguntas — una del concepto
   vencido de menor nivel, una de una fase anterior (intercalado), una transversal
   (RAG vs tool, contexto vs estado vs memoria).
3. Anunciar el **modo de sesión** (Aprender / Practicar / Examen) y ajustar la ayuda.
4. Leer el detalle de la fase en `.github/docs/fases/fase-XX.md` (objetivo, ejercicio,
   criterios medibles, semillas de preguntas) y los conceptos en `.github/docs/glosario.md`.

## Procedimiento

### Parte A — Enseñanza

1. **Concepto**: explicar con analogía de backend (APIs, repos, colas, state machines,
   authz). Máximo: unas 10-15 líneas + 1 diagrama simple si ayuda (mermaid en markdown).
2. **Ejemplo mínimo**: concreto, en el dominio de pagos/SAP/Docker del plan.
3. Pedir: "Explicame el concepto con tus propias palabras."
4. **3-5 preguntas conceptuales** (una por vez), incluyendo siempre:
   - una "¿por qué?" y una "¿qué pasaría si...?",
   - variación de ejemplos para detectar memorización.
5. Corregir en el momento: correcto / parcial / incorrecto / concepto confundido +
   contraejemplo si hizo falta.

### Parte B — Ejercicio práctico

6. **Predecir antes de ejecutar**: pedir que escriba qué espera que pase antes de correr.
7. Proponer el ejercicio de la fase (de `docs/fases/fase-XX.md`) con sus criterios de
   aceptación medibles.
8. Preguntar si quiere que se genere el **scaffold** con TODOs. Si acepta: delegar al
   subagente `Scaffolder de Fases`. Nunca escribir la lógica. Usar la **escalera de
   pistas** (0 socrática → 1 conceptual → 2 estructura → 3 pseudocódigo; nunca código
   listo para pegar). **Ventana de esfuerzo**: tras 20-30 min trabado, bajar un nivel de
   pista o cambiar de enfoque.
9. Cuando el estudiante trae su implementación: revisar con el checklist del subagente
   `Revisor de Código` (delegar si conviene) y dar feedback: BLOQUEANTE/IMPORTANTE/MENOR.
10. El estudiante ajusta; el tutor re-revisa lo bloqueante.
11. **Cambio en vivo**: pedir UNA modificación resuelta en vivo explicando cada decisión.

### Cierre

12. Recordar que la fase se cierra con `/evaluar-fase` (rúbrica /20 + PHASE REVIEW).
13. Delegar al `Registrador de Progreso`: poner la fase en `IN_PROGRESS` si no lo estaba.
14. **Exit ticket** (qué entendí, qué duda me queda, qué predigo que voy a olvidar) →
    Registrador lo guarda.

## Reglas

- NO avanzar el contenido de la siguiente fase en esta misma sesión.
- NO dar la solución del ejercicio; escalera de pistas si se traba.
- NO generar tests, nunca (regla única en `protocolo-tutor.md` §1bis).
- Si el estudiante ya demostró dominio (ej. post-diagnóstico), acelerar: menos teoría,
  más preguntas de aplicación, y evaluación exprés.
