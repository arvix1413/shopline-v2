import type { Locale } from './i18n'
import { pickCopy } from './i18n/pageCopy'

export type BillingCopy = {
  title: string
  paid: string
  expired: string
  leftover: string
  popular: string
  payCta: string
  processing: string
  payHint: string
  backStore: string
  viewStore: string
  paidPending: string
  paidOk: string
  cancelled: string
  fail: string
  success: string
  plans: {
    id: string
    name: string
    price: string
    period: string
    desc: string
    features: string[]
    highlight?: boolean
  }[]
}

function plans(
  names: [string, string, string],
  descs: [string, string, string],
  period: string,
  f1: string[],
  f2: string[],
  f3: string[],
): BillingCopy['plans'] {
  return [
    { id: 'starter', name: names[0], price: 'NT$990', period, desc: descs[0], features: f1 },
    { id: 'standard', name: names[1], price: 'NT$2,490', period, desc: descs[1], features: f2, highlight: true },
    { id: 'pro', name: names[2], price: 'NT$4,990', period, desc: descs[2], features: f3 },
  ]
}

const zhTW: BillingCopy = {
  title: '開通 ARVIX 方案',
  paid: '你已完成付款開通，可持續使用完整功能。',
  expired: '試用已結束，選擇方案並刷卡後即可繼續營業。',
  leftover: '試用剩餘 {days} 天',
  popular: '最受歡迎',
  payCta: '刷卡開通方案',
  processing: '處理中…',
  payHint: '將導向安全付款頁完成訂閱。開通後商店即可繼續營業。',
  backStore: '回我的商店',
  viewStore: '查看公開商店',
  paidPending: '付款成功！方案開通中，若狀態未更新請重新整理。',
  paidOk: '付款成功！方案已開通。',
  cancelled: '已取消付款，可稍後再選擇方案。',
  fail: '開通失敗',
  success: '開通成功！你的方案已啟用。',
  plans: plans(
    ['入門方案', '成長方案', '專業方案'],
    ['適合一人創業、剛開始上架', '適合正在衝單的品牌電商', '適合多通路與規模化團隊'],
    '/月',
    ['網路商店', '商品上架', '客人刷卡結帳', '14 天試用後續約'],
    ['入門方案全部功能', '行銷模組', '優先客服', '進階報表'],
    ['成長方案全部功能', '多通路整合', '專屬顧問', 'API 擴充'],
  ),
}

const zhCN: BillingCopy = {
  ...zhTW,
  title: '开通 ARVIX 方案',
  paid: '你已完成付款开通，可继续使用完整功能。',
  expired: '试用已结束，选择方案并刷卡后即可继续营业。',
  leftover: '试用剩余 {days} 天',
  popular: '最受欢迎',
  payCta: '刷卡开通方案',
  processing: '处理中…',
  payHint: '将前往安全付款页完成订阅。开通后商店即可继续营业。',
  backStore: '回我的商店',
  viewStore: '查看公开商店',
  paidPending: '付款成功！方案开通中，若状态未更新请刷新。',
  paidOk: '付款成功！方案已开通。',
  cancelled: '已取消付款，可稍后再选择方案。',
  fail: '开通失败',
  success: '开通成功！你的方案已启用。',
}

const en: BillingCopy = {
  title: 'Activate your ARVIX plan',
  paid: 'Your plan is active. You can keep using the full product.',
  expired: 'Your trial has ended. Choose a plan and pay to keep operating.',
  leftover: '{days} days left in your trial',
  popular: 'Most popular',
  payCta: 'Pay and activate',
  processing: 'Processing…',
  payHint: 'You will be taken to a secure checkout. After activation your store stays open.',
  backStore: 'Back to my store',
  viewStore: 'View public store',
  paidPending: 'Payment succeeded. Activating your plan — refresh if status is slow.',
  paidOk: 'Payment succeeded. Your plan is active.',
  cancelled: 'Checkout cancelled. You can pick a plan later.',
  fail: 'Could not activate',
  success: 'Activated. Your plan is live.',
  plans: plans(
    ['Starter', 'Growth', 'Pro'],
    ['For solo founders just listing products', 'For brands scaling order volume', 'For omnichannel teams'],
    '/mo',
    ['Online store', 'Product listing', 'Card checkout', 'Continue after 14-day trial'],
    ['Everything in Starter', 'Marketing modules', 'Priority support', 'Advanced reports'],
    ['Everything in Growth', 'Omnichannel', 'Dedicated advisor', 'API access'],
  ),
}

