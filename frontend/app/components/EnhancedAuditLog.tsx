'use client'

import { useState, useEffect, useCallback } from 'react'
import { RefreshCw, X, ChevronDown, ChevronUp } from 'lucide-react'

const API = process.env.NEXT_PUBLIC_API_URL || 'https://shopline-backend.arvix1413.workers.dev'

const EVENT_META: Record<string, { label: string; color: string; bg: string; icon: string }> = {
  enter_dashboard: { label: '進入系統', color: '#3B82F6', bg: '#EFF6FF', icon: '🚀' },
  create_product:  { label: '建立商品', color: '#10B981', bg: '#ECFDF5', icon: '📦' },
  visit_homepage:  { label: '進入首頁', color: '#6B7280', bg: '#F9FAFB', icon: '🏠' },
  click_signup:    { label: '點擊註冊', color: '#8B5CF6', bg: '#F5F3FF', icon: '✍️' },
  sign_up_complete:{ label: '完成註冊', color: '#0EA5E9', bg: '#F0F9FF', icon: '✅' },
}

const SYSTEM_COLORS: Record<string, string> = {
  'Shopline': '#1E40AF',
  'TinyWearhouse': '#7C3AED',
  'DAF Shoes': '#DC2626',
  'MeierQ': '#D97706',
  'Molava': '#059669',
  'Zenlet': '#0891B2',
  'IMS 庫存管理': '#4F46E5',
}

