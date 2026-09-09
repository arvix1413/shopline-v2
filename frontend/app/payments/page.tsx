'use client'

import Image from 'next/image'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type PaymentsCopy = {
  title: string
  subtitle: string
  cta: string
  multiTitle: string
  multiDesc: string
  paymentTypes: { name: string; desc: string }[]
  easyTitle: string
  easyDesc: string
  easyItems: string[]
  securityTitle: string
  securityDesc: string
  aiTitle: string
  aiDesc: string
  ctaTitle: string
}

const zhTW: PaymentsCopy = {
  title: '快速付、輕鬆收',
  subtitle: 'ARVIX Payments 以信用卡結帳為主，安全穩定。台灣出貨商店另可開通 7-11 貨到付款。',
  cta: '立即免費試用',
  multiTitle: 'ARVIX Payments 安全支付、提升交易成功率',
  multiDesc: '一頁完成付款免跳轉，告別訂單流失。穩定流暢的信用卡結帳體驗。',
  paymentTypes: [
    { name: '信用卡付款', desc: '商店結帳支援信用卡付款' },
    { name: '7-11 貨到付款', desc: '台灣出貨商店可開通 7-11 取貨並貨到付款（須綠界物流串接）' },
    { name: '安全結帳', desc: '交易走安全付款流程，降低詐騙風險' },
  ],
  easyTitle: '簡單啟用\n線上申請超省力',
  easyDesc: '線上就能申請開通。台灣出貨商店可再串接 7-11 物流。',
  easyItems: ['一頁完成付款免跳轉告別訂單流失', '信用卡結帳快速開通', '台灣出貨商店可加開 7-11 取貨／貨到付款'],
  securityTitle: '安全可靠的收款體驗',
  securityDesc: '採用安全付款技術，讓每一筆信用卡交易更安心。',
  aiTitle: '獨家 AI 智慧風控監控系統',
  aiDesc: '透過 AI 智慧風控系統即時監控每筆交易，自動識別異常行為，有效降低詐騙風險，保障商家與消費者的交易安全。',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
}

const zhCN: PaymentsCopy = {
  title: '快速付、轻松收',
  subtitle: 'ARVIX Payments 以信用卡结账为主，安全稳定。',
  cta: '立即免费试用',
  multiTitle: 'ARVIX Payments 安全支付、提升交易成功率',
  multiDesc: '一页完成付款免跳转，告别订单流失。稳定流畅的信用卡结账体验。',
  paymentTypes: [
    { name: '信用卡付款', desc: '商店结账支持信用卡付款' },
    { name: '安全结账', desc: '交易走安全付款流程，降低诈骗风险' },
  ],
  easyTitle: '简单启用\n线上申请超省力',
  easyDesc: '线上就能申请开通信用卡收款。',
  easyItems: ['一页完成付款免跳转告别订单流失', '信用卡结账快速开通', '稳定流畅的结账体验'],
  securityTitle: '安全可靠的收款体验',
  securityDesc: '采用安全付款技术，让每一笔信用卡交易更安心。',
  aiTitle: '独家 AI 智慧风控监控系统',
  aiDesc: '通过 AI 智慧风控系统即时监控每笔交易，自动识别异常行为，有效降低诈骗风险，保障商家与消费者的交易安全。',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
}

const en: PaymentsCopy = {
  title: 'Pay fast. Get paid easily.',
  subtitle: 'ARVIX Payments focuses on secure card checkout for your store.',
  cta: 'Start free trial',
  multiTitle: 'Secure card payments that lift conversion',
  multiDesc: 'One-page checkout without redirects. Stable card payment flows.',
  paymentTypes: [
    { name: 'Card payments', desc: 'Checkout supports major credit and debit cards' },
    { name: 'Secure checkout', desc: 'Protected payment flow to reduce fraud risk' },
  ],
  easyTitle: 'Simple setup\nApply online in minutes',
  easyDesc: 'Enable card checkout online and start accepting payments.',
  easyItems: ['One-page checkout without drop-off', 'Card payments ready to enable', 'Stable, secure payment flows'],
  securityTitle: 'Secure payment experience',
  securityDesc: 'Built for safer card transactions for merchants and shoppers.',
  aiTitle: 'Exclusive AI risk monitoring',
  aiDesc: 'AI monitors every transaction in real time, flags anomalies, and reduces fraud for merchants and shoppers.',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
}

