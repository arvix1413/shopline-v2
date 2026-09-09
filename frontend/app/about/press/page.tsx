'use client'

import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'
import type { Locale } from '../../../lib/i18n'

type PressCopy = {
  title: string
  subtitle: string
  ctaTitle: string
  cta: string
  tagLatest: string
  tagRepost: string
  tagAnnounce: string
  tagWhitepaper: string
  news: { title: string; date: string; tagKey: 'latest' | 'repost' | 'announce' | 'whitepaper' }[]
}

const zhTW: PressCopy = {
  title: '最新消息',
  subtitle: 'ARVIX 最新動態、媒體報導與產業洞察',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  cta: '立即免費試用',
  tagLatest: '最新',
  tagRepost: '轉載',
  tagAnnounce: '公告',
  tagWhitepaper: '白皮書',
  news: [
    { title: '零售 AI 聯盟啟動！beBit TECH 與 ARVIX 助攻《VERVE》、《古北町》雙位數成長，攜手打造 AI 行銷生態圈', date: '2025-03', tagKey: 'latest' },
    { title: '【轉載】親歷金融海嘯也橫跨全球職涯，他最後為何選擇 ARVIX 打造新時代電商人才？｜專訪 ARVIX 聯席總裁 Raymond', date: '2025-02', tagKey: 'repost' },
    { title: 'ARVIX 雙 11 業績連三年創新高！GMV 年增 19%，助攻實戰班商家表現飆升 6 成', date: '2024-11', tagKey: 'announce' },
    { title: 'Story Wear × 腦麻協會 × ARVIX 聯手打造永續共好新篇章，白安與宇宙人暖心助力「點亮自立之路」', date: '2024-10', tagKey: 'announce' },
    { title: '【轉載】自辦預購募近 2000 萬！網購流量難搶 XROUND 如何靠群募聚人氣？', date: '2024-09', tagKey: 'repost' },
    { title: '99 購物節揭開電商旺季序幕，參與 ARVIX 檔期實戰班商家業績成長 26%，毛孩經濟帶動「寵物用品」業績飆升 50% 成黑馬', date: '2024-09', tagKey: 'announce' },
    { title: '【轉載】告別行銷燒錢戰！ARVIX 攜手 Tagnology、Bello Store 打造零售電商超強轉換引擎', date: '2024-08', tagKey: 'repost' },
    { title: 'ARVIX 榮獲「最佳 IT 雇主」肯定，4 大招聘策略 x 8 項人才培訓措施深度孵化臺灣 IT 產業人才', date: '2024-07', tagKey: 'announce' },
    { title: 'ARVIX 啟動 2025 品牌升級計畫！定位「全方位零售整合專家」', date: '2025-01', tagKey: 'announce' },
    { title: 'ARVIX《2025 全方位零售整合白皮書》上線！「通路＋數據＋系統」三大面向整合迎戰零售新未來', date: '2025-01', tagKey: 'whitepaper' },
    { title: '直播電商玩法再升級！ARVIX 導入 YouTube Shopping 功能，提供 API 技術串接與業界最豐富輔導資源', date: '2023-10', tagKey: 'announce' },
    { title: 'ARVIX《2024 新零售開店白皮書》上線！「OMO 全通路模式」與「社群電商」仍是疫後時代零售發展重點', date: '2024-01', tagKey: 'whitepaper' },
  ],
}

