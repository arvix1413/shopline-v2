'use client'

import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type SeminarCopy = {
  title: string
  subtitle: string
  cta: string
  whoTitle: string
  audience: { title: string; desc: string }[]
  learnTitle: string
  topics: { title: string; desc: string }[]
  subsidyTitle: string
  subsidies: { title: string; sub: string }[]
  ctaTitle: string
}

const zhTW: SeminarCopy = {
  title: '全通路開店講座',
  subtitle: '全通路開店講座 — 專業顧問解析零售開店趨勢，一次掌握數位轉型所有秘訣',
  cta: '立即報名免費講座',
  whoTitle: '講座適合誰？',
  audience: [
    { title: '我有商品，不想只在各大商城平台販售', desc: '建立專屬品牌官網，一手掌握會員、數據及流量' },
    { title: '常開團購，但都用私訊、留言人工統計收單', desc: '團購變現不再只靠 Excel，告訴你快速開團的技巧' },
    { title: '經營 IG、FB 及 LINE 多個社群耗時又難轉換', desc: '拆解社群消費行為，提升互動黏著度外還能導購' },
    { title: '有店面想進軍線上通路，想整合實體及網路門市', desc: '一站就能實現 OMO 全通路，實體 x 網店流量雙向導流' },
  ],
  learnTitle: '參加講座，你將學會這些開店關鍵',
  topics: [
    { title: '快速建立網路商店', desc: 'ARVIX 提供超過 20 種商店版型，並支援信用卡結帳；台灣出貨商店可再開通 7-11 取貨／貨到付款。' },
    { title: '打造高回購會員經營系統', desc: '不只是會賣！更要讓顧客回來！從會員分級、分眾優惠設定到自動化推播，教你打造持續變現的會員經營閉環。' },
    { title: '用數據驅動品牌成長', desc: '視覺化報表、多種專業分析報告到商品潛力預測，透過完整數據洞察優化行銷效益，讓你看懂數據、用對數據！' },
    { title: '多管道流量整合', desc: '社群、官網、團購、門市…等多元流量來源也能輕鬆管控。為你整合多管道流量，讓每一筆流量都能有效變現。' },
    { title: '掌握全通路整合心法', desc: 'ARVIX 透過「系統、通路、數據」三大核心整合，實體 x 網店流量雙向導流，實現 OMO 全通路模式。' },
  ],
  subsidyTitle: '補助、資源一次到位！ARVIX 祭出總價值超過 20 萬補貼',
  subsidies: [
    { title: '新簽約用戶最高可享運費補助金', sub: '5 折優惠再送 SSL 網站資安加密 (價值 NT$3000)' },
    { title: '現在起購買開店方案最高享', sub: '價值超過 NT$ 85,000 再送破萬價值的產業數據報告' },
    { title: '專屬電商課程超過 40 個精選主題', sub: '限量名額顧問陪跑計劃享' },
  ],
  ctaTitle: '商家好評推薦\n全球超過 60 萬品牌使用 ARVIX',
}

const zhCN: SeminarCopy = {
  title: '全渠道开店讲座',
  subtitle: '全渠道开店讲座 — 专业顾问解析零售开店趋势，一次掌握数字转型所有秘诀',
  cta: '立即报名免费讲座',
  whoTitle: '讲座适合谁？',
  audience: [
    { title: '我有商品，不想只在各大商城平台贩售', desc: '建立专属品牌官网，一手掌握会员、数据及流量' },
    { title: '常开团购，但都用私信、留言人工统计收单', desc: '团购变现不再只靠 Excel，告诉你快速开团的技巧' },
    { title: '经营 IG、FB 及 LINE 多个社群耗时又难转化', desc: '拆解社群消费行为，提升互动粘着度外还能导购' },
    { title: '有店面想进军线上渠道，想整合实体及网络门店', desc: '一站就能实现 OMO 全渠道，实体 x 网店流量双向导流' },
  ],
  learnTitle: '参加讲座，你将学会这些开店关键',
  topics: [
    { title: '快速建立网络商店', desc: 'ARVIX 提供超过 20 种商店版型，并支持信用卡结账，完整电商功能一次到位。' },
    { title: '打造高回购会员经营系统', desc: '不只是会卖！更要让顾客回来！从会员分级、分众优惠设定到自动化推播，教你打造持续变现的会员经营闭环。' },
    { title: '用数据驱动品牌成长', desc: '可视化报表、多种专业分析报告到商品潜力预测，通过完整数据洞察优化营销效益，让你看懂数据、用对数据！' },
    { title: '多渠道流量整合', desc: '社群、官网、团购、门店…等多元流量来源也能轻松管控。为你整合多渠道流量，让每一笔流量都能有效变现。' },
    { title: '掌握全渠道整合心法', desc: 'ARVIX 通过「系统、渠道、数据」三大核心整合，实体 x 网店流量双向导流，实现 OMO 全渠道模式。' },
  ],
  subsidyTitle: '补助、资源一次到位！ARVIX 祭出总价值超过 20 万补贴',
  subsidies: [
    { title: '新签约用户最高可享运费补助金', sub: '5 折优惠再送 SSL 网站资安加密 (价值 NT$3000)' },
    { title: '现在起购买开店方案最高享', sub: '价值超过 NT$ 85,000 再送破万价值的产业数据报告' },
    { title: '专属电商课程超过 40 个精选主题', sub: '限量名额顾问陪跑计划享' },
  ],
  ctaTitle: '商家好评推荐\n全球超过 60 万品牌使用 ARVIX',
}

