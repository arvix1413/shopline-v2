'use client'

import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type ConsultationCopy = {
  title: string
  subtitle: string
  cta: string
  stagesTitle: string
  stages: { title: string; desc: string }[]
  featuresTitle: string
  featuresSubtitle: string
  features: { title: string; desc: string }[]
  subsidyTitle: string
  subsidies: { title: string; sub: string }[]
  ctaTitle: string
  ctaSubtitle: string
}

const zhTW: ConsultationCopy = {
  title: '零售開店大小事，讓 ARVIX 專家來幫你！',
  subtitle: '專業顧問一對一解答開店疑難雜症！從數位轉型到全通路整合，立即預約免費專人諮詢，開啟你的電商生意。',
  cta: '立即預約免費諮詢',
  stagesTitle: '你正處於哪個階段？',
  stages: [
    { title: '數位轉型', desc: '想從傳統零售拓展到線上通路，放大客群' },
    { title: '營收突破', desc: '想突破品牌的成長瓶頸，更精準找到對的顧客' },
    { title: '全通路經營', desc: '想要 OMO 整合，打造虛實融合的無縫購物體驗' },
    { title: '自動化管理', desc: '想提升營運效率，有效降低管理及人力成本' },
  ],
  featuresTitle: '全方位零售解決方案',
  featuresSubtitle: 'ARVIX 提供全方位零售解決方案，橫跨電商與實體通路，不管是從實體店做數位轉型還是網店拓展線下新商機，全面支援你所有需求。',
  features: [
    { title: '免寫程式快速打造高質感品牌購物網站', desc: '不用複雜的程式語法，透過拖曳排列方式與一鍵套用設計主題，你也能在短時間內打造高質感的專屬品牌網店！' },
    { title: '告別資訊碎片化一站式整合全通路零售生意', desc: '透過 ARVIX 一站整合社群商務、品牌 APP、與實體 POS 數據全面打通，實現真正的會員導購與全通路營收。' },
    { title: '精準掌握第一方數據有效提升品牌回購率與業績', desc: '深度洞察顧客行為並結合多種彈性優惠玩法與自動化行銷推播，做出品牌差異化，大幅提升 CRM 經營成效。' },
    { title: '用 AI 智慧助攻轉換率', desc: '一鍵就能啟用！ARVIX「AI 智慧商品推薦 PLUS」透過 AI 演算法深度學習分析消費偏好，自動呈現個人化推薦商品清單，協助商家提升整體轉單率與客單價！' },
  ],
  subsidyTitle: '補助、資源一次到位！ARVIX 祭出總價值超過 20 萬補貼',
  subsidies: [
    { title: '新簽約用戶最高可享運費補助金', sub: '5 折優惠再送 SSL 網站資安加密 (價值 NT$3000)' },
    { title: '現在起購買開店方案最高享', sub: '價值超過 NT$ 85,000 再送破萬價值的產業數據報告' },
    { title: '專屬電商課程超過 40 個精選主題', sub: '限量名額顧問陪跑計劃享' },
  ],
  ctaTitle: '商家好評推薦\n全球超過 60 萬品牌已使用 ARVIX',
  ctaSubtitle: '與 ARVIX 專業顧問進行一對一免費電話諮詢！',
}

