'use client'

import Image from 'next/image'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type TargetedCopy = {
  title: string
  subtitle: string
  cta: string
  whichTitle: string
  whichDesc: string
  models: { title: string; sub: string }[]
  tags: string[]
  deepTitle: string
  deepDesc: string
  seamlessTitle: string
  seamlessDesc: string
  findTitle: string
  findDesc: string
  ctaTitle: string
}

const zhTW: TargetedCopy = {
  title: '精準鎖定、放大轉單\nARVIX 分眾行銷中心',
  subtitle: '獨家 RFIM 價值模型，9 大智慧顧客分群，讓你精準觸達對的人，有效提升行銷 ROI。',
  cta: '立即免費試用',
  whichTitle: '哪個更重要？\n開發新客 & 經營舊客',
  whichDesc: '你也遇到這些問題？如何找到對的人？ARVIX 分眾行銷中心讓你一勞永逸！',
  models: [
    { title: 'RFIM 價值模型', sub: '9 大智慧顧客分群獨家數據演算' },
    { title: '內建分群', sub: '6 大分類、55+ 篩選條件' },
  ],
  tags: ['指標性分類篩選', '細緻的分眾選項', '預先掌握觸及人數', '自動更新分群名單獨家支援', '靈活運用客群'],
  deepTitle: '比你想的更深，比你想的更簡單\n獨家演算！ 數據賦能的 RFIM 價值模型',
  deepDesc: '運用 RFIM 價值模型分群有效喚回顧客，讓每一分行銷預算都花在刀口上。',
  seamlessTitle: '溝通零斷點\n打造無痛分眾行銷',
  seamlessDesc: '分眾行銷搭配多元優惠衝高單品銷售成長，讓每個顧客都感受到專屬服務。',
  findTitle: '如何找到對的人？\nARVIX 分眾行銷中心讓你一勞永逸！',
  findDesc: '6 大分類、55+ 篩選條件，精準定位目標客群，提升行銷效益。',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
}

const zhCN: TargetedCopy = {
  title: '精准锁定、放大转单\nARVIX 分众营销中心',
  subtitle: '独家 RFIM 价值模型，9 大智慧顾客分群，让你精准触达对的人，有效提升营销 ROI。',
  cta: '立即免费试用',
  whichTitle: '哪个更重要？\n开发新客 & 经营旧客',
  whichDesc: '你也遇到这些问题？如何找到对的人？ARVIX 分众营销中心让你一劳永逸！',
  models: [
    { title: 'RFIM 价值模型', sub: '9 大智慧顾客分群独家数据演算' },
    { title: '内建分群', sub: '6 大分类、55+ 筛选条件' },
  ],
  tags: ['指标性分类筛选', '细致的分众选项', '预先掌握触及人数', '自动更新分群名单独家支持', '灵活运用客群'],
  deepTitle: '比你想的更深，比你想的更简单\n独家演算！ 数据赋能的 RFIM 价值模型',
  deepDesc: '运用 RFIM 价值模型分群有效唤回顾客，让每一分营销预算都花在刀刃上。',
  seamlessTitle: '沟通零断点\n打造无痛分众营销',
  seamlessDesc: '分众营销搭配多元优惠冲高单品销售成长，让每个顾客都感受到专属服务。',
  findTitle: '如何找到对的人？\nARVIX 分众营销中心让你一劳永逸！',
  findDesc: '6 大分类、55+ 筛选条件，精准定位目标客群，提升营销效益。',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
}

const en: TargetedCopy = {
  title: 'Target precisely. Convert more.\nARVIX segmentation center',
  subtitle: 'Exclusive RFIM value model with 9 smart segments — reach the right people and lift marketing ROI.',
  cta: 'Start free trial',
  whichTitle: 'What matters more?\nNew customers & retaining old ones',
  whichDesc: 'Struggling to find the right audience? ARVIX segmentation makes it simple.',
  models: [
    { title: 'RFIM value model', sub: '9 smart segments powered by exclusive scoring' },
    { title: 'Built-in segments', sub: '6 categories and 55+ filters' },
  ],
  tags: ['Metric-based filters', 'Fine-grained segments', 'Preview reach before send', 'Auto-updating audience lists', 'Flexible audience use'],
  deepTitle: 'Deeper than you expect, simpler than you think\nExclusive RFIM scoring',
  deepDesc: 'Use RFIM segments to win customers back and spend every marketing dollar wisely.',
  seamlessTitle: 'No communication gaps\nFrictionless segmented marketing',
  seamlessDesc: 'Pair segments with offers to grow SKU sales and make every shopper feel recognized.',
  findTitle: 'How do you find the right people?\nARVIX segmentation has you covered',
  findDesc: '6 categories and 55+ filters to lock onto target audiences and improve ROI.',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
}

