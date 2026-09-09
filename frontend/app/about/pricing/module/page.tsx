'use client'

import { useI18n } from '../../../../contexts/I18nContext'
import { pickCopy } from '../../../../lib/i18n/pageCopy'
import type { Locale } from '../../../../lib/i18n'

type PricingModuleCopy = {
  title: string
  subtitle: string
  viewPlans: string
  freeTrial: string
  modules: { category: string; items: { name: string; price: string; desc: string }[] }[]
  ctaTitle: string
  ctaSubtitle: string
  cta: string
}

const zhTW: PricingModuleCopy = {
  title: '功能模組費用',
  subtitle: '依需求彈性選購功能模組，搭配主方案打造最適合你的電商解決方案',
  viewPlans: '查看主方案費用',
  freeTrial: '免費試用',
  modules: [
    {
      category: '行銷工具',
      items: [
        { name: 'RFIM 分眾行銷', price: 'NT$990/月', desc: '精準分眾，提升行銷 ROI' },
        { name: 'LINE 官方帳號整合', price: 'NT$490/月', desc: '串接 LINE OA，直接觸達會員' },
        { name: '團購解決方案', price: 'NT$690/月', desc: '網紅團購、群組購物一站搞定' },
      ],
    },
    {
      category: '數據分析',
      items: [
        { name: 'Shoplytics 數據分析', price: 'NT$790/月', desc: '人貨場全方位數據洞察' },
        { name: 'AI 洞察策略', price: 'NT$490/月', desc: 'AI 自動分析，提供可執行建議' },
      ],
    },
    {
      category: '全通路整合',
      items: [
        { name: 'Smart OMO', price: 'NT$1,490/月', desc: '智慧串連門市與網店' },
        { name: 'Shopper App', price: 'NT$1,990/月', desc: '品牌專屬會員購物 App' },
        { name: 'POS 零售系統', price: '依規格報價', desc: '實體門市收銀與庫存管理' },
      ],
    },
    {
      category: '金流服務',
      items: [
        { name: 'ARVIX Payments', price: '依交易量計費', desc: '信用卡結帳；台灣出貨商店可加開 7-11 貨到付款' },
      ],
    },
  ],
  ctaTitle: 'More solutions for your business',
  ctaSubtitle: '全球超過 600,000 商家已使用 ARVIX',
  cta: '立即免費試用',
}

const zhCN: PricingModuleCopy = {
  title: '功能模块费用',
  subtitle: '按需求弹性选购功能模块，搭配主方案打造最适合你的电商解决方案',
  viewPlans: '查看主方案费用',
  freeTrial: '免费试用',
  modules: [
    {
      category: '营销工具',
      items: [
        { name: 'RFIM 分群营销', price: 'NT$990/月', desc: '精准分群，提升营销 ROI' },
        { name: 'LINE 官方账号整合', price: 'NT$490/月', desc: '串接 LINE OA，直接触达会员' },
        { name: '团购解决方案', price: 'NT$690/月', desc: '网红团购、群组购物一站搞定' },
      ],
    },
    {
      category: '数据分析',
      items: [
        { name: 'Shoplytics 数据分析', price: 'NT$790/月', desc: '人货场全方位数据洞察' },
        { name: 'AI 洞察策略', price: 'NT$490/月', desc: 'AI 自动分析，提供可执行建议' },
      ],
    },
    {
      category: '全渠道整合',
      items: [
        { name: 'Smart OMO', price: 'NT$1,490/月', desc: '智慧串连门店与网店' },
        { name: 'Shopper App', price: 'NT$1,990/月', desc: '品牌专属会员购物 App' },
        { name: 'POS 零售系统', price: '按规格报价', desc: '实体门店收银与库存管理' },
      ],
    },
    {
      category: '金流服务',
      items: [
        { name: 'ARVIX Payments', price: '按交易量计费', desc: '信用卡结账' },
      ],
    },
  ],
  ctaTitle: 'More solutions for your business',
  ctaSubtitle: '全球超过 600,000 商家已使用 ARVIX',
  cta: '立即免费试用',
}