const zhCN: ConsultationCopy = {
  title: '零售开店大小事，让 ARVIX 专家来帮你！',
  subtitle: '专业顾问一对一解答开店疑难杂症！从数字转型到全渠道整合，立即预约免费专人咨询，开启你的电商生意。',
  cta: '立即预约免费咨询',
  stagesTitle: '你正处于哪个阶段？',
  stages: [
    { title: '数字转型', desc: '想从传统零售拓展到线上渠道，放大客群' },
    { title: '营收突破', desc: '想突破品牌的成长瓶颈，更精准找到对的顾客' },
    { title: '全渠道经营', desc: '想要 OMO 整合，打造虚实融合的无缝购物体验' },
    { title: '自动化管理', desc: '想提升运营效率，有效降低管理及人力成本' },
  ],
  featuresTitle: '全方位零售解决方案',
  featuresSubtitle: 'ARVIX 提供全方位零售解决方案，横跨电商与实体渠道，不管是从实体店做数字转型还是网店拓展线下新商机，全面支持你所有需求。',
  features: [
    { title: '免写程序快速打造高质感品牌购物网站', desc: '不用复杂的程序语法，通过拖曳排列与一键套用设计主题，你也能在短时间内打造高质感的专属品牌网店！' },
    { title: '告别信息碎片化一站式整合全渠道零售生意', desc: '通过 ARVIX 一站整合社群商务、品牌 APP、与实体 POS 数据全面打通，实现真正的会员导购与全渠道营收。' },
    { title: '精准掌握第一方数据有效提升品牌回购率与业绩', desc: '深度洞察顾客行为并结合多种弹性优惠玩法与自动化营销推送，做出品牌差异化，大幅提升 CRM 经营成效。' },
    { title: '用 AI 智慧助攻转化率', desc: '一键就能启用！ARVIX「AI 智慧商品推荐 PLUS」通过 AI 算法深度学习分析消费偏好，自动呈现个性化推荐商品清单，协助商家提升整体转单率与客单价！' },
  ],
  subsidyTitle: '补助、资源一次到位！ARVIX 祭出总价值超过 20 万补贴',
  subsidies: [
    { title: '新签约用户最高可享运费补助金', sub: '5 折优惠再送 SSL 网站资安加密 (价值 NT$3000)' },
    { title: '现在起购买开店方案最高享', sub: '价值超过 NT$ 85,000 再送破万价值的产业数据报告' },
    { title: '专属电商课程超过 40 个精选主题', sub: '限量名额顾问陪跑计划享' },
  ],
  ctaTitle: '商家好评推荐\n全球超过 60 万品牌已使用 ARVIX',
  ctaSubtitle: '与 ARVIX 专业顾问进行一对一免费电话咨询！',
}

const en: ConsultationCopy = {
  title: 'Retail launch questions? ARVIX experts can help.',
  subtitle: 'One-on-one advisors for everything from digital transformation to omnichannel. Book a free consult and start selling.',
  cta: 'Book a free consult',
  stagesTitle: 'Where are you today?',
  stages: [
    { title: 'Digital transformation', desc: 'Expand traditional retail online and grow your audience' },
    { title: 'Revenue breakthrough', desc: 'Break growth ceilings and find the right customers' },
    { title: 'Omnichannel ops', desc: 'Unify OMO for a seamless online–offline experience' },
    { title: 'Automation', desc: 'Raise efficiency and cut management overhead' },
  ],
  featuresTitle: 'Full-stack retail solutions',
  featuresSubtitle: 'ARVIX covers ecommerce and physical retail — whether you digitize stores or expand online brands offline.',
  features: [
    { title: 'No-code brand storefronts', desc: 'Drag-and-drop layouts and one-click themes help you launch a polished brand store fast.' },
    { title: 'One hub for omnichannel commerce', desc: 'Connect social commerce, brand apps, and POS data for true membership-driven revenue.' },
    { title: 'First-party data that drives repurchase', desc: 'Understand behavior, run flexible offers, and automate outreach to lift CRM results.' },
    { title: 'AI that lifts conversion', desc: 'Enable AI product recommendations that personalize catalogs and raise AOV and conversion.' },
  ],
  subsidyTitle: 'Credits & resources in one place — over NT$200K in value',
  subsidies: [
    { title: 'Shipping credits for new contracts', sub: '50% off plus SSL encryption (value NT$3,000)' },
    { title: 'Launch plan bonuses', sub: 'Over NT$85,000 in value plus industry reports' },
    { title: '40+ ecommerce course topics', sub: 'Limited advisor coaching seats' },
  ],
  ctaTitle: 'Loved by merchants\n600,000+ brands use ARVIX',
  ctaSubtitle: 'Book a free one-on-one phone consult with an ARVIX advisor.',
}