const ko: TargetedCopy = {
  title: '정밀 타깃, 더 많은 전환\nARVIX 세그먼테이션 센터',
  subtitle: '독점 RFIM 가치 모델과 9개 스마트 세그먼트 — 적합한 사람에게 도달하고 마케팅 ROI를 높이세요.',
  cta: '무료 체험 시작',
  whichTitle: '무엇이 더 중요할까요?\n신규 고객 & 기존 고객 유지',
  whichDesc: '적합한 오디언스를 찾기 어렵나요? ARVIX 세그먼테이션이 단순하게 만듭니다.',
  models: [
    { title: 'RFIM 가치 모델', sub: '독점 스코어링으로 구동되는 9개 스마트 세그먼트' },
    { title: '내장 세그먼트', sub: '6개 카테고리와 55+ 필터' },
  ],
  tags: ['지표 기반 필터', '세밀한 세그먼트', '발송 전 도달 미리보기', '자동 업데이트 오디언스 목록', '유연한 오디언스 활용'],
  deepTitle: '생각보다 깊고, 생각보다 단순\n독점 RFIM 스코어링',
  deepDesc: 'RFIM 세그먼트로 고객을 되돌리고 마케팅 예산을 현명하게 쓰세요.',
  seamlessTitle: '소통의 공백 없이\n마찰 없는 세그먼트 마케팅',
  seamlessDesc: '세그먼트와 혜택을 결합해 SKU 매출을 키우고 모든 쇼퍼가 인정받는 느낌을 주세요.',
  findTitle: '적합한 사람을 어떻게 찾을까요?\nARVIX 세그먼테이션이 해결합니다',
  findDesc: '6개 카테고리와 55+ 필터로 타깃 오디언스를 잡고 ROI를 개선하세요.',
  ctaTitle: '전 세계 60만+ 판매자가 신뢰합니다',
}

const ja: TargetedCopy = {
  title: '精密にターゲティング、もっとコンバージョン\nARVIX セグメンテーションセンター',
  subtitle: '独自 RFIM 価値モデルと 9 のスマートセグメント — 適切な人に届け、マーケティング ROI を向上。',
  cta: '無料トライアルを開始',
  whichTitle: 'どちらがより重要？\n新規顧客 & 既存顧客の維持',
  whichDesc: '適切なオーディエンスが見つからない？ARVIX セグメンテーションがシンプルにします。',
  models: [
    { title: 'RFIM 価値モデル', sub: '独自スコアリングによる 9 のスマートセグメント' },
    { title: '内蔵セグメント', sub: '6 カテゴリと 55+ フィルタ' },
  ],
  tags: ['指標ベースのフィルタ', 'きめ細かいセグメント', '送信前にリーチをプレビュー', '自動更新オーディエンスリスト', '柔軟なオーディエンス活用'],
  deepTitle: '想像より深く、想像より簡単\n独自 RFIM スコアリング',
  deepDesc: 'RFIM セグメントで顧客を呼び戻し、マーケティング予算を賢く使う。',
  seamlessTitle: 'コミュニケーションの切れ目なし\n摩擦のないセグメントマーケティング',
  seamlessDesc: 'セグメントと特典を組み合わせて SKU 売上を伸ばし、すべてのショッパーに認識される体験を。',
  findTitle: 'どうやって適切な人を見つける？\nARVIX セグメンテーションがカバー',
  findDesc: '6 カテゴリと 55+ フィルタでターゲットを固め、ROI を改善。',
  ctaTitle: '世界中 60 万以上の加盟店が信頼',
}

const vi: TargetedCopy = {
  title: 'Nhắm đúng, chuyển đổi nhiều hơn\nTrung tâm phân khúc ARVIX',
  subtitle: 'Mô hình giá trị RFIM độc quyền với 9 phân khúc thông minh — tiếp cận đúng người và nâng ROI marketing.',
  cta: 'Bắt đầu dùng thử miễn phí',
  whichTitle: 'Điều gì quan trọng hơn?\nKhách mới & giữ chân khách cũ',
  whichDesc: 'Khó tìm đúng đối tượng? Phân khúc ARVIX giúp đơn giản hóa.',
  models: [
    { title: 'Mô hình giá trị RFIM', sub: '9 phân khúc thông minh nhờ scoring độc quyền' },
    { title: 'Phân khúc có sẵn', sub: '6 danh mục và 55+ bộ lọc' },
  ],
  tags: ['Bộ lọc theo chỉ số', 'Phân khúc chi tiết', 'Xem trước độ phủ trước khi gửi', 'Danh sách đối tượng tự cập nhật', 'Dùng đối tượng linh hoạt'],
  deepTitle: 'Sâu hơn bạn nghĩ, đơn giản hơn bạn tưởng\nScoring RFIM độc quyền',
  deepDesc: 'Dùng phân khúc RFIM để lấy lại khách và chi tiêu marketing khôn ngoan.',
  seamlessTitle: 'Không khoảng trống giao tiếp\nMarketing phân khúc mượt mà',
  seamlessDesc: 'Ghép phân khúc với ưu đãi để tăng doanh số SKU và khiến mọi khách cảm thấy được quan tâm.',
  findTitle: 'Làm sao tìm đúng người?\nPhân khúc ARVIX lo giúp bạn',
  findDesc: '6 danh mục và 55+ bộ lọc để khóa đối tượng mục tiêu và cải thiện ROI.',
  ctaTitle: 'Được hơn 600.000 người bán trên thế giới tin dùng',
}

