import { useState } from 'react'
import { BookOpen, CircleCheck, GraduationCap, Lock, Sparkles } from 'lucide-react'
import { cn } from 'cn'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type PhaseStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'NEEDS_REVIEW' | 'APPROVED'

type EvaluationScore = 0 | 1 | 2 | 3 | 4 | 5

type RubricKey = 'correctitud' | 'transferencia' | 'claridad' | 'precision'

type RubricScores = Record<RubricKey, EvaluationScore>

type SectionId = 'diagnostico' | 'rag' | 'agentes' | 'integracion'

interface RubricItem {
  key: RubricKey
  label: string
  prompt: string
}

interface PhaseDefinition {
  id: string
  title: string
  summary: string
  section: SectionId
  isExam?: boolean
}

interface PhaseRecord {
  status: PhaseStatus
  score: number
  rubric: RubricScores
}

const SCORE_STEPS = [0, 1, 2, 3, 4, 5] as const

const RUBRIC: RubricItem[] = [
  {
    key: 'correctitud',
    label: 'Correctitud',
    prompt: 'El ejemplo elegido transmite el concepto sin errores ni omisiones importantes.',
  },
  {
    key: 'transferencia',
    label: 'Transferencia',
    prompt: 'Es un caso nuevo, no memorizado: aplica el concepto a un problema distinto del visto en clase.',
  },
  {
    key: 'claridad',
    label: 'Claridad',
    prompt: 'Lo explicás con tus palabras y justificás el por qué, no solo el qué.',
  },
  {
    key: 'precision',
    label: 'Precisión',
    prompt: 'Usás la terminología técnica del curso y distinguís conceptos vecinos.',
  },
]

const SECTIONS: Array<{ id: SectionId; label: string; caption: string }> = [
  {
    id: 'diagnostico',
    label: 'Diagnóstico',
    caption: 'Medición inicial para ajustar el plan del pre-curso.',
  },
  {
    id: 'rag',
    label: 'Fases 0-5 · RAG',
    caption: 'De tokens y embeddings a un RAG con retrieval de calidad.',
  },
  {
    id: 'agentes',
    label: 'Fases 6-10 · Agentes',
    caption: 'Tools, agent loop, estado y memoria.',
  },
  {
    id: 'integracion',
    label: 'Fases 11-15 · Integración',
    caption: 'LangGraph, multi-agent, seguridad, evaluación y cierre.',
  },
]

const PHASES: PhaseDefinition[] = [
  {
    id: 'D',
    title: 'Diagnóstico inicial',
    summary: 'Qué sabés de LLMs, RAG, embeddings, agentes, memory y prompt injection.',
    section: 'diagnostico',
  },
  { id: '0', title: 'Mapa mental de LLMs', summary: 'Tokens, contexto, límites y trade-offs de un LLM.', section: 'rag' },
  { id: '1', title: 'Tokens y embeddings', summary: 'Tokenización, embeddings y similitud semántica.', section: 'rag' },
  { id: '2', title: 'Chunking', summary: 'Estrategias de trozado de documentos para RAG.', section: 'rag' },
  { id: '3', title: 'Primer RAG', summary: 'Pipeline RAG end-to-end con retrieval básico.', section: 'rag' },
  { id: '4', title: 'Retrieval de calidad', summary: 'Búsqueda híbrida y filtros de metadatos.', section: 'rag' },
  { id: '5', title: 'Reranking', summary: 'Cross-encoders y evaluación de relevancia.', section: 'rag' },
  { id: '6', title: 'Tool calling', summary: 'Definición, validación y ejecución de herramientas.', section: 'agentes' },
  { id: '7', title: 'Tools + SQL', summary: 'Agentes que consultan bases de datos con seguridad.', section: 'agentes' },
  { id: '8', title: 'RAG + tools', summary: 'Combinar retrieval y herramientas en un mismo agente.', section: 'agentes' },
  { id: '9', title: 'Agent loop', summary: 'Ciclo de razonamiento-acción con guardrails.', section: 'agentes' },
  { id: '10', title: 'Estado y memoria', summary: 'Memoria de corto y largo plazo del agente.', section: 'agentes' },
  {
    id: 'E1',
    title: 'Examen pre-LangGraph',
    summary: 'Examen global bloqueante antes de arrancar LangGraph.',
    section: 'integracion',
    isExam: true,
  },
  { id: '11', title: 'LangGraph', summary: 'Grafos de estado para orquestar agentes.', section: 'integracion' },
  {
    id: 'E2',
    title: 'Examen pre-Multi-Agent',
    summary: 'Examen global de diseño verbal antes de multi-agent.',
    section: 'integracion',
    isExam: true,
  },
  { id: '12', title: 'Multi-agent', summary: 'Orquestación de agentes especializados y handoffs.', section: 'integracion' },
  { id: '13', title: 'Seguridad', summary: 'Prompt injection, guardrails y control de tools.', section: 'integracion' },
  { id: '14', title: 'Evaluación', summary: 'Métricas y observabilidad: RAGAS, Phoenix, TruLens.', section: 'integracion' },
  { id: '15', title: 'Proyecto final', summary: 'Proyecto integrador y examen final.', section: 'integracion' },
]

