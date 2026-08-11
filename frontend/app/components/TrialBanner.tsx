'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useAuth } from '../../contexts/AuthContext'

const API = process.env.NEXT_PUBLIC_API_URL || 'https://shopline-backend.arvix1413.workers.dev'

type TrialInfo = {
  planStatus: 'trialing' | 'expired' | 'paid'
  daysLeft: number | null
  expired: boolean
  showPaywall: boolean
  showReminder: boolean
  stageLabel?: string
  store?: { slug?: string } | null
}

export default function TrialBanner() {
  const { user, token, isLoading } = useAuth()
  const [trial, setTrial] = useState<TrialInfo | null>(null)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (isLoading || !user || !token || user.isAdmin) return
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch(`${API}/api/me/trial`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        if (!res.ok) return
        const data = await res.json()
        if (!cancelled) setTrial(data)
      } catch {
        /* ignore */
      }
    })()
    return () => { cancelled = true }
  }, [user, token, isLoading])

  if (!trial || user?.isAdmin || trial.planStatus === 'paid' || dismissed) return null

  const urgent = trial.showPaywall || trial.showReminder
  if (!urgent && (trial.daysLeft ?? 99) > 7) {
    // Soft info bar for early trial
    return (
      <div className="relative z-[60] text-sm px-4 py-2 flex flex-wrap items-center justify-center gap-3"
        style={{ background: '#F0F1FE', color: '#3A3D55', borderBottom: '1px solid rgba(91,95,240,0.16)' }}>
        <span>
          免費試用剩餘 <strong style={{ color: '#5B5FF0' }}>{trial.daysLeft}</strong> 天
          {trial.stageLabel ? ` · 目前進度：${trial.stageLabel}` : ''}
        </span>
        <Link href="/billing" className="font-semibold underline underline-offset-2" style={{ color: '#5B5FF0' }}>
          查看方案／開通
        </Link>
      </div>
    )
  }

  return (
    <div
      className="relative z-[60] text-sm px-4 py-2.5 flex flex-wrap items-center justify-center gap-3"
      style={{
        background: trial.showPaywall
          ? 'linear-gradient(90deg, #7F1D1D, #B91C1C)'
          : 'linear-gradient(90deg, #484CE8, #5B5FF0)',
        color: '#fff',
      }}
    >
      <span className="font-medium text-center">
        {trial.showPaywall
          ? '試用已結束，開通方案後即可繼續使用完整功能'
          : `試用即將到期（剩餘 ${trial.daysLeft} 天），現在開通可無縫接續經營`}
      </span>
      <Link
        href="/billing"
        className="font-bold px-4 py-1.5 rounded-full text-xs sm:text-sm"
        style={{ background: '#fff', color: trial.showPaywall ? '#B91C1C' : '#5B5FF0' }}
      >
        立即開通
      </Link>
      {!trial.showPaywall && (
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="text-white/70 hover:text-white text-xs"
        >
          稍後
        </button>
      )}
    </div>
  )
}
