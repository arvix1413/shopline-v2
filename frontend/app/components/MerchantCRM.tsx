'use client'

import { useCallback, useEffect, useState } from 'react'

const API = process.env.NEXT_PUBLIC_API_URL || 'https://shopline-backend.arvix1413.workers.dev'

type Merchant = {
  id: number
  email: string
  name: string
  phone: string | null
  createdAt: string
  trialStartedAt: string | null
  trialEndsAt: string | null
  planStatus: string
  followUpStatus: string
  followUpNote: string
  daysLeft: number | null
  expired: boolean
  slug: string | null
  storeName: string | null
  onboardingStage: string | null
  stageLabel: string
  storeUrl: string | null
  utmSource?: string | null
  ref?: string | null
}

type Props = {
  token: string
  showMsg: (type: 'success' | 'error', text: string) => void
}

const FOLLOW_LABELS: Record<string, string> = {
  new: '新案',
  contacted: '已聯繫',
  nurturing: '跟進中',
  won: '已成交',
  lost: '已流失',
}

/** Naive SQL timestamps are stored as Asia/Taipei wall time. */
function formatTaipei(value?: string | null, withTime = true): string {
  if (!value) return '—'
  const normalized = value.includes('T') ? value : value.replace(' ', 'T')
  const withTz = /(?:Z|[+-]\d{2}:?\d{2})$/.test(normalized) ? normalized : `${normalized}+08:00`
  const d = new Date(withTz)
  if (Number.isNaN(d.getTime())) return value
  return d.toLocaleString('zh-TW', {
    timeZone: 'Asia/Taipei',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    ...(withTime ? { hour: '2-digit', minute: '2-digit' } : {}),
  })
}