const ko: BillingCopy = {
  ...en,
  title: 'ARVIX 요금제 활성화',
  paid: '요금제가 활성화되어 전체 기능을 계속 사용할 수 있습니다.',
  expired: '체험이 종료되었습니다. 요금제를 선택하고 결제하세요.',
  leftover: '체험 {days}일 남음',
  popular: '가장 인기',
  payCta: '결제하고 활성화',
  processing: '처리 중…',
  payHint: '보안 결제 페이지로 이동합니다. 활성화 후 스토어는 계속 운영됩니다.',
  backStore: '내 스토어로',
  viewStore: '공개 스토어 보기',
  paidPending: '결제 성공. 요금제 활성화 중입니다. 상태가 늦으면 새로고침하세요.',
  paidOk: '결제 성공. 요금제가 활성화되었습니다.',
  cancelled: '결제를 취소했습니다. 나중에 요금제를 선택할 수 있습니다.',
  fail: '활성화 실패',
  success: '활성화되었습니다. 요금제가 적용 중입니다.',
  plans: plans(
    ['스타터', '성장', '프로'],
    ['혼자 시작하며 상품을 올리는 경우', '주문이 늘어나는 브랜드', '옴니채널 팀'],
    '/월',
    ['온라인 스토어', '상품 등록', '카드 결제', '14일 체험 후 연장'],
    ['스타터의 모든 기능', '마케팅 모듈', '우선 지원', '고급 리포트'],
    ['성장의 모든 기능', '옴니채널', '전담 어드바이저', 'API'],
  ),
}

const ja: BillingCopy = {
  ...en,
  title: 'ARVIXプランを有効化',
  paid: 'プランは有効です。全機能を継続して使えます。',
  expired: 'トライアルが終了しました。プランを選んで決済してください。',
  leftover: 'トライアル残り {days} 日',
  popular: '一番人気',
  payCta: '決済して有効化',
  processing: '処理中…',
  payHint: '安全な決済ページへ移動します。有効化後もストアは営業できます。',
  backStore: 'マイストアへ',
  viewStore: '公開ストアを見る',
  paidPending: '決済成功。プランを有効化中です。反映が遅い場合は再読み込みしてください。',
  paidOk: '決済成功。プランが有効になりました。',
  cancelled: '決済をキャンセルしました。後からプランを選べます。',
  fail: '有効化に失敗',
  success: '有効化しました。プランが適用されています。',
  plans: plans(
    ['スターター', 'グロース', 'プロ'],
    ['ひとりで商品掲載を始める方向け', '受注が増えているブランド向け', 'オムニチャネルのチーム向け'],
    '/月',
    ['オンラインストア', '商品掲載', 'カード決済', '14日トライアル後の継続'],
    ['スターターの全機能', 'マーケティング', '優先サポート', '高度なレポート'],
    ['グロースの全機能', 'オムニチャネル', '専任アドバイザー', 'API'],
  ),
}

