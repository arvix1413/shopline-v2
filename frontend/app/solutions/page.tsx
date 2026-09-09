'use client'

import Link from 'next/link'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type SolutionsCopy = {
  title: string
  subtitle: string
  cta: string
  stats: { label: string; num: string; unit: string; sub: string }[]
  problemsTitle: string
  problems: { title: string; desc: string }[]
  learnMore: string
  ctaTitle: string
  ctaSubtitle: string
  questionsTitle: string
  questionsSubtitle: string
  bookConsult: string
  solutions: {
    title: string
    subtitle: string
    desc: string
    items: { title: string; desc: string }[]
    href: string
    img: string
  }[]
}

const zhTW: SolutionsCopy = {
  title: '全方位零售解決方案\nOMO 虛實整合再進化',
  subtitle: 'ARVIX 提供全方位零售解決方案，橫跨電商與實體通路，打造無縫購物體驗，從新創到國際級品牌都能輕鬆擴展市場版圖！',
  cta: '立即免費試用',
  stats: [
    { label: '整合全通路開店一切所需', num: '5', unit: '大', sub: '解決方案' },
    { label: '使用 ARVIX', num: '60', unit: '萬+', sub: '商家使用' },
    { label: '全面助力商家業績成長', num: '3', unit: '倍', sub: '營收成長' },
  ],
  problemsTitle: '你開店時是否也遇到以下問題',
  problems: [
    { title: '全通路整合成本太高', desc: '整合全通路太困難、管理成本又高，有節省成本又高效的方式來佈局全通路嗎？' },
    { title: '顧客數據難以取得', desc: '無法取得新舊客相關數據，要如何掌握流量和數據並從中洞察到重要商機？' },
    { title: '無法突破業績天花板', desc: '業績成長遇到瓶頸，如何找到新的增長點並突破現有的業績天花板？' },
  ],
  learnMore: '了解更多',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即加入，開始你的全通路零售之旅',
  questionsTitle: '有疑問嗎？',
  questionsSubtitle: '我們的專業顧問團隊隨時為你解答，協助你找到最適合的解決方案',
  bookConsult: '預約免費諮詢',
  solutions: [
    {
      title: '流量獲取與轉換解決方案', subtitle: '流量轉換一氣呵成',
      desc: '跨場景流量覆蓋 x 流量轉換工具 x 一站式整合服務，協助商家突破流量天花板，輕輕鬆鬆流量變現、提升轉換！',
      items: [
        { title: '跨場景流量覆蓋', desc: '面對社群、官網到門市等不同銷售場景，助商家打破流量破碎障礙，實現自動化整合！' },
        { title: '流量轉換工具', desc: '多元行銷工具組合，從廣告投放到社群導購，全面提升流量轉換效率。' },
        { title: '一站式整合服務', desc: '整合所有流量來源，統一管理，讓每一分流量都能發揮最大價值。' },
      ],
      href: '/solutions/traffic-and-conversion',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    },
    {
      title: 'OMO 全通路整合解決方案', subtitle: '低成本高效率',
      desc: '不管是從實體店做數位轉型還是網店拓展線下新商機，皆能透過「系統、通路、數據」三大核心的整合，創造零斷點的 OMO 全通路生意。',
      items: [
        { title: '通路整合', desc: '線上網店、線下 POS 一站式全面整合，輔以 Smart OMO、品牌會員購物 App 工具打造流暢的跨通路消費體驗！' },
        { title: '數據整合', desc: '整合線上線下所有消費數據，建立完整的顧客輪廓，讓每個決策都有數據支撐。' },
        { title: '系統整合', desc: '串接 ERP、CRM 等企業系統，打通所有業務流程，實現真正的全通路管理。' },
      ],
      href: '/solutions/omo',
      img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
    },
    {
      title: '商店營運效率解決方案', subtitle: '降本增效超 EASY',
      desc: 'ARVIX 全面支援商家在「品牌開店前置作業」、「銷售與訂單管理」及「出貨及售後服務」過程中，有效節省人力成本、加強營運效率！',
      items: [
        { title: '品牌開店前置作業', desc: '協助商家在大量商品管理、金物流串接及多通路銷售等，一站搞定所有流程，省時又省力。' },
        { title: '銷售與訂單管理', desc: '色塊化區分訂單類別，讓訂單管理更直覺高效，未完成購物車自動提醒，提升結帳轉換率。' },
        { title: '出貨及售後服務', desc: '支援宅配出貨；台灣出貨商店可串接 7-11。售後服務一站管理，提升顧客滿意度。' },
      ],
      href: '/solutions/shop-efficiency',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    },
    {
      title: '會員回購解決方案', subtitle: '打造顧客循環回購',
      desc: '想打造專屬品牌網店的會員經營閉環？從精準顧客分眾、活動優惠玩法到自動化推播系統，ARVIX 幫助品牌打造高回購閉環，提升客戶終身價值！',
      items: [
        { title: '精準分群，圈出目標受眾', desc: '多種分級玩法 x ARVIX 獨家 RFIM 價值模型，透過獨家數據演算出 9 大智慧顧客分群，讓你精準找到可驅動回購的消費輪廓和樣貌。' },
        { title: '多元優惠，驅動會員回購力', desc: '點數、折扣、會員專屬優惠多元組合，讓顧客每次都有回購的理由。' },
        { title: '自動推播，輕鬆擴大觸及', desc: '設定自動化行銷流程，在對的時間推送對的訊息，輕鬆擴大觸及範圍。' },
        { title: '洞察數據，掌握會員喜好', desc: '深度分析會員行為數據，掌握每位顧客的喜好，讓行銷更精準有效。' },
      ],
      href: '/solutions/member-repurchase',
      img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80',
    },
    {
      title: '數據賦能解決方案', subtitle: '加速洞察驅動成長',
      desc: '告別低效數據圖表！ARVIX 整合第一方數據，精煉「人」、「貨」、「場」三大指標數據，搭配顧問服務與產業趨勢報告，助你洞察市場、加速決策、提升業績！',
      items: [
        { title: '人', desc: '有貨還要能賣給對的人！Shoplytics 提供顧客輪廓與行為分析搭配 RFIM 智慧分群，助你精準鎖定目標受眾，賣得更好！' },
        { title: '貨', desc: '掌握商品銷售趨勢，精準選品補貨，讓每件商品都能發揮最大銷售潛力。' },
        { title: '場', desc: '分析各通路銷售效益，優化資源配置，讓每個銷售場景都能創造最大價值。' },
      ],
      href: '/solutions/data-analysis',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    },
  ],
}

