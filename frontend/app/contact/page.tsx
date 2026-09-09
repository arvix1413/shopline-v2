'use client'

import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type ContactCopy = {
  title: string
  subtitle: string
  channelsTitle: string
  channels: { icon: string; title: string; desc: string; cta: string; href: string }[]
  hoursTitle: string
  hours: string
  ctaTitle: string
  ctaSubtitle: string
  ctaButton: string
}

const zhTW: ContactCopy = {
  title: '聯絡我們',
  subtitle: '無論是開店諮詢、技術支援或商務合作，ARVIX 團隊都樂意協助你。',
  channelsTitle: '你可以這樣聯繫我們',
  channels: [
    {
      icon: '💬',
      title: 'LINE 客服',
      desc: '即時詢問開店與產品問題，工作日快速回覆。',
      cta: '開啟 LINE 對話',
      href: 'https://line.me/R/ti/p/@kxh0647n',
    },
    {
      icon: '📞',
      title: '預約免費諮詢',
      desc: '一對一顧問諮詢，從數位轉型到全通路整合一次說清楚。',
      cta: '立即預約',
      href: '/consultation',
    },
    {
      icon: '🤝',
      title: '商務合作',
      desc: '代理、聯盟、開發者與技術夥伴，歡迎一起拓展生態圈。',
      cta: '了解合作機會',
      href: '/cooperate',
    },
    {
      icon: '✉️',
      title: 'Email',
      desc: '非即時需求可寄信給我們，我們會盡快回覆。',
      cta: 'arvix1413@gmail.com',
      href: 'mailto:arvix1413@gmail.com',
    },
  ],
  hoursTitle: '服務時間',
  hours: '週一至週五 10:00–19:00（台灣時間，國定假日除外）',
  ctaTitle: '想更快開始賣貨？',
  ctaSubtitle: '14 天免費試用，零門檻架起你的品牌電商。',
  ctaButton: '開始免費開店',
}

const zhCN: ContactCopy = {
  title: '联系我们',
  subtitle: '无论是开店咨询、技术支持还是商务合作，ARVIX 团队都乐意协助你。',
  channelsTitle: '你可以这样联系我们',
  channels: [
    {
      icon: '💬',
      title: 'LINE 客服',
      desc: '即时询问开店与产品问题，工作日快速回复。',
      cta: '打开 LINE 对话',
      href: 'https://line.me/R/ti/p/@kxh0647n',
    },
    {
      icon: '📞',
      title: '预约免费咨询',
      desc: '一对一顾问咨询，从数字转型到全渠道整合一次说清楚。',
      cta: '立即预约',
      href: '/consultation',
    },
    {
      icon: '🤝',
      title: '商务合作',
      desc: '代理、联盟、开发者与技术伙伴，欢迎一起拓展生态圈。',
      cta: '了解合作机会',
      href: '/cooperate',
    },
    {
      icon: '✉️',
      title: 'Email',
      desc: '非即时需求可写信给我们，我们会尽快回复。',
      cta: 'arvix1413@gmail.com',
      href: 'mailto:arvix1413@gmail.com',
    },
  ],
  hoursTitle: '服务时间',
  hours: '周一至周五 10:00–19:00（台湾时间，法定假日除外）',
  ctaTitle: '想更快开始卖货？',
  ctaSubtitle: '14 天免费试用，零门槛架起你的品牌电商。',
  ctaButton: '开始免费开店',
}

const en: ContactCopy = {
  title: 'Contact us',
  subtitle: 'Whether you need store setup help, product support, or a partnership conversation — the ARVIX team is here.',
  channelsTitle: 'Ways to reach us',
  channels: [
    {
      icon: '💬',
      title: 'LINE support',
      desc: 'Ask product and setup questions in real time on business days.',
      cta: 'Chat on LINE',
      href: 'https://line.me/R/ti/p/@kxh0647n',
    },
    {
      icon: '📞',
      title: 'Book a free consult',
      desc: 'Talk 1:1 with an advisor about digital transformation and omnichannel growth.',
      cta: 'Book now',
      href: '/consultation',
    },
    {
      icon: '🤝',
      title: 'Partnerships',
      desc: 'Resellers, affiliates, developers, and tech partners — let’s build together.',
      cta: 'Explore partnerships',
      href: '/cooperate',
    },
    {
      icon: '✉️',
      title: 'Email',
      desc: 'For non-urgent requests, email us and we’ll get back to you.',
      cta: 'arvix1413@gmail.com',
      href: 'mailto:arvix1413@gmail.com',
    },
  ],
  hoursTitle: 'Service hours',
  hours: 'Mon–Fri 10:00–19:00 (Taiwan time, excluding public holidays)',
  ctaTitle: 'Ready to start selling?',
  ctaSubtitle: '14-day free trial — launch your brand store with zero friction.',
  ctaButton: 'Start free store',
}

