'use client'

import Image from 'next/image'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type PosCopy = {
  title: string
  subtitle: string
  cta: string
  pains: { title: string; desc: string }[]
  checkoutTitle: string
  checkoutAccent: string
  checkoutDesc: string
  checkoutItems: string[]
  memberTitle: string
  memberDesc: string
  memberItems: string[]
  reportTitle: string
  reportDesc: string
  reportItems: string[]
  inventoryTitle: string
  inventoryDesc: string
  inventoryItems: string[]
  ctaTitle: string
  ctaSubtitle: string
}

const zhTW: PosCopy = {
  title: '開啟你的全通路生意',
  subtitle: '一台 iPad 為你搞定開店大小事！收銀、庫存、會員、報表，全部一手掌握。',
  cta: '立即免費試用',
  pains: [
    { title: '網店、實體店資料分散？', desc: '線上線下數據各自為政，無法統一管理，錯失商機。' },
    { title: '人工記帳總是出錯？', desc: '手動記帳耗時費力，容易出錯，影響營運效率。' },
    { title: '生意好壞只憑感覺？', desc: '缺乏數據支撐，無法精準掌握門市營運狀況。' },
  ],
  checkoutTitle: '一台 iPad\n為你搞定開店大小事！',
  checkoutAccent: '簡單直覺收銀結帳效率 UP',
  checkoutDesc: '簡單直覺的收銀介面，讓結帳效率大幅提升，減少顧客等待時間。',
  checkoutItems: ['串接 POS 刷卡機及多元支付選項', '一鍵套用優惠 / 加入會員', '發票、收據快速開立', '即時掌握實時交易明細'],
  memberTitle: '輪廓分析\n會員經營沒難度',
  memberDesc: '深度會員輪廓分析，讓你精準掌握顧客消費行為，提升回購率。',
  memberItems: ['顧客快速加入會員', '顧客線上、線下消費紀錄', '會員分級與專屬價格', '顧客標籤與備註'],
  reportTitle: '有憑有據\n分析報表自動化',
  reportDesc: '自動化報表系統，讓你隨時掌握門市營運狀況，做出正確決策。',
  reportItems: ['即時掌握實時交易明細', '多維度銷售報表', '商品銷售排行', '員工業績統計'],
  inventoryTitle: '一目瞭然\n庫存與商品管理有條理',
  inventoryDesc: '即時庫存管理，讓你輕鬆掌握商品狀況，避免缺貨或積壓問題。',
  inventoryItems: ['即時庫存同步', '商品批量管理', '庫存預警通知', '網店與門市庫存整合'],
  ctaTitle: 'ARVIX POS 讓品牌再進化！',
  ctaSubtitle: '全球超過 600,000 商家已使用 ARVIX',
}

const zhCN: PosCopy = {
  title: '开启你的全渠道生意',
  subtitle: '一台 iPad 为你搞定开店大小事！收银、库存、会员、报表，全部一手掌握。',
  cta: '立即免费试用',
  pains: [
    { title: '网店、实体店资料分散？', desc: '线上线下数据各自为政，无法统一管理，错失商机。' },
    { title: '人工记账总是出错？', desc: '手动记账耗时费力，容易出错，影响运营效率。' },
    { title: '生意好坏只凭感觉？', desc: '缺乏数据支撑，无法精准掌握门店运营状况。' },
  ],
  checkoutTitle: '一台 iPad\n为你搞定开店大小事！',
  checkoutAccent: '简单直觉收银结账效率 UP',
  checkoutDesc: '简单直觉的收银界面，让结账效率大幅提升，减少顾客等待时间。',
  checkoutItems: ['对接 POS 刷卡机及多元支付选项', '一键套用优惠 / 加入会员', '发票、收据快速开立', '即时掌握实时交易明细'],
  memberTitle: '轮廓分析\n会员经营没难度',
  memberDesc: '深度会员轮廓分析，让你精准掌握顾客消费行为，提升回购率。',
  memberItems: ['顾客快速加入会员', '顾客线上、线下消费纪录', '会员分级与专属价格', '顾客标签与备注'],
  reportTitle: '有凭有据\n分析报表自动化',
  reportDesc: '自动化报表系统，让你随时掌握门店运营状况，做出正确决策。',
  reportItems: ['即时掌握实时交易明细', '多维度销售报表', '商品销售排行', '员工业绩统计'],
  inventoryTitle: '一目了然\n库存与商品管理有条理',
  inventoryDesc: '即时库存管理，让你轻松掌握商品状况，避免缺货或积压问题。',
  inventoryItems: ['即时库存同步', '商品批量管理', '库存预警通知', '网店与门店库存整合'],
  ctaTitle: 'ARVIX POS 让品牌再进化！',
  ctaSubtitle: '全球超过 600,000 商家已使用 ARVIX',
}

