'use client'

import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type PartnersCopy = {
  title: string
  subtitle: string
  becomePartner: string
  categories: { title: string; desc: string; partners: string[] }[]
  ctaTitle: string
  cta: string
}

const zhTW: PartnersCopy = {
  title: 'ARVIX 夥伴提供您各式支援',
  subtitle: '精選合作夥伴生態圈，為你的品牌提供全方位的專業服務支援',
  becomePartner: '成為合作夥伴',
  categories: [
    {
      title: '豐富金物流選項',
      desc: '商店結帳支援信用卡；台灣出貨商店可再串接 7-11 超商取貨／貨到付款。',
      partners: ['ARVIX Payments', '信用卡結帳', '7-11 超商取貨', '宅配出貨'],
    },
    {
      title: '專業設計、行銷團隊',
      desc: '與頂尖設計與行銷服務商合作，協助品牌打造專業形象並提升行銷成效。',
      partners: ['品牌設計公司', '數位行銷代理商', 'SEO 優化服務', '社群媒體管理', '廣告投放服務', '內容行銷團隊'],
    },
    {
      title: '多元服務滿足各式需求',
      desc: '涵蓋 ERP、CRM、倉儲物流等各類企業服務，打造完整的電商生態圈。',
      partners: ['ERP 系統整合', 'CRM 客戶管理', '倉儲物流服務', '客服系統', '數據分析工具', 'AI 行銷工具'],
    },
  ],
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  cta: '立即免費試用',
}

const zhCN: PartnersCopy = {
  title: 'ARVIX 伙伴为您提供各式支持',
  subtitle: '精选合作伙伴生态圈，为你的品牌提供全方位的专业服务支持',
  becomePartner: '成为合作伙伴',
  categories: [
    {
      title: '丰富金物流选项',
      desc: '商店结账支持信用卡付款。',
      partners: ['ARVIX Payments', '信用卡结账', '宅配出货'],
    },
    {
      title: '专业设计、营销团队',
      desc: '与顶尖设计与营销服务商合作，协助品牌打造专业形象并提升营销成效。',
      partners: ['品牌设计公司', '数字营销代理商', 'SEO 优化服务', '社群媒体管理', '广告投放服务', '内容营销团队'],
    },
    {
      title: '多元服务满足各式需求',
      desc: '涵盖 ERP、CRM、仓储物流等各类企业服务，打造完整的电商生态圈。',
      partners: ['ERP 系统整合', 'CRM 客户管理', '仓储物流服务', '客服系统', '数据分析工具', 'AI 营销工具'],
    },
  ],
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  cta: '立即免费试用',
}

const en: PartnersCopy = {
  title: 'ARVIX partners have your back',
  subtitle: 'A curated partner ecosystem for full-stack professional support',
  becomePartner: 'Become a partner',
  categories: [
    {
      title: 'Payments & logistics options',
      desc: 'Card checkout for stores, with home delivery. Local pickup depends on the store’s shipping setup.',
      partners: ['ARVIX Payments', 'Card checkout', 'Home delivery'],
    },
    {
      title: 'Design & marketing teams',
      desc: 'Work with top design and marketing partners to elevate brand and performance.',
      partners: ['Brand design studios', 'Digital agencies', 'SEO services', 'Social media management', 'Media buying', 'Content teams'],
    },
    {
      title: 'Services for every need',
      desc: 'ERP, CRM, warehousing, and more — a complete commerce ecosystem.',
      partners: ['ERP integration', 'CRM', 'Warehousing & logistics', 'Support systems', 'Analytics tools', 'AI marketing tools'],
    },
  ],
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  cta: 'Start free trial',
}

const ko: PartnersCopy = {
  title: 'ARVIX 파트너가 함께합니다',
  subtitle: '브랜드를 위한 큐레이션된 파트너 생태계',
  becomePartner: '파트너 되기',
  categories: [
    {
      title: '결제 및 물류 옵션',
      desc: '스토어 카드 결제와 택배. 추가 픽업은 스토어 배송 설정에 따릅니다.',
      partners: ['ARVIX Payments', '카드 결제', '택배 배송'],
    },
    {
      title: '디자인·마케팅 팀',
      desc: '최고 수준의 디자인·마케팅 파트너와 함께 브랜드와 성과를 높이세요.',
      partners: ['브랜드 디자인 스튜디오', '디지털 에이전시', 'SEO 서비스', '소셜 미디어 관리', '매체 구매', '콘텐츠 팀'],
    },
    {
      title: '모든 필요를 위한 서비스',
      desc: 'ERP, CRM, 물류 창고 등 — 완전한 커머스 생태계.',
      partners: ['ERP 연동', 'CRM', '창고·물류', '고객지원 시스템', '분석 도구', 'AI 마케팅 도구'],
    },
  ],
  ctaTitle: '전 세계 60만+ 판매자가 ARVIX를 신뢰합니다',
  cta: '무료 체험 시작',
}

