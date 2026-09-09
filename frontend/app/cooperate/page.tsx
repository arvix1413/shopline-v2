'use client'

import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type CooperateCopy = {
  title: string
  subtitle: string
  cta: string
  typesTitle: string
  types: { title: string; desc: string; icon: string }[]
  advantagesTitle: string
  advantages: { title: string; desc: string }[]
  contactTitle: string
  contactDesc: string
  contactCta: string
  ctaTitle: string
  trialCta: string
}

const zhTW: CooperateCopy = {
  title: '加入 ARVIX 開放生態圈，成為我們的合作夥伴！',
  subtitle: '與全球超過 600,000 商家的電商平台合作，共同打造零售新未來',
  cta: '立即申請合作',
  typesTitle: '與 ARVIX 的合作機會',
  types: [
    { title: '策略合作夥伴', desc: '與 ARVIX 共同開拓市場，提供互補的產品或服務，共創商業價值。', icon: '🤝' },
    { title: '代理商與聯盟夥伴', desc: '代理 ARVIX 服務，協助商家導入電商解決方案，享有豐厚分潤機制。', icon: '🏢' },
    { title: '開發者合作夥伴', desc: '透過 ARVIX 開放 API 開發擴充功能，上架至擴充功能商店觸及 60 萬商家。', icon: '💻' },
    { title: '技術合作夥伴', desc: '整合卡片結帳、運送與行銷等技術服務，成為 ARVIX 生態圈的一環。', icon: '⚙️' },
  ],
  advantagesTitle: '四大合作優勢',
  advantages: [
    { title: '全新客戶來源坐享其成', desc: '借助 ARVIX 60 萬商家基礎，快速觸及潛在客戶，降低獲客成本。' },
    { title: '提升服務範疇開拓新商機', desc: '結合 ARVIX 全方位零售解決方案，擴大服務範疇，開拓更多商業機會。' },
    { title: '打造三贏局面創造收入', desc: '商家、夥伴、ARVIX 三方共贏，透過合作創造穩定收入來源。' },
    { title: '提供專人輔導省時省力', desc: '專屬夥伴成功團隊全程輔導，協助快速上手並持續優化合作成效。' },
  ],
  contactTitle: '想跟我們合作嗎？',
  contactDesc: '請填寫以下表單，我們將盡快與您聯繫，謝謝！',
  contactCta: '聯繫合作團隊',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  trialCta: '立即免費試用',
}

const zhCN: CooperateCopy = {
  title: '加入 ARVIX 开放生态圈，成为我们的合作伙伴！',
  subtitle: '与全球超过 600,000 商家的电商平台合作，共同打造零售新未来',
  cta: '立即申请合作',
  typesTitle: '与 ARVIX 的合作机会',
  types: [
    { title: '策略合作伙伴', desc: '与 ARVIX 共同开拓市场，提供互补的产品或服务，共创商业价值。', icon: '🤝' },
    { title: '代理商与联盟伙伴', desc: '代理 ARVIX 服务，协助商家导入电商解决方案，享有丰厚分润机制。', icon: '🏢' },
    { title: '开发者合作伙伴', desc: '通过 ARVIX 开放 API 开发扩展功能，上架至扩展功能商店触及 60 万商家。', icon: '💻' },
    { title: '技术合作伙伴', desc: '整合卡片结账、配送与营销等技术服务，成为 ARVIX 生态圈的一环。', icon: '⚙️' },
  ],
  advantagesTitle: '四大合作优势',
  advantages: [
    { title: '全新客户来源坐享其成', desc: '借助 ARVIX 60 万商家基础，快速触及潜在客户，降低获客成本。' },
    { title: '提升服务范畴开拓新商机', desc: '结合 ARVIX 全方位零售解决方案，扩大服务范畴，开拓更多商业机会。' },
    { title: '打造三赢局面创造收入', desc: '商家、伙伴、ARVIX 三方共赢，通过合作创造稳定收入来源。' },
    { title: '提供专人辅导省时省力', desc: '专属伙伴成功团队全程辅导，协助快速上手并持续优化合作成效。' },
  ],
  contactTitle: '想跟我们合作吗？',
  contactDesc: '请填写以下表单，我们将尽快与您联系，谢谢！',
  contactCta: '联系合作团队',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  trialCta: '立即免费试用',
}

