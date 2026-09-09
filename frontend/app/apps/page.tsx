'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

const API = process.env.NEXT_PUBLIC_API_URL || 'https://shopline-backend.arvix1413.workers.dev'

interface TrialSystem {
  id: number; name: string; desc: string; url: string
  color: string; bg: string; border: string; emoji: string; tags: string[]; active: number
}

type AppsCopy = {
  title: string
  subtitle: string
  ctaLoggedIn: string
  ctaGuest: string
  allTag: string
  empty: string
  tryNow: string
  ctaTitle: string
  ctaSubtitle: string
}

const zhTW: AppsCopy = {
  title: '擴充功能商店',
  subtitle: '豐富的試用系統，讓你體驗各種電商解決方案',
  ctaLoggedIn: '前往試用中心',
  ctaGuest: '免費試用 14 天',
  allTag: '全部',
  empty: '目前尚無可用的試用系統',
  tryNow: '立即體驗 →',
  ctaTitle: '立即體驗完整功能',
  ctaSubtitle: '所有系統均為完整功能展示，免費試用無需信用卡',
}

const zhCN: AppsCopy = {
  title: '扩展功能商店',
  subtitle: '丰富的试用系统，让你体验各种电商解决方案',
  ctaLoggedIn: '前往试用中心',
  ctaGuest: '免费试用 14 天',
  allTag: '全部',
  empty: '目前尚无可用的试用系统',
  tryNow: '立即体验 →',
  ctaTitle: '立即体验完整功能',
  ctaSubtitle: '所有系统均为完整功能展示，免费试用无需信用卡',
}

const en: AppsCopy = {
  title: 'App store',
  subtitle: 'Explore trial systems across ecommerce solutions',
  ctaLoggedIn: 'Go to trial hub',
  ctaGuest: 'Free 14-day trial',
  allTag: 'All',
  empty: 'No trial systems available yet',
  tryNow: 'Try now →',
  ctaTitle: 'Experience the full product',
  ctaSubtitle: 'Full-featured demos — free trial, no credit card required',
}

const ko: AppsCopy = {
  title: '앱 스토어',
  subtitle: '다양한 이커머스 솔루션의 체험 시스템을 살펴보세요',
  ctaLoggedIn: '체험 허브로 이동',
  ctaGuest: '14일 무료 체험',
  allTag: '전체',
  empty: '아직 이용 가능한 체험 시스템이 없습니다',
  tryNow: '지금 체험 →',
  ctaTitle: '전체 기능을 경험하세요',
  ctaSubtitle: '전체 기능 데모 — 무료 체험, 신용카드 불필요',
}

const ja: AppsCopy = {
  title: 'アプリストア',
  subtitle: 'さまざまな EC ソリューションのトライアルを体験',
  ctaLoggedIn: 'トライアルハブへ',
  ctaGuest: '14日間無料トライアル',
  allTag: 'すべて',
  empty: '利用可能なトライアルはまだありません',
  tryNow: '今すぐ試す →',
  ctaTitle: 'フル機能を体験',
  ctaSubtitle: 'フル機能デモ — 無料トライアル、クレジットカード不要',
}

const vi: AppsCopy = {
  title: 'Cửa hàng ứng dụng',
  subtitle: 'Khám phá hệ thống dùng thử trên các giải pháp thương mại điện tử',
  ctaLoggedIn: 'Đến trung tâm dùng thử',
  ctaGuest: 'Dùng thử miễn phí 14 ngày',
  allTag: 'Tất cả',
  empty: 'Chưa có hệ thống dùng thử',
  tryNow: 'Dùng thử ngay →',
  ctaTitle: 'Trải nghiệm sản phẩm đầy đủ',
  ctaSubtitle: 'Demo đầy đủ tính năng — dùng thử miễn phí, không cần thẻ tín dụng',
}

const es: AppsCopy = {
  title: 'Tienda de apps',
  subtitle: 'Explora sistemas de prueba en soluciones de ecommerce',
  ctaLoggedIn: 'Ir al centro de pruebas',
  ctaGuest: 'Prueba gratis de 14 días',
  allTag: 'Todas',
  empty: 'Aún no hay sistemas de prueba disponibles',
  tryNow: 'Probar ahora →',
  ctaTitle: 'Experimenta el producto completo',
  ctaSubtitle: 'Demos completas — prueba gratis, sin tarjeta de crédito',
}

const pt: AppsCopy = {
  title: 'Loja de apps',
  subtitle: 'Explore sistemas de teste em soluções de ecommerce',
  ctaLoggedIn: 'Ir ao hub de testes',
  ctaGuest: 'Teste grátis de 14 dias',
  allTag: 'Todas',
  empty: 'Ainda não há sistemas de teste disponíveis',
  tryNow: 'Experimentar agora →',
  ctaTitle: 'Experimente o produto completo',
  ctaSubtitle: 'Demos completas — teste grátis, sem cartão de crédito',
}

