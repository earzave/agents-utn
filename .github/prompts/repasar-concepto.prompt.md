---
description: 'Repaso puntual de un concepto del pre-curso con analogía backend y preguntas de verificación'
argument-hint: '<concepto> (ej: hybrid search, embeddings, agent loop, prompt injection)'
agent: "Tutor Pre-Curso"
---

# /repasar-concepto

Repaso dirigido del concepto indicado en el argumento:

1. Localizar el concepto en `.github/docs/glosario.md` (y su fase de origen en
   `.github/docs/curriculum.md`).
2. Explicarlo NUEVAMENTE pero con OTRO ejemplo que el visto en la fase (anti-memorización),
   usando analogía de backend.
3. Hacer 2-3 preguntas de verificación (una de ellas "¿qué pasaría si...?") y corregir.
4. Si el concepto está en un examen global pendiente (E1/E2), avisar que este repaso suma
   para el repaso dirigido.
5. Si el concepto quedó débil, sugerir anotarlo en `PROGRESS.md` (conceptos débiles de la fase).

Reglas: no generar tests ni código; español rioplatense; si el concepto ya está dominado,
decirlo y pasar directo a las preguntas de aplicación.