const en: PosCopy = {
  title: 'Open your omnichannel business',
  subtitle: 'One iPad handles checkout, inventory, members, and reports — everything in one place.',
  cta: 'Start free trial',
  pains: [
    { title: 'Online and offline data siloed?', desc: 'Separate systems mean missed opportunities and no unified view.' },
    { title: 'Manual bookkeeping errors?', desc: 'Handwritten ledgers waste time and hurt operational efficiency.' },
    { title: 'Guessing how the store is doing?', desc: 'Without data, you cannot steer store performance with confidence.' },
  ],
  checkoutTitle: 'One iPad\nruns the whole store',
  checkoutAccent: 'Intuitive checkout that speeds up sales',
  checkoutDesc: 'A simple POS interface cuts wait times and speeds every transaction.',
  checkoutItems: ['Card readers and multi-payment options', 'One-tap discounts / membership', 'Fast receipts and invoices', 'Live transaction details'],
  memberTitle: 'Profile insights\nMembership made easy',
  memberDesc: 'Deep member profiles help you understand buying behavior and lift repurchase.',
  memberItems: ['Quick member enrollment', 'Online and offline purchase history', 'Tiers and member pricing', 'Customer tags and notes'],
  reportTitle: 'Evidence-based\nAutomated analytics',
  reportDesc: 'Auto reports keep store performance visible so decisions stay sharp.',
  reportItems: ['Live transaction details', 'Multi-dimension sales reports', 'Product sales rankings', 'Staff performance stats'],
  inventoryTitle: 'Clear at a glance\nInventory that stays organized',
  inventoryDesc: 'Real-time stock control helps avoid stockouts and overstock.',
  inventoryItems: ['Real-time inventory sync', 'Bulk product management', 'Low-stock alerts', 'Online and store stock unified'],
  ctaTitle: 'ARVIX POS levels up your brand',
  ctaSubtitle: 'Trusted by 600,000+ merchants worldwide',
}

const ko: PosCopy = {
  title: '옴니채널 비즈니스를 여세요',
  subtitle: 'iPad 하나로 결제, 재고, 회원, 리포트까지 — 모든 것을 한곳에서.',
  cta: '무료 체험 시작',
  pains: [
    { title: '온라인·오프라인 데이터가 분리되어 있나요?', desc: '시스템이 나뉘면 기회를 놓치고 통합 뷰가 없습니다.' },
    { title: '수기 장부 오류가 있나요?', desc: '손으로 쓰는 장부는 시간을 낭비하고 운영 효율을 떨어뜨립니다.' },
    { title: '매장 성과를 감으로만 판단하나요?', desc: '데이터 없이는 확신을 가지고 매장 성과를 이끌 수 없습니다.' },
  ],
  checkoutTitle: 'iPad 하나로\n매장 전체를 운영',
  checkoutAccent: '판매를 가속하는 직관적인 결제',
  checkoutDesc: '단순한 POS 인터페이스로 대기 시간을 줄이고 모든 거래를 빠르게.',
  checkoutItems: ['카드 리더와 다양한 결제 옵션', '원탭 할인 / 멤버십', '빠른 영수증과 인보이스', '실시간 거래 상세'],
  memberTitle: '프로필 인사이트\n멤버십을 쉽게',
  memberDesc: '깊이 있는 회원 프로필로 구매 행동을 이해하고 재구매를 높이세요.',
  memberItems: ['빠른 회원 등록', '온라인·오프라인 구매 이력', '등급과 회원 가격', '고객 태그와 메모'],
  reportTitle: '근거 기반\n자동 분석',
  reportDesc: '자동 리포트로 매장 성과를 항상 보이게 해 의사결정을 날카롭게.',
  reportItems: ['실시간 거래 상세', '다차원 판매 리포트', '상품 판매 순위', '직원 성과 통계'],
  inventoryTitle: '한눈에 명확하게\n정리된 재고 관리',
  inventoryDesc: '실시간 재고 관리로 품절과 과잉 재고를 피하세요.',
  inventoryItems: ['실시간 재고 동기화', '상품 일괄 관리', '재고 부족 알림', '온라인·매장 재고 통합'],
  ctaTitle: 'ARVIX POS가 브랜드를 한 단계 끌어올립니다',
  ctaSubtitle: '전 세계 60만+ 판매자가 ARVIX를 신뢰합니다',
}