const en: PricingModuleCopy = {
  title: 'Add-on module pricing',
  subtitle: 'Pick modules as needed and pair them with a core plan for your stack',
  viewPlans: 'View core plan pricing',
  freeTrial: 'Free trial',
  modules: [
    {
      category: 'Marketing',
      items: [
        { name: 'RFIM segmentation', price: 'NT$990/mo', desc: 'Precise segments that lift marketing ROI' },
        { name: 'LINE Official Account', price: 'NT$490/mo', desc: 'Connect LINE OA and reach members directly' },
        { name: 'Group buying', price: 'NT$690/mo', desc: 'Influencer and group commerce in one place' },
      ],
    },
    {
      category: 'Analytics',
      items: [
        { name: 'Shoplytics analytics', price: 'NT$790/mo', desc: 'People, products, and place insights' },
        { name: 'AI strategy insights', price: 'NT$490/mo', desc: 'AI analysis with actionable recommendations' },
      ],
    },
    {
      category: 'Omnichannel',
      items: [
        { name: 'Smart OMO', price: 'NT$1,490/mo', desc: 'Connect stores and online smartly' },
        { name: 'Shopper App', price: 'NT$1,990/mo', desc: 'Branded member shopping app' },
        { name: 'POS retail system', price: 'Custom quote', desc: 'In-store checkout and inventory' },
      ],
    },
    {
      category: 'Payments',
      items: [
        { name: 'ARVIX Payments', price: 'Usage-based', desc: 'Card checkout for your store' },
      ],
    },
  ],
  ctaTitle: 'More solutions for your business',
  ctaSubtitle: 'Trusted by 600,000+ merchants worldwide',
  cta: 'Start free trial',
}

const ko: PricingModuleCopy = {
  title: '추가 모듈 요금',
  subtitle: '필요한 모듈을 선택해 핵심 플랜과 함께 구성하세요',
  viewPlans: '핵심 플랜 요금 보기',
  freeTrial: '무료 체험',
  modules: [
    {
      category: '마케팅',
      items: [
        { name: 'RFIM 세그먼트', price: 'NT$990/월', desc: '마케팅 ROI를 높이는 정밀 세그먼트' },
        { name: 'LINE Official Account', price: 'NT$490/월', desc: 'LINE OA를 연결해 회원에게 바로 도달' },
        { name: '공동구매', price: 'NT$690/월', desc: '인플루언서·그룹 커머스를 한곳에서' },
      ],
    },
    {
      category: '분석',
      items: [
        { name: 'Shoplytics 분석', price: 'NT$790/월', desc: '사람·상품·매장 인사이트' },
        { name: 'AI 전략 인사이트', price: 'NT$490/월', desc: '실행 가능한 추천을 제공하는 AI 분석' },
      ],
    },
    {
      category: '옴니채널',
      items: [
        { name: 'Smart OMO', price: 'NT$1,490/월', desc: '매장과 온라인 스토어를 스마트하게 연결' },
        { name: 'Shopper App', price: 'NT$1,990/월', desc: '브랜드 전용 회원 쇼핑 앱' },
        { name: 'POS 리테일 시스템', price: '맞춤 견적', desc: '매장 결제와 재고 관리' },
      ],
    },
    {
      category: '결제',
      items: [
        { name: 'ARVIX Payments', price: '사용량 기반', desc: '스토어를 위한 카드 결제' },
      ],
    },
  ],
  ctaTitle: '비즈니스를 위한 더 많은 솔루션',
  ctaSubtitle: '전 세계 60만+ 판매자가 ARVIX를 신뢰합니다',
  cta: '무료 체험 시작',
}

