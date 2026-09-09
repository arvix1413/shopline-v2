'use client'
import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'
import type { Locale } from '../../../lib/i18n'
import PricingCheckoutButton from '../../components/PricingCheckoutButton'

const checkoutPlans = ['starter', 'growth', 'omo'] as const

type PricingCopy = {
  title: string
  subtitle: string
  monthly: string
  yearly: string
  save: string
  popular: string
  limitedTitle: string
  limitedSubtitle: string
  commonFeatures: string[]
  ctaTitle: string
  ctaSubtitle: string
  ctaButton: string
  plans: {
    name: string
    price: string
    period: string
    desc: string
    features: string[]
    cta: string
    popular: boolean
    color: string
  }[]
}

const zhTW: PricingCopy = {
  title: '選擇最適合你的方案',
  subtitle: '立即開始免費試用，無需信用卡，14 天免費體驗所有功能',
  monthly: '月繳',
  yearly: '年繳',
  save: '省 20%',
  popular: '最受歡迎',
  limitedTitle: 'ARVIX 限定方案',
  limitedSubtitle: '所有方案均包含以下核心功能',
  commonFeatures: ['SSL 安全憑證', '無限頻寬', '行動裝置優化', '信用卡結帳', '宅配／台灣 7-11（依商店）', 'SEO 工具', '折扣碼管理', '24/7 系統監控'],
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即開始，14 天免費試用',
  ctaButton: '立即免費試用',
  plans: [
    {
      name: '網店探索者', price: 'NT$990', period: '/月', desc: '適合剛起步的品牌，快速建立網路商店',
      features: ['網路商店', '無限商品上架', '基本版型主題', '訂單管理', '基本客服支援', 'SSL 安全憑證'],
      cta: '免費試用', popular: false, color: '#5B5FF0',
    },
    {
      name: '電商戰略家', price: 'NT$1,990', period: '/月', desc: '適合成長中的品牌，強化行銷與數據能力',
      features: ['網店探索者全部功能', '社群購物', '分眾行銷 RFIM', 'Shoplytics 數據分析', '優先客服支援', '多語言商店'],
      cta: '免費試用', popular: true, color: '#5B5FF0',
    },
    {
      name: 'OMO 大師', price: 'NT$3,990', period: '/月', desc: '適合線上線下整合的品牌，實現全通路零售',
      features: ['電商戰略家全部功能', 'POS 零售系統', 'Smart OMO', '全通路庫存管理', '專屬顧問服務', 'API 串接'],
      cta: '免費試用', popular: false, color: '#5B5FF0',
    },
    {
      name: '全通路領航員', price: '聯繫我們', period: '', desc: '適合大型品牌，量身打造全通路解決方案',
      features: ['OMO 大師全部功能', 'Shopper App', '企業級 API', '專屬技術支援', '客製化開發', '多店管理'],
      cta: '預約諮詢', popular: false, color: '#00142D',
    },
  ],
}

const zhCN: PricingCopy = {
  title: '选择最适合你的方案',
  subtitle: '立即开始免费试用，无需信用卡，14 天免费体验所有功能',
  monthly: '月付',
  yearly: '年付',
  save: '省 20%',
  popular: '最受欢迎',
  limitedTitle: 'ARVIX 限定方案',
  limitedSubtitle: '所有方案均包含以下核心功能',
  commonFeatures: ['SSL 安全证书', '无限带宽', '移动端优化', '信用卡结账', '宅配出货', 'SEO 工具', '折扣码管理', '24/7 系统监控'],
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即开始，14 天免费试用',
  ctaButton: '立即免费试用',
  plans: [
    {
      name: '网店探索者', price: 'NT$990', period: '/月', desc: '适合刚起步的品牌，快速建立网络商店',
      features: ['网络商店', '无限商品上架', '基本版型主题', '订单管理', '基本客服支持', 'SSL 安全证书'],
      cta: '免费试用', popular: false, color: '#5B5FF0',
    },
    {
      name: '电商战略家', price: 'NT$1,990', period: '/月', desc: '适合成长中的品牌，强化营销与数据能力',
      features: ['网店探索者全部功能', '社群购物', '分众营销 RFIM', 'Shoplytics 数据分析', '优先客服支持', '多语言商店'],
      cta: '免费试用', popular: true, color: '#5B5FF0',
    },
    {
      name: 'OMO 大师', price: 'NT$3,990', period: '/月', desc: '适合线上线下整合的品牌，实现全渠道零售',
      features: ['电商战略家全部功能', 'POS 零售系统', 'Smart OMO', '全渠道库存管理', '专属顾问服务', 'API 对接'],
      cta: '免费试用', popular: false, color: '#5B5FF0',
    },
    {
      name: '全渠道领航员', price: '联系我们', period: '', desc: '适合大型品牌，量身打造全渠道解决方案',
      features: ['OMO 大师全部功能', 'Shopper App', '企业级 API', '专属技术支持', '定制开发', '多店管理'],
      cta: '预约咨询', popular: false, color: '#00142D',
    },
  ],
}