const en: CooperateCopy = {
  title: 'Join the ARVIX partner ecosystem',
  subtitle: 'Partner with a commerce platform trusted by 600,000+ merchants and shape the future of retail',
  cta: 'Apply to partner',
  typesTitle: 'Ways to partner with ARVIX',
  types: [
    { title: 'Strategic partners', desc: 'Co-develop markets with complementary products and shared value.', icon: '🤝' },
    { title: 'Resellers & affiliates', desc: 'Resell ARVIX and help merchants adopt commerce solutions with strong commissions.', icon: '🏢' },
    { title: 'Developer partners', desc: 'Build apps on ARVIX APIs and reach 600K merchants in the app store.', icon: '💻' },
    { title: 'Technology partners', desc: 'Integrate card checkout, shipping, and marketing into the ARVIX ecosystem.', icon: '⚙️' },
  ],
  advantagesTitle: 'Four partner advantages',
  advantages: [
    { title: 'Ready-made customer reach', desc: 'Tap 600K merchants to lower acquisition cost.' },
    { title: 'Expand your service scope', desc: 'Combine with ARVIX retail solutions to open new opportunities.' },
    { title: 'Win-win-win revenue', desc: 'Merchants, partners, and ARVIX grow together with stable income.' },
    { title: 'Dedicated success coaching', desc: 'A partner success team helps you ramp and optimize results.' },
  ],
  contactTitle: 'Want to partner with us?',
  contactDesc: 'Reach out and our team will get back to you soon.',
  contactCta: 'Contact partnership team',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  trialCta: 'Start free trial',
}

const ko: CooperateCopy = {
  title: 'ARVIX 파트너 생태계에 합류하세요',
  subtitle: '60만+ 판매자가 신뢰하는 커머스 플랫폼과 함께 리테일의 미래를 만드세요',
  cta: '파트너 신청하기',
  typesTitle: 'ARVIX와 협력하는 방법',
  types: [
    { title: '전략 파트너', desc: '보완적인 제품과 공유 가치로 시장을 함께 개척합니다.', icon: '🤝' },
    { title: '리셀러 & 어필리에이트', desc: 'ARVIX를 재판매하고 판매자의 커머스 도입을 도우며 수수료를 받으세요.', icon: '🏢' },
    { title: '개발자 파트너', desc: 'ARVIX API로 앱을 만들고 앱스토어에서 60만 판매자에게 도달하세요.', icon: '💻' },
    { title: '기술 파트너', desc: '카드 결제, 배송, 마케팅을 ARVIX 생태계에 연동하세요.', icon: '⚙️' },
  ],
  advantagesTitle: '네 가지 파트너 이점',
  advantages: [
    { title: '바로 쓸 수 있는 고객 도달', desc: '60만 판매자 기반을 활용해 획득 비용을 낮추세요.' },
    { title: '서비스 범위 확대', desc: 'ARVIX 리테일 솔루션과 결합해 새로운 기회를 여세요.' },
    { title: '윈-윈-윈 수익', desc: '판매자, 파트너, ARVIX가 함께 성장하며 안정적인 수입을 만듭니다.' },
    { title: '전담 성공 코칭', desc: '파트너 성공 팀이 온보딩과 성과 최적화를 돕습니다.' },
  ],
  contactTitle: '함께 파트너가 되고 싶으신가요?',
  contactDesc: '연락 주시면 팀이 곧 답변드리겠습니다.',
  contactCta: '파트너십 팀 문의',
  ctaTitle: '전 세계 60만+ 판매자가 ARVIX를 신뢰합니다',
  trialCta: '무료 체험 시작',
}

