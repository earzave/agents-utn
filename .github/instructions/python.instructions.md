---
applyTo: "labs/python/**"
---

# Convenciones Python (labs/python) — pre-curso UTN

Estas reglas aplican al código Python de los laboratorios (fases 3F-Py, 11, 12 y 14).
Aplican las **mismas reglas duras del protocolo** (`docs/protocolo-tutor.md` §1bis):
el estudiante escribe el código; el tutor/sistema solo scaffoldea con
`# TODO(estudiante): ...`, explica y revisa (comentar, no reescribir). **Cero tests**
(D3): ni `.py` de test, ni pytest como criterio de fase, ni evaluación automática
de labs con frameworks de test.

## Entorno

- Entorno virtual obligatorio en `labs/python/.venv/`; usar siempre el intérprete de
  ese entorno (nunca el global). Ver ficha 3F-Py → "Preparar el entorno".
- La versión de Python y de las librerías se fija según lo que confirme el coordinador
  del curso y se registra en `decisiones.md` (D1).
- Dependencias fijadas en el archivo del gestor elegido (por defecto `requirements.txt`
  con pip; si se elige otro, registrarlo en `decisiones.md`) para reproducir el entorno.
- La IA nunca instala dependencias ni crea código fuera del scaffold con TODOs.

## Tipado y validación

- **Type hints en todas las funciones** (incluye retorno).
- **Pydantic** en todos los límites (equivalente a zod en TS): entradas y salidas de
  tools, salidas estructuradas del LLM, payloads de requests.
- Ante dudas de una API, consultar la documentación oficial de la versión instalada
  antes de inventar métodos.

## Datos y secretos

- Los datos se leen de `data/` (ruta relativa a la **raíz del repo**); nunca se
  duplican dentro de `labs/python/`. `data/` es **solo lectura** para el código;
  los derivados (índices, DBs locales) van a rutas ignoradas por git.
- Secrets solo por `.env` (`labs/python/.env` con `labs/python/.env.example` como
  plantilla). Mismos nombres de variable que `apps/server/.env.example`
  (LLM_BASE_URL/KEY/MODEL, EMBEDDINGS_*) — ver decisión D4.

## Estructura

- Mismas capas conceptuales que en TypeScript (dominio / llm / retrieval / tools /
  orchestration / memoria), aunque la estructura de carpetas sea más plana.
- No portar el monorepo TS: los labs son puentes de aprendizaje por fase, no re-escrituras.
- Formato y lint con **Ruff** (el formateador del workspace para `*.py` ya es Ruff).

## Contrato TS ↔ Python

- Zod y Pydantic **no se comparten**: cada lado escribe su schema a mano. La
  comparación de los JSON Schema generados (zod vs Pydantic) es parte de lo que se
  aprende en la Fase 3F-Py (tabla de mapeo en `PROGRESS.md`).