const ko: ContactCopy = {
  title: '문의하기',
  subtitle: '스토어 개설, 제품 지원, 파트너십 상담까지 — ARVIX 팀이 도와드립니다.',
  channelsTitle: '연락 방법',
  channels: [
    {
      icon: '💬',
      title: 'LINE 지원',
      desc: '영업일에는 제품·개설 관련 질문을 실시간으로 문의하세요.',
      cta: 'LINE으로 채팅',
      href: 'https://line.me/R/ti/p/@kxh0647n',
    },
    {
      icon: '📞',
      title: '무료 상담 예약',
      desc: '디지털 전환과 옴니채널 성장에 대해 1:1 어드바이저와 상담하세요.',
      cta: '지금 예약',
      href: '/consultation',
    },
    {
      icon: '🤝',
      title: '파트너십',
      desc: '리셀러, 어필리에이트, 개발자, 기술 파트너 — 함께 만들어 가요.',
      cta: '파트너십 살펴보기',
      href: '/cooperate',
    },
    {
      icon: '✉️',
      title: 'Email',
      desc: '급하지 않은 문의는 이메일로 보내 주세요. 빠르게 답변드리겠습니다.',
      cta: 'arvix1413@gmail.com',
      href: 'mailto:arvix1413@gmail.com',
    },
  ],
  hoursTitle: '서비스 시간',
  hours: '월–금 10:00–19:00 (대만 시간, 공휴일 제외)',
  ctaTitle: '판매를 시작할 준비가 되셨나요?',
  ctaSubtitle: '14일 무료 체험 — 부담 없이 브랜드 스토어를 런칭하세요.',
  ctaButton: '무료로 스토어 시작',
}

const ja: ContactCopy = {
  title: 'お問い合わせ',
  subtitle: 'ストア開設、製品サポート、パートナーシップのご相談まで — ARVIX チームが対応します。',
  channelsTitle: 'ご連絡方法',
  channels: [
    {
      icon: '💬',
      title: 'LINE サポート',
      desc: '営業日は製品・開設に関するご質問をリアルタイムでどうぞ。',
      cta: 'LINE でチャット',
      href: 'https://line.me/R/ti/p/@kxh0647n',
    },
    {
      icon: '📞',
      title: '無料相談を予約',
      desc: 'デジタル変革とオムニチャネル成長について、アドバイザーと 1:1 で話せます。',
      cta: '今すぐ予約',
      href: '/consultation',
    },
    {
      icon: '🤝',
      title: 'パートナーシップ',
      desc: 'リセラー、アフィリエイト、開発者、技術パートナー — 一緒に築きましょう。',
      cta: 'パートナーシップを見る',
      href: '/cooperate',
    },
    {
      icon: '✉️',
      title: 'Email',
      desc: '急ぎでないご依頼はメールで。できるだけ早くご返信します。',
      cta: 'arvix1413@gmail.com',
      href: 'mailto:arvix1413@gmail.com',
    },
  ],
  hoursTitle: '受付時間',
  hours: '月–金 10:00–19:00（台湾時間、祝日を除く）',
  ctaTitle: '販売を始める準備はできましたか？',
  ctaSubtitle: '14 日間無料トライアル — スムーズにブランドストアを開設。',
  ctaButton: '無料でストアを開始',
}

const vi: ContactCopy = {
  title: 'Liên hệ',
  subtitle: 'Dù bạn cần hỗ trợ mở cửa hàng, hỗ trợ sản phẩm hay trao đổi hợp tác — đội ngũ ARVIX sẵn sàng.',
  channelsTitle: 'Cách liên hệ với chúng tôi',
  channels: [
    {
      icon: '💬',
      title: 'Hỗ trợ LINE',
      desc: 'Hỏi về sản phẩm và thiết lập theo thời gian thực vào ngày làm việc.',
      cta: 'Chat trên LINE',
      href: 'https://line.me/R/ti/p/@kxh0647n',
    },
    {
      icon: '📞',
      title: 'Đặt tư vấn miễn phí',
      desc: 'Trao đổi 1:1 với cố vấn về chuyển đổi số và tăng trưởng omnichannel.',
      cta: 'Đặt lịch ngay',
      href: '/consultation',
    },
    {
      icon: '🤝',
      title: 'Hợp tác',
      desc: 'Đại lý, affiliate, nhà phát triển và đối tác công nghệ — hãy cùng xây dựng.',
      cta: 'Khám phá hợp tác',
      href: '/cooperate',
    },
    {
      icon: '✉️',
      title: 'Email',
      desc: 'Với yêu cầu không gấp, hãy gửi email — chúng tôi sẽ phản hồi sớm.',
      cta: 'arvix1413@gmail.com',
      href: 'mailto:arvix1413@gmail.com',
    },
  ],
  hoursTitle: 'Giờ làm việc',
  hours: 'T2–T6 10:00–19:00 (giờ Đài Loan, trừ ngày lễ)',
  ctaTitle: 'Sẵn sàng bắt đầu bán hàng?',
  ctaSubtitle: 'Dùng thử miễn phí 14 ngày — mở cửa hàng thương hiệu không rào cản.',
  ctaButton: 'Bắt đầu cửa hàng miễn phí',
}