const ja: PosCopy = {
  title: 'オムニチャネルビジネスを始めよう',
  subtitle: 'iPad 一台でレジ・在庫・会員・レポートまで — すべてをひとつの場所で。',
  cta: '無料トライアルを開始',
  pains: [
    { title: 'オンラインとオフラインのデータが分断？', desc: '別々のシステムでは機会を逃し、統一ビューがありません。' },
    { title: '手書き帳簿のミス？', desc: '手作業の帳簿は時間を浪費し、運営効率を下げます。' },
    { title: '店舗の状況を勘で判断？', desc: 'データがなければ、自信を持って店舗パフォーマンスを導けません。' },
  ],
  checkoutTitle: 'iPad 一台で\n店舗全体を運営',
  checkoutAccent: '販売を加速する直感的なレジ',
  checkoutDesc: 'シンプルな POS 画面で待ち時間を減らし、すべての取引をスピードアップ。',
  checkoutItems: ['カードリーダーと複数決済オプション', 'ワンタップ割引／会員', 'すばやいレシートと請求書', 'リアルタイム取引明細'],
  memberTitle: 'プロフィール洞察\n会員運営をかんたんに',
  memberDesc: '深い会員プロフィールで購買行動を理解し、リピートを高めます。',
  memberItems: ['すばやい会員登録', 'オンライン／オフライン購入履歴', 'ランクと会員価格', '顧客タグとメモ'],
  reportTitle: '根拠に基づく\n自動分析',
  reportDesc: '自動レポートで店舗パフォーマンスを可視化し、意思決定をシャープに。',
  reportItems: ['リアルタイム取引明細', '多次元売上レポート', '商品売上ランキング', 'スタッフ成績統計'],
  inventoryTitle: '一目でわかる\n整理された在庫管理',
  inventoryDesc: 'リアルタイム在庫管理で欠品と過剰在庫を防ぎます。',
  inventoryItems: ['リアルタイム在庫同期', '商品一括管理', '在庫不足アラート', 'オンラインと店舗在庫の統合'],
  ctaTitle: 'ARVIX POS がブランドをレベルアップ',
  ctaSubtitle: '世界中 60 万以上の加盟店が ARVIX を利用',
}

const vi: PosCopy = {
  title: 'Mở doanh nghiệp omnichannel của bạn',
  subtitle: 'Một iPad xử lý thanh toán, tồn kho, hội viên và báo cáo — mọi thứ ở một nơi.',
  cta: 'Bắt đầu dùng thử miễn phí',
  pains: [
    { title: 'Dữ liệu online và offline bị tách?', desc: 'Hệ thống riêng biệt nghĩa là bỏ lỡ cơ hội và không có cái nhìn thống nhất.' },
    { title: 'Sổ sách thủ công hay sai?', desc: 'Sổ tay tốn thời gian và làm giảm hiệu quả vận hành.' },
    { title: 'Đoán mò tình hình cửa hàng?', desc: 'Không có dữ liệu, bạn không thể dẫn dắt hiệu suất cửa hàng với sự tự tin.' },
  ],
  checkoutTitle: 'Một iPad\nvận hành cả cửa hàng',
  checkoutAccent: 'Thanh toán trực quan giúp bán nhanh hơn',
  checkoutDesc: 'Giao diện POS đơn giản rút ngắn thời gian chờ và tăng tốc mọi giao dịch.',
  checkoutItems: ['Đầu đọc thẻ và nhiều tùy chọn thanh toán', 'Giảm giá / hội viên một chạm', 'Hóa đơn và biên lai nhanh', 'Chi tiết giao dịch trực tiếp'],
  memberTitle: 'Thông tin hồ sơ\nHội viên thật dễ',
  memberDesc: 'Hồ sơ hội viên sâu giúp hiểu hành vi mua và tăng mua lại.',
  memberItems: ['Đăng ký hội viên nhanh', 'Lịch sử mua online và offline', 'Hạng và giá hội viên', 'Thẻ và ghi chú khách hàng'],
  reportTitle: 'Dựa trên bằng chứng\nPhân tích tự động',
  reportDesc: 'Báo cáo tự động giữ hiệu suất cửa hàng luôn rõ để quyết định sắc bén.',
  reportItems: ['Chi tiết giao dịch trực tiếp', 'Báo cáo bán đa chiều', 'Xếp hạng bán sản phẩm', 'Thống kê hiệu suất nhân viên'],
  inventoryTitle: 'Rõ ràng trong nháy mắt\nTồn kho luôn ngăn nắp',
  inventoryDesc: 'Kiểm soát tồn kho thời gian thực giúp tránh hết hàng và tồn dư.',
  inventoryItems: ['Đồng bộ tồn kho thời gian thực', 'Quản lý sản phẩm hàng loạt', 'Cảnh báo sắp hết hàng', 'Tồn kho online và cửa hàng thống nhất'],
  ctaTitle: 'ARVIX POS nâng tầm thương hiệu của bạn',
  ctaSubtitle: 'Được hơn 600.000 người bán trên thế giới tin dùng',
}