const ja: PartnersCopy = {
  title: 'ARVIX パートナーが支えるビジネス',
  subtitle: '厳選されたパートナーエコシステムで専門支援を',
  becomePartner: 'パートナーになる',
  categories: [
    {
      title: '決済・物流オプション',
      desc: '店舗のカード決済と宅配。追加の受け取り方法は店舗の配送設定によります。',
      partners: ['ARVIX Payments', 'カード決済', '宅配'],
    },
    {
      title: 'デザイン・マーケティングチーム',
      desc: 'トップクラスのデザイン・マーケティングパートナーとブランドと成果を高めます。',
      partners: ['ブランドデザイン', 'デジタル代理店', 'SEO', 'SNS運用', '広告運用', 'コンテンツチーム'],
    },
    {
      title: 'あらゆるニーズに対応',
      desc: 'ERP、CRM、倉庫など — 完全なコマースエコシステム。',
      partners: ['ERP 連携', 'CRM', '倉庫・物流', 'サポートシステム', '分析ツール', 'AI マーケツール'],
    },
  ],
  ctaTitle: '世界中 60 万以上の加盟店が ARVIX を利用',
  cta: '無料トライアルを開始',
}

const vi: PartnersCopy = {
  title: 'Đối tác ARVIX đồng hành cùng bạn',
  subtitle: 'Hệ sinh thái đối tác được tuyển chọn cho hỗ trợ chuyên nghiệp',
  becomePartner: 'Trở thành đối tác',
  categories: [
    {
      title: 'Thanh toán & vận chuyển',
      desc: 'Thanh toán thẻ và giao tận nhà. Nhận hàng thêm tùy thiết lập cửa hàng.',
      partners: ['ARVIX Payments', 'Thanh toán thẻ', 'Giao tận nhà'],
    },
    {
      title: 'Đội ngũ thiết kế & marketing',
      desc: 'Làm việc với đối tác thiết kế và marketing hàng đầu để nâng tầm thương hiệu.',
      partners: ['Studio thiết kế', 'Agency số', 'SEO', 'Quản lý mạng xã hội', 'Mua media', 'Đội nội dung'],
    },
    {
      title: 'Dịch vụ cho mọi nhu cầu',
      desc: 'ERP, CRM, kho bãi và hơn thế — hệ sinh thái thương mại đầy đủ.',
      partners: ['Tích hợp ERP', 'CRM', 'Kho & logistics', 'Hệ thống hỗ trợ', 'Công cụ phân tích', 'AI marketing'],
    },
  ],
  ctaTitle: 'Hơn 600.000 người bán tin dùng ARVIX',
  cta: 'Bắt đầu dùng thử miễn phí',
}

const es: PartnersCopy = {
  title: 'Los socios de ARVIX te respaldan',
  subtitle: 'Un ecosistema de partners seleccionado para soporte profesional',
  becomePartner: 'Hazte partner',
  categories: [
    {
      title: 'Pagos y logística',
      desc: 'Checkout con tarjeta y entrega a domicilio. Otras recogidas dependen de la tienda.',
      partners: ['ARVIX Payments', 'Pago con tarjeta', 'Entrega a domicilio'],
    },
    {
      title: 'Equipos de diseño y marketing',
      desc: 'Trabaja con partners top de diseño y marketing para elevar marca y resultados.',
      partners: ['Estudios de marca', 'Agencias digitales', 'SEO', 'Redes sociales', 'Compra de medios', 'Equipos de contenido'],
    },
    {
      title: 'Servicios para cada necesidad',
      desc: 'ERP, CRM, almacenes y más — un ecosistema de comercio completo.',
      partners: ['Integración ERP', 'CRM', 'Almacén y logística', 'Sistemas de soporte', 'Analítica', 'Marketing con IA'],
    },
  ],
  ctaTitle: 'Más de 600.000 comercios confían en ARVIX',
  cta: 'Empieza la prueba gratis',
}

