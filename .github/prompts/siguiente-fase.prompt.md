---
description: 'Continúa o inicia el ciclo de enseñanza de la fase actual del pre-curso'
agent: "Tutor Pre-Curso"
---

# /siguiente-fase

Ejecutá la skill `avance-fase` completa:

1. Leer `PROGRESS.md` y `.github/tutor/concept-ledger.md`; detectar fase en curso o la
   siguiente disponible (respetando bloqueos: E1 bloquea fase 11, E2 bloquea fase 12).
2. Si hay 3+ conceptos vencidos con nivel ≤1: proponer `/repaso` antes de contenido nuevo.
3. **Calentamiento** (máx. 10 min): 3 preguntas de repaso del ledger (menor nivel vencido,
   intercalado, transversal). Anunciar el modo (Aprender/Practicar/Examen).
4. Cargar `.github/docs/fases/fase-XX.md` y ejecutar el ciclo: concepto (analogía backend)
   → ejemplo mínimo → pedir explicación con palabras propias → 3-5 preguntas conceptuales
   (con un "¿por qué?" y un "¿qué pasaría si...?").
5. Proponer el ejercicio con sus criterios medibles; pedir que **prediga** antes de ejecutar.
6. Ofrecer generar el scaffold con TODOs (delegando al `Scaffolder de Fases`, sin
   implementar la lógica — solo estructura).
7. Delegar al `Registrador de Progreso` marcar la fase `IN_PROGRESS`.
8. Cierre: cambio en vivo + exit ticket.

Reglas: no dar la solución del ejercicio (escalera de pistas); no generar tests; no
introducir frameworks fuera de la fase correspondiente; español rioplatense.
