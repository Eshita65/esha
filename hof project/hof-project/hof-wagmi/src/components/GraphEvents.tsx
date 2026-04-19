import { useEffect, useState } from 'react'
import { getEvents, type GraphEvent } from '../lib/getEvents'
import './GraphEvents.css'

// ── Helpers ───────────────────────────────────────────────────────────────────
function formatUnix(ts: string): string {
  const n = parseInt(ts, 10)
  if (!n) return '—'
  return new Date(n * 1000).toLocaleString()
}

type Status = 'upcoming' | 'live' | 'ended'

function getStatus(startTime: string, endTime: string): Status {
  const now = Math.floor(Date.now() / 1000)
  const start = parseInt(startTime, 10)
  const end = parseInt(endTime, 10)
  if (now < start) return 'upcoming'
  if (now >= start && now <= end) return 'live'
  return 'ended'
}

const STATUS_LABELS: Record<Status, string> = {
  upcoming: '🗓 Upcoming',
  live: '🔴 Live Now',
  ended: '✅ Ended',
}

const STATUS_CLASSES: Record<Status, string> = {
  upcoming: 'badge badge--upcoming',
  live: 'badge badge--live',
  ended: 'badge badge--ended',
}

// ── EventCard ─────────────────────────────────────────────────────────────────
function EventCard({ event }: { event: GraphEvent }) {
  const status = getStatus(event.startTime, event.endTime)

  return (
    <article className="event-card">
      <div className="event-card__header">
        <h3 className="event-card__name">{event.name || '(Unnamed Event)'}</h3>
        <span className={STATUS_CLASSES[status]}>{STATUS_LABELS[status]}</span>
      </div>

      {event.description && (
        <p className="event-card__desc">{event.description}</p>
      )}

      <ul className="event-card__meta">
        <li>
          <span className="meta-label">📍 Location</span>
          <span className="meta-value">{event.location || '—'}</span>
        </li>
        <li>
          <span className="meta-label">🟢 Start</span>
          <span className="meta-value">{formatUnix(event.startTime)}</span>
        </li>
        <li>
          <span className="meta-label">🔴 End</span>
          <span className="meta-value">{formatUnix(event.endTime)}</span>
        </li>
        <li>
          <span className="meta-label">👤 Creator</span>
          <span className="meta-value event-card__addr">
            {event.creator}
          </span>
        </li>
        <li>
          <span className="meta-label">🆔 Event ID</span>
          <span className="meta-value">#{event.id}</span>
        </li>
      </ul>
    </article>
  )
}

// ── GraphEvents ───────────────────────────────────────────────────────────────
export function GraphEvents() {
  const [events, setEvents] = useState<GraphEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    getEvents()
      .then((data) => {
        if (!cancelled) {
          setEvents(data)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to fetch events')
          setLoading(false)
        }
      })

    return () => { cancelled = true }
  }, [])

  if (loading) {
    return (
      <div className="ge-state">
        <div className="ge-spinner" />
        <p>Fetching events from The Graph…</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="ge-state ge-state--error">
        <p>⚠️ {error}</p>
        <p className="ge-hint">Make sure the subgraph is fully synced.</p>
      </div>
    )
  }

  if (events.length === 0) {
    return (
      <div className="ge-state">
        <p>No events indexed yet. Create one using the Control Desk!</p>
      </div>
    )
  }

  return (
    <div className="ge-grid">
      {events.map((ev) => (
        <EventCard key={ev.id} event={ev} />
      ))}
    </div>
  )
}