const ja: CooperateCopy = {
  title: 'ARVIX パートナーエコシステムに参加',
  subtitle: '60 万以上の加盟店が信頼するコマースプラットフォームと、リテールの未来を共に',
  cta: 'パートナー申請',
  typesTitle: 'ARVIX との提携方法',
  types: [
    { title: '戦略パートナー', desc: '補完的な製品と共有価値で市場を共同開拓します。', icon: '🤝' },
    { title: 'リセラー＆アフィリエイト', desc: 'ARVIX を再販し、加盟店のコマース導入を支援してコミッションを得られます。', icon: '🏢' },
    { title: '開発者パートナー', desc: 'ARVIX API でアプリを構築し、アプリストアで 60 万加盟店にリーチ。', icon: '💻' },
    { title: '技術パートナー', desc: 'カード決済・配送・マーケティングを ARVIX エコシステムに統合。', icon: '⚙️' },
  ],
  advantagesTitle: '4 つのパートナー利点',
  advantages: [
    { title: 'すぐに使える顧客リーチ', desc: '60 万加盟店基盤を活用し、獲得コストを下げられます。' },
    { title: 'サービス範囲の拡大', desc: 'ARVIX のリテールソリューションと組み合わせて新たな機会を。' },
    { title: '三方良しの収益', desc: '加盟店・パートナー・ARVIX が共に成長し、安定収入を創出。' },
    { title: '専任サクセスコーチング', desc: 'パートナーサクセスチームが立ち上がりと成果最適化を支援。' },
  ],
  contactTitle: 'パートナーになりませんか？',
  contactDesc: 'ご連絡いただければ、チームより速やかにご返信します。',
  contactCta: 'パートナーシップチームへ連絡',
  ctaTitle: '世界中 60 万以上の加盟店が ARVIX を利用',
  trialCta: '無料トライアルを開始',
}

const vi: CooperateCopy = {
  title: 'Tham gia hệ sinh thái đối tác ARVIX',
  subtitle: 'Hợp tác với nền tảng thương mại được hơn 600.000 người bán tin dùng và định hình tương lai bán lẻ',
  cta: 'Đăng ký hợp tác',
  typesTitle: 'Cách hợp tác với ARVIX',
  types: [
    { title: 'Đối tác chiến lược', desc: 'Cùng mở thị trường với sản phẩm bổ trợ và giá trị chia sẻ.', icon: '🤝' },
    { title: 'Đại lý & affiliate', desc: 'Bán lại ARVIX, giúp người bán áp dụng giải pháp thương mại và nhận hoa hồng.', icon: '🏢' },
    { title: 'Đối tác phát triển', desc: 'Xây app trên API ARVIX và tiếp cận 600K người bán trên app store.', icon: '💻' },
    { title: 'Đối tác công nghệ', desc: 'Tích hợp thanh toán thẻ, vận chuyển và marketing vào hệ sinh thái ARVIX.', icon: '⚙️' },
  ],
  advantagesTitle: 'Bốn lợi thế đối tác',
  advantages: [
    { title: 'Tiếp cận khách hàng sẵn có', desc: 'Tận dụng 600K người bán để giảm chi phí thu hút.' },
    { title: 'Mở rộng phạm vi dịch vụ', desc: 'Kết hợp giải pháp bán lẻ ARVIX để mở cơ hội mới.' },
    { title: 'Doanh thu win-win-win', desc: 'Người bán, đối tác và ARVIX cùng tăng trưởng với thu nhập ổn định.' },
    { title: 'Huấn luyện thành công chuyên trách', desc: 'Đội partner success hỗ trợ triển khai và tối ưu kết quả.' },
  ],
  contactTitle: 'Muốn hợp tác với chúng tôi?',
  contactDesc: 'Hãy liên hệ — đội ngũ sẽ phản hồi sớm.',
  contactCta: 'Liên hệ đội hợp tác',
  ctaTitle: 'Hơn 600.000 người bán trên toàn cầu tin dùng ARVIX',
  trialCta: 'Bắt đầu dùng thử miễn phí',
}