const ko: PaymentsCopy = {
  title: '빠르게 결제하고, 쉽게 수금하세요',
  subtitle: 'ARVIX Payments는 안전한 카드 결제를 중심으로 합니다.',
  cta: '무료 체험 시작',
  multiTitle: '전환율을 높이는 안전한 카드 결제',
  multiDesc: '리다이렉트 없는 원페이지 체크아웃. 안정적인 카드 결제 흐름.',
  paymentTypes: [
    { name: '카드 결제', desc: '체크아웃에서 주요 신용/체크카드를 지원합니다' },
    { name: '안전한 결제', desc: '사기 위험을 줄이는 보안 결제 흐름' },
  ],
  easyTitle: '간편 설정\n온라인으로 빠르게 신청',
  easyDesc: '온라인에서 카드 결제를 활성화하고 바로 수금을 시작하세요.',
  easyItems: ['이탈을 줄이는 원페이지 체크아웃', '카드 결제 빠른 개통', '안정적이고 안전한 결제 흐름'],
  securityTitle: '안전한 결제 경험',
  securityDesc: '판매자와 구매자 모두를 위한 더 안전한 카드 거래.',
  aiTitle: '전용 AI 리스크 모니터링',
  aiDesc: 'AI가 거래를 실시간 모니터링하고 이상 징후를 감지해 사기 위험을 줄입니다.',
  ctaTitle: '전 세계 60만+ 판매자가 ARVIX를 신뢰합니다',
}

const ja: PaymentsCopy = {
  title: 'すばやく支払い、かんたんに入金',
  subtitle: 'ARVIX Payments は安全なカード決済を中心に提供します。',
  cta: '無料トライアルを開始',
  multiTitle: 'コンバージョンを高める安全なカード決済',
  multiDesc: 'リダイレクトなしのワンページチェックアウト。安定したカード決済フロー。',
  paymentTypes: [
    { name: 'カード決済', desc: 'チェックアウトで主要なクレジット／デビットカードに対応' },
    { name: '安全な決済', desc: '不正リスクを抑えるセキュアな決済フロー' },
  ],
  easyTitle: 'かんたん設定\nオンラインで申請',
  easyDesc: 'オンラインでカード決済を有効化し、すぐに受取を開始できます。',
  easyItems: ['離脱を減らすワンページチェックアウト', 'カード決済をすばやく開通', '安定・安全な決済フロー'],
  securityTitle: '安全な決済体験',
  securityDesc: '加盟店と購入者のための、より安全なカード取引。',
  aiTitle: '独自の AI リスク監視',
  aiDesc: 'AI が取引をリアルタイム監視し、異常を検知して不正リスクを低減します。',
  ctaTitle: '世界中 60 万以上の加盟店が ARVIX を利用',
}

const vi: PaymentsCopy = {
  title: 'Thanh toán nhanh, nhận tiền dễ dàng',
  subtitle: 'ARVIX Payments tập trung vào thanh toán thẻ an toàn cho cửa hàng của bạn.',
  cta: 'Bắt đầu dùng thử miễn phí',
  multiTitle: 'Thanh toán thẻ an toàn giúp tăng chuyển đổi',
  multiDesc: 'Checkout một trang không chuyển hướng. Luồng thanh toán thẻ ổn định.',
  paymentTypes: [
    { name: 'Thanh toán thẻ', desc: 'Checkout hỗ trợ các thẻ tín dụng/ghi nợ phổ biến' },
    { name: 'Thanh toán an toàn', desc: 'Luồng thanh toán bảo mật giúp giảm rủi ro gian lận' },
  ],
  easyTitle: 'Thiết lập đơn giản\nĐăng ký trực tuyến trong vài phút',
  easyDesc: 'Bật thanh toán thẻ trực tuyến và bắt đầu nhận thanh toán.',
  easyItems: ['Checkout một trang giảm bỏ giỏ', 'Mở thanh toán thẻ nhanh', 'Luồng thanh toán ổn định, an toàn'],
  securityTitle: 'Trải nghiệm thanh toán an toàn',
  securityDesc: 'Được xây dựng cho giao dịch thẻ an toàn hơn cho người bán và người mua.',
  aiTitle: 'Giám sát rủi ro AI độc quyền',
  aiDesc: 'AI theo dõi giao dịch theo thời gian thực, phát hiện bất thường và giảm gian lận.',
  ctaTitle: 'Được hơn 600.000 người bán trên thế giới tin dùng',
}

