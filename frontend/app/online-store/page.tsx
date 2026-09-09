'use client'

import Image from 'next/image'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type OnlineStoreCopy = {
  title: string
  subtitle: string
  cta: string
  noCodeTitle: string
  noCodeSubtitle: string
  noCodeItems: { title: string; desc: string }[]
  onePageTitle: string
  onePageSubtitle: string
  steps: { step: string; title: string; desc: string }[]
  ordersTitle: string
  ordersSubtitle: string
  orderFeatures: string[]
  ctaTitle: string
  ctaSubtitle: string
}

const zhTW: OnlineStoreCopy = {
  title: '網路開店超簡單\n立即開始你的網路生意',
  subtitle: '想開網路商店？開店一切所需都在 ARVIX，從商品上架、信用卡結帳、出貨設定到行銷推廣，一站就能輕鬆搞定。',
  cta: '立即免費試用',
  noCodeTitle: '免寫程式也能打造品牌官網',
  noCodeSubtitle: '直覺式介面，讓你輕鬆建立專業品牌網站，不需要任何程式知識。',
  noCodeItems: [
    { title: '拖曳方式編輯', desc: '透過拖曳排列方式，輕鬆完成網店頁面建置，無需任何程式語法。' },
    { title: '多樣設計主題', desc: '多款精美版型主題，一鍵套用，快速打造高質感品牌網店。' },
    { title: 'ARVIX Payments', desc: '內建信用卡結帳；台灣出貨商店可再開通 7-11 貨到付款。' },
  ],
  onePageTitle: '實現高轉單率\n用一頁商店衝刺業績',
  onePageSubtitle: '3 步驟打造超強導購一頁商店，讓顧客快速完成購買，大幅提升轉換率。',
  steps: [
    { step: 'STEP 1', title: '選擇版型', desc: '從多款一頁商店版型中選擇最適合你商品的設計。' },
    { step: 'STEP 2', title: '編輯內容', desc: '拖曳方式快速編排商品資訊、圖片與購買按鈕。' },
    { step: 'STEP 3', title: '發布上線', desc: '一鍵發布，立即開始接單，輕鬆衝刺業績。' },
  ],
  ordersTitle: '事半功倍\n網店最強訂單管理工具',
  ordersSubtitle: '色塊化區分訂單類別，讓訂單管理更直覺高效，提升出貨效率。',
  orderFeatures: ['色塊化區分訂單類別', '未完成購物車結帳提醒', '拆單功能', '彈性匯出訂單報表'],
  ctaTitle: 'ARVIX 為你的網路開店做好一切準備！',
  ctaSubtitle: '全球超過 600,000 商家已使用 ARVIX',
}

const zhCN: OnlineStoreCopy = {
  title: '网络开店超简单\n立即开始你的网络生意',
  subtitle: '想开网络商店？开店一切所需都在 ARVIX，从商品上架、信用卡结账、出货设定到营销推广，一站就能轻松搞定。',
  cta: '立即免费试用',
  noCodeTitle: '免写程序也能打造品牌官网',
  noCodeSubtitle: '直觉式界面，让你轻松建立专业品牌网站，不需要任何程序知识。',
  noCodeItems: [
    { title: '拖曳方式编辑', desc: '通过拖曳排列方式，轻松完成网店页面建置，无需任何程序语法。' },
    { title: '多样设计主题', desc: '多款精美版型主题，一键套用，快速打造高质感品牌网店。' },
    { title: 'ARVIX Payments', desc: '内建信用卡结账，安全便利。' },
  ],
  onePageTitle: '实现高转单率\n用一页商店冲刺业绩',
  onePageSubtitle: '3 步骤打造超强导购一页商店，让顾客快速完成购买，大幅提升转化率。',
  steps: [
    { step: 'STEP 1', title: '选择版型', desc: '从多款一页商店版型中选择最适合你商品的设计。' },
    { step: 'STEP 2', title: '编辑内容', desc: '拖曳方式快速编排商品信息、图片与购买按钮。' },
    { step: 'STEP 3', title: '发布上线', desc: '一键发布，立即开始接单，轻松冲刺业绩。' },
  ],
  ordersTitle: '事半功倍\n网店最强订单管理工具',
  ordersSubtitle: '色块化区分订单类别，让订单管理更直觉高效，提升出货效率。',
  orderFeatures: ['色块化区分订单类别', '未完成购物车结账提醒', '拆单功能', '弹性导出订单报表'],
  ctaTitle: 'ARVIX 为你的网络开店做好一切准备！',
  ctaSubtitle: '全球超过 600,000 商家已使用 ARVIX',
}