const zhCN: SolutionsCopy = {
  ...zhTW,
  title: '全方位零售解决方案\nOMO 虚实整合再进化',
  subtitle: 'ARVIX 提供全方位零售解决方案，横跨电商与实体渠道，打造无缝购物体验，从新创到国际级品牌都能轻松扩展市场版图！',
  cta: '立即免费试用',
  problemsTitle: '你开店时是否也遇到以下问题',
  learnMore: '了解更多',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即加入，开始你的全渠道零售之旅',
  questionsTitle: '有疑问吗？',
  questionsSubtitle: '我们的专业顾问团队随时为你解答，协助你找到最适合的解决方案',
  bookConsult: '预约免费咨询',
}

const en: SolutionsCopy = {
  title: 'Full-stack retail solutions\nOMO, evolved',
  subtitle: 'ARVIX spans ecommerce and physical retail so startups and global brands can expand with a seamless shopping experience.',
  cta: 'Start free trial',
  stats: [
    { label: 'Everything for omnichannel launch', num: '5', unit: '', sub: 'core solutions' },
    { label: 'Powered by ARVIX', num: '600', unit: 'K+', sub: 'merchants' },
    { label: 'Built to grow revenue', num: '3', unit: 'x', sub: 'growth potential' },
  ],
  problemsTitle: 'Sound familiar when you launch a store?',
  problems: [
    { title: 'Omnichannel costs too much', desc: 'Unifying channels is hard and expensive — is there a leaner way?' },
    { title: 'Customer data is hard to get', desc: 'Without new and returning shopper data, how do you find the next opportunity?' },
    { title: 'Revenue hits a ceiling', desc: 'Growth stalls — where is the next unlock?' },
  ],
  learnMore: 'Learn more',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  ctaSubtitle: 'Join and start your omnichannel journey',
  questionsTitle: 'Questions?',
  questionsSubtitle: 'Our advisors can help you pick the right solution',
  bookConsult: 'Book a free consult',
  solutions: [
    {
      title: 'Traffic & conversion', subtitle: 'Turn traffic into revenue',
      desc: 'Cross-channel coverage, conversion tools, and one hub to break traffic ceilings.',
      items: [
        { title: 'Cross-channel coverage', desc: 'Unify social, site, and store traffic without fragmentation.' },
        { title: 'Conversion toolkit', desc: 'Ads to social shopping — tools that lift conversion.' },
        { title: 'One integration layer', desc: 'Manage every source so each visit works harder.' },
      ],
      href: '/solutions/traffic-and-conversion',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    },
    {
      title: 'OMO omnichannel', subtitle: 'Lower cost, higher efficiency',
      desc: 'Whether you digitize stores or expand online brands offline, unify systems, channels, and data.',
      items: [
        { title: 'Channel integration', desc: 'Online store + POS with Smart OMO and member apps.' },
        { title: 'Data integration', desc: 'One customer profile across online and offline.' },
        { title: 'System integration', desc: 'Connect ERP/CRM and run true omnichannel ops.' },
      ],
      href: '/solutions/omo',
      img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
    },
    {
      title: 'Store operations', subtitle: 'Cut cost, raise efficiency',
      desc: 'From launch prep to orders and after-sales — save labor and move faster.',
      items: [
        { title: 'Launch prep', desc: 'Catalog, payments, logistics, and multi-channel sales in one place.' },
        { title: 'Sales & orders', desc: 'Color-coded orders and cart reminders that lift checkout.' },
        { title: 'Fulfillment & support', desc: 'Automate shipping and centralize after-sales.' },
      ],
      href: '/solutions/shop-efficiency',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    },
    {
      title: 'Member repurchase', subtitle: 'Build the repurchase loop',
      desc: 'Segmentation, offers, and automated messaging that raise lifetime value.',
      items: [
        { title: 'Precise segments', desc: 'RFIM-powered smart cohorts that drive repurchase.' },
        { title: 'Flexible rewards', desc: 'Points, discounts, and member-only perks.' },
        { title: 'Automated outreach', desc: 'Send the right message at the right time.' },
        { title: 'Member insights', desc: 'Understand preferences and market with precision.' },
      ],
      href: '/solutions/member-repurchase',
      img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80',
    },
    {
      title: 'Data empowerment', subtitle: 'Insights that drive growth',
      desc: 'First-party data across people, products, and places — plus advisors and industry reports.',
      items: [
        { title: 'People', desc: 'Shoplytics + RFIM to reach the right buyers.' },
        { title: 'Products', desc: 'Track sell-through and restock what wins.' },
        { title: 'Places', desc: 'Compare channel ROI and allocate smarter.' },
      ],
      href: '/solutions/data-analysis',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    },
  ],
}