const ko: ConsultationCopy = {
  title: '소매 창업, ARVIX 전문가가 도와드립니다!',
  subtitle: '디지털 전환부터 옴니채널 통합까지 1:1 상담. 무료 상담을 예약하고 판매를 시작하세요.',
  cta: '무료 상담 예약',
  stagesTitle: '지금 어느 단계인가요?',
  stages: [
    { title: '디지털 전환', desc: '전통 소매를 온라인으로 확장하고 고객층을 키우세요' },
    { title: '매출 돌파', desc: '성장 한계를 넘고 적합한 고객을 찾으세요' },
    { title: '옴니채널 운영', desc: 'OMO를 통합해 온·오프라인 경험을 이어주세요' },
    { title: '자동화', desc: '효율을 높이고 관리 비용을 줄이세요' },
  ],
  featuresTitle: '풀스택 리테일 솔루션',
  featuresSubtitle: 'ARVIX는 이커머스와 오프라인 소매를 모두 지원합니다 — 매장 디지털화부터 온라인 브랜드의 오프라인 확장까지.',
  features: [
    { title: '노코드 브랜드 스토어', desc: '드래그 앤 드롭 레이아웃과 원클릭 테마로 세련된 브랜드 스토어를 빠르게 론칭하세요.' },
    { title: '옴니채널 커머스 허브', desc: '소셜 커머스, 브랜드 앱, POS 데이터를 연결해 멤버십 기반 매출을 만드세요.' },
    { title: '재구매를 이끄는 자사 데이터', desc: '행동을 이해하고 유연한 혜택과 자동 아웃리치로 CRM 성과를 높이세요.' },
    { title: '전환을 높이는 AI', desc: 'AI 상품 추천으로 카탈로그를 개인화하고 AOV·전환율을 높이세요.' },
  ],
  subsidyTitle: '크레딧과 리소스를 한곳에 — NT$20만 이상 가치',
  subsidies: [
    { title: '신규 계약 배송 크레딧', sub: '50% 할인 + SSL 암호화 (가치 NT$3,000)' },
    { title: '런칭 플랜 보너스', sub: 'NT$85,000 이상 가치 + 산업 리포트' },
    { title: '40+ 이커머스 강의 주제', sub: '한정 어드바이저 코칭 좌석' },
  ],
  ctaTitle: '판매자 추천\n60만+ 브랜드가 ARVIX 사용',
  ctaSubtitle: 'ARVIX 어드바이저와 무료 1:1 전화 상담을 예약하세요.',
}

