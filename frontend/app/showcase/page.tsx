'use client'
import { useState } from 'react'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type ShowcaseCopy = {
  title: string
  subtitle: string
  ctaTitle: string
  ctaButton: string
  categories: { slug: string; label: string }[]
  cases: { brand: string; category: string; result: string; desc: string }[]
}

const zhTW: ShowcaseCopy = {
  title: '精選品牌案例',
  subtitle: 'ARVIX 商家的真實成功案例，一站實現品牌全通路整合！',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  ctaButton: '立即免費試用',
  categories: [
    { slug: 'all', label: '全部' },
    { slug: 'fashion-brand', label: '流行時尚' },
    { slug: 'beauty-health-brand', label: '美妝保養' },
    { slug: 'food-beverage-brand', label: '食品飲料' },
    { slug: 'health-and-supplements', label: '保健食品' },
    { slug: 'lifestyle-brand', label: '生活居家' },
    { slug: 'pets', label: '寵物用品' },
    { slug: 'electronics-brand', label: '家電 3C' },
    { slug: 'sport-outdoor-brand', label: '戶外運動' },
  ],
  cases: [
    { brand: 'XROUND', category: 'electronics-brand', result: '自辦預購募近 2000 萬', desc: '靠群募聚人氣，網購流量難搶也能突圍' },
    { brand: '好好生醫', category: 'health-and-supplements', result: '分眾行銷帶動回購成長近五成', desc: '佈局 OMO 玩轉社群行銷，奪傑出品牌風格大賞' },
    { brand: 'CAMPFIRE 營火部落', category: 'sport-outdoor-brand', result: '千萬營收', desc: '結合電商與 YouTube 實現戶外生活理想' },
    { brand: 'NISORO 康鮮', category: 'food-beverage-brand', result: '6 成轉換率', desc: '遊戲助攻，互動式行銷打造雙贏顧客體驗' },
    { brand: 'Story Wear', category: 'fashion-brand', result: '永續共好新篇章', desc: '攜手腦麻協會，以設計傳遞行動的力量' },
    { brand: 'VERVE', category: 'fashion-brand', result: '雙位數成長', desc: 'AI 行銷生態圈助攻，beBit TECH 與 ARVIX 聯手' },
    { brand: '古北町', category: 'food-beverage-brand', result: '雙位數成長', desc: 'AI 洞察策略精準觸達目標客群' },
    { brand: 'Bello Store', category: 'lifestyle-brand', result: '超強轉換引擎', desc: '告別行銷燒錢戰，打造零售電商轉換新模式' },
    { brand: 'Aromase 艾瑪絲', category: 'beauty-health-brand', result: '團購創下單日銷售 2,500 瓶', desc: '使用獨立分潤賣場開團，創下單日銷售 2,500 瓶商品' },
    { brand: 'OMO 品牌', category: 'fashion-brand', result: 'OMO 佈局實現破億營收', desc: '分眾行銷讓我們可以根據每一個消費者輪廓與行為模式進行分群，提升轉換率' },
    { brand: '保健品牌', category: 'health-and-supplements', result: '專案期間流量成長近 150%、回購與業績更成長了近 600%', desc: 'ARVIX 顧問陪跑計劃協助品牌在各項細節上的優化' },
    { brand: '食品品牌', category: 'food-beverage-brand', result: '團購一週內銷量近 600 組', desc: '合作夥伴成效中心讓團購主隨時自行查看銷售表現' },
    { brand: '3C 品牌', category: 'electronics-brand', result: '團購與募資總銷量破三百萬業績', desc: '募資元件讓品牌在官網建立類似群募平台的銷售頁面' },
    { brand: '美妝品牌', category: 'beauty-health-brand', result: '新品預購兩個月達 400 萬業績', desc: '頁面編輯器能用拖曳的方式自由排版，效率更高' },
    { brand: '保健訂閱品牌', category: 'health-and-supplements', result: '「定期購業績」有逐月成長趨勢', desc: '透過「ARVIX 定期購」省去客人下單的作業流程' },
    { brand: '直播品牌', category: 'lifestyle-brand', result: '雙 12 檔期直播創下百萬銷售', desc: 'LINE 直播+1 的串接讓直播結帳的流程更加順暢' },
    { brand: 'App 品牌', category: 'fashion-brand', result: 'App 業績與訂單成長將近 2 倍', desc: '品牌建立 App 可穩定透過推播與顧客互動，提升品牌黏著度' },
  ],
}