const ja: PricingModuleCopy = {
  title: 'アドオンモジュール料金',
  subtitle: '必要なモジュールを選び、コアプランと組み合わせて構築',
  viewPlans: 'コアプラン料金を見る',
  freeTrial: '無料トライアル',
  modules: [
    {
      category: 'マーケティング',
      items: [
        { name: 'RFIM セグメンテーション', price: 'NT$990/月', desc: 'マーケティング ROI を高める精緻なセグメント' },
        { name: 'LINE Official Account', price: 'NT$490/月', desc: 'LINE OA を接続し会員に直接リーチ' },
        { name: 'グループ購入', price: 'NT$690/月', desc: 'インフルエンサーとグループコマースを一元管理' },
      ],
    },
    {
      category: '分析',
      items: [
        { name: 'Shoplytics 分析', price: 'NT$790/月', desc: '人・商品・場所のインサイト' },
        { name: 'AI 戦略インサイト', price: 'NT$490/月', desc: '実行可能な提案付きの AI 分析' },
      ],
    },
    {
      category: 'オムニチャネル',
      items: [
        { name: 'Smart OMO', price: 'NT$1,490/月', desc: '店舗とオンラインをスマートに接続' },
        { name: 'Shopper App', price: 'NT$1,990/月', desc: 'ブランド専用会員ショッピングアプリ' },
        { name: 'POS リテールシステム', price: '個別見積', desc: '店頭チェックアウトと在庫管理' },
      ],
    },
    {
      category: '決済',
      items: [
        { name: 'ARVIX Payments', price: '従量課金', desc: 'ストア向けカード決済' },
      ],
    },
  ],
  ctaTitle: 'ビジネスのためのさらなるソリューション',
  ctaSubtitle: '世界中 60 万以上の加盟店が ARVIX を利用',
  cta: '無料トライアルを開始',
}

const vi: PricingModuleCopy = {
  title: 'Giá module bổ sung',
  subtitle: 'Chọn module theo nhu cầu và kết hợp với gói chính',
  viewPlans: 'Xem giá gói chính',
  freeTrial: 'Dùng thử miễn phí',
  modules: [
    {
      category: 'Marketing',
      items: [
        { name: 'Phân khúc RFIM', price: 'NT$990/tháng', desc: 'Phân khúc chính xác giúp tăng ROI marketing' },
        { name: 'LINE Official Account', price: 'NT$490/tháng', desc: 'Kết nối LINE OA và tiếp cận hội viên trực tiếp' },
        { name: 'Mua nhóm', price: 'NT$690/tháng', desc: 'Thương mại influencer và nhóm tại một nơi' },
      ],
    },
    {
      category: 'Phân tích',
      items: [
        { name: 'Phân tích Shoplytics', price: 'NT$790/tháng', desc: 'Insight về người, sản phẩm và điểm bán' },
        { name: 'Insight chiến lược AI', price: 'NT$490/tháng', desc: 'Phân tích AI kèm đề xuất hành động' },
      ],
    },
    {
      category: 'Omnichannel',
      items: [
        { name: 'Smart OMO', price: 'NT$1,490/tháng', desc: 'Kết nối cửa hàng và online thông minh' },
        { name: 'Shopper App', price: 'NT$1,990/tháng', desc: 'App mua sắm hội viên riêng của thương hiệu' },
        { name: 'Hệ thống POS bán lẻ', price: 'Báo giá tùy chỉnh', desc: 'Thanh toán tại cửa hàng và quản lý tồn kho' },
      ],
    },
    {
      category: 'Thanh toán',
      items: [
        { name: 'ARVIX Payments', price: 'Theo mức sử dụng', desc: 'Thanh toán thẻ cho cửa hàng của bạn' },
      ],
    },
  ],
  ctaTitle: 'Thêm giải pháp cho doanh nghiệp của bạn',
  ctaSubtitle: 'Được hơn 600.000 người bán trên thế giới tin dùng',
  cta: 'Bắt đầu dùng thử miễn phí',
}

