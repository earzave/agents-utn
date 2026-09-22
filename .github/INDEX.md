# Índice de customizaciones — Pre-Curso UTN

Mapa rápido de qué hace cada pieza y cuándo se activa. Guía de uso corta en
[`README.md`](README.md) (cómo empezar / cómo se estudia / cómo se evalúa).

## Siempre activo

| Archivo                                              | Alcance                                                                                 |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [`copilot-instructions.md`](copilot-instructions.md) | Resumen ≤ 10 líneas de las reglas duras (fuente única: `docs/protocolo-tutor.md` §1bis) |

## Instrucciones contextuales (`.github/instructions/`, applyTo como string)

| Archivo                                                                             | Se aplica a                                                                  | Uso                                                                                                  |
| ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [`tutor-evaluacion.instructions.md`](instructions/tutor-evaluacion.instructions.md) | `.github/PROGRESS.md`, `.github/tutor/**`, `.github/docs/protocolo-tutor.md` | Al evaluar fases: rúbrica /20 (7/7/6 si Seguridad no aplica), PHASE REVIEW, registro vía Registrador |
| [`backend-ts.instructions.md`](instructions/backend-ts.instructions.md)             | `apps/server/**/*.ts`, `packages/contracts/**/*.ts`                          | Convenciones del código que el estudiante escribe (TS estricto, zod, capas, contrato compartido)     |
| [`frontend-react.instructions.md`](instructions/frontend-react.instructions.md)     | `apps/web/**`                                                                | Convenciones React+Vite+Tailwind + FE 100% IA (D9: lab visual, sin TODOs del estudiante)             |
| [`python.instructions.md`](instructions/python.instructions.md)                     | `labs/python/**`                                                             | Convenciones Python de los labs (venv, type hints, Pydantic, Ruff; fases 3F-Py, 11, 12, 14)          |

## Agentes (`.github/agents/`) — mínimo privilegio

| Agente                                                                  | Tools                     | Invocable por  | Escritura                                              |
| ----------------------------------------------------------------------- | ------------------------- | -------------- | ------------------------------------------------------ |
| [`tutor-precurso.agent.md`](agents/tutor-precurso.agent.md)             | read, search, todo, agent | Usuario        | **Ninguna** (no edita archivos; no tiene `edit`)       |
| [`registrador-progreso.agent.md`](agents/registrador-progreso.agent.md) | read, edit                | Solo subagente | Solo `.github/PROGRESS.md` y `.github/tutor/**`        |
| [`evaluador-conceptual.agent.md`](agents/evaluador-conceptual.agent.md) | read, search              | Solo subagente | Ninguna                                                |
| [`revisor-codigo.agent.md`](agents/revisor-codigo.agent.md)             | read, search              | Solo subagente | Ninguna                                                |
| [`scaffolder-fases.agent.md`](agents/scaffolder-fases.agent.md)         | read, search, edit        | Solo subagente | Solo estructura con TODOs (commit `scaffold(phase-N)`) |

## Skills (`.github/skills/`)

| Skill                                                           | Trigger               | Qué hace                                                                                     |
| --------------------------------------------------------------- | --------------------- | -------------------------------------------------------------------------------------------- |
| [`diagnostico/SKILL.md`](skills/diagnostico/SKILL.md)           | `/iniciar-precurso`   | Evaluación diagnóstica inicial (8 preguntas) + ajuste de plan                                |
| [`avance-fase/SKILL.md`](skills/avance-fase/SKILL.md)           | `/siguiente-fase`     | Calentamiento + ciclo de enseñanza de una fase (concepto→preguntas→ejercicio→cambio en vivo) |
| [`evaluacion-fase/SKILL.md`](skills/evaluacion-fase/SKILL.md)   | `/evaluar-fase`       | Rúbrica /20 + PHASE REVIEW + transferencia + registro vía Registrador                        |
| [`repaso-espaciado/SKILL.md`](skills/repaso-espaciado/SKILL.md) | `/repaso`             | Sesión corta de repaso espaciado desde el ledger (10-15 min, sin fase nueva)                 |
| [`examen-global/SKILL.md`](skills/examen-global/SKILL.md)       | `/examen-global`      | Examen bloqueante (pre-LangGraph / pre-Multi-Agent / final)                                  |
| [`scaffold-fase/SKILL.md`](skills/scaffold-fase/SKILL.md)       | solicitud de scaffold | Crea el slice del monorepo de la fase con TODOs, sin lógica                                  |