const zhCN: ShowcaseCopy = {
  ...zhTW,
  title: '精选品牌案例',
  subtitle: 'ARVIX 商家的真实成功案例，一站实现品牌全渠道整合！',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  ctaButton: '立即免费试用',
  categories: [
    { slug: 'all', label: '全部' },
    { slug: 'fashion-brand', label: '流行时尚' },
    { slug: 'beauty-health-brand', label: '美妆保养' },
    { slug: 'food-beverage-brand', label: '食品饮料' },
    { slug: 'health-and-supplements', label: '保健食品' },
    { slug: 'lifestyle-brand', label: '生活居家' },
    { slug: 'pets', label: '宠物用品' },
    { slug: 'electronics-brand', label: '家电 3C' },
    { slug: 'sport-outdoor-brand', label: '户外运动' },
  ],
}

const en: ShowcaseCopy = {
  title: 'Featured brand stories',
  subtitle: 'Real ARVIX merchant wins — omnichannel growth in one platform.',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  ctaButton: 'Start free trial',
  categories: [
    { slug: 'all', label: 'All' },
    { slug: 'fashion-brand', label: 'Fashion' },
    { slug: 'beauty-health-brand', label: 'Beauty' },
    { slug: 'food-beverage-brand', label: 'Food & drink' },
    { slug: 'health-and-supplements', label: 'Supplements' },
    { slug: 'lifestyle-brand', label: 'Lifestyle' },
    { slug: 'pets', label: 'Pets' },
    { slug: 'electronics-brand', label: 'Electronics' },
    { slug: 'sport-outdoor-brand', label: 'Outdoor' },
  ],
  cases: [
    { brand: 'XROUND', category: 'electronics-brand', result: 'Nearly NT$20M in pre-orders', desc: 'Crowdfunding momentum that broke through crowded ecommerce traffic' },
    { brand: '好好生醫', category: 'health-and-supplements', result: 'Repurchase up ~50% via segmentation', desc: 'OMO + social marketing that won brand style awards' },
    { brand: 'CAMPFIRE', category: 'sport-outdoor-brand', result: 'NT$10M+ revenue', desc: 'Ecommerce + YouTube for outdoor lifestyle brands' },
    { brand: 'NISORO', category: 'food-beverage-brand', result: '60% conversion', desc: 'Gamified interactive marketing that customers love' },
    { brand: 'Story Wear', category: 'fashion-brand', result: 'Sustainability chapter', desc: 'Design with purpose alongside community partners' },
    { brand: 'VERVE', category: 'fashion-brand', result: 'Double-digit growth', desc: 'AI marketing ecosystem with beBit TECH + ARVIX' },
    { brand: '古北町', category: 'food-beverage-brand', result: 'Double-digit growth', desc: 'AI insights that reach the right audience' },
    { brand: 'Bello Store', category: 'lifestyle-brand', result: 'Conversion engine', desc: 'Retail ecommerce conversion without burning ad spend' },
    { brand: 'Aromase', category: 'beauty-health-brand', result: '2,500 bottles in a day', desc: 'Independent affiliate storefront for group buys' },
    { brand: 'OMO Brand', category: 'fashion-brand', result: 'NT$100M+ via OMO', desc: 'RFIM segmentation by shopper profiles and behavior' },
    { brand: 'Wellness brand', category: 'health-and-supplements', result: 'Traffic +150%, sales +600%', desc: 'Advisor coaching that optimized every detail' },
    { brand: 'Food brand', category: 'food-beverage-brand', result: '~600 sets in a week', desc: 'Partner performance hub for group-buy hosts' },
    { brand: '3C brand', category: 'electronics-brand', result: 'NT$3M+ from campaigns', desc: 'Crowdfunding-style pages on the brand site' },
    { brand: 'Beauty brand', category: 'beauty-health-brand', result: 'NT$4M in two months', desc: 'Drag-and-drop page editor for faster launches' },
    { brand: 'Subscription brand', category: 'health-and-supplements', result: 'Growing subscription GMV', desc: 'ARVIX subscriptions that remove reorder friction' },
    { brand: 'Live brand', category: 'lifestyle-brand', result: 'NT$1M+ Double 12 live sales', desc: 'LINE Live +1 checkout that feels effortless' },
    { brand: 'App brand', category: 'fashion-brand', result: 'App orders nearly 2x', desc: 'Push-driven brand apps that deepen loyalty' },
  ],
}