const en: OnlineStoreCopy = {
  title: 'Launch online. Keep it simple.\nStart selling today.',
  subtitle: 'Everything you need to open an online store — catalog, card checkout, shipping setup, and marketing — in one ARVIX hub.',
  cta: 'Start free trial',
  noCodeTitle: 'Build a brand site without code',
  noCodeSubtitle: 'An intuitive builder so anyone can launch a professional brand storefront.',
  noCodeItems: [
    { title: 'Drag-and-drop editing', desc: 'Arrange pages visually — no programming required.' },
    { title: 'Curated themes', desc: 'Apply polished themes in one click for a premium look.' },
    { title: 'ARVIX Payments', desc: 'Built-in card checkout — secure and simple.' },
  ],
  onePageTitle: 'Higher conversion\nwith one-page stores',
  onePageSubtitle: 'Launch a high-converting landing store in three steps.',
  steps: [
    { step: 'STEP 1', title: 'Pick a layout', desc: 'Choose a one-page template that fits your product.' },
    { step: 'STEP 2', title: 'Edit content', desc: 'Drag in product info, images, and buy buttons.' },
    { step: 'STEP 3', title: 'Publish', desc: 'Go live in one click and start taking orders.' },
  ],
  ordersTitle: 'Order ops that scale\nwith your store',
  ordersSubtitle: 'Color-coded statuses keep fulfillment fast and clear.',
  orderFeatures: ['Color-coded order types', 'Abandoned cart reminders', 'Split orders', 'Flexible order exports'],
  ctaTitle: 'ARVIX is ready for your online store',
  ctaSubtitle: 'Trusted by 600,000+ merchants worldwide',
}

const ko: OnlineStoreCopy = {
  title: '간편하게 온라인 오픈\n오늘부터 판매를 시작하세요.',
  subtitle: '상품 등록, 카드 결제, 배송 설정, 마케팅까지 — 온라인 스토어에 필요한 모든 것이 ARVIX 한곳에 있습니다.',
  cta: '무료 체험 시작',
  noCodeTitle: '코딩 없이 브랜드 사이트 구축',
  noCodeSubtitle: '누구나 전문적인 브랜드 스토어프론트를 열 수 있는 직관적인 빌더.',
  noCodeItems: [
    { title: '드래그 앤 드롭 편집', desc: '페이지를 시각적으로 배치 — 프로그래밍 불필요.' },
    { title: '엄선된 테마', desc: '세련된 테마를 원클릭으로 적용해 프리미엄 룩을 완성.' },
    { title: 'ARVIX Payments', desc: '내장 카드 결제 — 안전하고 간편합니다.' },
  ],
  onePageTitle: '더 높은 전환율\n원페이지 스토어로',
  onePageSubtitle: '세 단계로 고전환 랜딩 스토어를 런칭하세요.',
  steps: [
    { step: 'STEP 1', title: '레이아웃 선택', desc: '상품에 맞는 원페이지 템플릿을 고르세요.' },
    { step: 'STEP 2', title: '콘텐츠 편집', desc: '상품 정보, 이미지, 구매 버튼을 드래그해 배치.' },
    { step: 'STEP 3', title: '게시', desc: '원클릭으로 공개하고 바로 주문을 받으세요.' },
  ],
  ordersTitle: '스토어와 함께 성장하는\n주문 운영',
  ordersSubtitle: '색상 코딩된 상태로 출고를 빠르고 명확하게.',
  orderFeatures: ['색상 코딩 주문 유형', '장바구니 이탈 리마인더', '분할 주문', '유연한 주문 내보내기'],
  ctaTitle: 'ARVIX가 온라인 스토어를 준비했습니다',
  ctaSubtitle: '전 세계 60만+ 판매자가 ARVIX를 신뢰합니다',
}

