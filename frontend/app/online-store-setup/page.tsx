'use client'

import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type SetupCopy = {
  title: string
  subtitle: string
  steps: { num: string; title: string; items: string[] }[]
  doneTitle: string
  cta: string
}

const zhTW: SetupCopy = {
  title: '5 個步驟\n輕鬆建立你的網路商店',
  subtitle: '想架設品牌電商網站該怎麼開始？ARVIX 為你整理開店關鍵 5 大步驟，助你快速上線開賣！',
  steps: [
    { num: '1', title: '建立品牌網站商店', items: ['設定商店名稱、品牌標誌 ( Logo )', '在 ARVIX 後台申請專屬的獨有網址'] },
    { num: '2', title: '打造獨特品牌風格', items: ['自由選擇版型，挑選符合品牌調性的設計主題', '開始建置頁面，透過拖曳方式完成頁面編排'] },
    { num: '3', title: '設定物流送貨選項', items: ['支援宅配；台灣出貨商店可開通 7-11 超商取貨', '設定運費規則，依重量、金額或地區彈性設定'] },
    { num: '4', title: '制定金流收款方式', items: ['開通信用卡結帳', '台灣出貨商店可再串接 7-11 貨到付款'] },
    { num: '5', title: '上傳商品並建立分類', items: ['新增商品資訊、圖片與價格，設定商品規格', '建立商品分類，讓顧客輕鬆找到想要的商品'] },
  ],
  doneTitle: '大功告成！ 立即開始你的網路生意',
  cta: '立即免費試用',
}

const zhCN: SetupCopy = {
  title: '5 个步骤\n轻松建立你的网络商店',
  subtitle: '想架设品牌电商网站该怎么开始？ARVIX 为你整理开店关键 5 大步骤，助你快速上线开卖！',
  steps: [
    { num: '1', title: '建立品牌网站商店', items: ['设定商店名称、品牌标志 ( Logo )', '在 ARVIX 后台申请专属的独有网址'] },
    { num: '2', title: '打造独特品牌风格', items: ['自由选择版型，挑选符合品牌调性的设计主题', '开始建置页面，透过拖曳方式完成页面编排'] },
    { num: '3', title: '设定物流送货选项', items: ['支持宅配出货', '设定运费规则，依重量、金额或地区弹性设定'] },
    { num: '4', title: '制定金流收款方式', items: ['开通信用卡结账', '安全稳定的线上收款体验'] },
    { num: '5', title: '上传商品并建立分类', items: ['新增商品信息、图片与价格，设定商品规格', '建立商品分类，让顾客轻松找到想要的商品'] },
  ],
  doneTitle: '大功告成！立即开始你的网络生意',
  cta: '立即免费试用',
}

const en: SetupCopy = {
  title: '5 steps\nLaunch your online store with ease',
  subtitle: 'Not sure where to start? ARVIX outlines five key steps to go live fast.',
  steps: [
    { num: '1', title: 'Create your brand store', items: ['Set store name and logo', 'Request a unique store URL in ARVIX admin'] },
    { num: '2', title: 'Define your brand look', items: ['Pick a theme that matches your brand', 'Build pages with drag-and-drop'] },
    { num: '3', title: 'Configure shipping', items: ['Home delivery is supported; local pickup depends on store setup', 'Set flexible shipping rules by weight, amount, or region'] },
    { num: '4', title: 'Set up payments', items: ['Enable card checkout', 'Secure online payment experience'] },
    { num: '5', title: 'Upload products & categories', items: ['Add product info, images, prices, and variants', 'Create categories so shoppers find products easily'] },
  ],
  doneTitle: 'You’re ready — start selling online',
  cta: 'Start free trial',
}

