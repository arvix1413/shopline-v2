'use client'

import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type ChangelogCopy = {
  title: string
  subtitle: string
  listTitle: string
  updates: { date: string; version: string; title: string; desc: string; highlight?: boolean }[]
  ctaTitle: string
  ctaSubtitle: string
  cta: string
}

const zhTW: ChangelogCopy = {
  title: '產品最新動態',
  subtitle: '持續進化的 ARVIX 平台，每月帶來全新功能與優化，助你掌握零售先機',
  listTitle: '產品更新紀錄',
  updates: [
    { date: '2024 H1', version: '產品發表大會', title: '2024 H1 產品發表大會', desc: '全新 AI 洞察功能、Smart OMO 升級、社群購物全面強化，助商家迎戰新零售時代。', highlight: true },
    { date: '2025-03', version: 'v3.5', title: 'AI 洞察策略上線', desc: 'Shoplytics 新增 AI 自動分析功能，提供可執行的行銷建議，讓數據驅動決策更簡單。' },
    { date: '2025-02', version: 'v3.4', title: '網紅團購模組升級', desc: '新增合作夥伴成效中心，快速計算分潤金額，一鍵管理所有網紅合作。' },
    { date: '2025-01', version: 'v3.3', title: 'Smart OMO 全新改版', desc: '會員導購工具介面全面升級，操作更直覺，線上線下整合更流暢。' },
    { date: '2024-12', version: 'v3.2', title: 'ARVIX Payments 升級', desc: '強化信用卡結帳體驗與交易穩定度，提升結帳轉換率。' },
    { date: '2024-11', version: 'v3.1', title: 'YouTube Shopping 整合', desc: '直播電商玩法再升級，導入 YouTube Shopping 功能，提供 API 技術串接。' },
    { date: '2024-10', version: 'v3.0', title: '擴充功能商店上線', desc: '全台首推「一鍵訂閱」夥伴擴充功能，開放 API 串接，打造電商界最強擴充功能商店。' },
    { date: '2024-09', version: 'v2.9', title: 'Shopper App 全面升級', desc: '品牌 App 新增個人化推薦、會員積點兌換、推播通知等功能，強化會員黏著度。' },
  ],
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  ctaSubtitle: '有疑問嗎？我們的團隊隨時為您解答',
  cta: '立即免費試用',
}

const zhCN: ChangelogCopy = {
  title: '产品最新动态',
  subtitle: '持续进化的 ARVIX 平台，每月带来全新功能与优化，助你掌握零售先机',
  listTitle: '产品更新纪录',
  updates: [
    { date: '2024 H1', version: '产品发表大会', title: '2024 H1 产品发表大会', desc: '全新 AI 洞察功能、Smart OMO 升级、社群购物全面强化，助商家迎战新零售时代。', highlight: true },
    { date: '2025-03', version: 'v3.5', title: 'AI 洞察策略上线', desc: 'Shoplytics 新增 AI 自动分析功能，提供可执行的营销建议，让数据驱动决策更简单。' },
    { date: '2025-02', version: 'v3.4', title: '网红团购模块升级', desc: '新增合作伙伴成效中心，快速计算分润金额，一键管理所有网红合作。' },
    { date: '2025-01', version: 'v3.3', title: 'Smart OMO 全新改版', desc: '会员导购工具界面全面升级，操作更直觉，线上线下整合更流畅。' },
    { date: '2024-12', version: 'v3.2', title: 'ARVIX Payments 升级', desc: '强化信用卡结账体验与交易稳定度，提升结账转化率。' },
    { date: '2024-11', version: 'v3.1', title: 'YouTube Shopping 整合', desc: '直播电商玩法再升级，导入 YouTube Shopping 功能，提供 API 技术对接。' },
    { date: '2024-10', version: 'v3.0', title: '扩展功能商店上线', desc: '全台首推「一键订阅」伙伴扩展功能，开放 API 对接，打造电商界最强扩展功能商店。' },
    { date: '2024-09', version: 'v2.9', title: 'Shopper App 全面升级', desc: '品牌 App 新增个性化推荐、会员积分兑换、推播通知等功能，强化会员粘着度。' },
  ],
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  ctaSubtitle: '有疑问吗？我们的团队随时为您解答',
  cta: '立即免费试用',
}

