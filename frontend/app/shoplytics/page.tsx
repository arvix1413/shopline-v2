'use client'

import Image from 'next/image'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type ShoplyticsCopy = {
  title: string
  subtitle: string
  cta: string
  sec1Title: string
  sec1Desc: string
  sec1Items: string[]
  sec2Title: string
  sec2Desc: string
  sec2Items: string[]
  sec3Title: string
  sec3Desc: string
  sec3Items: string[]
  sec4Title: string
  sec4Desc: string
  ctaTitle: string
}

const zhTW: ShoplyticsCopy = {
  title: 'Shoplytics 零售數據分析\n善用數據驅動決策，讓你掌握商機',
  subtitle: '即時銷售數據分析、AI 洞察策略、多通路整合數據，讓品牌經營更有方向。',
  cta: '立即免費試用',
  sec1Title: 'Shoplytics 數據分析中心',
  sec1Desc: '一站查看從數據到決策，讓品牌經營更有方向。',
  sec1Items: ['即時銷售數據分析', 'AI 洞察策略', 'AI 數據自動應用', '即時營運儀表'],
  sec2Title: 'Shoplytics x AI\n驅動智慧洞察',
  sec2Desc: 'AI 驅動的智慧洞察，讓你快速掌握市場趨勢，做出更精準的決策。',
  sec2Items: ['顧客行為分析', '多維度行銷分析'],
  sec3Title: '一站查看\n從數據到決策，讓品牌經營更有方向',
  sec3Desc: '多通路整合數據，讓你在一個平台上掌握所有銷售渠道的表現。',
  sec3Items: ['多通路整合數據', '流量組成', '銷售數據', '轉換分析'],
  sec4Title: '即時掌握\n每一個關鍵數據',
  sec4Desc: '即時營運儀表，讓你隨時掌握品牌的最新狀況，快速應對市場變化。',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
}

const zhCN: ShoplyticsCopy = {
  title: 'Shoplytics 零售数据分析\n善用数据驱动决策，让你掌握商机',
  subtitle: '即时销售数据分析、AI 洞察策略、多渠道整合数据，让品牌经营更有方向。',
  cta: '立即免费试用',
  sec1Title: 'Shoplytics 数据分析中心',
  sec1Desc: '一站查看从数据到决策，让品牌经营更有方向。',
  sec1Items: ['即时销售数据分析', 'AI 洞察策略', 'AI 数据自动应用', '即时运营仪表'],
  sec2Title: 'Shoplytics x AI\n驱动智慧洞察',
  sec2Desc: 'AI 驱动的智慧洞察，让你快速掌握市场趋势，做出更精准的决策。',
  sec2Items: ['顾客行为分析', '多维度营销分析'],
  sec3Title: '一站查看\n从数据到决策，让品牌经营更有方向',
  sec3Desc: '多渠道整合数据，让你在一个平台上掌握所有销售渠道的表现。',
  sec3Items: ['多渠道整合数据', '流量组成', '销售数据', '转化分析'],
  sec4Title: '即时掌握\n每一个关键数据',
  sec4Desc: '即时运营仪表，让你随时掌握品牌的最新状况，快速应对市场变化。',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
}

const en: ShoplyticsCopy = {
  title: 'Shoplytics retail analytics\nDecide with data and catch every opportunity',
  subtitle: 'Live sales analytics, AI insights, and omnichannel data to steer the brand.',
  cta: 'Start free trial',
  sec1Title: 'Shoplytics analytics center',
  sec1Desc: 'From data to decisions in one place — clearer brand direction.',
  sec1Items: ['Live sales analytics', 'AI strategy insights', 'Automated AI data actions', 'Live ops dashboard'],
  sec2Title: 'Shoplytics × AI\nSmarter insights',
  sec2Desc: 'AI-driven insights so you spot trends and decide with precision.',
  sec2Items: ['Customer behavior analysis', 'Multi-dimensional marketing analysis'],
  sec3Title: 'One view\nFrom data to decisions',
  sec3Desc: 'Omnichannel data so every sales channel’s performance is clear.',
  sec3Items: ['Omnichannel data', 'Traffic mix', 'Sales metrics', 'Conversion analysis'],
  sec4Title: 'Live pulse\nEvery critical metric',
  sec4Desc: 'A live ops dashboard keeps you ready for market shifts.',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
}

