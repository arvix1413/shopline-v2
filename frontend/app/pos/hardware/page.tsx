'use client'

import Image from 'next/image'
import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'
import type { Locale } from '../../../lib/i18n'

type PosHardwareCopy = {
  title: string
  subtitle: string
  tags: string[]
  howTitle: string
  steps: { num: string; desc: string }[]
  hardware: { name: string; desc: string; img: string }[]
  ctaTitle: string
  ctaSubtitle: string
  consult: string
}

const zhTW: PosHardwareCopy = {
  title: 'POS 週邊硬體',
  subtitle: '專為服飾、零售業設計的 iPad POS 系統，支援收銀結帳、商品庫存、進銷存及會員管理等功能，搭配直覺式的操作介面讓你輕鬆上手，管理店面超 Easy！',
  tags: ['彈性選購', '快速連線', '輕巧大方', '免費諮詢'],
  howTitle: '硬體怎麼用？',
  steps: [
    { num: 'STEP 1', desc: '商品抵達後利用 iPad 建檔，搭配標籤機列印商品條碼來製作吊牌' },
    { num: 'STEP 2', desc: '結帳時利用掃描槍掃描條碼，搭配錢箱及電子發票印表機完成收銀' },
    { num: 'STEP 3', desc: '商品盤點、進貨、移庫時，利用掃描槍掃描條碼在 iPad 上完成操作' },
  ],
  hardware: [
    { name: '錢櫃 ( 大 / 小 )', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: '適合各種門市規模的錢櫃選擇，安全收納現金' },
    { name: '無線條碼標籤機', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: '快速列印商品條碼標籤，製作吊牌更有效率' },
    { name: '無線藍牙掃描槍', img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80', desc: '高效掃描商品條碼，加速結帳、盤點、進貨流程' },
    { name: '電子發票印表機', img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80', desc: '符合台灣電子發票規範，串連發票硬體輕鬆開立' },
  ],
  ctaTitle: '專為零售業設計的 iPad POS 系統，讓你管理店面超 Easy！',
  ctaSubtitle: '與 ARVIX 專業顧問進行一對一免費電話諮詢！',
  consult: '免費諮詢',
}

const zhCN: PosHardwareCopy = {
  title: 'POS 周边硬件',
  subtitle: '专为服饰、零售业设计的 iPad POS 系统，支持收银结账、商品库存、进销存及会员管理等功能，搭配直觉式操作界面让你轻松上手，管理店面超 Easy！',
  tags: ['弹性选购', '快速连线', '轻巧大方', '免费咨询'],
  howTitle: '硬件怎么用？',
  steps: [
    { num: 'STEP 1', desc: '商品抵达后利用 iPad 建档，搭配标签机打印商品条码来制作吊牌' },
    { num: 'STEP 2', desc: '结账时利用扫描枪扫描条码，搭配钱箱及电子发票打印机完成收银' },
    { num: 'STEP 3', desc: '商品盘点、进货、移库时，利用扫描枪扫描条码在 iPad 上完成操作' },
  ],
  hardware: [
    { name: '钱柜 ( 大 / 小 )', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: '适合各种门店规模的钱柜选择，安全收纳现金' },
    { name: '无线条码标签机', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: '快速打印商品条码标签，制作吊牌更有效率' },
    { name: '无线蓝牙扫描枪', img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80', desc: '高效扫描商品条码，加速结账、盘点、进货流程' },
    { name: '电子发票打印机', img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80', desc: '符合电子发票规范，串接发票硬件轻松开立' },
  ],
  ctaTitle: '专为零售业设计的 iPad POS 系统，让你管理店面超 Easy！',
  ctaSubtitle: '与 ARVIX 专业顾问进行一对一免费电话咨询！',
  consult: '免费咨询',
}

const en: PosHardwareCopy = {
  title: 'POS hardware peripherals',
  subtitle: 'An iPad POS built for fashion and retail — checkout, inventory, purchasing, and membership with an intuitive UI that makes store ops easy.',
  tags: ['Flexible purchase', 'Fast pairing', 'Compact design', 'Free consult'],
  howTitle: 'How the hardware works',
  steps: [
    { num: 'STEP 1', desc: 'Receive goods, create products on iPad, and print barcodes with the label printer for hang tags' },
    { num: 'STEP 2', desc: 'Scan barcodes at checkout with the cash drawer and e-invoice printer' },
    { num: 'STEP 3', desc: 'Use the scanner on iPad for stocktakes, receiving, and transfers' },
  ],
  hardware: [
    { name: 'Cash drawer (S / L)', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: 'Secure cash storage sized for any store' },
    { name: 'Wireless barcode label printer', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: 'Print product labels and hang tags faster' },
    { name: 'Wireless Bluetooth scanner', img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80', desc: 'Speed up checkout, stocktakes, and receiving' },
    { name: 'E-invoice printer', img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80', desc: 'Compliant e-invoicing hardware, ready to connect' },
  ],
  ctaTitle: 'Retail-ready iPad POS — store management made easy',
  ctaSubtitle: 'Book a free 1:1 call with an ARVIX advisor.',
  consult: 'Free consultation',
}

const ko: PosHardwareCopy = {
  title: 'POS 주변 하드웨어',
  subtitle: '패션·리테일을 위해 설계된 iPad POS — 결제, 재고, 입출고, 멤버십을 직관적인 UI로 쉽게 운영하세요.',
  tags: ['유연한 구매', '빠른 연결', '컴팩트 디자인', '무료 상담'],
  howTitle: '하드웨어는 어떻게 쓰나요?',
  steps: [
    { num: 'STEP 1', desc: '입고 후 iPad에서 상품을 등록하고, 라벨 프린터로 바코드를 인쇄해 행택을 제작합니다' },
    { num: 'STEP 2', desc: '결제 시 스캐너로 바코드를 읽고, 금전함과 전자 영수증 프린터로 계산을 완료합니다' },
    { num: 'STEP 3', desc: '재고 조사·입고·이동 시 스캐너로 바코드를 읽어 iPad에서 처리합니다' },
  ],
  hardware: [
    { name: '금전함 (소 / 대)', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: '어떤 매장 규모에도 맞는 안전한 현금 보관' },
    { name: '무선 바코드 라벨 프린터', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: '상품 라벨과 행택을 더 빠르게 인쇄' },
    { name: '무선 블루투스 스캐너', img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80', desc: '결제·재고 조사·입고를 가속' },
    { name: '전자 영수증 프린터', img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80', desc: '규격에 맞는 전자 영수증 하드웨어, 바로 연결' },
  ],
  ctaTitle: '리테일용 iPad POS — 매장 관리가 쉬워집니다',
  ctaSubtitle: 'ARVIX 어드바이저와 무료 1:1 통화를 예약하세요.',
  consult: '무료 상담',
}

const ja: PosHardwareCopy = {
  title: 'POS 周辺ハードウェア',
  subtitle: 'ファッション・小売向け iPad POS — レジ・在庫・仕入・会員を直感 UI でかんたんに運用。',
  tags: ['柔軟な購入', 'すばやい接続', 'コンパクトデザイン', '無料相談'],
  howTitle: 'ハードウェアの使い方',
  steps: [
    { num: 'STEP 1', desc: '入荷後に iPad で商品登録し、ラベルプリンターでバーコードを印刷して下げ札を作成' },
    { num: 'STEP 2', desc: '会計時にスキャナーでバーコードを読み取り、ドロワーと電子インボイスプリンターで完了' },
    { num: 'STEP 3', desc: '棚卸・入荷・移動時にスキャナーでバーコードを読み、iPad 上で処理' },
  ],
  hardware: [
    { name: 'キャッシュドロワー（S / L）', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: 'どの店舗規模にも合う安全な現金保管' },
    { name: '無線バーコードラベルプリンター', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: '商品ラベルと下げ札をより速く印刷' },
    { name: '無線 Bluetooth スキャナー', img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80', desc: '会計・棚卸・入荷をスピードアップ' },
    { name: '電子インボイスプリンター', img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80', desc: '準拠した電子インボイス機器、すぐ接続' },
  ],
  ctaTitle: '小売向け iPad POS — 店舗管理がかんたんに',
  ctaSubtitle: 'ARVIX アドバイザーとの無料 1:1 通話を予約。',
  consult: '無料相談',
}

const vi: PosHardwareCopy = {
  title: 'Phần cứng ngoại vi POS',
  subtitle: 'iPad POS dành cho thời trang và bán lẻ — thanh toán, tồn kho, nhập hàng và hội viên với UI trực quan giúp vận hành cửa hàng dễ dàng.',
  tags: ['Mua linh hoạt', 'Kết nối nhanh', 'Thiết kế gọn', 'Tư vấn miễn phí'],
  howTitle: 'Phần cứng dùng thế nào?',
  steps: [
    { num: 'STEP 1', desc: 'Nhận hàng, tạo sản phẩm trên iPad và in mã vạch bằng máy in nhãn để làm thẻ treo' },
    { num: 'STEP 2', desc: 'Quét mã vạch khi thanh toán kèm ngăn kéo tiền và máy in hóa đơn điện tử' },
    { num: 'STEP 3', desc: 'Dùng máy quét trên iPad cho kiểm kê, nhận hàng và chuyển kho' },
  ],
  hardware: [
    { name: 'Ngăn kéo tiền (S / L)', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: 'Cất tiền an toàn phù hợp mọi quy mô cửa hàng' },
    { name: 'Máy in nhãn mã vạch không dây', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: 'In nhãn sản phẩm và thẻ treo nhanh hơn' },
    { name: 'Máy quét Bluetooth không dây', img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80', desc: 'Tăng tốc thanh toán, kiểm kê và nhận hàng' },
    { name: 'Máy in hóa đơn điện tử', img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80', desc: 'Phần cứng hóa đơn điện tử chuẩn, sẵn sàng kết nối' },
  ],
  ctaTitle: 'iPad POS sẵn sàng bán lẻ — quản lý cửa hàng thật dễ',
  ctaSubtitle: 'Đặt cuộc gọi 1:1 miễn phí với cố vấn ARVIX.',
  consult: 'Tư vấn miễn phí',
}

const es: PosHardwareCopy = {
  title: 'Periféricos de hardware POS',
  subtitle: 'Un iPad POS pensado para moda y retail — checkout, inventario, compras y membresía con una UI intuitiva que facilita la operación.',
  tags: ['Compra flexible', 'Emparejamiento rápido', 'Diseño compacto', 'Consulta gratis'],
  howTitle: 'Cómo funciona el hardware',
  steps: [
    { num: 'STEP 1', desc: 'Recibe mercancía, crea productos en el iPad e imprime códigos de barras con la impresora de etiquetas para colgantes' },
    { num: 'STEP 2', desc: 'Escanea códigos en el checkout con el cajón de efectivo y la impresora de e-factura' },
    { num: 'STEP 3', desc: 'Usa el escáner en el iPad para inventarios, recepciones y transferencias' },
  ],
  hardware: [
    { name: 'Cajón de efectivo (S / L)', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: 'Almacenamiento seguro de efectivo para cualquier tamaño de tienda' },
    { name: 'Impresora de etiquetas de código de barras inalámbrica', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: 'Imprime etiquetas de producto y colgantes más rápido' },
    { name: 'Escáner Bluetooth inalámbrico', img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80', desc: 'Acelera checkout, inventarios y recepciones' },
    { name: 'Impresora de e-factura', img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80', desc: 'Hardware de facturación electrónica conforme, listo para conectar' },
  ],
  ctaTitle: 'iPad POS listo para retail — gestión de tienda fácil',
  ctaSubtitle: 'Agenda una llamada 1:1 gratis con un asesor ARVIX.',
  consult: 'Consulta gratis',
}

const pt: PosHardwareCopy = {
  title: 'Periféricos de hardware POS',
  subtitle: 'Um iPad POS feito para moda e varejo — checkout, estoque, compras e associação com UI intuitiva que facilita a operação.',
  tags: ['Compra flexível', 'Pareamento rápido', 'Design compacto', 'Consultoria grátis'],
  howTitle: 'Como o hardware funciona',
  steps: [
    { num: 'STEP 1', desc: 'Receba mercadorias, crie produtos no iPad e imprima códigos de barras com a impressora de etiquetas para tags' },
    { num: 'STEP 2', desc: 'Escaneie códigos no checkout com a gaveta de dinheiro e a impressora de e-fatura' },
    { num: 'STEP 3', desc: 'Use o scanner no iPad para inventários, recebimentos e transferências' },
  ],
  hardware: [
    { name: 'Gaveta de dinheiro (S / L)', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: 'Armazenamento seguro de dinheiro para qualquer tamanho de loja' },
    { name: 'Impressora de etiquetas de código de barras sem fio', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: 'Imprima etiquetas de produto e tags mais rápido' },
    { name: 'Scanner Bluetooth sem fio', img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80', desc: 'Acelere checkout, inventários e recebimentos' },
    { name: 'Impressora de e-fatura', img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80', desc: 'Hardware de faturação eletrônica em conformidade, pronto para conectar' },
  ],
  ctaTitle: 'iPad POS pronto para varejo — gestão de loja fácil',
  ctaSubtitle: 'Agende uma ligação 1:1 grátis com um consultor ARVIX.',
  consult: 'Consultoria grátis',
}

const de: PosHardwareCopy = {
  title: 'POS-Hardware-Peripherie',
  subtitle: 'Ein iPad-POS für Fashion und Retail — Checkout, Bestand, Einkauf und Mitgliedschaft mit intuitiver UI für einfachen Ladenbetrieb.',
  tags: ['Flexibler Kauf', 'Schnelle Kopplung', 'Kompaktes Design', 'Kostenlose Beratung'],
  howTitle: 'So funktioniert die Hardware',
  steps: [
    { num: 'STEP 1', desc: 'Ware annehmen, Produkte auf dem iPad anlegen und Barcodes mit dem Etikettendrucker für Hangtags drucken' },
    { num: 'STEP 2', desc: 'Barcodes am Checkout mit Kassenschublade und E-Invoice-Drucker scannen' },
    { num: 'STEP 3', desc: 'Scanner am iPad für Inventuren, Wareneingang und Umlagerungen nutzen' },
  ],
  hardware: [
    { name: 'Kassenschublade (S / L)', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: 'Sichere Bargeldaufbewahrung für jede Ladengröße' },
    { name: 'Kabelloser Barcode-Etikettendrucker', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: 'Produktetiketten und Hangtags schneller drucken' },
    { name: 'Kabelloser Bluetooth-Scanner', img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80', desc: 'Checkout, Inventuren und Wareneingang beschleunigen' },
    { name: 'E-Invoice-Drucker', img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80', desc: 'Konforme E-Invoice-Hardware, sofort anschließbar' },
  ],
  ctaTitle: 'Retail-fertiges iPad-POS — Ladenmanagement leicht gemacht',
  ctaSubtitle: 'Buchen Sie ein kostenloses 1:1-Gespräch mit einem ARVIX-Berater.',
  consult: 'Kostenlose Beratung',
}

const fr: PosHardwareCopy = {
  title: 'Périphériques matériels POS',
  subtitle: 'Un iPad POS conçu pour la mode et le retail — checkout, stock, achats et adhésion avec une UI intuitive qui simplifie l’exploitation.',
  tags: ['Achat flexible', 'Appairage rapide', 'Design compact', 'Conseil gratuit'],
  howTitle: 'Comment fonctionne le matériel',
  steps: [
    { num: 'STEP 1', desc: 'Réceptionnez la marchandise, créez les produits sur iPad et imprimez les codes-barres avec l’imprimante d’étiquettes pour les hang tags' },
    { num: 'STEP 2', desc: 'Scannez les codes au checkout avec le tiroir-caisse et l’imprimante de facture électronique' },
    { num: 'STEP 3', desc: 'Utilisez le scanner sur iPad pour inventaires, réceptions et transferts' },
  ],
  hardware: [
    { name: 'Tiroir-caisse (S / L)', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: 'Stockage d’espèces sécurisé pour toute taille de magasin' },
    { name: 'Imprimante d’étiquettes codes-barres sans fil', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: 'Imprimez étiquettes produits et hang tags plus vite' },
    { name: 'Scanner Bluetooth sans fil', img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80', desc: 'Accélérez checkout, inventaires et réceptions' },
    { name: 'Imprimante de facture électronique', img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80', desc: 'Matériel de facturation électronique conforme, prêt à connecter' },
  ],
  ctaTitle: 'iPad POS prêt pour le retail — gestion magasin simplifiée',
  ctaSubtitle: 'Réservez un appel 1:1 gratuit avec un conseiller ARVIX.',
  consult: 'Conseil gratuit',
}

const copy: Partial<Record<Locale, PosHardwareCopy>> & { 'zh-TW': PosHardwareCopy; en: PosHardwareCopy } = {
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

export default function PosHardwarePage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(225, 225, 255) 0%, rgb(169, 255, 241) 50%, rgb(44, 194, 114) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#00142D' }}>{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              {c.tags.map(tag => (
                <span key={tag} className="px-4 py-2 rounded-full text-sm font-bold" style={{ backgroundColor: 'rgba(255,255,255,0.7)', color: '#00142D' }}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80" alt="POS hardware" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.howTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {c.steps.map((step) => (
              <div key={step.num} className="p-8 rounded-2xl text-center" style={{ backgroundColor: '#F4F7FC' }}>
                <h3 className="text-lg font-black mb-4" style={{ color: '#5B5FF0' }}>{step.num}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#354253' }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.hardware.map(h => (
              <div key={h.name} className="rounded-2xl overflow-hidden border border-gray-100">
                <Image src={h.img} alt={h.name} width={400} height={300} className="w-full h-48 object-cover" unoptimized />
                <div className="p-5">
                  <h3 className="font-bold mb-2" style={{ color: '#00142D' }}>{h.name}</h3>
                  <p className="text-sm" style={{ color: '#687280' }}>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.ctaTitle}</h2>
          <p className="text-white opacity-70 mb-8">{c.ctaSubtitle}</p>
          <a href="/consultation" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.consult}
          </a>
        </div>
      </section>
    </main>
  )
}