const en: ChangelogCopy = {
  title: 'Product updates',
  subtitle: 'ARVIX ships new features and improvements every month so you stay ahead in retail',
  listTitle: 'Release notes',
  updates: [
    { date: '2024 H1', version: 'Product launch', title: '2024 H1 product launch', desc: 'New AI insights, Smart OMO upgrades, and stronger social commerce for the new retail era.', highlight: true },
    { date: '2025-03', version: 'v3.5', title: 'AI insight strategies', desc: 'Shoplytics adds AI analysis with actionable marketing recommendations.' },
    { date: '2025-02', version: 'v3.4', title: 'Influencer group-buy upgrade', desc: 'Partner performance hub calculates commissions and manages collaborations in one place.' },
    { date: '2025-01', version: 'v3.3', title: 'Smart OMO redesign', desc: 'Member shopping tools get a clearer UI and smoother online-offline flows.' },
    { date: '2024-12', version: 'v3.2', title: 'ARVIX Payments upgrade', desc: 'Improved card checkout reliability and conversion.' },
    { date: '2024-11', version: 'v3.1', title: 'YouTube Shopping', desc: 'Live commerce expands with YouTube Shopping and API integrations.' },
    { date: '2024-10', version: 'v3.0', title: 'App store launch', desc: 'One-click partner apps and open APIs for the strongest ecommerce extension store.' },
    { date: '2024-09', version: 'v2.9', title: 'Shopper App upgrade', desc: 'Personalized recommendations, points redemption, and push notifications for stronger loyalty.' },
  ],
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  ctaSubtitle: 'Questions? Our team is ready to help',
  cta: 'Start free trial',
}

const ko: ChangelogCopy = {
  title: '제품 업데이트',
  subtitle: 'ARVIX는 매월 새로운 기능과 개선을 출시해 리테일에서 앞서 나가도록 돕습니다',
  listTitle: '릴리스 노트',
  updates: [
    { date: '2024 H1', version: '제품 발표', title: '2024 H1 제품 발표', desc: '새로운 AI 인사이트, Smart OMO 업그레이드, 강화된 소셜 커머스로 뉴 리테일 시대를 준비하세요.', highlight: true },
    { date: '2025-03', version: 'v3.5', title: 'AI 인사이트 전략', desc: 'Shoplytics에 실행 가능한 마케팅 추천을 제공하는 AI 분석이 추가되었습니다.' },
    { date: '2025-02', version: 'v3.4', title: '인플루언서 공동구매 업그레이드', desc: '파트너 성과 허브에서 수수료 계산과 협업 관리를 한곳에서 처리합니다.' },
    { date: '2025-01', version: 'v3.3', title: 'Smart OMO 리디자인', desc: '회원 쇼핑 도구 UI가 더 명확해지고 온·오프라인 흐름이 더 매끄러워졌습니다.' },
    { date: '2024-12', version: 'v3.2', title: 'ARVIX Payments 업그레이드', desc: '카드 결제 안정성과 전환율을 개선했습니다.' },
    { date: '2024-11', version: 'v3.1', title: 'YouTube Shopping', desc: '라이브 커머스가 YouTube Shopping과 API 연동으로 확장됩니다.' },
    { date: '2024-10', version: 'v3.0', title: '앱 스토어 출시', desc: '원클릭 파트너 앱과 오픈 API로 강력한 이커머스 확장 스토어를 제공합니다.' },
    { date: '2024-09', version: 'v2.9', title: 'Shopper App 업그레이드', desc: '개인화 추천, 포인트 교환, 푸시 알림으로 충성도를 강화합니다.' },
  ],
  ctaTitle: '전 세계 60만+ 판매자가 ARVIX를 신뢰합니다',
  ctaSubtitle: '궁금한 점이 있으신가요? 팀이 도와드릴게요',
  cta: '무료 체험 시작',
}

