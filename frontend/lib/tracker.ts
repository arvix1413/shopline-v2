const API = process.env.NEXT_PUBLIC_API_URL || 'https://shopline-backend.arvix1413.workers.dev'

function getOrCreateAnonymousId(): string {
  if (typeof document === 'undefined') return 'ssr'
  const key = 'arvix_anon_id'
  const match = document.cookie.match(new RegExp(`(?:^|; )${key}=([^;]*)`))
  if (match) return decodeURIComponent(match[1])
  const id = `anon_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
  document.cookie = `${key}=${encodeURIComponent(id)}; max-age=${60 * 60 * 24 * 365}; path=/; SameSite=Lax`
  return id
}

// Capture UTM / ref params from URL and persist to localStorage
export function captureTrafficSource() {
  if (typeof window === 'undefined') return
  const p = new URLSearchParams(window.location.search)
  const source: Record<string, string> = {}
  for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'ref']) {
    const v = p.get(key)
    if (v) source[key] = v
  }
  if (Object.keys(source).length > 0) {
    localStorage.setItem('traffic_source', JSON.stringify(source))
  }
}

export function getTrafficSource(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  try { return JSON.parse(localStorage.getItem('traffic_source') || '{}') } catch { return {} }
}

export function track(event: string, properties?: Record<string, unknown>, userId?: number) {
  if (typeof window === 'undefined') return
  const anonymousId = getOrCreateAnonymousId()
  const source = getTrafficSource()
  fetch(`${API}/api/events`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ anonymousId, userId: userId ?? null, event, properties: { ...source, ...properties } }),
  }).catch(() => {})
}

export function bindUser(userId: number) {
  if (typeof window === 'undefined') return
  const anonymousId = getOrCreateAnonymousId()
  fetch(`${API}/api/events`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ anonymousId, userId, event: 'identity', properties: {} }),
  }).catch(() => {})
}