const en: SeminarCopy = {
  title: 'Omnichannel retail seminar',
  subtitle: 'Expert advisors unpack retail trends so you master digital transformation in one session',
  cta: 'Register for free',
  whoTitle: 'Who is this for?',
  audience: [
    { title: 'I sell products but want more than marketplaces', desc: 'Build a brand site and own members, data, and traffic' },
    { title: 'I run group buys via DMs and comments', desc: 'Stop living in spreadsheets — learn faster group-buy ops' },
    { title: 'IG, FB, and LINE take time with low conversion', desc: 'Decode social buying behavior and turn engagement into sales' },
    { title: 'I have a store and want online + offline together', desc: 'Launch OMO in one place with two-way traffic between store and site' },
  ],
  learnTitle: 'What you will learn',
  topics: [
    { title: 'Launch an online store fast', desc: '20+ themes plus card checkout — a complete commerce stack.' },
    { title: 'Build a high-repurchase loyalty system', desc: 'From tiers and segment offers to automated pushes — a loop that keeps converting.' },
    { title: 'Grow with data', desc: 'Visual reports, analytics, and product potential insights so you act on the right numbers.' },
    { title: 'Unify multi-channel traffic', desc: 'Social, site, group buys, stores — control every source and monetize each visit.' },
    { title: 'Master omnichannel integration', desc: 'ARVIX connects systems, channels, and data for true OMO.' },
  ],
  subsidyTitle: 'Subsidies and resources in one place — over NT$200K in ARVIX support',
  subsidies: [
    { title: 'New signups can get shipping subsidies', sub: '50% off plus SSL encryption (worth NT$3,000)' },
    { title: 'Store plans include premium value', sub: 'Over NT$85,000 in value plus industry data reports' },
    { title: '40+ curated ecommerce courses', sub: 'Limited advisor coaching seats' },
  ],
  ctaTitle: 'Loved by merchants\n600,000+ brands use ARVIX',
}

