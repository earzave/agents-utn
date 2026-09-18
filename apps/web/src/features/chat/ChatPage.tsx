import { useState, type FormEvent, type KeyboardEvent } from 'react'
import { Bot, Send, Sparkles } from 'lucide-react'
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
import { ScrollArea } from '@/components/ui/scroll-area'
import { Spinner } from '@/components/ui/spinner'
import { Textarea } from '@/components/ui/textarea'

type ChatRole = 'user' | 'assistant'

interface ChatMessage {
  id: number
  role: ChatRole
  content: string
}

const SUGGESTIONS = [
  'Explicá la diferencia entre tokenización y embeddings',
  '¿Qué es el chunking y por qué importa en RAG?',
  '¿Cuándo conviene una tool en vez de retrieval?',
  'Dame una pregunta de evaluación sobre agent loop',
] as const

// Placeholder del mock local: en fases siguientes lo reemplaza el stream
// real del backend (fuentes citadas, tool calls e iteraciones del agente).
const MOCK_LATENCY_MS = 700

let nextMessageId = 0

function createMessage(role: ChatRole, content: string): ChatMessage {
  nextMessageId += 1
  return { id: nextMessageId, role, content }
}

function buildMockReply(userContent: string): string {
  return (
    `[Placeholder sin backend] Recibí: “${userContent}”. ` +
    'Cuando el servidor del curso esté conectado (fases de RAG y agent loop), ' +
    'acá vas a ver la respuesta del modelo con fuentes citadas, las tool calls ' +
    'ejecutadas con sus argumentos y el indicador de iteración del agente.'
  )
}

export function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [draft, setDraft] = useState('')
  const [isThinking, setIsThinking] = useState(false)

  const canSend = draft.trim().length > 0 && !isThinking

  function sendMessage() {
    const content = draft.trim()
    if (!content || isThinking) return

    setMessages((prev) => [...prev, createMessage('user', content)])
    setDraft('')
    setIsThinking(true)

    const reply = buildMockReply(content)
    window.setTimeout(() => {
      setMessages((prev) => [...prev, createMessage('assistant', reply)])
      setIsThinking(false)
    }, MOCK_LATENCY_MS)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    sendMessage()
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      sendMessage()
    }
  }

  return (
    <Card className="flex h-[calc(100svh-12.5rem)] min-h-[28rem] flex-col">
      <CardHeader className="border-b">
        <CardTitle className="flex items-center gap-2">
          <Bot className="size-5 text-primary" />
          Asistente del pre-curso
        </CardTitle>
        <CardDescription>
          Consultas sobre LLMs, RAG y agentes. Conexión al backend pendiente;
          las respuestas de esta pantalla son un placeholder de UI.
        </CardDescription>
        <CardAction>
          <Badge variant="secondary">
            {isThinking ? 'Procesando…' : `${messages.length} mensajes`}
          </Badge>
        </CardAction>
      </CardHeader>

      <CardContent className="flex-1 overflow-hidden px-0">
        <ScrollArea className="h-full">
          {messages.length === 0 && !isThinking ? (
            <div className="flex h-full min-h-64 flex-col items-center justify-center gap-3 px-6 py-8 text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Sparkles className="size-6" />
              </span>
              <CardTitle className="text-lg">¿Sobre qué fase querés conversar?</CardTitle>
              <CardDescription className="max-w-md">
                Empezá con una de estas consultas o escribí la tuya abajo.
              </CardDescription>
              <div className="grid w-full max-w-xl gap-2 pt-2 sm:grid-cols-2">
                {SUGGESTIONS.map((suggestion) => (
                  <Button
                    key={suggestion}
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-auto min-h-12 justify-start px-3 py-2 text-left whitespace-normal"
                    onClick={() => setDraft(suggestion)}
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex min-h-full flex-col justify-end gap-3 px-4 py-4 md:px-6">
              {messages.map((message) =>
                message.role === 'user' ? (
                  <div key={message.id} className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm leading-relaxed text-primary-foreground md:max-w-[75%]">
                      {message.content}
                    </div>
                  </div>
                ) : (
                  <div key={message.id} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Bot className="size-4" />
                    </span>
                    <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-muted px-4 py-2.5 text-sm leading-relaxed md:max-w-[75%]">
                      {message.content}
                    </div>
                  </div>
                ),
              )}
              {isThinking ? (
                <div className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
                  <Spinner className="size-3.5" />
                  <span>Redactando respuesta…</span>
                </div>
              ) : null}
            </div>
          )}
        </ScrollArea>
      </CardContent>

      <CardFooter>
        <form className="flex w-full items-end gap-2" onSubmit={handleSubmit}>
          <Textarea
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribí tu consulta… (Enter envía, Shift+Enter salto de línea)"
            rows={1}
            className="min-h-10 resize-none"
            disabled={isThinking}
          />
          <Button
            type="submit"
            size="icon"
            aria-label="Enviar mensaje"
            disabled={!canSend}
          >
            <Send className="size-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}