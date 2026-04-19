import { GraphEvents } from '../components/GraphEvents'
import './EventsPage.css'

export function EventsPage() {
  return (
    <div className="events-page">
      <header className="events-page__hero">
        <p className="eyebrow">Powered by The Graph</p>
        <h1>All Events</h1>
        <p className="events-page__sub">
          Live data indexed from Sepolia via the ChainPass subgraph
        </p>
      </header>

      <GraphEvents />
    </div>
  )
}