const ko: ShoplyticsCopy = {
  title: 'Shoplytics 리테일 분석\n데이터로 결정하고 기회를 잡으세요',
  subtitle: '실시간 매출 분석, AI 인사이트, 옴니채널 데이터로 브랜드를 이끄세요.',
  cta: '무료 체험 시작',
  sec1Title: 'Shoplytics 분석 센터',
  sec1Desc: '데이터에서 의사결정까지 한곳에서 — 더 명확한 브랜드 방향.',
  sec1Items: ['실시간 매출 분석', 'AI 전략 인사이트', '자동 AI 데이터 액션', '실시간 운영 대시보드'],
  sec2Title: 'Shoplytics × AI\n더 스마트한 인사이트',
  sec2Desc: 'AI 기반 인사이트로 트렌드를 포착하고 정밀하게 결정하세요.',
  sec2Items: ['고객 행동 분석', '다차원 마케팅 분석'],
  sec3Title: '한눈에\n데이터에서 결정까지',
  sec3Desc: '옴니채널 데이터로 모든 판매 채널 성과를 명확히.',
  sec3Items: ['옴니채널 데이터', '트래픽 구성', '매출 지표', '전환 분석'],
  sec4Title: '실시간 맥박\n모든 핵심 지표',
  sec4Desc: '실시간 운영 대시보드로 시장 변화에 대비하세요.',
  ctaTitle: '전 세계 60만+ 판매자가 신뢰합니다',
}

const ja: ShoplyticsCopy = {
  title: 'Shoplytics リテール分析\nデータで判断し、機会を逃さない',
  subtitle: 'ライブ売上分析、AI インサイト、オムニチャネルデータでブランドを導く。',
  cta: '無料トライアルを開始',
  sec1Title: 'Shoplytics 分析センター',
  sec1Desc: 'データから意思決定まで一箇所で — より明確なブランド方針。',
  sec1Items: ['ライブ売上分析', 'AI 戦略インサイト', '自動 AI データアクション', 'ライブ運用ダッシュボード'],
  sec2Title: 'Shoplytics × AI\nよりスマートなインサイト',
  sec2Desc: 'AI 駆動のインサイトでトレンドを捉え、精密に判断。',
  sec2Items: ['顧客行動分析', '多次元マーケティング分析'],
  sec3Title: 'ひとつのビュー\nデータから意思決定へ',
  sec3Desc: 'オムニチャネルデータで全販売チャネルの実績を把握。',
  sec3Items: ['オムニチャネルデータ', 'トラフィック構成', '売上指標', 'コンバージョン分析'],
  sec4Title: 'ライブパルス\nすべての重要指標',
  sec4Desc: 'ライブ運用ダッシュボードで市場変化に備えられます。',
  ctaTitle: '世界中 60 万以上の加盟店が信頼',
}

