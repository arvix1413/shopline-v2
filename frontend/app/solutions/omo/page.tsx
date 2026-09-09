'use client'

import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'
import type { Locale } from '../../../lib/i18n'

type OmoCopy = {
  title: string
  subtitle: string
  cta: string
  prosTitle: string
  pros: string[]
  marketTitle: string
  marketSubtitle: string
  firstVisitTitle: string
  steps1: { step: string; title: string; img: string; alt: string }[]
  revisitTitle: string
  steps2: { step: string; title: string; img: string; alt: string }[]
  ctaTitle: string
  ctaSubtitle: string
}

const zhTW: OmoCopy = {
  title: 'OMO 全通路整合解決方案',
  subtitle: 'ARVIX 提供一站式的 OMO 全通路整合方案，讓實體店及網店無縫接軌，全面整合「通路x系統x數據」拓展新商機。實現線上線下零斷點體驗，精準打造個人化消費旅程。',
  cta: '立即免費試用',
  prosTitle: 'ARVIX OMO 3 大優點',
  pros: ['通路整合', '系統串接', '數據打通'],
  marketTitle: '市場最完整的 OMO 解決方案',
  marketSubtitle: '無縫串接全通路消費旅程！',
  firstVisitTitle: '消費者首次進入實體店\n3 步驟提升顧客註冊率與品牌黏著度',
  steps1: [
    { step: 'STEP 01', title: '新會員優惠 x 簡易註冊流程，快速提升會員數與 App 下載率', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: 'ARVIX 的簡易註冊流程搭配新會員優惠，讓你快速提升會員數與 App 下載率' },
    { step: 'STEP 02', title: '門市 POS 系統一站整合，線上、線下資料全面打通', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'ARVIX 提供完整線下整合方案，線上、線下資料全面打通' },
    { step: 'STEP 03', title: '顧客離店後持續互動不失聯，讓你線上導購零斷點', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', alt: 'ARVIX 的多元功能讓顧客離店後持續互動不失聯，線上導購零斷點' },
  ],
  revisitTitle: '提升會員回訪率\n3 步驟幫你提升消費體驗與客單價',
  steps2: [
    { step: 'STEP 01', title: '線上無縫導流門市，會員回店再造商機', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'ARVIX 的「線上買門市取」、「分眾發送門市專屬優惠券」等功能，有效引導顧客從線上進入實體通路' },
    { step: 'STEP 02', title: '會員資訊一目瞭然，強化店員即時導購力', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: 'ARVIX 整合網店與實體店的會員資訊，讓你掌握會員輪廓、精準導購' },
    { step: 'STEP 03', title: '會員條碼一鍵展開，快速掃描結帳體驗再升級', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'ARVIX OMO 全通路整合解決方案' },
  ],
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即加入，開始你的全通路零售之旅',
}

const zhCN: OmoCopy = {
  title: 'OMO 全渠道整合解决方案',
  subtitle: 'ARVIX 提供一站式的 OMO 全渠道整合方案，让实体店及网店无缝接轨，全面整合「渠道x系统x数据」拓展新商机。实现线上线下零断点体验，精准打造个性化消费旅程。',
  cta: '立即免费试用',
  prosTitle: 'ARVIX OMO 3 大优点',
  pros: ['渠道整合', '系统串接', '数据打通'],
  marketTitle: '市场最完整的 OMO 解决方案',
  marketSubtitle: '无缝串接全渠道消费旅程！',
  firstVisitTitle: '消费者首次进入实体店\n3 步骤提升顾客注册率与品牌黏着度',
  steps1: [
    { step: 'STEP 01', title: '新会员优惠 x 简易注册流程，快速提升会员数与 App 下载率', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: 'ARVIX 的简易注册流程搭配新会员优惠' },
    { step: 'STEP 02', title: '门店 POS 系统一站整合，线上、线下资料全面打通', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'ARVIX 提供完整线下整合方案' },
    { step: 'STEP 03', title: '顾客离店后持续互动不失联，让你线上导购零断点', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', alt: '离店后持续互动，线上导购零断点' },
  ],
  revisitTitle: '提升会员回访率\n3 步骤帮你提升消费体验与客单价',
  steps2: [
    { step: 'STEP 01', title: '线上无缝导流门店，会员回店再造商机', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: '线上买门店取与门店专属优惠券' },
    { step: 'STEP 02', title: '会员信息一目了然，强化店员即时导购力', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: '整合网店与实体店会员信息' },
    { step: 'STEP 03', title: '会员条码一键展开，快速扫描结账体验再升级', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'ARVIX OMO 全渠道整合解决方案' },
  ],
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即加入，开始你的全渠道零售之旅',
}

const en: OmoCopy = {
  title: 'OMO omnichannel integration',
  subtitle: 'One OMO stack that bridges stores and e‑commerce — channels, systems, and data — for a seamless personalized journey.',
  cta: 'Start free trial',
  prosTitle: 'Three OMO advantages',
  pros: ['Channel integration', 'System connectivity', 'Unified data'],
  marketTitle: 'The most complete OMO solution',
  marketSubtitle: 'A seamless omnichannel shopping journey',
  firstVisitTitle: 'First in-store visit\n3 steps to membership & brand stickiness',
  steps1: [
    { step: 'STEP 01', title: 'New-member offers + simple signup grow members & app installs', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: 'Simple signup with new-member offers' },
    { step: 'STEP 02', title: 'Unified POS — online and offline data fully connected', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'Offline integration with unified data' },
    { step: 'STEP 03', title: 'Stay engaged after they leave — zero friction online selling', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', alt: 'Continuous engagement after leaving the store' },
  ],
  revisitTitle: 'Lift revisit rate\n3 steps to better CX and AOV',
  steps2: [
    { step: 'STEP 01', title: 'Route online traffic to stores for repeat visits', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'BOPIS and store-exclusive coupons' },
    { step: 'STEP 02', title: 'Member profiles at a glance for real-time staff selling', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: 'Unified member profiles across channels' },
    { step: 'STEP 03', title: 'One-tap member barcodes for faster scan checkout', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'ARVIX OMO omnichannel solution' },
  ],
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  ctaSubtitle: 'Join and start your omnichannel journey',
}

const ko: OmoCopy = {
  title: 'OMO 옴니채널 통합',
  subtitle: '매장과 이커머스를 잇는 하나의 OMO 스택 — 채널, 시스템, 데이터 — 으로 끊김 없는 개인화 여정을 만드세요.',
  cta: '무료 체험 시작',
  prosTitle: 'OMO 3대 강점',
  pros: ['채널 통합', '시스템 연동', '데이터 통합'],
  marketTitle: '가장 완성도 높은 OMO 솔루션',
  marketSubtitle: '끊김 없는 옴니채널 쇼핑 여정',
  firstVisitTitle: '첫 매장 방문\n멤버십·브랜드 충성도를 높이는 3단계',
  steps1: [
    { step: 'STEP 01', title: '신규 회원 혜택 + 간편 가입으로 회원 수·앱 설치 확대', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: '신규 회원 혜택이 있는 간편 가입' },
    { step: 'STEP 02', title: '통합 POS — 온·오프라인 데이터 완전 연결', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: '통합 데이터로 오프라인 연동' },
    { step: 'STEP 03', title: '퇴점 후에도 지속 소통 — 마찰 없는 온라인 판매', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', alt: '매장 떠난 뒤에도 이어지는 인게이지먼트' },
  ],
  revisitTitle: '재방문율 향상\nCX와 AOV를 높이는 3단계',
  steps2: [
    { step: 'STEP 01', title: '온라인 트래픽을 매장으로 유도해 재방문 창출', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'BOPIS와 매장 전용 쿠폰' },
    { step: 'STEP 02', title: '한눈에 보는 회원 프로필로 실시간 직원 판매', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: '채널 통합 회원 프로필' },
    { step: 'STEP 03', title: '원탭 회원 바코드로 더 빠른 스캔 결제', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'ARVIX OMO 옴니채널 솔루션' },
  ],
  ctaTitle: '전 세계 600,000+ 셀러가 신뢰하는 ARVIX',
  ctaSubtitle: '합류하고 옴니채널 여정을 시작하세요',
}

const ja: OmoCopy = {
  title: 'OMO オムニチャネル統合',
  subtitle: '店舗と EC をつなぐ一つの OMO スタック — チャネル・システム・データ — でシームレスなパーソナライズ体験を。',
  cta: '無料トライアルを開始',
  prosTitle: 'OMO の 3 つの強み',
  pros: ['チャネル統合', 'システム連携', 'データ統合'],
  marketTitle: '最も完成度の高い OMO ソリューション',
  marketSubtitle: 'シームレスなオムニチャネル購買体験',
  firstVisitTitle: '初回来店\n会員化とブランド定着の 3 ステップ',
  steps1: [
    { step: 'STEP 01', title: '新規会員特典＋かんたん登録で会員数・アプリ導入を拡大', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: '新規会員特典付きの簡単登録' },
    { step: 'STEP 02', title: '統合 POS — オンラインとオフラインのデータを完全接続', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: '統合データによるオフライン連携' },
    { step: 'STEP 03', title: '退店後も継続エンゲージ — 摩擦のないオンライン販売', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', alt: '退店後も続くエンゲージメント' },
  ],
  revisitTitle: '再来店率を向上\nCX と AOV を高める 3 ステップ',
  steps2: [
    { step: 'STEP 01', title: 'オンライン流入を店舗へ導き再来店を創出', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'BOPIS と店舗限定クーポン' },
    { step: 'STEP 02', title: '会員プロフィールを一目で把握しリアルタイム接客', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: 'チャネル横断の会員プロフィール' },
    { step: 'STEP 03', title: 'ワンタップ会員バーコードでより速いスキャン会計', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'ARVIX OMO オムニチャネルソリューション' },
  ],
  ctaTitle: '世界中の 600,000+ のマーチャントに信頼されています',
  ctaSubtitle: '参加してオムニチャネルの旅を始めましょう',
}

const vi: OmoCopy = {
  title: 'Tích hợp OMO omnichannel',
  subtitle: 'Một stack OMO nối cửa hàng và thương mại điện tử — kênh, hệ thống và dữ liệu — cho hành trình cá nhân hóa liền mạch.',
  cta: 'Bắt đầu dùng thử miễn phí',
  prosTitle: 'Ba lợi thế OMO',
  pros: ['Tích hợp kênh', 'Kết nối hệ thống', 'Dữ liệu thống nhất'],
  marketTitle: 'Giải pháp OMO hoàn thiện nhất',
  marketSubtitle: 'Hành trình mua sắm omnichannel liền mạch',
  firstVisitTitle: 'Lần đầu đến cửa hàng\n3 bước để tăng đăng ký thành viên & gắn kết thương hiệu',
  steps1: [
    { step: 'STEP 01', title: 'Ưu đãi thành viên mới + đăng ký đơn giản tăng hội viên & cài app', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: 'Đăng ký đơn giản với ưu đãi thành viên mới' },
    { step: 'STEP 02', title: 'POS thống nhất — dữ liệu online và offline kết nối đầy đủ', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'Tích hợp offline với dữ liệu thống nhất' },
    { step: 'STEP 03', title: 'Giữ tương tác sau khi rời cửa hàng — bán online không ma sát', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', alt: 'Tương tác liên tục sau khi rời cửa hàng' },
  ],
  revisitTitle: 'Tăng tỷ lệ quay lại\n3 bước cải thiện CX và AOV',
  steps2: [
    { step: 'STEP 01', title: 'Dẫn traffic online vào cửa hàng để tạo lần quay lại', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'BOPIS và coupon riêng cửa hàng' },
    { step: 'STEP 02', title: 'Hồ sơ thành viên nhìn một phát để nhân viên bán realtime', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: 'Hồ sơ thành viên thống nhất đa kênh' },
    { step: 'STEP 03', title: 'Mã vạch thành viên một chạm để thanh toán quét nhanh hơn', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'Giải pháp OMO omnichannel ARVIX' },
  ],
  ctaTitle: 'Được hơn 600.000 thương nhân trên thế giới tin dùng',
  ctaSubtitle: 'Tham gia và bắt đầu hành trình omnichannel của bạn',
}

const es: OmoCopy = {
  title: 'Integración OMO omnicanal',
  subtitle: 'Un stack OMO que une tiendas y ecommerce — canales, sistemas y datos — para un viaje personalizado sin fricción.',
  cta: 'Empieza la prueba gratis',
  prosTitle: 'Tres ventajas OMO',
  pros: ['Integración de canales', 'Conectividad de sistemas', 'Datos unificados'],
  marketTitle: 'La solución OMO más completa',
  marketSubtitle: 'Un viaje de compra omnicanal sin fisuras',
  firstVisitTitle: 'Primera visita en tienda\n3 pasos a membresía y adhesión de marca',
  steps1: [
    { step: 'STEP 01', title: 'Ofertas de nuevo miembro + registro simple aumentan socios e instalaciones de app', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: 'Registro simple con ofertas de nuevo miembro' },
    { step: 'STEP 02', title: 'POS unificado — datos online y offline totalmente conectados', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'Integración offline con datos unificados' },
    { step: 'STEP 03', title: 'Sigue el engagement al salir — venta online sin fricción', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', alt: 'Engagement continuo tras salir de la tienda' },
  ],
  revisitTitle: 'Sube la tasa de revisita\n3 pasos a mejor CX y ticket medio',
  steps2: [
    { step: 'STEP 01', title: 'Lleva el tráfico online a tiendas para visitas repetidas', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'BOPIS y cupones exclusivos de tienda' },
    { step: 'STEP 02', title: 'Perfiles de miembro de un vistazo para venta en tiempo real', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: 'Perfiles de miembro unificados entre canales' },
    { step: 'STEP 03', title: 'Códigos de barras de miembro con un toque para checkout más rápido', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'Solución OMO omnicanal ARVIX' },
  ],
  ctaTitle: 'Más de 600.000 comercios en el mundo confían en ARVIX',
  ctaSubtitle: 'Únete y comienza tu viaje omnicanal',
}

const pt: OmoCopy = {
  title: 'Integração OMO omnichannel',
  subtitle: 'Um stack OMO que une lojas e e-commerce — canais, sistemas e dados — para uma jornada personalizada sem atrito.',
  cta: 'Começar teste grátis',
  prosTitle: 'Três vantagens OMO',
  pros: ['Integração de canais', 'Conectividade de sistemas', 'Dados unificados'],
  marketTitle: 'A solução OMO mais completa',
  marketSubtitle: 'Uma jornada de compra omnichannel sem falhas',
  firstVisitTitle: 'Primeira visita na loja\n3 passos para associação e adesão à marca',
  steps1: [
    { step: 'STEP 01', title: 'Ofertas de novo membro + cadastro simples aumentam membros e instalações do app', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: 'Cadastro simples com ofertas de novo membro' },
    { step: 'STEP 02', title: 'POS unificado — dados online e offline totalmente conectados', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'Integração offline com dados unificados' },
    { step: 'STEP 03', title: 'Mantenha o engajamento ao sair — venda online sem atrito', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', alt: 'Engajamento contínuo após sair da loja' },
  ],
  revisitTitle: 'Aumente a taxa de retorno\n3 passos para melhor CX e ticket médio',
  steps2: [
    { step: 'STEP 01', title: 'Leve o tráfego online às lojas para visitas repetidas', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'BOPIS e cupons exclusivos da loja' },
    { step: 'STEP 02', title: 'Perfis de membro de relance para venda em tempo real pela equipe', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: 'Perfis de membro unificados entre canais' },
    { step: 'STEP 03', title: 'Códigos de barras de membro com um toque para checkout mais rápido', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'Solução OMO omnichannel ARVIX' },
  ],
  ctaTitle: 'Mais de 600.000 comerciantes no mundo confiam na ARVIX',
  ctaSubtitle: 'Participe e comece sua jornada omnichannel',
}

const de: OmoCopy = {
  title: 'OMO-Omnichannel-Integration',
  subtitle: 'Ein OMO-Stack, der Stores und E‑Commerce verbindet — Kanäle, Systeme und Daten — für eine nahtlose personalisierte Journey.',
  cta: 'Kostenlos testen',
  prosTitle: 'Drei OMO-Vorteile',
  pros: ['Kanalintegration', 'Systemanbindung', 'Vereinheitlichte Daten'],
  marketTitle: 'Die vollständigste OMO-Lösung',
  marketSubtitle: 'Eine nahtlose Omnichannel-Shopping-Journey',
  firstVisitTitle: 'Erster Ladenbesuch\n3 Schritte zu Mitgliedschaft & Markenbindung',
  steps1: [
    { step: 'STEP 01', title: 'Neukundenangebote + einfache Anmeldung steigern Mitglieder & App-Installs', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: 'Einfache Anmeldung mit Neukundenangeboten' },
    { step: 'STEP 02', title: 'Einheitliches POS — Online- und Offline-Daten voll verbunden', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'Offline-Integration mit einheitlichen Daten' },
    { step: 'STEP 03', title: 'Nach dem Verlassen weiter engagieren — Online-Verkauf ohne Reibung', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', alt: 'Kontinuierliches Engagement nach dem Verlassen des Stores' },
  ],
  revisitTitle: 'Wiederbesuchsrate steigern\n3 Schritte zu besserem CX und AOV',
  steps2: [
    { step: 'STEP 01', title: 'Online-Traffic in Stores lenken für Wiederbesuche', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'BOPIS und store-exklusive Coupons' },
    { step: 'STEP 02', title: 'Mitgliederprofile auf einen Blick für Echtzeit-Verkauf durchs Team', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: 'Einheitliche Mitgliederprofile über Kanäle' },
    { step: 'STEP 03', title: 'Mitglieder-Barcodes per Tipp für schnelleren Scan-Checkout', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'ARVIX OMO-Omnichannel-Lösung' },
  ],
  ctaTitle: 'Mehr als 600.000 Händler weltweit vertrauen ARVIX',
  ctaSubtitle: 'Mitmachen und deine Omnichannel-Reise starten',
}

const fr: OmoCopy = {
  title: 'Intégration OMO omnicanale',
  subtitle: 'Un stack OMO qui relie magasins et e‑commerce — canaux, systèmes et données — pour un parcours personnalisé fluide.',
  cta: 'Démarrer l’essai gratuit',
  prosTitle: 'Trois atouts OMO',
  pros: ['Intégration des canaux', 'Connectivité des systèmes', 'Données unifiées'],
  marketTitle: 'La solution OMO la plus complète',
  marketSubtitle: 'Un parcours d’achat omnicanal sans rupture',
  firstVisitTitle: 'Première visite en magasin\n3 étapes vers l’adhésion et l’attachement à la marque',
  steps1: [
    { step: 'STEP 01', title: 'Offres nouveaux membres + inscription simple pour croître membres & installs d’app', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: 'Inscription simple avec offres nouveaux membres' },
    { step: 'STEP 02', title: 'POS unifié — données online et offline pleinement connectées', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'Intégration offline avec données unifiées' },
    { step: 'STEP 03', title: 'Restez engagés après le départ — vente online sans friction', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', alt: 'Engagement continu après avoir quitté le magasin' },
  ],
  revisitTitle: 'Augmentez le taux de revisite\n3 étapes pour un meilleur CX et panier moyen',
  steps2: [
    { step: 'STEP 01', title: 'Orientez le trafic online vers les magasins pour des revisites', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'BOPIS et coupons exclusifs magasin' },
    { step: 'STEP 02', title: 'Profils membres en un coup d’œil pour la vente staff en temps réel', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: 'Profils membres unifiés entre canaux' },
    { step: 'STEP 03', title: 'Codes-barres membres en un tap pour un checkout scan plus rapide', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'Solution OMO omnicanale ARVIX' },
  ],
  ctaTitle: 'Plus de 600 000 marchands dans le monde font confiance à ARVIX',
  ctaSubtitle: 'Rejoignez-nous et démarrez votre parcours omnicanal',
}

const copy: Partial<Record<Locale, OmoCopy>> & { 'zh-TW': OmoCopy; en: OmoCopy } = {
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

export default function OmoPage() {
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
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" alt={c.title} className="w-full rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.prosTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {c.pros.map((item) => (
              <div key={item} className="p-8 rounded-2xl text-center" style={{ backgroundColor: '#F4F7FC' }}>
                <h3 className="text-xl font-bold" style={{ color: '#00142D' }}>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20" style={{ backgroundColor: '#F2F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>{c.marketTitle}</h2>
          <p className="text-center mb-16" style={{ color: '#687280' }}>{c.marketSubtitle}</p>
          <h3 className="text-2xl font-black mb-10 text-center whitespace-pre-line" style={{ color: '#00142D' }}>{c.firstVisitTitle}</h3>
          <div className="space-y-16">
            {c.steps1.map((s, i) => (
              <div key={s.step + s.title} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}>
                <div className="flex-1">
                  <div className="text-sm font-bold mb-2" style={{ color: '#5B5FF0' }}>{s.step}</div>
                  <h4 className="text-xl font-bold" style={{ color: '#00142D' }}>{s.title}</h4>
                </div>
                <div className="flex-1">
                  <img src={s.img} alt={s.alt} className="w-full rounded-2xl shadow-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl font-black mb-10 text-center whitespace-pre-line" style={{ color: '#00142D' }}>{c.revisitTitle}</h3>
          <div className="space-y-16">
            {c.steps2.map((s, i) => (
              <div key={s.step + s.title} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}>
                <div className="flex-1">
                  <div className="text-sm font-bold mb-2" style={{ color: '#5B5FF0' }}>{s.step}</div>
                  <h4 className="text-xl font-bold" style={{ color: '#00142D' }}>{s.title}</h4>
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