const es: CooperateCopy = {
  title: 'Únete al ecosistema de partners ARVIX',
  subtitle: 'Asóciate con una plataforma de comercio confiada por más de 600.000 merchants y da forma al futuro del retail',
  cta: 'Solicitar partnership',
  typesTitle: 'Formas de asociarte con ARVIX',
  types: [
    { title: 'Partners estratégicos', desc: 'Co-desarrolla mercados con productos complementarios y valor compartido.', icon: '🤝' },
    { title: 'Revendedores y afiliados', desc: 'Revende ARVIX y ayuda a merchants a adoptar soluciones de comercio con comisiones sólidas.', icon: '🏢' },
    { title: 'Partners desarrolladores', desc: 'Crea apps con las APIs de ARVIX y llega a 600K merchants en la app store.', icon: '💻' },
    { title: 'Partners tecnológicos', desc: 'Integra checkout con tarjeta, envíos y marketing en el ecosistema ARVIX.', icon: '⚙️' },
  ],
  advantagesTitle: 'Cuatro ventajas para partners',
  advantages: [
    { title: 'Alcance de clientes listo', desc: 'Aprovecha 600K merchants para bajar el coste de adquisición.' },
    { title: 'Amplía tu alcance de servicio', desc: 'Combina con soluciones retail de ARVIX para abrir nuevas oportunidades.' },
    { title: 'Ingresos ganar-ganar-ganar', desc: 'Merchants, partners y ARVIX crecen juntos con ingresos estables.' },
    { title: 'Coaching de éxito dedicado', desc: 'Un equipo de partner success te ayuda a arrancar y optimizar resultados.' },
  ],
  contactTitle: '¿Quieres asociarte con nosotros?',
  contactDesc: 'Escríbenos y nuestro equipo te responderá pronto.',
  contactCta: 'Contactar al equipo de partnerships',
  ctaTitle: 'Más de 600.000 merchants confían en ARVIX en todo el mundo',
  trialCta: 'Empezar prueba gratis',
}

const pt: CooperateCopy = {
  title: 'Entre no ecossistema de parceiros ARVIX',
  subtitle: 'Faça parceria com uma plataforma de comércio confiada por mais de 600.000 merchants e ajude a moldar o futuro do varejo',
  cta: 'Candidatar-se a parceiro',
  typesTitle: 'Formas de fazer parceria com a ARVIX',
  types: [
    { title: 'Parceiros estratégicos', desc: 'Co-desenvolva mercados com produtos complementares e valor compartilhado.', icon: '🤝' },
    { title: 'Revendedores e afiliados', desc: 'Revenda a ARVIX e ajude merchants a adotar soluções de comércio com comissões atrativas.', icon: '🏢' },
    { title: 'Parceiros desenvolvedores', desc: 'Crie apps nas APIs da ARVIX e alcance 600K merchants na app store.', icon: '💻' },
    { title: 'Parceiros de tecnologia', desc: 'Integre checkout com cartão, frete e marketing ao ecossistema ARVIX.', icon: '⚙️' },
  ],
  advantagesTitle: 'Quatro vantagens para parceiros',
  advantages: [
    { title: 'Alcance de clientes pronto', desc: 'Use a base de 600K merchants para reduzir o custo de aquisição.' },
    { title: 'Amplie o escopo do serviço', desc: 'Combine com soluções de varejo ARVIX para abrir novas oportunidades.' },
    { title: 'Receita ganha-ganha-ganha', desc: 'Merchants, parceiros e ARVIX crescem juntos com renda estável.' },
    { title: 'Coaching de sucesso dedicado', desc: 'Uma equipe de partner success ajuda a acelerar e otimizar resultados.' },
  ],
  contactTitle: 'Quer fazer parceria conosco?',
  contactDesc: 'Entre em contato e nossa equipe responderá em breve.',
  contactCta: 'Contatar a equipe de parcerias',
  ctaTitle: 'Mais de 600.000 merchants confiam na ARVIX no mundo',
  trialCta: 'Começar teste grátis',
}