const es: TargetedCopy = {
  title: 'Apunta con precisión. Convierte más.\nCentro de segmentación ARVIX',
  subtitle: 'Modelo de valor RFIM exclusivo con 9 segmentos inteligentes — llega a las personas correctas y sube el ROI de marketing.',
  cta: 'Empezar prueba gratis',
  whichTitle: '¿Qué importa más?\nClientes nuevos y retener a los antiguos',
  whichDesc: '¿Cuesta encontrar la audiencia correcta? La segmentación ARVIX lo simplifica.',
  models: [
    { title: 'Modelo de valor RFIM', sub: '9 segmentos inteligentes con scoring exclusivo' },
    { title: 'Segmentos integrados', sub: '6 categorías y más de 55 filtros' },
  ],
  tags: ['Filtros basados en métricas', 'Segmentos detallados', 'Vista previa del alcance antes de enviar', 'Listas de audiencia con autoactualización', 'Uso flexible de audiencias'],
  deepTitle: 'Más profundo de lo que esperas, más simple de lo que crees\nScoring RFIM exclusivo',
  deepDesc: 'Usa segmentos RFIM para recuperar clientes y gastar cada dólar de marketing con sabiduría.',
  seamlessTitle: 'Sin huecos de comunicación\nMarketing segmentado sin fricción',
  seamlessDesc: 'Combina segmentos con ofertas para crecer ventas por SKU y que cada comprador se sienta reconocido.',
  findTitle: '¿Cómo encontrar a las personas correctas?\nLa segmentación ARVIX te cubre',
  findDesc: '6 categorías y más de 55 filtros para fijar audiencias objetivo y mejorar el ROI.',
  ctaTitle: 'Más de 600.000 comercios confían en ARVIX',
}

const pt: TargetedCopy = {
  title: 'Mire com precisão. Converta mais.\nCentro de segmentação ARVIX',
  subtitle: 'Modelo de valor RFIM exclusivo com 9 segmentos inteligentes — alcance as pessoas certas e eleve o ROI de marketing.',
  cta: 'Começar teste grátis',
  whichTitle: 'O que importa mais?\nClientes novos e retenção dos antigos',
  whichDesc: 'Dificuldade em achar o público certo? A segmentação ARVIX simplifica.',
  models: [
    { title: 'Modelo de valor RFIM', sub: '9 segmentos inteligentes com scoring exclusivo' },
    { title: 'Segmentos embutidos', sub: '6 categorias e 55+ filtros' },
  ],
  tags: ['Filtros baseados em métricas', 'Segmentos detalhados', 'Prévia de alcance antes do envio', 'Listas de audiência com atualização automática', 'Uso flexível de audiências'],
  deepTitle: 'Mais profundo do que você espera, mais simples do que pensa\nScoring RFIM exclusivo',
  deepDesc: 'Use segmentos RFIM para reconquistar clientes e gastar cada real de marketing com sabedoria.',
  seamlessTitle: 'Sem lacunas de comunicação\nMarketing segmentado sem atrito',
  seamlessDesc: 'Combine segmentos com ofertas para crescer vendas por SKU e fazer cada comprador se sentir reconhecido.',
  findTitle: 'Como encontrar as pessoas certas?\nA segmentação ARVIX cobre você',
  findDesc: '6 categorias e 55+ filtros para travar audiências-alvo e melhorar o ROI.',
  ctaTitle: 'Mais de 600.000 comerciantes confiam na ARVIX',
}