const es: PosCopy = {
  title: 'Abre tu negocio omnicanal',
  subtitle: 'Un iPad gestiona checkout, inventario, socios e informes — todo en un solo lugar.',
  cta: 'Empieza la prueba gratis',
  pains: [
    { title: '¿Datos online y offline aislados?', desc: 'Sistemas separados significan oportunidades perdidas y sin vista unificada.' },
    { title: '¿Errores de contabilidad manual?', desc: 'Los libros a mano pierden tiempo y dañan la eficiencia operativa.' },
    { title: '¿Adivinando cómo va la tienda?', desc: 'Sin datos no puedes dirigir el rendimiento de la tienda con confianza.' },
  ],
  checkoutTitle: 'Un iPad\ngestiona toda la tienda',
  checkoutAccent: 'Checkout intuitivo que acelera las ventas',
  checkoutDesc: 'Una interfaz POS simple reduce esperas y acelera cada transacción.',
  checkoutItems: ['Lectores de tarjeta y opciones multipago', 'Descuentos / membresía en un toque', 'Recibos y facturas rápidos', 'Detalle de transacciones en vivo'],
  memberTitle: 'Insights de perfil\nMembresía fácil',
  memberDesc: 'Perfiles de socios profundos te ayudan a entender el comportamiento de compra y subir la recompra.',
  memberItems: ['Alta de socios rápida', 'Historial de compra online y offline', 'Niveles y precios de socio', 'Etiquetas y notas de clientes'],
  reportTitle: 'Basado en evidencia\nAnalítica automatizada',
  reportDesc: 'Informes automáticos mantienen visible el rendimiento de la tienda para decisiones agudas.',
  reportItems: ['Detalle de transacciones en vivo', 'Informes de ventas multidimensionales', 'Rankings de ventas de productos', 'Estadísticas de rendimiento del personal'],
  inventoryTitle: 'Claro de un vistazo\nInventario siempre organizado',
  inventoryDesc: 'El control de stock en tiempo real ayuda a evitar quiebres y sobrestock.',
  inventoryItems: ['Sincronización de inventario en tiempo real', 'Gestión masiva de productos', 'Alertas de stock bajo', 'Stock online y de tienda unificado'],
  ctaTitle: 'ARVIX POS eleva tu marca',
  ctaSubtitle: 'Más de 600.000 comercios confían en ARVIX',
}

