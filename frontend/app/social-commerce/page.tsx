'use client'

import Image from 'next/image'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type SocialCopy = {
  title: string
  subtitle: string
  cta: string
  liveTitle: string
  liveDesc: string
  liveFeatures: string[]
  botTitle: string
  botDesc: string
  botFeatures: string[]
  msgTitle: string
  msgDesc: string
  msgFeatures: string[]
  ctaTitle: string
  ctaSubtitle: string
}

const zhTW: SocialCopy = {
  title: 'ARVIX 社群購物系統\n簡單開賣、快速整單',
  subtitle: '全方位的「社群＋電商」購物系統！善用社群的高互動性並透過系統的高導購性，包含直播購物、導購機器人及訊息整合中心，從直播互動、留言導購到後續整單付款等無縫整合購物體驗，讓顧客快速下單，你輕鬆收單！',
  cta: '立即免費試用',
  liveTitle: '直播購物就該這樣玩',
  liveDesc: 'ARVIX LIVE 獨立直播間可同步串連 Facebook、Instagram 及 LINE 直播，跨渠道同步開播。只要輸入關鍵字 +1，系統將自動發送購物連結，讓顧客快速完成結帳。',
  liveFeatures: ['ARVIX LIVE 獨立直播間', 'FB / IG / LINE +1 接單', '專屬開播 APP', '直播商品庫存與網店同步', '抽獎、競標、搶答、留言搶優惠等活動', '直播成效統計報告'],
  botTitle: '邊聊邊買\n社群導購機器人',
  botDesc: '總是會不小心漏掉顧客訊息？讓聊天機器人來幫你！ARVIX 社群導購機器人可以在對話嵌入商品、購買按鈕及關鍵字，顧客只需點選即可開始購物；同時，也可以設定常用回覆，提升服務效率。',
  botFeatures: ['FB & LINE 對話式購物', 'FB 歡迎訊息及選單設定', 'FB & LINE 訂單通知機器人', '自訂聊天機器人腳本', 'FB & IG 貼文 +1 銷售', '社群快速註冊連結'],
  msgTitle: '暢行無阻\n訊息整合中心',
  msgDesc: '顧客從四面八方來，該如何管理來自各渠道的訊息？訊息整合中心的一站式管理介面，整併網店、訂單、Facebook 和 Instagram 的訊息 / 貼文及 LINE 還有 WhatsApp 的訊息，為商家提供最完整的訊息管理解決方案。',
  msgFeatures: ['多管道訊息整合', '預存常用訊息', '極速購物車', '訊息篩選與快速搜尋', 'FB 貼文快速回覆', '自動 / 手動指派回覆對話幫手'],
  ctaTitle: 'ARVIX 社群購物系統完美結合「社群＋電商」',
  ctaSubtitle: '跳脫一般社群平台破碎化的購物流程，讓你的顧客邊看直播就能邊下單，打造全方位的社群購物體驗！',
}