const ja: ChangelogCopy = {
  title: '製品アップデート',
  subtitle: 'ARVIX は毎月新機能と改善を届け、リテールで先を行くお手伝いをします',
  listTitle: 'リリースノート',
  updates: [
    { date: '2024 H1', version: '製品発表', title: '2024 H1 製品発表', desc: '新しい AI インサイト、Smart OMO の強化、ソーシャルコマースの拡充で新リテール時代へ。', highlight: true },
    { date: '2025-03', version: 'v3.5', title: 'AI インサイト戦略', desc: 'Shoplytics に実行可能なマーケティング提案付きの AI 分析を追加。' },
    { date: '2025-02', version: 'v3.4', title: 'インフルエンサーグループ購入の強化', desc: 'パートナー成果ハブで手数料計算とコラボ管理を一元化。' },
    { date: '2025-01', version: 'v3.3', title: 'Smart OMO リデザイン', desc: '会員ショッピングツールの UI がより分かりやすく、オンライン・オフラインの流れもスムーズに。' },
    { date: '2024-12', version: 'v3.2', title: 'ARVIX Payments アップグレード', desc: 'カード決済の安定性とコンバージョンを改善。' },
    { date: '2024-11', version: 'v3.1', title: 'YouTube Shopping', desc: 'ライブコマースが YouTube Shopping と API 連携で拡大。' },
    { date: '2024-10', version: 'v3.0', title: 'アプリストア公開', desc: 'ワンクリックのパートナーアプリとオープン API で強力な拡張機能ストアを提供。' },
    { date: '2024-09', version: 'v2.9', title: 'Shopper App アップグレード', desc: 'パーソナライズ推薦、ポイント交換、プッシュ通知でロイヤルティを強化。' },
  ],
  ctaTitle: '世界中 60 万以上の加盟店が ARVIX を利用',
  ctaSubtitle: 'ご質問はありますか？チームがサポートします',
  cta: '無料トライアルを開始',
}

const vi: ChangelogCopy = {
  title: 'Cập nhật sản phẩm',
  subtitle: 'ARVIX ra mắt tính năng và cải tiến mỗi tháng để bạn dẫn trước trong bán lẻ',
  listTitle: 'Ghi chú phát hành',
  updates: [
    { date: '2024 H1', version: 'Ra mắt sản phẩm', title: 'Ra mắt sản phẩm 2024 H1', desc: 'Insight AI mới, nâng cấp Smart OMO và thương mại xã hội mạnh hơn cho kỷ nguyên bán lẻ mới.', highlight: true },
    { date: '2025-03', version: 'v3.5', title: 'Chiến lược insight AI', desc: 'Shoplytics thêm phân tích AI kèm đề xuất marketing có thể hành động.' },
    { date: '2025-02', version: 'v3.4', title: 'Nâng cấp mua nhóm influencer', desc: 'Trung tâm hiệu suất đối tác tính hoa hồng và quản lý hợp tác tại một nơi.' },
    { date: '2025-01', version: 'v3.3', title: 'Thiết kế lại Smart OMO', desc: 'Công cụ mua sắm hội viên có UI rõ hơn và luồng online-offline mượt hơn.' },
    { date: '2024-12', version: 'v3.2', title: 'Nâng cấp ARVIX Payments', desc: 'Cải thiện độ ổn định và chuyển đổi của thanh toán thẻ.' },
    { date: '2024-11', version: 'v3.1', title: 'YouTube Shopping', desc: 'Live commerce mở rộng với YouTube Shopping và tích hợp API.' },
    { date: '2024-10', version: 'v3.0', title: 'Ra mắt app store', desc: 'App đối tác một cú nhấp và API mở cho cửa hàng mở rộng ecommerce mạnh mẽ.' },
    { date: '2024-09', version: 'v2.9', title: 'Nâng cấp Shopper App', desc: 'Gợi ý cá nhân hóa, đổi điểm và push notification để tăng trung thành.' },
  ],
  ctaTitle: 'Được hơn 600.000 người bán trên thế giới tin dùng',
  ctaSubtitle: 'Có câu hỏi? Đội ngũ sẵn sàng hỗ trợ',
  cta: 'Bắt đầu dùng thử miễn phí',
}

