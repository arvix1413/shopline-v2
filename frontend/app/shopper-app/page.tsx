'use client'

import Image from 'next/image'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type ShopperCopy = {
  title: string
  subtitle: string
  cta: string
  highlightsTitle: string
  highlightsDesc: string
  highlights: string[]
  designTitle: string
  designDesc: string
  pathTitle: string
  pathDesc: string
  pathItems: string[]
  omoTitle: string
  omoDesc: string
  ctaTitle: string
}

const zhTW: ShopperCopy = {
  title: '掌上商店，隨走隨買\n品牌會員購物 App',
  subtitle: '為什麼要經營品牌會員 App？透過 Shopper App 強化會員經營及顧客體驗，讓業績增長將近 70%。',
  cta: '立即免費試用',
  highlightsTitle: '三大亮點功能\n快速打造品牌專屬購物 App',
  highlightsDesc: '設計介面操作簡單，快速建立品牌專屬的購物 App，提升顧客黏著度。',
  highlights: ['設計介面操作簡單', 'App 推播服務', '深化 OMO 整合效益'],
  designTitle: '設計介面操作簡單',
  designDesc: '直覺式設計工具，讓你輕鬆打造符合品牌風格的購物 App，無需技術背景。',
  pathTitle: '透過 Shopper App 縮短與顧客的消費路徑',
  pathDesc: '精準推播通知，讓顧客隨時掌握最新優惠和活動，提升回購率。打造無縫銜接全通路導購銷售。',
  pathItems: ['App 推播服務', '社群購物'],
  omoTitle: '深化 OMO 整合效益',
  omoDesc: '將線上線下完美整合，讓顧客享受無縫的全通路購物體驗，最大化品牌價值。',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
}

const zhCN: ShopperCopy = {
  title: '掌上商店，随走随买\n品牌会员购物 App',
  subtitle: '为什么要经营品牌会员 App？通过 Shopper App 强化会员经营及顾客体验，让业绩增长将近 70%。',
  cta: '立即免费试用',
  highlightsTitle: '三大亮点功能\n快速打造品牌专属购物 App',
  highlightsDesc: '设计界面操作简单，快速建立品牌专属的购物 App，提升顾客粘着度。',
  highlights: ['设计界面操作简单', 'App 推播服务', '深化 OMO 整合效益'],
  designTitle: '设计界面操作简单',
  designDesc: '直觉式设计工具，让你轻松打造符合品牌风格的购物 App，无需技术背景。',
  pathTitle: '通过 Shopper App 缩短与顾客的消费路径',
  pathDesc: '精准推播通知，让顾客随时掌握最新优惠和活动，提升回购率。打造无缝衔接全渠道导购销售。',
  pathItems: ['App 推播服务', '社群购物'],
  omoTitle: '深化 OMO 整合效益',
  omoDesc: '将线上线下完美整合，让顾客享受无缝的全渠道购物体验，最大化品牌价值。',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
}

const en: ShopperCopy = {
  title: 'A store in your pocket\nBrand member shopping app',
  subtitle: 'Why run a brand member app? Shopper App strengthens loyalty and experience — merchants see nearly 70% sales growth.',
  cta: 'Start free trial',
  highlightsTitle: 'Three standout features\nLaunch a branded shopping app fast',
  highlightsDesc: 'Simple design tools to ship a branded app and lift customer stickiness.',
  highlights: ['Easy design tools', 'App push notifications', 'Deeper OMO integration'],
  designTitle: 'Easy design tools',
  designDesc: 'Intuitive builders to match your brand look — no engineering required.',
  pathTitle: 'Shorten the path to purchase with Shopper App',
  pathDesc: 'Precise pushes keep shoppers on offers and events, lifting repurchase and omnichannel sales.',
  pathItems: ['App push notifications', 'Social commerce'],
  omoTitle: 'Deeper OMO impact',
  omoDesc: 'Unify online and offline so shoppers enjoy seamless omnichannel journeys.',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
}

const ko: ShopperCopy = {
  title: '주머니 속 스토어\n브랜드 멤버 쇼핑 앱',
  subtitle: '왜 브랜드 멤버 앱을 운영할까요? Shopper App이 로열티와 경험을 강화해 — 판매자는 매출 약 70% 성장을 봅니다.',
  cta: '무료 체험 시작',
  highlightsTitle: '세 가지 핵심 기능\n브랜드 쇼핑 앱을 빠르게 론칭',
  highlightsDesc: '간단한 디자인 도구로 브랜드 앱을 출시하고 고객 밀착도를 높이세요.',
  highlights: ['쉬운 디자인 도구', '앱 푸시 알림', '더 깊은 OMO 통합'],
  designTitle: '쉬운 디자인 도구',
  designDesc: '브랜드 룩에 맞추는 직관적 빌더 — 엔지니어링 불필요.',
  pathTitle: 'Shopper App으로 구매 경로를 줄이세요',
  pathDesc: '정밀 푸시로 혜택과 이벤트를 알리고 재구매와 옴니채널 매출을 높이세요.',
  pathItems: ['앱 푸시 알림', '소셜 커머스'],
  omoTitle: '더 깊은 OMO 임팩트',
  omoDesc: '온·오프라인을 통합해 끊김 없는 옴니채널 여정을 제공하세요.',
  ctaTitle: '전 세계 60만+ 판매자가 신뢰합니다',
}

