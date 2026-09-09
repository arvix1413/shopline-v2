'use client'

import Image from 'next/image'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type GroupBuyingCopy = {
  title: string
  subtitle: string
  cta: string
  solutionTitle: string
  solutionAccent: string
  solutionDesc: string
  features: { title: string; desc: string }[]
  socialTitle: string
  socialDesc: string
  partnerTitle: string
  partnerDesc: string
  siteTitle: string
  siteDesc: string
  ctaTitle: string
}

const zhTW: GroupBuyingCopy = {
  title: '打造團購銷售熱潮\n新客、業績一把罩！',
  subtitle: '業績放大術，團購經濟魅力無法擋。ARVIX 推出「團購解決方案」，你的開團得力助手。',
  cta: '立即免費試用',
  solutionTitle: 'ARVIX 推出「團購解決方案」\n你的開團得力助手',
  solutionAccent: '獨立分潤賣場快速下單超方便',
  solutionDesc: '為每位合作夥伴建立獨立分潤賣場，讓顧客快速下單，提升購買體驗。',
  features: [
    { title: '獨立分潤賣場', desc: '為每位 KOL 建立專屬賣場' },
    { title: '團購隱藏賣場', desc: '限定顧客才能進入的專屬賣場' },
    { title: '優惠直接套用', desc: '自動套用折扣，無需手動輸入' },
    { title: '推薦活動與分潤', desc: '靈活設定推薦分潤比例' },
    { title: '各商品設定不同分潤', desc: '依商品設定不同分潤比例' },
    { title: '一頁結帳', desc: '簡化結帳流程，提升轉換率' },
  ],
  socialTitle: '多管道社群導流\n先讓客人嗨起來',
  socialDesc: '透過多元社群渠道導流，讓更多潛在顧客加入你的團購活動。',
  partnerTitle: '合作夥伴成效中心\n即時數據一目瞭然',
  partnerDesc: '即時追蹤每位合作夥伴的銷售成效，讓數據說話，優化團購策略。',
  siteTitle: '官網一站式整合\n團購效益最大化',
  siteDesc: '將團購與官網完美整合，讓顧客享受無縫的購物體驗，最大化團購效益。',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
}

const zhCN: GroupBuyingCopy = {
  title: '打造团购销售热潮\n新客、业绩一把罩！',
  subtitle: '业绩放大术，团购经济魅力无法挡。ARVIX 推出「团购解决方案」，你的开团得力助手。',
  cta: '立即免费试用',
  solutionTitle: 'ARVIX 推出「团购解决方案」\n你的开团得力助手',
  solutionAccent: '独立分润卖场快速下单超方便',
  solutionDesc: '为每位合作伙伴建立独立分润卖场，让顾客快速下单，提升购买体验。',
  features: [
    { title: '独立分润卖场', desc: '为每位 KOL 建立专属卖场' },
    { title: '团购隐藏卖场', desc: '限定顾客才能进入的专属卖场' },
    { title: '优惠直接套用', desc: '自动套用折扣，无需手动输入' },
    { title: '推荐活动与分润', desc: '灵活设定推荐分润比例' },
    { title: '各商品设定不同分润', desc: '依商品设定不同分润比例' },
    { title: '一页结账', desc: '简化结账流程，提升转化率' },
  ],
  socialTitle: '多渠道社群导流\n先让客人嗨起来',
  socialDesc: '通过多元社群渠道导流，让更多潜在顾客加入你的团购活动。',
  partnerTitle: '合作伙伴成效中心\n即时数据一目了然',
  partnerDesc: '即时追踪每位合作伙伴的销售成效，让数据说话，优化团购策略。',
  siteTitle: '官网一站式整合\n团购效益最大化',
  siteDesc: '将团购与官网完美整合，让顾客享受无缝的购物体验，最大化团购效益。',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
}