const ko: ShowcaseCopy = {
  title: '브랜드 성공 사례',
  subtitle: '실제 ARVIX 판매자 성과 — 한 플랫폼에서 옴니채널 성장.',
  ctaTitle: '전 세계 60만+ 판매자가 신뢰합니다',
  ctaButton: '무료 체험 시작',
  categories: [
    { slug: 'all', label: '전체' },
    { slug: 'fashion-brand', label: '패션' },
    { slug: 'beauty-health-brand', label: '뷰티' },
    { slug: 'food-beverage-brand', label: '식품·음료' },
    { slug: 'health-and-supplements', label: '건강식품' },
    { slug: 'lifestyle-brand', label: '라이프스타일' },
    { slug: 'pets', label: '반려동물' },
    { slug: 'electronics-brand', label: '가전·전자' },
    { slug: 'sport-outdoor-brand', label: '아웃도어' },
  ],
  cases: [
    { brand: 'XROUND', category: 'electronics-brand', result: '사전주문 약 NT$2,000만', desc: '크라우드펀딩 모멘텀으로 혼잡한 이커머스 트래픽을 돌파' },
    { brand: '好好生醫', category: 'health-and-supplements', result: '세그먼테이션으로 재구매 약 50% 상승', desc: 'OMO + 소셜 마케팅으로 브랜드 스타일 어워드 수상' },
    { brand: 'CAMPFIRE', category: 'sport-outdoor-brand', result: 'NT$1,000만+ 매출', desc: '이커머스 + YouTube로 아웃도어 라이프스타일 브랜드 성장' },
    { brand: 'NISORO', category: 'food-beverage-brand', result: '전환율 60%', desc: '고객이 좋아하는 게임형 인터랙티브 마케팅' },
    { brand: 'Story Wear', category: 'fashion-brand', result: '지속가능성의 새 장', desc: '커뮤니티 파트너와 함께하는 목적 있는 디자인' },
    { brand: 'VERVE', category: 'fashion-brand', result: '두 자릿수 성장', desc: 'beBit TECH + ARVIX의 AI 마케팅 생태계' },
    { brand: '古北町', category: 'food-beverage-brand', result: '두 자릿수 성장', desc: '적합한 오디언스에 도달하는 AI 인사이트' },
    { brand: 'Bello Store', category: 'lifestyle-brand', result: '전환 엔진', desc: '광고비 소진 없이 리테일 이커머스 전환' },
    { brand: 'Aromase', category: 'beauty-health-brand', result: '하루 2,500병', desc: '공동구매용 독립 제휴 스토어프론트' },
    { brand: 'OMO Brand', category: 'fashion-brand', result: 'OMO로 NT$1억+', desc: '쇼퍼 프로필·행동 기반 RFIM 세그먼테이션' },
    { brand: 'Wellness brand', category: 'health-and-supplements', result: '트래픽 +150%, 매출 +600%', desc: '세부까지 최적화한 어드바이저 코칭' },
    { brand: 'Food brand', category: 'food-beverage-brand', result: '일주일 약 600세트', desc: '공동구매 호스트용 파트너 성과 허브' },
    { brand: '3C brand', category: 'electronics-brand', result: '캠페인으로 NT$300만+', desc: '브랜드 사이트에 크라우드펀딩형 페이지' },
    { brand: 'Beauty brand', category: 'beauty-health-brand', result: '두 달 만에 NT$400만', desc: '더 빠른 론칭을 위한 드래그 앤 드롭 페이지 편집기' },
    { brand: 'Subscription brand', category: 'health-and-supplements', result: '구독 GMV 성장', desc: '재주문 마찰을 줄이는 ARVIX 구독' },
    { brand: 'Live brand', category: 'lifestyle-brand', result: '더블12 라이브 매출 NT$100만+', desc: '부담 없는 LINE Live +1 체크아웃' },
    { brand: 'App brand', category: 'fashion-brand', result: '앱 주문 약 2배', desc: '푸시로 충성도를 높이는 브랜드 앱' },
  ],
}