const es: ChangelogCopy = {
  title: 'Actualizaciones del producto',
  subtitle: 'ARVIX lanza funciones y mejoras cada mes para que te mantengas adelante en retail',
  listTitle: 'Notas de la versión',
  updates: [
    { date: '2024 H1', version: 'Lanzamiento', title: 'Lanzamiento de producto 2024 H1', desc: 'Nuevos insights de IA, mejoras de Smart OMO y social commerce más fuerte para la nueva era retail.', highlight: true },
    { date: '2025-03', version: 'v3.5', title: 'Estrategias de insight con IA', desc: 'Shoplytics añade análisis con IA y recomendaciones de marketing accionables.' },
    { date: '2025-02', version: 'v3.4', title: 'Mejora de compra grupal con influencers', desc: 'El hub de rendimiento de partners calcula comisiones y gestiona colaboraciones en un solo lugar.' },
    { date: '2025-01', version: 'v3.3', title: 'Rediseño de Smart OMO', desc: 'Las herramientas de compra para miembros tienen una UI más clara y flujos online-offline más fluidos.' },
    { date: '2024-12', version: 'v3.2', title: 'Mejora de ARVIX Payments', desc: 'Mayor fiabilidad y conversión del pago con tarjeta.' },
    { date: '2024-11', version: 'v3.1', title: 'YouTube Shopping', desc: 'El live commerce se amplía con YouTube Shopping e integraciones API.' },
    { date: '2024-10', version: 'v3.0', title: 'Lanzamiento de la app store', desc: 'Apps de partners con un clic y APIs abiertas para la extensión ecommerce más potente.' },
    { date: '2024-09', version: 'v2.9', title: 'Mejora de Shopper App', desc: 'Recomendaciones personalizadas, canje de puntos y push para mayor fidelidad.' },
  ],
  ctaTitle: 'Más de 600.000 comercios confían en ARVIX',
  ctaSubtitle: '¿Preguntas? Nuestro equipo está listo para ayudar',
  cta: 'Empieza la prueba gratis',
}

const pt: ChangelogCopy = {
  title: 'Atualizações do produto',
  subtitle: 'A ARVIX lança novos recursos e melhorias todo mês para você ficar à frente no varejo',
  listTitle: 'Notas de versão',
  updates: [
    { date: '2024 H1', version: 'Lançamento', title: 'Lançamento de produto 2024 H1', desc: 'Novos insights de IA, upgrades do Smart OMO e social commerce mais forte para a nova era do varejo.', highlight: true },
    { date: '2025-03', version: 'v3.5', title: 'Estratégias de insight com IA', desc: 'O Shoplytics adiciona análise com IA e recomendações de marketing acionáveis.' },
    { date: '2025-02', version: 'v3.4', title: 'Upgrade de compra em grupo com influencers', desc: 'O hub de desempenho de parceiros calcula comissões e gerencia colaborações em um só lugar.' },
    { date: '2025-01', version: 'v3.3', title: 'Redesign do Smart OMO', desc: 'Ferramentas de compra para membros com UI mais clara e fluxos online-offline mais fluidos.' },
    { date: '2024-12', version: 'v3.2', title: 'Upgrade do ARVIX Payments', desc: 'Maior confiabilidade e conversão do checkout com cartão.' },
    { date: '2024-11', version: 'v3.1', title: 'YouTube Shopping', desc: 'O live commerce se expande com YouTube Shopping e integrações de API.' },
    { date: '2024-10', version: 'v3.0', title: 'Lançamento da app store', desc: 'Apps de parceiros com um clique e APIs abertas para a extensão de ecommerce mais forte.' },
    { date: '2024-09', version: 'v2.9', title: 'Upgrade do Shopper App', desc: 'Recomendações personalizadas, resgate de pontos e push para mais fidelidade.' },
  ],
  ctaTitle: 'Mais de 600.000 lojistas confiam na ARVIX',
  ctaSubtitle: 'Dúvidas? Nossa equipe está pronta para ajudar',
  cta: 'Começar teste grátis',
}

const de: ChangelogCopy = {
  title: 'Produkt-Updates',
  subtitle: 'ARVIX liefert jeden Monat neue Funktionen und Verbesserungen, damit Sie im Retail voraus sind',
  listTitle: 'Release Notes',
  updates: [
    { date: '2024 H1', version: 'Produkteinführung', title: 'Produkteinführung 2024 H1', desc: 'Neue KI-Insights, Smart-OMO-Upgrades und stärkerer Social Commerce für die neue Retail-Ära.', highlight: true },
    { date: '2025-03', version: 'v3.5', title: 'KI-Insight-Strategien', desc: 'Shoplytics ergänzt KI-Analyse mit umsetzbaren Marketing-Empfehlungen.' },
    { date: '2025-02', version: 'v3.4', title: 'Influencer-Gruppenkauf-Upgrade', desc: 'Partner-Performance-Hub berechnet Provisionen und verwaltet Kooperationen an einem Ort.' },
    { date: '2025-01', version: 'v3.3', title: 'Smart-OMO-Redesign', desc: 'Mitglieder-Shopping-Tools mit klarerer UI und flüssigeren Online-Offline-Abläufen.' },
    { date: '2024-12', version: 'v3.2', title: 'ARVIX-Payments-Upgrade', desc: 'Bessere Zuverlässigkeit und Conversion beim Kartencheckout.' },
    { date: '2024-11', version: 'v3.1', title: 'YouTube Shopping', desc: 'Live Commerce erweitert sich mit YouTube Shopping und API-Integrationen.' },
    { date: '2024-10', version: 'v3.0', title: 'App-Store-Launch', desc: 'Partner-Apps mit einem Klick und offene APIs für den stärksten Ecommerce-Extension-Store.' },
    { date: '2024-09', version: 'v2.9', title: 'Shopper-App-Upgrade', desc: 'Personalisierte Empfehlungen, Punkte-Einlösung und Push-Benachrichtigungen für stärkere Loyalität.' },
  ],
  ctaTitle: 'Über 600.000 Händler weltweit vertrauen ARVIX',
  ctaSubtitle: 'Fragen? Unser Team hilft gerne',
  cta: 'Kostenlos testen',
}

