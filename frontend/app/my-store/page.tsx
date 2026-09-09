'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useAuth } from '../../contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useI18n } from '../../contexts/I18nContext'
import { getMerchantDashCopy } from '../../lib/merchantDashCopy'

const API = process.env.NEXT_PUBLIC_API_URL || 'https://shopline-backend.arvix1413.workers.dev'

type Store = {
  id: number
  slug: string
  name: string
  tagline?: string
  urlPath: string
  productCount?: number
  canOperate?: boolean
  trial?: { expired?: boolean; daysLeft?: number | null; planStatus?: string }
}

type Product = {
  id: number
  name: string
  description?: string
  price: number
  imageUrl?: string
  category?: string
  stock?: number
  status?: string
}

const emptyForm = {
  name: '',
  description: '',
  price: '',
  imageUrl: '',
  category: '',
  stock: '10',
}

export default function MyStorePage() {
  const { user, token, isLoading } = useAuth()
  const { locale } = useI18n()
  const c = getMerchantDashCopy(locale)
  const router = useRouter()
  const [store, setStore] = useState<Store | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [msg, setMsg] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [loading, setLoading] = useState(true)

  const load = async (authToken: string) => {
    setLoading(true)
    setError('')
    try {
      const storeRes = await fetch(`${API}/api/stores/me`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      if (!storeRes.ok) {
        const d = await storeRes.json().catch(() => ({}))
        throw new Error(c.noStore)
      }
      const storeData = await storeRes.json()
      setStore(storeData)
      const prodRes = await fetch(`${API}/api/stores/me/products`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      const prodData = prodRes.ok ? await prodRes.json() : []
      setProducts(Array.isArray(prodData) ? prodData : [])
    } catch (e: any) {
      setError(e.message || c.loadFail)
      setStore(null)
      setProducts([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isLoading) return
    if (!user || !token) {
      router.replace(`/login?next=${encodeURIComponent('/my-store')}`)
      return
    }
    load(token)
  }, [user, token, isLoading, router])

  const startEdit = (p: Product) => {
    setEditingId(p.id)
    setForm({
      name: p.name || '',
      description: p.description || '',
      price: String(p.price ?? ''),
      imageUrl: p.imageUrl || '',
      category: p.category || c.general,
      stock: String(p.stock ?? 0),
    })
    setMsg('')
    setError('')
  }

  const resetForm = () => {
    setEditingId(null)
    setForm(emptyForm)
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!token) return
    setBusy(true)
    setMsg('')
    setError('')
    try {
      const payload = {
        name: form.name.trim(),
        description: form.description.trim(),
        price: Number(form.price),
        imageUrl: form.imageUrl.trim(),
        category: form.category.trim() || c.general,
        stock: Number(form.stock) || 0,
      }
      const url = editingId
        ? `${API}/api/stores/me/products/${editingId}`
        : `${API}/api/stores/me/products`
      const res = await fetch(url, {
        method: editingId ? 'PUT' : 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(c.saveFail)
      setMsg(editingId ? c.saved : c.created)
      resetForm()
      await load(token)
    } catch (err: any) {
      setError(err.message || c.saveFail)
    } finally {
      setBusy(false)
    }
  }

  const remove = async (id: number, name: string) => {
    if (!token) return
    if (!confirm(c.confirmRemove.replace('{name}', name))) return
    setBusy(true)
    try {
      const res = await fetch(`${API}/api/stores/me/products/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      })
      if (!res.ok) {
        const d = await res.json().catch(() => ({}))
        throw new Error(c.deleteFail)
      }
      setMsg(c.deleted)
      await load(token)
    } catch (err: any) {
      setError(err.message || c.deleteFail)
    } finally {
      setBusy(false)
    }
  }

  const shopUrl = store ? `/s/shop?slug=${encodeURIComponent(store.slug)}` : ''

  return (
    <main className="min-h-screen" style={{ background: '#F6F7FB', color: '#12131F' }}>
      <Header />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-bold tracking-widest mb-2" style={{ color: '#5B5FF0' }}>MY STORE</p>
            <h1 className="text-3xl font-black mb-2">{c.title}</h1>
            <p className="text-sm" style={{ color: '#5C5F7A' }}>
              {c.subtitle}
            </p>
          </div>
          {store && (
            <div className="flex flex-wrap gap-2">
              <Link
                href="/my-store/design"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-bold text-white"
                style={{ background: '#111827' }}
              >
                {c.design}
              </Link>
              <Link
                href="/my-store/pages"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-bold border"
              >
                {c.pages}
              </Link>
              <Link
                href="/my-store/orders"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-bold border"
              >
                {c.orders}
              </Link>
              <Link
                href="/my-store/logistics"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-bold border"
              >
                {c.logistics}
              </Link>
              <Link
                href={shopUrl}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-bold text-white"
                style={{ background: '#5B5FF0' }}
              >
                {c.preview}
              </Link>
              <Link
                href="/billing"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-bold border"
              >
                {c.billing}
              </Link>
            </div>
          )}
        </div>

        {store?.trial?.expired && (
          <div className="mb-6 px-4 py-4 rounded-2xl border text-sm" style={{ background: '#FEF2F2', borderColor: '#FECACA', color: '#B91C1C' }}>
            {c.trialExpired}{' '}
            <Link href="/billing" className="font-bold underline mx-1">{c.activatePlan}</Link>
            {c.thenOperate}
          </div>
        )}
        {store?.trial && !store.trial.expired && store.trial.planStatus !== 'paid' && (
          <div className="mb-6 px-4 py-4 rounded-2xl border text-sm" style={{ background: '#EEF2FF', borderColor: '#C7D2FE', color: '#3730A3' }}>
            {c.trialLeft.replace('{days}', String(store.trial.daysLeft ?? '—'))}
          </div>
        )}

        {loading ? (
          <div className="bg-white rounded-2xl border p-10 text-center text-sm text-gray-500">{c.loading}</div>
        ) : error && !store ? (
          <div className="bg-white rounded-2xl border p-10 text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <Link href="/register" className="text-sm font-semibold" style={{ color: '#5B5FF0' }}>{c.goRegister}</Link>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-2xl border p-5 sm:p-6 mb-6">
              <div className="flex flex-wrap gap-4 justify-between">
                <div>
                  <div className="text-xs text-gray-500 mb-1">{c.storeName}</div>
                  <div className="font-black text-lg">{store?.name}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">{c.publicUrl}</div>
                  <code className="text-sm" style={{ color: '#5B5FF0' }}>arvixai.com{shopUrl}</code>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">{c.productCount}</div>
                  <div className="font-bold">{products.length}{c.countUnit ? ` ${c.countUnit}` : ''}</div>
                </div>
              </div>
            </div>

            {(msg || error) && (
              <div className={`mb-4 px-4 py-3 rounded-xl text-sm ${error ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-green-50 text-green-700 border border-green-100'}`}>
                {error || msg}
              </div>
            )}

            <div className="grid lg:grid-cols-5 gap-6">
              <form onSubmit={submit} className="lg:col-span-2 bg-white rounded-2xl border p-5 sm:p-6 space-y-3 h-fit">
                <h2 className="font-black text-lg mb-1">{editingId ? c.editProduct : c.newProduct}</h2>
                {store?.canOperate === false && (
                  <p className="text-sm text-red-600 mb-2">{c.cannotAdd}</p>
                )}
                <fieldset disabled={busy || store?.canOperate === false} className="space-y-3 disabled:opacity-60">
                <label className="block text-sm">
                  <span className="font-medium mb-1 block">{c.name}</span>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border text-sm" />
                </label>
                <label className="block text-sm">
                  <span className="font-medium mb-1 block">{c.price}</span>
                  <input required type="number" min="1" step="1" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border text-sm" />
                </label>
                <label className="block text-sm">
                  <span className="font-medium mb-1 block">{c.category}</span>
                  <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border text-sm" />
                </label>
                <label className="block text-sm">
                  <span className="font-medium mb-1 block">{c.stock}</span>
                  <input type="number" min="0" value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border text-sm" />
                </label>
                <label className="block text-sm">
                  <span className="font-medium mb-1 block">{c.imageUrl}</span>
                  <input value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-3 py-2.5 rounded-xl border text-sm" />
                </label>
                <label className="block text-sm">
                  <span className="font-medium mb-1 block">{c.desc}</span>
                  <textarea rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border text-sm" />
                </label>
                <div className="flex gap-2 pt-1">
                  <button type="submit" disabled={busy || store?.canOperate === false}
                    className="flex-1 py-2.5 rounded-full text-sm font-bold text-white disabled:opacity-60"
                    style={{ background: '#5B5FF0' }}>
                    {busy ? c.saving : editingId ? c.update : c.publish}
                  </button>
                  {editingId && (
                    <button type="button" onClick={resetForm} className="px-4 py-2.5 rounded-full text-sm font-semibold border">
                      {c.cancel}
                    </button>
                  )}
                </div>
                </fieldset>
              </form>

              <div className="lg:col-span-3 bg-white rounded-2xl border overflow-hidden">
                <div className="px-5 py-4 border-b font-black">{c.listed}</div>
                {products.length === 0 ? (
                  <div className="p-10 text-center text-sm text-gray-400">{c.empty}</div>
                ) : (
                  <ul className="divide-y">
                    {products.map((p) => (
                      <li key={p.id} className="p-4 flex gap-3 items-start">
                        <div className="w-14 h-14 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                          {p.imageUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={p.imageUrl} alt="" className="w-full h-full object-cover" />
                          ) : null}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold truncate">{p.name}</div>
                          <div className="text-sm" style={{ color: '#5B5FF0' }}>NT${Math.round(p.price).toLocaleString()}</div>
                          <div className="text-xs text-gray-400 mt-0.5">{p.category || c.general} · {c.stockLabel} {p.stock ?? 0}</div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <button type="button" onClick={() => startEdit(p)} className="text-xs font-semibold px-3 py-1.5 rounded-lg border">{c.edit}</button>
                          <button type="button" onClick={() => remove(p.id, p.name)} className="text-xs font-semibold px-3 py-1.5 rounded-lg text-red-600 border border-red-100">{c.del}</button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </main>
  )
}