const zhCN: PressCopy = {
  title: '最新消息',
  subtitle: 'ARVIX 最新动态、媒体报道与产业洞察',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  cta: '立即免费试用',
  tagLatest: '最新',
  tagRepost: '转载',
  tagAnnounce: '公告',
  tagWhitepaper: '白皮书',
  news: [
    { title: '零售 AI 联盟启动！beBit TECH 与 ARVIX 助攻《VERVE》、《古北町》双位数成长，携手打造 AI 营销生态圈', date: '2025-03', tagKey: 'latest' },
    { title: '【转载】亲历金融海啸也横跨全球职涯，他最后为何选择 ARVIX 打造新时代电商人才？｜专访 ARVIX 联席总裁 Raymond', date: '2025-02', tagKey: 'repost' },
    { title: 'ARVIX 双 11 业绩连三年创新高！GMV 年增 19%，助攻实战班商家表现飙升 6 成', date: '2024-11', tagKey: 'announce' },
    { title: 'Story Wear × 脑麻协会 × ARVIX 联手打造永续共好新篇章，白安与宇宙人暖心助力「点亮自立之路」', date: '2024-10', tagKey: 'announce' },
    { title: '【转载】自办预购募近 2000 万！网购流量难抢 XROUND 如何靠群募聚人气？', date: '2024-09', tagKey: 'repost' },
    { title: '99 购物节揭开电商旺季序幕，参与 ARVIX 档期实战班商家业绩成长 26%，毛孩经济带动「宠物用品」业绩飙升 50% 成黑马', date: '2024-09', tagKey: 'announce' },
    { title: '【转载】告别营销烧钱战！ARVIX 携手 Tagnology、Bello Store 打造零售电商超强转化引擎', date: '2024-08', tagKey: 'repost' },
    { title: 'ARVIX 荣获「最佳 IT 雇主」肯定，4 大招聘策略 x 8 项人才培训措施深度孵化台湾 IT 产业人才', date: '2024-07', tagKey: 'announce' },
    { title: 'ARVIX 启动 2025 品牌升级计划！定位「全方位零售整合专家」', date: '2025-01', tagKey: 'announce' },
    { title: 'ARVIX《2025 全方位零售整合白皮书》上线！「渠道＋数据＋系统」三大面向整合迎战零售新未来', date: '2025-01', tagKey: 'whitepaper' },
    { title: '直播电商玩法再升级！ARVIX 导入 YouTube Shopping 功能，提供 API 技术串接与业界最丰富辅导资源', date: '2023-10', tagKey: 'announce' },
    { title: 'ARVIX《2024 新零售开店白皮书》上线！「OMO 全渠道模式」与「社群电商」仍是疫后时代零售发展重点', date: '2024-01', tagKey: 'whitepaper' },
  ],
}

const en: PressCopy = {
  title: 'Newsroom',
  subtitle: 'Latest ARVIX updates, media coverage, and industry insights',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  cta: 'Start free trial',
  tagLatest: 'New',
  tagRepost: 'Repost',
  tagAnnounce: 'Announcement',
  tagWhitepaper: 'Whitepaper',
  news: [
    { title: 'Retail AI alliance launches — beBit TECH & ARVIX help VERVE and Kobecho grow double-digits', date: '2025-03', tagKey: 'latest' },
    { title: '[Repost] From the financial crisis to a global career — why he chose ARVIX | Interview with Co-President Raymond', date: '2025-02', tagKey: 'repost' },
    { title: 'ARVIX Double 11 hits a 3-year high — GMV +19%, workshop merchants up ~60%', date: '2024-11', tagKey: 'announce' },
    { title: 'Story Wear × CP Association × ARVIX partner for sustainable impact', date: '2024-10', tagKey: 'announce' },
    { title: '[Repost] Nearly NT$20M in preorders — how XROUND crowdsourced demand', date: '2024-09', tagKey: 'repost' },
    { title: '99 Shopping Festival: ARVIX workshop merchants +26%; pet category +50%', date: '2024-09', tagKey: 'announce' },
    { title: '[Repost] Beyond ad burn — ARVIX with Tagnology & Bello Store on conversion', date: '2024-08', tagKey: 'repost' },
    { title: 'ARVIX named a top IT employer — hiring & training for Taiwan’s IT talent', date: '2024-07', tagKey: 'announce' },
    { title: 'ARVIX 2025 brand upgrade — Full-stack retail integration expert', date: '2025-01', tagKey: 'announce' },
    { title: '2025 Omnichannel Retail Integration Whitepaper — channels + data + systems', date: '2025-01', tagKey: 'whitepaper' },
    { title: 'Live commerce upgrade — YouTube Shopping with API support and coaching', date: '2023-10', tagKey: 'announce' },
    { title: '2024 New Retail Launch Whitepaper — OMO & social commerce still lead', date: '2024-01', tagKey: 'whitepaper' },
  ],
}