const zhCN: SocialCopy = {
  title: 'ARVIX 社群购物系统\n简单开卖、快速整单',
  subtitle: '全方位的「社群＋电商」购物系统！善用社群的高互动性并通过系统的高导购性，包含直播购物、导购机器人及消息整合中心，从直播互动、留言导购到后续整单付款等无缝整合购物体验，让顾客快速下单，你轻松收单！',
  cta: '立即免费试用',
  liveTitle: '直播购物就该这样玩',
  liveDesc: 'ARVIX LIVE 独立直播间可同步串联 Facebook、Instagram 及 LINE 直播，跨渠道同步开播。只要输入关键字 +1，系统将自动发送购物链接，让顾客快速完成结账。',
  liveFeatures: ['ARVIX LIVE 独立直播间', 'FB / IG / LINE +1 接单', '专属开播 APP', '直播商品库存与网店同步', '抽奖、竞标、抢答、留言抢优惠等活动', '直播成效统计报告'],
  botTitle: '边聊边买\n社群导购机器人',
  botDesc: '总是会不小心漏掉顾客消息？让聊天机器人来帮你！ARVIX 社群导购机器人可以在对话嵌入商品、购买按钮及关键字，顾客只需点选即可开始购物；同时，也可以设定常用回复，提升服务效率。',
  botFeatures: ['FB & LINE 对话式购物', 'FB 欢迎消息及选单设定', 'FB & LINE 订单通知机器人', '自定义聊天机器人脚本', 'FB & IG 贴文 +1 销售', '社群快速注册链接'],
  msgTitle: '畅行无阻\n消息整合中心',
  msgDesc: '顾客从四面八方来，该如何管理来自各渠道的消息？消息整合中心的一站式管理界面，整并网店、订单、Facebook 和 Instagram 的消息 / 贴文及 LINE 还有 WhatsApp 的消息，为商家提供最完整的消息管理解决方案。',
  msgFeatures: ['多渠道消息整合', '预存常用消息', '极速购物车', '消息筛选与快速搜索', 'FB 贴文快速回复', '自动 / 手动指派回复对话帮手'],
  ctaTitle: 'ARVIX 社群购物系统完美结合「社群＋电商」',
  ctaSubtitle: '跳脱一般社群平台破碎化的购物流程，让你的顾客边看直播就能边下单，打造全方位的社群购物体验！',
}

const en: SocialCopy = {
  title: 'ARVIX social commerce\nSell simply. Close orders fast.',
  subtitle: 'A full social + commerce stack — live shopping, shopping bots, and an inbox hub — so shoppers buy in the feed and you collect orders without friction.',
  cta: 'Start free trial',
  liveTitle: 'Live shopping, done right',
  liveDesc: 'ARVIX LIVE rooms sync Facebook, Instagram, and LINE streams. Keyword +1 auto-sends a cart link so shoppers check out fast.',
  liveFeatures: ['ARVIX LIVE dedicated room', 'FB / IG / LINE +1 ordering', 'Dedicated broadcast app', 'Live inventory synced to store', 'Giveaways, bids, quizzes, comment deals', 'Live performance reports'],
  botTitle: 'Chat while they shop\nSocial shopping bots',
  botDesc: 'Never miss a DM. Embed products, buy buttons, and keywords in chat — plus canned replies to serve faster.',
  botFeatures: ['FB & LINE conversational shopping', 'FB welcome messages and menus', 'FB & LINE order notify bots', 'Custom chatbot scripts', 'FB & IG post +1 sales', 'Social quick-signup links'],
  msgTitle: 'One clear path\nUnified message hub',
  msgDesc: 'Messages arrive from everywhere. Unify store, orders, Facebook, Instagram, LINE, and WhatsApp in one inbox.',
  msgFeatures: ['Multi-channel inbox', 'Saved quick replies', 'Express cart', 'Filters and fast search', 'Quick FB post replies', 'Auto / manual reply assignment'],
  ctaTitle: 'Social + commerce in one ARVIX system',
  ctaSubtitle: 'Skip fragmented social checkouts — shoppers buy while watching live for a full social shopping journey.',
}