const ja: ShopperCopy = {
  title: 'ポケットの中のストア\nブランド会員ショッピングアプリ',
  subtitle: 'なぜブランド会員アプリを運営するのか？Shopper App がロイヤルティと体験を強化 — 加盟店は売上約 70% 成長を実感。',
  cta: '無料トライアルを開始',
  highlightsTitle: '3 つの注目機能\nブランドショッピングアプリをすばやく公開',
  highlightsDesc: 'シンプルなデザインツールでブランドアプリを出荷し、顧客の定着を高める。',
  highlights: ['かんたんデザインツール', 'アプリプッシュ通知', 'より深い OMO 統合'],
  designTitle: 'かんたんデザインツール',
  designDesc: 'ブランドの見た目に合わせる直感的なビルダー — エンジニアリング不要。',
  pathTitle: 'Shopper App で購買パスを短縮',
  pathDesc: '精密なプッシュでオファーとイベントを届け、リピートとオムニチャネル売上を向上。',
  pathItems: ['アプリプッシュ通知', 'ソーシャルコマース'],
  omoTitle: 'より深い OMO インパクト',
  omoDesc: 'オンラインとオフラインを統合し、シームレスなオムニチャネル体験を。',
  ctaTitle: '世界中 60 万以上の加盟店が信頼',
}

const vi: ShopperCopy = {
  title: 'Cửa hàng trong túi\nApp mua sắm thành viên thương hiệu',
  subtitle: 'Vì sao chạy app thành viên thương hiệu? Shopper App củng cố lòng trung thành và trải nghiệm — người bán thấy doanh số tăng gần 70%.',
  cta: 'Bắt đầu dùng thử miễn phí',
  highlightsTitle: 'Ba tính năng nổi bật\nRa mắt app mua sắm thương hiệu nhanh',
  highlightsDesc: 'Công cụ thiết kế đơn giản để phát hành app thương hiệu và tăng độ gắn kết.',
  highlights: ['Công cụ thiết kế dễ dùng', 'Thông báo đẩy app', 'Tích hợp OMO sâu hơn'],
  designTitle: 'Công cụ thiết kế dễ dùng',
  designDesc: 'Trình dựng trực quan khớp phong cách thương hiệu — không cần kỹ thuật.',
  pathTitle: 'Rút ngắn đường đến mua hàng với Shopper App',
  pathDesc: 'Push chính xác giữ khách trên ưu đãi và sự kiện, nâng mua lại và doanh số omnichannel.',
  pathItems: ['Thông báo đẩy app', 'Thương mại xã hội'],
  omoTitle: 'Tác động OMO sâu hơn',
  omoDesc: 'Hợp nhất online và offline để khách tận hưởng hành trình omnichannel liền mạch.',
  ctaTitle: 'Được hơn 600.000 người bán trên thế giới tin dùng',
}

const es: ShopperCopy = {
  title: 'Una tienda en el bolsillo\nApp de compra para miembros de marca',
  subtitle: '¿Por qué una app de miembros? Shopper App refuerza lealtad y experiencia — los comercios ven casi 70% más ventas.',
  cta: 'Empezar prueba gratis',
  highlightsTitle: 'Tres funciones destacadas\nLanza una app de compra de marca rápido',
  highlightsDesc: 'Herramientas de diseño simples para lanzar una app de marca y subir la adherencia.',
  highlights: ['Herramientas de diseño fáciles', 'Notificaciones push de la app', 'Integración OMO más profunda'],
  designTitle: 'Herramientas de diseño fáciles',
  designDesc: 'Constructores intuitivos para el look de tu marca — sin ingeniería.',
  pathTitle: 'Acorta el camino a la compra con Shopper App',
  pathDesc: 'Pushes precisos mantienen a los compradores en ofertas y eventos, subiendo recompra y ventas omnicanal.',
  pathItems: ['Notificaciones push de la app', 'Social commerce'],
  omoTitle: 'Mayor impacto OMO',
  omoDesc: 'Unifica online y offline para journeys omnicanal fluidos.',
  ctaTitle: 'Más de 600.000 comercios confían en ARVIX',
}

