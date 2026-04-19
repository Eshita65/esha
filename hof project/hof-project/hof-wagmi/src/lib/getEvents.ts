import { GraphQLClient, gql } from 'graphql-request'

// ── Endpoint ─────────────────────────────────────────────────────────────────
const GRAPH_ENDPOINT =
  'https://api.studio.thegraph.com/query/1748401/chain-link/version/latest'

const client = new GraphQLClient(GRAPH_ENDPOINT)

// ── Types ─────────────────────────────────────────────────────────────────────
export type GraphEvent = {
  id: string          // eventId (string from subgraph)
  name: string
  description: string
  startTime: string   // Unix seconds as string
  endTime: string     // Unix seconds as string
  location: string
  creator: string     // wallet address (hex)
}

type EventsQueryResult = {
  events: GraphEvent[]
}

// ── Query ─────────────────────────────────────────────────────────────────────
const EVENTS_QUERY = gql`
  query GetAllEvents {
    events(first: 100, orderBy: startTime, orderDirection: asc) {
      id
      name
      description
      startTime
      endTime
      location
      creator
    }
  }
`

// ── Fetcher ───────────────────────────────────────────────────────────────────
export async function getEvents(): Promise<GraphEvent[]> {
  const data = await client.request<EventsQueryResult>(EVENTS_QUERY)
  return data.events
}