const de: CooperateCopy = {
  title: 'Werden Sie Teil des ARVIX-Partner-Ökosystems',
  subtitle: 'Partnerschaft mit einer Commerce-Plattform, der über 600.000 Händler vertrauen — und die Zukunft des Handels mitgestalten',
  cta: 'Partnerschaft beantragen',
  typesTitle: 'Wege zur Partnerschaft mit ARVIX',
  types: [
    { title: 'Strategische Partner', desc: 'Erschließen Sie Märkte gemeinsam mit komplementären Produkten und geteiltem Mehrwert.', icon: '🤝' },
    { title: 'Wiederverkäufer & Affiliates', desc: 'Verkaufen Sie ARVIX weiter und helfen Sie Händlern bei Commerce-Lösungen — mit starken Provisionen.', icon: '🏢' },
    { title: 'Entwickler-Partner', desc: 'Bauen Sie Apps auf ARVIX-APIs und erreichen Sie 600K Händler im App Store.', icon: '💻' },
    { title: 'Technologie-Partner', desc: 'Integrieren Sie Kartencheckout, Versand und Marketing in das ARVIX-Ökosystem.', icon: '⚙️' },
  ],
  advantagesTitle: 'Vier Partner-Vorteile',
  advantages: [
    { title: 'Fertige Kundenreichweite', desc: 'Nutzen Sie 600K Händler, um Akquisekosten zu senken.' },
    { title: 'Serviceumfang erweitern', desc: 'Kombinieren Sie mit ARVIX-Retail-Lösungen für neue Chancen.' },
    { title: 'Win-win-win-Umsatz', desc: 'Händler, Partner und ARVIX wachsen gemeinsam mit stabilem Einkommen.' },
    { title: 'Dediziertes Success-Coaching', desc: 'Ein Partner-Success-Team hilft beim Ramp-up und bei der Optimierung.' },
  ],
  contactTitle: 'Möchten Sie Partner werden?',
  contactDesc: 'Melden Sie sich — unser Team antwortet zeitnah.',
  contactCta: 'Partnership-Team kontaktieren',
  ctaTitle: 'Über 600.000 Händler weltweit vertrauen ARVIX',
  trialCta: 'Kostenlos testen',
}

const fr: CooperateCopy = {
  title: 'Rejoignez l’écosystème partenaires ARVIX',
  subtitle: 'Associez-vous à une plateforme commerce de confiance pour plus de 600 000 marchands et façonnez l’avenir du retail',
  cta: 'Postuler comme partenaire',
  typesTitle: 'Façons de s’associer à ARVIX',
  types: [
    { title: 'Partenaires stratégiques', desc: 'Co-développez des marchés avec des produits complémentaires et une valeur partagée.', icon: '🤝' },
    { title: 'Revendeurs & affiliés', desc: 'Revendez ARVIX et aidez les marchands à adopter le commerce avec de solides commissions.', icon: '🏢' },
    { title: 'Partenaires développeurs', desc: 'Créez des apps sur les API ARVIX et touchez 600K marchands dans l’app store.', icon: '💻' },
    { title: 'Partenaires technologiques', desc: 'Intégrez le paiement par carte, la livraison et le marketing dans l’écosystème ARVIX.', icon: '⚙️' },
  ],
  advantagesTitle: 'Quatre avantages partenaires',
  advantages: [
    { title: 'Portée clients prête à l’emploi', desc: 'Tirez parti de 600K marchands pour réduire le coût d’acquisition.' },
    { title: 'Élargissez votre périmètre de service', desc: 'Combinez avec les solutions retail ARVIX pour de nouvelles opportunités.' },
    { title: 'Revenus gagnant-gagnant-gagnant', desc: 'Marchands, partenaires et ARVIX grandissent ensemble avec des revenus stables.' },
    { title: 'Coaching succès dédié', desc: 'Une équipe partner success vous aide à démarrer et à optimiser les résultats.' },
  ],
  contactTitle: 'Envie de devenir partenaire ?',
  contactDesc: 'Contactez-nous — notre équipe vous répondra bientôt.',
  contactCta: 'Contacter l’équipe partenariats',
  ctaTitle: 'Plus de 600 000 marchands dans le monde font confiance à ARVIX',
  trialCta: 'Démarrer l’essai gratuit',
}

const copy: Partial<Record<Locale, CooperateCopy>> & { 'zh-TW': CooperateCopy; en: CooperateCopy } = {
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

export default function CooperatePage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EEF0FF 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>{c.title}</h1>
          <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
          <a href="#contact" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.typesTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.types.map((t) => (
              <div key={t.title} className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-4">{t.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#00142D' }}>{t.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#687280' }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.advantagesTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {c.advantages.map((a) => (
              <div key={a.title} className="p-8 bg-white rounded-2xl">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#5B5FF0' }}>{a.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#687280' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>{c.contactTitle}</h2>
          <p className="mb-8" style={{ color: '#687280' }}>{c.contactDesc}</p>
          <a href="mailto:arvix1413@gmail.com" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
            {c.contactCta}
          </a>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.ctaTitle}</h2>
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.trialCta}
          </a>
        </div>
      </section>
    </main>
  )
}