const ko: SetupCopy = {
  title: '5단계로\n온라인 스토어를 쉽게 시작하세요',
  subtitle: '어디서 시작할지 모르겠나요? ARVIX가 빠른 오픈을 위한 5가지 핵심 단계를 정리했습니다.',
  steps: [
    { num: '1', title: '브랜드 스토어 만들기', items: ['스토어 이름과 로고 설정', 'ARVIX 관리자에서 고유 URL 신청'] },
    { num: '2', title: '브랜드 룩 정의하기', items: ['브랜드에 맞는 테마 선택', '드래그 앤 드롭으로 페이지 구성'] },
    { num: '3', title: '배송 설정', items: ['택배 지원; 추가 픽업은 스토어 설정에 따름', '무게·금액·지역별 배송비 규칙 설정'] },
    { num: '4', title: '결제 설정', items: ['카드 결제 활성화', '안전한 온라인 결제 경험'] },
    { num: '5', title: '상품·카테고리 등록', items: ['상품 정보·이미지·가격·옵션 추가', '고객이 찾기 쉬운 카테고리 구성'] },
  ],
  doneTitle: '준비 완료 — 지금 바로 판매를 시작하세요',
  cta: '무료 체험 시작',
}

const ja: SetupCopy = {
  title: '5 ステップで\nオンラインストアをかんたん開設',
  subtitle: '何から始めればいいか迷ったら。ARVIX が迅速ローンチの 5 つの要点をまとめました。',
  steps: [
    { num: '1', title: 'ブランドストアを作成', items: ['店舗名とロゴを設定', 'ARVIX 管理画面で専用 URL を申請'] },
    { num: '2', title: 'ブランドの見た目を決める', items: ['ブランドに合うテーマを選ぶ', 'ドラッグ＆ドロップでページを構築'] },
    { num: '3', title: '配送を設定', items: ['宅配に対応。追加の受け取りは店舗設定による', '重量・金額・地域で送料ルールを設定'] },
    { num: '4', title: '決済を設定', items: ['カード決済を有効化', '安全なオンライン決済体験'] },
    { num: '5', title: '商品とカテゴリを登録', items: ['商品情報・画像・価格・バリエーションを追加', '見つけやすいカテゴリを作成'] },
  ],
  doneTitle: '準備完了 — すぐに販売を始めましょう',
  cta: '無料トライアルを開始',
}

const vi: SetupCopy = {
  title: '5 bước\nMở cửa hàng online dễ dàng',
  subtitle: 'Chưa biết bắt đầu từ đâu? ARVIX tóm tắt 5 bước then chốt để lên sóng nhanh.',
  steps: [
    { num: '1', title: 'Tạo cửa hàng thương hiệu', items: ['Đặt tên cửa hàng và logo', 'Xin URL riêng trong admin ARVIX'] },
    { num: '2', title: 'Định hình diện mạo thương hiệu', items: ['Chọn theme phù hợp thương hiệu', 'Dựng trang bằng kéo-thả'] },
    { num: '3', title: 'Cấu hình vận chuyển', items: ['Hỗ trợ giao tận nhà; nhận hàng thêm tùy cửa hàng', 'Đặt phí ship theo cân nặng, giá trị hoặc khu vực'] },
    { num: '4', title: 'Thiết lập thanh toán', items: ['Bật thanh toán thẻ', 'Trải nghiệm thanh toán online an toàn'] },
    { num: '5', title: 'Đăng sản phẩm & danh mục', items: ['Thêm thông tin, ảnh, giá và biến thể', 'Tạo danh mục để khách dễ tìm'] },
  ],
  doneTitle: 'Xong rồi — bắt đầu bán online',
  cta: 'Bắt đầu dùng thử miễn phí',
}

const es: SetupCopy = {
  title: '5 pasos\nLanza tu tienda online con facilidad',
  subtitle: '¿No sabes por dónde empezar? ARVIX resume cinco pasos clave para salir rápido.',
  steps: [
    { num: '1', title: 'Crea tu tienda de marca', items: ['Define nombre y logo', 'Solicita una URL única en el admin de ARVIX'] },
    { num: '2', title: 'Define tu look de marca', items: ['Elige un tema acorde a tu marca', 'Construye páginas con arrastrar y soltar'] },
    { num: '3', title: 'Configura envíos', items: ['Entrega a domicilio; otras recogidas según la tienda', 'Reglas de envío por peso, importe o región'] },
    { num: '4', title: 'Configura pagos', items: ['Activa el pago con tarjeta', 'Experiencia de pago online segura'] },
    { num: '5', title: 'Sube productos y categorías', items: ['Añade info, imágenes, precios y variantes', 'Crea categorías para que encuentren productos'] },
  ],
  doneTitle: 'Listo — empieza a vender online',
  cta: 'Empieza la prueba gratis',
}