const en: GroupBuyingCopy = {
  title: 'Ignite group-buy sales\nNew customers and revenue covered',
  subtitle: 'Scale with the group-buy economy. ARVIX group-buy tools are your launch partner.',
  cta: 'Start free trial',
  solutionTitle: 'ARVIX group-buy solution\nYour campaign co-pilot',
  solutionAccent: 'Commission storefronts for fast checkout',
  solutionDesc: 'Give every partner a dedicated commission store so shoppers buy faster.',
  features: [
    { title: 'Commission storefronts', desc: 'Dedicated shops for every KOL' },
    { title: 'Hidden group-buy shops', desc: 'Invite-only storefronts for selected buyers' },
    { title: 'Auto-applied offers', desc: 'Discounts apply automatically — no codes needed' },
    { title: 'Referral campaigns & commissions', desc: 'Flexible referral commission rates' },
    { title: 'Per-product commissions', desc: 'Set different rates by product' },
    { title: 'One-page checkout', desc: 'Shorter checkout, higher conversion' },
  ],
  socialTitle: 'Multi-channel social traffic\nWarm up the crowd first',
  socialDesc: 'Drive more shoppers into your group buys from every social channel.',
  partnerTitle: 'Partner performance hub\nLive data at a glance',
  partnerDesc: 'Track each partner’s sales in realtime and refine your strategy.',
  siteTitle: 'One-stop store integration\nMaximize group-buy ROI',
  siteDesc: 'Unify group buys with your main store for a seamless shopping experience.',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
}

const ko: GroupBuyingCopy = {
  title: '공동구매 매출에 불을 붙이세요\n신규 고객과 매출을 한 번에',
  subtitle: '공동구매 경제로 확장하세요. ARVIX 공동구매 도구가 런칭 파트너입니다.',
  cta: '무료 체험 시작',
  solutionTitle: 'ARVIX 공동구매 솔루션\n캠페인 코파일럿',
  solutionAccent: '빠른 체크아웃을 위한 커미션 스토어프론트',
  solutionDesc: '모든 파트너에게 전용 커미션 스토어를 제공해 쇼퍼가 더 빨리 구매하게 하세요.',
  features: [
    { title: '커미션 스토어프론트', desc: '모든 KOL을 위한 전용 샵' },
    { title: '숨김 공동구매 샵', desc: '선택된 구매자만 입장하는 초대 전용 스토어프론트' },
    { title: '자동 적용 혜택', desc: '할인이 자동 적용 — 코드 불필요' },
    { title: '추천 캠페인 & 커미션', desc: '유연한 추천 커미션 비율' },
    { title: '상품별 커미션', desc: '상품마다 다른 비율 설정' },
    { title: '원페이지 체크아웃', desc: '더 짧은 체크아웃, 더 높은 전환' },
  ],
  socialTitle: '멀티채널 소셜 트래픽\n먼저 분위기를 띄우세요',
  socialDesc: '모든 소셜 채널에서 더 많은 쇼퍼를 공동구매로 유입하세요.',
  partnerTitle: '파트너 성과 허브\n실시간 데이터를 한눈에',
  partnerDesc: '각 파트너의 매출을 실시간으로 추적하고 전략을 다듬으세요.',
  siteTitle: '원스톱 스토어 통합\n공동구매 ROI 극대화',
  siteDesc: '공동구매를 메인 스토어와 통합해 끊김 없는 쇼핑 경험을 제공하세요.',
  ctaTitle: '전 세계 60만+ 판매자가 신뢰합니다',
}