const ja: ConsultationCopy = {
  title: '小売の立ち上げ、ARVIX の専門家がサポート',
  subtitle: 'デジタルトランスフォーメーションからオムニチャネルまで、1対1で相談。無料相談を予約して販売を始めましょう。',
  cta: '無料相談を予約',
  stagesTitle: '今はどの段階ですか？',
  stages: [
    { title: 'デジタルトランスフォーメーション', desc: '従来の小売をオンラインに広げ、顧客層を拡大' },
    { title: '売上の突破', desc: '成長の天井を破り、適切な顧客を見つける' },
    { title: 'オムニチャネル運用', desc: 'OMO を統合し、オンラインとオフラインをシームレスに' },
    { title: '自動化', desc: '効率を上げ、管理コストを削減' },
  ],
  featuresTitle: 'フルスタック小売ソリューション',
  featuresSubtitle: 'ARVIX は EC と実店舗の両方をカバー — 店舗のデジタル化からオンラインブランドのオフライン展開まで。',
  features: [
    { title: 'ノーコードのブランドストア', desc: 'ドラッグ＆ドロップとワンクリックテーマで、洗練されたブランドストアをすばやく公開。' },
    { title: 'オムニチャネルコマースのハブ', desc: 'ソーシャルコマース、ブランドアプリ、POS データをつなぎ、会員主導の売上を実現。' },
    { title: 'リピートを促すファーストパーティデータ', desc: '行動を把握し、柔軟な特典と自動アウトリーチで CRM 成果を向上。' },
    { title: 'コンバージョンを高める AI', desc: 'AI 商品レコメンドでカタログをパーソナライズし、AOV とコンバージョンを向上。' },
  ],
  subsidyTitle: 'クレジットとリソースを一箇所に — NT$20万以上の価値',
  subsidies: [
    { title: '新規契約の配送クレジット', sub: '50% オフ＋SSL 暗号化（価値 NT$3,000）' },
    { title: 'ローンチプラン特典', sub: 'NT$85,000 以上の価値＋業界レポート' },
    { title: '40 以上の EC コーステーマ', sub: '限定のアドバイザーコーチング枠' },
  ],
  ctaTitle: '加盟店に支持されています\n60 万以上のブランドが ARVIX を利用',
  ctaSubtitle: 'ARVIX アドバイザーとの無料 1 対 1 電話相談を予約。',
}

const vi: ConsultationCopy = {
  title: 'Mở cửa hàng bán lẻ? Chuyên gia ARVIX sẵn sàng hỗ trợ.',
  subtitle: 'Tư vấn 1-1 từ chuyển đổi số đến omnichannel. Đặt lịch tư vấn miễn phí và bắt đầu bán hàng.',
  cta: 'Đặt tư vấn miễn phí',
  stagesTitle: 'Bạn đang ở giai đoạn nào?',
  stages: [
    { title: 'Chuyển đổi số', desc: 'Mở rộng bán lẻ truyền thống lên online và tăng đối tượng khách' },
    { title: 'Bứt phá doanh thu', desc: 'Phá trần tăng trưởng và tìm đúng khách hàng' },
    { title: 'Vận hành omnichannel', desc: 'Hợp nhất OMO cho trải nghiệm online–offline liền mạch' },
    { title: 'Tự động hóa', desc: 'Tăng hiệu quả và giảm chi phí quản lý' },
  ],
  featuresTitle: 'Giải pháp bán lẻ toàn diện',
  featuresSubtitle: 'ARVIX bao phủ ecommerce và bán lẻ vật lý — số hóa cửa hàng hoặc mở rộng thương hiệu online xuống offline.',
  features: [
    { title: 'Storefront thương hiệu không cần code', desc: 'Bố cục kéo-thả và theme một cú nhấp giúp bạn ra mắt cửa hàng thương hiệu nhanh chóng.' },
    { title: 'Một hub cho thương mại omnichannel', desc: 'Kết nối social commerce, app thương hiệu và dữ liệu POS cho doanh thu từ hội viên.' },
    { title: 'Dữ liệu first-party thúc đẩy mua lại', desc: 'Hiểu hành vi, chạy ưu đãi linh hoạt và tự động tiếp cận để nâng CRM.' },
    { title: 'AI tăng chuyển đổi', desc: 'Bật gợi ý sản phẩm AI để cá nhân hóa danh mục và tăng AOV cùng chuyển đổi.' },
  ],
  subsidyTitle: 'Tín dụng & tài nguyên một chỗ — hơn NT$200K giá trị',
  subsidies: [
    { title: 'Tín dụng vận chuyển cho hợp đồng mới', sub: 'Giảm 50% kèm mã hóa SSL (giá trị NT$3,000)' },
    { title: 'Thưởng gói ra mắt', sub: 'Hơn NT$85,000 giá trị kèm báo cáo ngành' },
    { title: '40+ chủ đề khóa học ecommerce', sub: 'Suất coaching cố vấn có hạn' },
  ],
  ctaTitle: 'Được người bán yêu thích\nHơn 600.000 thương hiệu dùng ARVIX',
  ctaSubtitle: 'Đặt tư vấn điện thoại 1-1 miễn phí với cố vấn ARVIX.',
}