const ja: OnlineStoreCopy = {
  title: 'オンライン開店をシンプルに\n今日から販売を始めよう。',
  subtitle: '商品登録、カード決済、配送設定、マーケティングまで — ネットショップに必要なすべてが ARVIX に集約。',
  cta: '無料トライアルを開始',
  noCodeTitle: 'コードなしでブランドサイトを構築',
  noCodeSubtitle: '直感的なビルダーで、誰でもプロ品質のブランドストアを公開できます。',
  noCodeItems: [
    { title: 'ドラッグ＆ドロップ編集', desc: 'ページを視覚的に配置 — プログラミング不要。' },
    { title: '厳選テーマ', desc: '洗練されたテーマをワンクリックで適用し、プレミアムな見た目に。' },
    { title: 'ARVIX Payments', desc: '内蔵カード決済 — 安全でシンプル。' },
  ],
  onePageTitle: '高いコンバージョン\nワンページストアで',
  onePageSubtitle: '3ステップで高コンバージョンのランディングストアを公開。',
  steps: [
    { step: 'STEP 1', title: 'レイアウトを選ぶ', desc: '商品に合うワンページテンプレートを選択。' },
    { step: 'STEP 2', title: 'コンテンツを編集', desc: '商品情報・画像・購入ボタンをドラッグで配置。' },
    { step: 'STEP 3', title: '公開', desc: 'ワンクリックで公開し、注文受付を開始。' },
  ],
  ordersTitle: 'ストアと共に拡張する\n注文オペレーション',
  ordersSubtitle: '色分けされたステータスで出荷を迅速かつ明確に。',
  orderFeatures: ['色分け注文タイプ', 'カゴ落ちリマインダー', '分割注文', '柔軟な注文エクスポート'],
  ctaTitle: 'ARVIX はオンラインストアの準備ができています',
  ctaSubtitle: '世界中 60 万以上の加盟店が ARVIX を利用',
}

const vi: OnlineStoreCopy = {
  title: 'Mở cửa hàng online thật đơn giản\nBắt đầu bán ngay hôm nay.',
  subtitle: 'Mọi thứ bạn cần để mở cửa hàng online — danh mục, thanh toán thẻ, thiết lập giao hàng và marketing — trong một trung tâm ARVIX.',
  cta: 'Bắt đầu dùng thử miễn phí',
  noCodeTitle: 'Xây trang thương hiệu không cần code',
  noCodeSubtitle: 'Trình dựng trực quan giúp bất kỳ ai cũng mở được cửa hàng thương hiệu chuyên nghiệp.',
  noCodeItems: [
    { title: 'Chỉnh sửa kéo-thả', desc: 'Sắp xếp trang trực quan — không cần lập trình.' },
    { title: 'Giao diện chọn lọc', desc: 'Áp dụng theme tinh tế chỉ một cú nhấp để có vẻ ngoài cao cấp.' },
    { title: 'ARVIX Payments', desc: 'Thanh toán thẻ tích hợp — an toàn và đơn giản.' },
  ],
  onePageTitle: 'Chuyển đổi cao hơn\nvới cửa hàng một trang',
  onePageSubtitle: 'Ra mắt cửa hàng landing chuyển đổi cao chỉ trong ba bước.',
  steps: [
    { step: 'STEP 1', title: 'Chọn bố cục', desc: 'Chọn mẫu một trang phù hợp với sản phẩm của bạn.' },
    { step: 'STEP 2', title: 'Chỉnh nội dung', desc: 'Kéo thả thông tin sản phẩm, hình ảnh và nút mua.' },
    { step: 'STEP 3', title: 'Xuất bản', desc: 'Lên sóng chỉ một cú nhấp và bắt đầu nhận đơn.' },
  ],
  ordersTitle: 'Vận hành đơn hàng\ntheo kịp cửa hàng của bạn',
  ordersSubtitle: 'Trạng thái mã màu giúp hoàn tất đơn nhanh và rõ ràng.',
  orderFeatures: ['Loại đơn mã màu', 'Nhắc giỏ hàng bỏ quên', 'Tách đơn', 'Xuất đơn linh hoạt'],
  ctaTitle: 'ARVIX sẵn sàng cho cửa hàng online của bạn',
  ctaSubtitle: 'Được hơn 600.000 người bán trên thế giới tin dùng',
}