## Prompts (`.github/prompts/`, con `agent: "Tutor Pre-Curso"`)

| Prompt                                                             | Comando                          |
| ------------------------------------------------------------------ | -------------------------------- |
| [`iniciar-precurso.prompt.md`](prompts/iniciar-precurso.prompt.md) | `/iniciar-precurso`              |
| [`siguiente-fase.prompt.md`](prompts/siguiente-fase.prompt.md)     | `/siguiente-fase`                |
| [`evaluar-fase.prompt.md`](prompts/evaluar-fase.prompt.md)         | `/evaluar-fase`                  |
| [`repaso.prompt.md`](prompts/repaso.prompt.md)                     | `/repaso`                        |
| [`repasar-concepto.prompt.md`](prompts/repasar-concepto.prompt.md) | `/repasar-concepto <concepto>`   |
| [`examen-global.prompt.md`](prompts/examen-global.prompt.md)       | `/examen-global [E1\|E2\|final]` |

## Tutoría (`.github/tutor/`)

| Archivo                                                    | Contenido                                                                                               |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [`tutor/concept-ledger.md`](tutor/concept-ledger.md)       | Repaso espaciado: un concepto por fila (nivel 0-3, próximo repaso, fallos, ayuda, confianza-alta+error) |
| [`tutor/tutor-smoke-tests.md`](tutor/tutor-smoke-tests.md) | 11 guiones manuales para probar el comportamiento del tutor                                             |

## Docs (`.github/docs/`)

| Archivo                                                                                  | Contenido                                                                                                                                  |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [`docs/protocolo-tutor.md`](docs/protocolo-tutor.md)                                     | **Contrato del tutor** — reglas duras ÚNICAS (§1bis), ciclo, modos de sesión, escalera de pistas, rúbrica, exámenes                        |
| [`docs/resumen-introductorio-rag-agentes.md`](docs/resumen-introductorio-rag-agentes.md) | Guía de lectura previa — mapa mental de los 37 temas (RAG, GraphRAG, evaluación, agentes) con diagramas y glosario                         |
| [`docs/curriculum.md`](docs/curriculum.md)                                               | Temario UTN real (títulos publicados) + matriz de cobertura (21 temas) + fases y tiers                                                     |
| [`docs/decisiones.md`](docs/decisiones.md)                                               | ADRs: decisiones D1–D5 + D9 (FE 100% IA) + decisiones técnicas del scaffold                                                                |
| [`docs/arquitectura-precurso.md`](docs/arquitectura-precurso.md)                         | Estructura del monorepo + doble rol del front + Docker como ejercicio                                                                      |
| [`docs/fases/fase-XX.md`](docs/fases/)                                                   | **Un archivo por fase** (00, 1, 2, 2b, 3, 3E, 4, 5, 6-15, P, 3F, 10b): objetivo, ejercicio, criterios medibles, semillas de preguntas, DoD |
| [`docs/glosario.md`](docs/glosario.md)                                                   | Checklist de conceptos que debo poder explicar (alimenta el ledger)                                                                        |
| [`docs/analisis-agents-sdk-demos.md`](docs/analisis-agents-sdk-demos.md)                 | Patrones rescatados del demo del compañero (lectura opcional; por-fase viven en `docs/fases/`)                                             |
| [`docs/precurso-utn-plan-fuente.txt`](docs/precurso-utn-plan-fuente.txt)                 | Plan fuente original (intacto; nota al inicio: superado por `decisiones.md` en D2 y D3)                                                    |
| [`PROGRESS.md`](PROGRESS.md)                                                             | Fuente de verdad del avance (columnas Tier / Horas est. / Evidencia)                                                                       |

## Convenciones clave (una sola vez, en el protocolo)

- Reglas duras: `docs/protocolo-tutor.md` §1bis (los demás archivos referencian, no copian).
- Estados de fase: solo los del `protocolo-tutor.md` §1bis punto 5 (el protocolo prohíbe
  marcar fases como terminadas de otra forma).
- Commits: `scaffold(...)`/`docs(...)`/`fe(phase-N)` = IA · `feat(phase-N)`/`fix(phase-N)`
  = estudiante. La IA nunca ejecuta commits: solo sugiere mensajes y cuándo commitear.
- Frontend 100% IA (D9): `apps/web` es lab visual, no práctica del curso.
- READMEs: 5 (raíz, `.github/`, `apps/web`, `apps/server`, `packages/contracts`).
