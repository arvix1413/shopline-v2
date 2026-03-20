const API = process.env.NEXT_PUBLIC_API_URL || 'https://shopline-backend.arvix1413.workers.dev'

function getOrCreateAnonymousId(): string {
  if (typeof document === 'undefined') return 'ssr'
  const key = 'arvix_anon_id'
  let id = ''
  // try cookie
  const match = document.cookie.match(new RegExp(`(?:^|; )${key}=([^;]*)`))
  if (match) {
    id = decodeURIComponent(match[1])
  } else {
    id = `anon_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
    document.cookie = `${key}=${encodeURIComponent(id)}; max-age=${60 * 60 * 24 * 365}; path=/; SameSite=Lax`
  }
  return id
}

export function track(event: string, properties?: Record<string, unknown>, userId?: number) {
  if (typeof window === 'undefined') return
  const anonymousId = getOrCreateAnonymousId()
  // fire and forget
  fetch(`${API}/api/events`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ anonymousId, userId: userId ?? null, event, properties }),
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
