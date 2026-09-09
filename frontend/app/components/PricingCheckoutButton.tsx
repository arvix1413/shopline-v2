'use client'

import { useState } from 'react'
import { useI18n } from '../../contexts/I18nContext'

const API = process.env.NEXT_PUBLIC_API_URL || 'https://shopline-backend.arvix1413.workers.dev'

export default function PricingCheckoutButton({ plan }: { plan: string }) {
  const { t } = useI18n()
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
      if (!response.ok || !data.url) throw new Error(t.common.pricingError)
      window.location.assign(data.url)
    } catch (err) {
      setError(err instanceof Error ? err.message : t.common.pricingError)
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
        style={{ background: 'linear-gradient(135deg, #5B5FF0 0%, #484CE8 100%)' }}
      >
        {loading ? t.common.pricingLoading : t.common.pricingAction}
      </button>
      {error && <p className="mt-3 text-sm text-red-600" role="alert">{error}</p>}
      <p className="mt-3 text-center text-xs" style={{ color: '#687280' }}>{t.common.pricingSecure}</p>
    </div>
  )
}