const ko: SocialCopy = {
  title: 'ARVIX 소셜 커머스\n간편하게 판매하고, 빠르게 주문을 받으세요.',
  subtitle: '라이브 쇼핑, 쇼핑 봇, 통합 인박스까지 — 완전한 소셜 + 커머스 스택으로 피드에서 바로 구매하고 마찰 없이 주문을 수금하세요.',
  cta: '무료 체험 시작',
  liveTitle: '제대로 된 라이브 쇼핑',
  liveDesc: 'ARVIX LIVE 룸이 Facebook, Instagram, LINE 방송을 동기화합니다. 키워드 +1로 장바구니 링크를 자동 전송해 빠른 결제를 유도합니다.',
  liveFeatures: ['ARVIX LIVE 전용 룸', 'FB / IG / LINE +1 주문', '전용 방송 앱', '라이브 재고와 스토어 동기화', '경품, 입찰, 퀴즈, 댓글 딜', '라이브 성과 리포트'],
  botTitle: '채팅하며 쇼핑\n소셜 쇼핑 봇',
  botDesc: 'DM을 놓치지 마세요. 채팅에 상품, 구매 버튼, 키워드를 넣고 자주 쓰는 답변으로 더 빠르게 응대하세요.',
  botFeatures: ['FB & LINE 대화형 쇼핑', 'FB 환영 메시지 및 메뉴', 'FB & LINE 주문 알림 봇', '맞춤 챗봇 스크립트', 'FB & IG 게시물 +1 판매', '소셜 빠른 가입 링크'],
  msgTitle: '하나의 명확한 경로\n통합 메시지 허브',
  msgDesc: '메시지는 어디서든 옵니다. 스토어, 주문, Facebook, Instagram, LINE, WhatsApp을 하나의 인박스로 통합하세요.',
  msgFeatures: ['멀티채널 인박스', '저장된 빠른 답변', '익스프레스 카트', '필터와 빠른 검색', 'FB 게시물 빠른 답장', '자동 / 수동 답장 배정'],
  ctaTitle: '소셜 + 커머스를 하나의 ARVIX 시스템으로',
  ctaSubtitle: '파편화된 소셜 결제를 건너뛰고 — 라이브를 보며 바로 구매하는 완전한 소셜 쇼핑 여정을 만드세요.',
}

const ja: SocialCopy = {
  title: 'ARVIX ソーシャルコマース\nかんたんに売って、すばやく受注。',
  subtitle: 'ライブショッピング、ショッピングボット、統合受信箱まで — フルのソーシャル＋コマース基盤で、フィード内購入とスムーズな受注を実現。',
  cta: '無料トライアルを開始',
  liveTitle: 'ライブショッピングを正しく',
  liveDesc: 'ARVIX LIVE ルームが Facebook・Instagram・LINE 配信を同期。キーワード +1 でカートリンクを自動送信し、すばやくチェックアウト。',
  liveFeatures: ['ARVIX LIVE 専用ルーム', 'FB / IG / LINE +1 受注', '専用配信アプリ', 'ライブ在庫とストア同期', '抽選・入札・クイズ・コメント特典', 'ライブ成果レポート'],
  botTitle: 'チャットしながら買い物\nソーシャルショッピングボット',
  botDesc: 'DM を見逃さない。チャットに商品・購入ボタン・キーワードを埋め込み、定型返信でより速く対応。',
  botFeatures: ['FB & LINE 会話型ショッピング', 'FB ウェルカムメッセージとメニュー', 'FB & LINE 注文通知ボット', 'カスタムチャットボットスクリプト', 'FB & IG 投稿 +1 販売', 'ソーシャルかんたん登録リンク'],
  msgTitle: 'ひとつの明確な道筋\n統合メッセージハブ',
  msgDesc: 'メッセージはあらゆる場所から届く。ストア・注文・Facebook・Instagram・LINE・WhatsApp をひとつの受信箱に統合。',
  msgFeatures: ['マルチチャネル受信箱', '保存済みクイック返信', 'エクスプレスカート', 'フィルターと高速検索', 'FB 投稿のすばやい返信', '自動／手動返信アサイン'],
  ctaTitle: 'ソーシャル＋コマースをひとつの ARVIX システムで',
  ctaSubtitle: '分断されたソーシャル決済をスキップ — ライブ視聴しながら購入する、フルなソーシャルショッピング体験を。',
}