const ko: SeminarCopy = {
  title: '옴니채널 리테일 세미나',
  subtitle: '전문 어드바이저가 리테일 트렌드를 풀어드려, 한 세션에 디지털 전환의 핵심을 익히세요',
  cta: '무료 등록',
  whoTitle: '이런 분께 추천합니다',
  audience: [
    { title: '상품은 있지만 마켓플레이스만으로는 부족하다', desc: '브랜드 사이트를 만들고 회원·데이터·트래픽을 직접 소유하세요' },
    { title: 'DM·댓글로 공동구매를 운영한다', desc: '스프레드시트에서 벗어나 더 빠른 공동구매 운영을 배우세요' },
    { title: 'IG·FB·LINE은 시간이 많이 들고 전환이 낮다', desc: '소셜 구매 행동을 이해하고 참여를 매출로 바꾸세요' },
    { title: '매장이 있고 온·오프라인을 함께 운영하고 싶다', desc: '한곳에서 OMO를 시작하고 매장과 사이트 간 양방향 유입을 만드세요' },
  ],
  learnTitle: '세미나에서 배우는 내용',
  topics: [
    { title: '온라인 스토어를 빠르게 오픈', desc: '20종 이상의 테마와 카드 결제 — 완성된 커머스 스택.' },
    { title: '재구매를 높이는 로열티 시스템', desc: '등급·세그먼트 혜택부터 자동 푸시까지 — 계속 전환되는 루프.' },
    { title: '데이터로 성장하기', desc: '시각 리포트·분석·상품 잠재력 인사이트로 올바른 수치에 행동하세요.' },
    { title: '멀티채널 트래픽 통합', desc: '소셜·사이트·공동구매·매장 — 모든 소스를 관리하고 방문마다 수익화.' },
    { title: '옴니채널 통합 마스터', desc: 'ARVIX가 시스템·채널·데이터를 연결해 진정한 OMO를 만듭니다.' },
  ],
  subsidyTitle: '지원금과 리소스를 한곳에서 — ARVIX 지원 총 NT$200K 이상',
  subsidies: [
    { title: '신규 가입 시 배송비 지원 가능', sub: '50% 할인 + SSL 암호화 (가치 NT$3,000)' },
    { title: '스토어 플랜에 프리미엄 가치 포함', sub: 'NT$85,000 이상 가치 + 산업 데이터 리포트' },
    { title: '엄선된 이커머스 강의 40개 이상', sub: '한정 어드바이저 코칭 자리' },
  ],
  ctaTitle: '판매자들이 사랑하는\n60만+ 브랜드가 ARVIX 사용',
}

const ja: SeminarCopy = {
  title: 'オムニチャネル小売セミナー',
  subtitle: '専門アドバイザーが小売トレンドを解説。デジタル変革の要点を一度でマスター',
  cta: '無料で申し込む',
  whoTitle: 'こんな方におすすめ',
  audience: [
    { title: '商品はあるがマーケットプレイスだけでは物足りない', desc: 'ブランドサイトを作り、会員・データ・トラフィックを自社で持つ' },
    { title: 'DMやコメントでグループ購入を運営している', desc: 'スプレッドシートから脱却し、より速いグループ購入オペを学ぶ' },
    { title: 'IG・FB・LINEに時間を取られ転換が低い', desc: 'ソーシャル購買行動を読み解き、エンゲージメントを売上に変える' },
    { title: '店舗がありオンラインとオフラインを一緒にしたい', desc: '一か所で OMO を始め、店舗とサイトの双方向送客を実現' },
  ],
  learnTitle: '学べること',
  topics: [
    { title: 'オンラインストアをすばやく開設', desc: '20 以上のテーマとカード決済 — 完成したコマーススタック。' },
    { title: '高リピートのロイヤルティシステム', desc: '等級・セグメント特典から自動プッシュまで — 転換し続けるループ。' },
    { title: 'データで成長する', desc: '可視化レポート、分析、商品ポテンシャルの洞察で正しい数字に基づき行動。' },
    { title: 'マルチチャネルトラフィックを統合', desc: 'ソーシャル・サイト・グループ購入・店舗 — すべての流入を管理し収益化。' },
    { title: 'オムニチャネル統合をマスター', desc: 'ARVIX がシステム・チャネル・データをつなぎ、真の OMO を実現。' },
  ],
  subsidyTitle: '補助金とリソースを一か所に — ARVIX 支援総額 NT$200K 超',
  subsidies: [
    { title: '新規契約で送料補助の対象に', sub: '50% オフ＋ SSL 暗号化（価値 NT$3,000）' },
    { title: 'ストアプランにプレミアム価値を含む', sub: 'NT$85,000 超の価値＋業界データレポート' },
    { title: '厳選 EC 講座 40 以上', sub: '限定のアドバイザー伴走枠' },
  ],
  ctaTitle: '加盟店に愛される\n60 万以上のブランドが ARVIX を利用',
}