const es: ContactCopy = {
  title: 'Contáctanos',
  subtitle: 'Ya sea ayuda para abrir tienda, soporte de producto o una conversación de partnership — el equipo ARVIX está aquí.',
  channelsTitle: 'Formas de contactarnos',
  channels: [
    {
      icon: '💬',
      title: 'Soporte LINE',
      desc: 'Pregunta sobre producto y configuración en tiempo real en días laborables.',
      cta: 'Chatear en LINE',
      href: 'https://line.me/R/ti/p/@kxh0647n',
    },
    {
      icon: '📞',
      title: 'Reserva una consulta gratis',
      desc: 'Habla 1:1 con un asesor sobre transformación digital y crecimiento omnicanal.',
      cta: 'Reservar ahora',
      href: '/consultation',
    },
    {
      icon: '🤝',
      title: 'Partnerships',
      desc: 'Revendedores, afiliados, desarrolladores y partners tech — construyamos juntos.',
      cta: 'Explorar partnerships',
      href: '/cooperate',
    },
    {
      icon: '✉️',
      title: 'Email',
      desc: 'Para solicitudes no urgentes, escríbenos y te responderemos.',
      cta: 'arvix1413@gmail.com',
      href: 'mailto:arvix1413@gmail.com',
    },
  ],
  hoursTitle: 'Horario de atención',
  hours: 'Lun–Vie 10:00–19:00 (hora de Taiwán, excepto festivos)',
  ctaTitle: '¿Listo para empezar a vender?',
  ctaSubtitle: 'Prueba gratis de 14 días — lanza tu tienda de marca sin fricción.',
  ctaButton: 'Abrir tienda gratis',
}

const pt: ContactCopy = {
  title: 'Fale conosco',
  subtitle: 'Seja ajuda para abrir loja, suporte de produto ou uma conversa de parceria — a equipe ARVIX está aqui.',
  channelsTitle: 'Formas de nos contactar',
  channels: [
    {
      icon: '💬',
      title: 'Suporte LINE',
      desc: 'Tire dúvidas de produto e configuração em tempo real em dias úteis.',
      cta: 'Conversar no LINE',
      href: 'https://line.me/R/ti/p/@kxh0647n',
    },
    {
      icon: '📞',
      title: 'Agende uma consultoria grátis',
      desc: 'Fale 1:1 com um consultor sobre transformação digital e crescimento omnichannel.',
      cta: 'Agendar agora',
      href: '/consultation',
    },
    {
      icon: '🤝',
      title: 'Parcerias',
      desc: 'Revendedores, afiliados, desenvolvedores e parceiros tech — vamos construir juntos.',
      cta: 'Explorar parcerias',
      href: '/cooperate',
    },
    {
      icon: '✉️',
      title: 'Email',
      desc: 'Para pedidos não urgentes, envie um e-mail e responderemos em breve.',
      cta: 'arvix1413@gmail.com',
      href: 'mailto:arvix1413@gmail.com',
    },
  ],
  hoursTitle: 'Horário de atendimento',
  hours: 'Seg–Sex 10:00–19:00 (horário de Taiwan, exceto feriados)',
  ctaTitle: 'Pronto para começar a vender?',
  ctaSubtitle: 'Teste grátis de 14 dias — lance sua loja de marca sem atrito.',
  ctaButton: 'Começar loja grátis',
}