const ja: GroupBuyingCopy = {
  title: 'グループバイ売上に火をつけよう\n新規顧客と売上をカバー',
  subtitle: 'グループバイ経済でスケール。ARVIX グループバイツールがローンチパートナーです。',
  cta: '無料トライアルを開始',
  solutionTitle: 'ARVIX グループバイソリューション\nキャンペーンのコパイロット',
  solutionAccent: 'すばやいチェックアウト向けコミッション店舗',
  solutionDesc: 'すべてのパートナーに専用コミッションストアを用意し、購入を加速。',
  features: [
    { title: 'コミッション店舗', desc: 'すべての KOL 向け専用ショップ' },
    { title: '非公開グループバイショップ', desc: '招待制の限定ストアフロント' },
    { title: '自動適用オファー', desc: '割引が自動適用 — コード不要' },
    { title: '紹介キャンペーン＆コミッション', desc: '柔軟な紹介コミッション率' },
    { title: '商品別コミッション', desc: '商品ごとに異なる率を設定' },
    { title: 'ワンページチェックアウト', desc: '短いチェックアウト、高いコンバージョン' },
  ],
  socialTitle: 'マルチチャネルのソーシャルトラフィック\nまず盛り上げよう',
  socialDesc: 'あらゆるソーシャルチャネルからグループバイへより多くのショッパーを誘導。',
  partnerTitle: 'パートナー成果ハブ\nライブデータを一目で',
  partnerDesc: '各パートナーの売上をリアルタイムで追跡し、戦略を磨く。',
  siteTitle: 'ワンストップストア統合\nグループバイ ROI を最大化',
  siteDesc: 'グループバイをメインストアと統合し、シームレスな買い物体験を。',
  ctaTitle: '世界中 60 万以上の加盟店が信頼',
}

const vi: GroupBuyingCopy = {
  title: 'Thổi bùng doanh số group buy\nKhách mới và doanh thu đều lo',
  subtitle: 'Mở rộng với kinh tế group buy. Công cụ group buy ARVIX là đối tác ra mắt của bạn.',
  cta: 'Bắt đầu dùng thử miễn phí',
  solutionTitle: 'Giải pháp group buy ARVIX\nĐồng phi công chiến dịch',
  solutionAccent: 'Storefront hoa hồng cho checkout nhanh',
  solutionDesc: 'Cho mỗi đối tác một cửa hàng hoa hồng riêng để khách mua nhanh hơn.',
  features: [
    { title: 'Storefront hoa hồng', desc: 'Shop riêng cho mọi KOL' },
    { title: 'Shop group buy ẩn', desc: 'Storefront chỉ mời cho người mua được chọn' },
    { title: 'Ưu đãi tự áp dụng', desc: 'Giảm giá áp dụng tự động — không cần mã' },
    { title: 'Chiến dịch giới thiệu & hoa hồng', desc: 'Tỷ lệ hoa hồng giới thiệu linh hoạt' },
    { title: 'Hoa hồng theo sản phẩm', desc: 'Đặt tỷ lệ khác nhau theo sản phẩm' },
    { title: 'Checkout một trang', desc: 'Checkout ngắn hơn, chuyển đổi cao hơn' },
  ],
  socialTitle: 'Traffic xã hội đa kênh\nLàm nóng đám đông trước',
  socialDesc: 'Đưa thêm người mua vào group buy từ mọi kênh xã hội.',
  partnerTitle: 'Hub hiệu suất đối tác\nDữ liệu trực tiếp trong một cái nhìn',
  partnerDesc: 'Theo dõi doanh số từng đối tác theo thời gian thực và tinh chỉnh chiến lược.',
  siteTitle: 'Tích hợp cửa hàng một cửa\nTối đa ROI group buy',
  siteDesc: 'Hợp nhất group buy với cửa hàng chính cho trải nghiệm mua sắm liền mạch.',
  ctaTitle: 'Được hơn 600.000 người bán trên thế giới tin dùng',
}

const es: GroupBuyingCopy = {
  title: 'Enciende las ventas de group buy\nClientes nuevos e ingresos cubiertos',
  subtitle: 'Escala con la economía de group buy. Las herramientas ARVIX son tu socio de lanzamiento.',
  cta: 'Empezar prueba gratis',
  solutionTitle: 'Solución group buy ARVIX\nTu copiloto de campaña',
  solutionAccent: 'Tiendas con comisión para checkout rápido',
  solutionDesc: 'Dale a cada partner una tienda de comisión dedicada para que compren más rápido.',
  features: [
    { title: 'Tiendas con comisión', desc: 'Shops dedicados para cada KOL' },
    { title: 'Shops group buy ocultos', desc: 'Tiendas solo por invitación para compradores seleccionados' },
    { title: 'Ofertas autoaplicadas', desc: 'Los descuentos se aplican solos — sin códigos' },
    { title: 'Campañas de referidos y comisiones', desc: 'Tasas de comisión de referidos flexibles' },
    { title: 'Comisiones por producto', desc: 'Define tasas distintas por producto' },
    { title: 'Checkout de una página', desc: 'Checkout más corto, mayor conversión' },
  ],
  socialTitle: 'Tráfico social multicanal\nCalienta a la audiencia primero',
  socialDesc: 'Lleva más compradores a tus group buys desde cada canal social.',
  partnerTitle: 'Hub de rendimiento de partners\nDatos en vivo de un vistazo',
  partnerDesc: 'Sigue las ventas de cada partner en tiempo real y afina tu estrategia.',
  siteTitle: 'Integración de tienda one-stop\nMaximiza el ROI de group buy',
  siteDesc: 'Unifica group buys con tu tienda principal para una compra fluida.',
  ctaTitle: 'Más de 600.000 comercios confían en ARVIX',
}

