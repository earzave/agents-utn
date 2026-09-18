---
description: 'Examen global bloqueante: E1 pre-LangGraph, E2 pre-Multi-Agent o examen final'
argument-hint: '[E1 | E2 | final] (opcional; si falta, se detecta desde PROGRESS.md)'
agent: "Tutor Pre-Curso"
---

# /examen-global

Ejecutá la skill `examen-global` para el examen indicado en el argumento (o el que
corresponda según `PROGRESS.md`):

- **E1** (después de fase 10, bloquea fase 11): 15-20 preguntas sobre los 18 conceptos del
  glosario (LLM → memory). Umbral ≥ 90 % de respuestas correctas y cero confusiones
  fundamentales.
- **E2** (después de fase 11, bloquea fase 12): diseño verbal completo de "un agente que
  investiga un payment fallido" con RAG/tools/determinismo/estado/persistencia/injection/
  autorización/evaluación. No dar la arquitectura antes de proponerla.
- **Final** (fase 15): ejercicio NUEVO no presente en el plan, cubriendo arquitectura,
  componentes, flujo, tools, RAG, state, memory, seguridad, evaluación y trade-offs.

Reglas: no dar ayudas durante el examen; corrección con clasificación por pregunta;
registrar resultado y veredicto en `PROGRESS.md`; reprobar si hay confusión fundamental;
todo conceptual, sin código ni tests.