const ko: PressCopy = {
  title: '뉴스룸',
  subtitle: 'ARVIX 최신 소식, 미디어 보도, 업계 인사이트',
  ctaTitle: '전 세계 60만+ 판매자가 신뢰합니다',
  cta: '무료 체험 시작',
  tagLatest: '최신',
  tagRepost: '전재',
  tagAnnounce: '공지',
  tagWhitepaper: '백서',
  news: [
    { title: '리테일 AI 얼라이언스 출범 — beBit TECH & ARVIX, VERVE·고베초 두 자릿수 성장 지원', date: '2025-03', tagKey: 'latest' },
    { title: '[전재] 금융 위기에서 글로벌 커리어까지 — 그가 ARVIX를 선택한 이유 | 공동 사장 Raymond 인터뷰', date: '2025-02', tagKey: 'repost' },
    { title: 'ARVIX 더블 11, 3년 연속 최고 — GMV +19%, 워크숍 판매자 약 60% 상승', date: '2024-11', tagKey: 'announce' },
    { title: 'Story Wear × 뇌성마비협회 × ARVIX, 지속 가능한 임팩트를 위한 파트너십', date: '2024-10', tagKey: 'announce' },
    { title: '[전재] 사전 주문 약 NT$2,000만 — XROUND이 수요를 모은 방법', date: '2024-09', tagKey: 'repost' },
    { title: '99 쇼핑 페스티벌: ARVIX 워크숍 판매자 +26%; 반려동물 카테고리 +50%', date: '2024-09', tagKey: 'announce' },
    { title: '[전재] 광고비만 태우지 마세요 — ARVIX, Tagnology & Bello Store의 전환 전략', date: '2024-08', tagKey: 'repost' },
    { title: 'ARVIX, 최고 IT 고용주로 선정 — 대만 IT 인재 채용·교육', date: '2024-07', tagKey: 'announce' },
    { title: 'ARVIX 2025 브랜드 업그레이드 — 풀스택 리테일 통합 전문가', date: '2025-01', tagKey: 'announce' },
    { title: '2025 옴니채널 리테일 통합 백서 — 채널 + 데이터 + 시스템', date: '2025-01', tagKey: 'whitepaper' },
    { title: '라이브 커머스 업그레이드 — YouTube Shopping API 지원 및 코칭', date: '2023-10', tagKey: 'announce' },
    { title: '2024 뉴 리테일 런칭 백서 — OMO & 소셜 커머스가 여전히 선도', date: '2024-01', tagKey: 'whitepaper' },
  ],
}

