'use client'

import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'
import type { Locale } from '../../../lib/i18n'

type ShopEfficiencyCopy = {
  title: string
  subtitle: string
  cta: string
  keysTitle: string
  keys: { title: string; desc: string }[]
  expertTitle: string
  sections: { title: string; items: string[]; img: string; alt: string }[]
  ctaTitle: string
  ctaSubtitle: string
}

const zhTW: ShopEfficiencyCopy = {
  title: '商店營運效率解決方案',
  subtitle: 'ARVIX 提供一站式操作介面 x 自動化訂單管理 x 多元銷售管道管理，全面協助商家在「商店準備」、「銷售管理」及「售後服務」過程中，提升商店營運效率，有效節省人力成本！',
  cta: '立即免費試用',
  keysTitle: 'ARVIX 解決商店營運的重要關鍵',
  keys: [
    { title: '一站式後台管理', desc: '所有商店管理功能集中在單一後台，操作直覺簡單，大幅降低學習成本。' },
    { title: '自動化訂單管理', desc: '訂單自動處理、通知、追蹤，大幅減少人工作業，提升處理效率。' },
    { title: '多管道整合', desc: '網店、POS、社群購物統一管理，數據即時同步，掌握全通路銷售狀況。' },
  ],
  expertTitle: '最全方位的零售整合專家，完整提升商家營運效率！',
  sections: [
    { title: '品牌開店前置作業', items: ['信用卡結帳與出貨設定', '多元網頁活動頁面', '大量批次管理及 Open API'], img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'ARVIX 一站完成品牌開店前置作業' },
    { title: '銷售與訂單管理', items: ['多元銷售管道管理', '商品管理', '訂單管理', '庫存管理'], img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80', alt: 'ARVIX 整合多元銷售通路，並提供完整的後台商品、訂單及庫存管理' },
    { title: '出貨及售後服務', items: ['訊息中心', '電子發票服務', '對帳管理工具'], img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80', alt: 'ARVIX 提供品牌完整的出貨及售後服務' },
  ],
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即加入，開始你的全通路零售之旅',
}

const zhCN: ShopEfficiencyCopy = {
  title: '商店运营效率解决方案',
  subtitle: 'ARVIX 提供一站式操作界面 x 自动化订单管理 x 多元销售管道管理，全面协助商家在「商店准备」、「销售管理」及「售后服务」过程中，提升商店运营效率，有效节省人力成本！',
  cta: '立即免费试用',
  keysTitle: 'ARVIX 解决商店运营的重要关键',
  keys: [
    { title: '一站式后台管理', desc: '所有商店管理功能集中在单一后台，操作直觉简单，大幅降低学习成本。' },
    { title: '自动化订单管理', desc: '订单自动处理、通知、追踪，大幅减少人工作业，提升处理效率。' },
    { title: '多管道整合', desc: '网店、POS、社群购物统一管理，数据即时同步，掌握全渠道销售状况。' },
  ],
  expertTitle: '最全方位的零售整合专家，完整提升商家运营效率！',
  sections: [
    { title: '品牌开店前置作业', items: ['信用卡结账与出货设定', '多元网页活动页面', '大量批次管理及 Open API'], img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'ARVIX 一站完成品牌开店前置作业' },
    { title: '销售与订单管理', items: ['多元销售管道管理', '商品管理', '订单管理', '库存管理'], img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80', alt: 'ARVIX 整合多元销售渠道' },
    { title: '出货及售后服务', items: ['消息中心', '电子发票服务', '对账管理工具'], img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80', alt: 'ARVIX 提供品牌完整的出货及售后服务' },
  ],
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即加入，开始你的全渠道零售之旅',
}

const en: ShopEfficiencyCopy = {
  title: 'Store operations efficiency',
  subtitle: 'One UI × automated orders × multi-channel selling — streamline prep, sales, and after-sales while cutting labor cost.',
  cta: 'Start free trial',
  keysTitle: 'Keys to efficient store ops',
  keys: [
    { title: 'One admin for everything', desc: 'All store tools in one intuitive back office — lower learning curve.' },
    { title: 'Automated order ops', desc: 'Auto process, notify, and track orders with far less manual work.' },
    { title: 'Multi-channel unity', desc: 'Online, POS, and social commerce managed together with live sync.' },
  ],
  expertTitle: 'Full-stack retail integration to lift operating efficiency',
  sections: [
    { title: 'Pre-launch brand setup', items: ['Card checkout & shipping setup', 'Campaign landing pages', 'Bulk tools & Open API'], img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'Brand storefront prep' },
    { title: 'Sales & order management', items: ['Multi-channel selling', 'Products', 'Orders', 'Inventory'], img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80', alt: 'Sales and inventory ops' },
    { title: 'Fulfillment & after-sales', items: ['Message center', 'E-invoicing', 'Reconciliation tools'], img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80', alt: 'Fulfillment and support' },
  ],
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  ctaSubtitle: 'Join and start your omnichannel journey',
}

const ko: ShopEfficiencyCopy = {
  title: '스토어 운영 효율 솔루션',
  subtitle: '원스톱 UI × 자동 주문 관리 × 멀티채널 판매 — 준비부터 판매·애프터서비스까지 운영을 간소화하고 인건비를 절감하세요.',
  cta: '무료 체험 시작',
  keysTitle: '효율적인 스토어 운영의 핵심',
  keys: [
    { title: '올인원 관리자', desc: '모든 스토어 도구를 직관적인 하나의 백오피스에서 — 학습 부담을 낮춥니다.' },
    { title: '자동 주문 운영', desc: '주문 처리·알림·추적을 자동화해 수작업을 크게 줄입니다.' },
    { title: '멀티채널 통합', desc: '온라인, POS, 소셜 커머스를 함께 관리하고 실시간으로 동기화합니다.' },
  ],
  expertTitle: '운영 효율을 높이는 풀스택 리테일 통합',
  sections: [
    { title: '브랜드 오픈 전 준비', items: ['카드 결제 & 배송 설정', '캠페인 랜딩 페이지', '대량 도구 & Open API'], img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: '브랜드 스토어프론트 준비' },
    { title: '판매 & 주문 관리', items: ['멀티채널 판매', '상품', '주문', '재고'], img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80', alt: '판매 및 재고 운영' },
    { title: '출고 & 애프터서비스', items: ['메시지 센터', '전자 인보이스', '정산 도구'], img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80', alt: '출고 및 지원' },
  ],
  ctaTitle: '전 세계 600,000+ 셀러가 신뢰하는 ARVIX',
  ctaSubtitle: '합류하고 옴니채널 여정을 시작하세요',
}

const ja: ShopEfficiencyCopy = {
  title: 'ストア運営効率化ソリューション',
  subtitle: 'ワンUI × 自動注文管理 × マルチチャネル販売 — 準備・販売・アフターまで整え、人件費を削減。',
  cta: '無料トライアルを開始',
  keysTitle: '効率的なストア運営の鍵',
  keys: [
    { title: 'すべてを一つの管理画面で', desc: 'ストアツールを直感的な一つのバックオフィスに集約 — 学習コストを下げます。' },
    { title: '注文の自動化', desc: '処理・通知・追跡を自動化し、手作業を大幅に削減。' },
    { title: 'マルチチャネル統合', desc: 'オンライン・POS・ソーシャルコマースを一括管理し、リアルタイム同期。' },
  ],
  expertTitle: '運営効率を高めるフルスタック小売統合',
  sections: [
    { title: 'ブランド開店前の準備', items: ['カード決済＆配送設定', 'キャンペーンLP', '一括ツール＆Open API'], img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'ブランドストアフロント準備' },
    { title: '販売＆注文管理', items: ['マルチチャネル販売', '商品', '注文', '在庫'], img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80', alt: '販売と在庫オペレーション' },
    { title: '出荷＆アフターサービス', items: ['メッセージセンター', '電子インボイス', '照合ツール'], img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80', alt: '出荷とサポート' },
  ],
  ctaTitle: '世界中の 600,000+ のマーチャントに信頼されています',
  ctaSubtitle: '参加してオムニチャネルの旅を始めましょう',
}

const vi: ShopEfficiencyCopy = {
  title: 'Giải pháp hiệu quả vận hành cửa hàng',
  subtitle: 'Một giao diện × đơn hàng tự động × bán đa kênh — tinh gọn chuẩn bị, bán hàng và hậu mãi, cắt chi phí nhân sự.',
  cta: 'Bắt đầu dùng thử miễn phí',
  keysTitle: 'Chìa khóa vận hành cửa hàng hiệu quả',
  keys: [
    { title: 'Một admin cho mọi thứ', desc: 'Mọi công cụ cửa hàng trong một back office trực quan — giảm đường cong học.' },
    { title: 'Vận hành đơn tự động', desc: 'Tự động xử lý, thông báo và theo dõi đơn với ít thao tác thủ công hơn nhiều.' },
    { title: 'Thống nhất đa kênh', desc: 'Online, POS và thương mại xã hội quản lý chung với đồng bộ trực tiếp.' },
  ],
  expertTitle: 'Tích hợp bán lẻ toàn diện để nâng hiệu quả vận hành',
  sections: [
    { title: 'Chuẩn bị trước khi ra mắt thương hiệu', items: ['Thanh toán thẻ & thiết lập giao hàng', 'Landing page chiến dịch', 'Công cụ hàng loạt & Open API'], img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'Chuẩn bị storefront thương hiệu' },
    { title: 'Quản lý bán hàng & đơn', items: ['Bán đa kênh', 'Sản phẩm', 'Đơn hàng', 'Tồn kho'], img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80', alt: 'Vận hành bán và tồn kho' },
    { title: 'Giao hàng & hậu mãi', items: ['Trung tâm tin nhắn', 'Hóa đơn điện tử', 'Công cụ đối soát'], img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80', alt: 'Giao hàng và hỗ trợ' },
  ],
  ctaTitle: 'Được hơn 600.000 thương nhân trên thế giới tin dùng',
  ctaSubtitle: 'Tham gia và bắt đầu hành trình omnichannel của bạn',
}

const es: ShopEfficiencyCopy = {
  title: 'Eficiencia operativa de la tienda',
  subtitle: 'Una UI × pedidos automatizados × venta multicanal — agiliza preparación, ventas y posventa mientras reduces costes de personal.',
  cta: 'Empieza la prueba gratis',
  keysTitle: 'Claves para una operación eficiente',
  keys: [
    { title: 'Un admin para todo', desc: 'Todas las herramientas de la tienda en un back office intuitivo — menor curva de aprendizaje.' },
    { title: 'Pedidos automatizados', desc: 'Procesa, notifica y rastrea pedidos automáticamente con mucho menos trabajo manual.' },
    { title: 'Unidad multicanal', desc: 'Online, POS y social commerce gestionados juntos con sincronización en vivo.' },
  ],
  expertTitle: 'Integración retail completa para elevar la eficiencia operativa',
  sections: [
    { title: 'Preparación previa al lanzamiento', items: ['Checkout con tarjeta y envíos', 'Landing pages de campaña', 'Herramientas masivas y Open API'], img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'Preparación de la tienda de marca' },
    { title: 'Ventas y pedidos', items: ['Venta multicanal', 'Productos', 'Pedidos', 'Inventario'], img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80', alt: 'Operaciones de ventas e inventario' },
    { title: 'Cumplimiento y posventa', items: ['Centro de mensajes', 'Facturación electrónica', 'Herramientas de conciliación'], img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80', alt: 'Cumplimiento y soporte' },
  ],
  ctaTitle: 'Más de 600.000 comercios en el mundo confían en ARVIX',
  ctaSubtitle: 'Únete y comienza tu viaje omnicanal',
}

const pt: ShopEfficiencyCopy = {
  title: 'Eficiência operacional da loja',
  subtitle: 'Uma UI × pedidos automatizados × venda multicanal — agilize preparação, vendas e pós-venda cortando custos de mão de obra.',
  cta: 'Começar teste grátis',
  keysTitle: 'Chaves para operações eficientes',
  keys: [
    { title: 'Um admin para tudo', desc: 'Todas as ferramentas da loja em um back office intuitivo — curva de aprendizado menor.' },
    { title: 'Pedidos automatizados', desc: 'Processe, notifique e rastreie pedidos automaticamente com bem menos trabalho manual.' },
    { title: 'Unidade multicanal', desc: 'Online, POS e social commerce geridos juntos com sincronização ao vivo.' },
  ],
  expertTitle: 'Integração de varejo completa para elevar a eficiência operacional',
  sections: [
    { title: 'Preparação pré-lançamento da marca', items: ['Checkout com cartão e frete', 'Landing pages de campanha', 'Ferramentas em massa e Open API'], img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'Preparação da vitrine da marca' },
    { title: 'Vendas e pedidos', items: ['Venda multicanal', 'Produtos', 'Pedidos', 'Estoque'], img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80', alt: 'Operações de vendas e estoque' },
    { title: 'Fulfillment e pós-venda', items: ['Central de mensagens', 'Nota fiscal eletrônica', 'Ferramentas de conciliação'], img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80', alt: 'Fulfillment e suporte' },
  ],
  ctaTitle: 'Mais de 600.000 comerciantes no mundo confiam na ARVIX',
  ctaSubtitle: 'Participe e comece sua jornada omnichannel',
}

const de: ShopEfficiencyCopy = {
  title: 'Effizienz im Store-Betrieb',
  subtitle: 'Eine UI × automatisierte Bestellungen × Multichannel-Verkauf — Prep, Sales und After-Sales straffen und Personalkosten senken.',
  cta: 'Kostenlos testen',
  keysTitle: 'Schlüssel für effizienten Store-Betrieb',
  keys: [
    { title: 'Ein Admin für alles', desc: 'Alle Store-Tools in einem intuitiven Backoffice — flachere Lernkurve.' },
    { title: 'Automatisierte Bestellungen', desc: 'Bestellungen automatisch verarbeiten, benachrichtigen und tracken — deutlich weniger Handarbeit.' },
    { title: 'Multichannel-Einheit', desc: 'Online, POS und Social Commerce gemeinsam mit Live-Sync verwalten.' },
  ],
  expertTitle: 'Full-Stack-Retail-Integration für mehr Betriebseffizienz',
  sections: [
    { title: 'Vorbereitung vor dem Markenstart', items: ['Kartencheckout & Versand-Setup', 'Kampagnen-Landingpages', 'Bulk-Tools & Open API'], img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'Vorbereitung der Marken-Storefront' },
    { title: 'Verkauf & Bestellmanagement', items: ['Multichannel-Verkauf', 'Produkte', 'Bestellungen', 'Lager'], img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80', alt: 'Verkaufs- und Lagerbetrieb' },
    { title: 'Fulfillment & After-Sales', items: ['Nachrichtencenter', 'E-Rechnungen', 'Abstimmungs-Tools'], img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80', alt: 'Fulfillment und Support' },
  ],
  ctaTitle: 'Mehr als 600.000 Händler weltweit vertrauen ARVIX',
  ctaSubtitle: 'Mitmachen und deine Omnichannel-Reise starten',
}

const fr: ShopEfficiencyCopy = {
  title: 'Efficacité opérationnelle de la boutique',
  subtitle: 'Une UI × commandes automatisées × vente multicanale — fluidifiez préparation, ventes et après-vente tout en réduisant les coûts de main-d’œuvre.',
  cta: 'Démarrer l’essai gratuit',
  keysTitle: 'Clés d’une exploitation boutique efficace',
  keys: [
    { title: 'Un admin pour tout', desc: 'Tous les outils boutique dans un back-office intuitif — courbe d’apprentissage réduite.' },
    { title: 'Commandes automatisées', desc: 'Traitez, notifiez et suivez les commandes automatiquement avec bien moins de travail manuel.' },
    { title: 'Unité multicanale', desc: 'Online, POS et social commerce gérés ensemble avec sync en direct.' },
  ],
  expertTitle: 'Intégration retail complète pour hausser l’efficacité opérationnelle',
  sections: [
    { title: 'Préparation avant le lancement', items: ['Paiement carte & configuration livraison', 'Landing pages de campagne', 'Outils bulk & Open API'], img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'Préparation de la vitrine de marque' },
    { title: 'Ventes & gestion des commandes', items: ['Vente multicanale', 'Produits', 'Commandes', 'Stock'], img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80', alt: 'Opérations ventes et stock' },
    { title: 'Fulfillment & après-vente', items: ['Centre de messages', 'Facturation électronique', 'Outils de rapprochement'], img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80', alt: 'Fulfillment et support' },
  ],
  ctaTitle: 'Plus de 600 000 marchands dans le monde font confiance à ARVIX',
  ctaSubtitle: 'Rejoignez-nous et démarrez votre parcours omnicanal',
}

const copy: Partial<Record<Locale, ShopEfficiencyCopy>> & { 'zh-TW': ShopEfficiencyCopy; en: ShopEfficiencyCopy } = {
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

export default function ShopEfficiencyPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-20" style={{ background: 'linear-gradient(rgb(0, 20, 45) 0%, rgb(0, 65, 147) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>{c.subtitle}</p>
            <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>{c.cta}</a>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" alt={c.title} className="w-full rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.keysTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {c.keys.map((item) => (
              <div key={item.title} className="p-8 rounded-2xl" style={{ backgroundColor: '#F4F7FC' }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#00142D' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#687280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20" style={{ backgroundColor: '#F2F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-16" style={{ color: '#00142D' }}>{c.expertTitle}</h2>
          <div className="space-y-20">
            {c.sections.map((s, i) => (
              <div key={s.title} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}>
                <div className="flex-1">
                  <h3 className="text-2xl font-black mb-4" style={{ color: '#00142D' }}>{s.title}</h3>
                  <ul className="space-y-2">
                    {s.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#354253' }}>
                        <span style={{ color: '#5B5FF0' }}>✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <img src={s.img} alt={s.alt} className="w-full rounded-2xl shadow-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.ctaTitle}</h2>
          <p className="text-white/70 mb-8">{c.ctaSubtitle}</p>
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>{c.cta}</a>
        </div>
      </section>
    </main>
  )
}