const es: PricingModuleCopy = {
  title: 'Precios de módulos adicionales',
  subtitle: 'Elige módulos según necesites y combínalos con un plan principal',
  viewPlans: 'Ver precios del plan principal',
  freeTrial: 'Prueba gratis',
  modules: [
    {
      category: 'Marketing',
      items: [
        { name: 'Segmentación RFIM', price: 'NT$990/mes', desc: 'Segmentos precisos que mejoran el ROI de marketing' },
        { name: 'LINE Official Account', price: 'NT$490/mes', desc: 'Conecta LINE OA y llega a miembros directamente' },
        { name: 'Compra grupal', price: 'NT$690/mes', desc: 'Comercio de influencers y grupos en un solo lugar' },
      ],
    },
    {
      category: 'Analítica',
      items: [
        { name: 'Analítica Shoplytics', price: 'NT$790/mes', desc: 'Insights de personas, productos y puntos de venta' },
        { name: 'Insights de estrategia con IA', price: 'NT$490/mes', desc: 'Análisis con IA y recomendaciones accionables' },
      ],
    },
    {
      category: 'Omnicanal',
      items: [
        { name: 'Smart OMO', price: 'NT$1,490/mes', desc: 'Conecta tiendas y online de forma inteligente' },
        { name: 'Shopper App', price: 'NT$1,990/mes', desc: 'App de compra para miembros de la marca' },
        { name: 'Sistema POS retail', price: 'Cotización a medida', desc: 'Checkout en tienda e inventario' },
      ],
    },
    {
      category: 'Pagos',
      items: [
        { name: 'ARVIX Payments', price: 'Según uso', desc: 'Pago con tarjeta para tu tienda' },
      ],
    },
  ],
  ctaTitle: 'Más soluciones para tu negocio',
  ctaSubtitle: 'Más de 600.000 comercios confían en ARVIX',
  cta: 'Empieza la prueba gratis',
}

const pt: PricingModuleCopy = {
  title: 'Preços de módulos adicionais',
  subtitle: 'Escolha módulos conforme a necessidade e combine com um plano principal',
  viewPlans: 'Ver preços do plano principal',
  freeTrial: 'Teste grátis',
  modules: [
    {
      category: 'Marketing',
      items: [
        { name: 'Segmentação RFIM', price: 'NT$990/mês', desc: 'Segmentos precisos que elevam o ROI de marketing' },
        { name: 'LINE Official Account', price: 'NT$490/mês', desc: 'Conecte o LINE OA e alcance membros diretamente' },
        { name: 'Compra em grupo', price: 'NT$690/mês', desc: 'Comércio de influenciadores e grupos em um só lugar' },
      ],
    },
    {
      category: 'Analytics',
      items: [
        { name: 'Analytics Shoplytics', price: 'NT$790/mês', desc: 'Insights de pessoas, produtos e pontos de venda' },
        { name: 'Insights de estratégia com IA', price: 'NT$490/mês', desc: 'Análise com IA e recomendações acionáveis' },
      ],
    },
    {
      category: 'Omnichannel',
      items: [
        { name: 'Smart OMO', price: 'NT$1,490/mês', desc: 'Conecte lojas e online de forma inteligente' },
        { name: 'Shopper App', price: 'NT$1,990/mês', desc: 'App de compras para membros da marca' },
        { name: 'Sistema POS varejo', price: 'Orçamento sob medida', desc: 'Checkout na loja e estoque' },
      ],
    },
    {
      category: 'Pagamentos',
      items: [
        { name: 'ARVIX Payments', price: 'Conforme uso', desc: 'Checkout com cartão para sua loja' },
      ],
    },
  ],
  ctaTitle: 'Mais soluções para o seu negócio',
  ctaSubtitle: 'Mais de 600.000 lojistas confiam na ARVIX',
  cta: 'Começar teste grátis',
}

const de: PricingModuleCopy = {
  title: 'Preise für Zusatzmodule',
  subtitle: 'Module nach Bedarf wählen und mit einem Kernplan kombinieren',
  viewPlans: 'Kernplan-Preise ansehen',
  freeTrial: 'Kostenlos testen',
  modules: [
    {
      category: 'Marketing',
      items: [
        { name: 'RFIM-Segmentierung', price: 'NT$990/Mon.', desc: 'Präzise Segmente, die den Marketing-ROI steigern' },
        { name: 'LINE Official Account', price: 'NT$490/Mon.', desc: 'LINE OA verbinden und Mitglieder direkt erreichen' },
        { name: 'Gruppenkauf', price: 'NT$690/Mon.', desc: 'Influencer- und Gruppen-Commerce an einem Ort' },
      ],
    },
    {
      category: 'Analytics',
      items: [
        { name: 'Shoplytics-Analytics', price: 'NT$790/Mon.', desc: 'Insights zu Menschen, Produkten und Orten' },
        { name: 'KI-Strategie-Insights', price: 'NT$490/Mon.', desc: 'KI-Analyse mit umsetzbaren Empfehlungen' },
      ],
    },
    {
      category: 'Omnichannel',
      items: [
        { name: 'Smart OMO', price: 'NT$1,490/Mon.', desc: 'Filialen und Online smart verbinden' },
        { name: 'Shopper App', price: 'NT$1,990/Mon.', desc: 'Markeneigene Mitglieder-Shopping-App' },
        { name: 'POS-Retail-System', price: 'Individuelles Angebot', desc: 'Filial-Checkout und Bestand' },
      ],
    },
    {
      category: 'Zahlungen',
      items: [
        { name: 'ARVIX Payments', price: 'Nutzungsbasiert', desc: 'Kartencheckout für Ihren Shop' },
      ],
    },
  ],
  ctaTitle: 'Mehr Lösungen für Ihr Business',
  ctaSubtitle: 'Über 600.000 Händler weltweit vertrauen ARVIX',
  cta: 'Kostenlos testen',
}