const vi: ShoplyticsCopy = {
  title: 'Phân tích bán lẻ Shoplytics\nQuyết định bằng dữ liệu và nắm mọi cơ hội',
  subtitle: 'Phân tích doanh số trực tiếp, AI insights và dữ liệu omnichannel để dẫn dắt thương hiệu.',
  cta: 'Bắt đầu dùng thử miễn phí',
  sec1Title: 'Trung tâm phân tích Shoplytics',
  sec1Desc: 'Từ dữ liệu đến quyết định trong một nơi — hướng thương hiệu rõ hơn.',
  sec1Items: ['Phân tích doanh số trực tiếp', 'AI strategy insights', 'Hành động dữ liệu AI tự động', 'Dashboard vận hành trực tiếp'],
  sec2Title: 'Shoplytics × AI\nInsights thông minh hơn',
  sec2Desc: 'Insights do AI dẫn dắt giúp bạn thấy xu hướng và quyết định chính xác.',
  sec2Items: ['Phân tích hành vi khách hàng', 'Phân tích marketing đa chiều'],
  sec3Title: 'Một góc nhìn\nTừ dữ liệu đến quyết định',
  sec3Desc: 'Dữ liệu omnichannel để hiệu suất mọi kênh bán hàng đều rõ.',
  sec3Items: ['Dữ liệu omnichannel', 'Cơ cấu traffic', 'Chỉ số bán hàng', 'Phân tích chuyển đổi'],
  sec4Title: 'Nhịp trực tiếp\nMọi chỉ số quan trọng',
  sec4Desc: 'Dashboard vận hành trực tiếp giúp bạn sẵn sàng với biến động thị trường.',
  ctaTitle: 'Được hơn 600.000 người bán trên thế giới tin dùng',
}

const es: ShoplyticsCopy = {
  title: 'Analítica retail Shoplytics\nDecide con datos y captura cada oportunidad',
  subtitle: 'Analítica de ventas en vivo, insights de IA y datos omnicanal para dirigir la marca.',
  cta: 'Empezar prueba gratis',
  sec1Title: 'Centro de analítica Shoplytics',
  sec1Desc: 'De los datos a las decisiones en un solo lugar — dirección de marca más clara.',
  sec1Items: ['Analítica de ventas en vivo', 'Insights de estrategia con IA', 'Acciones automáticas de datos con IA', 'Panel de ops en vivo'],
  sec2Title: 'Shoplytics × IA\nInsights más inteligentes',
  sec2Desc: 'Insights impulsados por IA para detectar tendencias y decidir con precisión.',
  sec2Items: ['Análisis de comportamiento del cliente', 'Análisis de marketing multidimensional'],
  sec3Title: 'Una vista\nDe los datos a las decisiones',
  sec3Desc: 'Datos omnicanal para ver el rendimiento de cada canal de ventas.',
  sec3Items: ['Datos omnicanal', 'Mix de tráfico', 'Métricas de ventas', 'Análisis de conversión'],
  sec4Title: 'Pulso en vivo\nCada métrica crítica',
  sec4Desc: 'Un panel de ops en vivo te mantiene listo ante cambios del mercado.',
  ctaTitle: 'Más de 600.000 comercios confían en ARVIX',
}

const pt: ShoplyticsCopy = {
  title: 'Analytics de varejo Shoplytics\nDecida com dados e capture cada oportunidade',
  subtitle: 'Analytics de vendas ao vivo, insights de IA e dados omnichannel para conduzir a marca.',
  cta: 'Começar teste grátis',
  sec1Title: 'Centro de analytics Shoplytics',
  sec1Desc: 'Dos dados às decisões em um só lugar — direção de marca mais clara.',
  sec1Items: ['Analytics de vendas ao vivo', 'Insights de estratégia com IA', 'Ações automáticas de dados com IA', 'Dashboard de ops ao vivo'],
  sec2Title: 'Shoplytics × IA\nInsights mais inteligentes',
  sec2Desc: 'Insights movidos por IA para detectar tendências e decidir com precisão.',
  sec2Items: ['Análise de comportamento do cliente', 'Análise de marketing multidimensional'],
  sec3Title: 'Uma visão\nDos dados às decisões',
  sec3Desc: 'Dados omnichannel para deixar claro o desempenho de cada canal de vendas.',
  sec3Items: ['Dados omnichannel', 'Mix de tráfego', 'Métricas de vendas', 'Análise de conversão'],
  sec4Title: 'Pulso ao vivo\nCada métrica crítica',
  sec4Desc: 'Um dashboard de ops ao vivo mantém você pronto para mudanças de mercado.',
  ctaTitle: 'Mais de 600.000 comerciantes confiam na ARVIX',
}

