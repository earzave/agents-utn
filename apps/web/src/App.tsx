import { useState } from 'react'
import { GraduationCap, MessagesSquare } from 'lucide-react'
import { cn } from 'cn'
import { ChatPage } from '@/features/chat/ChatPage'
import { TutorPage } from '@/features/tutor/TutorPage'

type PageId = 'chat' | 'tutor'

const PAGES: Array<{
  id: PageId
  label: string
  icon: typeof MessagesSquare
}> = [
  { id: 'chat', label: 'Chat IA', icon: MessagesSquare },
  { id: 'tutor', label: 'Tutor & evaluación', icon: GraduationCap },
]

function App() {
  const [page, setPage] = useState<PageId>('chat')

  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-3 px-4">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
              UT
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold">Pre-curso UTN</span>
              <span className="text-xs text-muted-foreground">RAG y Arquitectura de Agentes</span>
            </div>
          </div>
          <nav aria-label="Secciones del pre-curso" className="flex items-center gap-1">
            {PAGES.map((item) => {
              const Icon = item.icon
              const isActive = page === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPage(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'inline-flex h-9 items-center gap-2 rounded-lg px-3 text-sm font-medium transition-colors outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50',
                    isActive
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  <Icon className="size-4" />
                  {item.label}
                </button>
              )
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-5">
        {page === 'chat' ? <ChatPage /> : <TutorPage />}
      </main>
    </div>
  )
}

export default App