const ko: SolutionsCopy = {
  title: '풀스택 리테일 솔루션\nOMO, 한 단계 진화',
  subtitle: 'ARVIX는 이커머스와 오프라인 리테일을 아우르며, 스타트업부터 글로벌 브랜드까지 끊김 없는 쇼핑 경험으로 시장을 확장할 수 있게 합니다.',
  cta: '무료 체험 시작',
  stats: [
    { label: '옴니채널 런칭에 필요한 모든 것', num: '5', unit: '', sub: '핵심 솔루션' },
    { label: 'ARVIX로 운영', num: '600', unit: 'K+', sub: '셀러' },
    { label: '매출 성장을 위해 설계', num: '3', unit: 'x', sub: '성장 잠재력' },
  ],
  problemsTitle: '스토어를 열 때 이런 상황, 익숙하신가요?',
  problems: [
    { title: '옴니채널 비용이 너무 큼', desc: '채널 통합은 어렵고 비쌉니다 — 더 가벼운 방법은 없을까요?' },
    { title: '고객 데이터를 얻기 어려움', desc: '신규·재방문 쇼핑 데이터 없이, 다음 기회를 어떻게 찾을까요?' },
    { title: '매출이 천장에 부딪힘', desc: '성장이 정체됩니다 — 다음 돌파구는 어디에 있을까요?' },
  ],
  learnMore: '자세히 보기',
  ctaTitle: '전 세계 600,000+ 셀러가 신뢰하는 ARVIX',
  ctaSubtitle: '합류하고 옴니채널 여정을 시작하세요',
  questionsTitle: '궁금한 점이 있으신가요?',
  questionsSubtitle: '어드바이저가 적합한 솔루션을 고르도록 도와드립니다',
  bookConsult: '무료 상담 예약',
  solutions: [
    {
      title: '트래픽 & 전환', subtitle: '트래픽을 매출로',
      desc: '크로스 채널 커버리지, 전환 도구, 하나의 허브로 트래픽 천장을 깨세요.',
      items: [
        { title: '크로스 채널 커버리지', desc: '소셜·사이트·매장 트래픽을 파편화 없이 통합합니다.' },
        { title: '전환 툴킷', desc: '광고부터 소셜 쇼핑까지 — 전환을 올리는 도구.' },
        { title: '하나의 통합 레이어', desc: '모든 소스를 관리해 방문마다 더 큰 가치를 만듭니다.' },
      ],
      href: '/solutions/traffic-and-conversion',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    },
    {
      title: 'OMO 옴니채널', subtitle: '비용은 낮추고, 효율은 높이고',
      desc: '매장 디지털화든 온라인 브랜드의 오프라인 확장이든, 시스템·채널·데이터를 하나로.',
      items: [
        { title: '채널 통합', desc: 'Smart OMO와 회원 앱이 있는 온라인 스토어 + POS.' },
        { title: '데이터 통합', desc: '온·오프라인 하나의 고객 프로필.' },
        { title: '시스템 통합', desc: 'ERP/CRM을 연결하고 진정한 옴니채널 운영을 실행.' },
      ],
      href: '/solutions/omo',
      img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
    },
    {
      title: '스토어 운영', subtitle: '비용 절감, 효율 상승',
      desc: '런칭 준비부터 주문·애프터까지 — 인력을 아끼고 더 빠르게 움직이세요.',
      items: [
        { title: '런칭 준비', desc: '카탈로그, 결제, 물류, 멀티채널 판매를 한곳에서.' },
        { title: '판매 & 주문', desc: '색으로 구분된 주문과 체크아웃을 올리는 장바구니 리마인더.' },
        { title: '출고 & 지원', desc: '배송을 자동화하고 애프터를 중앙화.' },
      ],
      href: '/solutions/shop-efficiency',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    },
    {
      title: '회원 재구매', subtitle: '재구매 루프를 구축',
      desc: '세그먼트, 오퍼, 자동 메시징으로 생애 가치를 높입니다.',
      items: [
        { title: '정밀 세그먼트', desc: '재구매를 이끄는 RFIM 기반 스마트 코호트.' },
        { title: '유연한 리워드', desc: '포인트, 할인, 회원 전용 혜택.' },
        { title: '자동 아웃리치', desc: '올바른 시간에 올바른 메시지를 보내세요.' },
        { title: '회원 인사이트', desc: '선호를 이해하고 정밀하게 마케팅하세요.' },
      ],
      href: '/solutions/member-repurchase',
      img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80',
    },
    {
      title: '데이터 임파워먼트', subtitle: '성장을 이끄는 인사이트',
      desc: '사람·상품·장소에 걸친 자사 데이터 — 어드바이저와 산업 리포트까지.',
      items: [
        { title: '사람', desc: 'Shoplytics + RFIM으로 올바른 구매자에게 도달.' },
        { title: '상품', desc: '셀스루를 추적하고 이기는 상품을 보충.' },
        { title: '장소', desc: '채널 ROI를 비교하고 더 스마트하게 배분.' },
      ],
      href: '/solutions/data-analysis',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    },
  ],
}