const es: ConsultationCopy = {
  title: '¿Dudas al lanzar tu retail? Los expertos de ARVIX te ayudan.',
  subtitle: 'Asesores 1 a 1 desde transformación digital hasta omnicanal. Reserva una consulta gratis y empieza a vender.',
  cta: 'Reservar consulta gratis',
  stagesTitle: '¿En qué etapa estás?',
  stages: [
    { title: 'Transformación digital', desc: 'Lleva el retail tradicional online y amplía tu audiencia' },
    { title: 'Salto de ingresos', desc: 'Rompe techos de crecimiento y encuentra a los clientes correctos' },
    { title: 'Operación omnicanal', desc: 'Unifica OMO para una experiencia online–offline fluida' },
    { title: 'Automatización', desc: 'Sube la eficiencia y reduce costos de gestión' },
  ],
  featuresTitle: 'Soluciones retail de punta a punta',
  featuresSubtitle: 'ARVIX cubre ecommerce y retail físico — digitaliza tiendas o lleva marcas online al offline.',
  features: [
    { title: 'Tiendas de marca sin código', desc: 'Layouts drag-and-drop y temas de un clic para lanzar una tienda pulida rápido.' },
    { title: 'Un hub para comercio omnicanal', desc: 'Conecta social commerce, apps de marca y datos POS para ingresos impulsados por membresía.' },
    { title: 'Datos first-party que impulsan la recompra', desc: 'Entiende el comportamiento, ofrece promociones flexibles y automatiza el alcance para mejorar el CRM.' },
    { title: 'IA que eleva la conversión', desc: 'Activa recomendaciones de producto con IA que personalizan el catálogo y suben AOV y conversión.' },
  ],
  subsidyTitle: 'Créditos y recursos en un solo lugar — más de NT$200K en valor',
  subsidies: [
    { title: 'Créditos de envío para nuevos contratos', sub: '50% de descuento más cifrado SSL (valor NT$3,000)' },
    { title: 'Bonos del plan de lanzamiento', sub: 'Más de NT$85,000 en valor más informes de industria' },
    { title: 'Más de 40 temas de cursos de ecommerce', sub: 'Cupos limitados de coaching con asesores' },
  ],
  ctaTitle: 'Recomendado por comercios\nMás de 600.000 marcas usan ARVIX',
  ctaSubtitle: 'Reserva una consulta telefónica 1 a 1 gratis con un asesor ARVIX.',
}

const pt: ConsultationCopy = {
  title: 'Dúvidas no lançamento do varejo? Especialistas ARVIX ajudam.',
  subtitle: 'Consultores 1 a 1 da transformação digital ao omnichannel. Agende uma consulta gratuita e comece a vender.',
  cta: 'Agendar consulta gratuita',
  stagesTitle: 'Em que estágio você está?',
  stages: [
    { title: 'Transformação digital', desc: 'Leve o varejo tradicional online e amplie o público' },
    { title: 'Salto de receita', desc: 'Quebre tetos de crescimento e encontre os clientes certos' },
    { title: 'Operação omnichannel', desc: 'Unifique OMO para uma experiência online–offline fluida' },
    { title: 'Automação', desc: 'Aumente a eficiência e reduza custos de gestão' },
  ],
  featuresTitle: 'Soluções de varejo full-stack',
  featuresSubtitle: 'A ARVIX cobre ecommerce e varejo físico — digitalize lojas ou leve marcas online para o offline.',
  features: [
    { title: 'Vitrines de marca sem código', desc: 'Layouts arrastar e soltar e temas com um clique para lançar uma loja polida rápido.' },
    { title: 'Um hub para comércio omnichannel', desc: 'Conecte social commerce, apps de marca e dados de POS para receita movida por membros.' },
    { title: 'Dados first-party que impulsionam a recompra', desc: 'Entenda o comportamento, rode ofertas flexíveis e automatize o alcance para elevar o CRM.' },
    { title: 'IA que eleva a conversão', desc: 'Ative recomendações de produto com IA que personalizam o catálogo e elevam AOV e conversão.' },
  ],
  subsidyTitle: 'Créditos e recursos em um só lugar — mais de NT$200K em valor',
  subsidies: [
    { title: 'Créditos de frete para novos contratos', sub: '50% de desconto mais criptografia SSL (valor NT$3,000)' },
    { title: 'Bônus do plano de lançamento', sub: 'Mais de NT$85,000 em valor mais relatórios do setor' },
    { title: 'Mais de 40 temas de cursos de ecommerce', sub: 'Vagas limitadas de coaching com consultores' },
  ],
  ctaTitle: 'Amado por comerciantes\nMais de 600.000 marcas usam ARVIX',
  ctaSubtitle: 'Agende uma consulta telefônica 1 a 1 gratuita com um consultor ARVIX.',
}