const vi: BillingCopy = {
  ...en,
  title: 'Kích hoạt gói ARVIX',
  paid: 'Gói đã kích hoạt. Bạn tiếp tục dùng đủ tính năng.',
  expired: 'Hết dùng thử. Chọn gói và thanh toán để tiếp tục.',
  leftover: 'Còn {days} ngày dùng thử',
  popular: 'Phổ biến nhất',
  payCta: 'Thanh toán và kích hoạt',
  processing: 'Đang xử lý…',
  payHint: 'Bạn sẽ tới trang thanh toán an toàn. Sau khi kích hoạt cửa hàng vẫn mở.',
  backStore: 'Về cửa hàng của tôi',
  viewStore: 'Xem cửa hàng công khai',
  paidPending: 'Thanh toán thành công. Đang kích hoạt gói — tải lại nếu trạng thái chậm.',
  paidOk: 'Thanh toán thành công. Gói đã kích hoạt.',
  cancelled: 'Đã hủy thanh toán. Bạn có thể chọn gói sau.',
  fail: 'Không kích hoạt được',
  success: 'Đã kích hoạt. Gói đang áp dụng.',
  plans: plans(
    ['Khởi đầu', 'Tăng trưởng', 'Pro'],
    ['Cho người mới bắt đầu đăng bán', 'Cho thương hiệu đang tăng đơn', 'Cho đội ngũ đa kênh'],
    '/tháng',
    ['Cửa hàng online', 'Đăng sản phẩm', 'Thanh toán thẻ', 'Tiếp sau 14 ngày dùng thử'],
    ['Mọi thứ của Khởi đầu', 'Module marketing', 'Hỗ trợ ưu tiên', 'Báo cáo nâng cao'],
    ['Mọi thứ của Tăng trưởng', 'Đa kênh', 'Cố vấn riêng', 'API'],
  ),
}

const es: BillingCopy = {
  ...en,
  title: 'Activa tu plan ARVIX',
  paid: 'Tu plan está activo. Puedes seguir usando el producto completo.',
  expired: 'La prueba terminó. Elige un plan y paga para seguir operando.',
  leftover: 'Quedan {days} días de prueba',
  popular: 'Más popular',
  payCta: 'Pagar y activar',
  processing: 'Procesando…',
  payHint: 'Irás a un pago seguro. Tras activar, tu tienda sigue abierta.',
  backStore: 'Volver a mi tienda',
  viewStore: 'Ver tienda pública',
  paidPending: 'Pago correcto. Activando el plan — actualiza si tarda.',
  paidOk: 'Pago correcto. Tu plan está activo.',
  cancelled: 'Pago cancelado. Puedes elegir un plan después.',
  fail: 'No se pudo activar',
  success: 'Activado. Tu plan está en vigor.',
  plans: plans(
    ['Inicial', 'Crecimiento', 'Pro'],
    ['Para fundadores que empiezan a publicar', 'Para marcas que crecen en pedidos', 'Para equipos omnicanal'],
    '/mes',
    ['Tienda online', 'Publicar productos', 'Pago con tarjeta', 'Continuar tras 14 días de prueba'],
    ['Todo lo de Inicial', 'Módulos de marketing', 'Soporte prioritario', 'Informes avanzados'],
    ['Todo lo de Crecimiento', 'Omnicanal', 'Asesor dedicado', 'API'],
  ),
}

const pt: BillingCopy = {
  ...en,
  title: 'Ative seu plano ARVIX',
  paid: 'Seu plano está ativo. Você continua com o produto completo.',
  expired: 'O teste acabou. Escolha um plano e pague para continuar.',
  leftover: '{days} dias restantes no teste',
  popular: 'Mais popular',
  payCta: 'Pagar e ativar',
  processing: 'Processando…',
  payHint: 'Você irá para um checkout seguro. Depois de ativar, a loja segue aberta.',
  backStore: 'Voltar à minha loja',
  viewStore: 'Ver loja pública',
  paidPending: 'Pagamento ok. Ativando o plano — atualize se o status atrasar.',
  paidOk: 'Pagamento ok. Seu plano está ativo.',
  cancelled: 'Checkout cancelado. Você pode escolher um plano depois.',
  fail: 'Falha ao ativar',
  success: 'Ativado. Seu plano está valendo.',
  plans: plans(
    ['Inicial', 'Crescimento', 'Pro'],
    ['Para quem está começando a listar', 'Para marcas com mais pedidos', 'Para times omnichannel'],
    '/mês',
    ['Loja online', 'Listar produtos', 'Pagamento com cartão', 'Continuar após 14 dias de teste'],
    ['Tudo do Inicial', 'Módulos de marketing', 'Suporte prioritário', 'Relatórios avançados'],
    ['Tudo do Crescimento', 'Omnichannel', 'Consultor dedicado', 'API'],
  ),
}