const ja: SolutionsCopy = {
  title: 'フルスタック小売ソリューション\n進化した OMO',
  subtitle: 'ARVIX は EC と実店舗リテールを横断し、スタートアップからグローバルブランドまでシームレスな購買体験で市場を広げられます。',
  cta: '無料トライアルを開始',
  stats: [
    { label: 'オムニチャネル立ち上げに必要なすべて', num: '5', unit: '', sub: 'コアソリューション' },
    { label: 'ARVIX が支える', num: '600', unit: 'K+', sub: 'マーチャント' },
    { label: '売上成長のために設計', num: '3', unit: 'x', sub: '成長ポテンシャル' },
  ],
  problemsTitle: 'ストア開設時、こんな状況に心当たりは？',
  problems: [
    { title: 'オムニチャネルのコストが高すぎる', desc: 'チャネル統合は難しく高額 — もっとリーンな方法は？' },
    { title: '顧客データを得にくい', desc: '新規・リピートの買い物データなしに、次の機会をどう見つける？' },
    { title: '売上が天井にぶつかる', desc: '成長が停滞 — 次の突破口はどこ？' },
  ],
  learnMore: '詳しく見る',
  ctaTitle: '世界中の 600,000+ のマーチャントに信頼されています',
  ctaSubtitle: '参加してオムニチャネルの旅を始めましょう',
  questionsTitle: 'ご質問はありますか？',
  questionsSubtitle: 'アドバイザーが最適なソリューション選びをお手伝いします',
  bookConsult: '無料相談を予約',
  solutions: [
    {
      title: 'トラフィック＆コンバージョン', subtitle: 'トラフィックを売上へ',
      desc: 'クロスチャネルカバレッジ、転換ツール、一つのハブでトラフィックの天井を突破。',
      items: [
        { title: 'クロスチャネルカバレッジ', desc: 'ソーシャル・サイト・店舗のトラフィックを断片化なく統合。' },
        { title: 'コンバージョンツールキット', desc: '広告からソーシャルショッピングまで — 転換を押し上げるツール。' },
        { title: '一つの統合レイヤー', desc: 'すべてのソースを管理し、訪問ごとの価値を高めます。' },
      ],
      href: '/solutions/traffic-and-conversion',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    },
    {
      title: 'OMO オムニチャネル', subtitle: 'コストを下げ、効率を上げる',
      desc: '店舗のデジタル化でもオンラインブランドのオフライン展開でも、システム・チャネル・データを統合。',
      items: [
        { title: 'チャネル統合', desc: 'Smart OMO と会員アプリ付きのオンラインストア + POS。' },
        { title: 'データ統合', desc: 'オンラインとオフラインで一つの顧客プロファイル。' },
        { title: 'システム統合', desc: 'ERP/CRM をつなぎ、真のオムニチャネル運用を実行。' },
      ],
      href: '/solutions/omo',
      img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
    },
    {
      title: 'ストア運営', subtitle: 'コスト削減、効率向上',
      desc: '立ち上げ準備から注文・アフターまで — 人件費を抑え、より速く動く。',
      items: [
        { title: '立ち上げ準備', desc: 'カタログ、決済、物流、マルチチャネル販売を一箇所で。' },
        { title: '販売＆注文', desc: '色分け注文とチェックアウトを押し上げるカートリマインダー。' },
        { title: '出荷＆サポート', desc: '配送を自動化し、アフターを一元化。' },
      ],
      href: '/solutions/shop-efficiency',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    },
    {
      title: '会員リピート購入', subtitle: 'リピートループを構築',
      desc: 'セグメント、オファー、自動メッセージでライフタイムバリューを向上。',
      items: [
        { title: '精密セグメント', desc: 'リピートを駆動する RFIM ベースのスマートコホート。' },
        { title: '柔軟なリワード', desc: 'ポイント、割引、会員限定特典。' },
        { title: '自動アウトリーチ', desc: '正しいタイミングで正しいメッセージを送る。' },
        { title: '会員インサイト', desc: '好みを理解し、精密にマーケティング。' },
      ],
      href: '/solutions/member-repurchase',
      img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80',
    },
    {
      title: 'データエンパワーメント', subtitle: '成長を駆動するインサイト',
      desc: '人・商品・場所にわたるファーストパーティデータ — アドバイザーと業界レポートも。',
      items: [
        { title: '人', desc: 'Shoplytics + RFIM で正しい購入者に到達。' },
        { title: '商品', desc: 'セルスルーを追跡し、勝つ商品を補充。' },
        { title: '場所', desc: 'チャネル ROI を比較し、よりスマートに配分。' },
      ],
      href: '/solutions/data-analysis',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    },
  ],
}

const vi: SolutionsCopy = {
  title: 'Giải pháp bán lẻ full-stack\nOMO, nâng cấp',
  subtitle: 'ARVIX bao phủ thương mại điện tử và bán lẻ vật lý để startup và thương hiệu toàn cầu mở rộng với trải nghiệm mua sắm liền mạch.',
  cta: 'Bắt đầu dùng thử miễn phí',
  stats: [
    { label: 'Mọi thứ cho ra mắt omnichannel', num: '5', unit: '', sub: 'giải pháp cốt lõi' },
    { label: 'Được hỗ trợ bởi ARVIX', num: '600', unit: 'K+', sub: 'thương nhân' },
    { label: 'Thiết kế để tăng doanh thu', num: '3', unit: 'x', sub: 'tiềm năng tăng trưởng' },
  ],
  problemsTitle: 'Nghe quen khi bạn mở cửa hàng?',
  problems: [
    { title: 'Omnichannel quá đắt', desc: 'Thống nhất kênh khó và tốn kém — có cách gọn hơn không?' },
    { title: 'Khó lấy dữ liệu khách', desc: 'Không có dữ liệu khách mới và quay lại, làm sao tìm cơ hội tiếp theo?' },
    { title: 'Doanh thu chạm trần', desc: 'Tăng trưởng đình trệ — điểm mở khóa tiếp theo ở đâu?' },
  ],
  learnMore: 'Tìm hiểu thêm',
  ctaTitle: 'Được hơn 600.000 thương nhân trên thế giới tin dùng',
  ctaSubtitle: 'Tham gia và bắt đầu hành trình omnichannel của bạn',
  questionsTitle: 'Có câu hỏi?',
  questionsSubtitle: 'Cố vấn của chúng tôi có thể giúp bạn chọn giải pháp phù hợp',
  bookConsult: 'Đặt tư vấn miễn phí',
  solutions: [
    {
      title: 'Traffic & chuyển đổi', subtitle: 'Biến traffic thành doanh thu',
      desc: 'Phủ đa kênh, công cụ chuyển đổi và một hub để phá trần traffic.',
      items: [
        { title: 'Phủ đa kênh', desc: 'Thống nhất traffic social, site và cửa hàng không phân mảnh.' },
        { title: 'Bộ công cụ chuyển đổi', desc: 'Từ ads đến social shopping — công cụ nâng chuyển đổi.' },
        { title: 'Một lớp tích hợp', desc: 'Quản lý mọi nguồn để mỗi lượt truy cập hiệu quả hơn.' },
      ],
      href: '/solutions/traffic-and-conversion',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    },
    {
      title: 'OMO đa kênh', subtitle: 'Chi phí thấp hơn, hiệu quả cao hơn',
      desc: 'Dù số hóa cửa hàng hay mở rộng thương hiệu online xuống offline, thống nhất hệ thống, kênh và dữ liệu.',
      items: [
        { title: 'Tích hợp kênh', desc: 'Cửa hàng online + POS với Smart OMO và app thành viên.' },
        { title: 'Tích hợp dữ liệu', desc: 'Một hồ sơ khách trên online và offline.' },
        { title: 'Tích hợp hệ thống', desc: 'Kết nối ERP/CRM và vận hành omnichannel thực sự.' },
      ],
      href: '/solutions/omo',
      img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
    },
    {
      title: 'Vận hành cửa hàng', subtitle: 'Cắt chi phí, tăng hiệu quả',
      desc: 'Từ chuẩn bị ra mắt đến đơn hàng và hậu mãi — tiết kiệm nhân sự và nhanh hơn.',
      items: [
        { title: 'Chuẩn bị ra mắt', desc: 'Catalog, thanh toán, logistics và bán đa kênh tại một nơi.' },
        { title: 'Bán hàng & đơn', desc: 'Đơn mã màu và nhắc giỏ hàng nâng checkout.' },
        { title: 'Giao hàng & hỗ trợ', desc: 'Tự động hóa vận chuyển và tập trung hậu mãi.' },
      ],
      href: '/solutions/shop-efficiency',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    },
    {
      title: 'Tái mua thành viên', subtitle: 'Xây vòng lặp tái mua',
      desc: 'Phân khúc, ưu đãi và nhắn tin tự động nâng lifetime value.',
      items: [
        { title: 'Phân khúc chính xác', desc: 'Cohort thông minh RFIM thúc đẩy tái mua.' },
        { title: 'Phần thưởng linh hoạt', desc: 'Điểm, giảm giá và đặc quyền chỉ dành cho thành viên.' },
        { title: 'Outreach tự động', desc: 'Gửi đúng thông điệp đúng lúc.' },
        { title: 'Insight thành viên', desc: 'Hiểu sở thích và marketing chính xác.' },
      ],
      href: '/solutions/member-repurchase',
      img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80',
    },
    {
      title: 'Trao quyền dữ liệu', subtitle: 'Insight thúc đẩy tăng trưởng',
      desc: 'Dữ liệu first-party trên người, sản phẩm và địa điểm — kèm cố vấn và báo cáo ngành.',
      items: [
        { title: 'Người', desc: 'Shoplytics + RFIM để tiếp cận đúng người mua.' },
        { title: 'Sản phẩm', desc: 'Theo dõi sell-through và bổ sung hàng thắng.' },
        { title: 'Địa điểm', desc: 'So sánh ROI kênh và phân bổ thông minh hơn.' },
      ],
      href: '/solutions/data-analysis',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    },
  ],
}