const ja: ShowcaseCopy = {
  title: '注目ブランド事例',
  subtitle: '実際の ARVIX 加盟店の成功 — ひとつのプラットフォームでオムニチャネル成長。',
  ctaTitle: '世界中 60 万以上の加盟店が信頼',
  ctaButton: '無料トライアルを開始',
  categories: [
    { slug: 'all', label: 'すべて' },
    { slug: 'fashion-brand', label: 'ファッション' },
    { slug: 'beauty-health-brand', label: 'ビューティー' },
    { slug: 'food-beverage-brand', label: '食品・飲料' },
    { slug: 'health-and-supplements', label: 'サプリメント' },
    { slug: 'lifestyle-brand', label: 'ライフスタイル' },
    { slug: 'pets', label: 'ペット' },
    { slug: 'electronics-brand', label: '家電・電子' },
    { slug: 'sport-outdoor-brand', label: 'アウトドア' },
  ],
  cases: [
    { brand: 'XROUND', category: 'electronics-brand', result: '予約販売で約 NT$2,000万', desc: 'クラウドファンディングの勢いが混雑した EC トラフィックを突破' },
    { brand: '好好生醫', category: 'health-and-supplements', result: 'セグメンテーションでリピート約 50% 向上', desc: 'OMO＋ソーシャルマーケでブランドスタイル賞を受賞' },
    { brand: 'CAMPFIRE', category: 'sport-outdoor-brand', result: 'NT$1,000万超の売上', desc: 'EC＋YouTube でアウトドアライフスタイルブランドを成長' },
    { brand: 'NISORO', category: 'food-beverage-brand', result: 'コンバージョン 60%', desc: '顧客に好まれるゲーミフィケーション型マーケ' },
    { brand: 'Story Wear', category: 'fashion-brand', result: 'サステナビリティの新章', desc: 'コミュニティパートナーと目的あるデザイン' },
    { brand: 'VERVE', category: 'fashion-brand', result: '二桁成長', desc: 'beBit TECH + ARVIX の AI マーケティング生態系' },
    { brand: '古北町', category: 'food-beverage-brand', result: '二桁成長', desc: '適切なオーディエンスに届く AI インサイト' },
    { brand: 'Bello Store', category: 'lifestyle-brand', result: 'コンバージョンエンジン', desc: '広告費を燃やさずリテール EC 転換' },
    { brand: 'Aromase', category: 'beauty-health-brand', result: '1 日 2,500 本', desc: 'グループバイ向け独立アフィリエイト店舗' },
    { brand: 'OMO Brand', category: 'fashion-brand', result: 'OMO で NT$1 億超', desc: 'ショッパー像と行動による RFIM セグメンテーション' },
    { brand: 'Wellness brand', category: 'health-and-supplements', result: 'トラフィック +150%、売上 +600%', desc: '細部まで最適化するアドバイザーコーチング' },
    { brand: 'Food brand', category: 'food-beverage-brand', result: '1 週間で約 600 セット', desc: 'グループバイ主催者向けパートナー成果ハブ' },
    { brand: '3C brand', category: 'electronics-brand', result: 'キャンペーンで NT$300 万超', desc: 'ブランドサイトにクラウドファンディング型ページ' },
    { brand: 'Beauty brand', category: 'beauty-health-brand', result: '2 か月で NT$400 万', desc: 'より速いローンチのためのドラッグ＆ドロップ編集' },
    { brand: 'Subscription brand', category: 'health-and-supplements', result: 'サブスク GMV 成長', desc: '再注文の摩擦を減らす ARVIX サブスクリプション' },
    { brand: 'Live brand', category: 'lifestyle-brand', result: 'ダブル 12 ライブ売上 NT$100 万超', desc: 'スムーズな LINE Live +1 チェックアウト' },
    { brand: 'App brand', category: 'fashion-brand', result: 'アプリ注文が約 2 倍', desc: 'プッシュでロイヤルティを深めるブランドアプリ' },
  ],
}

const vi: ShowcaseCopy = {
  title: 'Câu chuyện thương hiệu nổi bật',
  subtitle: 'Thành công thực tế của người bán ARVIX — tăng trưởng omnichannel trên một nền tảng.',
  ctaTitle: 'Được hơn 600.000 người bán trên thế giới tin dùng',
  ctaButton: 'Bắt đầu dùng thử miễn phí',
  categories: [
    { slug: 'all', label: 'Tất cả' },
    { slug: 'fashion-brand', label: 'Thời trang' },
    { slug: 'beauty-health-brand', label: 'Làm đẹp' },
    { slug: 'food-beverage-brand', label: 'Thực phẩm & đồ uống' },
    { slug: 'health-and-supplements', label: 'Thực phẩm bổ sung' },
    { slug: 'lifestyle-brand', label: 'Lifestyle' },
    { slug: 'pets', label: 'Thú cưng' },
    { slug: 'electronics-brand', label: 'Điện tử' },
    { slug: 'sport-outdoor-brand', label: 'Ngoài trời' },
  ],
  cases: [
    { brand: 'XROUND', category: 'electronics-brand', result: 'Gần NT$20M pre-order', desc: 'Đà crowdfunding vượt qua traffic ecommerce đông đúc' },
    { brand: '好好生醫', category: 'health-and-supplements', result: 'Mua lại tăng ~50% nhờ phân khúc', desc: 'OMO + marketing xã hội đoạt giải phong cách thương hiệu' },
    { brand: 'CAMPFIRE', category: 'sport-outdoor-brand', result: 'Doanh thu NT$10M+', desc: 'Ecommerce + YouTube cho thương hiệu outdoor lifestyle' },
    { brand: 'NISORO', category: 'food-beverage-brand', result: 'Chuyển đổi 60%', desc: 'Marketing tương tác gamified được khách yêu thích' },
    { brand: 'Story Wear', category: 'fashion-brand', result: 'Chương bền vững', desc: 'Thiết kế có mục đích cùng đối tác cộng đồng' },
    { brand: 'VERVE', category: 'fashion-brand', result: 'Tăng trưởng hai chữ số', desc: 'Hệ sinh thái marketing AI với beBit TECH + ARVIX' },
    { brand: '古北町', category: 'food-beverage-brand', result: 'Tăng trưởng hai chữ số', desc: 'AI insights tiếp cận đúng đối tượng' },
    { brand: 'Bello Store', category: 'lifestyle-brand', result: 'Công cụ chuyển đổi', desc: 'Chuyển đổi ecommerce bán lẻ không đốt ngân sách quảng cáo' },
    { brand: 'Aromase', category: 'beauty-health-brand', result: '2.500 chai trong một ngày', desc: 'Storefront affiliate độc lập cho group buy' },
    { brand: 'OMO Brand', category: 'fashion-brand', result: 'NT$100M+ nhờ OMO', desc: 'Phân khúc RFIM theo hồ sơ và hành vi người mua' },
    { brand: 'Wellness brand', category: 'health-and-supplements', result: 'Traffic +150%, doanh số +600%', desc: 'Coaching cố vấn tối ưu từng chi tiết' },
    { brand: 'Food brand', category: 'food-beverage-brand', result: '~600 bộ trong một tuần', desc: 'Hub hiệu suất đối tác cho host group buy' },
    { brand: '3C brand', category: 'electronics-brand', result: 'NT$3M+ từ chiến dịch', desc: 'Trang kiểu crowdfunding trên site thương hiệu' },
    { brand: 'Beauty brand', category: 'beauty-health-brand', result: 'NT$4M trong hai tháng', desc: 'Trình chỉnh sửa trang kéo-thả để ra mắt nhanh hơn' },
    { brand: 'Subscription brand', category: 'health-and-supplements', result: 'GMV đăng ký tăng', desc: 'Đăng ký ARVIX giảm ma sát đặt lại hàng' },
    { brand: 'Live brand', category: 'lifestyle-brand', result: 'Live Double 12 NT$1M+', desc: 'Checkout LINE Live +1 mượt mà' },
    { brand: 'App brand', category: 'fashion-brand', result: 'Đơn app gần gấp đôi', desc: 'App thương hiệu đẩy tương tác và lòng trung thành' },
  ],
}