const es: OnlineStoreCopy = {
  title: 'Lanza online. Manténlo simple.\nEmpieza a vender hoy.',
  subtitle: 'Todo lo que necesitas para abrir una tienda online — catálogo, checkout con tarjeta, envíos y marketing — en un solo hub ARVIX.',
  cta: 'Empieza la prueba gratis',
  noCodeTitle: 'Crea un sitio de marca sin código',
  noCodeSubtitle: 'Un constructor intuitivo para que cualquiera lance un escaparate profesional.',
  noCodeItems: [
    { title: 'Edición arrastrar y soltar', desc: 'Organiza páginas visualmente — sin programación.' },
    { title: 'Temas curados', desc: 'Aplica temas pulidos en un clic para un look premium.' },
    { title: 'ARVIX Payments', desc: 'Checkout con tarjeta integrado — seguro y simple.' },
  ],
  onePageTitle: 'Mayor conversión\ncon tiendas de una página',
  onePageSubtitle: 'Lanza una tienda landing de alta conversión en tres pasos.',
  steps: [
    { step: 'STEP 1', title: 'Elige un diseño', desc: 'Elige una plantilla de una página que encaje con tu producto.' },
    { step: 'STEP 2', title: 'Edita el contenido', desc: 'Arrastra info del producto, imágenes y botones de compra.' },
    { step: 'STEP 3', title: 'Publica', desc: 'Sal en vivo en un clic y empieza a recibir pedidos.' },
  ],
  ordersTitle: 'Operaciones de pedidos\nque escalan con tu tienda',
  ordersSubtitle: 'Estados con código de color mantienen el fulfillment rápido y claro.',
  orderFeatures: ['Tipos de pedido con código de color', 'Recordatorios de carrito abandonado', 'Pedidos divididos', 'Exportaciones de pedidos flexibles'],
  ctaTitle: 'ARVIX está listo para tu tienda online',
  ctaSubtitle: 'Más de 600.000 comercios confían en ARVIX',
}

const pt: OnlineStoreCopy = {
  title: 'Lance online. Mantenha simples.\nComece a vender hoje.',
  subtitle: 'Tudo o que você precisa para abrir uma loja online — catálogo, checkout com cartão, frete e marketing — em um hub ARVIX.',
  cta: 'Começar teste grátis',
  noCodeTitle: 'Crie um site de marca sem código',
  noCodeSubtitle: 'Um construtor intuitivo para qualquer pessoa lançar uma vitrine profissional.',
  noCodeItems: [
    { title: 'Edição arrastar e soltar', desc: 'Organize páginas visualmente — sem programação.' },
    { title: 'Temas selecionados', desc: 'Aplique temas sofisticados em um clique para um visual premium.' },
    { title: 'ARVIX Payments', desc: 'Checkout com cartão integrado — seguro e simples.' },
  ],
  onePageTitle: 'Maior conversão\ncom lojas de uma página',
  onePageSubtitle: 'Lance uma loja landing de alta conversão em três passos.',
  steps: [
    { step: 'STEP 1', title: 'Escolha um layout', desc: 'Escolha um template de uma página que combine com seu produto.' },
    { step: 'STEP 2', title: 'Edite o conteúdo', desc: 'Arraste info do produto, imagens e botões de compra.' },
    { step: 'STEP 3', title: 'Publique', desc: 'Entre no ar em um clique e comece a receber pedidos.' },
  ],
  ordersTitle: 'Operações de pedidos\nque escalam com sua loja',
  ordersSubtitle: 'Status com código de cores mantêm o fulfillment rápido e claro.',
  orderFeatures: ['Tipos de pedido com código de cores', 'Lembretes de carrinho abandonado', 'Pedidos divididos', 'Exportações de pedidos flexíveis'],
  ctaTitle: 'A ARVIX está pronta para sua loja online',
  ctaSubtitle: 'Mais de 600.000 lojistas confiam na ARVIX',
}

const de: OnlineStoreCopy = {
  title: 'Online starten. Einfach halten.\nHeute verkaufen beginnen.',
  subtitle: 'Alles für Ihren Onlineshop — Katalog, Kartencheckout, Versand und Marketing — in einem ARVIX-Hub.',
  cta: 'Kostenlos testen',
  noCodeTitle: 'Markenseite ohne Code erstellen',
  noCodeSubtitle: 'Ein intuitiver Builder, mit dem jeder ein professionelles Marken-Storefront launcht.',
  noCodeItems: [
    { title: 'Drag-and-Drop-Bearbeitung', desc: 'Seiten visuell anordnen — ohne Programmierung.' },
    { title: 'Kuratierte Themes', desc: 'Polierte Themes mit einem Klick für einen Premium-Look.' },
    { title: 'ARVIX Payments', desc: 'Integrierter Kartencheckout — sicher und einfach.' },
  ],
  onePageTitle: 'Höhere Conversion\nmit One-Page-Shops',
  onePageSubtitle: 'Starten Sie in drei Schritten einen hochkonvertierenden Landing-Shop.',
  steps: [
    { step: 'STEP 1', title: 'Layout wählen', desc: 'Wählen Sie ein One-Page-Template, das zu Ihrem Produkt passt.' },
    { step: 'STEP 2', title: 'Inhalt bearbeiten', desc: 'Ziehen Sie Produktinfos, Bilder und Kauf-Buttons hinein.' },
    { step: 'STEP 3', title: 'Veröffentlichen', desc: 'Mit einem Klick live gehen und Bestellungen annehmen.' },
  ],
  ordersTitle: 'Auftragsbetrieb\nder mit Ihrem Shop skaliert',
  ordersSubtitle: 'Farbcodierte Status halten die Erfüllung schnell und klar.',
  orderFeatures: ['Farbcodierte Auftragstypen', 'Erinnerungen an abgebrochene Warenkörbe', 'Geteilte Bestellungen', 'Flexible Auftragsexporte'],
  ctaTitle: 'ARVIX ist bereit für Ihren Onlineshop',
  ctaSubtitle: 'Über 600.000 Händler weltweit vertrauen ARVIX',
}

