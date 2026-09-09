'use client'

import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'
import type { Locale } from '../../../lib/i18n'

type MemberRepurchaseCopy = {
  title: string
  subtitle: string
  cta: string
  advantagesTitle: string
  whyTitle: string
  whyStats: { stat: string; title: string }[]
  loopTitle: string
  steps: { step: string; title: string; img: string; alt: string }[]
  driveTitle: string
  driveItems: { title: string; desc: string }[]
  ctaTitle: string
  ctaSubtitle: string
}

const zhTW: MemberRepurchaseCopy = {
  title: '會員回購解決方案\n4 步驟打造高回購閉環',
  subtitle: '在流量紅利消失的時代，ARVIX 提供 4 大核心策略，透過「會員分眾」、「行銷優惠」、「回購驅動」、「數據分析」為你打造高轉換的會員行銷閉環。',
  cta: '立即免費試用',
  advantagesTitle: '會員經營 4 大核心優勢',
  whyTitle: '品牌會員經營為什麼至關重要？',
  whyStats: [
    { stat: '5x', title: '熟客帶來轉換成果是新客的 5 倍' },
    { stat: '↑', title: '熟客的平均花費金額會高於新客' },
    { stat: '+利潤', title: '多留住 5% 熟客，有助利潤提升' },
  ],
  loopTitle: '如何打造「高循環」、「高精準」、「高效率」的會員經營閉環？',
  steps: [
    { step: 'STEP 01', title: '會員分眾：快速掌握顧客輪廓，精準制定行銷分群策略', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'ARVIX 獨家 RFIM 價值模型，提供 9 大智慧顧客分群' },
    { step: 'STEP 02', title: '行銷優惠：高達 205 種促購玩法，精準提升顧客回購率', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'ARVIX 提供多元的優惠設定' },
    { step: 'STEP 03', title: '回購驅動：多通路精準推播策略，不浪費每一次曝光', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'ARVIX 自動化推播系統整合多管道' },
    { step: 'STEP 04', title: '數據分析：55 種專業報表全面解析，精準掌握投資回報，最大化行銷價值', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80', alt: 'ARVIX Shoplytics 數據分析提供 55 種專業分析報表' },
  ],
  driveTitle: '驅動會員持續回購\n流量碎片化時代的致勝關鍵',
  driveItems: [
    { title: '有效提升會員經營效率', desc: '自動化行銷流程，節省人力成本，讓你專注在策略制定。' },
    { title: '建立高循環的行銷閉環', desc: '從獲客到留客，完整的會員旅程管理，持續提升顧客終身價值。' },
    { title: '持續優化行銷投資報酬', desc: '數據驅動決策，精準投放資源，最大化每一分行銷預算的效益。' },
  ],
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即加入，開始你的全通路零售之旅',
}

const zhCN: MemberRepurchaseCopy = {
  title: '会员复购解决方案\n4 步骤打造高复购闭环',
  subtitle: '在流量红利消失的时代，ARVIX 提供 4 大核心策略，通过「会员分群」、「营销优惠」、「复购驱动」、「数据分析」为你打造高转化的会员营销闭环。',
  cta: '立即免费试用',
  advantagesTitle: '会员经营 4 大核心优势',
  whyTitle: '品牌会员经营为什么至关重要？',
  whyStats: [
    { stat: '5x', title: '熟客带来转化成果是新客的 5 倍' },
    { stat: '↑', title: '熟客的平均花费金额会高于新客' },
    { stat: '+利润', title: '多留住 5% 熟客，有助利润提升' },
  ],
  loopTitle: '如何打造「高循环」、「高精准」、「高效率」的会员经营闭环？',
  steps: [
    { step: 'STEP 01', title: '会员分群：快速掌握顾客轮廓，精准制定营销分群策略', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'ARVIX 独家 RFIM 价值模型，提供 9 大智慧顾客分群' },
    { step: 'STEP 02', title: '营销优惠：高达 205 种促购玩法，精准提升顾客复购率', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'ARVIX 提供多元的优惠设定' },
    { step: 'STEP 03', title: '复购驱动：多渠道精准推送策略，不浪费每一次曝光', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'ARVIX 自动化推送系统整合多管道' },
    { step: 'STEP 04', title: '数据分析：55 种专业报表全面解析，精准掌握投资回报，最大化营销价值', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80', alt: 'ARVIX Shoplytics 数据分析提供 55 种专业分析报表' },
  ],
  driveTitle: '驱动会员持续复购\n流量碎片化时代的致胜关键',
  driveItems: [
    { title: '有效提升会员经营效率', desc: '自动化营销流程，节省人力成本，让你专注在策略制定。' },
    { title: '建立高循环的营销闭环', desc: '从获客到留客，完整的会员旅程管理，持续提升顾客终身价值。' },
    { title: '持续优化营销投资回报', desc: '数据驱动决策，精准投放资源，最大化每一分营销预算的效益。' },
  ],
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即加入，开始你的全渠道零售之旅',
}

const en: MemberRepurchaseCopy = {
  title: 'Member repurchase solution\n4 steps to a high-repeat loop',
  subtitle: 'As traffic bonuses fade, ARVIX’s four pillars — segments, offers, repurchase triggers, and analytics — build a high-converting loyalty loop.',
  cta: 'Start free trial',
  advantagesTitle: 'Four pillars of membership growth',
  whyTitle: 'Why membership matters',
  whyStats: [
    { stat: '5x', title: 'Returning buyers convert 5x vs new visitors' },
    { stat: '↑', title: 'Loyal customers spend more on average' },
    { stat: '+Profit', title: 'Retain 5% more loyals to lift profit' },
  ],
  loopTitle: 'Build a high-cycle, high-precision, high-efficiency loyalty loop',
  steps: [
    { step: 'STEP 01', title: 'Segment: know customer profiles and target smarter', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'RFIM model with 9 smart segments' },
    { step: 'STEP 02', title: 'Offers: 205+ promotion plays to lift repurchase', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'Flexible promotion settings' },
    { step: 'STEP 03', title: 'Triggers: omnichannel pushes that waste no impression', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'Automated multi-channel messaging' },
    { step: 'STEP 04', title: 'Analytics: 55 reports to maximize marketing ROI', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80', alt: 'Shoplytics professional reports' },
  ],
  driveTitle: 'Drive ongoing repurchase\nThe edge in a fragmented-traffic era',
  driveItems: [
    { title: 'Run membership more efficiently', desc: 'Automate marketing so your team focuses on strategy.' },
    { title: 'Close a high-cycle loop', desc: 'From acquisition to retention — grow lifetime value.' },
    { title: 'Optimize marketing ROI', desc: 'Data-backed spend that maximizes every budget dollar.' },
  ],
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  ctaSubtitle: 'Join and start your omnichannel journey',
}

const ko: MemberRepurchaseCopy = {
  title: '회원 재구매 솔루션\n고반복 루프를 만드는 4단계',
  subtitle: '트래픽 보너스가 사라지는 시대, ARVIX의 네 기둥 — 세그먼트, 오퍼, 재구매 트리거, 분석 — 으로 고전환 로열티 루프를 만드세요.',
  cta: '무료 체험 시작',
  advantagesTitle: '멤버십 성장의 네 기둥',
  whyTitle: '멤버십이 중요한 이유',
  whyStats: [
    { stat: '5x', title: '재방문 구매자는 신규 대비 전환이 5배' },
    { stat: '↑', title: '충성 고객의 평균 지출이 더 높음' },
    { stat: '+Profit', title: '충성 고객 5% 더 유지하면 이익 상승' },
  ],
  loopTitle: '고순환·고정밀·고효율 로열티 루프를 구축하세요',
  steps: [
    { step: 'STEP 01', title: '세그먼트: 고객 프로필을 파악하고 더 스마트하게 타깃팅', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: '9개 스마트 세그먼트의 RFIM 모델' },
    { step: 'STEP 02', title: '오퍼: 재구매를 끌어올리는 205+ 프로모션 플레이', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: '유연한 프로모션 설정' },
    { step: 'STEP 03', title: '트리거: 노출을 낭비하지 않는 옴니채널 푸시', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: '자동화된 멀티채널 메시징' },
    { step: 'STEP 04', title: '분석: 마케팅 ROI를 극대화하는 55개 리포트', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80', alt: 'Shoplytics 전문 리포트' },
  ],
  driveTitle: '지속 재구매를 드라이브\n트래픽 파편화 시대의 경쟁 우위',
  driveItems: [
    { title: '멤버십을 더 효율적으로 운영', desc: '마케팅을 자동화해 팀이 전략에 집중하게 하세요.' },
    { title: '고순환 루프를 닫기', desc: '획득부터 유지까지 — 생애 가치를 키우세요.' },
    { title: '마케팅 ROI 최적화', desc: '데이터 기반 지출로 예산의 모든 원을 극대화합니다.' },
  ],
  ctaTitle: '전 세계 600,000+ 셀러가 신뢰하는 ARVIX',
  ctaSubtitle: '합류하고 옴니채널 여정을 시작하세요',
}

const ja: MemberRepurchaseCopy = {
  title: '会員リピート購入ソリューション\n高リピートループへの 4 ステップ',
  subtitle: 'トラフィックボーナスが消える時代、ARVIX の 4 本柱 — セグメント、オファー、リピートトリガー、分析 — で高コンバージョンのロイヤルティループを構築。',
  cta: '無料トライアルを開始',
  advantagesTitle: '会員成長の 4 本柱',
  whyTitle: '会員施策が重要な理由',
  whyStats: [
    { stat: '5x', title: 'リピーターの転換は新規の 5 倍' },
    { stat: '↑', title: 'ロイヤル顧客の平均支出はより高い' },
    { stat: '+Profit', title: 'ロイヤル顧客を 5% 多く維持すると利益が向上' },
  ],
  loopTitle: '高サイクル・高精度・高効率のロイヤルティループを構築',
  steps: [
    { step: 'STEP 01', title: 'セグメント：顧客プロファイルを把握し、よりスマートにターゲティング', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: '9 のスマートセグメントを持つ RFIM モデル' },
    { step: 'STEP 02', title: 'オファー：リピートを押し上げる 205+ のプロモーション', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: '柔軟なプロモーション設定' },
    { step: 'STEP 03', title: 'トリガー：インプレッションを無駄にしないオムニチャネルプッシュ', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: '自動化されたマルチチャネルメッセージ' },
    { step: 'STEP 04', title: '分析：マーケティング ROI を最大化する 55 のレポート', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80', alt: 'Shoplytics プロフェッショナルレポート' },
  ],
  driveTitle: '継続リピートをドライブ\nトラフィック断片化時代の優位性',
  driveItems: [
    { title: '会員運営をより効率的に', desc: 'マーケティングを自動化し、チームは戦略に集中。' },
    { title: '高サイクルのループを閉じる', desc: '獲得から定着まで — ライフタイムバリューを伸ばす。' },
    { title: 'マーケティング ROI を最適化', desc: 'データに基づく支出で予算の一円を最大化。' },
  ],
  ctaTitle: '世界中の 600,000+ のマーチャントに信頼されています',
  ctaSubtitle: '参加してオムニチャネルの旅を始めましょう',
}

const vi: MemberRepurchaseCopy = {
  title: 'Giải pháp tái mua thành viên\n4 bước tới vòng lặp tái mua cao',
  subtitle: 'Khi bonus traffic phai nhạt, bốn trụ cột của ARVIX — phân khúc, ưu đãi, kích hoạt tái mua và phân tích — xây vòng lặp trung thành chuyển đổi cao.',
  cta: 'Bắt đầu dùng thử miễn phí',
  advantagesTitle: 'Bốn trụ cột tăng trưởng thành viên',
  whyTitle: 'Vì sao thành viên quan trọng',
  whyStats: [
    { stat: '5x', title: 'Người mua quay lại chuyển đổi gấp 5 lần khách mới' },
    { stat: '↑', title: 'Khách trung thành chi tiêu trung bình cao hơn' },
    { stat: '+Profit', title: 'Giữ thêm 5% khách trung thành để tăng lợi nhuận' },
  ],
  loopTitle: 'Xây vòng lặp trung thành chu kỳ cao, chính xác cao, hiệu quả cao',
  steps: [
    { step: 'STEP 01', title: 'Phân khúc: nắm hồ sơ khách và nhắm mục tiêu thông minh hơn', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'Mô hình RFIM với 9 phân khúc thông minh' },
    { step: 'STEP 02', title: 'Ưu đãi: 205+ cách khuyến mãi để tăng tái mua', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'Cài đặt khuyến mãi linh hoạt' },
    { step: 'STEP 03', title: 'Kích hoạt: push omnichannel không lãng phí impression', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'Nhắn tin đa kênh tự động' },
    { step: 'STEP 04', title: 'Phân tích: 55 báo cáo để tối đa ROI marketing', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80', alt: 'Báo cáo chuyên nghiệp Shoplytics' },
  ],
  driveTitle: 'Thúc đẩy tái mua liên tục\nLợi thế trong kỷ nguyên traffic phân mảnh',
  driveItems: [
    { title: 'Vận hành thành viên hiệu quả hơn', desc: 'Tự động hóa marketing để đội ngũ tập trung chiến lược.' },
    { title: 'Khép vòng lặp chu kỳ cao', desc: 'Từ thu hút đến giữ chân — tăng lifetime value.' },
    { title: 'Tối ưu ROI marketing', desc: 'Chi tiêu dựa trên dữ liệu để tối đa từng đồng ngân sách.' },
  ],
  ctaTitle: 'Được hơn 600.000 thương nhân trên thế giới tin dùng',
  ctaSubtitle: 'Tham gia và bắt đầu hành trình omnichannel của bạn',
}

const es: MemberRepurchaseCopy = {
  title: 'Solución de recompra de miembros\n4 pasos a un bucle de alta repetición',
  subtitle: 'Cuando los bonus de tráfico se desvanecen, los cuatro pilares de ARVIX — segmentos, ofertas, triggers de recompra y analítica — construyen un bucle de lealtad de alta conversión.',
  cta: 'Empieza la prueba gratis',
  advantagesTitle: 'Cuatro pilares del crecimiento de membresía',
  whyTitle: 'Por qué importa la membresía',
  whyStats: [
    { stat: '5x', title: 'Los compradores recurrentes convierten 5x vs nuevos visitantes' },
    { stat: '↑', title: 'Los clientes leales gastan más de media' },
    { stat: '+Profit', title: 'Retén un 5% más de leales para subir el beneficio' },
  ],
  loopTitle: 'Construye un bucle de lealtad de alto ciclo, alta precisión y alta eficiencia',
  steps: [
    { step: 'STEP 01', title: 'Segmentar: conoce perfiles y apunta con más inteligencia', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'Modelo RFIM con 9 segmentos inteligentes' },
    { step: 'STEP 02', title: 'Ofertas: más de 205 jugadas promocionales para subir la recompra', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'Configuración flexible de promociones' },
    { step: 'STEP 03', title: 'Triggers: pushes omnicanal que no desperdician impresión', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'Mensajería multicanal automatizada' },
    { step: 'STEP 04', title: 'Analítica: 55 informes para maximizar el ROI de marketing', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80', alt: 'Informes profesionales Shoplytics' },
  ],
  driveTitle: 'Impulsa la recompra continua\nLa ventaja en la era del tráfico fragmentado',
  driveItems: [
    { title: 'Opera la membresía con más eficiencia', desc: 'Automatiza el marketing para que el equipo se centre en la estrategia.' },
    { title: 'Cierra un bucle de alto ciclo', desc: 'De adquisición a retención — crece el lifetime value.' },
    { title: 'Optimiza el ROI de marketing', desc: 'Gasto respaldado por datos que maximiza cada euro de presupuesto.' },
  ],
  ctaTitle: 'Más de 600.000 comercios en el mundo confían en ARVIX',
  ctaSubtitle: 'Únete y comienza tu viaje omnicanal',
}

const pt: MemberRepurchaseCopy = {
  title: 'Solução de recompra de membros\n4 passos para um loop de alta repetição',
  subtitle: 'Com o bônus de tráfego sumindo, os quatro pilares da ARVIX — segmentos, ofertas, gatilhos de recompra e analytics — constroem um loop de fidelidade de alta conversão.',
  cta: 'Começar teste grátis',
  advantagesTitle: 'Quatro pilares do crescimento de membership',
  whyTitle: 'Por que membership importa',
  whyStats: [
    { stat: '5x', title: 'Compradores recorrentes convertem 5x vs novos visitantes' },
    { stat: '↑', title: 'Clientes fiéis gastam mais em média' },
    { stat: '+Profit', title: 'Retenha 5% mais fiéis para elevar o lucro' },
  ],
  loopTitle: 'Construa um loop de fidelidade de alto ciclo, alta precisão e alta eficiência',
  steps: [
    { step: 'STEP 01', title: 'Segmentar: conheça perfis e direcione com mais inteligência', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'Modelo RFIM com 9 segmentos inteligentes' },
    { step: 'STEP 02', title: 'Ofertas: 205+ jogadas promocionais para elevar a recompra', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'Configurações flexíveis de promoção' },
    { step: 'STEP 03', title: 'Gatilhos: pushes omnichannel que não desperdiçam impressão', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'Mensageria multicanal automatizada' },
    { step: 'STEP 04', title: 'Analytics: 55 relatórios para maximizar o ROI de marketing', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80', alt: 'Relatórios profissionais Shoplytics' },
  ],
  driveTitle: 'Impulse a recompra contínua\nA vantagem na era do tráfego fragmentado',
  driveItems: [
    { title: 'Opere membership com mais eficiência', desc: 'Automatize o marketing para a equipe focar em estratégia.' },
    { title: 'Feche um loop de alto ciclo', desc: 'Da aquisição à retenção — cresça o lifetime value.' },
    { title: 'Otimize o ROI de marketing', desc: 'Gasto baseado em dados que maximiza cada real do orçamento.' },
  ],
  ctaTitle: 'Mais de 600.000 comerciantes no mundo confiam na ARVIX',
  ctaSubtitle: 'Participe e comece sua jornada omnichannel',
}

const de: MemberRepurchaseCopy = {
  title: 'Mitglieder-Wiederkauf-Lösung\n4 Schritte zu einem High-Repeat-Loop',
  subtitle: 'Wenn Traffic-Boni schwinden, bauen ARVIX’ vier Säulen — Segmente, Angebote, Wiederkauf-Trigger und Analytics — einen hochkonvertierenden Loyalty-Loop.',
  cta: 'Kostenlos testen',
  advantagesTitle: 'Vier Säulen des Mitgliedschaftswachstums',
  whyTitle: 'Warum Mitgliedschaft zählt',
  whyStats: [
    { stat: '5x', title: 'Wiederkehrer konvertieren 5× vs. neue Besucher' },
    { stat: '↑', title: 'Loyale Kunden geben im Schnitt mehr aus' },
    { stat: '+Profit', title: '5% mehr Loyale halten, um den Gewinn zu steigern' },
  ],
  loopTitle: 'Einen High-Cycle-, High-Precision-, High-Efficiency-Loyalty-Loop bauen',
  steps: [
    { step: 'STEP 01', title: 'Segmentieren: Kundenprofile kennen und smarter targeten', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'RFIM-Modell mit 9 Smart-Segmenten' },
    { step: 'STEP 02', title: 'Angebote: 205+ Promo-Plays für mehr Wiederkauf', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'Flexible Promo-Einstellungen' },
    { step: 'STEP 03', title: 'Trigger: Omnichannel-Pushes, die keine Impression verschwenden', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'Automatisierte Multichannel-Messaging' },
    { step: 'STEP 04', title: 'Analytics: 55 Reports zur Maximierung des Marketing-ROI', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80', alt: 'Shoplytics-Professional-Reports' },
  ],
  driveTitle: 'Laufenden Wiederkauf antreiben\nDer Vorsprung im fragmentierten Traffic-Zeitalter',
  driveItems: [
    { title: 'Mitgliedschaft effizienter betreiben', desc: 'Marketing automatisieren, damit das Team auf Strategie fokussiert.' },
    { title: 'Einen High-Cycle-Loop schließen', desc: 'Von Akquise bis Retention — Lifetime Value steigern.' },
    { title: 'Marketing-ROI optimieren', desc: 'Datenbasierte Ausgaben, die jeden Budget-Euro maximieren.' },
  ],
  ctaTitle: 'Mehr als 600.000 Händler weltweit vertrauen ARVIX',
  ctaSubtitle: 'Mitmachen und deine Omnichannel-Reise starten',
}

const fr: MemberRepurchaseCopy = {
  title: 'Solution de rachat membre\n4 étapes vers une boucle à forte répétition',
  subtitle: 'Quand les bonus de trafic s’effacent, les quatre piliers ARVIX — segments, offres, déclencheurs de rachat et analytics — construisent une boucle de fidélité à forte conversion.',
  cta: 'Démarrer l’essai gratuit',
  advantagesTitle: 'Quatre piliers de la croissance membership',
  whyTitle: 'Pourquoi le membership compte',
  whyStats: [
    { stat: '5x', title: 'Les acheteurs récurrents convertissent 5× vs nouveaux visiteurs' },
    { stat: '↑', title: 'Les clients fidèles dépensent plus en moyenne' },
    { stat: '+Profit', title: 'Retenez 5% de fidèles en plus pour hausser le profit' },
  ],
  loopTitle: 'Construisez une boucle de fidélité à haut cycle, haute précision et haute efficacité',
  steps: [
    { step: 'STEP 01', title: 'Segmenter : connaître les profils et cibler plus intelligemment', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'Modèle RFIM avec 9 segments intelligents' },
    { step: 'STEP 02', title: 'Offres : 205+ mécan promotionnels pour hausser le rachat', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'Réglages promotion flexibles' },
    { step: 'STEP 03', title: 'Déclencheurs : pushes omnicanaux qui ne gaspillent aucune impression', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'Messagerie multicanale automatisée' },
    { step: 'STEP 04', title: 'Analytics : 55 rapports pour maximiser le ROI marketing', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80', alt: 'Rapports professionnels Shoplytics' },
  ],
  driveTitle: 'Pilotez le rachat continu\nL’avantage à l’ère du trafic fragmenté',
  driveItems: [
    { title: 'Gérez le membership plus efficacement', desc: 'Automatisez le marketing pour que l’équipe se concentre sur la stratégie.' },
    { title: 'Fermez une boucle à haut cycle', desc: 'De l’acquisition à la rétention — faites croître la lifetime value.' },
    { title: 'Optimisez le ROI marketing', desc: 'Dépenses data-driven qui maximisent chaque euro de budget.' },
  ],
  ctaTitle: 'Plus de 600 000 marchands dans le monde font confiance à ARVIX',
  ctaSubtitle: 'Rejoignez-nous et démarrez votre parcours omnicanal',
}

const copy: Partial<Record<Locale, MemberRepurchaseCopy>> & { 'zh-TW': MemberRepurchaseCopy; en: MemberRepurchaseCopy } = {
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

export default function MemberRepurchasePage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-20" style={{ background: 'linear-gradient(rgb(0, 20, 45) 0%, rgb(0, 65, 147) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-white whitespace-pre-line">{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>{c.subtitle}</p>
            <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>{c.cta}</a>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80" alt={c.title} className="w-full rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.advantagesTitle}</h2>
          <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80" alt={c.advantagesTitle} className="w-full rounded-2xl" />
        </div>
      </section>
      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>{c.whyTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {c.whyStats.map((item) => (
              <div key={item.stat} className="p-8 rounded-2xl text-center bg-white">
                <div className="text-5xl font-black mb-4" style={{ color: '#5B5FF0' }}>{item.stat}</div>
                <h3 className="text-base font-bold" style={{ color: '#00142D' }}>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.loopTitle}</h2>
          <div className="space-y-16">
            {c.steps.map((s, i) => (
              <div key={s.step} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}>
                <div className="flex-1">
                  <div className="text-sm font-bold mb-2" style={{ color: '#5B5FF0' }}>{s.step}</div>
                  <h3 className="text-xl font-bold" style={{ color: '#00142D' }}>{s.title}</h3>
                </div>
                <div className="flex-1">
                  <img src={s.img} alt={s.alt} className="w-full rounded-2xl shadow-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20" style={{ backgroundColor: '#F2F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.driveTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {c.driveItems.map((item) => (
              <div key={item.title} className="p-8 bg-white rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold mb-3" style={{ color: '#5B5FF0' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#687280' }}>{item.desc}</p>
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