function getSystemColor(name: string) {
  return SYSTEM_COLORS[name] || '#6B7280'
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const m = Math.floor(diff / 60000)
  if (m < 1) return '剛剛'
  if (m < 60) return `${m} 分鐘前`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h} 小時前`
  return `${Math.floor(h / 24)} 天前`
}

export default function EnhancedAuditLog({ token }: { token: string }) {
  const [logs, setLogs] = useState<any[]>([])
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [userFilter, setUserFilter] = useState('')
  const [eventFilter, setEventFilter] = useState('')
  const [selectedUser, setSelectedUser] = useState<any>(null)
  const [expandedRow, setExpandedRow] = useState<number | null>(null)
  const [view, setView] = useState<'table' | 'timeline'>('table')

  const fetchUsers = useCallback(async () => {
    try {
      const res = await fetch(`${API}/api/users`, { headers: { Authorization: `Bearer ${token}` } })
      if (res.ok) setUsers(await res.json())
    } catch {}
  }, [token])

  const fetchLogs = useCallback(async (uid = userFilter, ev = eventFilter) => {
    setLoading(true)
    try {
      const p = new URLSearchParams({ limit: '200' })
      if (uid) p.set('userId', uid)
      if (ev) p.set('event', ev)
      const res = await fetch(`${API}/api/admin/audit-log?${p}`, { headers: { Authorization: `Bearer ${token}` } })
      if (res.ok) setLogs((await res.json()).logs || [])
    } catch {} finally { setLoading(false) }
  }, [token, userFilter, eventFilter])

  useEffect(() => { fetchUsers(); fetchLogs('', '') }, [])

  const handleUserChange = (uid: string) => {
    setUserFilter(uid)
    setSelectedUser(uid ? users.find((u: any) => String(u.id) === uid) || null : null)
    fetchLogs(uid, eventFilter)
  }

  // ── Stats ──────────────────────────────────────────────────────────────────
  const stats = {
    total: logs.length,
    uniqueUsers: new Set(logs.filter(l => l.user_id).map(l => l.user_id)).size,
    systems: (() => {
      const m: Record<string, number> = {}
      logs.forEach(l => {
        let p: any = {}; try { p = JSON.parse(l.properties || '{}') } catch {}
        const s = p.system || 'Shopline'
        m[s] = (m[s] || 0) + 1
      })
      return Object.entries(m).sort((a, b) => b[1] - a[1])
    })(),
    events: (() => {
      const m: Record<string, number> = {}
      logs.forEach(l => { m[l.event] = (m[l.event] || 0) + 1 })
      return Object.entries(m).sort((a, b) => b[1] - a[1])
    })(),
  }

  // ── User activity summary (for selected user) ──────────────────────────────
  const userActivity = selectedUser ? (() => {
    const userLogs = logs.filter(l => String(l.user_id) === userFilter)
    const systemsVisited = new Set<string>()
    const productsCreated: string[] = []
    userLogs.forEach(l => {
      let p: any = {}; try { p = JSON.parse(l.properties || '{}') } catch {}
      if (p.system) systemsVisited.add(p.system)
      if (l.event === 'create_product' && p.productName) productsCreated.push(p.productName)
    })
    return { count: userLogs.length, systemsVisited: Array.from(systemsVisited), productsCreated, firstSeen: userLogs[userLogs.length - 1]?.created_at, lastSeen: userLogs[0]?.created_at }
  })() : null

  return (
    <div className="space-y-5">

      {/* ── Top stats ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: '總事件數', value: stats.total, icon: '📊', color: '#3B82F6' },
          { label: '活躍用戶', value: stats.uniqueUsers, icon: '👥', color: '#8B5CF6' },
          { label: '涉及系統', value: stats.systems.length, icon: '🌐', color: '#10B981' },
          { label: '事件類型', value: stats.events.length, icon: '🏷️', color: '#F59E0B' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-xl border p-4 flex items-center gap-3">
            <div className="text-2xl">{s.icon}</div>
            <div>
              <div className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── System breakdown ── */}
      {stats.systems.length > 0 && (
        <div className="bg-white rounded-xl border p-4">
          <div className="text-sm font-semibold text-gray-700 mb-3">各系統活動分佈</div>
          <div className="space-y-2">
            {stats.systems.map(([name, cnt]) => {
              const pct = Math.round((cnt / stats.total) * 100)
              const color = getSystemColor(name)
              return (
                <div key={name} className="flex items-center gap-3">
                  <div className="w-24 text-xs text-gray-600 truncate">{name}</div>
                  <div className="flex-1 h-5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full flex items-center px-2 transition-all"
                      style={{ width: `${Math.max(pct, 3)}%`, backgroundColor: color }}>
                      <span className="text-white text-[10px] font-bold">{pct}%</span>
                    </div>
                  </div>
                  <div className="w-8 text-xs text-gray-500 text-right">{cnt}</div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* ── Filters + view toggle ── */}
      <div className="flex flex-wrap items-end gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">篩選用戶</label>
          <select className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 min-w-[220px]"
            value={userFilter} onChange={e => handleUserChange(e.target.value)}>
            <option value="">全部用戶</option>
            {users.filter((u: any) => !u.isAdmin).map((u: any) => (
              <option key={u.id} value={String(u.id)}>{u.email}{u.name ? ` (${u.name})` : ''}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">篩選事件</label>
          <select className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 min-w-[160px]"
            value={eventFilter} onChange={e => { setEventFilter(e.target.value); fetchLogs(userFilter, e.target.value) }}>
            <option value="">全部事件</option>
            {Object.entries(EVENT_META).map(([k, v]) => <option key={k} value={k}>{v.icon} {v.label}</option>)}
          </select>
        </div>
        <button onClick={() => fetchLogs()} className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
          <RefreshCw size={14} /> 重新整理
        </button>
        <div className="ml-auto flex items-center gap-1 bg-gray-100 rounded-lg p-1">
          {(['table', 'timeline'] as const).map(v => (
            <button key={v} onClick={() => setView(v)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${view === v ? 'bg-white shadow text-gray-800' : 'text-gray-500 hover:text-gray-700'}`}>
              {v === 'table' ? '📋 表格' : '⏱ 時間軸'}
            </button>
          ))}
        </div>
      </div>

      {/* ── Selected user card ── */}
      {selectedUser && userActivity && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                {selectedUser.email[0].toUpperCase()}
              </div>
              <div>
                <div className="font-semibold text-blue-900">{selectedUser.email}</div>
                {selectedUser.name && <div className="text-sm text-blue-600">{selectedUser.name}</div>}
              </div>
            </div>
            <button onClick={() => { setUserFilter(''); setSelectedUser(null); fetchLogs('', eventFilter) }}
              className="text-blue-400 hover:text-blue-700"><X size={16} /></button>
          </div>
          <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-blue-700">{userActivity.count}</div>
              <div className="text-xs text-gray-500">總操作次數</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-purple-700">{userActivity.systemsVisited.length}</div>
              <div className="text-xs text-gray-500">訪問系統數</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-green-700">{userActivity.productsCreated.length}</div>
              <div className="text-xs text-gray-500">建立商品數</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <div className="text-xs font-medium text-gray-700">{userActivity.lastSeen ? timeAgo(userActivity.lastSeen) : '-'}</div>
              <div className="text-xs text-gray-500">最後活動</div>
            </div>
          </div>
          {userActivity.systemsVisited.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {userActivity.systemsVisited.map(s => (
                <span key={s} className="px-2.5 py-1 rounded-full text-xs font-medium text-white"
                  style={{ backgroundColor: getSystemColor(s) }}>{s}</span>
              ))}
            </div>
          )}
          {userActivity.productsCreated.length > 0 && (
            <div className="mt-2 text-xs text-blue-700">
              建立商品：{userActivity.productsCreated.join('、')}
            </div>
          )}
        </div>
      )}

      {/* ── Main content ── */}
      {loading ? (
        <div className="flex justify-center py-12"><div className="animate-spin rounded-full h-7 w-7 border-b-2 border-blue-600" /></div>
      ) : view === 'timeline' ? (
        <TimelineView logs={logs} onUserClick={handleUserChange} />
      ) : (
        <TableView logs={logs} expandedRow={expandedRow} setExpandedRow={setExpandedRow} onUserClick={handleUserChange} />
      )}
    </div>
  )
}

