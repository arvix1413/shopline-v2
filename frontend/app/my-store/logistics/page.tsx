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
  senderName?: string | null
  senderPhone?: string | null
  configured?: boolean
  createReady?: boolean
  source?: string
}

export default function MerchantLogisticsPage() {
  const { user, token, isLoading } = useAuth()
  const { locale } = useI18n()
  const c = getMerchantOpsCopy(locale)
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
      const logRes = await fetch(`${API}/api/stores/me/logistics`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      const data = await logRes.json().catch(() => ({}))
      if (!logRes.ok) throw new Error(c.loadFail)
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
      setError(e.message || c.loadFail)
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
      const body: Record<string, string> = {
        merchantId: form.merchantId,
        hashKey: form.hashKey,
        hashIv: form.hashIv,
        mode: form.mode,
        subtype: form.subtype,
      }
      // Only send sender fields when filled — empty must not wipe existing values
      if (form.senderName.trim()) body.senderName = form.senderName.trim()
      if (form.senderPhone.trim()) body.senderPhone = form.senderPhone.trim()
      const res = await fetch(`${API}/api/stores/me/logistics`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(c.saveFail)
      setMsg(c.saved)
      await load(token)
    } catch (e: any) {
      setError(e.message || c.saveFail)
    } finally {
      setSaving(false)
    }
  }

  const supportMailto = () => {
    const subject = encodeURIComponent('Please help integrate 7-11 / ECPay logistics')
    const body = encodeURIComponent(
      [
        'Hello, I have completed ECPay logistics application. Please help integrate 7-11 pickup / COD for my ARVIX store.',
        '',
        'Store name:',
        `Login email: ${user?.email || ''}`,
        'Store slug:',
        'ECPay MerchantID:',
        'Environment: stage / production',
        'Needs: convenience-store pickup / COD',
        '',
        '(Do not paste HashKey / HashIV in this email)',
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
              {c.logEyebrow}
            </p>
            <h1 className="text-3xl font-black mb-2">{c.logTitle}</h1>
            <p className="text-sm leading-relaxed" style={{ color: '#5C5F7A' }}>
              {c.logSubtitle}
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
              {c.guideCta}
            </a>
            <Link href="/my-store" className="px-4 py-2.5 rounded-full text-sm font-bold border">
              {c.backStore}
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
          <h2 className="text-lg font-black mb-3">{c.ecpayTitle}</h2>
          <p className="text-sm mb-4" style={{ color: '#5C5F7A' }}>
            {c.ecpayDesc}
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://vendor.ecpay.com.tw/User/LogOn_Step1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-5 py-2.5 rounded-full text-sm font-bold text-white"
              style={{ background: '#00A0E9' }}
            >
              {c.ecpayLogin}
            </a>
            <a
              href="https://support.ecpay.com.tw/26036/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-5 py-2.5 rounded-full text-sm font-bold border"
            >
              {c.ecpayHow}
            </a>
            <a
              href="https://www.ecpay.com.tw/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-5 py-2.5 rounded-full text-sm font-bold border"
            >
              {c.ecpayHome}
            </a>
          </div>
        </section>

        <section className="bg-white rounded-2xl border p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-black mb-4">{c.flowTitle}</h2>
          <ol className="space-y-4 text-sm" style={{ color: '#374151' }}>
            <li className="flex gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white" style={{ background: '#111827' }}>1</span>
              <div>
                <div className="font-bold mb-1">{c.step1Title}</div>
                <p className="text-xs leading-relaxed mb-2" style={{ color: '#6B7280' }}>
                  {c.step1Desc}
                </p>
                <a
                  href="https://vendor.ecpay.com.tw/User/LogOn_Step1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold underline"
                  style={{ color: '#00A0E9' }}
                >
                  {c.step1Link}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white" style={{ background: '#111827' }}>2</span>
              <div>
                <div className="font-bold mb-1">{c.step2Title}</div>
                <p className="text-xs leading-relaxed mb-3" style={{ color: '#6B7280' }}>
                  {c.step2Desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  <a href={supportMailto()} className="inline-flex px-5 py-2.5 rounded-full text-sm font-bold text-white" style={{ background: '#5B5FF0' }}>
                    {c.step2Mail}
                  </a>
                  <a href={GUIDE_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex px-5 py-2.5 rounded-full text-sm font-bold border">
                    {c.step2Guide}
                  </a>
                </div>
                <p className="text-[11px] mt-2" style={{ color: '#9CA3AF' }}>{SUPPORT_MAIL}</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white" style={{ background: '#111827' }}>3</span>
              <div>
                <div className="font-bold mb-1">{c.step3Title}</div>
                <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>
                  {c.step3Desc}
                </p>
              </div>
            </li>
          </ol>
          <div className="mt-6 px-4 py-3 rounded-xl text-xs leading-relaxed" style={{ background: '#FFFBEB', color: '#92400E', border: '1px solid #FDE68A' }}>
            {c.warnPending}
          </div>
        </section>

        <section className="bg-white rounded-2xl border p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-black mb-2">{c.docsTitle}</h2>
          <ul className="text-sm space-y-2" style={{ color: '#374151' }}>
            <li>
              <a href={GUIDE_HREF} target="_blank" rel="noopener noreferrer" className="font-bold underline" style={{ color: '#5B5FF0' }}>
                {c.docsGuide}
              </a>
            </li>
            <li>
              <Link href="/my-store/orders" className="font-bold underline" style={{ color: '#5B5FF0' }}>
                {c.docsOrders}
              </Link>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl border p-6 sm:p-8">
          <button type="button" className="w-full flex items-center justify-between text-left" onClick={() => setShowKeys((v) => !v)}>
            <div>
              <h2 className="text-lg font-black">{c.keysTitle}</h2>
              <p className="text-xs mt-1" style={{ color: '#6B7280' }}>{c.keysDesc}</p>
            </div>
            <span className="text-sm font-bold shrink-0 ml-3" style={{ color: '#5B5FF0' }}>{showKeys ? c.collapse : c.expand}</span>
          </button>
          {showKeys && (
            <div className="mt-5 space-y-4">
              {loading ? (
                <p className="text-sm text-gray-500">{c.loading}</p>
              ) : (
                <>
                  <div className="text-sm px-4 py-3 rounded-xl" style={{ background: '#F8FAFC', color: '#475569' }}>
                    {c.statusLabel}: {status?.createReady ? c.statusReady : status?.configured ? c.statusConfigured : c.statusNone}
                  </div>
                  <label className="block">
                    <span className="text-xs font-bold text-gray-500">MerchantID</span>
                    <input className="mt-1 w-full px-3 py-2.5 text-sm border rounded-xl outline-none" value={form.merchantId} onChange={(e) => setForm((f) => ({ ...f, merchantId: e.target.value }))} />
                  </label>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-xs font-bold text-gray-500">HashKey {status?.hasHashKey ? `(${status.hashKeyMasked})` : ''}</span>
                      <input className="mt-1 w-full px-3 py-2.5 text-sm border rounded-xl outline-none" type="password" autoComplete="off" value={form.hashKey} onChange={(e) => setForm((f) => ({ ...f, hashKey: e.target.value }))} placeholder={status?.hasHashKey ? c.keepEmpty : ''} />
                    </label>
                    <label className="block">
                      <span className="text-xs font-bold text-gray-500">HashIV {status?.hasHashIv ? `(${status.hashIvMasked})` : ''}</span>
                      <input className="mt-1 w-full px-3 py-2.5 text-sm border rounded-xl outline-none" type="password" autoComplete="off" value={form.hashIv} onChange={(e) => setForm((f) => ({ ...f, hashIv: e.target.value }))} placeholder={status?.hasHashIv ? c.keepEmpty : ''} />
                    </label>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-xs font-bold text-gray-500">{c.env}</span>
                      <select className="mt-1 w-full px-3 py-2.5 text-sm border rounded-xl outline-none bg-white" value={form.mode} onChange={(e) => setForm((f) => ({ ...f, mode: e.target.value }))}>
                        <option value="stage">{c.envStage}</option>
                        <option value="production">{c.envProd}</option>
                      </select>
                    </label>
                    <label className="block">
                      <span className="text-xs font-bold text-gray-500">{c.subtype}</span>
                      <select className="mt-1 w-full px-3 py-2.5 text-sm border rounded-xl outline-none bg-white" value={form.subtype} onChange={(e) => setForm((f) => ({ ...f, subtype: e.target.value }))}>
                        <option value="">{c.subtypeAuto}</option>
                        <option value="UNIMARTC2C">UNIMARTC2C</option>
                        <option value="UNIMART">UNIMART</option>
                      </select>
                    </label>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-xs font-bold text-gray-500">{c.senderName}</span>
                      <input
                        className="mt-1 w-full px-3 py-2.5 text-sm border rounded-xl outline-none"
                        value={form.senderName}
                        onChange={(e) => setForm((f) => ({ ...f, senderName: e.target.value }))}
                        placeholder={status?.senderName ? c.keepEmpty : ''}
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs font-bold text-gray-500">{c.senderPhone}</span>
                      <input
                        className="mt-1 w-full px-3 py-2.5 text-sm border rounded-xl outline-none"
                        value={form.senderPhone}
                        onChange={(e) => setForm((f) => ({ ...f, senderPhone: e.target.value }))}
                        placeholder={status?.senderPhone ? c.keepEmpty : '09xxxxxxxx'}
                      />
                    </label>
                  </div>
                  <button type="button" disabled={saving} onClick={save} className="px-5 py-2.5 rounded-full text-sm font-bold text-white disabled:opacity-60" style={{ background: '#111827' }}>
                    {saving ? c.saving : c.saveKeys}
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