const pt: GroupBuyingCopy = {
  title: 'Acenda as vendas de group buy\nClientes novos e receita cobertos',
  subtitle: 'Escale com a economia de group buy. As ferramentas ARVIX são seu parceiro de lançamento.',
  cta: 'Começar teste grátis',
  solutionTitle: 'Solução group buy ARVIX\nSeu copiloto de campanha',
  solutionAccent: 'Vitrines de comissão para checkout rápido',
  solutionDesc: 'Dê a cada parceiro uma loja de comissão dedicada para compras mais rápidas.',
  features: [
    { title: 'Vitrines de comissão', desc: 'Lojas dedicadas para cada KOL' },
    { title: 'Lojas group buy ocultas', desc: 'Vitrines só por convite para compradores selecionados' },
    { title: 'Ofertas autoaplicadas', desc: 'Descontos aplicados automaticamente — sem códigos' },
    { title: 'Campanhas de indicação e comissões', desc: 'Taxas de comissão de indicação flexíveis' },
    { title: 'Comissões por produto', desc: 'Defina taxas diferentes por produto' },
    { title: 'Checkout de uma página', desc: 'Checkout mais curto, maior conversão' },
  ],
  socialTitle: 'Tráfego social multicanal\nAqueça a multidão primeiro',
  socialDesc: 'Leve mais compradores aos seus group buys de todos os canais sociais.',
  partnerTitle: 'Hub de performance de parceiros\nDados ao vivo de relance',
  partnerDesc: 'Acompanhe as vendas de cada parceiro em tempo real e refine a estratégia.',
  siteTitle: 'Integração one-stop da loja\nMaximize o ROI de group buy',
  siteDesc: 'Unifique group buys com sua loja principal para uma experiência sem atrito.',
  ctaTitle: 'Mais de 600.000 comerciantes confiam na ARVIX',
}

const de: GroupBuyingCopy = {
  title: 'Group-Buy-Umsatz entfachen\nNeukunden und Revenue abgedeckt',
  subtitle: 'Skalieren Sie mit der Group-Buy-Wirtschaft. ARVIX-Group-Buy-Tools sind Ihr Launch-Partner.',
  cta: 'Kostenlose Testphase starten',
  solutionTitle: 'ARVIX Group-Buy-Lösung\nIhr Kampagnen-Copilot',
  solutionAccent: 'Provisions-Storefronts für schnellen Checkout',
  solutionDesc: 'Geben Sie jedem Partner einen eigenen Provisions-Store, damit Shopper schneller kaufen.',
  features: [
    { title: 'Provisions-Storefronts', desc: 'Eigene Shops für jeden KOL' },
    { title: 'Versteckte Group-Buy-Shops', desc: 'Nur-Einladung-Storefronts für ausgewählte Käufer' },
    { title: 'Automatisch angewendete Angebote', desc: 'Rabatte gelten automatisch — keine Codes nötig' },
    { title: 'Referral-Kampagnen & Provisionen', desc: 'Flexible Referral-Provisionssätze' },
    { title: 'Provisionen pro Produkt', desc: 'Unterschiedliche Sätze je Produkt setzen' },
    { title: 'One-Page-Checkout', desc: 'Kürzerer Checkout, höhere Conversion' },
  ],
  socialTitle: 'Multichannel Social Traffic\nHeizen Sie die Crowd zuerst an',
  socialDesc: 'Führen Sie mehr Shopper aus jedem Social-Kanal in Ihre Group Buys.',
  partnerTitle: 'Partner-Performance-Hub\nLivedaten auf einen Blick',
  partnerDesc: 'Verfolgen Sie den Umsatz jedes Partners in Echtzeit und verfeinern Sie die Strategie.',
  siteTitle: 'One-Stop-Store-Integration\nGroup-Buy-ROI maximieren',
  siteDesc: 'Vereinen Sie Group Buys mit Ihrem Hauptstore für ein nahtloses Einkaufserlebnis.',
  ctaTitle: 'Über 600.000 Händler weltweit vertrauen ARVIX',
}