const ja: PressCopy = {
  title: 'ニュースルーム',
  subtitle: 'ARVIX の最新情報、メディア掲載、業界インサイト',
  ctaTitle: '世界 60 万以上の店舗に信頼されています',
  cta: '無料トライアルを開始',
  tagLatest: '最新',
  tagRepost: '転載',
  tagAnnounce: 'お知らせ',
  tagWhitepaper: 'ホワイトペーパー',
  news: [
    { title: 'リテール AI アライアンス始動 — beBit TECH & ARVIX が VERVE・古北町の二桁成長を支援', date: '2025-03', tagKey: 'latest' },
    { title: '[転載] 金融危機からグローバルキャリアへ — なぜ ARVIX を選んだのか｜共同社長 Raymond インタビュー', date: '2025-02', tagKey: 'repost' },
    { title: 'ARVIX ダブル 11、3 年連続最高 — GMV +19%、ワークショップ店舗は約 60% 増', date: '2024-11', tagKey: 'announce' },
    { title: 'Story Wear × 脳性麻痺協会 × ARVIX、サステナブルなインパクトで連携', date: '2024-10', tagKey: 'announce' },
    { title: '[転載] 予約販売で約 NT$2,000 万 — XROUND が需要を集めた方法', date: '2024-09', tagKey: 'repost' },
    { title: '99 ショッピングフェスティバル：ARVIX ワークショップ店舗 +26%；ペットカテゴリ +50%', date: '2024-09', tagKey: 'announce' },
    { title: '[転載] 広告費の消耗戦を超えて — ARVIX × Tagnology & Bello Store のコンバージョン', date: '2024-08', tagKey: 'repost' },
    { title: 'ARVIX、トップ IT 雇用主に選出 — 台湾 IT 人材の採用・育成', date: '2024-07', tagKey: 'announce' },
    { title: 'ARVIX 2025 ブランドアップグレード — フルスタック小売統合の専門家', date: '2025-01', tagKey: 'announce' },
    { title: '2025 オムニチャネル小売統合ホワイトペーパー — チャネル＋データ＋システム', date: '2025-01', tagKey: 'whitepaper' },
    { title: 'ライブコマース強化 — YouTube Shopping の API 対応とコーチング', date: '2023-10', tagKey: 'announce' },
    { title: '2024 新小売開店ホワイトペーパー — OMO とソーシャルコマースが引き続き主導', date: '2024-01', tagKey: 'whitepaper' },
  ],
}

const vi: PressCopy = {
  title: 'Phòng tin tức',
  subtitle: 'Cập nhật mới nhất của ARVIX, tin truyền thông và góc nhìn ngành',
  ctaTitle: 'Được hơn 600.000 nhà bán hàng trên thế giới tin tưởng',
  cta: 'Bắt đầu dùng thử miễn phí',
  tagLatest: 'Mới',
  tagRepost: 'Đăng lại',
  tagAnnounce: 'Thông báo',
  tagWhitepaper: 'Sách trắng',
  news: [
    { title: 'Liên minh AI bán lẻ ra mắt — beBit TECH & ARVIX hỗ trợ VERVE và Kobecho tăng trưởng hai chữ số', date: '2025-03', tagKey: 'latest' },
    { title: '[Đăng lại] Từ khủng hoảng tài chính đến sự nghiệp toàn cầu — vì sao anh chọn ARVIX | Phỏng vấn Đồng chủ tịch Raymond', date: '2025-02', tagKey: 'repost' },
    { title: 'ARVIX Double 11 đạt đỉnh 3 năm — GMV +19%, nhà bán hàng workshop tăng ~60%', date: '2024-11', tagKey: 'announce' },
    { title: 'Story Wear × Hiệp hội CP × ARVIX hợp tác vì tác động bền vững', date: '2024-10', tagKey: 'announce' },
    { title: '[Đăng lại] Gần NT$20 triệu đặt trước — cách XROUND huy động nhu cầu', date: '2024-09', tagKey: 'repost' },
    { title: 'Lễ hội mua sắm 99: nhà bán hàng workshop ARVIX +26%; danh mục thú cưng +50%', date: '2024-09', tagKey: 'announce' },
    { title: '[Đăng lại] Vượt khỏi đốt ngân sách quảng cáo — ARVIX cùng Tagnology & Bello Store về chuyển đổi', date: '2024-08', tagKey: 'repost' },
    { title: 'ARVIX được vinh danh nhà tuyển dụng IT hàng đầu — tuyển dụng & đào tạo nhân tài IT Đài Loan', date: '2024-07', tagKey: 'announce' },
    { title: 'Nâng cấp thương hiệu ARVIX 2025 — Chuyên gia tích hợp bán lẻ full-stack', date: '2025-01', tagKey: 'announce' },
    { title: 'Sách trắng Tích hợp bán lẻ Omnichannel 2025 — kênh + dữ liệu + hệ thống', date: '2025-01', tagKey: 'whitepaper' },
    { title: 'Nâng cấp live commerce — YouTube Shopping với hỗ trợ API và coaching', date: '2023-10', tagKey: 'announce' },
    { title: 'Sách trắng Mở cửa hàng New Retail 2024 — OMO & social commerce vẫn dẫn đầu', date: '2024-01', tagKey: 'whitepaper' },
  ],
}

