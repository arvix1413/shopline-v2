'use client'

import Image from 'next/image'
import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'
import type { Locale } from '../../../lib/i18n'

type IgLiveCopy = {
  title: string
  subtitle: string
  cta: string
  sec1Title: string
  sec1Desc: string
  sec2Title: string
  sec2Desc: string
  sec3Title: string
  sec3Desc: string
  sec4Title: string
  sec4Desc: string
  ctaTitle: string
}

const zhTW: IgLiveCopy = {
  title: '圈粉、轉單一把罩！\n讓 Instagram 幫你賣更多！',
  subtitle: 'LIVE 獨家功能幫你在 Instagram 創造最大效益，直播 +1 喊單自動加入購物車。',
  cta: '立即免費試用',
  sec1Title: 'LIVE獨家功能\n幫你在 Instagram 創造最大效益',
  sec1Desc: '直播 +1 喊單自動加入購物車，讓粉絲邊看邊買，業績輕鬆翻倍。',
  sec2Title: '互動遊戲讓人走不開\n有效提高粉絲黏著度',
  sec2Desc: '豐富的互動遊戲功能，讓直播更有趣，粉絲停留更久，購買意願更高。',
  sec3Title: '聊天勸敗不可少\n30 秒私訊接單術',
  sec3Desc: '自動私訊功能，讓顧客在 30 秒內完成下單，大幅提升轉換率。',
  sec4Title: '全方位數據報告\n專攻社群轉換成效',
  sec4Desc: '完整的直播數據分析，幫你了解每場直播的轉換成效，持續優化策略。',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
}

const zhCN: IgLiveCopy = {
  title: '圈粉、转单一把罩！\n让 Instagram 帮你卖更多！',
  subtitle: 'LIVE 独家功能帮你在 Instagram 创造最大效益，直播 +1 喊单自动加入购物车。',
  cta: '立即免费试用',
  sec1Title: 'LIVE 独家功能\n帮你在 Instagram 创造最大效益',
  sec1Desc: '直播 +1 喊单自动加入购物车，让粉丝边看边买，业绩轻松翻倍。',
  sec2Title: '互动游戏让人走不开\n有效提高粉丝黏着度',
  sec2Desc: '丰富的互动游戏功能，让直播更有趣，粉丝停留更久，购买意愿更高。',
  sec3Title: '聊天劝败不可少\n30 秒私信接单术',
  sec3Desc: '自动私信功能，让顾客在 30 秒内完成下单，大幅提升转化率。',
  sec4Title: '全方位数据报告\n专攻社群转化成效',
  sec4Desc: '完整的直播数据分析，帮你了解每场直播的转化成效，持续优化策略。',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
}

const en: IgLiveCopy = {
  title: 'Grow fans, close sales\nSell more with Instagram',
  subtitle: 'Exclusive LIVE tools maximize Instagram impact — +1 comments auto-add to cart.',
  cta: 'Start free trial',
  sec1Title: 'Exclusive LIVE tools\nMaximize Instagram impact',
  sec1Desc: '+1 shout-outs auto-add to cart so fans buy while they watch.',
  sec2Title: 'Interactive games\nKeep fans glued',
  sec2Desc: 'Fun live games boost dwell time and purchase intent.',
  sec3Title: 'Chat that converts\nClose in 30 seconds via DM',
  sec3Desc: 'Automated DMs help shoppers checkout in about 30 seconds.',
  sec4Title: 'Full analytics\nBuilt for social conversion',
  sec4Desc: 'See every live session’s conversion and keep optimizing.',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
}

const ko: IgLiveCopy = {
  title: '팬을 모으고, 매출을 닫으세요\nInstagram으로 더 많이 판매하세요',
  subtitle: '전용 LIVE 도구로 Instagram 효과를 극대화 — +1 댓글이 자동으로 장바구니에 담깁니다.',
  cta: '무료 체험 시작',
  sec1Title: '전용 LIVE 도구\nInstagram 효과를 극대화',
  sec1Desc: '+1 외침이 자동으로 장바구니에 담겨 팬이 시청하며 구매합니다.',
  sec2Title: '인터랙티브 게임\n팬을 붙잡아 두세요',
  sec2Desc: '재미있는 라이브 게임으로 체류 시간과 구매 의도를 높입니다.',
  sec3Title: '전환하는 채팅\nDM으로 30초 만에 클로즈',
  sec3Desc: '자동 DM으로 쇼핑객이 약 30초 만에 결제할 수 있습니다.',
  sec4Title: '완전한 분석\n소셜 전환을 위해 설계',
  sec4Desc: '모든 라이브 세션의 전환을 확인하고 계속 최적화하세요.',
  ctaTitle: '전 세계 60만+ 판매자가 ARVIX를 신뢰합니다',
}