const fr: PricingModuleCopy = {
  title: 'Tarifs des modules complémentaires',
  subtitle: 'Choisissez des modules selon vos besoins et associez-les à un forfait principal',
  viewPlans: 'Voir les tarifs du forfait principal',
  freeTrial: 'Essai gratuit',
  modules: [
    {
      category: 'Marketing',
      items: [
        { name: 'Segmentation RFIM', price: 'NT$990/mois', desc: 'Segments précis qui boostent le ROI marketing' },
        { name: 'LINE Official Account', price: 'NT$490/mois', desc: 'Connectez LINE OA et touchez les membres directement' },
        { name: 'Achat groupé', price: 'NT$690/mois', desc: 'Commerce influenceurs et groupes en un seul endroit' },
      ],
    },
    {
      category: 'Analytics',
      items: [
        { name: 'Analytics Shoplytics', price: 'NT$790/mois', desc: 'Insights personnes, produits et points de vente' },
        { name: 'Insights stratégie IA', price: 'NT$490/mois', desc: 'Analyse IA avec recommandations actionnables' },
      ],
    },
    {
      category: 'Omnicanal',
      items: [
        { name: 'Smart OMO', price: 'NT$1,490/mois', desc: 'Connectez magasins et en ligne intelligemment' },
        { name: 'Shopper App', price: 'NT$1,990/mois', desc: 'App shopping membres de la marque' },
        { name: 'Système POS retail', price: 'Devis sur mesure', desc: 'Checkout en magasin et stock' },
      ],
    },
    {
      category: 'Paiements',
      items: [
        { name: 'ARVIX Payments', price: 'Selon usage', desc: 'Paiement par carte pour votre boutique' },
      ],
    },
  ],
  ctaTitle: 'Plus de solutions pour votre activité',
  ctaSubtitle: 'Plus de 600 000 marchands font confiance à ARVIX',
  cta: 'Démarrer l’essai gratuit',
}

const copy: Partial<Record<Locale, PricingModuleCopy>> & { 'zh-TW': PricingModuleCopy; en: PricingModuleCopy } = {
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

export default function PricingModulePage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EEF0FF 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>{c.title}</h1>
          <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
          <div className="flex gap-4 justify-center">
            <a href="/about/pricing" className="inline-block font-bold px-8 py-3 rounded-full border-2 hover:opacity-80 transition-opacity" style={{ borderColor: '#5B5FF0', color: '#5B5FF0' }}>
              {c.viewPlans}
            </a>
            <a href="/register" className="inline-block text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.freeTrial}
            </a>
          </div>
        </div>
      </section>

      {c.modules.map((cat, i) => (
        <section key={cat.category} className="py-16" style={{ backgroundColor: i % 2 === 0 ? 'white' : '#F4F7FC' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-black mb-8" style={{ color: '#00142D' }}>{cat.category}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {cat.items.map((item) => (
                <div key={item.name} className="p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#00142D' }}>{item.name}</h3>
                  <p className="text-sm mb-4" style={{ color: '#687280' }}>{item.desc}</p>
                  <div className="text-xl font-black" style={{ color: '#5B5FF0' }}>{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.ctaTitle}</h2>
          <p className="text-white opacity-70 mb-8">{c.ctaSubtitle}</p>
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