const es: ShowcaseCopy = {
  title: 'Historias de marca destacadas',
  subtitle: 'Éxitos reales de comercios ARVIX — crecimiento omnicanal en una plataforma.',
  ctaTitle: 'Más de 600.000 comercios confían en ARVIX',
  ctaButton: 'Empezar prueba gratis',
  categories: [
    { slug: 'all', label: 'Todas' },
    { slug: 'fashion-brand', label: 'Moda' },
    { slug: 'beauty-health-brand', label: 'Belleza' },
    { slug: 'food-beverage-brand', label: 'Comida y bebida' },
    { slug: 'health-and-supplements', label: 'Suplementos' },
    { slug: 'lifestyle-brand', label: 'Estilo de vida' },
    { slug: 'pets', label: 'Mascotas' },
    { slug: 'electronics-brand', label: 'Electrónica' },
    { slug: 'sport-outdoor-brand', label: 'Outdoor' },
  ],
  cases: [
    { brand: 'XROUND', category: 'electronics-brand', result: 'Casi NT$20M en preventas', desc: 'Impulso de crowdfunding que rompió el tráfico saturado de ecommerce' },
    { brand: '好好生醫', category: 'health-and-supplements', result: 'Recompra +~50% con segmentación', desc: 'OMO + marketing social con premios de estilo de marca' },
    { brand: 'CAMPFIRE', category: 'sport-outdoor-brand', result: 'Ingresos NT$10M+', desc: 'Ecommerce + YouTube para marcas outdoor lifestyle' },
    { brand: 'NISORO', category: 'food-beverage-brand', result: '60% de conversión', desc: 'Marketing interactivo gamificado que encanta' },
    { brand: 'Story Wear', category: 'fashion-brand', result: 'Capítulo de sostenibilidad', desc: 'Diseño con propósito junto a socios comunitarios' },
    { brand: 'VERVE', category: 'fashion-brand', result: 'Crecimiento de dos dígitos', desc: 'Ecosistema de marketing con IA: beBit TECH + ARVIX' },
    { brand: '古北町', category: 'food-beverage-brand', result: 'Crecimiento de dos dígitos', desc: 'Insights de IA que llegan a la audiencia correcta' },
    { brand: 'Bello Store', category: 'lifestyle-brand', result: 'Motor de conversión', desc: 'Conversión retail ecommerce sin quemar presupuesto publicitario' },
    { brand: 'Aromase', category: 'beauty-health-brand', result: '2.500 botellas en un día', desc: 'Tienda afiliada independiente para compras grupales' },
    { brand: 'OMO Brand', category: 'fashion-brand', result: 'NT$100M+ vía OMO', desc: 'Segmentación RFIM por perfiles y comportamiento' },
    { brand: 'Wellness brand', category: 'health-and-supplements', result: 'Tráfico +150%, ventas +600%', desc: 'Coaching de asesores que optimizó cada detalle' },
    { brand: 'Food brand', category: 'food-beverage-brand', result: '~600 sets en una semana', desc: 'Hub de rendimiento de partners para anfitriones de group buy' },
    { brand: '3C brand', category: 'electronics-brand', result: 'NT$3M+ de campañas', desc: 'Páginas estilo crowdfunding en el sitio de marca' },
    { brand: 'Beauty brand', category: 'beauty-health-brand', result: 'NT$4M en dos meses', desc: 'Editor de páginas drag-and-drop para lanzamientos más rápidos' },
    { brand: 'Subscription brand', category: 'health-and-supplements', result: 'GMV de suscripción en alza', desc: 'Suscripciones ARVIX que quitan fricción al reordenar' },
    { brand: 'Live brand', category: 'lifestyle-brand', result: 'Ventas live Double 12 NT$1M+', desc: 'Checkout LINE Live +1 sin fricción' },
    { brand: 'App brand', category: 'fashion-brand', result: 'Pedidos de app casi 2x', desc: 'Apps de marca con push que profundizan la lealtad' },
  ],
}