const es: PressCopy = {
  title: 'Sala de prensa',
  subtitle: 'Últimas novedades de ARVIX, cobertura mediática e insights del sector',
  ctaTitle: 'Más de 600.000 comercios en el mundo confían en nosotros',
  cta: 'Empezar prueba gratis',
  tagLatest: 'Nuevo',
  tagRepost: 'Republicado',
  tagAnnounce: 'Anuncio',
  tagWhitepaper: 'Libro blanco',
  news: [
    { title: 'Se lanza la alianza de IA retail — beBit TECH y ARVIX impulsan el crecimiento a doble dígito de VERVE y Kobecho', date: '2025-03', tagKey: 'latest' },
    { title: '[Republicado] De la crisis financiera a una carrera global — por qué eligió ARVIX | Entrevista con el copresidente Raymond', date: '2025-02', tagKey: 'repost' },
    { title: 'ARVIX Double 11 marca un máximo de 3 años — GMV +19%, comercios del taller ~+60%', date: '2024-11', tagKey: 'announce' },
    { title: 'Story Wear × Asociación CP × ARVIX se asocian por un impacto sostenible', date: '2024-10', tagKey: 'announce' },
    { title: '[Republicado] Casi NT$20M en preventas — cómo XROUND captó demanda', date: '2024-09', tagKey: 'repost' },
    { title: 'Festival de compras 99: comercios del taller ARVIX +26%; categoría mascotas +50%', date: '2024-09', tagKey: 'announce' },
    { title: '[Republicado] Más allá del gasto en anuncios — ARVIX con Tagnology y Bello Store en conversión', date: '2024-08', tagKey: 'repost' },
    { title: 'ARVIX nombrada top empleador IT — contratación y formación de talento IT en Taiwán', date: '2024-07', tagKey: 'announce' },
    { title: 'Upgrade de marca ARVIX 2025 — Experto en integración retail full-stack', date: '2025-01', tagKey: 'announce' },
    { title: 'Libro blanco de integración retail omnicanal 2025 — canales + datos + sistemas', date: '2025-01', tagKey: 'whitepaper' },
    { title: 'Upgrade de live commerce — YouTube Shopping con soporte API y coaching', date: '2023-10', tagKey: 'announce' },
    { title: 'Libro blanco New Retail Launch 2024 — OMO y social commerce siguen liderando', date: '2024-01', tagKey: 'whitepaper' },
  ],
}