const en: PricingCopy = {
  title: 'Choose the plan that fits you',
  subtitle: 'Start your free trial — no credit card required. Try every feature for 14 days.',
  monthly: 'Monthly',
  yearly: 'Yearly',
  save: 'Save 20%',
  popular: 'Most popular',
  limitedTitle: 'Included with every ARVIX plan',
  limitedSubtitle: 'Core features available on all plans',
  commonFeatures: ['SSL certificate', 'Unlimited bandwidth', 'Mobile optimized', 'Card checkout', 'Home delivery', 'SEO tools', 'Discount codes', '24/7 system monitoring'],
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  ctaSubtitle: 'Start today with a 14-day free trial',
  ctaButton: 'Start free trial',
  plans: [
    {
      name: 'Store Explorer', price: 'NT$990', period: '/mo', desc: 'For new brands ready to launch an online store',
      features: ['Online store', 'Unlimited products', 'Starter themes', 'Order management', 'Basic support', 'SSL certificate'],
      cta: 'Start free trial', popular: false, color: '#5B5FF0',
    },
    {
      name: 'Commerce Strategist', price: 'NT$1,990', period: '/mo', desc: 'For growing brands that need marketing and analytics',
      features: ['Everything in Store Explorer', 'Social commerce', 'RFIM segmentation', 'Shoplytics analytics', 'Priority support', 'Multi-language store'],
      cta: 'Start free trial', popular: true, color: '#5B5FF0',
    },
    {
      name: 'OMO Master', price: 'NT$3,990', period: '/mo', desc: 'For brands unifying online and offline retail',
      features: ['Everything in Commerce Strategist', 'Retail POS', 'Smart OMO', 'Omnichannel inventory', 'Dedicated advisor', 'API access'],
      cta: 'Start free trial', popular: false, color: '#5B5FF0',
    },
    {
      name: 'Omnichannel Navigator', price: 'Contact us', period: '', desc: 'For enterprise brands that need a tailored solution',
      features: ['Everything in OMO Master', 'Shopper App', 'Enterprise API', 'Dedicated tech support', 'Custom development', 'Multi-store management'],
      cta: 'Book a consult', popular: false, color: '#00142D',
    },
  ],
}