const de: ContactCopy = {
  title: 'Kontakt',
  subtitle: 'Ob Shop-Setup, Produktsupport oder Partnerschaftsgespräch — das ARVIX-Team ist für Sie da.',
  channelsTitle: 'So erreichen Sie uns',
  channels: [
    {
      icon: '💬',
      title: 'LINE-Support',
      desc: 'Stellen Sie Produkt- und Setup-Fragen an Werktagen in Echtzeit.',
      cta: 'Auf LINE chatten',
      href: 'https://line.me/R/ti/p/@kxh0647n',
    },
    {
      icon: '📞',
      title: 'Kostenlose Beratung buchen',
      desc: 'Sprechen Sie 1:1 mit einem Berater über digitale Transformation und Omnichannel-Wachstum.',
      cta: 'Jetzt buchen',
      href: '/consultation',
    },
    {
      icon: '🤝',
      title: 'Partnerschaften',
      desc: 'Resellerspartner, Affiliates, Entwickler und Tech-Partner — lassen Sie uns gemeinsam bauen.',
      cta: 'Partnerschaften entdecken',
      href: '/cooperate',
    },
    {
      icon: '✉️',
      title: 'Email',
      desc: 'Bei nicht dringenden Anfragen mailen Sie uns — wir melden uns.',
      cta: 'arvix1413@gmail.com',
      href: 'mailto:arvix1413@gmail.com',
    },
  ],
  hoursTitle: 'Servicezeiten',
  hours: 'Mo–Fr 10:00–19:00 (Taiwan-Zeit, ohne Feiertage)',
  ctaTitle: 'Bereit, mit dem Verkauf zu starten?',
  ctaSubtitle: '14 Tage kostenlos testen — starten Sie Ihren Markenshop ohne Hürden.',
  ctaButton: 'Kostenlosen Shop starten',
}

const fr: ContactCopy = {
  title: 'Nous contacter',
  subtitle: 'Aide à l’ouverture de boutique, support produit ou discussion partenariat — l’équipe ARVIX est là.',
  channelsTitle: 'Comment nous joindre',
  channels: [
    {
      icon: '💬',
      title: 'Support LINE',
      desc: 'Posez vos questions produit et configuration en temps réel les jours ouvrés.',
      cta: 'Discuter sur LINE',
      href: 'https://line.me/R/ti/p/@kxh0647n',
    },
    {
      icon: '📞',
      title: 'Réserver une consultation gratuite',
      desc: 'Échangez 1:1 avec un conseiller sur la transformation digitale et la croissance omnicanale.',
      cta: 'Réserver maintenant',
      href: '/consultation',
    },
    {
      icon: '🤝',
      title: 'Partenariats',
      desc: 'Revendeurs, affiliés, développeurs et partenaires tech — construisons ensemble.',
      cta: 'Découvrir les partenariats',
      href: '/cooperate',
    },
    {
      icon: '✉️',
      title: 'Email',
      desc: 'Pour les demandes non urgentes, écrivez-nous — nous vous répondrons.',
      cta: 'arvix1413@gmail.com',
      href: 'mailto:arvix1413@gmail.com',
    },
  ],
  hoursTitle: 'Horaires',
  hours: 'Lun–Ven 10:00–19:00 (heure de Taïwan, hors jours fériés)',
  ctaTitle: 'Prêt à commencer à vendre ?',
  ctaSubtitle: 'Essai gratuit de 14 jours — lancez votre boutique de marque sans friction.',
  ctaButton: 'Ouvrir une boutique gratuite',
}

const copy: Partial<Record<Locale, ContactCopy>> & { 'zh-TW': ContactCopy; en: ContactCopy } = {
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

export default function ContactPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EEF0FF 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>{c.title}</h1>
          <p className="text-lg leading-relaxed" style={{ color: '#687280' }}>{c.subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-black mb-10 text-center" style={{ color: '#00142D' }}>{c.channelsTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {c.channels.map((ch) => (
              <a
                key={ch.title}
                href={ch.href}
                target={ch.href.startsWith('http') || ch.href.startsWith('mailto:') ? '_blank' : undefined}
                rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block rounded-2xl p-6 transition-all hover:-translate-y-0.5"
                style={{ background: '#F7F8FC', border: '1px solid rgba(18,19,31,0.06)' }}
              >
                <div className="text-3xl mb-3">{ch.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#12131F' }}>{ch.title}</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#687280' }}>{ch.desc}</p>
                <span className="text-sm font-bold" style={{ color: '#5B5FF0' }}>{ch.cta} →</span>
              </a>
            ))}
          </div>

          <div className="mt-12 rounded-2xl p-6 text-center" style={{ background: '#F7F8FC' }}>
            <div className="text-sm font-semibold mb-1" style={{ color: '#5B5FF0' }}>{c.hoursTitle}</div>
            <div className="text-sm" style={{ color: '#5C5F7A' }}>{c.hours}</div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ background: 'linear-gradient(135deg, #5B5FF0 0%, #3A3FCF 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-3">{c.ctaTitle}</h2>
          <p className="text-white/85 mb-8">{c.ctaSubtitle}</p>
          <a
            href="/register"
            className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity"
            style={{ color: '#5B5FF0' }}
          >
            {c.ctaButton}
          </a>
        </div>
      </section>
    </main>
  )
}