const es: SolutionsCopy = {
  title: 'Soluciones retail full-stack\nOMO, evolucionada',
  subtitle: 'ARVIX abarca ecommerce y retail físico para que startups y marcas globales expandan con una experiencia de compra fluida.',
  cta: 'Empieza la prueba gratis',
  stats: [
    { label: 'Todo para el lanzamiento omnicanal', num: '5', unit: '', sub: 'soluciones core' },
    { label: 'Impulsado por ARVIX', num: '600', unit: 'K+', sub: 'comercios' },
    { label: 'Hecho para crecer ingresos', num: '3', unit: 'x', sub: 'potencial de crecimiento' },
  ],
  problemsTitle: '¿Te suena al abrir una tienda?',
  problems: [
    { title: 'Lo omnicanal cuesta demasiado', desc: 'Unificar canales es difícil y caro — ¿hay una vía más lean?' },
    { title: 'Los datos de clientes son difíciles de obtener', desc: 'Sin datos de compradores nuevos y recurrentes, ¿cómo hallar la siguiente oportunidad?' },
    { title: 'Los ingresos tocan techo', desc: 'El crecimiento se estanca — ¿dónde está el siguiente desbloqueo?' },
  ],
  learnMore: 'Saber más',
  ctaTitle: 'Más de 600.000 comercios en el mundo confían en ARVIX',
  ctaSubtitle: 'Únete y comienza tu viaje omnicanal',
  questionsTitle: '¿Preguntas?',
  questionsSubtitle: 'Nuestros asesores pueden ayudarte a elegir la solución adecuada',
  bookConsult: 'Reservar consulta gratis',
  solutions: [
    {
      title: 'Tráfico y conversión', subtitle: 'Convierte tráfico en ingresos',
      desc: 'Cobertura cross-channel, herramientas de conversión y un hub para romper techos de tráfico.',
      items: [
        { title: 'Cobertura cross-channel', desc: 'Unifica tráfico social, web y tienda sin fragmentación.' },
        { title: 'Toolkit de conversión', desc: 'De ads a social shopping — herramientas que suben la conversión.' },
        { title: 'Una capa de integración', desc: 'Gestiona cada fuente para que cada visita rinda más.' },
      ],
      href: '/solutions/traffic-and-conversion',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    },
    {
      title: 'OMO omnicanal', subtitle: 'Menor coste, mayor eficiencia',
      desc: 'Ya digitalices tiendas o expandas marcas online al offline, unifica sistemas, canales y datos.',
      items: [
        { title: 'Integración de canales', desc: 'Tienda online + POS con Smart OMO y apps de miembros.' },
        { title: 'Integración de datos', desc: 'Un perfil de cliente online y offline.' },
        { title: 'Integración de sistemas', desc: 'Conecta ERP/CRM y opera omnicanal de verdad.' },
      ],
      href: '/solutions/omo',
      img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
    },
    {
      title: 'Operaciones de tienda', subtitle: 'Corta costes, sube eficiencia',
      desc: 'Desde la prep de lanzamiento hasta pedidos y posventa — ahorra mano de obra y muévete más rápido.',
      items: [
        { title: 'Prep de lanzamiento', desc: 'Catálogo, pagos, logística y venta multicanal en un solo lugar.' },
        { title: 'Ventas y pedidos', desc: 'Pedidos por color y recordatorios de carrito que suben el checkout.' },
        { title: 'Cumplimiento y soporte', desc: 'Automatiza envíos y centraliza la posventa.' },
      ],
      href: '/solutions/shop-efficiency',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    },
    {
      title: 'Recompra de miembros', subtitle: 'Construye el bucle de recompra',
      desc: 'Segmentación, ofertas y mensajería automatizada que elevan el lifetime value.',
      items: [
        { title: 'Segmentos precisos', desc: 'Cohortes inteligentes con RFIM que impulsan la recompra.' },
        { title: 'Recompensas flexibles', desc: 'Puntos, descuentos y ventajas solo para miembros.' },
        { title: 'Outreach automatizado', desc: 'Envía el mensaje correcto en el momento correcto.' },
        { title: 'Insights de miembros', desc: 'Entiende preferencias y marketinga con precisión.' },
      ],
      href: '/solutions/member-repurchase',
      img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80',
    },
    {
      title: 'Empoderamiento de datos', subtitle: 'Insights que impulsan el crecimiento',
      desc: 'Datos first-party en personas, productos y lugares — más asesores e informes de industria.',
      items: [
        { title: 'Personas', desc: 'Shoplytics + RFIM para llegar a los compradores correctos.' },
        { title: 'Productos', desc: 'Rastrea sell-through y reabastece lo que gana.' },
        { title: 'Lugares', desc: 'Compara ROI de canal y asigna con más inteligencia.' },
      ],
      href: '/solutions/data-analysis',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    },
  ],
}