const de: ConsultationCopy = {
  title: 'Fragen zum Retail-Launch? ARVIX-Experten helfen.',
  subtitle: '1:1-Beratung von Digital Transformation bis Omnichannel. Kostenlose Beratung buchen und verkaufen starten.',
  cta: 'Kostenlose Beratung buchen',
  stagesTitle: 'Wo stehen Sie heute?',
  stages: [
    { title: 'Digitale Transformation', desc: 'Klassischen Handel online erweitern und Reichweite steigern' },
    { title: 'Umsatzdurchbruch', desc: 'Wachstumsgrenzen durchbrechen und die richtigen Kunden finden' },
    { title: 'Omnichannel-Betrieb', desc: 'OMO vereinen für ein nahtloses Online–Offline-Erlebnis' },
    { title: 'Automatisierung', desc: 'Effizienz steigern und Verwaltungskosten senken' },
  ],
  featuresTitle: 'Full-Stack-Retail-Lösungen',
  featuresSubtitle: 'ARVIX deckt Ecommerce und stationären Handel ab — Filialen digitalisieren oder Online-Marken offline ausbauen.',
  features: [
    { title: 'No-Code-Markenshops', desc: 'Drag-and-Drop-Layouts und One-Click-Themes für einen schnellen, polierten Markenstore.' },
    { title: 'Ein Hub für Omnichannel-Commerce', desc: 'Social Commerce, Marken-Apps und POS-Daten verbinden für mitgliedschaftsgetriebenen Umsatz.' },
    { title: 'First-Party-Daten für Wiederkäufe', desc: 'Verhalten verstehen, flexible Angebote und automatisierte Outreach für bessere CRM-Ergebnisse.' },
    { title: 'KI, die Conversion steigert', desc: 'KI-Produktempfehlungen personalisieren den Katalog und erhöhen AOV und Conversion.' },
  ],
  subsidyTitle: 'Credits & Ressourcen an einem Ort — über NT$200K Wert',
  subsidies: [
    { title: 'Versand-Credits für neue Verträge', sub: '50 % Rabatt plus SSL-Verschlüsselung (Wert NT$3.000)' },
    { title: 'Launch-Plan-Boni', sub: 'Über NT$85.000 Wert plus Branchenreports' },
    { title: '40+ Ecommerce-Kursthemen', sub: 'Begrenzte Advisor-Coaching-Plätze' },
  ],
  ctaTitle: 'Von Händlern empfohlen\nÜber 600.000 Marken nutzen ARVIX',
  ctaSubtitle: 'Kostenlose 1:1-Telefonberatung mit einem ARVIX-Advisor buchen.',
}

