'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useAuth } from '../../../contexts/AuthContext'
import { useI18n } from '../../../contexts/I18nContext'
import { getMerchantOpsCopy } from '../../../lib/merchantOpsCopy'

const API = process.env.NEXT_PUBLIC_API_URL || 'https://shopline-backend.arvix1413.workers.dev'

type OrderRow = {
  id: number
  totalAmount: number
  status: string
  createdAt?: string
  shipmentCode?: string | null
  logisticsError?: string | null
  cvsStoreName?: string | null
  cvsStoreId?: string | null
  customerName?: string | null
  customerPhone?: string | null
  shippingMethod?: string | null
  currency?: string | null
}

function statusLabel(status: string, c: ReturnType<typeof getMerchantOpsCopy>) {
  const s = String(status || '').toLowerCase()
  if (s === 'paid') return c.statusPaid
  if (s === 'cod') return c.statusCod
  if (s === 'pending') return c.statusPending
  if (s === 'failed') return c.statusFailed
  if (s === 'cancelled') return c.statusCancelled
  return status
}

function mapMerchantOpsError(code: string | undefined, fallback: string, c: ReturnType<typeof getMerchantOpsCopy>) {
  switch (code) {
    case 'PAYMENT_REQUIRED':
      return c.errPaymentRequired
    case 'ECPAY_NOT_CONFIGURED':
      return c.errEcpayNotConfigured
    case 'NOT_CVS':
      return c.errNotCvs
    case 'CVS_REQUIRED':
      return c.errCvsRequired
    case 'CVS_AMOUNT_LIMIT':
      return c.errAmountLimit
    case 'STORE_NOT_FOUND':
      return c.errNoStore
    default:
      return fallback
  }
}

function formatMoney(amount: number, currency?: string | null) {
  const cur = String(currency || 'TWD').toUpperCase()
  try {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency: cur, maximumFractionDigits: cur === 'TWD' || cur === 'JPY' ? 0 : 2 }).format(amount)
  } catch {
    return `${cur} ${Math.round(amount).toLocaleString()}`
  }
}

export default function MerchantOrdersPage() {
  const { user, token, isLoading } = useAuth()
  const { locale } = useI18n()
  const c = getMerchantOpsCopy(locale)
  const router = useRouter()
  const [orders, setOrders] = useState<OrderRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [busyId, setBusyId] = useState<number | null>(null)
  const [msg, setMsg] = useState('')

  const load = async (authToken: string) => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${API}/api/stores/me/orders`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(mapMerchantOpsError(data.code, c.loadFail, c))
      setOrders(Array.isArray(data.orders) ? data.orders : [])
    } catch (e: any) {
      setError(e.message || c.loadFail)
      setOrders([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isLoading) return
    if (!user || !token) {
      router.replace(`/login?next=${encodeURIComponent('/my-store/orders')}`)
      return
    }
    load(token)
  }, [user, token, isLoading, router])

  const createShipment = async (id: number) => {
    if (!token) return
    setBusyId(id)
    setMsg('')
    try {
      const res = await fetch(`${API}/api/stores/me/orders/${id}/create-shipment`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(mapMerchantOpsError(data.code, c.createFail, c))
      setMsg(c.shipmentReady.replace('{id}', String(id)).replace('{code}', String(data.shipmentCode || '')))
      await load(token)
    } catch (e: any) {
      setMsg(e.message || c.createFail)
    } finally {
      setBusyId(null)
    }
  }

  return (
    <main className="min-h-screen" style={{ background: '#F6F7FB', color: '#12131F' }}>
      <Header />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-bold tracking-widest mb-2" style={{ color: '#5B5FF0' }}>{c.eyebrow}</p>
            <h1 className="text-3xl font-black mb-2">{c.title}</h1>
            <p className="text-sm" style={{ color: '#5C5F7A' }}>
              {c.subtitle}{' '}
              <Link href="/my-store/logistics" className="underline font-bold">
                {c.guideLink}
              </Link>
            </p>
          </div>
          <Link href="/my-store" className="px-4 py-2.5 rounded-full text-sm font-bold border">
            {c.backStore}
          </Link>
        </div>

        {(msg || error) && (
          <div
            className="mb-6 px-4 py-3 rounded-xl text-sm"
            style={{
              background: error && !msg ? '#FEF2F2' : '#ECFDF5',
              color: error && !msg ? '#B91C1C' : '#047857',
            }}
          >
            {msg || error}
          </div>
        )}

        {loading ? (
          <div className="bg-white rounded-2xl border p-10 text-center text-sm text-gray-500">{c.loading}</div>
        ) : orders.length === 0 ? (
          <div className="bg-white rounded-2xl border p-10 text-center text-sm text-gray-500">{c.empty}</div>
        ) : (
          <div className="space-y-4">
            {orders.map((o) => (
              <div key={o.id} className="bg-white rounded-2xl border p-5 sm:p-6">
                <div className="flex flex-wrap gap-3 justify-between mb-3">
                  <div>
                    <div className="font-black text-lg">{c.orderLabel} #{o.id}</div>
                    <div className="text-xs text-gray-500">{o.createdAt || ''}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{formatMoney(Number(o.totalAmount || 0), o.currency)}</div>
                    <div className="text-xs text-gray-500">{statusLabel(o.status, c)}</div>
                  </div>
                </div>
                <div className="text-sm space-y-1" style={{ color: '#374151' }}>
                  <div>{c.recipient}：{o.customerName || '—'}　{o.customerPhone || ''}</div>
                  <div>
                    {c.shipping}：
                    {o.shippingMethod === 'seven_eleven'
                      ? `${c.seven} ${o.cvsStoreName || ''} ${o.cvsStoreId ? `(${o.cvsStoreId})` : ''}`
                      : c.home}
                  </div>
                </div>
                {o.shippingMethod === 'seven_eleven' && (
                  <div className="mt-4 p-4 rounded-xl" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                    {o.shipmentCode ? (
                      <>
                        <div className="text-xs font-bold text-gray-500 mb-1">{c.shipmentCode}</div>
                        <div className="text-2xl font-black tracking-wider" style={{ color: '#5B5FF0' }}>
                          {o.shipmentCode}
                        </div>
                        <p className="text-xs mt-2 text-gray-500">{c.ibonHow}</p>
                      </>
                    ) : (
                      <>
                        <p className="text-sm mb-3" style={{ color: '#B45309' }}>
                          {o.logisticsError ? c.logisticsError : c.noShipmentYet}
                        </p>
                        <button
                          type="button"
                          disabled={busyId === o.id}
                          onClick={() => createShipment(o.id)}
                          className="px-4 py-2 rounded-full text-sm font-bold text-white disabled:opacity-60"
                          style={{ background: '#111827' }}
                        >
                          {busyId === o.id ? c.creating : c.createShipment}
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}