const vi: SeminarCopy = {
  title: 'Hội thảo bán lẻ omnichannel',
  subtitle: 'Cố vấn chuyên môn phân tích xu hướng bán lẻ để bạn nắm chuyển đổi số trong một buổi',
  cta: 'Đăng ký miễn phí',
  whoTitle: 'Dành cho ai?',
  audience: [
    { title: 'Có sản phẩm nhưng muốn hơn sàn thương mại', desc: 'Xây site thương hiệu và sở hữu hội viên, dữ liệu, traffic' },
    { title: 'Mở mua nhóm qua tin nhắn và bình luận', desc: 'Thôi sống với bảng tính — học vận hành mua nhóm nhanh hơn' },
    { title: 'IG, FB, LINE tốn thời gian mà chuyển đổi thấp', desc: 'Hiểu hành vi mua trên mạng xã hội và biến tương tác thành doanh số' },
    { title: 'Có cửa hàng và muốn online + offline cùng lúc', desc: 'Triển khai OMO tại một nơi với traffic hai chiều giữa cửa hàng và site' },
  ],
  learnTitle: 'Bạn sẽ học được gì',
  topics: [
    { title: 'Mở cửa hàng online nhanh', desc: 'Hơn 20 theme kèm thanh toán thẻ — bộ thương mại hoàn chỉnh.' },
    { title: 'Xây hệ thống trung thành tái mua cao', desc: 'Từ hạng hội viên và ưu đãi phân khúc đến push tự động — vòng lặp liên tục chuyển đổi.' },
    { title: 'Tăng trưởng bằng dữ liệu', desc: 'Báo cáo trực quan, phân tích và insight tiềm năng sản phẩm để hành động đúng số.' },
    { title: 'Hợp nhất traffic đa kênh', desc: 'Mạng xã hội, site, mua nhóm, cửa hàng — kiểm soát mọi nguồn và kiếm tiền từng lượt truy cập.' },
    { title: 'Làm chủ tích hợp omnichannel', desc: 'ARVIX kết nối hệ thống, kênh và dữ liệu cho OMO thực sự.' },
  ],
  subsidyTitle: 'Trợ cấp và tài nguyên một chỗ — hơn NT$200K hỗ trợ từ ARVIX',
  subsidies: [
    { title: 'Đăng ký mới có thể nhận trợ cấp vận chuyển', sub: 'Giảm 50% kèm mã hóa SSL (trị giá NT$3,000)' },
    { title: 'Gói cửa hàng gồm giá trị cao cấp', sub: 'Hơn NT$85,000 giá trị kèm báo cáo dữ liệu ngành' },
    { title: 'Hơn 40 khóa ecommerce tuyển chọn', sub: 'Suất kèm cố vấn có hạn' },
  ],
  ctaTitle: 'Được người bán yêu thích\nHơn 600.000 thương hiệu dùng ARVIX',
}

const es: SeminarCopy = {
  title: 'Seminario de retail omnicanal',
  subtitle: 'Asesores expertos desglosan tendencias retail para dominar la transformación digital en una sesión',
  cta: 'Regístrate gratis',
  whoTitle: '¿Para quién es?',
  audience: [
    { title: 'Vendo productos pero quiero más que marketplaces', desc: 'Crea un sitio de marca y controla miembros, datos y tráfico' },
    { title: 'Hago compras grupales por DM y comentarios', desc: 'Deja las hojas de cálculo — aprende operaciones de compra grupal más rápidas' },
    { title: 'IG, FB y LINE consumen tiempo con baja conversión', desc: 'Decodifica el comportamiento de compra social y convierte engagement en ventas' },
    { title: 'Tengo tienda y quiero online + offline juntos', desc: 'Lanza OMO en un solo lugar con tráfico bidireccional entre tienda y sitio' },
  ],
  learnTitle: 'Qué aprenderás',
  topics: [
    { title: 'Lanza una tienda online rápido', desc: 'Más de 20 temas más pago con tarjeta — un stack de comercio completo.' },
    { title: 'Construye un sistema de fidelización de alta recompra', desc: 'De niveles y ofertas por segmento a pushes automáticos — un ciclo que sigue convirtiendo.' },
    { title: 'Crece con datos', desc: 'Informes visuales, analítica e insights de potencial de producto para actuar con los números correctos.' },
    { title: 'Unifica el tráfico multicanal', desc: 'Social, sitio, compras grupales, tiendas — controla cada fuente y monetiza cada visita.' },
    { title: 'Domina la integración omnicanal', desc: 'ARVIX conecta sistemas, canales y datos para un OMO real.' },
  ],
  subsidyTitle: 'Subsidios y recursos en un solo lugar — más de NT$200K en apoyo ARVIX',
  subsidies: [
    { title: 'Nuevos registros pueden obtener subsidios de envío', sub: '50% de descuento más cifrado SSL (valor NT$3,000)' },
    { title: 'Los planes de tienda incluyen valor premium', sub: 'Más de NT$85,000 en valor más informes de datos del sector' },
    { title: 'Más de 40 cursos de ecommerce seleccionados', sub: 'Plazas limitadas de acompañamiento con asesor' },
  ],
  ctaTitle: 'Querido por los comercios\nMás de 600.000 marcas usan ARVIX',
}

