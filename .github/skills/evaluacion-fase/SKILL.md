---
name: evaluacion-fase
description: 'Evalúa el cierre de una fase del pre-curso con rúbrica /20, genera el PHASE REVIEW y 3 preguntas de transferencia, y actualiza PROGRESS.md. Use when: el estudiante termina el ejercicio de una fase, pide evaluación, o hay que registrar el veredicto de la fase.'
user-invocable: true
---

# Evaluación de fase (rúbrica /20 + PHASE REVIEW)

## Precondiciones

1. Leer `PROGRESS.md` (fase en curso) y el ledger (errores recurrentes previos).
2. Verificar la validación práctica: el ejercicio funciona (endpoint/script ejecutables),
   fue revisado el código (subagente `Revisor de Código`), hay **Evidencia** (commit,
   comando + salida) y se hizo el **cambio en vivo**. Si falta algo: NO evaluar aún.

## Procedimiento

### 1. Evaluación conceptual

Delegar al subagente `Evaluador Conceptual` (o hacerlo directo) la generación de 3-5
preguntas sobre la fase, con:
- al menos una "¿por qué?", una "¿qué pasaría si...?" y una de diseño
  ("¿cómo lo implementarías en una aplicación backend?"),
- ejemplos distintos a los vistos en la enseñanza (anti-memorización),
- **calibración**: pedir confianza (1-3) antes de cada respuesta; anotar los casos
  "confianza alta + error".

Corregir cada respuesta clasificando: CORRECTO / PARCIAL / INCORRECTO / CONCEPTO CONFUNDIDO.

### 2. Rúbrica /20

| Dimensión | Puntos | Base |
|---|---|---|
| Conceptos | /5 | corrección de las respuestas conceptuales |
| Aplicación | /5 | sabe dónde y cómo se usa en la app real |
| Trade-offs | /5 | costo/latencia/complejidad + cuándo NO usarlo |
| Seguridad | /5 | solo si la fase la evalúa (`evalua_seguridad` del frontmatter); si no:
**Conceptos 7 · Aplicación 7 · Trade-offs 6** |

Criterio: 18-20 APROBADO · 15-17 APROBADO CON REPASO · <15 NO APROBADO.

**Regla dura**: confusión conceptual fundamental (lista en `.github/docs/protocolo-tutor.md` §4)
⇒ NO aprobado aunque el código funcione.

### 3. PHASE REVIEW

Generar y mostrar en el chat:

```
PHASE REVIEW
Fase:
Estado:
Puntaje: __/20 (Conceptos __ · Aplicación __ · Trade-offs __ · Seguridad __)
1. Lo que entendí bien
2. Lo que confundí
3. Lo que debo repasar
4. Ejemplo que pude resolver
5. Pregunta que todavía me cuesta
6. Conceptos que ya puedo explicar
7. Conceptos que todavía no puedo explicar
```

### 4. Transferencia

Generar **3 preguntas de transferencia** que exijan razonamiento (no definiciones).
Ejemplos de estilo:

- "Si en lugar de documentos Markdown tuvieras 500.000 registros de una base de datos,
  ¿seguirías usando RAG?"
- "¿Qué pasaría si duplicas el tamaño del modelo? ¿Cambia algo del pipeline?"

Discutir las respuestas antes de cerrar.

### 5. Registro (obligatorio, vía Registrador)

**Delegar al subagente `Registrador de Progreso`** la actualización de:
- estado (`APPROVED` / `NEEDS_REVIEW`), fecha, score por dimensión,
- conceptos aprobados, débiles, errores recurrentes, ejercicios completados,
- **Evidencia**: commit del estudiante, comando ejecutado + salida, cambio en vivo,
- decisiones y trade-offs documentadas por el estudiante,
- notas con las 3 preguntas de transferencia,
- **ledger**: niveles nuevos de los conceptos de la fase, próximo repaso (0 → próxima
  sesión · 1 → 2 días · 2 → 5 días · 3 → 12 días), fallos, ayuda usada, "confianza alta + error".

Estados válidos: los definidos en `protocolo-tutor.md` §1bis punto 5. Solo escribir tras
la **confirmación del veredicto por el estudiante**.

### 6. Despedida

- Si APROBADO: indicar la fase siguiente (y si aplica, avisar que hay examen global antes
  de LangGraph/Multi-Agent → `/examen-global`).
- Si NO APROBADO: proponer plan de re-evaluación con otro enfoque/ejemplo.