const pt: ShowcaseCopy = {
  title: 'Histórias de marca em destaque',
  subtitle: 'Vitórias reais de comerciantes ARVIX — crescimento omnichannel em uma plataforma.',
  ctaTitle: 'Mais de 600.000 comerciantes confiam na ARVIX',
  ctaButton: 'Começar teste grátis',
  categories: [
    { slug: 'all', label: 'Todas' },
    { slug: 'fashion-brand', label: 'Moda' },
    { slug: 'beauty-health-brand', label: 'Beleza' },
    { slug: 'food-beverage-brand', label: 'Comida e bebida' },
    { slug: 'health-and-supplements', label: 'Suplementos' },
    { slug: 'lifestyle-brand', label: 'Estilo de vida' },
    { slug: 'pets', label: 'Pets' },
    { slug: 'electronics-brand', label: 'Eletrônicos' },
    { slug: 'sport-outdoor-brand', label: 'Outdoor' },
  ],
  cases: [
    { brand: 'XROUND', category: 'electronics-brand', result: 'Quase NT$20M em pré-vendas', desc: 'Impulso de crowdfunding que rompeu o tráfego saturado de ecommerce' },
    { brand: '好好生醫', category: 'health-and-supplements', result: 'Recompra +~50% com segmentação', desc: 'OMO + marketing social com prêmios de estilo de marca' },
    { brand: 'CAMPFIRE', category: 'sport-outdoor-brand', result: 'Receita NT$10M+', desc: 'Ecommerce + YouTube para marcas outdoor lifestyle' },
    { brand: 'NISORO', category: 'food-beverage-brand', result: '60% de conversão', desc: 'Marketing interativo gamificado que encanta' },
    { brand: 'Story Wear', category: 'fashion-brand', result: 'Capítulo de sustentabilidade', desc: 'Design com propósito com parceiros da comunidade' },
    { brand: 'VERVE', category: 'fashion-brand', result: 'Crescimento de dois dígitos', desc: 'Ecossistema de marketing com IA: beBit TECH + ARVIX' },
    { brand: '古北町', category: 'food-beverage-brand', result: 'Crescimento de dois dígitos', desc: 'Insights de IA que alcançam o público certo' },
    { brand: 'Bello Store', category: 'lifestyle-brand', result: 'Motor de conversão', desc: 'Conversão retail ecommerce sem queimar verba de anúncios' },
    { brand: 'Aromase', category: 'beauty-health-brand', result: '2.500 frascos em um dia', desc: 'Vitrine afiliada independente para group buys' },
    { brand: 'OMO Brand', category: 'fashion-brand', result: 'NT$100M+ via OMO', desc: 'Segmentação RFIM por perfis e comportamento' },
    { brand: 'Wellness brand', category: 'health-and-supplements', result: 'Tráfego +150%, vendas +600%', desc: 'Coaching de consultores que otimizou cada detalhe' },
    { brand: 'Food brand', category: 'food-beverage-brand', result: '~600 kits em uma semana', desc: 'Hub de performance de parceiros para hosts de group buy' },
    { brand: '3C brand', category: 'electronics-brand', result: 'NT$3M+ em campanhas', desc: 'Páginas estilo crowdfunding no site da marca' },
    { brand: 'Beauty brand', category: 'beauty-health-brand', result: 'NT$4M em dois meses', desc: 'Editor de páginas arrastar e soltar para lançamentos mais rápidos' },
    { brand: 'Subscription brand', category: 'health-and-supplements', result: 'GMV de assinatura em alta', desc: 'Assinaturas ARVIX que removem atrito de recompra' },
    { brand: 'Live brand', category: 'lifestyle-brand', result: 'Vendas live Double 12 NT$1M+', desc: 'Checkout LINE Live +1 sem atrito' },
    { brand: 'App brand', category: 'fashion-brand', result: 'Pedidos do app quase 2x', desc: 'Apps de marca com push que aprofundam a lealdade' },
  ],
}

