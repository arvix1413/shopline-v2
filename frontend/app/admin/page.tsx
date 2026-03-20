'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../components/Header'
import { useAuth } from '../../contexts/AuthContext'
import { Plus, Edit, Trash2, AlertCircle, CheckCircle } from 'lucide-react'

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8787'

interface UserRow { id: number; email: string; name: string; phone: string | null; isAdmin: number | null; createdAt: string | null }
interface TrialSystem { id: number; name: string; desc: string; url: string; color: string; bg: string; border: string; emoji: string; tags: string[]; active: number; sortOrder: number }

const TABS = ['用戶管理', '試用系統管理'] as const
type Tab = typeof TABS[number]


export default function AdminPage() {
  const { user, token, isLoading } = useAuth()
  const router = useRouter()
  const [tab, setTab] = useState<Tab>('用戶管理')
  const [msg, setMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

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

  useEffect(() => {
    if (!isLoading && (!user || user.isAdmin !== 1)) router.push('/login')
  }, [user, isLoading, router])


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

  useEffect(() => {
    if (!user || user.isAdmin !== 1) return
    if (tab === '用戶管理') fetchUsers()
    if (tab === '試用系統管理') fetchSystems()
  }, [tab, user, fetchUsers, fetchSystems])

  if (isLoading) return <main className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" /></main>
  if (!user || user.isAdmin !== 1) return null

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
        <div className="flex gap-1 mb-6 bg-white rounded-lg p-1 shadow-sm border w-fit">
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${tab === t ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
              {t}
            </button>
          ))}
        </div>

        {/* ===== USERS TAB ===== */}
        {tab === '用戶管理' && (
          <div>
            <h2 className="text-lg font-semibold mb-4">用戶列表</h2>
            <div className="bg-white rounded-lg shadow border overflow-hidden">
              {usersLoading ? <div className="flex justify-center py-10"><div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600" /></div> : (
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
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
