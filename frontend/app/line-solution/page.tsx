'use client'

import Image from 'next/image'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type LineCopy = {
  title: string
  subtitle: string
  cta: string
  integrateTitle: string
  integrateDesc: string
  integrateItems: string[]
  retargetTitle: string
  retargetDesc: string
  retargetItems: { title: string; desc: string }[]
  aiTitle: string
  aiDesc: string
  ctaTitle: string
}

const zhTW: LineCopy = {
  title: '唯一 LINE 指定技術合作夥伴\nSHOP 不能沒有 LINE\n用 LINE 官方帳號賣更多！',
  subtitle: '全效整合 LINE 好友，流量＋留量再行銷一氣呵成，360° 導購流量變現就靠它。',
  cta: '立即免費試用',
  integrateTitle: '全效整合 LINE 好友',
  integrateDesc: '輕鬆圈粉、導購衝單、智慧客服，讓 LINE 成為你最強的銷售渠道。',
  integrateItems: ['輕鬆圈粉', '導購衝單', '智慧客服'],
  retargetTitle: '流量＋留量再行銷\n一氣呵成',
  retargetDesc: '靠 LINE 直播 +1 讓直播業績飆升，轉戰 LINE 成效型廣告大幅降低轉換成本。',
  retargetItems: [
    { title: 'LINE 快速登入 & 訂單狀態通知', desc: '顧客一鍵 LINE 登入，訂單狀態即時推播通知。' },
    { title: 'LINE 好友與官網會員綁定', desc: '將 LINE 好友與官網會員帳號綁定，打通數據。' },
    { title: 'LINE PNP 通知型訊息獨家支援', desc: '獨家支援 LINE PNP，精準觸達顧客。' },
    { title: 'LINE 精準廣播', desc: '依據顧客分群，發送精準廣播訊息，提升開封率。' },
  ],
  aiTitle: '智慧客服 AI\n搶攻對話商機',
  aiDesc: '360° 導購流量變現就靠它，AI 智慧客服讓每一次對話都成為銷售機會。',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
}

const zhCN: LineCopy = {
  title: '唯一 LINE 指定技术合作伙伴\nSHOP 不能没有 LINE\n用 LINE 官方账号卖更多！',
  subtitle: '全效整合 LINE 好友，流量＋留量再营销一气呵成，360° 导购流量变现就靠它。',
  cta: '立即免费试用',
  integrateTitle: '全效整合 LINE 好友',
  integrateDesc: '轻松圈粉、导购冲单、智慧客服，让 LINE 成为你最强的销售渠道。',
  integrateItems: ['轻松圈粉', '导购冲单', '智慧客服'],
  retargetTitle: '流量＋留量再营销\n一气呵成',
  retargetDesc: '靠 LINE 直播 +1 让直播业绩飙升，转战 LINE 成效型广告大幅降低转化成本。',
  retargetItems: [
    { title: 'LINE 快速登录 & 订单状态通知', desc: '顾客一键 LINE 登录，订单状态即时推播通知。' },
    { title: 'LINE 好友与官网会员绑定', desc: '将 LINE 好友与官网会员账号绑定，打通数据。' },
    { title: 'LINE PNP 通知型消息独家支持', desc: '独家支持 LINE PNP，精准触达顾客。' },
    { title: 'LINE 精准广播', desc: '依据顾客分群，发送精准广播消息，提升开封率。' },
  ],
  aiTitle: '智慧客服 AI\n抢攻对话商机',
  aiDesc: '360° 导购流量变现就靠它，AI 智慧客服让每一次对话都成为销售机会。',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
}

const en: LineCopy = {
  title: 'Official LINE tech partner\nYour shop needs LINE\nSell more with Official Account',
  subtitle: 'Unify LINE friends, traffic, retention, and retargeting — turn 360° shopping traffic into revenue.',
  cta: 'Start free trial',
  integrateTitle: 'Fully integrate LINE friends',
  integrateDesc: 'Grow fans, drive orders, and run smart support — make LINE your strongest sales channel.',
  integrateItems: ['Grow fans easily', 'Drive orders', 'Smart support'],
  retargetTitle: 'Traffic + retention retargeting\nin one flow',
  retargetDesc: 'Boost live sales with LINE live +1, then cut conversion cost with LINE performance ads.',
  retargetItems: [
    { title: 'LINE login & order status alerts', desc: 'One-tap LINE login with realtime order push alerts.' },
    { title: 'Bind LINE friends to store members', desc: 'Link LINE friends with store accounts to unify data.' },
    { title: 'Exclusive LINE PNP support', desc: 'Reach customers precisely with LINE PNP messages.' },
    { title: 'Precision LINE broadcasts', desc: 'Segment audiences and send targeted broadcasts that open.' },
  ],
  aiTitle: 'AI customer service\nWin every conversation',
  aiDesc: 'Monetize shopping traffic with AI support that turns every chat into a sales opportunity.',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
}