const pt: SeminarCopy = {
  title: 'Seminário de varejo omnichannel',
  subtitle: 'Consultores especialistas detalham tendências de varejo para você dominar a transformação digital em uma sessão',
  cta: 'Inscreva-se grátis',
  whoTitle: 'Para quem é?',
  audience: [
    { title: 'Vendo produtos, mas quero mais do que marketplaces', desc: 'Crie um site da marca e controle membros, dados e tráfego' },
    { title: 'Faço compras em grupo por DM e comentários', desc: 'Saia das planilhas — aprenda operação de compra em grupo mais rápida' },
    { title: 'IG, FB e LINE consomem tempo com baixa conversão', desc: 'Decodifique o comportamento de compra social e transforme engajamento em vendas' },
    { title: 'Tenho loja e quero online + offline juntos', desc: 'Lance OMO em um só lugar com tráfego bidirecional entre loja e site' },
  ],
  learnTitle: 'O que você vai aprender',
  topics: [
    { title: 'Lance uma loja online rápido', desc: 'Mais de 20 temas mais checkout com cartão — um stack de commerce completo.' },
    { title: 'Construa um sistema de fidelidade de alta recompra', desc: 'De níveis e ofertas por segmento a pushes automáticos — um ciclo que continua convertendo.' },
    { title: 'Cresça com dados', desc: 'Relatórios visuais, analytics e insights de potencial de produto para agir nos números certos.' },
    { title: 'Unifique tráfego multicanal', desc: 'Social, site, compras em grupo, lojas — controle cada fonte e monetize cada visita.' },
    { title: 'Domine a integração omnichannel', desc: 'A ARVIX conecta sistemas, canais e dados para um OMO de verdade.' },
  ],
  subsidyTitle: 'Subsídios e recursos em um só lugar — mais de NT$200K em apoio ARVIX',
  subsidies: [
    { title: 'Novos cadastros podem obter subsídios de frete', sub: '50% de desconto mais criptografia SSL (valor NT$3,000)' },
    { title: 'Planos de loja incluem valor premium', sub: 'Mais de NT$85,000 em valor mais relatórios de dados do setor' },
    { title: 'Mais de 40 cursos de ecommerce selecionados', sub: 'Vagas limitadas de coaching com consultor' },
  ],
  ctaTitle: 'Amado pelos lojistas\nMais de 600.000 marcas usam ARVIX',
}

const de: SeminarCopy = {
  title: 'Omnichannel-Retail-Seminar',
  subtitle: 'Expertenberater erklären Retail-Trends — digitale Transformation in einer Session meistern',
  cta: 'Kostenlos anmelden',
  whoTitle: 'Für wen ist das?',
  audience: [
    { title: 'Ich verkaufe Produkte, will aber mehr als Marktplätze', desc: 'Bauen Sie eine Markenseite und besitzen Sie Mitglieder, Daten und Traffic' },
    { title: 'Ich führe Gruppenkäufe über DMs und Kommentare', desc: 'Weg von Tabellen — lernen Sie schnellere Gruppenkauf-Abläufe' },
    { title: 'IG, FB und LINE kosten Zeit bei niedriger Conversion', desc: 'Social-Kaufverhalten entschlüsseln und Engagement in Umsatz verwandeln' },
    { title: 'Ich habe eine Filiale und will Online + Offline zusammen', desc: 'OMO an einem Ort starten mit Zwei-Wege-Traffic zwischen Filiale und Site' },
  ],
  learnTitle: 'Was Sie lernen',
  topics: [
    { title: 'Online-Shop schnell starten', desc: '20+ Themes plus Kartencheckout — ein vollständiger Commerce-Stack.' },
    { title: 'Loyalitätssystem mit hohem Wiederkauf', desc: 'Von Stufen und Segment-Angeboten bis zu automatischen Pushes — ein Loop, der weiter konvertiert.' },
    { title: 'Mit Daten wachsen', desc: 'Visuelle Reports, Analytics und Produktpotenzial-Insights — handeln Sie mit den richtigen Zahlen.' },
    { title: 'Multi-Channel-Traffic bündeln', desc: 'Social, Site, Gruppenkäufe, Filialen — jede Quelle steuern und jeden Besuch monetarisieren.' },
    { title: 'Omnichannel-Integration meistern', desc: 'ARVIX verbindet Systeme, Kanäle und Daten für echtes OMO.' },
  ],
  subsidyTitle: 'Zuschüsse und Ressourcen an einem Ort — über NT$200K ARVIX-Support',
  subsidies: [
    { title: 'Neuanmeldungen können Versandzuschüsse erhalten', sub: '50 % Rabatt plus SSL-Verschlüsselung (Wert NT$3.000)' },
    { title: 'Shop-Pläne inkl. Premium-Wert', sub: 'Über NT$85.000 Wert plus Branchen-Datenreports' },
    { title: '40+ kuratierte Ecommerce-Kurse', sub: 'Begrenzte Coachingsitze mit Berater' },
  ],
  ctaTitle: 'Beliebt bei Händlern\nÜber 600.000 Marken nutzen ARVIX',
}