const de: ShoplyticsCopy = {
  title: 'Shoplytics Retail-Analytics\nMit Daten entscheiden und jede Chance nutzen',
  subtitle: 'Live-Verkaufsanalysen, KI-Insights und Omnichannel-Daten steuern die Marke.',
  cta: 'Kostenlose Testphase starten',
  sec1Title: 'Shoplytics Analytics-Center',
  sec1Desc: 'Von Daten zu Entscheidungen an einem Ort — klarere Markenrichtung.',
  sec1Items: ['Live-Verkaufsanalysen', 'KI-Strategie-Insights', 'Automatisierte KI-Datenaktionen', 'Live-Ops-Dashboard'],
  sec2Title: 'Shoplytics × KI\nSmartere Insights',
  sec2Desc: 'KI-gestützte Insights, um Trends zu erkennen und präzise zu entscheiden.',
  sec2Items: ['Kundenverhaltensanalyse', 'Mehrdimensionale Marketinganalyse'],
  sec3Title: 'Eine Ansicht\nVon Daten zu Entscheidungen',
  sec3Desc: 'Omnichannel-Daten, damit die Leistung jedes Verkaufskanals klar ist.',
  sec3Items: ['Omnichannel-Daten', 'Traffic-Mix', 'Verkaufskennzahlen', 'Conversion-Analyse'],
  sec4Title: 'Live-Puls\nJede kritische Kennzahl',
  sec4Desc: 'Ein Live-Ops-Dashboard hält Sie bereit für Marktveränderungen.',
  ctaTitle: 'Über 600.000 Händler weltweit vertrauen ARVIX',
}

const fr: ShoplyticsCopy = {
  title: 'Analytique retail Shoplytics\nDécidez avec les données et saisissez chaque opportunité',
  subtitle: 'Analytique des ventes en direct, insights IA et données omnicanales pour piloter la marque.',
  cta: 'Démarrer l’essai gratuit',
  sec1Title: 'Centre d’analytique Shoplytics',
  sec1Desc: 'Des données aux décisions au même endroit — une direction de marque plus claire.',
  sec1Items: ['Analytique des ventes en direct', 'Insights stratégiques IA', 'Actions de données IA automatisées', 'Tableau de bord ops en direct'],
  sec2Title: 'Shoplytics × IA\nDes insights plus intelligents',
  sec2Desc: 'Des insights pilotés par l’IA pour repérer les tendances et décider avec précision.',
  sec2Items: ['Analyse du comportement client', 'Analyse marketing multidimensionnelle'],
  sec3Title: 'Une vue\nDes données aux décisions',
  sec3Desc: 'Données omnicanales pour clarifier la performance de chaque canal de vente.',
  sec3Items: ['Données omnicanales', 'Mix de trafic', 'Indicateurs de ventes', 'Analyse de conversion'],
  sec4Title: 'Pouls en direct\nChaque indicateur critique',
  sec4Desc: 'Un tableau de bord ops en direct vous prépare aux évolutions du marché.',
  ctaTitle: 'Plus de 600 000 marchands font confiance à ARVIX',
}


const copy: Partial<Record<Locale, ShoplyticsCopy>> & { 'zh-TW': ShoplyticsCopy; en: ShoplyticsCopy } = {
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

export default function ShoplyticsPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(29, 15, 125) 0%, rgb(33, 67, 191) 50%, rgb(110, 150, 255) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white whitespace-pre-line">{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>{c.subtitle}</p>
            <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.cta}
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" alt="Shoplytics" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>{c.sec1Title}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.sec1Desc}</p>
            <div className="space-y-4">
              {c.sec1Items.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" alt="Shoplytics center" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.sec2Title}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.sec2Desc}</p>
            <div className="space-y-4">
              {c.sec2Items.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80" alt="Shoplytics AI" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.sec3Title}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.sec3Desc}</p>
            <div className="space-y-4">
              {c.sec3Items.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" alt="Omnichannel data" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.sec4Title}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.sec4Desc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" alt="Live dashboard" width={600} height={450} className="w-full h-auto" unoptimized />
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