const de: BillingCopy = {
  ...en,
  title: 'ARVIX-Tarif aktivieren',
  paid: 'Ihr Tarif ist aktiv. Sie nutzen das volle Produkt weiter.',
  expired: 'Die Testphase ist vorbei. Wählen Sie einen Tarif und zahlen Sie.',
  leftover: 'Noch {days} Tage Testphase',
  popular: 'Beliebteste',
  payCta: 'Zahlen und aktivieren',
  processing: 'Wird verarbeitet…',
  payHint: 'Sie gelangen zum sicheren Checkout. Nach der Aktivierung bleibt der Shop offen.',
  backStore: 'Zurück zu meinem Shop',
  viewStore: 'Öffentlichen Shop ansehen',
  paidPending: 'Zahlung erfolgreich. Tarif wird aktiviert — bei Verzögerung neu laden.',
  paidOk: 'Zahlung erfolgreich. Ihr Tarif ist aktiv.',
  cancelled: 'Checkout abgebrochen. Sie können später einen Tarif wählen.',
  fail: 'Aktivierung fehlgeschlagen',
  success: 'Aktiviert. Ihr Tarif gilt.',
  plans: plans(
    ['Starter', 'Wachstum', 'Pro'],
    ['Für Solos, die Produkte listen', 'Für Marken mit mehr Bestellungen', 'Für Omnichannel-Teams'],
    '/Mon.',
    ['Online-Shop', 'Produktlisting', 'Kartenzahlung', 'Weiter nach 14-Tage-Test'],
    ['Alles aus Starter', 'Marketing-Module', 'Priorisierter Support', 'Erweiterte Reports'],
    ['Alles aus Wachstum', 'Omnichannel', 'Fester Berater', 'API'],
  ),
}

const fr: BillingCopy = {
  ...en,
  title: 'Activer votre offre ARVIX',
  paid: 'Votre offre est active. Vous gardez le produit complet.',
  expired: 'L’essai est terminé. Choisissez une offre et payez pour continuer.',
  leftover: 'Il reste {days} jours d’essai',
  popular: 'Le plus populaire',
  payCta: 'Payer et activer',
  processing: 'Traitement…',
  payHint: 'Vous serez redirigé vers un paiement sécurisé. Après activation, la boutique reste ouverte.',
  backStore: 'Retour à ma boutique',
  viewStore: 'Voir la boutique publique',
  paidPending: 'Paiement réussi. Activation en cours — actualisez si le statut tarde.',
  paidOk: 'Paiement réussi. Votre offre est active.',
  cancelled: 'Paiement annulé. Vous pourrez choisir une offre plus tard.',
  fail: 'Échec de l’activation',
  success: 'Activé. Votre offre est en vigueur.',
  plans: plans(
    ['Starter', 'Croissance', 'Pro'],
    ['Pour lister vos premiers produits', 'Pour les marques qui montent en commandes', 'Pour les équipes omnicanales'],
    '/mois',
    ['Boutique en ligne', 'Mise en ligne produits', 'Paiement carte', 'Continuer après 14 jours d’essai'],
    ['Tout Starter', 'Modules marketing', 'Support prioritaire', 'Rapports avancés'],
    ['Tout Croissance', 'Omnicanal', 'Conseiller dédié', 'API'],
  ),
}

export function getBillingCopy(locale: Locale): BillingCopy {
  return pickCopy(locale, { 'zh-TW': zhTW, 'zh-CN': zhCN, en, ko, ja, vi, es, pt, de, fr })
}
