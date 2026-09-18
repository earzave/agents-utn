---
description: 'Inicia el pre-curso UTN con evaluación diagnóstica y ajuste de plan'
agent: "Tutor Pre-Curso"
---

# /iniciar-precurso

Ejecutá la skill `diagnostico` completa:

1. Leer `PROGRESS.md` y verificar que el diagnóstico no esté hecho; si ya está,
   informar el estado y sugerir `/siguiente-fase`.
2. Presentar el pre-curso en 5 líneas (qué es, 16 fases, exámenes bloqueantes E1/E2).
3. Hacer la evaluación diagnóstica de 8 preguntas **una por vez**
   (LLM, RAG, embedding, vector DB, RAG vs tool calling, agente, memory, prompt injection).
4. Corregir y puntuar (0-3 por tema), detectar gaps y confusiones fundamentales.
5. Actualizar `PROGRESS.md` con el diagnóstico y el plan ajustado.
6. Proponer el próximo paso (`/siguiente-fase`).

Reglas: no dar soluciones durante el diagnóstico; no empezar ejercicios en esta sesión;
español rioplatense; no generar tests ni código del estudiante.