const STATUS_LABEL: Record<PhaseStatus, string> = {
  NOT_STARTED: 'No iniciada',
  IN_PROGRESS: 'En curso',
  NEEDS_REVIEW: 'A revisar',
  APPROVED: 'Aprobada',
}

const STATUS_BADGE_VARIANT: Record<PhaseStatus, 'default' | 'secondary' | 'destructive' | 'outline'> = {
  NOT_STARTED: 'outline',
  IN_PROGRESS: 'secondary',
  NEEDS_REVIEW: 'destructive',
  APPROVED: 'default',
}

const STATUS_DOT: Record<PhaseStatus, string> = {
  NOT_STARTED: 'bg-transparent',
  IN_PROGRESS: 'bg-primary/20',
  NEEDS_REVIEW: 'bg-destructive/20',
  APPROVED: 'bg-primary',
}

function createEmptyRecord(id: string): PhaseRecord {
  return {
    status: id === 'D' ? 'IN_PROGRESS' : 'NOT_STARTED',
    score: 0,
    rubric: { correctitud: 0, transferencia: 0, claridad: 0, precision: 0 },
  }
}

function createInitialRecords(): Record<string, PhaseRecord> {
  const records: Record<string, PhaseRecord> = {}
  for (const phase of PHASES) {
    records[phase.id] = createEmptyRecord(phase.id)
  }
  return records
}

function sumRubric(rubric: RubricScores): number {
  return RUBRIC.reduce((acc, item) => acc + rubric[item.key], 0)
}

function PhaseRow({
  phase,
  record,
  selected,
  onSelect,
}: {
  phase: PhaseDefinition
  record: PhaseRecord
  selected: boolean
  onSelect: () => void
}) {
  return (
    <li>
      <button
        type="button"
        onClick={onSelect}
        aria-current={selected}
        className={cn(
          'flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left transition-colors outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50',
          selected && 'bg-muted',
        )}
      >
        <span className="w-9 shrink-0 rounded-md border bg-background px-1.5 py-1 text-center text-xs font-semibold tabular-nums text-muted-foreground">
          {phase.id}
        </span>
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="flex items-center gap-1.5">
            <span
              className={cn('size-1.5 shrink-0 rounded-full', STATUS_DOT[record.status])}
              aria-hidden="true"
            />
            <span className="truncate text-sm font-medium">{phase.title}</span>
          </span>
          <span className="truncate text-xs text-muted-foreground">{phase.summary}</span>
        </span>
        {phase.isExam ? <Lock className="size-3.5 shrink-0 text-muted-foreground" /> : null}
      </button>
    </li>
  )
}