const pt: SolutionsCopy = {
  title: 'Soluções de varejo full-stack\nOMO, evoluída',
  subtitle: 'A ARVIX cobre e-commerce e varejo físico para que startups e marcas globais expandam com uma experiência de compra fluida.',
  cta: 'Começar teste grátis',
  stats: [
    { label: 'Tudo para o lançamento omnichannel', num: '5', unit: '', sub: 'soluções core' },
    { label: 'Impulsionado pela ARVIX', num: '600', unit: 'K+', sub: 'comerciantes' },
    { label: 'Feito para crescer receita', num: '3', unit: 'x', sub: 'potencial de crescimento' },
  ],
  problemsTitle: 'Soa familiar ao abrir uma loja?',
  problems: [
    { title: 'Omnichannel custa demais', desc: 'Unificar canais é difícil e caro — há um caminho mais lean?' },
    { title: 'Dados de clientes são difíceis de obter', desc: 'Sem dados de compradores novos e recorrentes, como achar a próxima oportunidade?' },
    { title: 'Receita bate no teto', desc: 'O crescimento trava — onde está o próximo desbloqueio?' },
  ],
  learnMore: 'Saiba mais',
  ctaTitle: 'Mais de 600.000 comerciantes no mundo confiam na ARVIX',
  ctaSubtitle: 'Participe e comece sua jornada omnichannel',
  questionsTitle: 'Dúvidas?',
  questionsSubtitle: 'Nossos consultores podem ajudar você a escolher a solução certa',
  bookConsult: 'Agendar consultoria grátis',
  solutions: [
    {
      title: 'Tráfego e conversão', subtitle: 'Transforme tráfego em receita',
      desc: 'Cobertura cross-channel, ferramentas de conversão e um hub para quebrar tetos de tráfego.',
      items: [
        { title: 'Cobertura cross-channel', desc: 'Unifique tráfego social, site e loja sem fragmentação.' },
        { title: 'Toolkit de conversão', desc: 'De ads a social shopping — ferramentas que elevam a conversão.' },
        { title: 'Uma camada de integração', desc: 'Gerencie cada fonte para que cada visita rende mais.' },
      ],
      href: '/solutions/traffic-and-conversion',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    },
    {
      title: 'OMO omnicanal', subtitle: 'Menor custo, maior eficiência',
      desc: 'Seja digitalizando lojas ou expandindo marcas online para o offline, unifique sistemas, canais e dados.',
      items: [
        { title: 'Integração de canais', desc: 'Loja online + POS com Smart OMO e apps de membros.' },
        { title: 'Integração de dados', desc: 'Um perfil de cliente online e offline.' },
        { title: 'Integração de sistemas', desc: 'Conecte ERP/CRM e rode ops omnichannel de verdade.' },
      ],
      href: '/solutions/omo',
      img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
    },
    {
      title: 'Operações da loja', subtitle: 'Corte custo, eleve eficiência',
      desc: 'Da preparação de lançamento a pedidos e pós-venda — economize mão de obra e vá mais rápido.',
      items: [
        { title: 'Preparação de lançamento', desc: 'Catálogo, pagamentos, logística e venda multicanal em um lugar.' },
        { title: 'Vendas e pedidos', desc: 'Pedidos por cor e lembretes de carrinho que elevam o checkout.' },
        { title: 'Fulfillment e suporte', desc: 'Automatize envios e centralize o pós-venda.' },
      ],
      href: '/solutions/shop-efficiency',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    },
    {
      title: 'Recompra de membros', subtitle: 'Construa o loop de recompra',
      desc: 'Segmentação, ofertas e mensageria automatizada que elevam o lifetime value.',
      items: [
        { title: 'Segmentos precisos', desc: 'Cohorts inteligentes com RFIM que impulsionam a recompra.' },
        { title: 'Recompensas flexíveis', desc: 'Pontos, descontos e benefícios só para membros.' },
        { title: 'Outreach automatizado', desc: 'Envie a mensagem certa na hora certa.' },
        { title: 'Insights de membros', desc: 'Entenda preferências e faça marketing com precisão.' },
      ],
      href: '/solutions/member-repurchase',
      img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80',
    },
    {
      title: 'Empoderamento de dados', subtitle: 'Insights que impulsionam o crescimento',
      desc: 'Dados first-party em pessoas, produtos e lugares — mais consultores e relatórios de indústria.',
      items: [
        { title: 'Pessoas', desc: 'Shoplytics + RFIM para alcançar os compradores certos.' },
        { title: 'Produtos', desc: 'Acompanhe sell-through e reponha o que vence.' },
        { title: 'Lugares', desc: 'Compare ROI de canal e aloque com mais inteligência.' },
      ],
      href: '/solutions/data-analysis',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    },
  ],
}