const pt: PosCopy = {
  title: 'Abra seu negócio omnichannel',
  subtitle: 'Um iPad cuida de checkout, estoque, membros e relatórios — tudo em um só lugar.',
  cta: 'Começar teste grátis',
  pains: [
    { title: 'Dados online e offline isolados?', desc: 'Sistemas separados significam oportunidades perdidas e sem visão unificada.' },
    { title: 'Erros de contabilidade manual?', desc: 'Livros manuscritos desperdiçam tempo e prejudicam a eficiência operacional.' },
    { title: 'Adivinhando como a loja vai?', desc: 'Sem dados, você não conduz o desempenho da loja com confiança.' },
  ],
  checkoutTitle: 'Um iPad\nopera a loja inteira',
  checkoutAccent: 'Checkout intuitivo que acelera as vendas',
  checkoutDesc: 'Uma interface POS simples reduz esperas e acelera cada transação.',
  checkoutItems: ['Leitores de cartão e opções multipagamento', 'Descontos / associação em um toque', 'Recibos e faturas rápidos', 'Detalhes de transação ao vivo'],
  memberTitle: 'Insights de perfil\nAssociação facilitada',
  memberDesc: 'Perfis profundos de membros ajudam a entender o comportamento de compra e elevar a recompra.',
  memberItems: ['Cadastro rápido de membros', 'Histórico de compra online e offline', 'Níveis e preços de membro', 'Tags e notas de clientes'],
  reportTitle: 'Baseado em evidências\nAnalytics automatizado',
  reportDesc: 'Relatórios automáticos mantêm o desempenho da loja visível para decisões afiadas.',
  reportItems: ['Detalhes de transação ao vivo', 'Relatórios de vendas multidimensionais', 'Rankings de vendas de produtos', 'Estatísticas de desempenho da equipe'],
  inventoryTitle: 'Claro de relance\nEstoque sempre organizado',
  inventoryDesc: 'Controle de estoque em tempo real ajuda a evitar rupturas e excesso.',
  inventoryItems: ['Sincronização de estoque em tempo real', 'Gestão em massa de produtos', 'Alertas de estoque baixo', 'Estoque online e da loja unificado'],
  ctaTitle: 'ARVIX POS eleva sua marca',
  ctaSubtitle: 'Mais de 600.000 lojistas confiam na ARVIX',
}

const de: PosCopy = {
  title: 'Starten Sie Ihr Omnichannel-Geschäft',
  subtitle: 'Ein iPad übernimmt Checkout, Bestand, Mitglieder und Reports — alles an einem Ort.',
  cta: 'Kostenlos testen',
  pains: [
    { title: 'Online- und Offline-Daten getrennt?', desc: 'Getrennte Systeme bedeuten verpasste Chancen und keine einheitliche Sicht.' },
    { title: 'Fehler bei manueller Buchhaltung?', desc: 'Handgeschriebene Bücher kosten Zeit und schaden der Betriebseffizienz.' },
    { title: 'Raten, wie der Laden läuft?', desc: 'Ohne Daten steuern Sie die Store-Performance nicht mit Zuversicht.' },
  ],
  checkoutTitle: 'Ein iPad\nführt den ganzen Laden',
  checkoutAccent: 'Intuitiver Checkout, der Verkäufe beschleunigt',
  checkoutDesc: 'Eine einfache POS-Oberfläche verkürzt Wartezeiten und beschleunigt jede Transaktion.',
  checkoutItems: ['Kartenleser und Multi-Zahlungsoptionen', 'Ein-Tipp-Rabatte / Mitgliedschaft', 'Schnelle Belege und Rechnungen', 'Live-Transaktionsdetails'],
  memberTitle: 'Profil-Insights\nMitgliedschaft leicht gemacht',
  memberDesc: 'Tiefe Mitgliederprofile helfen, Kaufverhalten zu verstehen und Wiederkäufe zu steigern.',
  memberItems: ['Schnelle Mitgliederanmeldung', 'Online- und Offline-Kaufhistorie', 'Stufen und Mitgliederpreise', 'Kunden-Tags und Notizen'],
  reportTitle: 'Evidenzbasiert\nAutomatisierte Analytics',
  reportDesc: 'Auto-Reports halten die Store-Performance sichtbar, damit Entscheidungen scharf bleiben.',
  reportItems: ['Live-Transaktionsdetails', 'Mehrdimensionale Verkaufsreports', 'Produktverkaufs-Rankings', 'Mitarbeiter-Performance-Statistiken'],
  inventoryTitle: 'Auf einen Blick klar\nBestand, der organisiert bleibt',
  inventoryDesc: 'Echtzeit-Bestandskontrolle hilft, Ausverkäufe und Überbestand zu vermeiden.',
  inventoryItems: ['Echtzeit-Bestandssynchronisation', 'Massenverwaltung von Produkten', 'Niedrigbestand-Alerts', 'Online- und Ladenbestand vereint'],
  ctaTitle: 'ARVIX POS hebt Ihre Marke an',
  ctaSubtitle: 'Über 600.000 Händler weltweit vertrauen ARVIX',
}