const ja: IgLiveCopy = {
  title: 'ファンを増やし、売上を確定\nInstagram でもっと売る',
  subtitle: '専用 LIVE ツールで Instagram の効果を最大化 — +1 コメントが自動でカートに追加。',
  cta: '無料トライアルを開始',
  sec1Title: '専用 LIVE ツール\nInstagram の効果を最大化',
  sec1Desc: '+1 コールが自動でカートに入り、視聴しながら購入できます。',
  sec2Title: 'インタラクティブゲーム\nファンを釘付けに',
  sec2Desc: '楽しいライブゲームで滞在時間と購入意欲を高めます。',
  sec3Title: 'コンバージョンするチャット\nDM で 30 秒クローズ',
  sec3Desc: '自動 DM で約 30 秒のチェックアウトを支援します。',
  sec4Title: 'フル分析\nソーシャルコンバージョン向け',
  sec4Desc: '各ライブのコンバージョンを把握し、最適化を続けましょう。',
  ctaTitle: '世界中 60 万以上の加盟店が ARVIX を利用',
}

const vi: IgLiveCopy = {
  title: 'Tăng fan, chốt đơn\nBán nhiều hơn với Instagram',
  subtitle: 'Công cụ LIVE độc quyền tối đa hóa hiệu quả Instagram — bình luận +1 tự thêm vào giỏ.',
  cta: 'Bắt đầu dùng thử miễn phí',
  sec1Title: 'Công cụ LIVE độc quyền\nTối đa hóa hiệu quả Instagram',
  sec1Desc: 'Tiếng hô +1 tự thêm vào giỏ để fan mua khi đang xem.',
  sec2Title: 'Trò chơi tương tác\nGiữ fan dính chặt',
  sec2Desc: 'Game live vui tăng thời gian xem và ý định mua.',
  sec3Title: 'Chat chuyển đổi\nChốt trong 30 giây qua DM',
  sec3Desc: 'DM tự động giúp khách checkout khoảng 30 giây.',
  sec4Title: 'Phân tích đầy đủ\nDành cho chuyển đổi social',
  sec4Desc: 'Xem chuyển đổi mỗi phiên live và tiếp tục tối ưu.',
  ctaTitle: 'Được hơn 600.000 người bán trên thế giới tin dùng',
}

const es: IgLiveCopy = {
  title: 'Crece fans, cierra ventas\nVende más con Instagram',
  subtitle: 'Herramientas LIVE exclusivas maximizan el impacto en Instagram — los comentarios +1 se añaden al carrito automáticamente.',
  cta: 'Empieza la prueba gratis',
  sec1Title: 'Herramientas LIVE exclusivas\nMaximiza el impacto en Instagram',
  sec1Desc: 'Los gritos +1 se añaden al carrito para que los fans compren mientras miran.',
  sec2Title: 'Juegos interactivos\nMantén a los fans pegados',
  sec2Desc: 'Juegos en vivo divertidos aumentan el tiempo de permanencia y la intención de compra.',
  sec3Title: 'Chat que convierte\nCierra en 30 segundos por DM',
  sec3Desc: 'Los DM automáticos ayudan a completar el checkout en unos 30 segundos.',
  sec4Title: 'Analítica completa\nHecha para la conversión social',
  sec4Desc: 'Ve la conversión de cada sesión en vivo y sigue optimizando.',
  ctaTitle: 'Más de 600.000 comercios confían en ARVIX',
}