const fr: OnlineStoreCopy = {
  title: 'Lancez-vous en ligne. Restez simple.\nCommencez à vendre aujourd’hui.',
  subtitle: 'Tout pour ouvrir une boutique en ligne — catalogue, paiement par carte, livraison et marketing — dans un hub ARVIX.',
  cta: 'Démarrer l’essai gratuit',
  noCodeTitle: 'Créez un site de marque sans code',
  noCodeSubtitle: 'Un constructeur intuitif pour que chacun lance une vitrine de marque professionnelle.',
  noCodeItems: [
    { title: 'Édition glisser-déposer', desc: 'Organisez les pages visuellement — sans programmation.' },
    { title: 'Thèmes sélectionnés', desc: 'Appliquez des thèmes soignés en un clic pour un look premium.' },
    { title: 'ARVIX Payments', desc: 'Paiement par carte intégré — sécurisé et simple.' },
  ],
  onePageTitle: 'Plus de conversion\navec des boutiques une page',
  onePageSubtitle: 'Lancez une boutique landing à forte conversion en trois étapes.',
  steps: [
    { step: 'STEP 1', title: 'Choisir une mise en page', desc: 'Choisissez un modèle une page adapté à votre produit.' },
    { step: 'STEP 2', title: 'Éditer le contenu', desc: 'Glissez infos produit, images et boutons d’achat.' },
    { step: 'STEP 3', title: 'Publier', desc: 'Mettez en ligne en un clic et commencez à recevoir des commandes.' },
  ],
  ordersTitle: 'Opérations commandes\nqui évoluent avec votre boutique',
  ordersSubtitle: 'Des statuts codés couleur pour une préparation rapide et claire.',
  orderFeatures: ['Types de commande codés couleur', 'Rappels de panier abandonné', 'Commandes fractionnées', 'Exports de commandes flexibles'],
  ctaTitle: 'ARVIX est prêt pour votre boutique en ligne',
  ctaSubtitle: 'Plus de 600 000 marchands font confiance à ARVIX',
}

const copy: Partial<Record<Locale, OnlineStoreCopy>> & { 'zh-TW': OnlineStoreCopy; en: OnlineStoreCopy } = {
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

export default function OnlineStorePage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(244, 247, 252) 0%, rgb(122, 210, 254) 50%, rgb(0, 97, 255) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight whitespace-pre-line" style={{ color: '#00142D' }}>{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
            <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.cta}
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80" alt="ARVIX online store" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>{c.noCodeTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.noCodeSubtitle}</p>
            <div className="space-y-4">
              {c.noCodeItems.map(item => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <div>
                    <span className="font-semibold block" style={{ color: '#00142D' }}>{item.title}</span>
                    <span className="text-sm" style={{ color: '#687280' }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80" alt="ARVIX drag-and-drop builder" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.onePageTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.onePageSubtitle}</p>
            <div className="space-y-4">
              {c.steps.map(item => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="text-sm font-black px-3 py-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0', color: '#fff' }}>{item.step}</span>
                  <div>
                    <span className="font-semibold block" style={{ color: '#00142D' }}>{item.title}</span>
                    <span className="text-sm" style={{ color: '#687280' }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80" alt="ARVIX one-page store" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.ordersTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.ordersSubtitle}</p>
            <div className="space-y-3">
              {c.orderFeatures.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80" alt="ARVIX order management" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ background: 'linear-gradient(270.52deg, rgb(0, 79, 209) 0%, rgb(37, 124, 255) 100%)' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.ctaTitle}</h2>
          <p className="text-white mb-8 opacity-80">{c.ctaSubtitle}</p>
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