const vi: SocialCopy = {
  title: 'Thương mại xã hội ARVIX\nBán đơn giản. Chốt đơn nhanh.',
  subtitle: 'Bộ stack social + commerce đầy đủ — live shopping, bot mua sắm và hub hộp thư — để khách mua ngay trên feed và bạn nhận đơn không ma sát.',
  cta: 'Bắt đầu dùng thử miễn phí',
  liveTitle: 'Live shopping đúng cách',
  liveDesc: 'Phòng ARVIX LIVE đồng bộ stream Facebook, Instagram và LINE. Từ khóa +1 tự gửi link giỏ hàng để khách thanh toán nhanh.',
  liveFeatures: ['Phòng ARVIX LIVE riêng', 'Đặt hàng FB / IG / LINE +1', 'App phát sóng riêng', 'Tồn kho live đồng bộ cửa hàng', 'Quà tặng, đấu giá, quiz, deal bình luận', 'Báo cáo hiệu suất live'],
  botTitle: 'Chat khi họ mua\nBot mua sắm xã hội',
  botDesc: 'Không bỏ lỡ DM. Nhúng sản phẩm, nút mua và từ khóa trong chat — kèm trả lời mẫu để phục vụ nhanh hơn.',
  botFeatures: ['Mua sắm hội thoại FB & LINE', 'Tin chào & menu FB', 'Bot thông báo đơn FB & LINE', 'Script chatbot tùy chỉnh', 'Bán +1 bài FB & IG', 'Link đăng ký nhanh social'],
  msgTitle: 'Một lộ trình rõ ràng\nHub tin nhắn thống nhất',
  msgDesc: 'Tin nhắn đến từ mọi nơi. Thống nhất cửa hàng, đơn hàng, Facebook, Instagram, LINE và WhatsApp trong một hộp thư.',
  msgFeatures: ['Hộp thư đa kênh', 'Trả lời nhanh đã lưu', 'Giỏ hàng Express', 'Bộ lọc và tìm nhanh', 'Trả lời nhanh bài FB', 'Gán trả lời tự động / thủ công'],
  ctaTitle: 'Social + commerce trong một hệ thống ARVIX',
  ctaSubtitle: 'Bỏ qua checkout social rời rạc — khách mua khi xem live cho hành trình mua sắm xã hội trọn vẹn.',
}

const es: SocialCopy = {
  title: 'Comercio social ARVIX\nVende fácil. Cierra pedidos rápido.',
  subtitle: 'Un stack completo de social + commerce — live shopping, bots de compra y un hub de bandeja — para que compren en el feed y tú cobres sin fricción.',
  cta: 'Empieza la prueba gratis',
  liveTitle: 'Live shopping, bien hecho',
  liveDesc: 'Las salas ARVIX LIVE sincronizan streams de Facebook, Instagram y LINE. La palabra clave +1 envía un enlace de carrito para un checkout rápido.',
  liveFeatures: ['Sala dedicada ARVIX LIVE', 'Pedidos FB / IG / LINE +1', 'App de emisión dedicada', 'Inventario en vivo sincronizado con la tienda', 'Sorteos, pujas, quizzes, deals en comentarios', 'Informes de rendimiento en vivo'],
  botTitle: 'Chatea mientras compran\nBots de compra social',
  botDesc: 'No pierdas ningún DM. Integra productos, botones de compra y palabras clave en el chat — más respuestas rápidas para atender mejor.',
  botFeatures: ['Compra conversacional FB & LINE', 'Mensajes de bienvenida y menús FB', 'Bots de aviso de pedido FB & LINE', 'Scripts de chatbot personalizados', 'Ventas +1 en posts FB & IG', 'Enlaces de registro social rápido'],
  msgTitle: 'Un camino claro\nHub de mensajes unificado',
  msgDesc: 'Los mensajes llegan de todas partes. Unifica tienda, pedidos, Facebook, Instagram, LINE y WhatsApp en una bandeja.',
  msgFeatures: ['Bandeja multicanal', 'Respuestas rápidas guardadas', 'Carrito express', 'Filtros y búsqueda rápida', 'Respuestas rápidas a posts FB', 'Asignación de respuesta auto / manual'],
  ctaTitle: 'Social + commerce en un sistema ARVIX',
  ctaSubtitle: 'Olvida los checkouts sociales fragmentados — compran mientras ven el live en un viaje de compra social completo.',
}