const pt: IgLiveCopy = {
  title: 'Cresça fãs, feche vendas\nVenda mais com o Instagram',
  subtitle: 'Ferramentas LIVE exclusivas maximizam o impacto no Instagram — comentários +1 entram no carrinho automaticamente.',
  cta: 'Começar teste grátis',
  sec1Title: 'Ferramentas LIVE exclusivas\nMaximize o impacto no Instagram',
  sec1Desc: 'Gritos +1 entram no carrinho para os fãs comprarem enquanto assistem.',
  sec2Title: 'Jogos interativos\nMantenha os fãs grudados',
  sec2Desc: 'Jogos ao vivo divertidos aumentam o tempo de permanência e a intenção de compra.',
  sec3Title: 'Chat que converte\nFeche em 30 segundos via DM',
  sec3Desc: 'DMs automatizados ajudam o checkout em cerca de 30 segundos.',
  sec4Title: 'Analytics completo\nFeito para conversão social',
  sec4Desc: 'Veja a conversão de cada sessão ao vivo e continue otimizando.',
  ctaTitle: 'Mais de 600.000 lojistas confiam na ARVIX',
}

const de: IgLiveCopy = {
  title: 'Fans gewinnen, Verkäufe abschließen\nMehr verkaufen mit Instagram',
  subtitle: 'Exklusive LIVE-Tools maximieren den Instagram-Impact — +1-Kommentare landen automatisch im Warenkorb.',
  cta: 'Kostenlos testen',
  sec1Title: 'Exklusive LIVE-Tools\nInstagram-Impact maximieren',
  sec1Desc: '+1-Zurufe landen automatisch im Warenkorb, damit Fans beim Zuschauen kaufen.',
  sec2Title: 'Interaktive Spiele\nFans fesseln',
  sec2Desc: 'Spaßige Live-Spiele steigern Verweildauer und Kaufabsicht.',
  sec3Title: 'Chat, der konvertiert\nIn 30 Sekunden per DM abschließen',
  sec3Desc: 'Automatisierte DMs helfen beim Checkout in etwa 30 Sekunden.',
  sec4Title: 'Volle Analytics\nFür Social Conversion gebaut',
  sec4Desc: 'Sehen Sie die Conversion jeder Live-Session und optimieren Sie weiter.',
  ctaTitle: 'Über 600.000 Händler weltweit vertrauen ARVIX',
}

const fr: IgLiveCopy = {
  title: 'Gagnez des fans, concluez des ventes\nVendez plus avec Instagram',
  subtitle: 'Des outils LIVE exclusifs maximisent l’impact Instagram — les commentaires +1 s’ajoutent automatiquement au panier.',
  cta: 'Démarrer l’essai gratuit',
  sec1Title: 'Outils LIVE exclusifs\nMaximisez l’impact Instagram',
  sec1Desc: 'Les appels +1 s’ajoutent au panier pour que les fans achètent en regardant.',
  sec2Title: 'Jeux interactifs\nGardez les fans accrochés',
  sec2Desc: 'Des jeux live amusants boostent le temps passé et l’intention d’achat.',
  sec3Title: 'Un chat qui convertit\nConcluez en 30 secondes par DM',
  sec3Desc: 'Des DM automatisés aident au checkout en environ 30 secondes.',
  sec4Title: 'Analytique complète\nConçue pour la conversion sociale',
  sec4Desc: 'Voyez la conversion de chaque session live et continuez d’optimiser.',
  ctaTitle: 'Plus de 600 000 marchands font confiance à ARVIX',
}

const copy: Partial<Record<Locale, IgLiveCopy>> & { 'zh-TW': IgLiveCopy; en: IgLiveCopy } = {
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

export default function InstagramLivePage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(255, 225, 249) 0%, rgb(238, 169, 255) 50%, rgb(149, 92, 255) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight whitespace-pre-line" style={{ color: '#00142D' }}>{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
            <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.cta}
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80" alt="Instagram Live" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.sec1Title}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.sec1Desc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80" alt="Instagram LIVE" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.sec2Title}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.sec2Desc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=1200&q=80" alt="Interactive games" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.sec3Title}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.sec3Desc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" alt="DM checkout" width={600} height={450} className="w-full h-auto" unoptimized />
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
            <Image src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80" alt="Live analytics" width={600} height={450} className="w-full h-auto" unoptimized />
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