const fr: ConsultationCopy = {
  title: 'Questions sur le lancement retail ? Les experts ARVIX aident.',
  subtitle: 'Conseillers en 1:1, de la transformation digitale à l’omnicanal. Réservez une consultation gratuite et commencez à vendre.',
  cta: 'Réserver une consultation gratuite',
  stagesTitle: 'Où en êtes-vous aujourd’hui ?',
  stages: [
    { title: 'Transformation digitale', desc: 'Étendez le retail traditionnel en ligne et élargissez votre audience' },
    { title: 'Percée de revenus', desc: 'Brisez les plafonds de croissance et trouvez les bons clients' },
    { title: 'Ops omnicanales', desc: 'Unifiez l’OMO pour une expérience online–offline fluide' },
    { title: 'Automatisation', desc: 'Augmentez l’efficacité et réduisez les coûts de gestion' },
  ],
  featuresTitle: 'Solutions retail full-stack',
  featuresSubtitle: 'ARVIX couvre l’ecommerce et le retail physique — digitalisez les magasins ou développez les marques online en offline.',
  features: [
    { title: 'Boutiques de marque no-code', desc: 'Layouts glisser-déposer et thèmes en un clic pour lancer vite une boutique soignée.' },
    { title: 'Un hub pour le commerce omnicanal', desc: 'Connectez social commerce, apps de marque et données POS pour des revenus portés par l’adhésion.' },
    { title: 'Données first-party qui boostent le rachat', desc: 'Comprenez les comportements, offrez des promos flexibles et automatisez l’outreach pour améliorer le CRM.' },
    { title: 'IA qui augmente la conversion', desc: 'Activez des recommandations produit IA qui personnalisent le catalogue et élèvent AOV et conversion.' },
  ],
  subsidyTitle: 'Crédits et ressources au même endroit — plus de NT$200K de valeur',
  subsidies: [
    { title: 'Crédits d’expédition pour nouveaux contrats', sub: '50 % de réduction plus chiffrement SSL (valeur NT$3 000)' },
    { title: 'Bonus du plan de lancement', sub: 'Plus de NT$85 000 de valeur plus rapports sectoriels' },
    { title: 'Plus de 40 thèmes de cours ecommerce', sub: 'Places limitées de coaching avec conseillers' },
  ],
  ctaTitle: 'Plébiscité par les marchands\nPlus de 600 000 marques utilisent ARVIX',
  ctaSubtitle: 'Réservez une consultation téléphonique 1:1 gratuite avec un conseiller ARVIX.',
}


const copy: Partial<Record<Locale, ConsultationCopy>> & { 'zh-TW': ConsultationCopy; en: ConsultationCopy } = {
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

export default function ConsultationPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #e8f0fe 0%, #EEF0FF 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#00142D' }}>{c.title}</h1>
          <p className="text-lg mb-10" style={{ color: '#687280' }}>{c.subtitle}</p>
          <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.stagesTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {c.stages.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl border" style={{ borderColor: '#E0E3E8', backgroundColor: '#F8FAFC' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#00142D' }}>{s.title}</h3>
                <p style={{ color: '#687280' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>{c.featuresTitle}</h2>
          <p className="text-center mb-12" style={{ color: '#687280' }}>{c.featuresSubtitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {c.features.map((f) => (
              <div key={f.title} className="bg-white p-6 rounded-2xl" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <h3 className="text-base font-bold mb-3" style={{ color: '#00142D' }}>{f.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>{c.subsidyTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {c.subsidies.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl text-left" style={{ backgroundColor: '#F4F7FC' }}>
                <h3 className="font-bold mb-2" style={{ color: '#00142D' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ background: 'linear-gradient(270.52deg, rgb(0, 79, 209) 0%, rgb(37, 124, 255) 100%)' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4 whitespace-pre-line">{c.ctaTitle}</h2>
          <p className="text-white/80 mb-8">{c.ctaSubtitle}</p>
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
