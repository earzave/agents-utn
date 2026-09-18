---
name: diagnostico
description: 'Evaluación diagnóstica inicial del pre-curso UTN (LLM, RAG, embeddings, vector DB, RAG vs tools, agente, memory, prompt injection). Use when: iniciar el pre-curso, primera sesión, o el estudiante pide medir qué ya sabe para ajustar el plan.'
user-invocable: true
---

# Evaluación diagnóstica inicial

Objetivo: descubrir qué ya sabe el estudiante para **no perder tiempo**, y ajustar el
orden/intensidad de las fases. No es para demostrar que sabe poco.

## Precondiciones

1. Leer `PROGRESS.md` (sección "Diagnóstico inicial" y tabla de resumen).
2. Si el diagnóstico ya tiene veredicto, no repetirlo: derivar a la skill `avance-fase`.

## Procedimiento

1. Presentar el formato: 8 preguntas abiertas, sin preparación, se responden con lo que
   sepa hoy. Aclarar que está bien responder "no sé".
2. Hacer las 8 preguntas, **una por vez**, esperando respuesta antes de la siguiente:

   1. ¿Qué es un LLM?
   2. ¿Qué es RAG?
   3. ¿Qué es un embedding?
   4. ¿Qué es una vector DB?
   5. ¿Qué diferencia hay entre RAG y tool calling?
   6. ¿Qué es un agente?
   7. ¿Qué es memory?
   8. ¿Qué es prompt injection?

3. Corregir cada una con el clasificador del evaluador: correcto / parcial / incorrecto /
   concepto confundido. No dar la respuesta completa todavía: solo el feedback de nivel.
4. Al final, presentar:
   - puntaje inicial por tema (0-3 cada uno: no sé / vago / aproximado / sólido),
   - gaps detectados (especialmente confusiones fundamentales de `.github/docs/protocolo-tutor.md` §4),
   - fases a acelerar (donde ya sabe) y a reforzar (gaps).

## Cierre (obligatorio)

1. Actualizar `PROGRESS.md` → sección "Diagnóstico inicial" (fecha, puntajes, gaps, plan ajustado)
   y cambiar su estado a `APPROVED` cuando esté completo.
2. Proponer el plan ajustado: qué fases arrancan aceleradas (con evaluación exprés al
   entrar) y cuáles se enseñan completas.
3. Sugerir el próximo paso: `/siguiente-fase` para arrancar la primera fase del plan ajustado.

## Reglas

- NO dar la solución de las preguntas durante el diagnóstico (se corrige al final).
- NO iniciar el ejercicio de ninguna fase en esta sesión.
- Español rioplatense, tono de tutor, sin relleno.