const es: PaymentsCopy = {
  title: 'Paga rápido. Cobra con facilidad.',
  subtitle: 'ARVIX Payments se centra en un checkout seguro con tarjeta.',
  cta: 'Empieza la prueba gratis',
  multiTitle: 'Pagos con tarjeta seguros que mejoran la conversión',
  multiDesc: 'Checkout de una página sin redirecciones. Flujos de tarjeta estables.',
  paymentTypes: [
    { name: 'Pagos con tarjeta', desc: 'El checkout admite tarjetas de crédito y débito principales' },
    { name: 'Checkout seguro', desc: 'Flujo protegido para reducir el riesgo de fraude' },
  ],
  easyTitle: 'Configuración simple\nSolicita en línea en minutos',
  easyDesc: 'Activa el pago con tarjeta en línea y empieza a cobrar.',
  easyItems: ['Checkout de una página sin abandonos', 'Pagos con tarjeta listos para activar', 'Flujos de pago estables y seguros'],
  securityTitle: 'Experiencia de pago segura',
  securityDesc: 'Pensado para transacciones con tarjeta más seguras para comercios y clientes.',
  aiTitle: 'Monitoreo de riesgo con IA exclusivo',
  aiDesc: 'La IA monitorea cada transacción en tiempo real, detecta anomalías y reduce el fraude.',
  ctaTitle: 'Más de 600.000 comercios confían en ARVIX',
}

const pt: PaymentsCopy = {
  title: 'Pague rápido. Receba com facilidade.',
  subtitle: 'O ARVIX Payments foca em checkout seguro com cartão para sua loja.',
  cta: 'Começar teste grátis',
  multiTitle: 'Pagamentos com cartão seguros que aumentam a conversão',
  multiDesc: 'Checkout em uma página sem redirecionamentos. Fluxos de cartão estáveis.',
  paymentTypes: [
    { name: 'Pagamentos com cartão', desc: 'O checkout aceita os principais cartões de crédito e débito' },
    { name: 'Checkout seguro', desc: 'Fluxo protegido para reduzir risco de fraude' },
  ],
  easyTitle: 'Configuração simples\nSolicite online em minutos',
  easyDesc: 'Ative o pagamento com cartão online e comece a receber.',
  easyItems: ['Checkout em uma página sem abandono', 'Pagamentos com cartão prontos para ativar', 'Fluxos de pagamento estáveis e seguros'],
  securityTitle: 'Experiência de pagamento segura',
  securityDesc: 'Feito para transações com cartão mais seguras para lojistas e clientes.',
  aiTitle: 'Monitoramento de risco com IA exclusivo',
  aiDesc: 'A IA monitora cada transação em tempo real, sinaliza anomalias e reduz fraudes.',
  ctaTitle: 'Mais de 600.000 lojistas confiam na ARVIX',
}