const fr: ChangelogCopy = {
  title: 'Mises à jour produit',
  subtitle: 'ARVIX livre chaque mois de nouvelles fonctions et améliorations pour rester en avance dans le retail',
  listTitle: 'Notes de version',
  updates: [
    { date: '2024 H1', version: 'Lancement produit', title: 'Lancement produit 2024 H1', desc: 'Nouveaux insights IA, upgrades Smart OMO et social commerce renforcé pour la nouvelle ère retail.', highlight: true },
    { date: '2025-03', version: 'v3.5', title: 'Stratégies d’insight IA', desc: 'Shoplytics ajoute une analyse IA avec des recommandations marketing actionnables.' },
    { date: '2025-02', version: 'v3.4', title: 'Upgrade achat groupé influenceurs', desc: 'Le hub de performance partenaires calcule les commissions et gère les collaborations en un seul endroit.' },
    { date: '2025-01', version: 'v3.3', title: 'Refonte Smart OMO', desc: 'Outils d’achat membres avec une UI plus claire et des parcours online-offline plus fluides.' },
    { date: '2024-12', version: 'v3.2', title: 'Upgrade ARVIX Payments', desc: 'Fiabilité et conversion du paiement par carte améliorées.' },
    { date: '2024-11', version: 'v3.1', title: 'YouTube Shopping', desc: 'Le live commerce s’étend avec YouTube Shopping et des intégrations API.' },
    { date: '2024-10', version: 'v3.0', title: 'Lancement de l’app store', desc: 'Apps partenaires en un clic et APIs ouvertes pour la plus forte boutique d’extensions ecommerce.' },
    { date: '2024-09', version: 'v2.9', title: 'Upgrade Shopper App', desc: 'Recommandations personnalisées, échange de points et notifications push pour plus de fidélité.' },
  ],
  ctaTitle: 'Plus de 600 000 marchands font confiance à ARVIX',
  ctaSubtitle: 'Des questions ? Notre équipe est prête à aider',
  cta: 'Démarrer l’essai gratuit',
}

const copy: Partial<Record<Locale, ChangelogCopy>> & { 'zh-TW': ChangelogCopy; en: ChangelogCopy } = {
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

export default function ChangelogPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EEF0FF 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>{c.title}</h1>
          <p className="text-lg" style={{ color: '#687280' }}>{c.subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black mb-10" style={{ color: '#00142D' }}>{c.listTitle}</h2>
          <div className="space-y-6">
            {c.updates.map((u) => (
              <div key={u.version} className={`p-8 rounded-2xl ${u.highlight ? 'text-white' : 'border border-gray-100'}`}
                style={u.highlight ? { backgroundColor: '#5B5FF0' } : {}}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full"
                    style={u.highlight ? { backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' } : { backgroundColor: '#EEF0FF', color: '#5B5FF0' }}>
                    {u.date}
                  </span>
                  <span className="text-xs font-semibold" style={{ color: u.highlight ? 'rgba(255,255,255,0.7)' : '#687280' }}>{u.version}</span>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: u.highlight ? 'white' : '#00142D' }}>{u.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: u.highlight ? 'rgba(255,255,255,0.85)' : '#687280' }}>{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.ctaTitle}</h2>
          <p className="text-white opacity-70 mb-8">{c.ctaSubtitle}</p>
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
