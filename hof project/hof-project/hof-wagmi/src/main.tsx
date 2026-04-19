import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import './index.css'
import App from './App.tsx'
import { EventsPage } from './pages/EventsPage.tsx'
import './pages/EventsPage.css'
import { wagmiConfig } from './lib/wagmi'

const queryClient = new QueryClient()

/** Thin shell that adds a nav tab — App.tsx is NOT modified at all */
function RootShell() {
  const [tab, setTab] = useState<'desk' | 'events'>('desk')

  return (
    <>
      <nav className="app-nav">
        <button
          className={`app-nav__btn${tab === 'desk' ? ' app-nav__btn--active' : ''}`}
          onClick={() => setTab('desk')}
        >
          🎛 Control Desk
        </button>
        <button
          className={`app-nav__btn${tab === 'events' ? ' app-nav__btn--active' : ''}`}
          onClick={() => setTab('events')}
        >
          🎟 Events
        </button>
      </nav>

      {tab === 'events' ? <EventsPage /> : <App />}
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RootShell />
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>,
)