const de: SolutionsCopy = {
  title: 'Full-Stack-Retail-Lösungen\nOMO, weiterentwickelt',
  subtitle: 'ARVIX spannt Ecommerce und physischen Retail, damit Startups und globale Marken mit einer nahtlosen Shopping-Erfahrung expandieren.',
  cta: 'Kostenlos testen',
  stats: [
    { label: 'Alles für den Omnichannel-Launch', num: '5', unit: '', sub: 'Kernlösungen' },
    { label: 'Angetrieben von ARVIX', num: '600', unit: 'K+', sub: 'Händler' },
    { label: 'Für Umsatzwachstum gebaut', num: '3', unit: 'x', sub: 'Wachstumspotenzial' },
  ],
  problemsTitle: 'Kommt Ihnen das beim Store-Launch bekannt vor?',
  problems: [
    { title: 'Omnichannel kostet zu viel', desc: 'Kanäle zu vereinen ist schwer und teuer — gibt es einen schlankeren Weg?' },
    { title: 'Kundendaten sind schwer zu bekommen', desc: 'Ohne Daten neuer und wiederkehrender Shopper — wo ist die nächste Chance?' },
    { title: 'Umsatz stößt an die Decke', desc: 'Wachstum stagniert — wo liegt der nächste Unlock?' },
  ],
  learnMore: 'Mehr erfahren',
  ctaTitle: 'Mehr als 600.000 Händler weltweit vertrauen ARVIX',
  ctaSubtitle: 'Mitmachen und deine Omnichannel-Reise starten',
  questionsTitle: 'Fragen?',
  questionsSubtitle: 'Unsere Berater helfen Ihnen, die richtige Lösung zu wählen',
  bookConsult: 'Kostenlose Beratung buchen',
  solutions: [
    {
      title: 'Traffic & Conversion', subtitle: 'Traffic in Umsatz verwandeln',
      desc: 'Cross-Channel-Coverage, Conversion-Tools und ein Hub, um Traffic-Decken zu durchbrechen.',
      items: [
        { title: 'Cross-Channel-Coverage', desc: 'Social-, Site- und Store-Traffic ohne Fragmentierung vereinen.' },
        { title: 'Conversion-Toolkit', desc: 'Von Ads bis Social Shopping — Tools, die Conversion heben.' },
        { title: 'Eine Integrationsschicht', desc: 'Jede Quelle managen, damit jeder Besuch härter arbeitet.' },
      ],
      href: '/solutions/traffic-and-conversion',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    },
    {
      title: 'OMO Omnichannel', subtitle: 'Niedrigere Kosten, höhere Effizienz',
      desc: 'Ob Stores digitalisieren oder Online-Marken offline erweitern — Systeme, Kanäle und Daten vereinen.',
      items: [
        { title: 'Kanalintegration', desc: 'Online-Store + POS mit Smart OMO und Member-Apps.' },
        { title: 'Datenintegration', desc: 'Ein Kundenprofil online und offline.' },
        { title: 'Systemintegration', desc: 'ERP/CRM verbinden und echte Omnichannel-Ops fahren.' },
      ],
      href: '/solutions/omo',
      img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
    },
    {
      title: 'Store-Betrieb', subtitle: 'Kosten senken, Effizienz steigern',
      desc: 'Von Launch-Prep bis Bestellungen und After-Sales — Personal sparen und schneller werden.',
      items: [
        { title: 'Launch-Prep', desc: 'Katalog, Payments, Logistics und Multichannel-Verkauf an einem Ort.' },
        { title: 'Verkauf & Bestellungen', desc: 'Farbcodierte Bestellungen und Warenkorb-Reminders, die Checkout heben.' },
        { title: 'Fulfillment & Support', desc: 'Versand automatisieren und After-Sales zentralisieren.' },
      ],
      href: '/solutions/shop-efficiency',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    },
    {
      title: 'Mitglieder-Wiederkauf', subtitle: 'Den Wiederkauf-Loop bauen',
      desc: 'Segmentierung, Angebote und automatisierte Messaging, die Lifetime Value heben.',
      items: [
        { title: 'Präzise Segmente', desc: 'RFIM-gestützte Smart-Cohorts, die Wiederkauf treiben.' },
        { title: 'Flexible Rewards', desc: 'Punkte, Rabatte und Member-only-Perks.' },
        { title: 'Automatisierte Outreach', desc: 'Die richtige Nachricht zur richtigen Zeit senden.' },
        { title: 'Mitglieder-Insights', desc: 'Präferenzen verstehen und präzise vermarkten.' },
      ],
      href: '/solutions/member-repurchase',
      img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80',
    },
    {
      title: 'Daten-Empowerment', subtitle: 'Insights, die Wachstum treiben',
      desc: 'First-Party-Daten zu Menschen, Produkten und Orten — plus Berater und Branchenreports.',
      items: [
        { title: 'Menschen', desc: 'Shoplytics + RFIM, um die richtigen Käufer zu erreichen.' },
        { title: 'Produkte', desc: 'Sell-through tracken und Gewinner nachbestücken.' },
        { title: 'Orte', desc: 'Kanal-ROI vergleichen und smarter allokieren.' },
      ],
      href: '/solutions/data-analysis',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    },
  ],
}