const ko: LineCopy = {
  title: '공식 LINE 기술 파트너\n스토어에는 LINE이 필요합니다\n공식 계정으로 더 많이 판매하세요',
  subtitle: 'LINE 친구, 트래픽, 리텐션, 리타깃팅을 통합 — 360° 쇼핑 트래픽을 매출로.',
  cta: '무료 체험 시작',
  integrateTitle: 'LINE 친구를 완전 통합',
  integrateDesc: '팬을 키우고, 주문을 유도하고, 스마트 지원을 운영 — LINE을 최강 판매 채널로.',
  integrateItems: ['팬을 쉽게 늘리기', '주문 유도', '스마트 지원'],
  retargetTitle: '트래픽 + 리텐션 리타깃팅\n한 흐름으로',
  retargetDesc: 'LINE 라이브 +1로 라이브 매출을 올리고, LINE 성과형 광고로 전환 비용을 낮추세요.',
  retargetItems: [
    { title: 'LINE 로그인 & 주문 상태 알림', desc: '원탭 LINE 로그인과 실시간 주문 푸시 알림.' },
    { title: 'LINE 친구를 스토어 회원에 연결', desc: 'LINE 친구와 스토어 계정을 연결해 데이터를 통합.' },
    { title: '독점 LINE PNP 지원', desc: 'LINE PNP 메시지로 고객에게 정밀하게 도달.' },
    { title: '정밀 LINE 브로드캐스트', desc: '오디언스를 세그먼트하고 열람률 높은 타깃 브로드캐스트를 전송.' },
  ],
  aiTitle: 'AI 고객 서비스\n모든 대화를 잡으세요',
  aiDesc: '모든 채팅을 판매 기회로 바꾸는 AI 지원으로 쇼핑 트래픽을 수익화하세요.',
  ctaTitle: '전 세계 60만+ 판매자가 신뢰합니다',
}

const ja: LineCopy = {
  title: '公式 LINE 技術パートナー\nショップに LINE は必須\n公式アカウントでもっと売る',
  subtitle: 'LINE 友だち、トラフィック、リテンション、リターゲティングを統合 — 360° のショッピングトラフィックを売上に。',
  cta: '無料トライアルを開始',
  integrateTitle: 'LINE 友だちをフル統合',
  integrateDesc: 'ファンを増やし、注文を促し、スマートサポートを運用 — LINE を最強の販売チャネルに。',
  integrateItems: ['かんたんにファン獲得', '注文を促進', 'スマートサポート'],
  retargetTitle: 'トラフィック＋リテンションのリターゲティング\nひとつの流れで',
  retargetDesc: 'LINE ライブ +1 でライブ売上を伸ばし、LINE 成果型広告でコンバージョンコストを削減。',
  retargetItems: [
    { title: 'LINE ログイン＆注文ステータス通知', desc: 'ワンタップ LINE ログインとリアルタイム注文プッシュ。' },
    { title: 'LINE 友だちとストア会員を紐付け', desc: 'LINE 友だちとストアアカウントを連携してデータを統合。' },
    { title: '独自 LINE PNP 対応', desc: 'LINE PNP メッセージで顧客に精密リーチ。' },
    { title: '精密 LINE ブロードキャスト', desc: 'オーディエンスをセグメントし、開封されるターゲティング配信を。' },
  ],
  aiTitle: 'AI カスタマーサービス\nすべての会話を勝ち取る',
  aiDesc: 'すべてのチャットを販売機会に変える AI サポートでショッピングトラフィックを収益化。',
  ctaTitle: '世界中 60 万以上の加盟店が信頼',
}