const de: AppsCopy = {
  title: 'App-Store',
  subtitle: 'Testsysteme für Ecommerce-Lösungen entdecken',
  ctaLoggedIn: 'Zum Trial-Hub',
  ctaGuest: '14 Tage kostenlos testen',
  allTag: 'Alle',
  empty: 'Noch keine Testsysteme verfügbar',
  tryNow: 'Jetzt testen →',
  ctaTitle: 'Das volle Produkt erleben',
  ctaSubtitle: 'Vollständige Demos — kostenlose Testphase, keine Kreditkarte nötig',
}

const fr: AppsCopy = {
  title: 'Boutique d’apps',
  subtitle: 'Explorez les systèmes d’essai des solutions ecommerce',
  ctaLoggedIn: 'Aller au hub d’essai',
  ctaGuest: 'Essai gratuit de 14 jours',
  allTag: 'Tout',
  empty: 'Aucun système d’essai disponible pour le moment',
  tryNow: 'Essayer maintenant →',
  ctaTitle: 'Découvrez le produit complet',
  ctaSubtitle: 'Démos complètes — essai gratuit, sans carte bancaire',
}


const copy: Partial<Record<Locale, AppsCopy>> & { 'zh-TW': AppsCopy; en: AppsCopy } = {
  'zh-TW': zhTW,
  'zh-CN': zhCN,
  en,
  ko,
  ja,
  vi,
  es,
  pt,
  de,
  fr,
}

export default function AppsPage() {
  const { user, token } = useAuth()
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)
  const [systems, setSystems] = useState<TrialSystem[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTag, setActiveTag] = useState<string | null>(null)

  useEffect(() => {
    fetch(`${API}/api/trial-systems`)
      .then(r => r.json())
      .then(data => setSystems(Array.isArray(data) ? data.filter((s: TrialSystem) => s.active) : []))
      .catch(() => setSystems([]))
      .finally(() => setLoading(false))
  }, [])

  const allTagLabel = c.allTag
  const effectiveTag = activeTag ?? allTagLabel
  const allTags = [allTagLabel, ...Array.from(new Set(systems.flatMap(s => s.tags)))]
  const filtered = effectiveTag === allTagLabel ? systems : systems.filter(s => s.tags.includes(effectiveTag))

  const getTrialUrl = (_sys: TrialSystem) => {
    if (user && token) {
      return `/my-store`
    }
    return `/register`
  }

  const ctaLabel = user ? c.ctaLoggedIn : c.ctaGuest

  return (
    <main>
      <section className="py-20 text-center" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #f8f0ff 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#00142D' }}>{c.title}</h1>
          <p className="text-lg mb-6" style={{ color: '#687280' }}>{c.subtitle}</p>
          <a href="/register"
            className="inline-block text-white font-bold px-8 py-3 rounded-full text-base hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#5B5FF0' }}>
            {ctaLabel}
          </a>
        </div>
      </section>

      {allTags.length > 1 && (
        <section className="py-8 bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button key={tag} onClick={() => setActiveTag(tag)}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                  style={{
                    backgroundColor: effectiveTag === tag ? '#5B5FF0' : '#fff',
                    color: effectiveTag === tag ? '#fff' : '#354253',
                    border: `1px solid ${effectiveTag === tag ? '#5B5FF0' : '#E0E3E8'}`,
                  }}>
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">{c.empty}</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map(sys => (
                <a key={sys.id} href={getTrialUrl(sys)}
                  className="group bg-white rounded-2xl p-6 border hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer block"
                  style={{ borderColor: '#E0E3E8' }}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                      style={{ background: sys.bg, border: `1px solid ${sys.border}` }}>
                      {sys.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base mb-1 group-hover:text-blue-600 transition-colors" style={{ color: '#00142D' }}>
                        {sys.name}
                      </h3>
                      <p className="text-sm line-clamp-2" style={{ color: '#687280' }}>{sys.desc}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {sys.tags.map(tag => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ background: `${sys.color}18`, color: sys.color, border: `1px solid ${sys.color}30` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: sys.color }}>
                    {c.tryNow}
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 text-center" style={{ background: 'linear-gradient(270.52deg, rgb(0, 79, 209) 0%, rgb(37, 124, 255) 100%)' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.ctaTitle}</h2>
          <p className="text-white/70 mb-8">{c.ctaSubtitle}</p>
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {ctaLabel}
          </a>
        </div>
      </section>
    </main>
  )
}
