export async function hashPassword(password: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(password))
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return (await hashPassword(password)) === hash
}

function b64url(input: string | ArrayBuffer): string {
  const str = typeof input === 'string' ? btoa(input) : btoa(String.fromCharCode(...new Uint8Array(input)))
  return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

export async function signToken(payload: object, secret: string): Promise<string> {
  const header = b64url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
  const now = Math.floor(Date.now() / 1000)
  const body = b64url(JSON.stringify({ ...payload, iat: now, exp: now + 7 * 24 * 3600 }))
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(`${header}.${body}`))
  return `${header}.${body}.${b64url(sig)}`
}

export async function verifyToken(token: string, secret: string): Promise<any | null> {
  try {
    const [header, body, sig] = token.split('.')
    if (!header || !body || !sig) return null
    const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify'])
    const sigBytes = Uint8Array.from(atob(sig.replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0))
    const valid = await crypto.subtle.verify('HMAC', key, sigBytes, new TextEncoder().encode(`${header}.${body}`))
    if (!valid) return null
    const payload = JSON.parse(atob(body.replace(/-/g, '+').replace(/_/g, '/')))
    if (payload.exp < Math.floor(Date.now() / 1000)) return null
    return payload
  } catch { return null }
}