const ko: PricingCopy = {
  title: '나에게 맞는 플랜을 선택하세요',
  subtitle: '무료 체험을 시작하세요 — 신용카드 없이 14일간 모든 기능을 경험할 수 있습니다.',
  monthly: '월간',
  yearly: '연간',
  save: '20% 절약',
  popular: '가장 인기',
  limitedTitle: '모든 ARVIX 플랜에 포함',
  limitedSubtitle: '모든 플랜에서 제공되는 핵심 기능',
  commonFeatures: ['SSL 인증서', '무제한 대역폭', '모바일 최적화', '카드 결제', '택배 배송', 'SEO 도구', '할인 코드', '24/7 시스템 모니터링'],
  ctaTitle: '전 세계 60만+ 판매자가 ARVIX를 신뢰합니다',
  ctaSubtitle: '오늘 14일 무료 체험을 시작하세요',
  ctaButton: '무료 체험 시작',
  plans: [
    {
      name: 'Store Explorer', price: 'NT$990', period: '/월', desc: '온라인 스토어를 막 시작하는 브랜드에 적합',
      features: ['온라인 스토어', '무제한 상품', '스타터 테마', '주문 관리', '기본 지원', 'SSL 인증서'],
      cta: '무료 체험 시작', popular: false, color: '#5B5FF0',
    },
    {
      name: 'Commerce Strategist', price: 'NT$1,990', period: '/월', desc: '마케팅과 분석이 필요한 성장 브랜드에 적합',
      features: ['Store Explorer의 모든 기능', '소셜 커머스', 'RFIM 세그먼트', 'Shoplytics 분석', '우선 지원', '다국어 스토어'],
      cta: '무료 체험 시작', popular: true, color: '#5B5FF0',
    },
    {
      name: 'OMO Master', price: 'NT$3,990', period: '/월', desc: '온라인·오프라인 소매를 통합하는 브랜드에 적합',
      features: ['Commerce Strategist의 모든 기능', '리테일 POS', 'Smart OMO', '옴니채널 재고', '전담 어드바이저', 'API 액세스'],
      cta: '무료 체험 시작', popular: false, color: '#5B5FF0',
    },
    {
      name: 'Omnichannel Navigator', price: '문의하기', period: '', desc: '맞춤 솔루션이 필요한 엔터프라이즈 브랜드에 적합',
      features: ['OMO Master의 모든 기능', 'Shopper App', '엔터프라이즈 API', '전담 기술 지원', '맞춤 개발', '멀티 스토어 관리'],
      cta: '상담 예약', popular: false, color: '#00142D',
    },
  ],
}

const ja: PricingCopy = {
  title: 'あなたに合うプランを選ぶ',
  subtitle: '無料トライアルを開始 — クレジットカード不要。14日間すべての機能を試せます。',
  monthly: '月払い',
  yearly: '年払い',
  save: '20% お得',
  popular: '一番人気',
  limitedTitle: 'すべての ARVIX プランに含まれるもの',
  limitedSubtitle: '全プランで利用できるコア機能',
  commonFeatures: ['SSL 証明書', '無制限帯域', 'モバイル最適化', 'カード決済', '宅配', 'SEO ツール', '割引コード', '24/7 システム監視'],
  ctaTitle: '世界中 60 万以上の加盟店が ARVIX を利用',
  ctaSubtitle: '今日から 14 日間の無料トライアルを開始',
  ctaButton: '無料トライアルを開始',
  plans: [
    {
      name: 'Store Explorer', price: 'NT$990', period: '/月', desc: 'オンラインストアを立ち上げる新しいブランド向け',
      features: ['オンラインストア', '商品数無制限', 'スターターテーマ', '注文管理', '基本サポート', 'SSL 証明書'],
      cta: '無料トライアルを開始', popular: false, color: '#5B5FF0',
    },
    {
      name: 'Commerce Strategist', price: 'NT$1,990', period: '/月', desc: 'マーケティングと分析が必要な成長ブランド向け',
      features: ['Store Explorer のすべて', 'ソーシャルコマース', 'RFIM セグメンテーション', 'Shoplytics 分析', '優先サポート', '多言語ストア'],
      cta: '無料トライアルを開始', popular: true, color: '#5B5FF0',
    },
    {
      name: 'OMO Master', price: 'NT$3,990', period: '/月', desc: 'オンラインとオフラインを統合するブランド向け',
      features: ['Commerce Strategist のすべて', 'リテール POS', 'Smart OMO', 'オムニチャネル在庫', '専任アドバイザー', 'API アクセス'],
      cta: '無料トライアルを開始', popular: false, color: '#5B5FF0',
    },
    {
      name: 'Omnichannel Navigator', price: 'お問い合わせ', period: '', desc: 'オーダーメイドが必要なエンタープライズ向け',
      features: ['OMO Master のすべて', 'Shopper App', 'エンタープライズ API', '専任テクニカルサポート', 'カスタム開発', 'マルチストア管理'],
      cta: '相談を予約', popular: false, color: '#00142D',
    },
  ],
}

