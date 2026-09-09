'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useAuth } from '../../../contexts/AuthContext'

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
}

export default function MerchantOrdersPage() {
  const { user, token, isLoading } = useAuth()
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
      if (!res.ok) throw new Error(data.error || '載入失敗')
      setOrders(Array.isArray(data.orders) ? data.orders : [])
    } catch (e: any) {
      setError(e.message || '載入失敗')
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
      if (!res.ok) throw new Error(data.error || '產生失敗')
      setMsg(`訂單 #${id} 寄件代碼：${data.shipmentCode}`)
      await load(token)
    } catch (e: any) {
      setMsg(e.message || '產生失敗')
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
            <p className="text-xs font-bold tracking-widest mb-2" style={{ color: '#5B5FF0' }}>ORDERS</p>
            <h1 className="text-3xl font-black mb-2">訂單與寄件</h1>
            <p className="text-sm" style={{ color: '#5C5F7A' }}>
              7-11 取貨訂單會顯示 ibon 寄件代碼。請到超商 ibon → 交貨便 → 輸入代碼列印寄件單。
              尚未開通？請先閱讀{' '}
              <Link href="/my-store/logistics" className="underline font-bold">
                開通說明
              </Link>
              ，完成綠界申請後再來信協助串接。
            </p>
          </div>
          <Link href="/my-store" className="px-4 py-2.5 rounded-full text-sm font-bold border">
            回我的商店
          </Link>
        </div>

        {(msg || error) && (
          <div
            className="mb-6 px-4 py-3 rounded-xl text-sm"
            style={{
              background: error && !msg.includes('寄件') ? '#FEF2F2' : '#ECFDF5',
              color: error && !msg.includes('寄件') ? '#B91C1C' : '#047857',
            }}
          >
            {msg || error}
          </div>
        )}

        {loading ? (
          <div className="bg-white rounded-2xl border p-10 text-center text-sm text-gray-500">載入中...</div>
        ) : orders.length === 0 ? (
          <div className="bg-white rounded-2xl border p-10 text-center text-sm text-gray-500">尚無訂單</div>
        ) : (
          <div className="space-y-4">
            {orders.map((o) => (
              <div key={o.id} className="bg-white rounded-2xl border p-5 sm:p-6">
                <div className="flex flex-wrap gap-3 justify-between mb-3">
                  <div>
                    <div className="font-black text-lg">訂單 #{o.id}</div>
                    <div className="text-xs text-gray-500">{o.createdAt || ''}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">NT$ {Math.round(Number(o.totalAmount || 0)).toLocaleString('zh-TW')}</div>
                    <div className="text-xs text-gray-500">{o.status}</div>
                  </div>
                </div>
                <div className="text-sm space-y-1" style={{ color: '#374151' }}>
                  <div>收件：{o.customerName || '—'}　{o.customerPhone || ''}</div>
                  <div>
                    配送：
                    {o.shippingMethod === 'seven_eleven'
                      ? `7-11 ${o.cvsStoreName || ''} ${o.cvsStoreId ? `(${o.cvsStoreId})` : ''}`
                      : '宅配／其他'}
                  </div>
                </div>
                {o.shippingMethod === 'seven_eleven' && (
                  <div className="mt-4 p-4 rounded-xl" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                    {o.shipmentCode ? (
                      <>
                        <div className="text-xs font-bold text-gray-500 mb-1">ibon 寄件代碼</div>
                        <div className="text-2xl font-black tracking-wider" style={{ color: '#5B5FF0' }}>
                          {o.shipmentCode}
                        </div>
                        <p className="text-xs mt-2 text-gray-500">
                          至 7-11 ibon → 購物／寄貨 → 交貨便 → 寄件 → 輸入此代碼 → 列印貼單寄出
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-sm mb-3" style={{ color: '#B45309' }}>
                          {o.logisticsError || '尚未產生寄件代碼'}
                        </p>
                        <button
                          type="button"
                          disabled={busyId === o.id}
                          onClick={() => createShipment(o.id)}
                          className="px-4 py-2 rounded-full text-sm font-bold text-white disabled:opacity-60"
                          style={{ background: '#111827' }}
                        >
                          {busyId === o.id ? '產生中...' : '產生 7-11 寄件代碼'}
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