const pt: PressCopy = {
  title: 'Sala de imprensa',
  subtitle: 'Últimas atualizações da ARVIX, cobertura na mídia e insights do setor',
  ctaTitle: 'Mais de 600.000 comerciantes no mundo confiam em nós',
  cta: 'Começar teste grátis',
  tagLatest: 'Novo',
  tagRepost: 'Republicado',
  tagAnnounce: 'Anúncio',
  tagWhitepaper: 'Whitepaper',
  news: [
    { title: 'Aliança de IA no varejo é lançada — beBit TECH e ARVIX ajudam VERVE e Kobecho a crescer em dois dígitos', date: '2025-03', tagKey: 'latest' },
    { title: '[Republicado] Da crise financeira a uma carreira global — por que escolheu a ARVIX | Entrevista com o copresidente Raymond', date: '2025-02', tagKey: 'repost' },
    { title: 'ARVIX Double 11 atinge recorde de 3 anos — GMV +19%, comerciantes do workshop ~+60%', date: '2024-11', tagKey: 'announce' },
    { title: 'Story Wear × Associação CP × ARVIX unem-se por impacto sustentável', date: '2024-10', tagKey: 'announce' },
    { title: '[Republicado] Quase NT$20M em pré-vendas — como a XROUND gerou demanda', date: '2024-09', tagKey: 'repost' },
    { title: 'Festival de compras 99: comerciantes do workshop ARVIX +26%; categoria pet +50%', date: '2024-09', tagKey: 'announce' },
    { title: '[Republicado] Além de queimar verba de anúncios — ARVIX com Tagnology e Bello Store sobre conversão', date: '2024-08', tagKey: 'repost' },
    { title: 'ARVIX nomeada top empregadora de TI — contratação e treinamento de talentos de TI em Taiwan', date: '2024-07', tagKey: 'announce' },
    { title: 'Upgrade de marca ARVIX 2025 — Especialista em integração de varejo full-stack', date: '2025-01', tagKey: 'announce' },
    { title: 'Whitepaper de integração de varejo omnichannel 2025 — canais + dados + sistemas', date: '2025-01', tagKey: 'whitepaper' },
    { title: 'Upgrade de live commerce — YouTube Shopping com suporte a API e coaching', date: '2023-10', tagKey: 'announce' },
    { title: 'Whitepaper New Retail Launch 2024 — OMO e social commerce ainda lideram', date: '2024-01', tagKey: 'whitepaper' },
  ],
}

const de: PressCopy = {
  title: 'Newsroom',
  subtitle: 'Neueste ARVIX-Updates, Medienberichte und Branchen-Insights',
  ctaTitle: 'Mehr als 600.000 Händler weltweit vertrauen uns',
  cta: 'Kostenlose Testversion starten',
  tagLatest: 'Neu',
  tagRepost: 'Repost',
  tagAnnounce: 'Ankündigung',
  tagWhitepaper: 'Whitepaper',
  news: [
    { title: 'Retail-KI-Allianz startet — beBit TECH & ARVIX helfen VERVE und Kobecho zu zweistelligem Wachstum', date: '2025-03', tagKey: 'latest' },
    { title: '[Repost] Von der Finanzkrise zur globalen Karriere — warum er ARVIX wählte | Interview mit Co-Präsident Raymond', date: '2025-02', tagKey: 'repost' },
    { title: 'ARVIX Double 11 erreicht 3-Jahres-Hoch — GMV +19%, Workshop-Händler ~+60%', date: '2024-11', tagKey: 'announce' },
    { title: 'Story Wear × CP-Verband × ARVIX partnerschaftlich für nachhaltigen Impact', date: '2024-10', tagKey: 'announce' },
    { title: '[Repost] Fast NT$20 Mio. in Vorbestellungen — so generierte XROUND Nachfrage', date: '2024-09', tagKey: 'repost' },
    { title: '99 Shopping Festival: ARVIX-Workshop-Händler +26%; Pet-Kategorie +50%', date: '2024-09', tagKey: 'announce' },
    { title: '[Repost] Mehr als Werbeausgaben verbrennen — ARVIX mit Tagnology & Bello Store zur Conversion', date: '2024-08', tagKey: 'repost' },
    { title: 'ARVIX als Top-IT-Arbeitgeber ausgezeichnet — Hiring & Training für Taiwans IT-Talente', date: '2024-07', tagKey: 'announce' },
    { title: 'ARVIX 2025 Marken-Upgrade — Full-Stack-Retail-Integrations-Experte', date: '2025-01', tagKey: 'announce' },
    { title: 'Whitepaper Omnichannel-Retail-Integration 2025 — Kanäle + Daten + Systeme', date: '2025-01', tagKey: 'whitepaper' },
    { title: 'Live-Commerce-Upgrade — YouTube Shopping mit API-Support und Coaching', date: '2023-10', tagKey: 'announce' },
    { title: 'Whitepaper New Retail Launch 2024 — OMO & Social Commerce bleiben führend', date: '2024-01', tagKey: 'whitepaper' },
  ],
}