const vi: LineCopy = {
  title: 'Đối tác công nghệ LINE chính thức\nCửa hàng cần LINE\nBán nhiều hơn với Official Account',
  subtitle: 'Hợp nhất bạn LINE, traffic, giữ chân và retargeting — biến traffic mua sắm 360° thành doanh thu.',
  cta: 'Bắt đầu dùng thử miễn phí',
  integrateTitle: 'Tích hợp đầy đủ bạn LINE',
  integrateDesc: 'Tăng fan, thúc đẩy đơn và chạy hỗ trợ thông minh — biến LINE thành kênh bán mạnh nhất.',
  integrateItems: ['Tăng fan dễ dàng', 'Thúc đẩy đơn hàng', 'Hỗ trợ thông minh'],
  retargetTitle: 'Retargeting traffic + giữ chân\ntrong một luồng',
  retargetDesc: 'Tăng doanh số live với LINE live +1, rồi giảm chi phí chuyển đổi bằng quảng cáo hiệu suất LINE.',
  retargetItems: [
    { title: 'Đăng nhập LINE & cảnh báo trạng thái đơn', desc: 'Đăng nhập LINE một chạm với push trạng thái đơn realtime.' },
    { title: 'Gắn bạn LINE với thành viên cửa hàng', desc: 'Liên kết bạn LINE với tài khoản cửa hàng để hợp nhất dữ liệu.' },
    { title: 'Hỗ trợ LINE PNP độc quyền', desc: 'Tiếp cận khách chính xác bằng tin nhắn LINE PNP.' },
    { title: 'Broadcast LINE chính xác', desc: 'Phân khúc đối tượng và gửi broadcast mục tiêu được mở.' },
  ],
  aiTitle: 'Chăm sóc khách AI\nChiến thắng mọi cuộc hội thoại',
  aiDesc: 'Kiếm tiền từ traffic mua sắm với hỗ trợ AI biến mọi chat thành cơ hội bán hàng.',
  ctaTitle: 'Được hơn 600.000 người bán trên thế giới tin dùng',
}

const es: LineCopy = {
  title: 'Socio tecnológico oficial de LINE\nTu tienda necesita LINE\nVende más con Official Account',
  subtitle: 'Unifica amigos de LINE, tráfico, retención y retargeting — convierte el tráfico de compra 360° en ingresos.',
  cta: 'Empezar prueba gratis',
  integrateTitle: 'Integra por completo a los amigos de LINE',
  integrateDesc: 'Haz crecer fans, impulsa pedidos y ofrece soporte inteligente — haz de LINE tu canal de ventas más fuerte.',
  integrateItems: ['Haz crecer fans fácilmente', 'Impulsa pedidos', 'Soporte inteligente'],
  retargetTitle: 'Retargeting de tráfico + retención\nen un solo flujo',
  retargetDesc: 'Impulsa ventas en vivo con LINE live +1 y baja el costo de conversión con anuncios de rendimiento LINE.',
  retargetItems: [
    { title: 'Login LINE y alertas de estado de pedido', desc: 'Login LINE de un toque con pushes de pedido en tiempo real.' },
    { title: 'Vincular amigos LINE a miembros de la tienda', desc: 'Conecta amigos LINE con cuentas de tienda para unificar datos.' },
    { title: 'Soporte exclusivo LINE PNP', desc: 'Llega con precisión a clientes con mensajes LINE PNP.' },
    { title: 'Broadcasts LINE precisos', desc: 'Segmenta audiencias y envía broadcasts dirigidos que se abren.' },
  ],
  aiTitle: 'Atención al cliente con IA\nGana cada conversación',
  aiDesc: 'Monetiza el tráfico de compra con soporte IA que convierte cada chat en oportunidad de venta.',
  ctaTitle: 'Más de 600.000 comercios confían en ARVIX',
}

const pt: LineCopy = {
  title: 'Parceiro tecnológico oficial LINE\nSua loja precisa do LINE\nVenda mais com Official Account',
  subtitle: 'Unifique amigos LINE, tráfego, retenção e retargeting — transforme tráfego de compra 360° em receita.',
  cta: 'Começar teste grátis',
  integrateTitle: 'Integre totalmente os amigos LINE',
  integrateDesc: 'Cresça fãs, impulsione pedidos e rode suporte inteligente — faça do LINE seu canal de vendas mais forte.',
  integrateItems: ['Cresça fãs com facilidade', 'Impulsione pedidos', 'Suporte inteligente'],
  retargetTitle: 'Retargeting de tráfego + retenção\nem um fluxo',
  retargetDesc: 'Aumente vendas ao vivo com LINE live +1 e reduza o custo de conversão com anúncios de performance LINE.',
  retargetItems: [
    { title: 'Login LINE e alertas de status do pedido', desc: 'Login LINE com um toque e push de pedido em tempo real.' },
    { title: 'Vincular amigos LINE a membros da loja', desc: 'Ligue amigos LINE a contas da loja para unificar dados.' },
    { title: 'Suporte exclusivo LINE PNP', desc: 'Alcance clientes com precisão com mensagens LINE PNP.' },
    { title: 'Broadcasts LINE precisos', desc: 'Segmente audiências e envie broadcasts direcionados que abrem.' },
  ],
  aiTitle: 'Atendimento ao cliente com IA\nVença cada conversa',
  aiDesc: 'Monetize o tráfego de compra com suporte IA que transforma cada chat em oportunidade de venda.',
  ctaTitle: 'Mais de 600.000 comerciantes confiam na ARVIX',
}

