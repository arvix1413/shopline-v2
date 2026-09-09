'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useAuth } from '../../../contexts/AuthContext'
import { useI18n } from '../../../contexts/I18nContext'
import { getMerchantStudioCopy, mapStudioApiError } from '../../../lib/merchantStudioCopy'
import { getCheckoutCopy } from '../../../lib/checkoutCopy'
import {
  defaultStorePages,
  parseStorePages,
  slugifyPageKey,
  displayStorePageTitle,
  type StorePage,
} from '../../../lib/storePages'
import { storePageUrl } from '../../../lib/storefrontUrl'

const API = process.env.NEXT_PUBLIC_API_URL || 'https://shopline-backend.arvix1413.workers.dev'

export default function StorePagesEditor() {
  const { user, token, isLoading } = useAuth()
  const { locale } = useI18n()
  const c = getMerchantStudioCopy(locale)
  const cx = getCheckoutCopy(locale)
  const router = useRouter()
  const [pages, setPages] = useState<StorePage[]>([])
  const [storeSlug, setStoreSlug] = useState('')
  const [selectedKey, setSelectedKey] = useState('about')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')
  const [error, setError] = useState('')
  const [newTitle, setNewTitle] = useState('')

  useEffect(() => {
    if (isLoading) return
    if (!user || !token) {
      router.replace(`/login?next=${encodeURIComponent('/my-store/pages')}`)
      return
    }
    ;(async () => {
      setLoading(true)
      try {
        const [storeRes, pagesRes] = await Promise.all([
          fetch(`${API}/api/stores/me`, { headers: { Authorization: `Bearer ${token}` } }),
          fetch(`${API}/api/stores/me/pages`, { headers: { Authorization: `Bearer ${token}` } }),
        ])
        const storeData = storeRes.ok ? await storeRes.json() : null
        const pagesData = pagesRes.ok ? await pagesRes.json() : null
        if (storeData?.slug) setStoreSlug(storeData.slug)
        const parsed = parseStorePages(pagesData?.pages ?? storeData?.pages, storeData?.name || c.storeFallback)
        setPages(parsed)
        setSelectedKey(parsed[0]?.key || 'about')
      } catch {
        setError(c.loadFail)
        setPages(defaultStorePages(c.storeFallback))
      } finally {
        setLoading(false)
      }
    })()
  }, [user, token, isLoading, router, c.loadFail, c.storeFallback])

  const selected = pages.find((p) => p.key === selectedKey) || pages[0]

  const updateSelected = (patch: Partial<StorePage>) => {
    if (!selected) return
    setPages((list) => list.map((p) => (p.key === selected.key ? { ...p, ...patch } : p)))
  }

  const save = async () => {
    if (!token) return
    setSaving(true)
    setMsg('')
    setError('')
    try {
      const res = await fetch(`${API}/api/stores/me/pages`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ pages }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(mapStudioApiError(data.code, c))
      setPages(data.pages || pages)
      setMsg(c.savedPages)
    } catch (e: any) {
      setError(e.message || c.saveFail)
    } finally {
      setSaving(false)
    }
  }

  const addPage = () => {
    const title = newTitle.trim() || c.newPage
    let key = slugifyPageKey(title)
    if (!key) key = `page-${Date.now().toString(36)}`
    if (pages.some((p) => p.key === key)) key = `${key}-${Date.now().toString(36).slice(-3)}`
    const next: StorePage = { key, title, body: '', published: true }
    setPages((list) => [...list, next])
    setSelectedKey(key)
    setNewTitle('')
  }

  const removePage = () => {
    if (!selected) return
    if (pages.length <= 1) {
      setError(c.keepOnePage)
      return
    }
    if (!confirm(c.confirmDeletePage.replace('{title}', selected.title))) return
    const next = pages.filter((p) => p.key !== selected.key)
    setPages(next)
    setSelectedKey(next[0].key)
  }

  return (
    <main className="min-h-screen" style={{ background: '#F6F7FB', color: '#12131F' }}>
      <Header />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-bold tracking-widest mb-2" style={{ color: '#5B5FF0' }}>{c.pagesKicker}</p>
            <h1 className="text-3xl font-black mb-2">{c.pagesTitle}</h1>
            <p className="text-sm" style={{ color: '#5C5F7A' }}>
              {c.pagesSubtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/my-store" className="px-4 py-2.5 rounded-full text-sm font-bold border">{c.backDash}</Link>
            {storeSlug && selected && (
              <a
                href={storePageUrl(storeSlug, selected.key)}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-full text-sm font-bold text-white"
                style={{ background: '#111827' }}
              >
                {c.previewPage}
              </a>
            )}
            <button
              type="button"
              onClick={save}
              disabled={saving}
              className="px-5 py-2.5 rounded-full text-sm font-bold text-white disabled:opacity-60"
              style={{ background: '#5B5FF0' }}
            >
              {saving ? c.saving : c.save}
            </button>
          </div>
        </div>

        {(msg || error) && (
          <div
            className="mb-6 px-4 py-3 rounded-xl text-sm"
            style={{
              background: error ? '#FEF2F2' : '#ECFDF5',
              color: error ? '#B91C1C' : '#047857',
            }}
          >
            {error || msg}
          </div>
        )}

        {loading ? (
          <div className="bg-white rounded-2xl border p-10 text-center text-sm text-gray-500">{c.loadingPages}</div>
        ) : (
          <div className="grid lg:grid-cols-[220px_1fr] gap-5">
            <aside className="bg-white rounded-2xl border p-4 h-fit">
              <div className="text-xs font-bold text-gray-500 mb-3">{c.pageList}</div>
              <div className="space-y-1 mb-4">
                {pages.map((p) => (
                  <button
                    key={p.key}
                    type="button"
                    onClick={() => setSelectedKey(p.key)}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium"
                    style={{
                      background: selectedKey === p.key ? '#EEF2FF' : 'transparent',
                      color: selectedKey === p.key ? '#3730A3' : '#12131F',
                    }}
                  >
                    {displayStorePageTitle(p.key, p.title, cx)}
                    {!p.published && <span className="text-xs text-gray-400 ml-1">{c.hidden}</span>}
                  </button>
                ))}
              </div>
              <div className="border-t pt-3 space-y-2">
                <input
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder={c.newPagePh}
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                />
                <button type="button" onClick={addPage} className="w-full text-sm font-bold py-2 rounded-lg border">
                  {c.addPage}
                </button>
              </div>
            </aside>

            {selected && (
              <div className="bg-white rounded-2xl border p-5 sm:p-6 space-y-4">
                <div>
                  <label className="text-xs font-bold text-gray-500 block mb-1">{c.pageTitle}</label>
                  <input
                    value={displayStorePageTitle(selected.key, selected.title, cx)}
                    onChange={(e) => updateSelected({ title: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2.5 text-sm font-semibold"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 block mb-1">{c.pageSlug}</label>
                  <code className="text-sm" style={{ color: '#5B5FF0' }}>
                    {storeSlug ? storePageUrl(storeSlug, selected.key) : selected.key}
                  </code>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 block mb-1">{c.pageBody}</label>
                  <textarea
                    value={selected.body}
                    onChange={(e) => updateSelected({ body: e.target.value })}
                    rows={14}
                    className="w-full border rounded-lg px-3 py-2.5 text-sm leading-relaxed"
                  />
                </div>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={selected.published}
                    onChange={(e) => updateSelected({ published: e.target.checked })}
                  />
                  {c.pagePublic}
                </label>
                <button type="button" onClick={removePage} className="text-sm text-red-600 font-semibold">
                  {c.deletePage}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}