const vi: PricingCopy = {
  title: 'Chọn gói phù hợp với bạn',
  subtitle: 'Bắt đầu dùng thử miễn phí — không cần thẻ tín dụng. Trải nghiệm mọi tính năng trong 14 ngày.',
  monthly: 'Theo tháng',
  yearly: 'Theo năm',
  save: 'Tiết kiệm 20%',
  popular: 'Phổ biến nhất',
  limitedTitle: 'Có trong mọi gói ARVIX',
  limitedSubtitle: 'Tính năng cốt lõi trên tất cả các gói',
  commonFeatures: ['Chứng chỉ SSL', 'Băng thông không giới hạn', 'Tối ưu mobile', 'Thanh toán thẻ', 'Giao tận nhà', 'Công cụ SEO', 'Mã giảm giá', 'Giám sát hệ thống 24/7'],
  ctaTitle: 'Được hơn 600.000 người bán trên thế giới tin dùng',
  ctaSubtitle: 'Bắt đầu ngay với dùng thử miễn phí 14 ngày',
  ctaButton: 'Bắt đầu dùng thử miễn phí',
  plans: [
    {
      name: 'Store Explorer', price: 'NT$990', period: '/tháng', desc: 'Cho thương hiệu mới sẵn sàng mở cửa hàng online',
      features: ['Cửa hàng online', 'Sản phẩm không giới hạn', 'Theme khởi đầu', 'Quản lý đơn hàng', 'Hỗ trợ cơ bản', 'Chứng chỉ SSL'],
      cta: 'Bắt đầu dùng thử miễn phí', popular: false, color: '#5B5FF0',
    },
    {
      name: 'Commerce Strategist', price: 'NT$1,990', period: '/tháng', desc: 'Cho thương hiệu đang tăng trưởng cần marketing và phân tích',
      features: ['Mọi thứ trong Store Explorer', 'Thương mại xã hội', 'Phân khúc RFIM', 'Phân tích Shoplytics', 'Hỗ trợ ưu tiên', 'Cửa hàng đa ngôn ngữ'],
      cta: 'Bắt đầu dùng thử miễn phí', popular: true, color: '#5B5FF0',
    },
    {
      name: 'OMO Master', price: 'NT$3,990', period: '/tháng', desc: 'Cho thương hiệu hợp nhất bán lẻ online và offline',
      features: ['Mọi thứ trong Commerce Strategist', 'POS bán lẻ', 'Smart OMO', 'Tồn kho omnichannel', 'Cố vấn chuyên trách', 'Truy cập API'],
      cta: 'Bắt đầu dùng thử miễn phí', popular: false, color: '#5B5FF0',
    },
    {
      name: 'Omnichannel Navigator', price: 'Liên hệ', period: '', desc: 'Cho thương hiệu doanh nghiệp cần giải pháp tùy chỉnh',
      features: ['Mọi thứ trong OMO Master', 'Shopper App', 'API doanh nghiệp', 'Hỗ trợ kỹ thuật chuyên trách', 'Phát triển tùy chỉnh', 'Quản lý đa cửa hàng'],
      cta: 'Đặt lịch tư vấn', popular: false, color: '#00142D',
    },
  ],
}