const de: ShowcaseCopy = {
  title: 'Ausgewählte Markengeschichten',
  subtitle: 'Echte ARVIX-Händlererfolge — Omnichannel-Wachstum auf einer Plattform.',
  ctaTitle: 'Über 600.000 Händler weltweit vertrauen ARVIX',
  ctaButton: 'Kostenlose Testphase starten',
  categories: [
    { slug: 'all', label: 'Alle' },
    { slug: 'fashion-brand', label: 'Mode' },
    { slug: 'beauty-health-brand', label: 'Beauty' },
    { slug: 'food-beverage-brand', label: 'Essen & Trinken' },
    { slug: 'health-and-supplements', label: 'Nahrungsergänzung' },
    { slug: 'lifestyle-brand', label: 'Lifestyle' },
    { slug: 'pets', label: 'Haustiere' },
    { slug: 'electronics-brand', label: 'Elektronik' },
    { slug: 'sport-outdoor-brand', label: 'Outdoor' },
  ],
  cases: [
    { brand: 'XROUND', category: 'electronics-brand', result: 'Fast NT$20M Vorverkauf', desc: 'Crowdfunding-Schwung, der dichten Ecommerce-Traffic durchbricht' },
    { brand: '好好生醫', category: 'health-and-supplements', result: 'Wiederkauf +~50% durch Segmentierung', desc: 'OMO + Social Marketing mit Brand-Style-Awards' },
    { brand: 'CAMPFIRE', category: 'sport-outdoor-brand', result: 'NT$10M+ Umsatz', desc: 'Ecommerce + YouTube für Outdoor-Lifestyle-Marken' },
    { brand: 'NISORO', category: 'food-beverage-brand', result: '60% Conversion', desc: 'Gamifiziertes Interaktionsmarketing, das Kunden lieben' },
    { brand: 'Story Wear', category: 'fashion-brand', result: 'Nachhaltigkeitskapitel', desc: 'Design mit Zweck gemeinsam mit Community-Partnern' },
    { brand: 'VERVE', category: 'fashion-brand', result: 'Zweistes Wachstum', desc: 'KI-Marketing-Ökosystem mit beBit TECH + ARVIX' },
    { brand: '古北町', category: 'food-beverage-brand', result: 'Zweistes Wachstum', desc: 'KI-Insights, die die richtige Zielgruppe erreichen' },
    { brand: 'Bello Store', category: 'lifestyle-brand', result: 'Conversion-Engine', desc: 'Retail-Ecommerce-Conversion ohne Werbebudget-Verbrennung' },
    { brand: 'Aromase', category: 'beauty-health-brand', result: '2.500 Flaschen an einem Tag', desc: 'Unabhängiger Affiliate-Storefront für Group Buys' },
    { brand: 'OMO Brand', category: 'fashion-brand', result: 'NT$100M+ via OMO', desc: 'RFIM-Segmentierung nach Shopper-Profilen und Verhalten' },
    { brand: 'Wellness brand', category: 'health-and-supplements', result: 'Traffic +150%, Umsatz +600%', desc: 'Advisor-Coaching, das jedes Detail optimierte' },
    { brand: 'Food brand', category: 'food-beverage-brand', result: '~600 Sets in einer Woche', desc: 'Partner-Performance-Hub für Group-Buy-Hosts' },
    { brand: '3C brand', category: 'electronics-brand', result: 'NT$3M+ aus Kampagnen', desc: 'Crowdfunding-ähnliche Seiten auf der Markenseite' },
    { brand: 'Beauty brand', category: 'beauty-health-brand', result: 'NT$4M in zwei Monaten', desc: 'Drag-and-Drop-Seiteneditor für schnellere Launches' },
    { brand: 'Subscription brand', category: 'health-and-supplements', result: 'Wachsendes Abo-GMV', desc: 'ARVIX-Abos, die Nachbestellreibung reduzieren' },
    { brand: 'Live brand', category: 'lifestyle-brand', result: 'Double-12-Live-Umsatz NT$1M+', desc: 'Reibungsloser LINE Live +1 Checkout' },
    { brand: 'App brand', category: 'fashion-brand', result: 'App-Bestellungen fast 2x', desc: 'Push-getriebene Marken-Apps für tiefere Loyalität' },
  ],
}

