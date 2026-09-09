'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'
import type { Locale } from '../../../lib/i18n'

const tabImages = [
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
  'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
  'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
]

type SocialFeaturesCopy = {
  title: string
  subtitle: string
  tabs: string[]
  ctaTitle: string
  cta: string
}

const zhTW: SocialFeaturesCopy = {
  title: '高互動、快速導購！智慧社群購物系統',
  subtitle: '完整社群電商功能，從直播到聊天購物，全面提升社群轉換率。',
  tabs: ['社群商店', '直播購物', '聊天購物', '訊息整合中心', '商品庫存管理', '金物流串接', '訂單管理', '顧客管理', '優惠活動', '行銷推廣', '數據分析', '營運管理', '廣告導流'],
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  cta: '立即免費試用',
}

const zhCN: SocialFeaturesCopy = {
  title: '高互动、快速导购！智慧社群购物系统',
  subtitle: '完整社群电商功能，从直播到聊天购物，全面提升社群转化率。',
  tabs: ['社群商店', '直播购物', '聊天购物', '消息整合中心', '商品库存管理', '金物流串接', '订单管理', '顾客管理', '优惠活动', '营销推广', '数据分析', '运营管理', '广告导流'],
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  cta: '立即免费试用',
}

const en: SocialFeaturesCopy = {
  title: 'High engagement, fast conversion — social commerce',
  subtitle: 'Full social commerce toolkit from live shopping to chat checkout.',
  tabs: ['Social store', 'Live shopping', 'Chat shopping', 'Inbox hub', 'Inventory', 'Payments & logistics', 'Orders', 'Customers', 'Promotions', 'Marketing', 'Analytics', 'Operations', 'Ad traffic'],
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  cta: 'Start free trial',
}

const ko: SocialFeaturesCopy = {
  title: '높은 참여, 빠른 전환 — 소셜 커머스',
  subtitle: '라이브 쇼핑부터 채팅 결제까지 완전한 소셜 커머스 툴킷.',
  tabs: ['소셜 스토어', '라이브 쇼핑', '채팅 쇼핑', '인박스 허브', '재고', '결제 & 물류', '주문', '고객', '프로모션', '마케팅', '분석', '운영', '광고 트래픽'],
  ctaTitle: '전 세계 60만+ 판매자가 ARVIX를 신뢰합니다',
  cta: '무료 체험 시작',
}

const ja: SocialFeaturesCopy = {
  title: '高いエンゲージメント、速いコンバージョン — ソーシャルコマース',
  subtitle: 'ライブショッピングからチャット決済まで、フルのソーシャルコマースツールキット。',
  tabs: ['ソーシャルストア', 'ライブショッピング', 'チャットショッピング', '受信箱ハブ', '在庫', '決済＆物流', '注文', '顧客', 'プロモーション', 'マーケティング', '分析', '運営', '広告流入'],
  ctaTitle: '世界中 60 万以上の加盟店が ARVIX を利用',
  cta: '無料トライアルを開始',
}

const vi: SocialFeaturesCopy = {
  title: 'Tương tác cao, chuyển đổi nhanh — thương mại xã hội',
  subtitle: 'Bộ công cụ thương mại xã hội đầy đủ từ live shopping đến thanh toán qua chat.',
  tabs: ['Cửa hàng social', 'Live shopping', 'Chat shopping', 'Hub hộp thư', 'Tồn kho', 'Thanh toán & logistics', 'Đơn hàng', 'Khách hàng', 'Khuyến mãi', 'Marketing', 'Phân tích', 'Vận hành', 'Traffic quảng cáo'],
  ctaTitle: 'Được hơn 600.000 người bán trên thế giới tin dùng',
  cta: 'Bắt đầu dùng thử miễn phí',
}

const es: SocialFeaturesCopy = {
  title: 'Alto engagement, conversión rápida — comercio social',
  subtitle: 'Kit completo de comercio social desde live shopping hasta checkout por chat.',
  tabs: ['Tienda social', 'Live shopping', 'Compra por chat', 'Hub de bandeja', 'Inventario', 'Pagos y logística', 'Pedidos', 'Clientes', 'Promociones', 'Marketing', 'Analítica', 'Operaciones', 'Tráfico de anuncios'],
  ctaTitle: 'Más de 600.000 comercios confían en ARVIX',
  cta: 'Empieza la prueba gratis',
}

const pt: SocialFeaturesCopy = {
  title: 'Alto engajamento, conversão rápida — comércio social',
  subtitle: 'Kit completo de comércio social do live shopping ao checkout por chat.',
  tabs: ['Loja social', 'Live shopping', 'Compra por chat', 'Hub de inbox', 'Estoque', 'Pagamentos e logística', 'Pedidos', 'Clientes', 'Promoções', 'Marketing', 'Analytics', 'Operações', 'Tráfego de anúncios'],
  ctaTitle: 'Mais de 600.000 lojistas confiam na ARVIX',
  cta: 'Começar teste grátis',
}

const de: SocialFeaturesCopy = {
  title: 'Hohes Engagement, schnelle Conversion — Social Commerce',
  subtitle: 'Volles Social-Commerce-Toolkit von Live-Shopping bis Chat-Checkout.',
  tabs: ['Social Store', 'Live-Shopping', 'Chat-Shopping', 'Inbox-Hub', 'Bestand', 'Zahlungen & Logistik', 'Bestellungen', 'Kunden', 'Aktionen', 'Marketing', 'Analytics', 'Betrieb', 'Anzeigen-Traffic'],
  ctaTitle: 'Über 600.000 Händler weltweit vertrauen ARVIX',
  cta: 'Kostenlos testen',
}

const fr: SocialFeaturesCopy = {
  title: 'Engagement élevé, conversion rapide — commerce social',
  subtitle: 'Boîte à outils complète de commerce social du live shopping au checkout par chat.',
  tabs: ['Boutique sociale', 'Live shopping', 'Achat par chat', 'Hub messagerie', 'Stock', 'Paiements & logistique', 'Commandes', 'Clients', 'Promotions', 'Marketing', 'Analytique', 'Opérations', 'Trafic pub'],
  ctaTitle: 'Plus de 600 000 marchands font confiance à ARVIX',
  cta: 'Démarrer l’essai gratuit',
}

const copy: Partial<Record<Locale, SocialFeaturesCopy>> & { 'zh-TW': SocialFeaturesCopy; en: SocialFeaturesCopy } = {
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

export default function SocialCommerceFeaturesPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)
  const [active, setActive] = useState(0)

  return (
    <main>
      <section className="py-20" style={{ background: 'linear-gradient(rgb(0, 87, 230) 0%, rgb(0, 65, 177) 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">{c.title}</h1>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.75)' }}>{c.subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-8">
          <div className="md:w-56 flex-shrink-0">
            <div className="flex flex-col gap-1">
              {c.tabs.map((label, i) => (
                <button
                  key={label}
                  onClick={() => setActive(i)}
                  className="text-left px-4 py-3 rounded-lg font-semibold text-sm transition-all"
                  style={{
                    backgroundColor: active === i ? '#5B5FF0' : 'transparent',
                    color: active === i ? '#fff' : '#00142D',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src={tabImages[active]} alt={c.tabs[active]} width={800} height={500} className="w-full h-auto rounded-2xl" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.ctaTitle}</h2>
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
