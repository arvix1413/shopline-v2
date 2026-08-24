'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../components/Header'
import { Plus, Edit, Trash2, AlertCircle, CheckCircle } from 'lucide-react'
import EnhancedAuditLog from '../components/EnhancedAuditLog'
import MerchantCRM from '../components/MerchantCRM'

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8787'

interface UserRow { id: number; email: string; name: string; phone: string | null; isAdmin: number | null; createdAt: string | null }
interface TrialSystem { id: number; name: string; desc: string; url: string; color: string; bg: string; border: string; emoji: string; tags: string[]; active: number; sortOrder: number }

const TABS = ['商家跟進', '用戶管理', '試用系統管理', '行為漏斗', '增強審計日誌', '流量分析', '聯盟行銷', 'SEO 內容', '店鋪報表'] as const
type Tab = typeof TABS[number]


export default function AdminPage() {
  // 直接从localStorage读取用户信息，避免AuthContext问题
  const [user, setUser] = useState<any>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const [tab, setTab] = useState<Tab>('商家跟進')
  const [msg, setMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  // 初始化用户信息
  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const storedToken = localStorage.getItem('token')
      const storedUser = localStorage.getItem('user')
      if (storedToken && storedUser) {
        const u = JSON.parse(storedUser)
        setToken(storedToken)
        setUser(u)
        if (!u.isAdmin) {
          window.location.href = '/'
        }
      } else {
        window.location.href = '/login'
      }
    } catch {
      window.location.href = '/login'
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Traffic & affiliate state
  const [traffic, setTraffic] = useState<any>(null)
  const [trafficLoading, setTrafficLoading] = useState(false)
  const [affiliates, setAffiliates] = useState<any[]>([])
  const [affLoading, setAffLoading] = useState(false)
  const [showAffForm, setShowAffForm] = useState(false)
  const [affForm, setAffForm] = useState({ name: '', email: '', code: '', commission_rate: 0.1 })
  const [funnel, setFunnel] = useState<Record<string, number>>({})
  const [userProgress, setUserProgress] = useState<any[]>([])
  const [funnelLoading, setFunnelLoading] = useState(false)

  // Shop stats state
  const [shopStats, setShopStats] = useState<any[]>([])
  const [statsLoading, setStatsLoading] = useState(false)

  // SEO settings state
  const [seoSettings, setSeoSettings] = useState<Record<string, string>>({})
  const [seoLoading, setSeoLoading] = useState(false)
  const [seoSaving, setSeoSaving] = useState(false)

  // Users state
  const [users, setUsers] = useState<UserRow[]>([])
  const [usersLoading, setUsersLoading] = useState(false)

  // Trial systems state
  const [systems, setSystems] = useState<TrialSystem[]>([])
  const [sysLoading, setSysLoading] = useState(false)
  const [showSysForm, setShowSysForm] = useState(false)
  const [editingSys, setEditingSys] = useState<TrialSystem | null>(null)
  const [sysForm, setSysForm] = useState({ name: '', desc: '', url: '', color: '#3B82F6', bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)', emoji: '🌐', tags: '', active: 1, sortOrder: 0 })

  const showMsg = (type: 'success' | 'error', text: string) => { setMsg({ type, text }); setTimeout(() => setMsg(null), 4000) }

  const fetchUsers = useCallback(async () => {
    setUsersLoading(true)
    try {
      const res = await fetch(`${API}/api/users`, { headers: { Authorization: `Bearer ${token}` } })
      if (!res.ok) throw new Error()
      setUsers(await res.json())
    } catch { showMsg('error', '獲取用戶失敗') } finally { setUsersLoading(false) }
  }, [token])

  const fetchSystems = useCallback(async () => {
    setSysLoading(true)
    try {
      const res = await fetch(`${API}/api/trial-systems`)
      setSystems(await res.json())
    } catch { showMsg('error', '獲取試用系統失敗') } finally { setSysLoading(false) }
  }, [])

  const fetchFunnel = useCallback(async () => {
    setFunnelLoading(true)
    try {
      const res = await fetch(`${API}/api/admin/funnel`, { headers: { Authorization: `Bearer ${token}` } })
      const data = await res.json()
      setFunnel(data.funnel || {})
      setUserProgress(data.userProgress || [])
    } catch { showMsg('error', '獲取漏斗數據失敗') } finally { setFunnelLoading(false) }
  }, [token])

  const fetchTraffic = useCallback(async () => {
    setTrafficLoading(true)
    try {
      const res = await fetch(`${API}/api/admin/traffic`, { headers: { Authorization: `Bearer ${token}` } })
      if (res.ok) setTraffic(await res.json())
    } catch {} finally { setTrafficLoading(false) }
  }, [token])

  const fetchAffiliates = useCallback(async () => {
    setAffLoading(true)
    try {
      const res = await fetch(`${API}/api/admin/affiliates`, { headers: { Authorization: `Bearer ${token}` } })
      if (res.ok) setAffiliates(await res.json())
    } catch {} finally { setAffLoading(false) }
  }, [token])

  const SHOP_APIS = [
    { name: 'TinyWearhouse', url: 'https://tinywearhouse-backend.arvix1413.workers.dev', emoji: '👗' },
    { name: 'DAF Shoes', url: 'https://daf-shoes-backend.arvix1413.workers.dev', emoji: '👟' },
    { name: 'MeierQ', url: 'https://meierq-api.arvix1413.workers.dev', emoji: '⌚' },
    { name: 'Molava', url: 'https://xyn-api.arvix1413.workers.dev', emoji: '👜' },
    { name: 'Zenlet', url: 'https://xyvn-shop-api.arvix1413.workers.dev', emoji: '💳' },
    { name: 'IMS', url: 'https://ims-backend.arvix1413.workers.dev', emoji: '📦' },
  ]

  const fetchShopStats = useCallback(async () => {
    setStatsLoading(true)
    try {
      const results = await Promise.allSettled(
        SHOP_APIS.map(s => fetch(`${s.url}/api/admin/stats`).then(r => r.json()).then(d => ({ ...d, name: s.name, emoji: s.emoji })))
      )
      setShopStats(results.map((r, i) => r.status === 'fulfilled' ? r.value : { name: SHOP_APIS[i].name, emoji: SHOP_APIS[i].emoji, error: true }))
    } catch { showMsg('error', '獲取店鋪數據失敗') } finally { setStatsLoading(false) }
  }, [])

  const fetchSEO = useCallback(async () => {
    setSeoLoading(true)
    try {
      const res = await fetch(`${API}/api/site-settings`)
      if (!res.ok) throw new Error()
      setSeoSettings(await res.json())
    } catch { showMsg('error', '獲取 SEO 設定失敗') } finally { setSeoLoading(false) }
  }, [])

  const saveSEO = async (updates: Record<string, string>) => {
    setSeoSaving(true)
    try {
      const res = await fetch(`${API}/api/site-settings`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(updates),
      })
      if (!res.ok) throw new Error()
      setSeoSettings(prev => ({ ...prev, ...updates }))
      showMsg('success', 'SEO 設定已儲存')
    } catch { showMsg('error', '儲存 SEO 設定失敗') } finally { setSeoSaving(false) }
  }

  useEffect(() => {
    if (!user || !user.isAdmin) return
    if (tab === '用戶管理') fetchUsers()
    if (tab === '試用系統管理') fetchSystems()
    if (tab === '行為漏斗') fetchFunnel()
    if (tab === '增強審計日誌') {}
    if (tab === '流量分析') fetchTraffic()
    if (tab === '聯盟行銷') fetchAffiliates()
    if (tab === 'SEO 內容') fetchSEO()
    if (tab === '店鋪報表') fetchShopStats()
  }, [tab, user, fetchUsers, fetchSystems, fetchFunnel, fetchTraffic, fetchAffiliates, fetchShopStats, fetchSEO])

  if (isLoading) return <main className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" /></main>
  if (!user || !user.isAdmin) {
    if (typeof window !== 'undefined') window.location.href = '/'
    return null
  }

  // ---- User handlers ----
  const handleUserDelete = async (id: number, email: string) => {
    if (!confirm(`確定刪除用戶「${email}」？`)) return
    try {
      const res = await fetch(`${API}/api/users/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } })
      if (!res.ok) throw new Error()
      showMsg('success', '用戶已刪除'); fetchUsers()
    } catch { showMsg('error', '刪除失敗') }
  }

  // ---- Trial system handlers ----
  const handleSysSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const data = { ...sysForm, tags: sysForm.tags.split(',').map(t => t.trim()).filter(Boolean) }
    try {
      if (editingSys) {
        const res = await fetch(`${API}/api/trial-systems/${editingSys.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify(data) })
        if (!res.ok) throw new Error((await res.json()).error)
        showMsg('success', '已更新')
      } else {
        const res = await fetch(`${API}/api/trial-systems`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify(data) })
        if (!res.ok) throw new Error((await res.json()).error)
        showMsg('success', '已新增')
      }
      setShowSysForm(false); setEditingSys(null)
      setSysForm({ name: '', desc: '', url: '', color: '#3B82F6', bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)', emoji: '🌐', tags: '', active: 1, sortOrder: 0 })
      fetchSystems()
    } catch (e: any) { showMsg('error', e.message || '操作失敗') }
  }

  const handleSysDelete = async (id: number, name: string) => {
    if (!confirm(`確定刪除「${name}」？`)) return
    try {
      const res = await fetch(`${API}/api/trial-systems/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } })
      if (!res.ok) throw new Error()
      showMsg('success', '已刪除'); fetchSystems()
    } catch { showMsg('error', '刪除失敗') }
  }

  const inp = 'w-full p-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500'

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {msg && (
          <div className={`mb-4 p-3 rounded-lg flex items-center gap-2 text-sm ${msg.type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
            {msg.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />} {msg.text}
          </div>
        )}

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">管理後台</h1>
          <span className="text-sm text-gray-500">管理員：{user.email}</span>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-1 mb-6 bg-white rounded-lg p-1 shadow-sm border">
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${tab === t ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
              {t}
            </button>
          ))}
        </div>

        {/* ===== MERCHANT CRM ===== */}
        {tab === '商家跟進' && token && (
          <MerchantCRM token={token} showMsg={showMsg} />
        )}

        {/* ===== USERS TAB ===== */}
        {tab === '用戶管理' && (
          <div>
            <h2 className="text-lg font-semibold mb-4">用戶列表</h2>
            <div className="bg-white rounded-lg shadow border overflow-hidden">
              {usersLoading ? <div className="flex justify-center py-10"><div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600" /></div> : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
                    <tr>
                      <th className="px-4 py-3 text-left">Email</th>
                      <th className="px-4 py-3 text-left">名稱</th>
                      <th className="px-4 py-3 text-left">電話</th>
                      <th className="px-4 py-3 text-left">角色</th>
                      <th className="px-4 py-3 text-left">註冊時間</th>
                      <th className="px-4 py-3 text-left">操作</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {users.map(u => (
                      <tr key={u.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">{u.email}</td>
                        <td className="px-4 py-3">{u.name}</td>
                        <td className="px-4 py-3 text-gray-500">{u.phone || '-'}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${u.isAdmin ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-600'}`}>
                            {u.isAdmin ? '管理員' : '一般用戶'}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-500 text-xs">{u.createdAt ? new Date(u.createdAt).toLocaleDateString('zh-TW') : '-'}</td>
                        <td className="px-4 py-3">
                          {!u.isAdmin && (
                            <button onClick={() => handleUserDelete(u.id, u.email)} className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50"><Trash2 size={15} /></button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ===== TRIAL SYSTEMS TAB ===== */}
        {tab === '試用系統管理' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">試用系統列表</h2>
              <button onClick={() => { setShowSysForm(true); setEditingSys(null); setSysForm({ name: '', desc: '', url: '', color: '#3B82F6', bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)', emoji: '🌐', tags: '', active: 1, sortOrder: 0 }) }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:bg-blue-700">
                <Plus size={16} /> 新增系統
              </button>
            </div>

            {showSysForm && (
              <div className="bg-white rounded-lg p-5 mb-5 shadow border">
                <h3 className="font-semibold mb-4">{editingSys ? '編輯試用系統' : '新增試用系統'}</h3>
                <form onSubmit={handleSysSubmit} className="grid md:grid-cols-2 gap-3">
                  <div><label className="block text-xs font-medium mb-1">系統名稱 *</label><input className={inp} value={sysForm.name} onChange={e => setSysForm(p => ({ ...p, name: e.target.value }))} required /></div>
                  <div><label className="block text-xs font-medium mb-1">Emoji</label><input className={inp} value={sysForm.emoji} onChange={e => setSysForm(p => ({ ...p, emoji: e.target.value }))} /></div>
                  <div className="md:col-span-2"><label className="block text-xs font-medium mb-1">描述</label><textarea className={`${inp} h-16`} value={sysForm.desc} onChange={e => setSysForm(p => ({ ...p, desc: e.target.value }))} /></div>
                  <div className="md:col-span-2"><label className="block text-xs font-medium mb-1">URL *</label><input type="url" className={inp} value={sysForm.url} onChange={e => setSysForm(p => ({ ...p, url: e.target.value }))} required /></div>
                  <div><label className="block text-xs font-medium mb-1">主色 (hex)</label><input className={inp} value={sysForm.color} onChange={e => setSysForm(p => ({ ...p, color: e.target.value }))} /></div>
                  <div><label className="block text-xs font-medium mb-1">排序</label><input type="number" className={inp} value={sysForm.sortOrder} onChange={e => setSysForm(p => ({ ...p, sortOrder: Number(e.target.value) }))} /></div>
                  <div className="md:col-span-2"><label className="block text-xs font-medium mb-1">標籤（逗號分隔）</label><input className={inp} value={sysForm.tags} onChange={e => setSysForm(p => ({ ...p, tags: e.target.value }))} placeholder="電商, 服飾, 會員系統" /></div>
                  <div className="md:col-span-2">
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" checked={sysForm.active === 1} onChange={e => setSysForm(p => ({ ...p, active: e.target.checked ? 1 : 0 }))} className="w-4 h-4" />
                      啟用（顯示在試用頁面）
                    </label>
                  </div>
                  <div className="md:col-span-2 flex gap-3">
                    <button type="submit" className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-blue-700">{editingSys ? '更新' : '新增'}</button>
                    <button type="button" onClick={() => { setShowSysForm(false); setEditingSys(null) }} className="bg-gray-500 text-white px-5 py-2 rounded-lg text-sm hover:bg-gray-600">取消</button>
                  </div>
                </form>
              </div>
            )}

            <div className="bg-white rounded-lg shadow border overflow-hidden">
              {sysLoading ? <div className="flex justify-center py-10"><div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600" /></div> : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
                    <tr>
                      <th className="px-4 py-3 text-left">系統</th>
                      <th className="px-4 py-3 text-left">URL</th>
                      <th className="px-4 py-3 text-left">標籤</th>
                      <th className="px-4 py-3 text-left">狀態</th>
                      <th className="px-4 py-3 text-left">操作</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {systems.map(s => (
                      <tr key={s.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{s.emoji}</span>
                            <div><div className="font-medium">{s.name}</div><div className="text-xs text-gray-500">{s.desc}</div></div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-blue-600 text-xs truncate max-w-[180px]"><a href={s.url} target="_blank" rel="noopener noreferrer">{s.url}</a></td>
                        <td className="px-4 py-3">
                          <div className="flex flex-wrap gap-1">
                            {s.tags.map(t => <span key={t} className="px-1.5 py-0.5 rounded text-xs bg-gray-100 text-gray-600">{t}</span>)}
                          </div>
                        </td>
                        <td className="px-4 py-3"><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${s.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-500'}`}>{s.active ? '啟用' : '停用'}</span></td>
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <button onClick={() => { setEditingSys(s); setSysForm({ name: s.name, desc: s.desc, url: s.url, color: s.color, bg: s.bg, border: s.border, emoji: s.emoji, tags: s.tags.join(', '), active: s.active, sortOrder: s.sortOrder }); setShowSysForm(true) }} className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50"><Edit size={15} /></button>
                            <button onClick={() => handleSysDelete(s.id, s.name)} className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50"><Trash2 size={15} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {systems.length === 0 && <tr><td colSpan={5} className="px-4 py-8 text-center text-gray-400">尚無試用系統，點擊「新增系統」開始</td></tr>}
                  </tbody>
                </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ===== FUNNEL TAB ===== */}
        {tab === '行為漏斗' && (
          <div>
            <h2 className="text-lg font-semibold mb-4">用戶轉換漏斗</h2>
            {funnelLoading ? <div className="flex justify-center py-10"><div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600" /></div> : (
              <>
                {/* Funnel bars */}
                <div className="bg-white rounded-lg shadow border p-6 mb-6">
                  {[
                    { key: 'visit_homepage', label: '進入首頁', color: '#3B82F6' },
                    { key: 'click_signup', label: '點擊註冊', color: '#8B5CF6' },
                    { key: 'sign_up_complete', label: '完成註冊', color: '#10B981' },
                    { key: 'enter_dashboard', label: '進入後台', color: '#F59E0B' },
                    { key: 'create_product', label: '建立商品', color: '#EF4444' },
                  ].map((step, i, arr) => {
                    const cnt = funnel[step.key] ?? 0
                    const max = funnel['visit_homepage'] || 1
                    const pct = Math.round((cnt / max) * 100)
                    const prev = i > 0 ? (funnel[arr[i-1].key] ?? 0) : cnt
                    const dropPct = prev > 0 ? Math.round(((prev - cnt) / prev) * 100) : 0
                    return (
                      <div key={step.key} className="mb-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{step.label}</span>
                          <div className="flex items-center gap-3">
                            {i > 0 && dropPct > 0 && <span className="text-xs text-red-500">-{dropPct}% 流失</span>}
                            <span className="text-sm font-bold" style={{ color: step.color }}>{cnt.toLocaleString()} 人</span>
                          </div>
                        </div>
                        <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
                          <div className="h-full rounded-lg transition-all duration-500 flex items-center px-3"
                            style={{ width: `${Math.max(pct, 2)}%`, backgroundColor: step.color, opacity: 0.85 }}>
                            <span className="text-white text-xs font-bold">{pct}%</span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Per-user progress */}
                <div className="bg-white rounded-lg shadow border overflow-hidden">
                  <div className="px-4 py-3 border-b bg-gray-50">
                    <h3 className="font-semibold text-sm">用戶進度明細</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                    <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
                      <tr>
                        <th className="px-4 py-3 text-left">用戶</th>
                        <th className="px-4 py-3 text-center">進入首頁</th>
                        <th className="px-4 py-3 text-center">點擊註冊</th>
                        <th className="px-4 py-3 text-center">完成註冊</th>
                        <th className="px-4 py-3 text-center">進入後台</th>
                        <th className="px-4 py-3 text-center">建立商品</th>
                        <th className="px-4 py-3 text-left">卡在</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {userProgress.map((u: any) => {
                        const steps = [u.visited, u.clicked_signup, u.signed_up, u.entered_dashboard, u.created_product]
                        const labels = ['進入首頁','點擊註冊','完成註冊','進入後台','建立商品']
                        const lastDone = steps.lastIndexOf(1)
                        const stuck = lastDone < 4 ? labels[lastDone + 1] : null
                        return (
                          <tr key={u.id} className="hover:bg-gray-50">
                            <td className="px-4 py-3">
                              <div className="font-medium text-sm">{u.name}</div>
                              <div className="text-xs text-gray-400">{u.email}</div>
                            </td>
                            {steps.map((s, i) => (
                              <td key={i} className="px-4 py-3 text-center">
                                <span className={`text-base ${s ? 'text-green-500' : 'text-gray-200'}`}>{s ? '✓' : '○'}</span>
                              </td>
                            ))}
                            <td className="px-4 py-3">
                              {stuck ? <span className="px-2 py-0.5 rounded-full text-xs bg-orange-100 text-orange-700">{stuck}</span> : <span className="text-xs text-green-600">✅ 完成</span>}
                            </td>
                          </tr>
                        )
                      })}
                      {userProgress.length === 0 && <tr><td colSpan={7} className="px-4 py-8 text-center text-gray-400">尚無用戶數據</td></tr>}
                    </tbody>
                  </table>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* ===== 增强审计日志 TAB ===== */}
        {tab === '增強審計日誌' && (
          <EnhancedAuditLog token={token!} />
        )}

        {/* ===== TRAFFIC TAB ===== */}
        {tab === '流量分析' && (
          <div className="space-y-5">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <h2 className="text-lg font-semibold">流量來源分析</h2>
              <button type="button" onClick={fetchTraffic}
                className="text-xs px-3 py-1.5 rounded-lg border bg-white hover:bg-gray-50 text-gray-600">
                重新整理
              </button>
            </div>
            {trafficLoading ? <div className="flex justify-center py-10"><div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600" /></div> : traffic ? (
              <>
                {/* Geo visitor dashboard */}
                {(() => {
                  const geo = traffic.geo || {}
                  const totals = geo.totals || {}
                  const maxCountry = Math.max(1, ...(geo.countries || []).map((x: any) => Number(x.visitors) || 0))
                  const countryName = (code: string) => ({
                    TW: '台灣', CN: '中國', HK: '香港', MO: '澳門', JP: '日本', KR: '韓國',
                    US: '美國', SG: '新加坡', MY: '馬來西亞', VN: '越南', TH: '泰國',
                    PH: '菲律賓', ID: '印尼', AU: '澳洲', GB: '英國', DE: '德國',
                    FR: '法國', CA: '加拿大', IN: '印度', unknown: '未知',
                  } as Record<string, string>)[code] || code
                  return (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                          { label: '瀏覽次數', value: totals.views ?? 0, hint: `近 ${geo.days || 30} 天` },
                          { label: '獨立訪客', value: totals.visitors ?? 0, hint: '依匿名 ID' },
                          { label: '國家數', value: totals.countries ?? 0, hint: '含未知' },
                          { label: '城市列數', value: geo.cities?.length ?? 0, hint: 'Top 列表' },
                        ].map((card) => (
                          <div key={card.label} className="bg-white rounded-xl border p-4">
                            <div className="text-xs text-gray-500">{card.label}</div>
                            <div className="text-2xl font-bold text-gray-900 mt-1">{Number(card.value).toLocaleString()}</div>
                            <div className="text-[11px] text-gray-400 mt-1">{card.hint}</div>
                          </div>
                        ))}
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-xl border p-4">
                          <div className="text-sm font-semibold text-gray-700 mb-3">🌍 訪客國家</div>
                          {(geo.countries || []).length === 0 ? (
                            <div className="text-xs text-gray-400">尚無瀏覽數據（訪客造訪網站後會自動累積）</div>
                          ) : (geo.countries || []).map((row: any) => (
                            <div key={row.country} className="py-2 border-b last:border-0">
                              <div className="flex items-center justify-between text-sm mb-1">
                                <span className="font-medium text-gray-800">{countryName(row.country)} <span className="text-gray-400 text-xs">{row.country}</span></span>
                                <span className="text-xs text-gray-500">{row.visitors} 人 · {row.views} 次</span>
                              </div>
                              <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                                <div className="h-full rounded-full bg-blue-500" style={{ width: `${Math.max(4, (Number(row.visitors) / maxCountry) * 100)}%` }} />
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="bg-white rounded-xl border p-4">
                          <div className="text-sm font-semibold text-gray-700 mb-3">📍 訪客城市</div>
                          {(geo.cities || []).length === 0 ? (
                            <div className="text-xs text-gray-400">尚無城市數據</div>
                          ) : (
                            <div className="overflow-x-auto max-h-80 overflow-y-auto">
                              <table className="w-full text-sm">
                                <thead className="text-xs text-gray-500 uppercase bg-gray-50 sticky top-0">
                                  <tr>
                                    <th className="px-2 py-2 text-left">城市</th>
                                    <th className="px-2 py-2 text-left">國家</th>
                                    <th className="px-2 py-2 text-right">訪客</th>
                                    <th className="px-2 py-2 text-right">瀏覽</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y">
                                  {(geo.cities || []).map((row: any, i: number) => (
                                    <tr key={`${row.country}-${row.city}-${i}`} className="hover:bg-gray-50">
                                      <td className="px-2 py-2 font-medium">{row.city || 'unknown'}{row.region ? <span className="text-gray-400 text-xs ml-1">({row.region})</span> : null}</td>
                                      <td className="px-2 py-2 text-gray-600">{countryName(row.country)}</td>
                                      <td className="px-2 py-2 text-right text-blue-600 font-semibold">{row.visitors}</td>
                                      <td className="px-2 py-2 text-right text-gray-500">{row.views}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-xl border p-4">
                          <div className="text-sm font-semibold text-gray-700 mb-3">📄 熱門頁面</div>
                          {(geo.topPaths || []).length === 0 ? (
                            <div className="text-xs text-gray-400">尚無數據</div>
                          ) : (geo.topPaths || []).map((row: any) => (
                            <div key={row.path} className="flex items-center justify-between py-1.5 border-b last:border-0 gap-3">
                              <span className="text-sm text-gray-700 truncate font-mono text-xs">{row.path}</span>
                              <span className="text-xs text-gray-500 whitespace-nowrap">{row.visitors} 人 · {row.views} 次</span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-white rounded-xl border p-4">
                          <div className="text-sm font-semibold text-gray-700 mb-3">🕒 最近瀏覽</div>
                          {(geo.recent || []).length === 0 ? (
                            <div className="text-xs text-gray-400">尚無數據</div>
                          ) : (
                            <div className="max-h-80 overflow-y-auto space-y-2">
                              {(geo.recent || []).map((row: any, i: number) => (
                                <div key={`${row.created_at}-${i}`} className="text-xs border-b last:border-0 pb-2">
                                  <div className="flex justify-between gap-2">
                                    <span className="font-mono text-gray-800 truncate">{row.path}</span>
                                    <span className="text-gray-400 whitespace-nowrap">{row.created_at}</span>
                                  </div>
                                  <div className="text-gray-500 mt-0.5">
                                    {countryName(row.country)} · {row.city || 'unknown'}
                                    {row.device_type ? ` · ${row.device_type}` : ''}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })()}

                <div className="grid md:grid-cols-3 gap-4">
                  {/* UTM Source */}
                  <div className="bg-white rounded-xl border p-4">
                    <div className="text-sm font-semibold text-gray-700 mb-3">📡 流量來源 (utm_source)</div>
                    {traffic.sources?.length === 0 ? <div className="text-xs text-gray-400">尚無數據</div> : traffic.sources?.map((s: any) => (
                      <div key={s.source} className="flex items-center justify-between py-1.5 border-b last:border-0">
                        <span className="text-sm text-gray-700">{s.source}</span>
                        <span className="text-sm font-bold text-blue-600">{s.users} 人</span>
                      </div>
                    ))}
                  </div>
                  {/* Ref */}
                  <div className="bg-white rounded-xl border p-4">
                    <div className="text-sm font-semibold text-gray-700 mb-3">🔗 推薦來源 (ref)</div>
                    {traffic.refs?.length === 0 ? <div className="text-xs text-gray-400">尚無數據</div> : traffic.refs?.map((r: any) => (
                      <div key={r.ref} className="flex items-center justify-between py-1.5 border-b last:border-0">
                        <span className="text-sm text-gray-700">{r.ref}</span>
                        <span className="text-sm font-bold text-purple-600">{r.users} 人</span>
                      </div>
                    ))}
                  </div>
                  {/* Campaign */}
                  <div className="bg-white rounded-xl border p-4">
                    <div className="text-sm font-semibold text-gray-700 mb-3">📣 廣告活動 (utm_campaign)</div>
                    {traffic.campaigns?.length === 0 ? <div className="text-xs text-gray-400">尚無數據</div> : traffic.campaigns?.map((c: any) => (
                      <div key={c.utm_campaign} className="flex items-center justify-between py-1.5 border-b last:border-0">
                        <span className="text-sm text-gray-700">{c.utm_campaign}</span>
                        <span className="text-sm font-bold text-green-600">{c.users} 人</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Affiliate conversions */}
                {traffic.affConversions?.length > 0 && (
                  <div className="bg-white rounded-xl border p-4">
                    <div className="text-sm font-semibold text-gray-700 mb-3">💰 聯盟行銷轉換</div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                      <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                        <tr>
                          <th className="px-3 py-2 text-left">推廣者</th>
                          <th className="px-3 py-2 text-left">代碼</th>
                          <th className="px-3 py-2 text-right">轉換數</th>
                          <th className="px-3 py-2 text-right">營收</th>
                          <th className="px-3 py-2 text-right">佣金</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {traffic.affConversions.map((a: any) => (
                          <tr key={a.affiliate_code} className="hover:bg-gray-50">
                            <td className="px-3 py-2 font-medium">{a.name || '-'}</td>
                            <td className="px-3 py-2 text-blue-600 font-mono text-xs">{a.affiliate_code}</td>
                            <td className="px-3 py-2 text-right">{a.conversions}</td>
                            <td className="px-3 py-2 text-right text-green-600">NT${Math.round(a.revenue).toLocaleString()}</td>
                            <td className="px-3 py-2 text-right text-orange-600">NT${Math.round(a.commission).toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    </div>
                  </div>
                )}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-700">
                  💡 國家／城市由 Cloudflare 依訪客 IP 自動判斷。推廣連結可加：
                  <code className="bg-blue-100 px-1 rounded">?utm_source=ig&utm_campaign=春季活動&ref=kol_name</code>
                </div>
              </>
            ) : <div className="text-center py-10 text-gray-400">點擊重新整理載入數據</div>}
          </div>
        )}

        {/* ===== AFFILIATE TAB ===== */}
        {tab === '聯盟行銷' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">聯盟行銷管理</h2>
              <button onClick={() => setShowAffForm(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:bg-blue-700">
                <Plus size={16} /> 新增推廣者
              </button>
            </div>

            {showAffForm && (
              <div className="bg-white rounded-xl border p-5 mb-5">
                <h3 className="font-semibold mb-4">新增推廣者</h3>
                <form onSubmit={async e => {
                  e.preventDefault()
                  const res = await fetch(`${API}/api/admin/affiliates`, {
                    method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                    body: JSON.stringify(affForm)
                  })
                  if (res.ok) { showMsg('success', '已新增'); setShowAffForm(false); setAffForm({ name:'',email:'',code:'',commission_rate:0.1 }); fetchAffiliates() }
                  else showMsg('error', '新增失敗')
                }} className="grid md:grid-cols-2 gap-3">
                  <div><label className="block text-xs font-medium mb-1">推廣者名稱 *</label><input className={inp} value={affForm.name} onChange={e=>setAffForm(p=>({...p,name:e.target.value}))} required /></div>
                  <div><label className="block text-xs font-medium mb-1">Email</label><input type="email" className={inp} value={affForm.email} onChange={e=>setAffForm(p=>({...p,email:e.target.value}))} /></div>
                  <div><label className="block text-xs font-medium mb-1">推廣代碼 * (用於 ?ref=xxx)</label><input className={inp} value={affForm.code} onChange={e=>setAffForm(p=>({...p,code:e.target.value}))} required placeholder="kol_name" /></div>
                  <div><label className="block text-xs font-medium mb-1">佣金比例 (0~1)</label><input type="number" step="0.01" min="0" max="1" className={inp} value={affForm.commission_rate} onChange={e=>setAffForm(p=>({...p,commission_rate:Number(e.target.value)}))} /></div>
                  <div className="md:col-span-2 flex gap-3">
                    <button type="submit" className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-blue-700">新增</button>
                    <button type="button" onClick={()=>setShowAffForm(false)} className="bg-gray-500 text-white px-5 py-2 rounded-lg text-sm hover:bg-gray-600">取消</button>
                  </div>
                </form>
              </div>
            )}

            <div className="bg-white rounded-xl border overflow-hidden">
              {affLoading ? <div className="flex justify-center py-10"><div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600" /></div> : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
                    <tr>
                      <th className="px-4 py-3 text-left">推廣者</th>
                      <th className="px-4 py-3 text-left">代碼</th>
                      <th className="px-4 py-3 text-right">佣金率</th>
                      <th className="px-4 py-3 text-right">點擊</th>
                      <th className="px-4 py-3 text-right">轉換</th>
                      <th className="px-4 py-3 text-right">累積佣金</th>
                      <th className="px-4 py-3 text-left">狀態</th>
                      <th className="px-4 py-3 text-left">推廣連結</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {affiliates.map((a: any) => (
                      <tr key={a.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div className="font-medium">{a.name}</div>
                          {a.email && <div className="text-xs text-gray-400">{a.email}</div>}
                        </td>
                        <td className="px-4 py-3 font-mono text-blue-600 text-xs">{a.code}</td>
                        <td className="px-4 py-3 text-right">{Math.round(a.commission_rate * 100)}%</td>
                        <td className="px-4 py-3 text-right">{a.total_clicks}</td>
                        <td className="px-4 py-3 text-right">{a.total_conversions}</td>
                        <td className="px-4 py-3 text-right text-orange-600 font-medium">NT${Math.round(a.total_commission).toLocaleString()}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${a.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-500'}`}>
                            {a.active ? '啟用' : '停用'}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-xs text-gray-500 max-w-[200px] truncate">
                          <a href={`/register?ref=${a.code}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            ?ref={a.code}
                          </a>
                        </td>
                      </tr>
                    ))}
                    {affiliates.length === 0 && <tr><td colSpan={8} className="px-4 py-8 text-center text-gray-400">尚無推廣者，點擊「新增推廣者」開始</td></tr>}
                  </tbody>
                </table>
                </div>
              )}
            </div>
          </div>
        )}


        {/* ===== SEO TAB ===== */}
        {tab === 'SEO 內容' && (
          <SEOTab settings={seoSettings} loading={seoLoading} saving={seoSaving} onSave={saveSEO} inp={inp} />
        )}

        {/* ===== SHOP STATS TAB ===== */}
        {tab === '店鋪報表' && (
          <div>
            <h2 className="text-lg font-semibold mb-4">客戶店鋪營業狀況</h2>
            {statsLoading ? <div className="flex justify-center py-10"><div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600" /></div> : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {shopStats.map((s: any) => {
                  const growth = s.lastMonthOrders > 0
                    ? Math.round(((s.thisMonthOrders - s.lastMonthOrders) / s.lastMonthOrders) * 100)
                    : s.thisMonthOrders > 0 ? 100 : 0
                  return (
                    <div key={s.name} className="bg-white rounded-xl shadow border p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl">{s.emoji}</span>
                        <div>
                          <div className="font-bold text-gray-900">{s.name}</div>
                          {s.error && <div className="text-xs text-red-400">無法連線</div>}
                        </div>
                      </div>
                      {!s.error && (
                        <>
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="bg-blue-50 rounded-lg p-3">
                              <div className="text-xs text-blue-500 mb-1">累積訂單</div>
                              <div className="text-xl font-bold text-blue-700">{s.totalOrders?.toLocaleString()}</div>
                            </div>
                            <div className="bg-green-50 rounded-lg p-3">
                              <div className="text-xs text-green-500 mb-1">累積金額</div>
                              <div className="text-lg font-bold text-green-700">NT${Math.round(s.totalAmount || 0).toLocaleString()}</div>
                            </div>
                            <div className="bg-purple-50 rounded-lg p-3">
                              <div className="text-xs text-purple-500 mb-1">本月訂單</div>
                              <div className="text-xl font-bold text-purple-700">{s.thisMonthOrders?.toLocaleString()}</div>
                            </div>
                            <div className="bg-orange-50 rounded-lg p-3">
                              <div className="text-xs text-orange-500 mb-1">月成長率</div>
                              <div className={`text-xl font-bold ${growth >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                                {growth >= 0 ? '+' : ''}{growth}%
                              </div>
                            </div>
                          </div>
                          {s.monthly && s.monthly.length > 0 && (
                            <div>
                              <div className="text-xs text-gray-400 mb-2">近 6 個月訂單</div>
                              <div className="flex items-end gap-1 h-12">
                                {s.monthly.map((m: any) => {
                                  const maxCnt = Math.max(...s.monthly.map((x: any) => x.cnt), 1)
                                  const h = Math.max(Math.round((m.cnt / maxCnt) * 100), 4)
                                  return (
                                    <div key={m.month} className="flex-1 flex flex-col items-center gap-0.5" title={`${m.month}: ${m.cnt} 筆`}>
                                      <div className="w-full rounded-sm bg-blue-400" style={{ height: `${h}%` }} />
                                      <div className="text-[9px] text-gray-400">{m.month?.slice(5)}</div>
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}

// ── SEO Tab ───────────────────────────────────────────────────────────────────
const SEO_FIELDS = [
  { section: '首頁 SEO', fields: [
    { key: 'home_title', label: 'Title', placeholder: 'ARVIX 全方位零售整合專家 | 電商平台', hint: '建議 50-60 字元' },
    { key: 'home_description', label: 'Meta Description', placeholder: 'ARVIX 提供全方位的零售解決方案...', hint: '建議 120-160 字元', textarea: true },
    { key: 'home_keywords', label: '關鍵字', placeholder: '電商平台,網路開店,SaaS電商,ARVIX', hint: '逗號分隔' },
    { key: 'home_og_title', label: 'OG Title（社群分享）', placeholder: 'ARVIX - 台灣最強電商平台' },
    { key: 'home_og_description', label: 'OG Description', placeholder: '超過 60 萬商家信賴的電商解決方案', textarea: true },
  ]},
  { section: '品牌資訊', fields: [
    { key: 'brand_name', label: '品牌名稱', placeholder: 'ARVIX' },
    { key: 'brand_tagline', label: '品牌標語', placeholder: '全方位零售整合專家' },
    { key: 'brand_description', label: '品牌描述', placeholder: 'ARVIX 提供全方位的零售解決方案...', textarea: true },
    { key: 'contact_email', label: '聯絡 Email', placeholder: 'contact@arvix.com' },
    { key: 'contact_phone', label: '聯絡電話', placeholder: '+886-2-1234-5678' },
  ]},
  { section: '各頁面 SEO', fields: [
    { key: 'pricing_title', label: '方案費用頁 Title', placeholder: 'ARVIX 方案費用 | 免費試用 14 天' },
    { key: 'pricing_description', label: '方案費用頁 Description', placeholder: '查看 ARVIX 各方案費用...', textarea: true },
    { key: 'templates_title', label: '版型主題頁 Title', placeholder: 'ARVIX 版型主題 | 多款精美設計' },
    { key: 'templates_description', label: '版型主題頁 Description', placeholder: '超過 30 款精美版型，一鍵套用...', textarea: true },
    { key: 'apps_title', label: '擴充功能頁 Title', placeholder: 'ARVIX 擴充功能商店' },
    { key: 'apps_description', label: '擴充功能頁 Description', placeholder: '豐富的試用系統，讓你體驗各種電商解決方案...', textarea: true },
  ]},
]

function SEOTab({ settings, loading, saving, onSave, inp }: {
  settings: Record<string,string>; loading: boolean; saving: boolean
  onSave: (u: Record<string,string>) => void; inp: string
}) {
  const [form, setForm] = useState<Record<string,string>>({})
  const [activeSection, setActiveSection] = useState(0)
  useEffect(() => { setForm(settings) }, [settings])

  const handleSave = () => {
    const changed: Record<string,string> = {}
    for (const [k, v] of Object.entries(form)) if (v !== settings[k]) changed[k] = v
    if (Object.keys(changed).length > 0) onSave(changed)
  }

  if (loading) return <div className="flex justify-center py-10"><div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600" /></div>

  const section = SEO_FIELDS[activeSection]
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">SEO 內容管理</h2>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400">儲存後重新 build 前端才會生效</span>
          <button onClick={handleSave} disabled={saving}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-60">
            {saving ? '儲存中...' : '儲存變更'}
          </button>
        </div>
      </div>
      <div className="flex gap-1 bg-gray-100 rounded-lg p-1 w-fit">
        {SEO_FIELDS.map((s, i) => (
          <button key={i} onClick={() => setActiveSection(i)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${activeSection === i ? 'bg-white shadow text-gray-800' : 'text-gray-500 hover:text-gray-700'}`}>
            {s.section}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-xl border p-6 space-y-5">
        <h3 className="font-semibold text-gray-800 border-b pb-3">{section.section}</h3>
        {section.fields.map((f: any) => (
          <div key={f.key}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {f.label}
              {f.hint && <span className="ml-2 text-xs text-gray-400 font-normal">{f.hint}</span>}
            </label>
            {f.textarea ? (
              <textarea className={`${inp} h-20 resize-none`} value={form[f.key] || ''} placeholder={f.placeholder}
                onChange={e => setForm(p => ({...p, [f.key]: e.target.value}))} />
            ) : (
              <input className={inp} value={form[f.key] || ''} placeholder={f.placeholder}
                onChange={e => setForm(p => ({...p, [f.key]: e.target.value}))} />
            )}
            {form[f.key] && <div className="text-xs text-gray-400 mt-1">{form[f.key].length} 字元</div>}
          </div>
        ))}
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-700 space-y-1">
        <div className="font-semibold mb-1">📈 SEO 優化建議</div>
        <div>• Title 包含主要關鍵字，建議 50-60 字元</div>
        <div>• Description 自然描述頁面內容，建議 120-160 字元</div>
        <div>• 每個頁面的 Title 和 Description 應該唯一</div>
      </div>
    </div>
  )
}

