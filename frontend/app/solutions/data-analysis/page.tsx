'use client'

import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'
import type { Locale } from '../../../lib/i18n'

type DataAnalysisCopy = {
  title: string
  subtitle: string
  cta: string
  problemsTitle: string
  problemsSubtitle: string
  problems: { title: string; desc: string }[]
  focusTitle: string
  focusSubtitle: string
  items: { key: string; title: string; tags: string[]; img: string; alt: string }[]
  advisorTitle: string
  advisorDesc: string
  ctaTitle: string
  ctaSubtitle: string
}

const zhTW: DataAnalysisCopy = {
  title: '數據賦能解決方案',
  subtitle: '擺脫數據迷霧，擁抱精準洞察！ARVIX 整合第一方數據，精煉「人」、「貨」、「場」三大核心指標數據，搭配顧問服務與產業趨勢報告，讓數據驅動決策、有效提升業績！',
  cta: '立即免費試用',
  problemsTitle: '降維決策，升維經營',
  problemsSubtitle: '想從數據洞察品牌商機，卻仍在盲人摸象？',
  problems: [
    { title: '數據碎片化，全貌難尋', desc: '各平台數據分散，無法整合成完整視圖，難以掌握品牌整體經營狀況。' },
    { title: '數據失焦，無從下手', desc: '數據量龐大，不知道該關注哪些指標，導致分析資源浪費。' },
    { title: '成效模糊，憑感覺決策', desc: '缺乏數據支撐，行銷決策靠直覺，難以評估投資報酬率。' },
  ],
  focusTitle: '聚焦「人、貨、場」',
  focusSubtitle: '掌握零售三要素加速品牌全面成長',
  items: [
    { key: '人', title: '找到對的人賣貨', tags: ['智慧 RFIM 價值模型'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', alt: '透過 ARVIX 獨家的 RFIM 價值模型讓你找到對的人賣貨' },
    { key: '貨', title: '選品銷貨更精準', tags: ['數據分析中心 (Pro) - 商品成長探測', 'AI 演算智慧商品推薦'], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', alt: 'ARVIX 透過全面數據分析讓品牌精準掌握商品生命週期和市場需求波動' },
    { key: '場', title: '全通路場景無縫整合', tags: ['全通路洞察', '產業基準值'], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80', alt: 'ARVIX 整合多通路銷售管道數據，實現全通路的無縫客戶體驗' },
  ],
  advisorTitle: '數據×顧問×洞察\n策略顧問服務與產業趨勢報告',
  advisorDesc: '除了強大的數據工具，ARVIX 還提供專業顧問服務與產業趨勢報告，讓你的決策更有依據。',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即加入，開始你的全通路零售之旅',
}

const zhCN: DataAnalysisCopy = {
  title: '数据赋能解决方案',
  subtitle: '摆脱数据迷雾，拥抱精准洞察！ARVIX 整合第一方数据，精炼「人」、「货」、「场」三大核心指标数据，搭配顾问服务与产业趋势报告，让数据驱动决策、有效提升业绩！',
  cta: '立即免费试用',
  problemsTitle: '降维决策，升维经营',
  problemsSubtitle: '想从数据洞察品牌商机，却仍在盲人摸象？',
  problems: [
    { title: '数据碎片化，全貌难寻', desc: '各平台数据分散，无法整合成完整视图，难以掌握品牌整体经营状况。' },
    { title: '数据失焦，无从下手', desc: '数据量庞大，不知道该关注哪些指标，导致分析资源浪费。' },
    { title: '成效模糊，凭感觉决策', desc: '缺乏数据支撑，营销决策靠直觉，难以评估投资回报率。' },
  ],
  focusTitle: '聚焦「人、货、场」',
  focusSubtitle: '掌握零售三要素加速品牌全面成长',
  items: [
    { key: '人', title: '找到对的人卖货', tags: ['智慧 RFIM 价值模型'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', alt: '通过 ARVIX 独家的 RFIM 价值模型让你找到对的人卖货' },
    { key: '货', title: '选品销货更精准', tags: ['数据分析中心 (Pro) - 商品成长探测', 'AI 演算智慧商品推荐'], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', alt: 'ARVIX 通过全面数据分析让品牌精准掌握商品生命周期和市场需求波动' },
    { key: '场', title: '全渠道场景无缝整合', tags: ['全渠道洞察', '产业基准值'], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80', alt: 'ARVIX 整合多渠道销售管道数据，实现全渠道的无缝客户体验' },
  ],
  advisorTitle: '数据×顾问×洞察\n策略顾问服务与产业趋势报告',
  advisorDesc: '除了强大的数据工具，ARVIX 还提供专业顾问服务与产业趋势报告，让你的决策更有依据。',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即加入，开始你的全渠道零售之旅',
}

const en: DataAnalysisCopy = {
  title: 'Data-powered growth solution',
  subtitle: 'Cut through the noise. ARVIX unifies first-party data around people, products, and places — plus advisory and industry reports — so decisions drive real growth.',
  cta: 'Start free trial',
  problemsTitle: 'Simpler decisions, smarter growth',
  problemsSubtitle: 'Still guessing instead of seeing the full picture?',
  problems: [
    { title: 'Fragmented data', desc: 'Signals sit in silos — hard to see how the brand is really performing.' },
    { title: 'Too much noise', desc: 'Huge volumes without clear priorities waste analysis effort.' },
    { title: 'Gut-feel decisions', desc: 'Without evidence, marketing ROI is hard to measure.' },
  ],
  focusTitle: 'Focus on people, products, places',
  focusSubtitle: 'Master the retail triad to accelerate growth',
  items: [
    { key: 'People', title: 'Sell to the right customers', tags: ['Smart RFIM value model'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', alt: 'RFIM value model to find the right buyers' },
    { key: 'Products', title: 'Sharper merchandising', tags: ['Analytics Center (Pro) — product growth', 'AI product recommendations'], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', alt: 'Product lifecycle and demand insights' },
    { key: 'Places', title: 'Seamless omnichannel scenes', tags: ['Omnichannel insights', 'Industry benchmarks'], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80', alt: 'Unified channel data for seamless CX' },
  ],
  advisorTitle: 'Data × advisors × insight\nStrategy advisory & industry reports',
  advisorDesc: 'Beyond tools, ARVIX advisors and trend reports ground every decision.',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  ctaSubtitle: 'Join and start your omnichannel journey',
}

const ko: DataAnalysisCopy = {
  title: '데이터 기반 성장 솔루션',
  subtitle: '노이즈를 걷어내세요. ARVIX는 사람·상품·장소 중심의 자사 데이터를 통합하고, 자문과 산업 리포트로 의사결정이 실제 성장을 이끌게 합니다.',
  cta: '무료 체험 시작',
  problemsTitle: '더 단순한 결정, 더 스마트한 성장',
  problemsSubtitle: '전체 그림 대신 여전히 감으로만 판단하고 계신가요?',
  problems: [
    { title: '파편화된 데이터', desc: '신호가 사일로에 갇혀 — 브랜드의 실제 성과를 보기 어렵습니다.' },
    { title: '과도한 노이즈', desc: '우선순위 없는 방대한 양은 분석 노력을 낭비합니다.' },
    { title: '감에 의존한 결정', desc: '근거 없이는 마케팅 ROI를 측정하기 어렵습니다.' },
  ],
  focusTitle: '사람·상품·장소에 집중',
  focusSubtitle: '리테일 삼요소를 마스터해 성장을 가속하세요',
  items: [
    { key: '사람', title: '올바른 고객에게 판매', tags: ['스마트 RFIM 가치 모델'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', alt: '올바른 구매자를 찾는 RFIM 가치 모델' },
    { key: '상품', title: '더 날카로운 머천다이징', tags: ['Analytics Center (Pro) — 상품 성장', 'AI 상품 추천'], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', alt: '상품 수명주기와 수요 인사이트' },
    { key: '장소', title: '끊김 없는 옴니채널 장면', tags: ['옴니채널 인사이트', '산업 벤치마크'], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80', alt: '끊김 없는 CX를 위한 통합 채널 데이터' },
  ],
  advisorTitle: '데이터 × 어드바이저 × 인사이트\n전략 자문 & 산업 리포트',
  advisorDesc: '도구를 넘어, ARVIX 어드바이저와 트렌드 리포트가 모든 결정을 뒷받침합니다.',
  ctaTitle: '전 세계 600,000+ 셀러가 신뢰하는 ARVIX',
  ctaSubtitle: '합류하고 옴니채널 여정을 시작하세요',
}

const ja: DataAnalysisCopy = {
  title: 'データ駆動の成長ソリューション',
  subtitle: 'ノイズを切り抜けましょう。ARVIX は人・商品・場所まわりのファーストパーティデータを統合し、アドバイザリーと業界レポートで意思決定が実成長につながるよう支えます。',
  cta: '無料トライアルを開始',
  problemsTitle: 'よりシンプルな判断、よりスマートな成長',
  problemsSubtitle: '全体像を見ずに、まだ勘で動いていませんか？',
  problems: [
    { title: '断片化したデータ', desc: 'シグナルがサイロに散在 — ブランドの本当の成果が見えにくい。' },
    { title: 'ノイズが多すぎる', desc: '優先順位のない膨大な量は分析工数を浪費します。' },
    { title: '勘に頼る判断', desc: '根拠がなければマーケティング ROI は測りにくい。' },
  ],
  focusTitle: '人・商品・場所にフォーカス',
  focusSubtitle: 'リテール三要素をマスターして成長を加速',
  items: [
    { key: '人', title: '正しい顧客に売る', tags: ['スマート RFIM 価値モデル'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', alt: '正しい購入者を見つける RFIM 価値モデル' },
    { key: '商品', title: 'より鋭いマーチャンダイジング', tags: ['Analytics Center (Pro) — 商品成長', 'AI 商品レコメンド'], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', alt: '商品ライフサイクルと需要インサイト' },
    { key: '場所', title: 'シームレスなオムニチャネルシーン', tags: ['オムニチャネルインサイト', '業界ベンチマーク'], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80', alt: 'シームレスな CX のための統合チャネルデータ' },
  ],
  advisorTitle: 'データ × アドバイザー × インサイト\n戦略アドバイザリー＆業界レポート',
  advisorDesc: 'ツールを超え、ARVIX のアドバイザーとトレンドレポートがすべての意思決定を支えます。',
  ctaTitle: '世界中の 600,000+ のマーチャントに信頼されています',
  ctaSubtitle: '参加してオムニチャネルの旅を始めましょう',
}

const vi: DataAnalysisCopy = {
  title: 'Giải pháp tăng trưởng dựa trên dữ liệu',
  subtitle: 'Cắt bỏ nhiễu. ARVIX thống nhất dữ liệu first-party quanh người, sản phẩm và địa điểm — kèm tư vấn và báo cáo ngành — để quyết định thúc đẩy tăng trưởng thực.',
  cta: 'Bắt đầu dùng thử miễn phí',
  problemsTitle: 'Quyết định đơn giản hơn, tăng trưởng thông minh hơn',
  problemsSubtitle: 'Vẫn đoán mò thay vì thấy toàn cảnh?',
  problems: [
    { title: 'Dữ liệu phân mảnh', desc: 'Tín hiệu nằm trong silo — khó thấy thương hiệu đang thực sự hoạt động thế nào.' },
    { title: 'Quá nhiều nhiễu', desc: 'Khối lượng lớn không ưu tiên rõ ràng lãng phí công sức phân tích.' },
    { title: 'Quyết định theo cảm tính', desc: 'Không có bằng chứng thì ROI marketing khó đo.' },
  ],
  focusTitle: 'Tập trung vào người, sản phẩm, địa điểm',
  focusSubtitle: 'Nắm bộ ba bán lẻ để tăng tốc tăng trưởng',
  items: [
    { key: 'Người', title: 'Bán cho đúng khách', tags: ['Mô hình giá trị RFIM thông minh'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', alt: 'Mô hình giá trị RFIM để tìm đúng người mua' },
    { key: 'Sản phẩm', title: 'Merchandising sắc hơn', tags: ['Analytics Center (Pro) — tăng trưởng sản phẩm', 'Gợi ý sản phẩm AI'], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', alt: 'Vòng đời sản phẩm và insight nhu cầu' },
    { key: 'Địa điểm', title: 'Cảnh omnichannel liền mạch', tags: ['Insight omnichannel', 'Chuẩn ngành'], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80', alt: 'Dữ liệu kênh thống nhất cho CX liền mạch' },
  ],
  advisorTitle: 'Dữ liệu × cố vấn × insight\nTư vấn chiến lược & báo cáo ngành',
  advisorDesc: 'Ngoài công cụ, cố vấn ARVIX và báo cáo xu hướng đặt nền cho mọi quyết định.',
  ctaTitle: 'Được hơn 600.000 thương nhân trên thế giới tin dùng',
  ctaSubtitle: 'Tham gia và bắt đầu hành trình omnichannel của bạn',
}

const es: DataAnalysisCopy = {
  title: 'Solución de crecimiento impulsada por datos',
  subtitle: 'Corta el ruido. ARVIX unifica datos first-party en torno a personas, productos y lugares — más asesoría e informes de industria — para que las decisiones impulsen crecimiento real.',
  cta: 'Empieza la prueba gratis',
  problemsTitle: 'Decisiones más simples, crecimiento más inteligente',
  problemsSubtitle: '¿Sigues adivinando en lugar de ver el panorama completo?',
  problems: [
    { title: 'Datos fragmentados', desc: 'Las señales viven en silos — cuesta ver cómo rinde realmente la marca.' },
    { title: 'Demasiado ruido', desc: 'Volúmenes enormes sin prioridades claras desperdician el análisis.' },
    { title: 'Decisiones a ojo', desc: 'Sin evidencia, el ROI de marketing es difícil de medir.' },
  ],
  focusTitle: 'Enfócate en personas, productos, lugares',
  focusSubtitle: 'Domina la tríada retail para acelerar el crecimiento',
  items: [
    { key: 'Personas', title: 'Vende a los clientes correctos', tags: ['Modelo de valor RFIM inteligente'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', alt: 'Modelo de valor RFIM para encontrar a los compradores correctos' },
    { key: 'Productos', title: 'Merchandising más preciso', tags: ['Analytics Center (Pro) — crecimiento de producto', 'Recomendaciones de producto con IA'], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', alt: 'Ciclo de vida del producto e insights de demanda' },
    { key: 'Lugares', title: 'Escenas omnicanal sin fisuras', tags: ['Insights omnicanal', 'Benchmarks de industria'], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80', alt: 'Datos de canal unificados para un CX fluido' },
  ],
  advisorTitle: 'Datos × asesores × insight\nAsesoría estratégica e informes de industria',
  advisorDesc: 'Más allá de las herramientas, los asesores ARVIX y los reportes de tendencia fundamentan cada decisión.',
  ctaTitle: 'Más de 600.000 comercios en el mundo confían en ARVIX',
  ctaSubtitle: 'Únete y comienza tu viaje omnicanal',
}

const pt: DataAnalysisCopy = {
  title: 'Solução de crescimento impulsionada por dados',
  subtitle: 'Corte o ruído. A ARVIX unifica dados first-party em torno de pessoas, produtos e lugares — mais consultoria e relatórios de indústria — para decisões gerarem crescimento real.',
  cta: 'Começar teste grátis',
  problemsTitle: 'Decisões mais simples, crescimento mais inteligente',
  problemsSubtitle: 'Ainda chutando em vez de ver o quadro completo?',
  problems: [
    { title: 'Dados fragmentados', desc: 'Sinais ficam em silos — difícil ver como a marca realmente performa.' },
    { title: 'Ruído demais', desc: 'Volumes enormes sem prioridades claras desperdiçam esforço de análise.' },
    { title: 'Decisões no feeling', desc: 'Sem evidência, o ROI de marketing é difícil de medir.' },
  ],
  focusTitle: 'Foque em pessoas, produtos, lugares',
  focusSubtitle: 'Domine a tríade do varejo para acelerar o crescimento',
  items: [
    { key: 'Pessoas', title: 'Venda para os clientes certos', tags: ['Modelo de valor RFIM inteligente'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', alt: 'Modelo de valor RFIM para achar os compradores certos' },
    { key: 'Produtos', title: 'Merchandising mais afiado', tags: ['Analytics Center (Pro) — crescimento de produto', 'Recomendações de produto com IA'], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', alt: 'Ciclo de vida do produto e insights de demanda' },
    { key: 'Lugares', title: 'Cenas omnichannel sem atrito', tags: ['Insights omnichannel', 'Benchmarks de indústria'], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80', alt: 'Dados de canal unificados para CX fluido' },
  ],
  advisorTitle: 'Dados × consultores × insight\nConsultoria estratégica e relatórios de indústria',
  advisorDesc: 'Além das ferramentas, consultores ARVIX e relatórios de tendência embasam cada decisão.',
  ctaTitle: 'Mais de 600.000 comerciantes no mundo confiam na ARVIX',
  ctaSubtitle: 'Participe e comece sua jornada omnichannel',
}

const de: DataAnalysisCopy = {
  title: 'Datengetriebene Wachstums-Lösung',
  subtitle: 'Schneiden Sie das Rauschen weg. ARVIX vereint First-Party-Daten zu Menschen, Produkten und Orten — plus Beratung und Branchenreports — damit Entscheidungen echtes Wachstum treiben.',
  cta: 'Kostenlos testen',
  problemsTitle: 'Einfachere Entscheidungen, smarteres Wachstum',
  problemsSubtitle: 'Immer noch raten statt das Gesamtbild zu sehen?',
  problems: [
    { title: 'Fragmentierte Daten', desc: 'Signale sitzen in Silos — schwer zu sehen, wie die Marke wirklich performt.' },
    { title: 'Zu viel Rauschen', desc: 'Riesige Mengen ohne klare Prioritäten verschwenden Analyseaufwand.' },
    { title: 'Bauchgefühl-Entscheidungen', desc: 'Ohne Evidenz ist Marketing-ROI schwer messbar.' },
  ],
  focusTitle: 'Fokus auf Menschen, Produkte, Orte',
  focusSubtitle: 'Meistern Sie die Retail-Triade, um Wachstum zu beschleunigen',
  items: [
    { key: 'Menschen', title: 'An die richtigen Kunden verkaufen', tags: ['Smartes RFIM-Wertmodell'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', alt: 'RFIM-Wertmodell, um die richtigen Käufer zu finden' },
    { key: 'Produkte', title: 'Schärferes Merchandising', tags: ['Analytics Center (Pro) — Produktwachstum', 'KI-Produktempfehlungen'], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', alt: 'Produktlebenszyklus- und Nachfrage-Insights' },
    { key: 'Orte', title: 'Nahtlose Omnichannel-Szenen', tags: ['Omnichannel-Insights', 'Branchen-Benchmarks'], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80', alt: 'Vereinheitlichte Kanaldaten für nahtloses CX' },
  ],
  advisorTitle: 'Daten × Berater × Insight\nStrategieberatung & Branchenreports',
  advisorDesc: 'Über Tools hinaus fundieren ARVIX-Berater und Trendreports jede Entscheidung.',
  ctaTitle: 'Mehr als 600.000 Händler weltweit vertrauen ARVIX',
  ctaSubtitle: 'Mitmachen und deine Omnichannel-Reise starten',
}

const fr: DataAnalysisCopy = {
  title: 'Solution de croissance pilotée par la data',
  subtitle: 'Coupez le bruit. ARVIX unifie les données first-party autour des personnes, produits et lieux — plus conseil et rapports sectoriels — pour que les décisions pilotent une vraie croissance.',
  cta: 'Démarrer l’essai gratuit',
  problemsTitle: 'Décisions plus simples, croissance plus intelligente',
  problemsSubtitle: 'Vous devinez encore au lieu de voir le tableau complet ?',
  problems: [
    { title: 'Données fragmentées', desc: 'Les signaux restent en silos — difficile de voir la vraie performance de la marque.' },
    { title: 'Trop de bruit', desc: 'D’énormes volumes sans priorités claires gaspillent l’effort d’analyse.' },
    { title: 'Décisions au feeling', desc: 'Sans preuves, le ROI marketing est difficile à mesurer.' },
  ],
  focusTitle: 'Focalisez sur personnes, produits, lieux',
  focusSubtitle: 'Maîtrisez la triade retail pour accélérer la croissance',
  items: [
    { key: 'Personnes', title: 'Vendez aux bons clients', tags: ['Modèle de valeur RFIM intelligent'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', alt: 'Modèle de valeur RFIM pour trouver les bons acheteurs' },
    { key: 'Produits', title: 'Merchandising plus affûté', tags: ['Analytics Center (Pro) — croissance produit', 'Recommandations produit IA'], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', alt: 'Cycle de vie produit et insights demande' },
    { key: 'Lieux', title: 'Scènes omnicanales fluides', tags: ['Insights omnicanaux', 'Benchmarks sectoriels'], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80', alt: 'Données canal unifiées pour un CX fluide' },
  ],
  advisorTitle: 'Data × conseillers × insight\nConseil stratégique & rapports sectoriels',
  advisorDesc: 'Au-delà des outils, les conseillers ARVIX et les rapports de tendance ancrent chaque décision.',
  ctaTitle: 'Plus de 600 000 marchands dans le monde font confiance à ARVIX',
  ctaSubtitle: 'Rejoignez-nous et démarrez votre parcours omnicanal',
}

const copy: Partial<Record<Locale, DataAnalysisCopy>> & { 'zh-TW': DataAnalysisCopy; en: DataAnalysisCopy } = {
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

export default function DataAnalysisPage() {
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
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" alt={c.title} className="w-full rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>{c.problemsTitle}</h2>
          <p className="text-center mb-12" style={{ color: '#687280' }}>{c.problemsSubtitle}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {c.problems.map((item) => (
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
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>{c.focusTitle}</h2>
          <p className="text-center mb-16" style={{ color: '#687280' }}>{c.focusSubtitle}</p>
          <div className="space-y-20">
            {c.items.map((item, i) => (
              <div key={item.key} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}>
                <div className="flex-1">
                  <div className="text-4xl font-black mb-3" style={{ color: '#5B5FF0' }}>「{item.key}」</div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#00142D' }}>{item.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: '#EEF0FF', color: '#5B5FF0' }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <img src={item.img} alt={item.alt} className="w-full rounded-2xl shadow-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.advisorTitle}</h2>
            <p className="text-lg" style={{ color: '#687280' }}>{c.advisorDesc}</p>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" alt={c.advisorTitle} className="w-full rounded-2xl" />
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