function TableView({ logs, expandedRow, setExpandedRow, onUserClick }: any) {
  return (
    <div className="bg-white rounded-xl border overflow-hidden">
      <div className="px-4 py-3 border-b bg-gray-50 flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-700">共 {logs.length} 筆記錄</span>
        <span className="text-xs text-gray-400">最新 200 筆 · 點擊行展開詳情</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
            <tr>
              <th className="px-4 py-3 text-left w-36">時間</th>
              <th className="px-4 py-3 text-left">用戶</th>
              <th className="px-4 py-3 text-left">事件</th>
              <th className="px-4 py-3 text-left">系統</th>
              <th className="px-4 py-3 text-left">詳情</th>
              <th className="px-4 py-3 w-8"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {logs.map((log: any, i: number) => {
              let props: any = {}; try { props = JSON.parse(log.properties || '{}') } catch {}
              const meta = EVENT_META[log.event] || { label: log.event, color: '#6B7280', bg: '#F9FAFB', icon: '📋' }
              const system = props.system || 'Shopline'
              const isExpanded = expandedRow === i
              return (
                <>
                  <tr key={log.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setExpandedRow(isExpanded ? null : i)}>
                    <td className="px-4 py-3 text-xs text-gray-500 whitespace-nowrap">
                      <div>{new Date(log.created_at).toLocaleDateString('zh-TW', { month: '2-digit', day: '2-digit' })}</div>
                      <div className="text-gray-400">{new Date(log.created_at).toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</div>
                    </td>
                    <td className="px-4 py-3">
                      {log.email ? (
                        <button className="text-left" onClick={e => { e.stopPropagation(); onUserClick(String(log.user_id)) }}>
                          <div className="font-medium text-blue-700 hover:underline">{log.email}</div>
                          {log.name && <div className="text-xs text-gray-400">{log.name}</div>}
                        </button>
                      ) : <span className="text-xs text-gray-400">匿名</span>}
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
                        style={{ backgroundColor: meta.bg, color: meta.color }}>
                        {meta.icon} {meta.label}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium">
                        <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: getSystemColor(system) }} />
                        {system}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-500">
                      {props.productName && <span>商品：{props.productName}</span>}
                    </td>
                    <td className="px-4 py-3 text-gray-400">
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </td>
                  </tr>
                  {isExpanded && (
                    <tr key={`${log.id}-exp`} className="bg-blue-50">
                      <td colSpan={6} className="px-6 py-4">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                          <div><span className="text-gray-500">事件 ID：</span><span className="font-mono text-gray-700">{log.id}</span></div>
                          <div><span className="text-gray-500">用戶 ID：</span><span className="font-mono text-gray-700">{log.user_id || '匿名'}</span></div>
                          <div><span className="text-gray-500">匿名 ID：</span><span className="font-mono text-gray-700">{log.anonymous_id}</span></div>
                          <div><span className="text-gray-500">完整時間：</span><span className="text-gray-700">{new Date(log.created_at).toLocaleString('zh-TW')}</span></div>
                          <div><span className="text-gray-500">系統：</span><span className="text-gray-700">{system}</span></div>
                          {props.productName && <div><span className="text-gray-500">商品名稱：</span><span className="text-gray-700">{props.productName}</span></div>}
                          {Object.keys(props).filter(k => k !== 'system' && k !== 'productName').map(k => (
                            <div key={k}><span className="text-gray-500">{k}：</span><span className="text-gray-700">{String(props[k])}</span></div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              )
            })}
            {logs.length === 0 && (
              <tr><td colSpan={6} className="px-4 py-12 text-center text-gray-400">尚無操作記錄</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function TimelineView({ logs, onUserClick }: any) {
  // Group by date
  const grouped: Record<string, any[]> = {}
  logs.forEach((l: any) => {
    const d = new Date(l.created_at).toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' })
    if (!grouped[d]) grouped[d] = []
    grouped[d].push(l)
  })

  return (
    <div className="space-y-6">
      {Object.entries(grouped).map(([date, dayLogs]) => (
        <div key={date}>
          <div className="flex items-center gap-3 mb-3">
            <div className="px-3 py-1 bg-gray-800 text-white text-xs font-semibold rounded-full">{date}</div>
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">{dayLogs.length} 筆</span>
          </div>
          <div className="relative pl-6 space-y-3">
            <div className="absolute left-2 top-0 bottom-0 w-px bg-gray-200" />
            {dayLogs.map((log: any) => {
              let props: any = {}; try { props = JSON.parse(log.properties || '{}') } catch {}
              const meta = EVENT_META[log.event] || { label: log.event, color: '#6B7280', bg: '#F9FAFB', icon: '📋' }
              const system = props.system || 'Shopline'
              return (
                <div key={log.id} className="relative flex gap-3">
                  <div className="absolute -left-4 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center text-[10px]"
                    style={{ backgroundColor: meta.color, top: '10px' }}>
                  </div>
                  <div className="flex-1 bg-white border rounded-xl p-3 hover:shadow-sm transition-shadow">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
                          style={{ backgroundColor: meta.bg, color: meta.color }}>
                          {meta.icon} {meta.label}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-gray-600">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: getSystemColor(system) }} />
                          {system}
                        </span>
                        {props.productName && (
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">📦 {props.productName}</span>
                        )}
                      </div>
                      <span className="text-xs text-gray-400 whitespace-nowrap">
                        {new Date(log.created_at).toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    {log.email && (
                      <button className="mt-1.5 text-xs text-blue-600 hover:underline" onClick={() => onUserClick(String(log.user_id))}>
                        👤 {log.email}{log.name ? ` (${log.name})` : ''}
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
      {logs.length === 0 && (
        <div className="text-center py-12 text-gray-400">尚無操作記錄</div>
      )}
    </div>
  )
}