const fr: PosCopy = {
  title: 'Ouvrez votre activité omnicanale',
  subtitle: 'Un iPad gère checkout, stock, membres et rapports — tout en un seul endroit.',
  cta: 'Démarrer l’essai gratuit',
  pains: [
    { title: 'Données online et offline cloisonnées ?', desc: 'Des systèmes séparés signifient des opportunités manquées et aucune vue unifiée.' },
    { title: 'Erreurs de comptabilité manuelle ?', desc: 'Les registres manuscrits font perdre du temps et nuisent à l’efficacité opérationnelle.' },
    { title: 'Deviner comment va le magasin ?', desc: 'Sans données, vous ne dirigez pas la performance du magasin avec confiance.' },
  ],
  checkoutTitle: 'Un iPad\nfait tourner tout le magasin',
  checkoutAccent: 'Checkout intuitif qui accélère les ventes',
  checkoutDesc: 'Une interface POS simple réduit les attentes et accélère chaque transaction.',
  checkoutItems: ['Lecteurs de carte et options multipaiement', 'Remises / adhésion en un geste', 'Reçus et factures rapides', 'Détails de transaction en direct'],
  memberTitle: 'Insights profil\nAdhésion simplifiée',
  memberDesc: 'Des profils membres approfondis aident à comprendre le comportement d’achat et à augmenter le rachat.',
  memberItems: ['Inscription membre rapide', 'Historique d’achat online et offline', 'Niveaux et prix membres', 'Tags et notes clients'],
  reportTitle: 'Fondé sur les preuves\nAnalytique automatisée',
  reportDesc: 'Des rapports auto gardent la performance magasin visible pour des décisions affûtées.',
  reportItems: ['Détails de transaction en direct', 'Rapports de ventes multidimensionnels', 'Classements des ventes produits', 'Stats de performance du personnel'],
  inventoryTitle: 'Clair d’un coup d’œil\nStock toujours organisé',
  inventoryDesc: 'Le contrôle de stock en temps réel aide à éviter les ruptures et le surstock.',
  inventoryItems: ['Sync stock en temps réel', 'Gestion produits en masse', 'Alertes stock bas', 'Stock online et magasin unifié'],
  ctaTitle: 'ARVIX POS fait monter votre marque',
  ctaSubtitle: 'Plus de 600 000 marchands font confiance à ARVIX',
}

const copy: Partial<Record<Locale, PosCopy>> & { 'zh-TW': PosCopy; en: PosCopy } = {
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

export default function PosPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(225, 225, 255) 0%, rgb(169, 255, 241) 50%, rgb(44, 194, 114) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#00142D' }}>{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
            <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.cta}
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80" alt="ARVIX POS" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {c.pains.map(item => (
              <div key={item.title} className="bg-white p-6 rounded-2xl" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <h3 className="font-bold mb-2" style={{ color: '#00142D' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-2 whitespace-pre-line" style={{ color: '#00142D' }}>{c.checkoutTitle}</h2>
            <h2 className="text-2xl font-black mb-4" style={{ color: '#5B5FF0' }}>{c.checkoutAccent}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.checkoutDesc}</p>
            <div className="space-y-3">
              {c.checkoutItems.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80" alt="ARVIX POS checkout" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.memberTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.memberDesc}</p>
            <div className="space-y-3">
              {c.memberItems.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80" alt="ARVIX POS members" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.reportTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.reportDesc}</p>
            <div className="space-y-3">
              {c.reportItems.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80" alt="ARVIX POS reports" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.inventoryTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.inventoryDesc}</p>
            <div className="space-y-3">
              {c.inventoryItems.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80" alt="ARVIX POS inventory" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ background: 'linear-gradient(270.52deg, rgb(0, 79, 209) 0%, rgb(37, 124, 255) 100%)' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.ctaTitle}</h2>
          <p className="text-white mb-8 opacity-80">{c.ctaSubtitle}</p>
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