const fr: ShowcaseCopy = {
  title: 'Histoires de marques en vedette',
  subtitle: 'Succès réels de marchands ARVIX — croissance omnicanale sur une plateforme.',
  ctaTitle: 'Plus de 600 000 marchands font confiance à ARVIX',
  ctaButton: 'Démarrer l’essai gratuit',
  categories: [
    { slug: 'all', label: 'Tout' },
    { slug: 'fashion-brand', label: 'Mode' },
    { slug: 'beauty-health-brand', label: 'Beauté' },
    { slug: 'food-beverage-brand', label: 'Alimentation' },
    { slug: 'health-and-supplements', label: 'Compléments' },
    { slug: 'lifestyle-brand', label: 'Lifestyle' },
    { slug: 'pets', label: 'Animaux' },
    { slug: 'electronics-brand', label: 'Électronique' },
    { slug: 'sport-outdoor-brand', label: 'Outdoor' },
  ],
  cases: [
    { brand: 'XROUND', category: 'electronics-brand', result: 'Près de NT$20M en précommandes', desc: 'Élan crowdfunding qui perce un trafic ecommerce saturé' },
    { brand: '好好生醫', category: 'health-and-supplements', result: 'Rachat +~50% via segmentation', desc: 'OMO + marketing social récompensé pour le style de marque' },
    { brand: 'CAMPFIRE', category: 'sport-outdoor-brand', result: 'Revenus NT$10M+', desc: 'Ecommerce + YouTube pour marques outdoor lifestyle' },
    { brand: 'NISORO', category: 'food-beverage-brand', result: '60% de conversion', desc: 'Marketing interactif gamifié adopté par les clients' },
    { brand: 'Story Wear', category: 'fashion-brand', result: 'Chapitre durabilité', desc: 'Design engagé avec des partenaires communautaires' },
    { brand: 'VERVE', category: 'fashion-brand', result: 'Croissance à deux chiffres', desc: 'Écosystème marketing IA avec beBit TECH + ARVIX' },
    { brand: '古北町', category: 'food-beverage-brand', result: 'Croissance à deux chiffres', desc: 'Insights IA qui atteignent la bonne audience' },
    { brand: 'Bello Store', category: 'lifestyle-brand', result: 'Moteur de conversion', desc: 'Conversion retail ecommerce sans brûler le budget pub' },
    { brand: 'Aromase', category: 'beauty-health-brand', result: '2 500 flacons en un jour', desc: 'Vitrine affiliée indépendante pour group buys' },
    { brand: 'OMO Brand', category: 'fashion-brand', result: 'NT$100M+ via OMO', desc: 'Segmentation RFIM par profils et comportements shoppers' },
    { brand: 'Wellness brand', category: 'health-and-supplements', result: 'Trafic +150%, ventes +600%', desc: 'Coaching conseiller qui a optimisé chaque détail' },
    { brand: 'Food brand', category: 'food-beverage-brand', result: '~600 lots en une semaine', desc: 'Hub de performance partenaires pour hôtes de group buy' },
    { brand: '3C brand', category: 'electronics-brand', result: 'NT$3M+ de campagnes', desc: 'Pages style crowdfunding sur le site de marque' },
    { brand: 'Beauty brand', category: 'beauty-health-brand', result: 'NT$4M en deux mois', desc: 'Éditeur de pages glisser-déposer pour des lancements plus rapides' },
    { brand: 'Subscription brand', category: 'health-and-supplements', result: 'GMV abonnement en hausse', desc: 'Abonnements ARVIX qui réduisent la friction de récommande' },
    { brand: 'Live brand', category: 'lifestyle-brand', result: 'Ventes live Double 12 NT$1M+', desc: 'Checkout LINE Live +1 sans friction' },
    { brand: 'App brand', category: 'fashion-brand', result: 'Commandes app presque 2x', desc: 'Apps de marque push qui renforcent la fidélité' },
  ],
}


const copy: Partial<Record<Locale, ShowcaseCopy>> & { 'zh-TW': ShowcaseCopy; en: ShowcaseCopy } = {
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

export default function ShowcasePage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? c.cases : c.cases.filter(item => item.category === active)

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EEF0FF 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>{c.title}</h1>
          <p className="text-lg" style={{ color: '#687280' }}>{c.subtitle}</p>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {c.categories.map((cat) => (
              <button key={cat.slug} onClick={() => setActive(cat.slug)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
                style={active === cat.slug
                  ? { backgroundColor: '#5B5FF0', color: 'white' }
                  : { backgroundColor: '#F4F7FC', color: '#687280' }}>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div key={`${item.brand}-${item.result}`} className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-xs font-bold mb-3 px-3 py-1 rounded-full inline-block" style={{ backgroundColor: '#EEF0FF', color: '#5B5FF0' }}>
                  {c.categories.find(cat => cat.slug === item.category)?.label}
                </div>
                <h3 className="text-xl font-bold mt-2 mb-2" style={{ color: '#00142D' }}>{item.brand}</h3>
                <h4 className="text-lg font-black mb-3" style={{ color: '#5B5FF0' }}>{item.result}</h4>
                <p className="text-sm" style={{ color: '#687280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.ctaTitle}</h2>
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.ctaButton}
          </a>
        </div>
      </section>
    </main>
  )
}
