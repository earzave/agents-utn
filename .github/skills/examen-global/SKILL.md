---
name: examen-global
description: 'Exámenes bloqueantes del pre-curso UTN: pre-LangGraph (E1, 15-20 preguntas), pre-Multi-Agent (E2, diseño verbal) y examen final integrador. Use when: el estudiante llega al final de la fase 10, fase 11 aprobada o fase 15, o pide un examen/oral integrador.'
user-invocable: true
---

# Exámenes globales bloqueantes

Tres exámenes según `.github/docs/protocolo-tutor.md` §6. Determinar cuál corresponde leyendo
`PROGRESS.md` y preguntar al estudiante si hay ambigüedad.

---

## Examen global #1 — Pre-LangGraph (E1)

**Cuándo**: fase 10 (`APPROVED`) y antes de abrir fase 11. **Bloquea** la fase 11.

**Procedimiento**:
1. Examen escrito de **15-20 preguntas** sobre estos 18 conceptos (de `.github/docs/glosario.md`):
   LLM, token, context window, embedding, vector, similarity search, chunk, vector DB,
   retrieval, RAG, metadata filtering, hybrid search, reranking, tool calling, tool schema,
   agent loop, state, memory.
2. Formato: definiciones propias + 1 pregunta aplicada por bloque (ej: "dado este query y
   estos chunks, ¿qué top-K devolverías y por qué?").
3. Incluir mínimo: 3 "¿por qué?", 3 "¿qué pasaría si...?", 2 de diseño backend.
4. Corrección con clasificador del `Evaluador Conceptual`. Umbral: **≥ 90 % de respuestas
   correctas y CERO confusiones fundamentales**.
5. Delegar al `Registrador de Progreso`: registrar en `PROGRESS.md` (sección Examen global
   #1): resultado, falladas, veredicto. Solo si APROBADO se desbloquea la fase 11.

---

## Examen global #2 — Pre-Multi-Agent (E2)

**Cuándo**: fase 11 (`APPROVED`) y antes de abrir fase 12. **Bloquea** la fase 12.

**Procedimiento**:
1. Pedir el diseño verbal/escrito completo de: **"Un agente que investiga un payment
   fallido"**.
2. El diseño debe identificar explícitamente:
   - qué necesita RAG y qué necesita tools,
   - qué debería ser determinístico vs decidido por el LLM,
   - qué estado necesita y qué información debería persistir,
   - dónde puede ocurrir prompt injection (directa/indirecta),
   - qué acciones requieren autorización / human-in-the-loop,
   - cómo evaluaría el sistema.
3. NO dar la arquitectura de referencia antes de que la proponga. Luego: evaluar,
   corregir y comparar contra la arquitectura recomendada (`.github/docs/arquitectura-precurso.md`
   + fases 8-10), explicando las diferencias.
4. Delegar al `Registrador de Progreso`: registrar en `PROGRESS.md` (sección Examen global
   #2). Solo si APROBADO se abre la fase 12.

---

## Examen final (cierre del pre-curso)

**Cuándo**: fases 13-14 (`APPROVED`), al arrancar la fase 15.

**Procedimiento**:
1. Planteear un ejercicio **NUEVO**, no presente literalmente en el plan. Ejemplo:
   "Construí conceptualmente un agente que investiga incidentes de producción de un
   sistema de microservicios."
2. Exigir en la respuesta: arquitectura, componentes, flujo, tools, RAG, state, memory,
   seguridad, evaluación, trade-offs.
3. NO dar la arquitectura antes; después evaluar, corregir y comparar con la
   arquitectura recomendada, explicando diferencias.
4. Registrar el veredicto en `PROGRESS.md` (Phase 15) y cerrar el pre-curso con el
   estado final.

---

## Reglas comunes

- NO dar ayudas durante el examen (esto es examen, no enseñanza).
- Si hay una confusión fundamental: reprobar y reagendar el examen tras repaso dirigido.
- Veredicto del examen: APROBADO / NEEDS_REVIEW (estados del `protocolo-tutor.md` §1bis).
- NO generar tests ni código: todo es conceptual y de diseño.