const fr: SolutionsCopy = {
  title: 'Solutions retail full-stack\nOMO, évoluée',
  subtitle: 'ARVIX couvre l’e-commerce et le retail physique pour que startups et marques mondiales s’étendent avec une expérience d’achat fluide.',
  cta: 'Démarrer l’essai gratuit',
  stats: [
    { label: 'Tout pour le lancement omnicanal', num: '5', unit: '', sub: 'solutions cœur' },
    { label: 'Propulsé par ARVIX', num: '600', unit: 'K+', sub: 'marchands' },
    { label: 'Conçu pour faire croître le chiffre', num: '3', unit: 'x', sub: 'potentiel de croissance' },
  ],
  problemsTitle: 'Ça vous parle quand vous lancez une boutique ?',
  problems: [
    { title: 'L’omnicanal coûte trop cher', desc: 'Unifier les canaux est difficile et cher — y a-t-il une voie plus lean ?' },
    { title: 'Les données clients sont dures à obtenir', desc: 'Sans données des acheteurs nouveaux et récurrents, comment trouver la prochaine opportunité ?' },
    { title: 'Le chiffre d’affaires plafonne', desc: 'La croissance stagne — où est le prochain déblocage ?' },
  ],
  learnMore: 'En savoir plus',
  ctaTitle: 'Plus de 600 000 marchands dans le monde font confiance à ARVIX',
  ctaSubtitle: 'Rejoignez-nous et démarrez votre parcours omnicanal',
  questionsTitle: 'Des questions ?',
  questionsSubtitle: 'Nos conseillers peuvent vous aider à choisir la bonne solution',
  bookConsult: 'Réserver une consultation gratuite',
  solutions: [
    {
      title: 'Trafic & conversion', subtitle: 'Transformez le trafic en revenus',
      desc: 'Couverture cross-canal, outils de conversion et un hub pour briser les plafonds de trafic.',
      items: [
        { title: 'Couverture cross-canal', desc: 'Unifiez le trafic social, site et magasin sans fragmentation.' },
        { title: 'Toolkit de conversion', desc: 'Des ads au social shopping — des outils qui haussent la conversion.' },
        { title: 'Une couche d’intégration', desc: 'Gérez chaque source pour que chaque visite travaille plus fort.' },
      ],
      href: '/solutions/traffic-and-conversion',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    },
    {
      title: 'OMO omnicanal', subtitle: 'Coût plus bas, efficacité plus haute',
      desc: 'Que vous digitalisiez des magasins ou étendiez des marques online offline, unifiez systèmes, canaux et données.',
      items: [
        { title: 'Intégration des canaux', desc: 'Boutique online + POS avec Smart OMO et apps membres.' },
        { title: 'Intégration des données', desc: 'Un profil client online et offline.' },
        { title: 'Intégration des systèmes', desc: 'Connectez ERP/CRM et menez de vraies ops omnicanales.' },
      ],
      href: '/solutions/omo',
      img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
    },
    {
      title: 'Opérations boutique', subtitle: 'Coupez les coûts, haussez l’efficacité',
      desc: 'De la préparation au lancement aux commandes et à l’après-vente — économisez la main-d’œuvre et allez plus vite.',
      items: [
        { title: 'Préparation au lancement', desc: 'Catalogue, paiements, logistique et vente multicanale au même endroit.' },
        { title: 'Ventes & commandes', desc: 'Commandes codées couleur et rappels panier qui haussent le checkout.' },
        { title: 'Expédition & support', desc: 'Automatisez l’expédition et centralisez l’après-vente.' },
      ],
      href: '/solutions/shop-efficiency',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    },
    {
      title: 'Rachat membre', subtitle: 'Construisez la boucle de rachat',
      desc: 'Segmentation, offres et messagerie automatisée qui haussent la lifetime value.',
      items: [
        { title: 'Segments précis', desc: 'Cohortes intelligentes RFIM qui pilotent le rachat.' },
        { title: 'Récompenses flexibles', desc: 'Points, remises et avantages réservés aux membres.' },
        { title: 'Diffusion automatisée', desc: 'Envoyez le bon message au bon moment.' },
        { title: 'Analyses membres', desc: 'Comprenez les préférences et marketez avec précision.' },
      ],
      href: '/solutions/member-repurchase',
      img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80',
    },
    {
      title: 'Valorisation des données', subtitle: 'Des insights qui pilotent la croissance',
      desc: 'Données first-party sur personnes, produits et lieux — plus conseillers et rapports sectoriels.',
      items: [
        { title: 'Personnes', desc: 'Shoplytics + RFIM pour atteindre les bons acheteurs.' },
        { title: 'Produits', desc: 'Suivez le sell-through et réapprovisionnez ce qui gagne.' },
        { title: 'Lieux', desc: 'Comparez le ROI canal et allouez plus intelligemment.' },
      ],
      href: '/solutions/data-analysis',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    },
  ],
}

const copy: Partial<Record<Locale, SolutionsCopy>> & { 'zh-TW': SolutionsCopy; en: SolutionsCopy } = {
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

export default function SolutionsPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(rgb(0, 20, 45) 0%, rgb(0, 65, 147) 100%)' }}>
        <img src="/hero-decoration.svg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none opacity-80" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-white whitespace-pre-line">{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>{c.subtitle}</p>
            <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>{c.cta}</a>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80" alt="ARVIX solutions" className="w-full rounded-2xl" />
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'linear-gradient(rgb(11, 37, 100) 0%, rgb(0, 20, 45) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-white">
            {c.stats.map((s) => (
              <li key={s.sub} className="flex flex-col gap-2">
                <span className="text-sm opacity-70">{s.label}</span>
                <div className="flex items-end gap-1">
                  <span className="text-7xl font-black leading-none">{s.num}</span>
                  <span className="text-3xl font-bold mb-2">{s.unit}</span>
                </div>
                <span className="text-sm opacity-70">{s.sub}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: 'rgb(28, 39, 94)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12 text-white">{c.problemsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {c.problems.map((p) => (
              <div key={p.title} className="p-8 rounded-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
                <h3 className="text-lg font-bold mb-3 text-white">{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F2F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-12">
            {c.solutions.map((s, i) => (
              <div key={s.href} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-10 bg-white rounded-2xl p-8 shadow-sm`}>
                <div className="flex-1">
                  <div className="text-sm font-bold mb-1" style={{ color: '#5B5FF0' }}>{s.subtitle}</div>
                  <h3 className="text-2xl font-black mb-3" style={{ color: '#00142D' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: '#687280' }}>{s.desc}</p>
                  <div className="space-y-4 mb-6">
                    {s.items.map(item => (
                      <div key={item.title} className="flex gap-3">
                        <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: '#5B5FF0' }}>✓</span>
                        <div>
                          <h3 className="text-sm font-bold mb-0.5" style={{ color: '#00142D' }}>{item.title}</h3>
                          <p className="text-xs leading-relaxed" style={{ color: '#687280' }}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href={s.href} className="inline-block text-sm font-semibold px-6 py-2 rounded-full border-2 hover:bg-[#5B5FF0] hover:text-white transition-colors" style={{ borderColor: '#5B5FF0', color: '#5B5FF0' }}>{c.learnMore}</Link>
                </div>
                <div className="flex-1">
                  <img src={s.img} alt={"ARVIX " + s.title} className="w-full rounded-xl" />
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

      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black mb-4" style={{ color: '#00142D' }}>{c.questionsTitle}</h2>
          <p className="mb-6" style={{ color: '#687280' }}>{c.questionsSubtitle}</p>
          <a href="/register" className="inline-block text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>{c.bookConsult}</a>
        </div>
      </section>
    </main>
  )
}