function RubricRow({
  item,
  value,
  disabled,
  onChange,
}: {
  item: RubricItem
  value: EvaluationScore
  disabled: boolean
  onChange: (next: EvaluationScore) => void
}) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border p-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <p className="text-sm font-medium">{item.label}</p>
        <p className="text-xs text-muted-foreground">{item.prompt}</p>
      </div>
      <div className="flex shrink-0 items-center gap-1" role="group" aria-label={`Puntaje de ${item.label}`}>
        {SCORE_STEPS.map((step) => (
          <Button
            key={step}
            type="button"
            size="icon-xs"
            variant={step === value ? 'default' : 'outline'}
            disabled={disabled}
            aria-pressed={step === value}
            className="text-xs tabular-nums"
            onClick={() => onChange(step)}
          >
            {step}
          </Button>
        ))}
      </div>
    </div>
  )
}

function PhaseDetail({
  phase,
  record,
  onRubricChange,
  onConfirm,
  onStart,
  onFlag,
}: {
  phase: PhaseDefinition
  record: PhaseRecord
  onRubricChange: (key: RubricKey, value: EvaluationScore) => void
  onConfirm: () => void
  onStart: () => void
  onFlag: () => void
}) {
  const rubricScore = sumRubric(record.rubric)
  const progressValue = (record.score / 20) * 100
  const canEvaluate = record.status !== 'NOT_STARTED' && rubricScore > 0

  return (
    <Card className="min-w-0">
      <CardHeader className="border-b">
        <CardTitle className="flex items-center gap-2 text-base">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
            Fase {phase.id}
          </span>
          {phase.title}
        </CardTitle>
        <CardDescription>{phase.summary}</CardDescription>
        <CardAction>
          <Badge variant={STATUS_BADGE_VARIANT[record.status]}>{STATUS_LABEL[record.status]}</Badge>
        </CardAction>
      </CardHeader>

      <CardContent className="grid gap-4 py-5 xl:grid-cols-2">
        <div className="flex flex-col gap-3 rounded-lg border bg-muted/40 p-4">
          <p className="flex items-center gap-2 text-sm font-medium">
            <BookOpen className="size-4 text-primary" />
            Cierre de la fase
          </p>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <CircleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>Ejercicio práctico del slice en el monorepo (scaffold + implementación).</span>
            </li>
            <li className="flex gap-2">
              <CircleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>Preguntas conceptuales con rúbrica /20 y verificación de transferencia.</span>
            </li>
            <li className="flex gap-2">
              <CircleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>Veredicto registrado en .github/PROGRESS.md.</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between gap-2">
            <p className="flex items-center gap-2 text-sm font-medium">
              <Sparkles className="size-4 text-primary" />
              Score
            </p>
            <span className="text-sm font-semibold tabular-nums">{record.score}/20</span>
          </div>
          <Progress value={progressValue} aria-label="Score de la fase" />
          {phase.isExam ? (
            <p className="flex gap-2 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-xs text-destructive">
              <Lock className="mt-0.5 size-3.5 shrink-0" />
              Examen bloqueante: se habilita cuando la fase previa está aprobada.
            </p>
          ) : null}
          <Separator />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium">Rúbrica /20</p>
            <p className="text-xs text-muted-foreground">
              Cada eje vale 0-5. Si respondés de memoria, se cambia el ejemplo: la
              transferencia es parte del puntaje.
            </p>
          </div>
          {RUBRIC.map((item) => (
            <RubricRow
              key={item.key}
              item={item}
              value={record.rubric[item.key]}
              disabled={record.status === 'NOT_STARTED'}
              onChange={(next) => onRubricChange(item.key, next)}
            />
          ))}
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs tabular-nums text-muted-foreground">
              Suma rúbrica: {rubricScore}/20
            </span>
            <Button size="sm" disabled={!canEvaluate} onClick={onConfirm}>
              Evaluar fase
            </Button>
          </div>
        </div>
      </CardContent>

      <CardFooter className="justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          El tutor revisa tu código y toma la rúbrica; este panel refleja el estado del curso.
        </p>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            disabled={record.status !== 'NOT_STARTED'}
            onClick={onStart}
          >
            Marcar en curso
          </Button>
          <Button
            size="sm"
            variant="ghost"
            disabled={record.status !== 'IN_PROGRESS'}
            onClick={onFlag}
          >
            Pedir revisión
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export function TutorPage() {
  const [records, setRecords] = useState<Record<string, PhaseRecord>>(createInitialRecords)
  const [selectedPhaseId, setSelectedPhaseId] = useState('D')

  const selectedPhase = PHASES.find((phase) => phase.id === selectedPhaseId) ?? null

  function updateRecord(id: string, updater: (record: PhaseRecord) => PhaseRecord) {
    setRecords((prev) => ({ ...prev, [id]: updater(prev[id] ?? createEmptyRecord(id)) }))
  }

  function handleRubricChange(id: string, key: RubricKey, value: EvaluationScore) {
    updateRecord(id, (record) => ({ ...record, rubric: { ...record.rubric, [key]: value } }))
  }

  function handleConfirm(id: string) {
    updateRecord(id, (record) => {
      const score = sumRubric(record.rubric)
      return {
        ...record,
        score,
        status: score >= 14 ? 'APPROVED' : 'NEEDS_REVIEW',
      }
    })
  }

  return (
    <div className="flex flex-col gap-5">
      <header className="flex flex-col gap-1.5">
        <h1 className="flex items-center gap-2 text-lg font-semibold">
          <GraduationCap className="size-5 text-primary" />
          Tutor &amp; evaluación de fases
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Estado del pre-curso según{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">.github/PROGRESS.md</code>.
          Seleccioná una fase para ver el detalle o tomar la rúbrica.
        </p>
      </header>

      <Tabs defaultValue="diagnostico" className="gap-4">
        <TabsList className="w-full flex-wrap sm:w-fit">
          {SECTIONS.map((section) => (
            <TabsTrigger key={section.id} value={section.id} className="min-w-24 px-3">
              {section.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {SECTIONS.map((section) => {
          const sectionPhases = PHASES.filter((phase) => phase.section === section.id)
          return (
            <TabsContent
              key={section.id}
              value={section.id}
              className="grid items-start gap-4 xl:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]"
            >
              <Card className="min-w-0">
                <CardHeader className="border-b">
                  <CardTitle className="text-base">{section.label}</CardTitle>
                  <CardDescription>{section.caption}</CardDescription>
                </CardHeader>
                <CardContent className="p-2">
                  <ul className="flex flex-col">
                    {sectionPhases.map((phase) => (
                      <PhaseRow
                        key={phase.id}
                        phase={phase}
                        record={records[phase.id]}
                        selected={phase.id === selectedPhaseId}
                        onSelect={() => setSelectedPhaseId(phase.id)}
                      />
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {selectedPhase ? (
                <PhaseDetail
                  phase={selectedPhase}
                  record={records[selectedPhase.id]}
                  onRubricChange={(key, value) => handleRubricChange(selectedPhase.id, key, value)}
                  onConfirm={() => handleConfirm(selectedPhase.id)}
                  onStart={() => updateRecord(selectedPhase.id, (r) => ({ ...r, status: 'IN_PROGRESS' }))}
                  onFlag={() => updateRecord(selectedPhase.id, (r) => ({ ...r, status: 'NEEDS_REVIEW' }))}
                />
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center gap-2 py-10 text-center">
                    <Lock className="size-6 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Elegí una fase de la lista para ver el detalle y la rúbrica.
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          )
        })}
      </Tabs>

      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
        <span className="font-medium text-foreground">Estados:</span>
        {(Object.keys(STATUS_LABEL) as PhaseStatus[]).map((status) => (
          <span key={status} className="flex items-center gap-1.5">
            <span className={cn('size-2.5 rounded-full border', STATUS_DOT[status])} />
            {STATUS_LABEL[status]}
          </span>
        ))}
      </div>
    </div>
  )
}