const pt: PartnersCopy = {
  title: 'Parceiros ARVIX ao seu lado',
  subtitle: 'Ecossistema de parceiros selecionados para suporte profissional',
  becomePartner: 'Seja um parceiro',
  categories: [
    {
      title: 'Pagamentos e logística',
      desc: 'Checkout com cartão e entrega em domicílio. Outras retiradas dependem da loja.',
      partners: ['ARVIX Payments', 'Pagamento com cartão', 'Entrega em domicílio'],
    },
    {
      title: 'Equipes de design e marketing',
      desc: 'Trabalhe com parceiros top de design e marketing para elevar marca e resultados.',
      partners: ['Estúdios de marca', 'Agências digitais', 'SEO', 'Redes sociais', 'Mídia', 'Equipes de conteúdo'],
    },
    {
      title: 'Serviços para cada necessidade',
      desc: 'ERP, CRM, armazéns e mais — um ecossistema completo de comércio.',
      partners: ['Integração ERP', 'CRM', 'Armazém e logística', 'Sistemas de suporte', 'Analytics', 'Marketing com IA'],
    },
  ],
  ctaTitle: 'Mais de 600.000 lojistas confiam na ARVIX',
  cta: 'Começar teste grátis',
}

const de: PartnersCopy = {
  title: 'ARVIX-Partner an Ihrer Seite',
  subtitle: 'Kuratiertes Partner-Ökosystem für professionelle Unterstützung',
  becomePartner: 'Partner werden',
  categories: [
    {
      title: 'Zahlungen & Logistik',
      desc: 'Kartencheckout und Lieferung nach Hause. Weitere Abholung je nach Shop-Einstellung.',
      partners: ['ARVIX Payments', 'Kartenzahlung', 'Lieferung nach Hause'],
    },
    {
      title: 'Design- & Marketing-Teams',
      desc: 'Arbeiten Sie mit Top-Partnern für Design und Marketing.',
      partners: ['Brand-Design-Studios', 'Digitalagenturen', 'SEO', 'Social Media', 'Media Buying', 'Content-Teams'],
    },
    {
      title: 'Services für jeden Bedarf',
      desc: 'ERP, CRM, Lager und mehr — ein komplettes Commerce-Ökosystem.',
      partners: ['ERP-Integration', 'CRM', 'Lager & Logistik', 'Support-Systeme', 'Analytik', 'KI-Marketing'],
    },
  ],
  ctaTitle: 'Über 600.000 Händler vertrauen ARVIX',
  cta: 'Kostenlos testen',
}

const fr: PartnersCopy = {
  title: 'Les partenaires ARVIX à vos côtés',
  subtitle: 'Un écosystème de partenaires sélectionnés pour un soutien pro',
  becomePartner: 'Devenir partenaire',
  categories: [
    {
      title: 'Paiements et logistique',
      desc: 'Paiement par carte et livraison à domicile. Autres retraits selon la boutique.',
      partners: ['ARVIX Payments', 'Paiement par carte', 'Livraison à domicile'],
    },
    {
      title: 'Équipes design et marketing',
      desc: 'Travaillez avec des partenaires design et marketing de premier plan.',
      partners: ['Studios de marque', 'Agences digitales', 'SEO', 'Réseaux sociaux', 'Achat média', 'Équipes contenu'],
    },
    {
      title: 'Services pour chaque besoin',
      desc: 'ERP, CRM, entrepôts et plus — un écosystème commerce complet.',
      partners: ['Intégration ERP', 'CRM', 'Entrepôt et logistique', 'Systèmes support', 'Analytique', 'Marketing IA'],
    },
  ],
  ctaTitle: 'Plus de 600 000 marchands font confiance à ARVIX',
  cta: 'Démarrer l’essai gratuit',
}

const copy: Partial<Record<Locale, PartnersCopy>> & { 'zh-TW': PartnersCopy; en: PartnersCopy } = {
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

export default function SelectedPartnersPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EEF0FF 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>{c.title}</h1>
          <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
          <a href="/cooperate" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
            {c.becomePartner}
          </a>
        </div>
      </section>

      {c.categories.map((cat, i) => (
        <section key={cat.title} className="py-20" style={{ backgroundColor: i % 2 === 0 ? 'white' : '#F4F7FC' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>{cat.title}</h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: '#687280' }}>{cat.desc}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {cat.partners.map((p) => (
                <div key={p} className="p-4 bg-white rounded-xl border border-gray-100 text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: '#EEF0FF' }}>
                    <span className="text-xl">🤝</span>
                  </div>
                  <p className="text-sm font-semibold" style={{ color: '#354253' }}>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

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