const fr: GroupBuyingCopy = {
  title: 'Allumez les ventes group buy\nNouveaux clients et revenus couverts',
  subtitle: 'Scalez avec l’économie group buy. Les outils ARVIX sont votre partenaire de lancement.',
  cta: 'Démarrer l’essai gratuit',
  solutionTitle: 'Solution group buy ARVIX\nVotre copilote de campagne',
  solutionAccent: 'Vitrines à commission pour un checkout rapide',
  solutionDesc: 'Offrez à chaque partenaire une boutique à commission dédiée pour des achats plus rapides.',
  features: [
    { title: 'Vitrines à commission', desc: 'Boutiques dédiées pour chaque KOL' },
    { title: 'Boutiques group buy cachées', desc: 'Vitrines sur invitation pour acheteurs sélectionnés' },
    { title: 'Offres auto-appliquées', desc: 'Remises appliquées automatiquement — pas de codes' },
    { title: 'Campagnes de parrainage et commissions', desc: 'Taux de commission de parrainage flexibles' },
    { title: 'Commissions par produit', desc: 'Définissez des taux différents par produit' },
    { title: 'Checkout d’une page', desc: 'Checkout plus court, meilleure conversion' },
  ],
  socialTitle: 'Trafic social multicanal\nRéchauffez la foule d’abord',
  socialDesc: 'Amenez plus d’acheteurs dans vos group buys depuis chaque canal social.',
  partnerTitle: 'Hub de performance partenaires\nDonnées live en un coup d’œil',
  partnerDesc: 'Suivez les ventes de chaque partenaire en temps réel et affinez votre stratégie.',
  siteTitle: 'Intégration boutique one-stop\nMaximisez le ROI group buy',
  siteDesc: 'Unifiez les group buys avec votre boutique principale pour une expérience fluide.',
  ctaTitle: 'Plus de 600 000 marchands font confiance à ARVIX',
}


const copy: Partial<Record<Locale, GroupBuyingCopy>> & { 'zh-TW': GroupBuyingCopy; en: GroupBuyingCopy } = {
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

export default function GroupBuyingPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(175, 194, 251) 0%, rgb(169, 187, 255) 50%, rgb(57, 170, 209) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight whitespace-pre-line" style={{ color: '#00142D' }}>{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
            <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.cta}
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80" alt="ARVIX group buying" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-2 whitespace-pre-line" style={{ color: '#00142D' }}>{c.solutionTitle}</h2>
            <h2 className="text-xl font-black mb-4" style={{ color: '#5B5FF0' }}>{c.solutionAccent}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.solutionDesc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {c.features.map(item => (
                <div key={item.title} className="p-3 rounded-xl" style={{ backgroundColor: '#F4F7FC' }}>
                  <div className="font-bold text-sm mb-1" style={{ color: '#00142D' }}>{item.title}</div>
                  <div className="text-xs" style={{ color: '#687280' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80" alt="Group buy commission store" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.socialTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.socialDesc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80" alt="Group buy social traffic" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.partnerTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.partnerDesc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80" alt="Group buy performance" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.siteTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.siteDesc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80" alt="Group buy store integration" width={600} height={450} className="w-full h-auto" unoptimized />
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