const es: PricingCopy = {
  title: 'Elige el plan que te conviene',
  subtitle: 'Empieza la prueba gratis — sin tarjeta. Prueba todas las funciones durante 14 días.',
  monthly: 'Mensual',
  yearly: 'Anual',
  save: 'Ahorra 20%',
  popular: 'Más popular',
  limitedTitle: 'Incluido en todos los planes ARVIX',
  limitedSubtitle: 'Funciones esenciales en todos los planes',
  commonFeatures: ['Certificado SSL', 'Ancho de banda ilimitado', 'Optimizado para móvil', 'Pago con tarjeta', 'Entrega a domicilio', 'Herramientas SEO', 'Códigos de descuento', 'Monitoreo 24/7'],
  ctaTitle: 'Más de 600.000 comercios confían en ARVIX',
  ctaSubtitle: 'Empieza hoy con 14 días de prueba gratis',
  ctaButton: 'Empieza la prueba gratis',
  plans: [
    {
      name: 'Store Explorer', price: 'NT$990', period: '/mes', desc: 'Para marcas nuevas listas para lanzar su tienda online',
      features: ['Tienda online', 'Productos ilimitados', 'Temas iniciales', 'Gestión de pedidos', 'Soporte básico', 'Certificado SSL'],
      cta: 'Empieza la prueba gratis', popular: false, color: '#5B5FF0',
    },
    {
      name: 'Commerce Strategist', price: 'NT$1,990', period: '/mes', desc: 'Para marcas en crecimiento que necesitan marketing y analítica',
      features: ['Todo lo de Store Explorer', 'Social commerce', 'Segmentación RFIM', 'Analítica Shoplytics', 'Soporte prioritario', 'Tienda multiidioma'],
      cta: 'Empieza la prueba gratis', popular: true, color: '#5B5FF0',
    },
    {
      name: 'OMO Master', price: 'NT$3,990', period: '/mes', desc: 'Para marcas que unifican retail online y offline',
      features: ['Todo lo de Commerce Strategist', 'POS retail', 'Smart OMO', 'Inventario omnicanal', 'Asesor dedicado', 'Acceso API'],
      cta: 'Empieza la prueba gratis', popular: false, color: '#5B5FF0',
    },
    {
      name: 'Omnichannel Navigator', price: 'Contáctanos', period: '', desc: 'Para marcas enterprise que necesitan una solución a medida',
      features: ['Todo lo de OMO Master', 'Shopper App', 'API enterprise', 'Soporte técnico dedicado', 'Desarrollo a medida', 'Gestión multi-tienda'],
      cta: 'Reservar consulta', popular: false, color: '#00142D',
    },
  ],
}

const pt: PricingCopy = {
  title: 'Escolha o plano ideal para você',
  subtitle: 'Comece o teste grátis — sem cartão. Experimente todos os recursos por 14 dias.',
  monthly: 'Mensal',
  yearly: 'Anual',
  save: 'Economize 20%',
  popular: 'Mais popular',
  limitedTitle: 'Incluído em todos os planos ARVIX',
  limitedSubtitle: 'Recursos essenciais em todos os planos',
  commonFeatures: ['Certificado SSL', 'Largura de banda ilimitada', 'Otimizado para mobile', 'Checkout com cartão', 'Entrega em domicílio', 'Ferramentas de SEO', 'Códigos de desconto', 'Monitoramento 24/7'],
  ctaTitle: 'Mais de 600.000 lojistas confiam na ARVIX',
  ctaSubtitle: 'Comece hoje com 14 dias de teste grátis',
  ctaButton: 'Começar teste grátis',
  plans: [
    {
      name: 'Store Explorer', price: 'NT$990', period: '/mês', desc: 'Para marcas novas prontas para lançar uma loja online',
      features: ['Loja online', 'Produtos ilimitados', 'Temas iniciais', 'Gestão de pedidos', 'Suporte básico', 'Certificado SSL'],
      cta: 'Começar teste grátis', popular: false, color: '#5B5FF0',
    },
    {
      name: 'Commerce Strategist', price: 'NT$1,990', period: '/mês', desc: 'Para marcas em crescimento que precisam de marketing e analytics',
      features: ['Tudo do Store Explorer', 'Social commerce', 'Segmentação RFIM', 'Analytics Shoplytics', 'Suporte prioritário', 'Loja multilíngue'],
      cta: 'Começar teste grátis', popular: true, color: '#5B5FF0',
    },
    {
      name: 'OMO Master', price: 'NT$3,990', period: '/mês', desc: 'Para marcas que unificam varejo online e offline',
      features: ['Tudo do Commerce Strategist', 'POS varejo', 'Smart OMO', 'Estoque omnichannel', 'Consultor dedicado', 'Acesso à API'],
      cta: 'Começar teste grátis', popular: false, color: '#5B5FF0',
    },
    {
      name: 'Omnichannel Navigator', price: 'Fale conosco', period: '', desc: 'Para marcas enterprise que precisam de solução sob medida',
      features: ['Tudo do OMO Master', 'Shopper App', 'API enterprise', 'Suporte técnico dedicado', 'Desenvolvimento customizado', 'Gestão multi-loja'],
      cta: 'Agendar consultoria', popular: false, color: '#00142D',
    },
  ],
}