const de: LineCopy = {
  title: 'Offizieller LINE-Tech-Partner\nIhr Shop braucht LINE\nMehr verkaufen mit Official Account',
  subtitle: 'LINE-Freunde, Traffic, Retention und Retargeting vereinen — 360°-Shopping-Traffic in Umsatz verwandeln.',
  cta: 'Kostenlose Testphase starten',
  integrateTitle: 'LINE-Freunde vollständig integrieren',
  integrateDesc: 'Fans gewinnen, Bestellungen antreiben und smarten Support betreiben — machen Sie LINE zu Ihrem stärksten Verkaufskanal.',
  integrateItems: ['Fans leicht gewinnen', 'Bestellungen antreiben', 'Smarter Support'],
  retargetTitle: 'Traffic- + Retention-Retargeting\nin einem Flow',
  retargetDesc: 'Steigern Sie Live-Umsatz mit LINE Live +1 und senken Sie Conversion-Kosten mit LINE Performance Ads.',
  retargetItems: [
    { title: 'LINE-Login & Bestellstatus-Alerts', desc: 'Ein-Tipp-LINE-Login mit Echtzeit-Bestell-Pushes.' },
    { title: 'LINE-Freunde an Store-Mitglieder binden', desc: 'LINE-Freunde mit Store-Konten verknüpfen und Daten vereinen.' },
    { title: 'Exklusive LINE-PNP-Unterstützung', desc: 'Erreichen Sie Kunden präzise mit LINE-PNP-Nachrichten.' },
    { title: 'Präzise LINE-Broadcasts', desc: 'Segmente Audiences und senden Sie gezielte Broadcasts, die geöffnet werden.' },
  ],
  aiTitle: 'KI-Kundenservice\nGewinnen Sie jedes Gespräch',
  aiDesc: 'Monetarisieren Sie Shopping-Traffic mit KI-Support, der jeden Chat zur Verkaufschance macht.',
  ctaTitle: 'Über 600.000 Händler weltweit vertrauen ARVIX',
}

const fr: LineCopy = {
  title: 'Partenaire tech officiel LINE\nVotre boutique a besoin de LINE\nVendez plus avec Official Account',
  subtitle: 'Unifiez amis LINE, trafic, rétention et retargeting — transformez le trafic shopping 360° en revenus.',
  cta: 'Démarrer l’essai gratuit',
  integrateTitle: 'Intégrez pleinement les amis LINE',
  integrateDesc: 'Développez les fans, stimulez les commandes et offrez un support intelligent — faites de LINE votre canal de vente le plus fort.',
  integrateItems: ['Développez les fans facilement', 'Stimulez les commandes', 'Support intelligent'],
  retargetTitle: 'Retargeting trafic + rétention\nen un seul flux',
  retargetDesc: 'Boostez les ventes live avec LINE live +1, puis réduisez le coût de conversion avec les pubs performance LINE.',
  retargetItems: [
    { title: 'Connexion LINE et alertes de statut de commande', desc: 'Connexion LINE en un tap avec pushes de commande en temps réel.' },
    { title: 'Lier les amis LINE aux membres de la boutique', desc: 'Reliez amis LINE et comptes boutique pour unifier les données.' },
    { title: 'Support LINE PNP exclusif', desc: 'Atteignez précisément les clients avec les messages LINE PNP.' },
    { title: 'Broadcasts LINE précis', desc: 'Segmentez les audiences et envoyez des broadcasts ciblés qui s’ouvrent.' },
  ],
  aiTitle: 'Service client IA\nGagnez chaque conversation',
  aiDesc: 'Monétisez le trafic shopping avec un support IA qui transforme chaque chat en opportunité de vente.',
  ctaTitle: 'Plus de 600 000 marchands font confiance à ARVIX',
}


const copy: Partial<Record<Locale, LineCopy>> & { 'zh-TW': LineCopy; en: LineCopy } = {
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

export default function LineSolutionPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(255, 250, 198) 0%, rgb(167, 254, 156) 50%, rgb(5, 199, 93) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="mb-4">
              <Image src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80" alt="LINE partner" width={120} height={40} className="h-10 w-auto" unoptimized />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight whitespace-pre-line" style={{ color: '#00142D' }}>{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
            <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.cta}
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80" alt="ARVIX LINE solution" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>{c.integrateTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.integrateDesc}</p>
            <div className="space-y-4">
              {c.integrateItems.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80" alt="LINE integration" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.retargetTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.retargetDesc}</p>
            <div className="grid grid-cols-1 gap-3">
              {c.retargetItems.map(item => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <div>
                    <span className="font-semibold block text-sm" style={{ color: '#00142D' }}>{item.title}</span>
                    <span className="text-xs" style={{ color: '#687280' }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80" alt="LINE retargeting" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.aiTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.aiDesc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80" alt="LINE AI support" width={600} height={450} className="w-full h-auto" unoptimized />
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