const fr: SeminarCopy = {
  title: 'Séminaire retail omnicanal',
  subtitle: 'Des conseillers experts décryptent les tendances retail pour maîtriser la transformation digitale en une session',
  cta: 'S’inscrire gratuitement',
  whoTitle: 'Pour qui ?',
  audience: [
    { title: 'Je vends des produits mais veux plus que les marketplaces', desc: 'Créez un site de marque et possédez membres, données et trafic' },
    { title: 'Je gère des achats groupés via DM et commentaires', desc: 'Sortez des tableurs — apprenez des ops d’achat groupé plus rapides' },
    { title: 'IG, FB et LINE prennent du temps avec peu de conversion', desc: 'Décryptez l’achat social et transformez l’engagement en ventes' },
    { title: 'J’ai un magasin et veux online + offline ensemble', desc: 'Lancez l’OMO en un lieu avec un trafic bidirectionnel magasin ↔ site' },
  ],
  learnTitle: 'Ce que vous apprendrez',
  topics: [
    { title: 'Lancer une boutique en ligne rapidement', desc: 'Plus de 20 thèmes et paiement par carte — une stack commerce complète.' },
    { title: 'Construire un système de fidélité à fort rachat', desc: 'Des niveaux et offres par segment aux push automatisés — une boucle qui continue de convertir.' },
    { title: 'Grandir avec les données', desc: 'Rapports visuels, analytics et insights de potentiel produit pour agir sur les bons chiffres.' },
    { title: 'Unifier le trafic multi-canaux', desc: 'Social, site, achats groupés, magasins — contrôlez chaque source et monétisez chaque visite.' },
    { title: 'Maîtriser l’intégration omnicanale', desc: 'ARVIX relie systèmes, canaux et données pour un vrai OMO.' },
  ],
  subsidyTitle: 'Subventions et ressources au même endroit — plus de NT$200K de soutien ARVIX',
  subsidies: [
    { title: 'Les nouvelles inscriptions peuvent obtenir des aides livraison', sub: '50 % de réduction plus chiffrement SSL (valeur NT$3 000)' },
    { title: 'Les forfaits boutique incluent une valeur premium', sub: 'Plus de NT$85 000 de valeur plus rapports de données sectorielles' },
    { title: 'Plus de 40 cours ecommerce sélectionnés', sub: 'Places limitées d’accompagnement conseiller' },
  ],
  ctaTitle: 'Plébiscité par les marchands\nPlus de 600 000 marques utilisent ARVIX',
}

const copy: Partial<Record<Locale, SeminarCopy>> & { 'zh-TW': SeminarCopy; en: SeminarCopy } = {
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

export default function SeminarPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #e8f4ff 0%, #f0e8ff 100%)' }}>
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
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.whoTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {c.audience.map((a) => (
              <div key={a.title} className="p-6 rounded-2xl border" style={{ borderColor: '#E0E3E8', backgroundColor: '#F8FAFC' }}>
                <h3 className="font-bold mb-2" style={{ color: '#00142D' }}>{a.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.learnTitle}</h2>
          <div className="space-y-4">
            {c.topics.map((t, i) => (
              <div key={t.title} className="bg-white p-6 rounded-2xl flex gap-5 items-start" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <span className="text-2xl font-black flex-shrink-0" style={{ color: '#5B5FF0' }}>0{i + 1}</span>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: '#00142D' }}>{t.title}</h3>
                  <p className="text-sm" style={{ color: '#687280' }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-black mb-10" style={{ color: '#00142D' }}>{c.subsidyTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