const pt: ShopperCopy = {
  title: 'Uma loja no bolso\nApp de compras para membros da marca',
  subtitle: 'Por que um app de membros? O Shopper App reforça lealdade e experiência — comerciantes veem quase 70% de crescimento em vendas.',
  cta: 'Começar teste grátis',
  highlightsTitle: 'Três recursos em destaque\nLance um app de compras da marca rápido',
  highlightsDesc: 'Ferramentas de design simples para publicar um app da marca e aumentar a adesão.',
  highlights: ['Ferramentas de design fáceis', 'Notificações push do app', 'Integração OMO mais profunda'],
  designTitle: 'Ferramentas de design fáceis',
  designDesc: 'Construtores intuitivos para o visual da marca — sem engenharia.',
  pathTitle: 'Encurte o caminho até a compra com o Shopper App',
  pathDesc: 'Pushes precisos mantêm compradores em ofertas e eventos, elevando recompra e vendas omnichannel.',
  pathItems: ['Notificações push do app', 'Social commerce'],
  omoTitle: 'Maior impacto OMO',
  omoDesc: 'Unifique online e offline para jornadas omnichannel sem atrito.',
  ctaTitle: 'Mais de 600.000 comerciantes confiam na ARVIX',
}

const de: ShopperCopy = {
  title: 'Ein Store in der Tasche\nMarken-Mitglieder-Shopping-App',
  subtitle: 'Warum eine Marken-Mitglieder-App? Shopper App stärkt Loyalität und Erlebnis — Händler sehen fast 70% Umsatzwachstum.',
  cta: 'Kostenlose Testphase starten',
  highlightsTitle: 'Drei Highlights\nSchnell eine Marken-Shopping-App launchen',
  highlightsDesc: 'Einfache Design-Tools für eine Marken-App und mehr Kundenbindung.',
  highlights: ['Einfache Design-Tools', 'App-Push-Benachrichtigungen', 'Tiefere OMO-Integration'],
  designTitle: 'Einfache Design-Tools',
  designDesc: 'Intuitive Builder für Ihren Markenlook — ohne Engineering.',
  pathTitle: 'Verkürzen Sie den Kaufweg mit Shopper App',
  pathDesc: 'Präzise Pushes halten Shopper bei Angeboten und Events — mehr Wiederkauf und Omnichannel-Umsatz.',
  pathItems: ['App-Push-Benachrichtigungen', 'Social Commerce'],
  omoTitle: 'Tiefere OMO-Wirkung',
  omoDesc: 'Online und Offline vereinen für nahtlose Omnichannel-Journeys.',
  ctaTitle: 'Über 600.000 Händler weltweit vertrauen ARVIX',
}

const fr: ShopperCopy = {
  title: 'Une boutique dans la poche\nApp shopping membres de marque',
  subtitle: 'Pourquoi une app membres de marque ? Shopper App renforce fidélité et expérience — les marchands voient près de 70 % de croissance des ventes.',
  cta: 'Démarrer l’essai gratuit',
  highlightsTitle: 'Trois atouts\nLancez vite une app shopping de marque',
  highlightsDesc: 'Outils de design simples pour publier une app de marque et renforcer l’attachement.',
  highlights: ['Outils de design faciles', 'Notifications push de l’app', 'Intégration OMO plus profonde'],
  designTitle: 'Outils de design faciles',
  designDesc: 'Constructeurs intuitifs pour le look de votre marque — sans ingénierie.',
  pathTitle: 'Raccourcissez le chemin d’achat avec Shopper App',
  pathDesc: 'Des pushes précis gardent les acheteurs sur offres et événements, boostant rachat et ventes omnicanales.',
  pathItems: ['Notifications push de l’app', 'Social commerce'],
  omoTitle: 'Impact OMO plus profond',
  omoDesc: 'Unifiez online et offline pour des parcours omnicanaux fluides.',
  ctaTitle: 'Plus de 600 000 marchands font confiance à ARVIX',
}


const copy: Partial<Record<Locale, ShopperCopy>> & { 'zh-TW': ShopperCopy; en: ShopperCopy } = {
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

export default function ShopperAppPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(249, 222, 195) 0%, rgb(255, 237, 187) 49%, rgb(252, 217, 101) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight whitespace-pre-line" style={{ color: '#00142D' }}>{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
            <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.cta}
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" alt="Shopper App" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.highlightsTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.highlightsDesc}</p>
            <div className="space-y-4">
              {c.highlights.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80" alt="Shopper App features" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>{c.designTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.designDesc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" alt="Shopper App design" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>{c.pathTitle}</h3>
            <p className="mb-6" style={{ color: '#687280' }}>{c.pathDesc}</p>
            <div className="space-y-4">
              {c.pathItems.map(h4 => (
                <div key={h4} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h4}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80" alt="Shopper App push" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>{c.omoTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.omoDesc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" alt="Shopper App OMO" width={600} height={450} className="w-full h-auto" unoptimized />
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
