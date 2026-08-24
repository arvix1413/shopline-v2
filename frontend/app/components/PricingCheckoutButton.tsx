'use client'

import { useState } from 'react'

const API = process.env.NEXT_PUBLIC_API_URL || 'https://shopline-backend.arvix1413.workers.dev'

export default function PricingCheckoutButton({ plan }: { plan: string }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const checkout = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch(`${API}/api/checkout/session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      })
      const data = await response.json() as { url?: string; error?: string }
      if (!response.ok || !data.url) throw new Error(data.error || '无法建立付款页面')
      window.location.assign(data.url)
    } catch (err) {
      setError(err instanceof Error ? err.message : '无法建立付款页面')
      setLoading(false)
    }
  }

  return (
    <div className="mt-auto">
      <button
        type="button"
        onClick={checkout}
        disabled={loading}
        className="w-full rounded-full px-6 py-3 font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-60"
        style={{ backgroundColor: '#356DFF' }}
      >
        {loading ? '正在前往安全付款…' : '立即订阅'}
      </button>
      {error && <p className="mt-3 text-sm text-red-600" role="alert">{error}</p>}
      <p className="mt-3 text-center text-xs" style={{ color: '#687280' }}>由 Stripe 安全处理 · 支持 Link</p>
    </div>
  )
}