const pt: SocialCopy = {
  title: 'Comércio social ARVIX\nVenda simples. Feche pedidos rápido.',
  subtitle: 'Um stack completo de social + commerce — live shopping, bots de compra e um hub de inbox — para comprar no feed e você receber pedidos sem atrito.',
  cta: 'Começar teste grátis',
  liveTitle: 'Live shopping feito do jeito certo',
  liveDesc: 'Salas ARVIX LIVE sincronizam streams do Facebook, Instagram e LINE. A palavra-chave +1 envia um link do carrinho para checkout rápido.',
  liveFeatures: ['Sala dedicada ARVIX LIVE', 'Pedidos FB / IG / LINE +1', 'App de transmissão dedicado', 'Estoque ao vivo sincronizado com a loja', 'Sorteios, lances, quizzes, ofertas em comentários', 'Relatórios de desempenho ao vivo'],
  botTitle: 'Converse enquanto compram\nBots de compra social',
  botDesc: 'Não perca nenhum DM. Incorpore produtos, botões de compra e palavras-chave no chat — mais respostas prontas para atender mais rápido.',
  botFeatures: ['Compra conversacional FB & LINE', 'Mensagens de boas-vindas e menus FB', 'Bots de aviso de pedido FB & LINE', 'Scripts de chatbot personalizados', 'Vendas +1 em posts FB & IG', 'Links de cadastro social rápido'],
  msgTitle: 'Um caminho claro\nHub de mensagens unificado',
  msgDesc: 'Mensagens chegam de todos os lados. Unifique loja, pedidos, Facebook, Instagram, LINE e WhatsApp em uma caixa de entrada.',
  msgFeatures: ['Inbox multicanal', 'Respostas rápidas salvas', 'Carrinho express', 'Filtros e busca rápida', 'Respostas rápidas a posts FB', 'Atribuição de resposta auto / manual'],
  ctaTitle: 'Social + commerce em um sistema ARVIX',
  ctaSubtitle: 'Pule checkouts sociais fragmentados — clientes compram enquanto assistem ao vivo em uma jornada de compra social completa.',
}

const de: SocialCopy = {
  title: 'ARVIX Social Commerce\nEinfach verkaufen. Schnell abschließen.',
  subtitle: 'Ein voller Social-+-Commerce-Stack — Live-Shopping, Shopping-Bots und Inbox-Hub — damit Kunden im Feed kaufen und Sie Aufträge reibungslos entgegennehmen.',
  cta: 'Kostenlos testen',
  liveTitle: 'Live-Shopping, richtig gemacht',
  liveDesc: 'ARVIX LIVE-Räume synchronisieren Facebook-, Instagram- und LINE-Streams. Keyword +1 sendet automatisch einen Warenkorb-Link für schnellen Checkout.',
  liveFeatures: ['Dedizierter ARVIX LIVE-Raum', 'FB / IG / LINE +1-Bestellung', 'Dedizierte Broadcast-App', 'Live-Bestand mit Shop synchron', 'Verlosungen, Gebote, Quizze, Kommentar-Deals', 'Live-Performance-Reports'],
  botTitle: 'Chatten während sie shoppen\nSocial-Shopping-Bots',
  botDesc: 'Verpassen Sie keine DM. Produkte, Kauf-Buttons und Keywords im Chat einbetten — plus Schnellantworten für schnelleren Service.',
  botFeatures: ['FB- & LINE-Konversationsshopping', 'FB-Willkommensnachrichten und Menüs', 'FB- & LINE-Bestellbenachrichtigungs-Bots', 'Individuelle Chatbot-Skripte', 'FB- & IG-Post +1-Verkäufe', 'Social-Schnellregistrierungslinks'],
  msgTitle: 'Ein klarer Weg\nEinheitlicher Nachrichten-Hub',
  msgDesc: 'Nachrichten kommen von überall. Shop, Bestellungen, Facebook, Instagram, LINE und WhatsApp in einer Inbox vereinen.',
  msgFeatures: ['Multichannel-Inbox', 'Gespeicherte Schnellantworten', 'Express-Warenkorb', 'Filter und Schnellsuche', 'Schnelle FB-Post-Antworten', 'Auto- / manuelle Antwortzuweisung'],
  ctaTitle: 'Social + Commerce in einem ARVIX-System',
  ctaSubtitle: 'Fragmentierte Social-Checkouts überspringen — Kunden kaufen während des Livestreams für eine volle Social-Shopping-Journey.',
}