const de: TargetedCopy = {
  title: 'Präzise zielen. Mehr convertieren.\nARVIX-Segmentierungscenter',
  subtitle: 'Exklusives RFIM-Wertmodell mit 9 smarten Segmenten — erreichen Sie die Richtigen und steigern Sie Marketing-ROI.',
  cta: 'Kostenlose Testphase starten',
  whichTitle: 'Was zählt mehr?\nNeukunden & Bestandskunden halten',
  whichDesc: 'Schwierig, die richtige Audience zu finden? ARVIX-Segmentierung macht es einfach.',
  models: [
    { title: 'RFIM-Wertmodell', sub: '9 smarte Segmente mit exklusivem Scoring' },
    { title: 'Eingebaute Segmente', sub: '6 Kategorien und 55+ Filter' },
  ],
  tags: ['Metrikbasierte Filter', 'Fein granulierte Segmente', 'Reichweite vor dem Versand prüfen', 'Automatisch aktualisierte Audience-Listen', 'Flexible Audience-Nutzung'],
  deepTitle: 'Tiefer als erwartet, einfacher als gedacht\nExklusives RFIM-Scoring',
  deepDesc: 'Nutzen Sie RFIM-Segmente, um Kunden zurückzugewinnen und jedes Marketing-Budget klug einzusetzen.',
  seamlessTitle: 'Keine Kommunikationslücken\nReibungsloses Segment-Marketing',
  seamlessDesc: 'Kombinieren Sie Segmente mit Angeboten, um SKU-Umsatz zu steigern und jeden Shopper anerkannt fühlen zu lassen.',
  findTitle: 'Wie finden Sie die richtigen Personen?\nARVIX-Segmentierung deckt Sie ab',
  findDesc: '6 Kategorien und 55+ Filter, um Zielgruppen zu fixieren und ROI zu verbessern.',
  ctaTitle: 'Über 600.000 Händler weltweit vertrauen ARVIX',
}

const fr: TargetedCopy = {
  title: 'Ciblez précisément. Convertissez plus.\nCentre de segmentation ARVIX',
  subtitle: 'Modèle de valeur RFIM exclusif avec 9 segments intelligents — touchez les bonnes personnes et augmentez le ROI marketing.',
  cta: 'Démarrer l’essai gratuit',
  whichTitle: 'Qu’est-ce qui compte le plus ?\nNouveaux clients & fidélisation des anciens',
  whichDesc: 'Difficile de trouver la bonne audience ? La segmentation ARVIX simplifie.',
  models: [
    { title: 'Modèle de valeur RFIM', sub: '9 segments intelligents propulsés par un scoring exclusif' },
    { title: 'Segments intégrés', sub: '6 catégories et 55+ filtres' },
  ],
  tags: ['Filtres basés sur les métriques', 'Segments fins', 'Aperçu de la portée avant envoi', 'Listes d’audience à mise à jour auto', 'Usage flexible des audiences'],
  deepTitle: 'Plus profond que prévu, plus simple que vous ne croyez\nScoring RFIM exclusif',
  deepDesc: 'Utilisez les segments RFIM pour reconquérir des clients et dépenser chaque euro marketing avec sagesse.',
  seamlessTitle: 'Aucune rupture de communication\nMarketing segmenté sans friction',
  seamlessDesc: 'Associez segments et offres pour faire croître les ventes SKU et que chaque shopper se sente reconnu.',
  findTitle: 'Comment trouver les bonnes personnes ?\nLa segmentation ARVIX vous couvre',
  findDesc: '6 catégories et 55+ filtres pour verrouiller les audiences cibles et améliorer le ROI.',
  ctaTitle: 'Plus de 600 000 marchands font confiance à ARVIX',
}


const copy: Partial<Record<Locale, TargetedCopy>> & { 'zh-TW': TargetedCopy; en: TargetedCopy } = {
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

export default function TargetedMarketingPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(251, 225, 255) 0%, rgb(169, 181, 255) 50%, rgb(0, 97, 255) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight whitespace-pre-line" style={{ color: '#00142D' }}>{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
            <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.cta}
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" alt="ARVIX targeted marketing" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.whichTitle}</h2>
            <p className="mb-4" style={{ color: '#687280' }}>{c.whichDesc}</p>
            <div className="space-y-3 mb-6">
              {c.models.map(item => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <div>
                    <span className="font-bold block" style={{ color: '#00142D' }}>{item.title}</span>
                    <span className="text-sm" style={{ color: '#687280' }}>{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {c.tags.map(tag => (
                <div key={tag} className="text-xs px-3 py-2 rounded-lg font-medium" style={{ backgroundColor: '#EEF0FF', color: '#5B5FF0' }}>{tag}</div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" alt="RFIM model" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.deepTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.deepDesc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" alt="RFIM data" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.seamlessTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.seamlessDesc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80" alt="Segmented messaging" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.findTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.findDesc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" alt="Audience filters" width={600} height={450} className="w-full h-auto" unoptimized />
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