export default function MerchantCRM({ token, showMsg }: Props) {
  const [merchants, setMerchants] = useState<Merchant[]>([])
  const [summary, setSummary] = useState<any>(null)
  const [stages, setStages] = useState<{ id: string; label: string }[]>([])
  const [loading, setLoading] = useState(false)
  const [q, setQ] = useState('')
  const [qDebounced, setQDebounced] = useState('')
  const [plan, setPlan] = useState('')
  const [stage, setStage] = useState('')
  const [follow, setFollow] = useState('')
  const [editing, setEditing] = useState<Merchant | null>(null)
  const [note, setNote] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setQDebounced(q.trim()), 300)
    return () => clearTimeout(t)
  }, [q])

  const fetchMerchants = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (qDebounced) params.set('q', qDebounced)
      if (plan) params.set('plan', plan)
      if (stage) params.set('stage', stage)
      if (follow) params.set('follow', follow)
      const res = await fetch(`${API}/api/admin/merchants?${params}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (!res.ok) throw new Error()
      const data = await res.json()
      setMerchants(data.merchants || [])
      setSummary(data.summary)
      setStages(data.stages || [])
    } catch {
      showMsg('error', '獲取商家列表失敗')
    } finally {
      setLoading(false)
    }
  }, [token, qDebounced, plan, stage, follow, showMsg])

  useEffect(() => { fetchMerchants() }, [fetchMerchants])

  const patch = async (id: number, body: Record<string, unknown>) => {
    setSaving(true)
    try {
      const res = await fetch(`${API}/api/admin/merchants/${id}`, {
        method: 'PATCH',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!res.ok) throw new Error()
      showMsg('success', '已更新')
      setEditing(null)
      fetchMerchants()
    } catch {
      showMsg('error', '更新失敗')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-6">
      {summary && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { label: '商家數', value: summary.total, color: '#12131F' },
            { label: '試用中', value: summary.trialing, color: '#5B5FF0' },
            { label: '3 天內到期', value: summary.expiringSoon, color: '#D97706' },
            { label: '已到期', value: summary.expired, color: '#DC2626' },
            { label: '已付款', value: summary.paid, color: '#059669' },
          ].map((c) => (
            <div key={c.label} className="rounded-xl p-4" style={{ background: '#fff', border: '1px solid rgba(18,19,31,0.08)' }}>
              <div className="text-xs mb-1" style={{ color: '#8A8DA8' }}>{c.label}</div>
              <div className="text-2xl font-black" style={{ color: c.color }}>{c.value}</div>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2 items-center">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') setQDebounced(q.trim()) }}
          placeholder="搜尋 email / 店名 / 電話"
          className="px-3 py-2 rounded-lg text-sm border min-w-[200px] flex-1"
        />
        <select value={plan} onChange={(e) => setPlan(e.target.value)} className="px-3 py-2 rounded-lg text-sm border">
          <option value="">全部方案狀態</option>
          <option value="trialing">試用中</option>
          <option value="expired">已到期</option>
          <option value="paid">已付款</option>
        </select>
        <select value={stage} onChange={(e) => setStage(e.target.value)} className="px-3 py-2 rounded-lg text-sm border">
          <option value="">全部開店階段</option>
          {stages.map((s) => (
            <option key={s.id} value={s.id}>{s.label}</option>
          ))}
        </select>
        <select value={follow} onChange={(e) => setFollow(e.target.value)} className="px-3 py-2 rounded-lg text-sm border">
          <option value="">全部跟進狀態</option>
          {Object.entries(FOLLOW_LABELS).map(([k, v]) => (
            <option key={k} value={k}>{v}</option>
          ))}
        </select>
        <button type="button" onClick={fetchMerchants} className="px-4 py-2 rounded-lg text-sm text-white" style={{ background: '#5B5FF0' }}>
          重新整理
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl" style={{ background: '#fff', border: '1px solid rgba(18,19,31,0.08)' }}>
        <table className="min-w-full text-sm">
          <thead>
            <tr style={{ background: '#F6F7FB', color: '#5C5F7A' }}>
              <th className="text-left px-4 py-3 font-semibold">商家</th>
              <th className="text-left px-4 py-3 font-semibold">建立日期</th>
              <th className="text-left px-4 py-3 font-semibold">開店階段</th>
              <th className="text-left px-4 py-3 font-semibold">試用</th>
              <th className="text-left px-4 py-3 font-semibold">跟進</th>
              <th className="text-left px-4 py-3 font-semibold">來源</th>
              <th className="text-left px-4 py-3 font-semibold">操作</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr><td colSpan={7} className="px-4 py-8 text-center text-gray-400">載入中…</td></tr>
            )}
            {!loading && merchants.length === 0 && (
              <tr><td colSpan={7} className="px-4 py-8 text-center text-gray-400">尚無商家資料</td></tr>
            )}
            {merchants.map((m) => (
              <tr key={m.id} className="border-t" style={{ borderColor: 'rgba(18,19,31,0.06)' }}>
                <td className="px-4 py-3">
                  <div className="font-semibold" style={{ color: '#12131F' }}>{m.name || '—'}</div>
                  <div className="text-xs" style={{ color: '#5C5F7A' }}>{m.email}</div>
                  <div className="text-xs" style={{ color: '#8A8DA8' }}>{m.phone || '無電話'} · {m.storeName || m.slug || '未建店'}</div>
                </td>
                <td className="px-4 py-3 text-xs whitespace-nowrap" style={{ color: '#5C5F7A' }}>
                  {formatTaipei(m.createdAt)}
                </td>
                <td className="px-4 py-3">
                  <span className="inline-block text-xs font-semibold px-2 py-1 rounded-full" style={{ background: '#F0F1FE', color: '#5B5FF0' }}>
                    {m.stageLabel}
                  </span>
                </td>
                <td className="px-4 py-3">
                  {m.planStatus === 'paid' ? (
                    <span className="text-xs font-bold" style={{ color: '#059669' }}>已付款</span>
                  ) : m.expired || m.planStatus === 'expired' ? (
                    <span className="text-xs font-bold" style={{ color: '#DC2626' }}>已到期</span>
                  ) : (
                    <span className="text-xs font-bold" style={{ color: (m.daysLeft ?? 99) <= 3 ? '#D97706' : '#5B5FF0' }}>
                      剩 {m.daysLeft ?? '—'} 天
                    </span>
                  )}
                  {m.trialEndsAt && (
                    <div className="text-[11px] mt-0.5" style={{ color: '#8A8DA8' }}>
                      到期 {formatTaipei(m.trialEndsAt, false)}
                    </div>
                  )}
                </td>
                <td className="px-4 py-3">
                  <div className="text-xs font-semibold">{FOLLOW_LABELS[m.followUpStatus] || m.followUpStatus}</div>
                  {m.followUpNote && <div className="text-xs mt-1 max-w-[180px] truncate" style={{ color: '#8A8DA8' }}>{m.followUpNote}</div>}
                </td>
                <td className="px-4 py-3 text-xs" style={{ color: '#8A8DA8' }}>
                  {m.ref || m.utmSource || '—'}
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    <button type="button" className="text-xs px-2 py-1 rounded border" onClick={() => { setEditing(m); setNote(m.followUpNote || '') }}>
                      跟進
                    </button>
                    {m.planStatus !== 'paid' && (
                      <button
                        type="button"
                        className="text-xs px-2 py-1 rounded text-white"
                        style={{ background: '#059669' }}
                        onClick={() => {
                          if (window.confirm(`確認將 ${m.email} 標記為已付款？`)) {
                            patch(m.id, { planStatus: 'paid' })
                          }
                        }}
                      >
                        標記已付
                      </button>
                    )}
                    {(m.expired || m.planStatus === 'expired') && (
                      <button type="button" className="text-xs px-2 py-1 rounded border"
                        onClick={() => patch(m.id, { extendTrialDays: 7 })}>
                        +7 天
                      </button>
                    )}
                    {m.storeUrl && (
                      <a href={m.storeUrl} target="_blank" rel="noreferrer" className="text-xs px-2 py-1 rounded border">
                        看店
                      </a>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editing && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.45)' }}>
          <div className="w-full max-w-md rounded-2xl p-6" style={{ background: '#fff' }}>
            <h3 className="font-black mb-1" style={{ color: '#12131F' }}>跟進：{editing.name}</h3>
            <p className="text-xs mb-1" style={{ color: '#8A8DA8' }}>{editing.email}</p>
            <p className="text-xs mb-4" style={{ color: '#8A8DA8' }}>建立：{formatTaipei(editing.createdAt)}</p>

            <label className="block text-xs font-semibold mb-1">跟進狀態</label>
            <select
              className="w-full mb-3 px-3 py-2 rounded-lg border text-sm"
              value={editing.followUpStatus}
              onChange={(e) => setEditing({ ...editing, followUpStatus: e.target.value })}
            >
              {Object.entries(FOLLOW_LABELS).map(([k, v]) => (
                <option key={k} value={k}>{v}</option>
              ))}
            </select>

            <label className="block text-xs font-semibold mb-1">開店階段</label>
            <select
              className="w-full mb-3 px-3 py-2 rounded-lg border text-sm"
              value={editing.onboardingStage || 'registered'}
              onChange={(e) => setEditing({ ...editing, onboardingStage: e.target.value })}
            >
              {stages.map((s) => (
                <option key={s.id} value={s.id}>{s.label}</option>
              ))}
            </select>

            <label className="block text-xs font-semibold mb-1">業務備註</label>
            <textarea
              className="w-full mb-4 px-3 py-2 rounded-lg border text-sm min-h-[100px]"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="例如：已 LINE 聯繫，約週三協助上架…"
            />

            <div className="flex gap-2 justify-end">
              <button type="button" className="px-4 py-2 rounded-lg text-sm border" onClick={() => setEditing(null)}>取消</button>
              <button
                type="button"
                disabled={saving}
                className="px-4 py-2 rounded-lg text-sm text-white disabled:opacity-60"
                style={{ background: '#5B5FF0' }}
                onClick={() => patch(editing.id, {
                  followUpStatus: editing.followUpStatus,
                  followUpNote: note,
                  onboardingStage: editing.onboardingStage,
                })}
              >
                {saving ? '儲存中…' : '儲存'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