const fr: SocialCopy = {
  title: 'Commerce social ARVIX\nVendez simplement. Clôturez vite.',
  subtitle: 'Une stack social + commerce complète — live shopping, bots d’achat et hub de messagerie — pour acheter dans le fil et encaisser sans friction.',
  cta: 'Démarrer l’essai gratuit',
  liveTitle: 'Le live shopping, bien fait',
  liveDesc: 'Les salles ARVIX LIVE synchronisent les streams Facebook, Instagram et LINE. Le mot-clé +1 envoie automatiquement un lien panier pour un checkout rapide.',
  liveFeatures: ['Salle dédiée ARVIX LIVE', 'Commandes FB / IG / LINE +1', 'App de diffusion dédiée', 'Stock live synchronisé à la boutique', 'Cadeaux, enchères, quiz, deals en commentaires', 'Rapports de performance live'],
  botTitle: 'Chattez pendant qu’ils achètent\nBots d’achat social',
  botDesc: 'Ne ratez aucun DM. Intégrez produits, boutons d’achat et mots-clés dans le chat — plus des réponses types pour servir plus vite.',
  botFeatures: ['Achat conversationnel FB & LINE', 'Messages de bienvenue et menus FB', 'Bots de notification de commande FB & LINE', 'Scripts de chatbot personnalisés', 'Ventes +1 sur posts FB & IG', 'Liens d’inscription sociale rapide'],
  msgTitle: 'Un chemin clair\nHub de messages unifié',
  msgDesc: 'Les messages arrivent de partout. Unifiez boutique, commandes, Facebook, Instagram, LINE et WhatsApp dans une seule boîte de réception.',
  msgFeatures: ['Boîte multicanale', 'Réponses rapides enregistrées', 'Panier express', 'Filtres et recherche rapide', 'Réponses rapides aux posts FB', 'Attribution de réponse auto / manuelle'],
  ctaTitle: 'Social + commerce dans un système ARVIX',
  ctaSubtitle: 'Oubliez les checkouts sociaux fragmentés — les acheteurs commandent en regardant le live pour un parcours d’achat social complet.',
}

const copy: Partial<Record<Locale, SocialCopy>> & { 'zh-TW': SocialCopy; en: SocialCopy } = {
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

function FeatureList({ items }: { items: string[] }) {
  return (
    <div className="space-y-3 mt-6">
      {items.map(item => (
        <div key={item} className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }} />
          <span className="font-semibold text-sm" style={{ color: '#00142D' }}>{item}</span>
        </div>
      ))}
    </div>
  )
}

export default function SocialCommercePage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(255, 225, 249) 0%, rgb(238, 169, 255) 50%, rgb(149, 92, 255) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight whitespace-pre-line" style={{ color: '#00142D' }}>{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: '#3D4A5C' }}>{c.subtitle}</p>
            <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.cta}
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80" alt="ARVIX social commerce" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: 'linear-gradient(rgb(238, 231, 253) 0%, rgb(255, 255, 255) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>{c.liveTitle}</h2>
            <p style={{ color: '#687280' }}>{c.liveDesc}</p>
            <FeatureList items={c.liveFeatures} />
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80" alt="ARVIX live shopping" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.botTitle}</h2>
            <p style={{ color: '#687280' }}>{c.botDesc}</p>
            <FeatureList items={c.botFeatures} />
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80" alt="ARVIX shopping bots" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: 'linear-gradient(rgb(238, 231, 253) 0%, rgb(255, 255, 255) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.msgTitle}</h2>
            <p style={{ color: '#687280' }}>{c.msgDesc}</p>
            <FeatureList items={c.msgFeatures} />
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" alt="ARVIX message hub" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ background: 'linear-gradient(270.52deg, rgb(130, 124, 255) 0%, rgb(246, 208, 255) 100%)' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>{c.ctaTitle}</h2>
          <p className="mb-8" style={{ color: '#3D4A5C' }}>{c.ctaSubtitle}</p>
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