const de: PricingCopy = {
  title: 'Wählen Sie den passenden Plan',
  subtitle: 'Kostenlos testen — keine Kreditkarte nötig. 14 Tage alle Funktionen nutzen.',
  monthly: 'Monatlich',
  yearly: 'Jährlich',
  save: '20% sparen',
  popular: 'Beliebteste',
  limitedTitle: 'In jedem ARVIX-Plan enthalten',
  limitedSubtitle: 'Kernfunktionen in allen Plänen',
  commonFeatures: ['SSL-Zertifikat', 'Unbegrenzte Bandbreite', 'Mobil optimiert', 'Kartencheckout', 'Lieferung nach Hause', 'SEO-Tools', 'Rabattcodes', '24/7-Systemüberwachung'],
  ctaTitle: 'Über 600.000 Händler weltweit vertrauen ARVIX',
  ctaSubtitle: 'Starten Sie heute mit 14 Tagen kostenlosem Test',
  ctaButton: 'Kostenlos testen',
  plans: [
    {
      name: 'Store Explorer', price: 'NT$990', period: '/Mon.', desc: 'Für neue Marken, die einen Online-Shop starten',
      features: ['Online-Shop', 'Unbegrenzte Produkte', 'Starter-Themes', 'Auftragsverwaltung', 'Basis-Support', 'SSL-Zertifikat'],
      cta: 'Kostenlos testen', popular: false, color: '#5B5FF0',
    },
    {
      name: 'Commerce Strategist', price: 'NT$1,990', period: '/Mon.', desc: 'Für wachsende Marken mit Bedarf an Marketing und Analytics',
      features: ['Alles aus Store Explorer', 'Social Commerce', 'RFIM-Segmentierung', 'Shoplytics-Analytics', 'Prioritäts-Support', 'Mehrsprachiger Shop'],
      cta: 'Kostenlos testen', popular: true, color: '#5B5FF0',
    },
    {
      name: 'OMO Master', price: 'NT$3,990', period: '/Mon.', desc: 'Für Marken, die Online- und Offline-Retail vereinen',
      features: ['Alles aus Commerce Strategist', 'Retail-POS', 'Smart OMO', 'Omnichannel-Bestand', 'Dedizierter Berater', 'API-Zugang'],
      cta: 'Kostenlos testen', popular: false, color: '#5B5FF0',
    },
    {
      name: 'Omnichannel Navigator', price: 'Kontakt', period: '', desc: 'Für Enterprise-Marken mit maßgeschneiderter Lösung',
      features: ['Alles aus OMO Master', 'Shopper App', 'Enterprise-API', 'Dedizierter Tech-Support', 'Individuelle Entwicklung', 'Multi-Store-Management'],
      cta: 'Beratung buchen', popular: false, color: '#00142D',
    },
  ],
}