const pt: SetupCopy = {
  title: '5 passos\nLance sua loja online com facilidade',
  subtitle: 'Não sabe por onde começar? A ARVIX resume cinco passos-chave para ir ao ar rápido.',
  steps: [
    { num: '1', title: 'Crie sua loja de marca', items: ['Defina nome e logo', 'Solicite uma URL única no admin ARVIX'] },
    { num: '2', title: 'Defina o visual da marca', items: ['Escolha um tema alinhado à marca', 'Monte páginas com arrastar e soltar'] },
    { num: '3', title: 'Configure frete', items: ['Entrega em domicílio; outras retiradas conforme a loja', 'Regras de frete por peso, valor ou região'] },
    { num: '4', title: 'Configure pagamentos', items: ['Ative checkout com cartão', 'Experiência de pagamento online segura'] },
    { num: '5', title: 'Envie produtos e categorias', items: ['Adicione info, imagens, preços e variantes', 'Crie categorias para facilitar a busca'] },
  ],
  doneTitle: 'Pronto — comece a vender online',
  cta: 'Começar teste grátis',
}

const de: SetupCopy = {
  title: '5 Schritte\nOnline-Shop leicht starten',
  subtitle: 'Unsicher, wo Sie starten sollen? ARVIX fasst fünf Schlüssel-Schritte für den schnellen Launch zusammen.',
  steps: [
    { num: '1', title: 'Markenshop anlegen', items: ['Shopname und Logo festlegen', 'Eindeutige URL im ARVIX-Admin beantragen'] },
    { num: '2', title: 'Markenauftritt definieren', items: ['Passendes Theme wählen', 'Seiten per Drag-and-drop bauen'] },
    { num: '3', title: 'Versand konfigurieren', items: ['Lieferung nach Hause; weitere Abholung je nach Shop', 'Versandregeln nach Gewicht, Betrag oder Region'] },
    { num: '4', title: 'Zahlungen einrichten', items: ['Kartencheckout aktivieren', 'Sicheres Online-Zahlungserlebnis'] },
    { num: '5', title: 'Produkte & Kategorien hochladen', items: ['Infos, Bilder, Preise und Varianten hinzufügen', 'Kategorien für leichte Produktsuche anlegen'] },
  ],
  doneTitle: 'Fertig — jetzt online verkaufen',
  cta: 'Kostenlos testen',
}

const fr: SetupCopy = {
  title: '5 étapes\nLancez votre boutique en ligne facilement',
  subtitle: 'Vous ne savez pas par où commencer ? ARVIX résume cinq étapes clés pour publier vite.',
  steps: [
    { num: '1', title: 'Créez votre boutique de marque', items: ['Définissez le nom et le logo', 'Demandez une URL unique dans l’admin ARVIX'] },
    { num: '2', title: 'Définissez le look de marque', items: ['Choisissez un thème adapté', 'Construisez des pages en glisser-déposer'] },
    { num: '3', title: 'Configurez la livraison', items: ['Livraison à domicile ; autres retraits selon la boutique', 'Règles de frais selon poids, montant ou région'] },
    { num: '4', title: 'Configurez les paiements', items: ['Activez le paiement par carte', 'Expérience de paiement en ligne sécurisée'] },
    { num: '5', title: 'Ajoutez produits et catégories', items: ['Ajoutez infos, images, prix et variantes', 'Créez des catégories pour faciliter la recherche'] },
  ],
  doneTitle: 'C’est prêt — commencez à vendre en ligne',
  cta: 'Démarrer l’essai gratuit',
}

const copy: Partial<Record<Locale, SetupCopy>> & { 'zh-TW': SetupCopy; en: SetupCopy } = {
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

export default function OnlineStoreSetupPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EEF0FF 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6 whitespace-pre-line" style={{ color: '#00142D' }}>{c.title}</h1>
          <p className="text-lg" style={{ color: '#687280' }}>{c.subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            {c.steps.map((step) => (
              <div key={step.num} className="flex gap-6 p-8 rounded-2xl" style={{ backgroundColor: '#F4F7FC' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-xl shrink-0" style={{ backgroundColor: '#5B5FF0' }}>
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#00142D' }}>STEP. {step.num} {step.title}</h3>
                  <ul className="space-y-2">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#354253' }}>
                        <span style={{ color: '#5B5FF0' }}>→</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.doneTitle}</h2>
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
