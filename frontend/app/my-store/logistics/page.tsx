'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useAuth } from '../../../contexts/AuthContext'

const API = process.env.NEXT_PUBLIC_API_URL || 'https://shopline-backend.arvix1413.workers.dev'
const SUPPORT_MAIL = 'arvix1413@gmail.com'
const GUIDE_HREF = '/docs/7-11-logistics-guide.html'

type LogisticsSettings = {
  merchantId?: string | null
  hashKeyMasked?: string | null
  hashIvMasked?: string | null
  hasHashKey?: boolean
  hasHashIv?: boolean
  mode?: string
  subtype?: string | null
  configured?: boolean
  createReady?: boolean
  source?: string
}

export default function MerchantLogisticsPage() {
  const { user, token, isLoading } = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')
  const [error, setError] = useState('')
  const [showKeys, setShowKeys] = useState(false)
  const [status, setStatus] = useState<LogisticsSettings | null>(null)
  const [form, setForm] = useState({
    merchantId: '',
    hashKey: '',
    hashIv: '',
    mode: 'stage',
    subtype: '',
    senderName: '',
    senderPhone: '',
  })

  const load = async (authToken: string) => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${API}/api/stores/me/logistics`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || '載入失敗')
      setStatus(data)
      setForm((f) => ({
        ...f,
        merchantId: data.merchantId || '',
        mode: data.mode === 'production' ? 'production' : 'stage',
        subtype: data.subtype || '',
        senderName: data.senderName || '',
        senderPhone: data.senderPhone || '',
        hashKey: '',
        hashIv: '',
      }))
      if (data.createReady || data.configured) setShowKeys(true)
    } catch (e: any) {
      setError(e.message || '載入失敗')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isLoading) return
    if (!user || !token) {
      router.replace(`/login?next=${encodeURIComponent('/my-store/logistics')}`)
      return
    }
    load(token)
  }, [user, token, isLoading, router])

  const save = async () => {
    if (!token) return
    setSaving(true)
    setMsg('')
    setError('')
    try {
      const res = await fetch(`${API}/api/stores/me/logistics`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          merchantId: form.merchantId,
          hashKey: form.hashKey,
          hashIv: form.hashIv,
          mode: form.mode,
          subtype: form.subtype,
          senderName: form.senderName,
          senderPhone: form.senderPhone,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || '儲存失敗')
      setMsg('已儲存。建議再通知客服工程師確認串接狀態。')
      await load(token)
    } catch (e: any) {
      setError(e.message || '儲存失敗')
    } finally {
      setSaving(false)
    }
  }

  const supportMailto = () => {
    const subject = encodeURIComponent('請協助串接 7-11／綠界物流')
    const body = encodeURIComponent(
      [
        '您好，我已完成綠界物流申請，請協助將 7-11 取貨／貨到付款串接至我的 ARVIX 商店。',
        '',
        '商店名稱：',
        `登入 Email：${user?.email || ''}`,
        '商店 slug：',
        '綠界 MerchantID：',
        '環境：測試 / 正式',
        '需求：超商取貨 / 貨到付款',
        '',
        '（HashKey／HashIV 請勿直接貼於本郵件）',
      ].join('\n')
    )
    return `mailto:${SUPPORT_MAIL}?subject=${subject}&body=${body}`
  }

  return (
    <main className="min-h-screen" style={{ background: '#F6F7FB', color: '#12131F' }}>
      <Header />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="mb-2">
          <Link href="/" className="font-brand text-2xl font-extrabold brand-text tracking-tight">
            ARVIX
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-bold tracking-widest mb-2" style={{ color: '#5B5FF0' }}>
              MERCHANT GUIDE
            </p>
            <h1 className="text-3xl font-black mb-2">7-11 超商取貨開通</h1>
            <p className="text-sm leading-relaxed" style={{ color: '#5C5F7A' }}>
              請先完成綠界物流申請，再由我們協助串接至您的商店。詳細步驟請參閱操作說明。
            </p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            <a
              href={GUIDE_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full text-sm font-bold text-white"
              style={{ background: '#5B5FF0' }}
            >
              完整操作說明
            </a>
            <Link href="/my-store" className="px-4 py-2.5 rounded-full text-sm font-bold border">
              回我的商店
            </Link>
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

        <section className="bg-white rounded-2xl border p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-black mb-3">綠界申請入口</h2>
          <p className="text-sm mb-4" style={{ color: '#5C5F7A' }}>
            請先至綠界完成賣家註冊／登入，並申請物流（須一併申請金流）。審核通過後再到「系統開發管理 → 系統介接設定」取得商店代號與金鑰。
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://vendor.ecpay.com.tw/User/LogOn_Step1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-5 py-2.5 rounded-full text-sm font-bold text-white"
              style={{ background: '#00A0E9' }}
            >
              綠界賣家註冊／登入
            </a>
            <a
              href="https://support.ecpay.com.tw/26036/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-5 py-2.5 rounded-full text-sm font-bold border"
            >
              綠界：如何申請物流
            </a>
            <a
              href="https://www.ecpay.com.tw/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-5 py-2.5 rounded-full text-sm font-bold border"
            >
              綠界官網
            </a>
          </div>
        </section>

        <section className="bg-white rounded-2xl border p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-black mb-4">開通流程</h2>
          <ol className="space-y-4 text-sm" style={{ color: '#374151' }}>
            <li className="flex gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white" style={{ background: '#111827' }}>1</span>
              <div>
                <div className="font-bold mb-1">至綠界申請 7-11 物流</div>
                <p className="text-xs leading-relaxed mb-2" style={{ color: '#6B7280' }}>
                  新戶請同時勾選金流與物流；舊戶請至「驗證／服務」加開。建議選 C2C（UNIMARTC2C）。通過後至「系統介接設定」複製 MerchantID／HashKey／HashIV。
                </p>
                <a
                  href="https://vendor.ecpay.com.tw/User/LogOn_Step1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold underline"
                  style={{ color: '#00A0E9' }}
                >
                  開啟綠界賣家註冊／登入 →
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white" style={{ background: '#111827' }}>2</span>
              <div>
                <div className="font-bold mb-1">提供資料，請 ARVIX 協助串接</div>
                <p className="text-xs leading-relaxed mb-3" style={{ color: '#6B7280' }}>
                  請來信提供商店名稱、Email、MerchantID、環境（測試／正式）及需求項目。請勿於一般郵件直接傳送完整 Hash 金鑰。
                </p>
                <div className="flex flex-wrap gap-2">
                  <a href={supportMailto()} className="inline-flex px-5 py-2.5 rounded-full text-sm font-bold text-white" style={{ background: '#5B5FF0' }}>
                    來信申請串接
                  </a>
                  <a href={GUIDE_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex px-5 py-2.5 rounded-full text-sm font-bold border">
                    查看完整操作說明
                  </a>
                </div>
                <p className="text-[11px] mt-2" style={{ color: '#9CA3AF' }}>{SUPPORT_MAIL}</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white" style={{ background: '#111827' }}>3</span>
              <div>
                <div className="font-bold mb-1">串接完成後即可使用</div>
                <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>
                  貨到付款於下單後產生寄件代碼；刷卡取貨於付款成功後產生。C2C 可至 ibon 交貨便列印；B2C 請依綠界大宗流程出貨。
                </p>
              </div>
            </li>
          </ol>
          <div className="mt-6 px-4 py-3 rounded-xl text-xs leading-relaxed" style={{ background: '#FFFBEB', color: '#92400E', border: '1px solid #FDE68A' }}>
            尚未完成串接前，無法使用官方電子地圖，亦無法產生寄件代碼。宅配與信用卡付款不受影響。
          </div>
        </section>

        <section className="bg-white rounded-2xl border p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-black mb-2">文件與入口</h2>
          <ul className="text-sm space-y-2" style={{ color: '#374151' }}>
            <li>
              <a href={GUIDE_HREF} target="_blank" rel="noopener noreferrer" className="font-bold underline" style={{ color: '#5B5FF0' }}>
                完整操作說明（可列印／另存 PDF）
              </a>
            </li>
            <li>
              <Link href="/my-store/orders" className="font-bold underline" style={{ color: '#5B5FF0' }}>
                訂單與寄件
              </Link>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl border p-6 sm:p-8">
          <button type="button" className="w-full flex items-center justify-between text-left" onClick={() => setShowKeys((v) => !v)}>
            <div>
              <h2 className="text-lg font-black">進階設定：金鑰欄位</h2>
              <p className="text-xs mt-1" style={{ color: '#6B7280' }}>建議先來信由客服協助。若客服請您自行填寫金鑰，再展開此區。</p>
            </div>
            <span className="text-sm font-bold shrink-0 ml-3" style={{ color: '#5B5FF0' }}>{showKeys ? '收合' : '展開'}</span>
          </button>
          {showKeys && (
            <div className="mt-5 space-y-4">
              {loading ? (
                <p className="text-sm text-gray-500">載入中...</p>
              ) : (
                <>
                  <div className="text-sm px-4 py-3 rounded-xl" style={{ background: '#F8FAFC', color: '#475569' }}>
                    狀態：{status?.createReady ? '可選店＋寄件碼' : status?.configured ? '已有 MerchantID' : '尚未設定'}
                  </div>
                  <label className="block">
                    <span className="text-xs font-bold text-gray-500">MerchantID</span>
                    <input className="mt-1 w-full px-3 py-2.5 text-sm border rounded-xl outline-none" value={form.merchantId} onChange={(e) => setForm((f) => ({ ...f, merchantId: e.target.value }))} />
                  </label>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-xs font-bold text-gray-500">HashKey {status?.hasHashKey ? `（已設 ${status.hashKeyMasked}）` : ''}</span>
                      <input className="mt-1 w-full px-3 py-2.5 text-sm border rounded-xl outline-none" type="password" autoComplete="off" value={form.hashKey} onChange={(e) => setForm((f) => ({ ...f, hashKey: e.target.value }))} placeholder={status?.hasHashKey ? '留空＝不變更' : ''} />
                    </label>
                    <label className="block">
                      <span className="text-xs font-bold text-gray-500">HashIV {status?.hasHashIv ? `（已設 ${status.hashIvMasked}）` : ''}</span>
                      <input className="mt-1 w-full px-3 py-2.5 text-sm border rounded-xl outline-none" type="password" autoComplete="off" value={form.hashIv} onChange={(e) => setForm((f) => ({ ...f, hashIv: e.target.value }))} placeholder={status?.hasHashIv ? '留空＝不變更' : ''} />
                    </label>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-xs font-bold text-gray-500">環境</span>
                      <select className="mt-1 w-full px-3 py-2.5 text-sm border rounded-xl outline-none bg-white" value={form.mode} onChange={(e) => setForm((f) => ({ ...f, mode: e.target.value }))}>
                        <option value="stage">測試 stage</option>
                        <option value="production">正式 production</option>
                      </select>
                    </label>
                    <label className="block">
                      <span className="text-xs font-bold text-gray-500">LogisticsSubType</span>
                      <select className="mt-1 w-full px-3 py-2.5 text-sm border rounded-xl outline-none bg-white" value={form.subtype} onChange={(e) => setForm((f) => ({ ...f, subtype: e.target.value }))}>
                        <option value="">自動</option>
                        <option value="UNIMARTC2C">UNIMARTC2C</option>
                        <option value="UNIMART">UNIMART</option>
                      </select>
                    </label>
                  </div>
                  <button type="button" disabled={saving} onClick={save} className="px-5 py-2.5 rounded-full text-sm font-bold text-white disabled:opacity-60" style={{ background: '#111827' }}>
                    {saving ? '儲存中...' : '儲存金鑰'}
                  </button>
                </>
              )}
            </div>
          )}
        </section>
      </div>
      <Footer />
    </main>
  )
}