const fr: PricingCopy = {
  title: 'Choisissez le forfait qui vous convient',
  subtitle: 'Démarrez l’essai gratuit — sans carte bancaire. Essayez toutes les fonctions pendant 14 jours.',
  monthly: 'Mensuel',
  yearly: 'Annuel',
  save: 'Économisez 20 %',
  popular: 'Le plus populaire',
  limitedTitle: 'Inclus dans tous les forfaits ARVIX',
  limitedSubtitle: 'Fonctions essentielles sur tous les forfaits',
  commonFeatures: ['Certificat SSL', 'Bande passante illimitée', 'Optimisé mobile', 'Paiement par carte', 'Livraison à domicile', 'Outils SEO', 'Codes promo', 'Surveillance système 24/7'],
  ctaTitle: 'Plus de 600 000 marchands font confiance à ARVIX',
  ctaSubtitle: 'Commencez aujourd’hui avec 14 jours d’essai gratuit',
  ctaButton: 'Démarrer l’essai gratuit',
  plans: [
    {
      name: 'Store Explorer', price: 'NT$990', period: '/mois', desc: 'Pour les nouvelles marques prêtes à lancer une boutique en ligne',
      features: ['Boutique en ligne', 'Produits illimités', 'Thèmes de démarrage', 'Gestion des commandes', 'Support de base', 'Certificat SSL'],
      cta: 'Démarrer l’essai gratuit', popular: false, color: '#5B5FF0',
    },
    {
      name: 'Commerce Strategist', price: 'NT$1,990', period: '/mois', desc: 'Pour les marques en croissance qui ont besoin de marketing et d’analytics',
      features: ['Tout Store Explorer', 'Social commerce', 'Segmentation RFIM', 'Analytics Shoplytics', 'Support prioritaire', 'Boutique multilingue'],
      cta: 'Démarrer l’essai gratuit', popular: true, color: '#5B5FF0',
    },
    {
      name: 'OMO Master', price: 'NT$3,990', period: '/mois', desc: 'Pour les marques qui unifient le retail en ligne et hors ligne',
      features: ['Tout Commerce Strategist', 'POS retail', 'Smart OMO', 'Stock omnicanal', 'Conseiller dédié', 'Accès API'],
      cta: 'Démarrer l’essai gratuit', popular: false, color: '#5B5FF0',
    },
    {
      name: 'Omnichannel Navigator', price: 'Nous contacter', period: '', desc: 'Pour les marques enterprise qui ont besoin d’une solution sur mesure',
      features: ['Tout OMO Master', 'Shopper App', 'API enterprise', 'Support technique dédié', 'Développement sur mesure', 'Gestion multi-boutiques'],
      cta: 'Réserver une consultation', popular: false, color: '#00142D',
    },
  ],
}

const copy: Partial<Record<Locale, PricingCopy>> & { 'zh-TW': PricingCopy; en: PricingCopy } = {
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

export default function PricingPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-16 sm:py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EEF0FF 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>{c.title}</h1>
          <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
          <div className="inline-flex items-center rounded-full px-5 py-2 text-sm font-bold mb-8" style={{ backgroundColor: '#E8E9FD', color: '#484CE8' }}>
            {c.monthly}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.plans.map((plan, index) => (
              <div key={plan.name} className={`rounded-2xl overflow-hidden flex flex-col bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${plan.popular ? 'shadow-xl ring-2 ring-[#5B5FF0]' : 'border border-gray-100 shadow-sm'}`}>
                {plan.popular && (
                  <div className="py-2 text-center text-sm font-bold text-white" style={{ backgroundColor: '#5B5FF0' }}>
                    {c.popular}
                  </div>
                )}
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-black mb-2" style={{ color: '#00142D' }}>{plan.name}</h3>
                  <p className="text-sm mb-4" style={{ color: '#687280' }}>{plan.desc}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-black" style={{ color: '#5B5FF0' }}>{plan.price}</span>
                    <span className="text-sm" style={{ color: '#687280' }}>{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm" style={{ color: '#354253' }}>
                        <span className="text-green-500 font-bold">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  {index < checkoutPlans.length ? (
                    <PricingCheckoutButton plan={checkoutPlans[index]} />
                  ) : (
                    <a href="/consultation" className="block text-center py-3 rounded-full font-bold transition-opacity hover:opacity-90"
                      style={{ border: '2px solid #5B5FF0', color: '#5B5FF0' }}>
                      {plan.cta}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black mb-4 text-center" style={{ color: '#00142D' }}>{c.limitedTitle}</h2>
          <p className="text-center mb-8" style={{ color: '#687280' }}>{c.limitedSubtitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {c.commonFeatures.map((f) => (
              <div key={f} className="p-4 bg-white rounded-xl text-sm font-semibold text-center" style={{ color: '#354253' }}>
                ✓ {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.ctaTitle}</h2>
          <p className="text-white opacity-70 mb-8">{c.ctaSubtitle}</p>
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.ctaButton}
          </a>
        </div>
      </section>
    </main>
  )
}