const fr: PressCopy = {
  title: 'Espace presse',
  subtitle: 'Dernières actualités ARVIX, couverture médiatique et insights sectoriels',
  ctaTitle: 'Plus de 600 000 marchands dans le monde nous font confiance',
  cta: 'Commencer l’essai gratuit',
  tagLatest: 'Nouveau',
  tagRepost: 'Republication',
  tagAnnounce: 'Annonce',
  tagWhitepaper: 'Livre blanc',
  news: [
    { title: 'Lancement de l’alliance IA retail — beBit TECH & ARVIX aident VERVE et Kobecho à croître à deux chiffres', date: '2025-03', tagKey: 'latest' },
    { title: '[Republication] De la crise financière à une carrière mondiale — pourquoi il a choisi ARVIX | Interview du co-président Raymond', date: '2025-02', tagKey: 'repost' },
    { title: 'ARVIX Double 11 atteint un record sur 3 ans — GMV +19 %, marchands atelier ~+60 %', date: '2024-11', tagKey: 'announce' },
    { title: 'Story Wear × Association CP × ARVIX s’associent pour un impact durable', date: '2024-10', tagKey: 'announce' },
    { title: '[Republication] Près de NT$20 M en précommandes — comment XROUND a généré la demande', date: '2024-09', tagKey: 'repost' },
    { title: 'Festival shopping 99 : marchands atelier ARVIX +26 % ; catégorie animaux +50 %', date: '2024-09', tagKey: 'announce' },
    { title: '[Republication] Au-delà du burn publicitaire — ARVIX avec Tagnology & Bello Store sur la conversion', date: '2024-08', tagKey: 'repost' },
    { title: 'ARVIX nommée top employeur IT — recrutement et formation des talents IT à Taïwan', date: '2024-07', tagKey: 'announce' },
    { title: 'Upgrade de marque ARVIX 2025 — Expert en intégration retail full-stack', date: '2025-01', tagKey: 'announce' },
    { title: 'Livre blanc Intégration retail omnicanal 2025 — canaux + données + systèmes', date: '2025-01', tagKey: 'whitepaper' },
    { title: 'Upgrade du live commerce — YouTube Shopping avec support API et coaching', date: '2023-10', tagKey: 'announce' },
    { title: 'Livre blanc New Retail Launch 2024 — OMO et social commerce restent en tête', date: '2024-01', tagKey: 'whitepaper' },
  ],
}

const copy: Partial<Record<Locale, PressCopy>> & { 'zh-TW': PressCopy; en: PressCopy } = {
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

const tagColors: Record<string, { bg: string; color: string }> = {
  latest: { bg: '#FEF3C7', color: '#D97706' },
  repost: { bg: '#EEF0FF', color: '#5B5FF0' },
  announce: { bg: '#DCFCE7', color: '#16A34A' },
  whitepaper: { bg: '#F3E8FF', color: '#9333EA' },
}

export default function PressPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)
  const tagLabel = {
    latest: c.tagLatest,
    repost: c.tagRepost,
    announce: c.tagAnnounce,
    whitepaper: c.tagWhitepaper,
  }

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EEF0FF 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>{c.title}</h1>
          <p className="text-lg" style={{ color: '#687280' }}>{c.subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-4">
            {c.news.map((n) => {
              const tc = tagColors[n.tagKey] || { bg: '#EEF0FF', color: '#5B5FF0' }
              return (
                <article key={n.title} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: tc.bg, color: tc.color }}>{tagLabel[n.tagKey]}</span>
                    <span className="text-xs" style={{ color: '#687280' }}>{n.date}</span>
                  </div>
                  <h2 className="font-bold leading-relaxed hover:underline" style={{ color: '#00142D' }}>{n.title}</h2>
                </article>
              )
            })}
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