const de: PaymentsCopy = {
  title: 'Schnell zahlen. Einfach Geld erhalten.',
  subtitle: 'ARVIX Payments konzentriert sich auf sicheren Kartencheckout für Ihren Shop.',
  cta: 'Kostenlos testen',
  multiTitle: 'Sichere Kartenzahlungen, die die Conversion steigern',
  multiDesc: 'Ein-Seiten-Checkout ohne Weiterleitungen. Stabile Kartenzahlungsabläufe.',
  paymentTypes: [
    { name: 'Kartenzahlungen', desc: 'Checkout unterstützt gängige Kredit- und Debitkarten' },
    { name: 'Sicherer Checkout', desc: 'Geschützter Zahlungsablauf zur Betrugsreduktion' },
  ],
  easyTitle: 'Einfache Einrichtung\nOnline in Minuten beantragen',
  easyDesc: 'Kartencheckout online aktivieren und Zahlungen annehmen.',
  easyItems: ['Ein-Seiten-Checkout ohne Abbrüche', 'Kartenzahlungen schnell freischalten', 'Stabile, sichere Zahlungsabläufe'],
  securityTitle: 'Sicheres Zahlungserlebnis',
  securityDesc: 'Für sicherere Kartentransaktionen für Händler und Käufer.',
  aiTitle: 'Exklusives KI-Risikomonitoring',
  aiDesc: 'KI überwacht jede Transaktion in Echtzeit, erkennt Anomalien und reduziert Betrug.',
  ctaTitle: 'Über 600.000 Händler weltweit vertrauen ARVIX',
}

const fr: PaymentsCopy = {
  title: 'Payez vite. Encaissez facilement.',
  subtitle: 'ARVIX Payments se concentre sur un paiement par carte sécurisé pour votre boutique.',
  cta: 'Démarrer l’essai gratuit',
  multiTitle: 'Paiements par carte sécurisés qui boostent la conversion',
  multiDesc: 'Checkout d’une page sans redirection. Parcours carte stables.',
  paymentTypes: [
    { name: 'Paiements par carte', desc: 'Le checkout prend en charge les principales cartes de crédit et de débit' },
    { name: 'Checkout sécurisé', desc: 'Parcours protégé pour réduire le risque de fraude' },
  ],
  easyTitle: 'Configuration simple\nDemandez en ligne en quelques minutes',
  easyDesc: 'Activez le paiement par carte en ligne et commencez à encaisser.',
  easyItems: ['Checkout d’une page sans abandon', 'Paiements par carte prêts à activer', 'Parcours de paiement stables et sécurisés'],
  securityTitle: 'Expérience de paiement sécurisée',
  securityDesc: 'Conçu pour des transactions par carte plus sûres pour marchands et clients.',
  aiTitle: 'Surveillance des risques par IA exclusive',
  aiDesc: 'L’IA surveille chaque transaction en temps réel, détecte les anomalies et réduit la fraude.',
  ctaTitle: 'Plus de 600 000 marchands font confiance à ARVIX',
}

const copy: Partial<Record<Locale, PaymentsCopy>> & { 'zh-TW': PaymentsCopy; en: PaymentsCopy } = {
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

export default function PaymentsPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 211, 146) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#00142D' }}>{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
            <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.cta}
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80" alt="ARVIX Payments" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-2" style={{ color: '#00142D' }}>{c.multiTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.multiDesc}</p>
            <div className="space-y-3">
              {c.paymentTypes.map(p => (
                <div key={p.name} className="p-4 rounded-xl" style={{ backgroundColor: '#F4F7FC' }}>
                  <h3 className="font-bold mb-1" style={{ color: '#00142D' }}>{p.name}</h3>
                  <p className="text-sm" style={{ color: '#687280' }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=1200&q=80" alt="ARVIX multi payment" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.easyTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.easyDesc}</p>
            <div className="space-y-4">
              {c.easyItems.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80" alt="ARVIX payment apply" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.securityTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.securityDesc}</p>
            <div className="p-5 rounded-xl" style={{ backgroundColor: '#F4F7FC' }}>
              <h4 className="font-bold mb-2" style={{ color: '#00142D' }}>{c.aiTitle}</h4>
              <p className="text-sm" style={{ color: '#687280' }}>{c.aiDesc}</p>
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?w=1200&q=80" alt="ARVIX Cybersource" width={600} height={450} className="w-full h-auto" unoptimized />
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
