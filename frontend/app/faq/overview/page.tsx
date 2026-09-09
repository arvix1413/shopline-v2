'use client'
import { useState } from 'react'
import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'
import type { Locale } from '../../../lib/i18n'

type FaqCopy = {
  title: string
  subtitle: string
  faqHeading: string
  resourcesTitle: string
  download: string
  ctaTitle: string
  ctaSubtitle: string
  contactUs: string
  categories: {
    title: string
    desc: string
    faqs: { q: string; a: string }[]
  }[]
  resources: { title: string; desc: string }[]
}

const zhTW: FaqCopy = {
  title: 'ARVIX 新手問答',
  subtitle: '有更多疑問嗎？聯繫 ARVIX 團隊吧！讓我們知道你需要幫助，我們的團隊將盡力為你找到最佳的解決方案。',
  faqHeading: '常見問題',
  resourcesTitle: '新手資源',
  download: '立即下載',
  ctaTitle: '使用有疑問？ 歡迎與我們聯繫！',
  ctaSubtitle: '服務時間 星期一至五 上午 10 點至晚上 7 點',
  contactUs: '聯繫我們',
  categories: [
    {
      title: '關於 ARVIX',
      desc: '對於 ARVIX 的公司簡介、服務簡介、如何使用 ARVIX 系統等說明',
      faqs: [
        { q: 'ARVIX 提供什麼服務？', a: 'ARVIX 提供全方位零售解決方案，包含網路商店、社群購物、POS 系統、行銷工具、數據分析等，協助品牌實現 OMO 全通路整合。' },
        { q: 'ARVIX 在哪些地區提供服務？', a: 'ARVIX 目前在台灣、香港、馬來西亞、新加坡等地提供服務，全球超過 600,000 個商家使用。' },
      ],
    },
    {
      title: '如何開始建立商店',
      desc: '如何透過 ARVIX 建立網路商店？網站該怎麼架設？如何賣給消費者？有任何使用限制嗎？',
      faqs: [
        { q: '如何開始建立商店？', a: '只需點擊「免費試用」，填寫基本資料後即可立即開始建立你的網路商店，無需信用卡，14 天免費試用。' },
        { q: '建立商店需要具備技術知識嗎？', a: '不需要！ARVIX 提供直覺化的後台介面，即使沒有技術背景也能輕鬆建立專業的品牌網店。' },
      ],
    },
    {
      title: '金、物流服務',
      desc: 'ARVIX 提供哪些金流、物流服務？我可以提供哪些付款、送貨方式給顧客呢？',
      faqs: [
        { q: '支援哪些金流方式？', a: '商店結帳可支援信用卡付款；台灣出貨商店另可提供 7-11 貨到付款（須店家自行開通綠界物流後由 ARVIX 協助串接）。' },
        { q: '支援哪些物流方式？', a: '台灣出貨商店可設定宅配與 7-11 超商取貨。7-11 須店家向綠界申請物流後，來信 arvix1413@gmail.com 請我們協助串接。' },
        { q: '客服信箱是？', a: '請寄至 arvix1413@gmail.com，我們會盡快回覆。' },
      ],
    },
    {
      title: '方案及付款說明',
      desc: 'ARVIX 如何收費？有哪些方案？申請使用及簽約流程為何？',
      faqs: [
        { q: '有哪些方案可以選擇？', a: 'ARVIX 提供網店探索者、電商戰略家、OMO 大師、全通路領航員四種方案，依據商家需求提供不同功能組合，詳情請參考方案費用頁面。' },
        { q: '可以隨時升級或降級方案嗎？', a: '可以！你可以隨時在後台調整方案，升級立即生效，降級則於下個計費週期生效。' },
      ],
    },
    {
      title: '功能特色說明',
      desc: 'ARVIX 的架站系統提供哪些功能？有客製化的服務嗎？可以設定哪些優惠活動？',
      faqs: [
        { q: '什麼是 OMO 全通路整合？', a: 'OMO（Online Merge Offline）是將線上與線下通路整合的零售模式，讓消費者享有無縫的購物體驗，同時讓商家統一管理所有通路的訂單、庫存與會員資料。' },
        { q: 'Shoplytics 數據分析有什麼功能？', a: 'Shoplytics 提供人、貨、場三大維度的數據分析，包含消費者行為分析、商品銷售分析、通路效益分析，並搭載 AI 洞察功能提供可執行的行銷建議。' },
      ],
    },
    {
      title: '社群購物系統服務',
      desc: '社群購物系統提供哪些功能？適合哪種賣家使用？可以串接社群直播嗎？',
      faqs: [
        { q: '社群購物支援哪些平台？', a: '支援 Facebook、Instagram、LINE 等主流社群平台，可直接在直播或貼文中完成購物流程。' },
        { q: '什麼是 Instagram Live 購物？', a: '透過 ARVIX 社群購物系統，商家可在 Instagram 直播時即時接收訂單，消費者只需留言即可完成購買。' },
      ],
    },
    {
      title: 'POS 系統服務',
      desc: 'ARVIX POS 有提供結帳及進銷存的管理功能嗎？適合哪種商店使用？需要哪些設備？',
      faqs: [
        { q: 'ARVIX POS 支援哪些硬體？', a: '支援收銀機、條碼掃描器、收據印表機、客戶顯示器等多種週邊硬體，也可搭配 iPad 使用。' },
        { q: 'POS 系統可以與網路商店同步嗎？', a: '可以！ARVIX POS 與網路商店完全整合，庫存、訂單、會員資料即時同步，實現真正的 OMO 全通路管理。' },
      ],
    },
    {
      title: '數位廣告服務',
      desc: 'ARVIX 提供哪些廣告代操服務？如何購買廣告計畫方案？有額外的廣告相關服務？',
      faqs: [
        { q: 'ARVIX 提供廣告投放服務嗎？', a: '是的，ARVIX 提供 Facebook、Google、LINE 等平台的廣告投放服務，搭配 RFIM 分眾行銷工具，精準觸達目標客群。' },
      ],
    },
    {
      title: '附加服務',
      desc: '了解更多專業顧問支援、線上線下聚會、實戰課程、節慶行銷講座等資源介紹',
      faqs: [
        { q: 'ARVIX 有提供顧問服務嗎？', a: '有！ARVIX 提供一對一專業顧問諮詢服務，協助商家制定最適合的開店策略與行銷計劃。' },
        { q: '有哪些學習資源可以使用？', a: 'ARVIX 提供豐富的開店教學資源，包含知識庫文章、影片教學、線上講座及實體研討會等，幫助商家快速上手。' },
      ],
    },
    {
      title: '異業合作',
      desc: '我們歡迎各種合作提案，透過異業結盟，為雙方顧客甚至是企業本身，共創品牌雙贏！',
      faqs: [
        { q: '如何與 ARVIX 進行異業合作？', a: '歡迎透過官網聯絡我們，提交合作提案。ARVIX 歡迎各種形式的異業合作，包含技術整合、行銷合作、活動聯辦等。' },
      ],
    },
  ],
  resources: [
    { title: '網店設計攻略', desc: '學習如何打造吸睛的品牌網店' },
    { title: '品牌官網 SEO 全攻略', desc: '提升搜尋排名，帶來更多自然流量' },
    { title: '廣告新手投放攻略', desc: '從零開始學習數位廣告投放' },
    { title: '會員經營指南', desc: '建立忠實顧客群，提升回購率' },
  ],
}

const zhCN: FaqCopy = {
  title: 'ARVIX 新手问答',
  subtitle: '有更多疑问吗？联系 ARVIX 团队吧！让我们知道你需要帮助，我们的团队将尽力为你找到最佳的解决方案。',
  faqHeading: '常见问题',
  resourcesTitle: '新手资源',
  download: '立即下载',
  ctaTitle: '使用有疑问？欢迎与我们联系！',
  ctaSubtitle: '服务时间 星期一至五 上午 10 点至晚上 7 点',
  contactUs: '联系我们',
  categories: [
    {
      title: '关于 ARVIX',
      desc: '对于 ARVIX 的公司简介、服务简介、如何使用 ARVIX 系统等说明',
      faqs: [
        { q: 'ARVIX 提供什么服务？', a: 'ARVIX 提供全方位零售解决方案，包含网络商店、社群购物、POS 系统、营销工具、数据分析等，协助品牌实现 OMO 全渠道整合。' },
        { q: 'ARVIX 在哪些地区提供服务？', a: 'ARVIX 目前在台湾、香港、马来西亚、新加坡等地提供服务，全球超过 600,000 个商家使用。' },
      ],
    },
    {
      title: '如何开始建立商店',
      desc: '如何通过 ARVIX 建立网络商店？网站该怎么架设？如何卖给消费者？有任何使用限制吗？',
      faqs: [
        { q: '如何开始建立商店？', a: '只需点击「免费试用」，填写基本资料后即可立即开始建立你的网络商店，无需信用卡，14 天免费试用。' },
        { q: '建立商店需要具备技术知识吗？', a: '不需要！ARVIX 提供直观化的后台界面，即使没有技术背景也能轻松建立专业的品牌网店。' },
      ],
    },
    {
      title: '金、物流服务',
      desc: 'ARVIX 提供哪些金流、物流服务？我可以提供哪些付款、送货方式给顾客呢？',
      faqs: [
        { q: '支持哪些金流方式？', a: '商店结账可支持信用卡付款。' },
        { q: '支持哪些物流方式？', a: '支持宅配。其他取货方式视商店物流设定而定。' },
        { q: '客服邮箱是？', a: '请寄至 arvix1413@gmail.com，我们会尽快回复。' },
      ],
    },
    {
      title: '方案及付款说明',
      desc: 'ARVIX 如何收费？有哪些方案？申请使用及签约流程为何？',
      faqs: [
        { q: '有哪些方案可以选择？', a: 'ARVIX 提供网店探索者、电商战略家、OMO 大师、全渠道领航员四种方案，依据商家需求提供不同功能组合，详情请参考方案费用页面。' },
        { q: '可以随时升级或降级方案吗？', a: '可以！你可以随时在后台调整方案，升级立即生效，降级则于下个计费周期生效。' },
      ],
    },
    {
      title: '功能特色说明',
      desc: 'ARVIX 的建站系统提供哪些功能？有定制化的服务吗？可以设定哪些优惠活动？',
      faqs: [
        { q: '什么是 OMO 全渠道整合？', a: 'OMO（Online Merge Offline）是将线上与线下渠道整合的零售模式，让消费者享有无缝的购物体验，同时让商家统一管理所有渠道的订单、库存与会员资料。' },
        { q: 'Shoplytics 数据分析有什么功能？', a: 'Shoplytics 提供人、货、场三大维度的数据分析，包含消费者行为分析、商品销售分析、渠道效益分析，并搭载 AI 洞察功能提供可执行的营销建议。' },
      ],
    },
    {
      title: '社群购物系统服务',
      desc: '社群购物系统提供哪些功能？适合哪种卖家使用？可以串接社群直播吗？',
      faqs: [
        { q: '社群购物支持哪些平台？', a: '支持 Facebook、Instagram、LINE 等主流社群平台，可直接在直播或帖文中完成购物流程。' },
        { q: '什么是 Instagram Live 购物？', a: '通过 ARVIX 社群购物系统，商家可以在 Instagram 直播时即时接收订单，消费者只需留言即可完成购买。' },
      ],
    },
    {
      title: 'POS 系统服务',
      desc: 'ARVIX POS 有提供结账及进销存的管理功能吗？适合哪种商店使用？需要哪些设备？',
      faqs: [
        { q: 'ARVIX POS 支持哪些硬件？', a: '支持收银机、条码扫描器、收据打印机、客户显示器等多种周边硬件，也可搭配 iPad 使用。' },
        { q: 'POS 系统可以与网络商店同步吗？', a: '可以！ARVIX POS 与网络商店完全整合，库存、订单、会员资料即时同步，实现真正的 OMO 全渠道管理。' },
      ],
    },
    {
      title: '数字广告服务',
      desc: 'ARVIX 提供哪些广告代操服务？如何购买广告计划方案？有额外的广告相关服务？',
      faqs: [
        { q: 'ARVIX 提供广告投放服务吗？', a: '是的，ARVIX 提供 Facebook、Google、LINE 等平台的广告投放服务，搭配 RFIM 分众营销工具，精准触达目标客群。' },
      ],
    },
    {
      title: '附加服务',
      desc: '了解更多专业顾问支持、线上线下聚会、实战课程、节庆营销讲座等资源介绍',
      faqs: [
        { q: 'ARVIX 有提供顾问服务吗？', a: '有！ARVIX 提供一对一专业顾问咨询服务，协助商家制定最适合的开店策略与营销计划。' },
        { q: '有哪些学习资源可以使用？', a: 'ARVIX 提供丰富的开店教学资源，包含知识库文章、视频教学、线上讲座及实体研讨会等，帮助商家快速上手。' },
      ],
    },
    {
      title: '异业合作',
      desc: '我们欢迎各种合作提案，通过异业结盟，为双方顾客甚至是企业本身，共创品牌双赢！',
      faqs: [
        { q: '如何与 ARVIX 进行异业合作？', a: '欢迎通过官网联系我们，提交合作提案。ARVIX 欢迎各种形式的异业合作，包含技术整合、营销合作、活动联办等。' },
      ],
    },
  ],
  resources: [
    { title: '网店设计攻略', desc: '学习如何打造吸睛的品牌网店' },
    { title: '品牌官网 SEO 全攻略', desc: '提升搜索排名，带来更多自然流量' },
    { title: '广告新手投放攻略', desc: '从零开始学习数字广告投放' },
    { title: '会员经营指南', desc: '建立忠实顾客群，提升回购率' },
  ],
}

const en: FaqCopy = {
  title: 'ARVIX beginner FAQ',
  subtitle: 'Still have questions? Contact the ARVIX team — we will help you find the best next step.',
  faqHeading: 'Frequently asked questions',
  resourcesTitle: 'Starter resources',
  download: 'Download',
  ctaTitle: 'Need help? Talk to us.',
  ctaSubtitle: 'Support hours: Mon–Fri, 10:00–19:00',
  contactUs: 'Contact us',
  categories: [
    {
      title: 'About ARVIX',
      desc: 'Company overview, services, and how to use the ARVIX platform',
      faqs: [
        { q: 'What does ARVIX offer?', a: 'ARVIX provides omnichannel retail solutions including online stores, social commerce, POS, marketing tools, and analytics.' },
        { q: 'Where does ARVIX operate?', a: 'ARVIX serves Taiwan, Hong Kong, Malaysia, Singapore, and more — trusted by 600,000+ merchants.' },
      ],
    },
    {
      title: 'Getting started',
      desc: 'How to launch a store, set up a site, and start selling',
      faqs: [
        { q: 'How do I create a store?', a: 'Click Start free trial, fill in basic details, and launch — no credit card, 14-day trial.' },
        { q: 'Do I need technical skills?', a: 'No. The admin is built for non-technical teams to launch a professional brand store.' },
      ],
    },
    {
      title: 'Payments & logistics',
      desc: 'Supported payment and shipping options for your customers',
      faqs: [
        { q: 'Which payments are supported?', a: 'Checkout supports card payments.' },
        { q: 'Which logistics partners?', a: 'Home delivery is supported. Additional local pickup options depend on the store’s shipping setup.' },
        { q: 'What is the support email?', a: 'Email arvix1413@gmail.com and we will get back to you.' },
      ],
    },
    {
      title: 'Plans & billing',
      desc: 'Pricing plans and how contracting works',
      faqs: [
        { q: 'Which plans are available?', a: 'Store Explorer, Commerce Strategist, OMO Master, and Omnichannel Navigator — see Pricing for details.' },
        { q: 'Can I change plans anytime?', a: 'Yes. Upgrades apply immediately; downgrades take effect next billing cycle.' },
      ],
    },
    {
      title: 'Product features',
      desc: 'Platform capabilities, customization, and promotions',
      faqs: [
        { q: 'What is OMO?', a: 'Online Merge Offline unifies channels so shoppers get a seamless experience and merchants manage orders, inventory, and members in one place.' },
        { q: 'What does Shoplytics do?', a: 'Analytics across people, products, and places — plus AI insights with actionable marketing guidance.' },
      ],
    },
    {
      title: 'Social commerce',
      desc: 'Social shopping features and live-commerce support',
      faqs: [
        { q: 'Which social platforms?', a: 'Facebook, Instagram, LINE, and more — shop from posts or live streams.' },
        { q: 'What is Instagram Live shopping?', a: 'Receive orders during Instagram Live; shoppers can buy by commenting.' },
      ],
    },
    {
      title: 'POS',
      desc: 'Checkout, inventory, and hardware for physical stores',
      faqs: [
        { q: 'Which hardware is supported?', a: 'Registers, scanners, receipt printers, customer displays, and iPad setups.' },
        { q: 'Does POS sync with the online store?', a: 'Yes — inventory, orders, and members sync in real time for true OMO.' },
      ],
    },
    {
      title: 'Digital ads',
      desc: 'Ad management services and related offerings',
      faqs: [
        { q: 'Does ARVIX run ads?', a: 'Yes — Facebook, Google, LINE, and more, paired with RFIM segmentation.' },
      ],
    },
    {
      title: 'Add-on services',
      desc: 'Advisors, events, courses, and seasonal workshops',
      faqs: [
        { q: 'Do you offer consulting?', a: 'Yes — one-on-one advisors help with launch strategy and marketing plans.' },
        { q: 'What learning resources exist?', a: 'Knowledge base articles, video guides, webinars, and in-person sessions.' },
      ],
    },
    {
      title: 'Partnerships',
      desc: 'We welcome collaboration proposals that create mutual value',
      faqs: [
        { q: 'How do I partner with ARVIX?', a: 'Contact us via the website with your proposal — tech, marketing, and co-branded events are welcome.' },
      ],
    },
  ],
  resources: [
    { title: 'Store design playbook', desc: 'Build a brand store that stands out' },
    { title: 'Brand SEO guide', desc: 'Rank higher and win more organic traffic' },
    { title: 'Ads starter guide', desc: 'Learn digital advertising from zero' },
    { title: 'Membership playbook', desc: 'Grow loyal customers and repurchase' },
  ],
}

const ko: FaqCopy = {
  title: 'ARVIX 초보자 FAQ',
  subtitle: '궁금한 점이 더 있으신가요? ARVIX 팀에 연락해 주세요 — 최선의 다음 단계를 함께 찾아드립니다.',
  faqHeading: '자주 묻는 질문',
  resourcesTitle: '시작 리소스',
  download: '다운로드',
  ctaTitle: '도움이 필요하신가요? 문의해 주세요.',
  ctaSubtitle: '지원 시간: 월–금, 10:00–19:00',
  contactUs: '문의하기',
  categories: [
    {
      title: 'ARVIX 소개',
      desc: '회사 개요, 서비스, ARVIX 플랫폼 사용 방법',
      faqs: [
        { q: 'ARVIX는 무엇을 제공하나요?', a: 'ARVIX는 온라인 스토어, 소셜 커머스, POS, 마케팅 도구, 분석 등 옴니채널 리테일 솔루션을 제공합니다.' },
        { q: 'ARVIX는 어디서 운영되나요?', a: 'ARVIX는 대만, 홍콩, 말레이시아, 싱가포르 등에서 서비스를 제공하며 600,000명 이상의 판매자가 신뢰합니다.' },
      ],
    },
    {
      title: '시작하기',
      desc: '스토어 개설, 사이트 설정, 판매 시작 방법',
      faqs: [
        { q: '스토어는 어떻게 만드나요?', a: '무료 체험 시작을 클릭하고 기본 정보를 입력한 뒤 바로 시작할 수 있습니다 — 신용카드 불필요, 14일 체험.' },
        { q: '기술 지식이 필요한가요?', a: '아니요. 관리자 화면은 비기술 팀도 전문 브랜드 스토어를 열 수 있도록 설계되었습니다.' },
      ],
    },
    {
      title: '결제 및 물류',
      desc: '고객에게 제공할 수 있는 결제·배송 옵션',
      faqs: [
        { q: '어떤 결제를 지원하나요?', a: '체크아웃은 카드 결제를 지원합니다.' },
        { q: '어떤 물류를 지원하나요?', a: '택배(자택 배송)를 지원합니다. 추가 픽업 옵션은 스토어 배송 설정에 따라 다릅니다.' },
        { q: '고객센터 이메일은?', a: 'arvix1413@gmail.com 으로 보내주시면 빠르게 답변드리겠습니다.' },
      ],
    },
    {
      title: '요금제 및 결제',
      desc: '요금제와 계약 진행 방식',
      faqs: [
        { q: '어떤 요금제가 있나요?', a: '스토어 탐색자, 커머스 전략가, OMO 마스터, 옴니채널 내비게이터 — 자세한 내용은 요금 페이지를 참고하세요.' },
        { q: '요금제를 언제든 변경할 수 있나요?', a: '네. 업그레이드는 즉시 적용되고, 다운그레이드는 다음 결제 주기부터 적용됩니다.' },
      ],
    },
    {
      title: '제품 기능',
      desc: '플랫폼 기능, 맞춤화, 프로모션',
      faqs: [
        { q: 'OMO란 무엇인가요?', a: 'Online Merge Offline은 채널을 통합해 쇼핑객에게 매끄러운 경험을 제공하고, 판매자가 주문·재고·회원을 한곳에서 관리하게 합니다.' },
        { q: 'Shoplytics는 무엇을 하나요?', a: '사람, 상품, 장소에 대한 분석과 실행 가능한 마케팅 가이드를 담은 AI 인사이트를 제공합니다.' },
      ],
    },
    {
      title: '소셜 커머스',
      desc: '소셜 쇼핑 기능과 라이브 커머스 지원',
      faqs: [
        { q: '어떤 소셜 플랫폼을 지원하나요?', a: 'Facebook, Instagram, LINE 등 — 게시물이나 라이브에서 바로 쇼핑할 수 있습니다.' },
        { q: 'Instagram Live 쇼핑이란?', a: 'Instagram Live 중 주문을 받고, 쇼핑객은 댓글로 구매할 수 있습니다.' },
      ],
    },
    {
      title: 'POS',
      desc: '오프라인 매장을 위한 결제, 재고, 하드웨어',
      faqs: [
        { q: '어떤 하드웨어를 지원하나요?', a: '금전등록기, 스캐너, 영수증 프린터, 고객용 디스플레이, iPad 구성을 지원합니다.' },
        { q: 'POS가 온라인 스토어와 동기화되나요?', a: '네 — 재고, 주문, 회원이 실시간으로 동기화되어 진정한 OMO를 구현합니다.' },
      ],
    },
    {
      title: '디지털 광고',
      desc: '광고 운영 서비스 및 관련 제공 항목',
      faqs: [
        { q: 'ARVIX가 광고를 운영하나요?', a: '네 — Facebook, Google, LINE 등과 RFIM 세분화를 함께 제공합니다.' },
      ],
    },
    {
      title: '부가 서비스',
      desc: '컨설턴트, 이벤트, 강의, 시즌 워크숍',
      faqs: [
        { q: '컨설팅을 제공하나요?', a: '네 — 1:1 컨설턴트가 런칭 전략과 마케팅 계획을 도와드립니다.' },
        { q: '어떤 학습 자료가 있나요?', a: '지식 베이스 아티클, 비디오 가이드, 웨비나, 오프라인 세션이 있습니다.' },
      ],
    },
    {
      title: '파트너십',
      desc: '상호 가치를 만드는 협업 제안을 환영합니다',
      faqs: [
        { q: 'ARVIX와 어떻게 파트너가 되나요?', a: '웹사이트를 통해 제안을 보내 주세요 — 기술, 마케팅, 공동 브랜드 이벤트를 환영합니다.' },
      ],
    },
  ],
  resources: [
    { title: '스토어 디자인 플레이북', desc: '돋보이는 브랜드 스토어 만들기' },
    { title: '브랜드 SEO 가이드', desc: '검색 순위를 높이고 자연 유입을 늘리기' },
    { title: '광고 입문 가이드', desc: '디지털 광고를 처음부터 배우기' },
    { title: '멤버십 플레이북', desc: '충성 고객을 키우고 재구매를 늘리기' },
  ],
}

const ja: FaqCopy = {
  title: 'ARVIX 初心者 FAQ',
  subtitle: 'まだご質問がありますか？ARVIX チームにご連絡ください — 最適な次のステップをお手伝いします。',
  faqHeading: 'よくある質問',
  resourcesTitle: 'スターターリソース',
  download: 'ダウンロード',
  ctaTitle: 'お困りですか？お問い合わせください。',
  ctaSubtitle: 'サポート時間：月–金、10:00–19:00',
  contactUs: 'お問い合わせ',
  categories: [
    {
      title: 'ARVIX について',
      desc: '会社概要、サービス、ARVIX プラットフォームの使い方',
      faqs: [
        { q: 'ARVIX は何を提供しますか？', a: 'ARVIX はオンラインストア、ソーシャルコマース、POS、マーケティングツール、分析などを含むオムニチャネル小売ソリューションを提供します。' },
        { q: 'ARVIX はどの地域で展開していますか？', a: 'ARVIX は台湾、香港、マレーシア、シンガポールなどでサービスを提供し、60万以上のマーチャントに信頼されています。' },
      ],
    },
    {
      title: 'はじめに',
      desc: 'ストア開設、サイト設定、販売開始の方法',
      faqs: [
        { q: 'ストアの作り方は？', a: '無料トライアル開始をクリックし、基本情報を入力してすぐに開始できます — クレジットカード不要、14日間トライアル。' },
        { q: '技術スキルは必要ですか？', a: '不要です。管理画面は非技術チームでもプロのブランドストアを立ち上げられるように設計されています。' },
      ],
    },
    {
      title: '決済・物流',
      desc: 'お客様向けの決済・配送オプション',
      faqs: [
        { q: '対応している決済は？', a: 'チェックアウトはカード決済に対応しています。' },
        { q: '対応している物流は？', a: '宅配に対応しています。その他の受け取り方法は店舗の配送設定によります。' },
        { q: 'サポートメールは？', a: 'arvix1413@gmail.com までご連絡ください。順次ご返信します。' },
      ],
    },
    {
      title: 'プランと請求',
      desc: '料金プランと契約の流れ',
      faqs: [
        { q: '利用できるプランは？', a: 'ストアエクスプローラー、コマースストラテジスト、OMO マスター、オムニチャネルナビゲーター — 詳細は料金ページをご覧ください。' },
        { q: 'プランはいつでも変更できますか？', a: 'はい。アップグレードは即時反映、ダウングレードは次の請求サイクルから適用されます。' },
      ],
    },
    {
      title: '製品機能',
      desc: 'プラットフォーム機能、カスタマイズ、プロモーション',
      faqs: [
        { q: 'OMO とは？', a: 'Online Merge Offline はチャネルを統合し、買い物客にシームレスな体験を、マーチャントには注文・在庫・会員の一元管理を提供します。' },
        { q: 'Shoplytics は何をしますか？', a: '人・商品・場所の分析に加え、実行可能なマーケティング指針付きの AI インサイトを提供します。' },
      ],
    },
    {
      title: 'ソーシャルコマース',
      desc: 'ソーシャルショッピング機能とライブコマース対応',
      faqs: [
        { q: '対応するソーシャルプラットフォームは？', a: 'Facebook、Instagram、LINE など — 投稿やライブから買い物できます。' },
        { q: 'Instagram Live ショッピングとは？', a: 'Instagram Live 中に注文を受け付け、買い物客はコメントで購入できます。' },
      ],
    },
    {
      title: 'POS',
      desc: '実店舗向けの会計、在庫、ハードウェア',
      faqs: [
        { q: '対応ハードウェアは？', a: 'レジ、スキャナー、レシートプリンター、カスタマーディスプレイ、iPad 構成に対応しています。' },
        { q: 'POS はオンラインストアと同期しますか？', a: 'はい — 在庫、注文、会員がリアルタイム同期し、真の OMO を実現します。' },
      ],
    },
    {
      title: 'デジタル広告',
      desc: '広告運用サービスと関連オファリング',
      faqs: [
        { q: 'ARVIX は広告運用を行いますか？', a: 'はい — Facebook、Google、LINE などと RFIM セグメンテーションを組み合わせて提供します。' },
      ],
    },
    {
      title: '付加サービス',
      desc: 'アドバイザー、イベント、コース、季節のワークショップ',
      faqs: [
        { q: 'コンサルティングはありますか？', a: 'はい — 1対1のアドバイザーがローンチ戦略とマーケティング計画を支援します。' },
        { q: '学習リソースには何がありますか？', a: 'ナレッジベース記事、動画ガイド、ウェビナー、対面セッションがあります。' },
      ],
    },
    {
      title: 'パートナーシップ',
      desc: '相互価値を生む協業提案を歓迎します',
      faqs: [
        { q: 'ARVIX と提携するには？', a: 'ウェブサイトから提案をお送りください — 技術、マーケティング、共催イベントを歓迎します。' },
      ],
    },
  ],
  resources: [
    { title: 'ストアデザインプレイブック', desc: '目立つブランドストアを作る' },
    { title: 'ブランド SEO ガイド', desc: '検索順位を上げ、オーガニック流入を増やす' },
    { title: '広告スターターガイド', desc: 'デジタル広告をゼロから学ぶ' },
    { title: '会員プレイブック', desc: 'ロイヤル顧客を育て、リピートを増やす' },
  ],
}

const vi: FaqCopy = {
  title: 'FAQ dành cho người mới bắt đầu với ARVIX',
  subtitle: 'Vẫn còn thắc mắc? Liên hệ đội ngũ ARVIX — chúng tôi sẽ giúp bạn tìm bước tiếp theo phù hợp nhất.',
  faqHeading: 'Câu hỏi thường gặp',
  resourcesTitle: 'Tài nguyên khởi đầu',
  download: 'Tải xuống',
  ctaTitle: 'Cần trợ giúp? Hãy nói chuyện với chúng tôi.',
  ctaSubtitle: 'Giờ hỗ trợ: Thứ 2–Thứ 6, 10:00–19:00',
  contactUs: 'Liên hệ chúng tôi',
  categories: [
    {
      title: 'Về ARVIX',
      desc: 'Tổng quan công ty, dịch vụ và cách dùng nền tảng ARVIX',
      faqs: [
        { q: 'ARVIX cung cấp gì?', a: 'ARVIX cung cấp giải pháp bán lẻ đa kênh gồm cửa hàng trực tuyến, thương mại xã hội, POS, công cụ marketing và phân tích.' },
        { q: 'ARVIX hoạt động ở đâu?', a: 'ARVIX phục vụ Đài Loan, Hồng Kông, Malaysia, Singapore và nhiều nơi khác — được hơn 600.000 merchant tin dùng.' },
      ],
    },
    {
      title: 'Bắt đầu',
      desc: 'Cách mở cửa hàng, thiết lập trang và bắt đầu bán',
      faqs: [
        { q: 'Làm sao để tạo cửa hàng?', a: 'Nhấp Bắt đầu dùng thử miễn phí, điền thông tin cơ bản và khởi chạy — không cần thẻ tín dụng, dùng thử 14 ngày.' },
        { q: 'Tôi có cần kỹ năng kỹ thuật không?', a: 'Không. Trang quản trị được thiết kế để đội ngũ không chuyên kỹ thuật cũng mở được cửa hàng thương hiệu chuyên nghiệp.' },
      ],
    },
    {
      title: 'Thanh toán & vận chuyển',
      desc: 'Các tùy chọn thanh toán và giao hàng cho khách hàng',
      faqs: [
        { q: 'Hỗ trợ thanh toán nào?', a: 'Checkout hỗ trợ thanh toán bằng thẻ.' },
        { q: 'Hỗ trợ vận chuyển nào?', a: 'Hỗ trợ giao tận nhà. Tùy chọn nhận hàng khác tùy theo thiết lập vận chuyển của cửa hàng.' },
        { q: 'Email hỗ trợ là gì?', a: 'Gửi email tới arvix1413@gmail.com, chúng tôi sẽ phản hồi sớm.' },
      ],
    },
    {
      title: 'Gói & thanh toán',
      desc: 'Các gói giá và quy trình hợp đồng',
      faqs: [
        { q: 'Có những gói nào?', a: 'Store Explorer, Commerce Strategist, OMO Master và Omnichannel Navigator — xem trang Giá để biết chi tiết.' },
        { q: 'Tôi có thể đổi gói bất cứ lúc nào không?', a: 'Có. Nâng cấp áp dụng ngay; hạ cấp có hiệu lực ở chu kỳ thanh toán tiếp theo.' },
      ],
    },
    {
      title: 'Tính năng sản phẩm',
      desc: 'Khả năng nền tảng, tùy chỉnh và khuyến mãi',
      faqs: [
        { q: 'OMO là gì?', a: 'Online Merge Offline hợp nhất các kênh để người mua có trải nghiệm liền mạch và merchant quản lý đơn hàng, tồn kho, thành viên tại một nơi.' },
        { q: 'Shoplytics làm gì?', a: 'Phân tích theo người, sản phẩm và địa điểm — cùng insight AI kèm hướng dẫn marketing có thể hành động.' },
      ],
    },
    {
      title: 'Thương mại xã hội',
      desc: 'Tính năng mua sắm xã hội và hỗ trợ live commerce',
      faqs: [
        { q: 'Hỗ trợ nền tảng xã hội nào?', a: 'Facebook, Instagram, LINE và hơn thế nữa — mua từ bài đăng hoặc livestream.' },
        { q: 'Instagram Live shopping là gì?', a: 'Nhận đơn trong Instagram Live; người mua có thể mua bằng cách bình luận.' },
      ],
    },
    {
      title: 'POS',
      desc: 'Thanh toán, tồn kho và phần cứng cho cửa hàng vật lý',
      faqs: [
        { q: 'Hỗ trợ phần cứng nào?', a: 'Máy tính tiền, máy quét, máy in hóa đơn, màn hình khách và cấu hình iPad.' },
        { q: 'POS có đồng bộ với cửa hàng online không?', a: 'Có — tồn kho, đơn hàng và thành viên đồng bộ theo thời gian thực cho OMO thực sự.' },
      ],
    },
    {
      title: 'Quảng cáo số',
      desc: 'Dịch vụ quản lý quảng cáo và các dịch vụ liên quan',
      faqs: [
        { q: 'ARVIX có chạy quảng cáo không?', a: 'Có — Facebook, Google, LINE và hơn thế nữa, kết hợp phân khúc RFIM.' },
      ],
    },
    {
      title: 'Dịch vụ bổ sung',
      desc: 'Tư vấn, sự kiện, khóa học và workshop theo mùa',
      faqs: [
        { q: 'Bạn có dịch vụ tư vấn không?', a: 'Có — cố vấn 1-1 hỗ trợ chiến lược ra mắt và kế hoạch marketing.' },
        { q: 'Có những tài nguyên học tập nào?', a: 'Bài viết knowledge base, hướng dẫn video, webinar và buổi trực tiếp.' },
      ],
    },
    {
      title: 'Hợp tác',
      desc: 'Chúng tôi chào đón đề xuất hợp tác tạo giá trị chung',
      faqs: [
        { q: 'Làm sao để hợp tác với ARVIX?', a: 'Liên hệ qua website với đề xuất của bạn — công nghệ, marketing và sự kiện đồng thương hiệu đều được chào đón.' },
      ],
    },
  ],
  resources: [
    { title: 'Playbook thiết kế cửa hàng', desc: 'Xây cửa hàng thương hiệu nổi bật' },
    { title: 'Hướng dẫn SEO thương hiệu', desc: 'Xếp hạng cao hơn và tăng traffic tự nhiên' },
    { title: 'Hướng dẫn quảng cáo cho người mới', desc: 'Học quảng cáo số từ số không' },
    { title: 'Playbook thành viên', desc: 'Nuôi khách trung thành và tăng mua lại' },
  ],
}

const es: FaqCopy = {
  title: 'FAQ para principiantes de ARVIX',
  subtitle: '¿Aún tienes preguntas? Contacta al equipo de ARVIX — te ayudaremos a encontrar el mejor siguiente paso.',
  faqHeading: 'Preguntas frecuentes',
  resourcesTitle: 'Recursos iniciales',
  download: 'Descargar',
  ctaTitle: '¿Necesitas ayuda? Habla con nosotros.',
  ctaSubtitle: 'Horario de soporte: lun–vie, 10:00–19:00',
  contactUs: 'Contáctanos',
  categories: [
    {
      title: 'Sobre ARVIX',
      desc: 'Resumen de la empresa, servicios y cómo usar la plataforma ARVIX',
      faqs: [
        { q: '¿Qué ofrece ARVIX?', a: 'ARVIX ofrece soluciones minoristas omnicanal que incluyen tiendas online, social commerce, POS, herramientas de marketing y analítica.' },
        { q: '¿Dónde opera ARVIX?', a: 'ARVIX sirve a Taiwán, Hong Kong, Malasia, Singapur y más — con la confianza de más de 600.000 comercios.' },
      ],
    },
    {
      title: 'Cómo empezar',
      desc: 'Cómo lanzar una tienda, configurar el sitio y empezar a vender',
      faqs: [
        { q: '¿Cómo creo una tienda?', a: 'Haz clic en Empezar prueba gratis, completa los datos básicos y lanza — sin tarjeta de crédito, prueba de 14 días.' },
        { q: '¿Necesito habilidades técnicas?', a: 'No. El panel está pensado para que equipos no técnicos lancen una tienda de marca profesional.' },
      ],
    },
    {
      title: 'Pagos y logística',
      desc: 'Opciones de pago y envío para tus clientes',
      faqs: [
        { q: '¿Qué pagos se admiten?', a: 'El checkout admite pagos con tarjeta.' },
        { q: '¿Qué logística se admite?', a: 'Se admite entrega a domicilio. Otras opciones de recogida dependen de la configuración de envío de la tienda.' },
        { q: '¿Cuál es el correo de soporte?', a: 'Escribe a arvix1413@gmail.com y te responderemos pronto.' },
      ],
    },
    {
      title: 'Planes y facturación',
      desc: 'Planes de precios y cómo funciona la contratación',
      faqs: [
        { q: '¿Qué planes hay disponibles?', a: 'Store Explorer, Commerce Strategist, OMO Master y Omnichannel Navigator — consulta Precios para más detalles.' },
        { q: '¿Puedo cambiar de plan en cualquier momento?', a: 'Sí. Las mejoras se aplican de inmediato; las bajadas de plan entran en vigor en el siguiente ciclo de facturación.' },
      ],
    },
    {
      title: 'Funciones del producto',
      desc: 'Capacidades de la plataforma, personalización y promociones',
      faqs: [
        { q: '¿Qué es OMO?', a: 'Online Merge Offline unifica canales para que los compradores tengan una experiencia fluida y los comercios gestionen pedidos, inventario y miembros en un solo lugar.' },
        { q: '¿Qué hace Shoplytics?', a: 'Analítica de personas, productos y lugares — más insights de IA con orientación de marketing accionable.' },
      ],
    },
    {
      title: 'Social commerce',
      desc: 'Funciones de compra social y soporte de live commerce',
      faqs: [
        { q: '¿Qué plataformas sociales?', a: 'Facebook, Instagram, LINE y más — compra desde publicaciones o directos.' },
        { q: '¿Qué es Instagram Live shopping?', a: 'Recibe pedidos durante Instagram Live; los compradores pueden comprar comentando.' },
      ],
    },
    {
      title: 'POS',
      desc: 'Cobro, inventario y hardware para tiendas físicas',
      faqs: [
        { q: '¿Qué hardware se admite?', a: 'Cajas registradoras, escáneres, impresoras de recibos, pantallas para clientes y configuraciones con iPad.' },
        { q: '¿El POS se sincroniza con la tienda online?', a: 'Sí — inventario, pedidos y miembros se sincronizan en tiempo real para un OMO real.' },
      ],
    },
    {
      title: 'Anuncios digitales',
      desc: 'Servicios de gestión de anuncios y ofertas relacionadas',
      faqs: [
        { q: '¿ARVIX gestiona anuncios?', a: 'Sí — Facebook, Google, LINE y más, junto con segmentación RFIM.' },
      ],
    },
    {
      title: 'Servicios adicionales',
      desc: 'Asesores, eventos, cursos y talleres de temporada',
      faqs: [
        { q: '¿Ofrecen consultoría?', a: 'Sí — asesores uno a uno ayudan con la estrategia de lanzamiento y los planes de marketing.' },
        { q: '¿Qué recursos de aprendizaje hay?', a: 'Artículos de la base de conocimiento, guías en vídeo, webinars y sesiones presenciales.' },
      ],
    },
    {
      title: 'Colaboraciones',
      desc: 'Damos la bienvenida a propuestas de colaboración que creen valor mutuo',
      faqs: [
        { q: '¿Cómo me asocio con ARVIX?', a: 'Contáctanos por el sitio web con tu propuesta — tecnología, marketing y eventos co-branded son bienvenidos.' },
      ],
    },
  ],
  resources: [
    { title: 'Guía de diseño de tienda', desc: 'Crea una tienda de marca que destaque' },
    { title: 'Guía SEO de marca', desc: 'Sube en el ranking y gana más tráfico orgánico' },
    { title: 'Guía de anuncios para principiantes', desc: 'Aprende publicidad digital desde cero' },
    { title: 'Guía de membresía', desc: 'Haz crecer clientes leales y la recompra' },
  ],
}

const pt: FaqCopy = {
  title: 'FAQ para iniciantes da ARVIX',
  subtitle: 'Ainda tem dúvidas? Contacte a equipa ARVIX — vamos ajudá-lo a encontrar o melhor próximo passo.',
  faqHeading: 'Perguntas frequentes',
  resourcesTitle: 'Recursos iniciais',
  download: 'Transferir',
  ctaTitle: 'Precisa de ajuda? Fale connosco.',
  ctaSubtitle: 'Horário de suporte: seg–sex, 10:00–19:00',
  contactUs: 'Contacte-nos',
  categories: [
    {
      title: 'Sobre a ARVIX',
      desc: 'Visão geral da empresa, serviços e como usar a plataforma ARVIX',
      faqs: [
        { q: 'O que a ARVIX oferece?', a: 'A ARVIX oferece soluções de retalho omnicanal incluindo lojas online, social commerce, POS, ferramentas de marketing e analytics.' },
        { q: 'Onde a ARVIX opera?', a: 'A ARVIX serve Taiwan, Hong Kong, Malásia, Singapura e mais — com a confiança de mais de 600.000 comerciantes.' },
      ],
    },
    {
      title: 'Começar',
      desc: 'Como lançar uma loja, configurar o site e começar a vender',
      faqs: [
        { q: 'Como crio uma loja?', a: 'Clique em Iniciar teste gratuito, preencha os dados básicos e lance — sem cartão de crédito, teste de 14 dias.' },
        { q: 'Preciso de competências técnicas?', a: 'Não. O admin foi feito para equipas não técnicas lançarem uma loja de marca profissional.' },
      ],
    },
    {
      title: 'Pagamentos e logística',
      desc: 'Opções de pagamento e envio para seus clientes',
      faqs: [
        { q: 'Quais pagamentos são aceitos?', a: 'O checkout aceita pagamento com cartão.' },
        { q: 'Quais opções de logística?', a: 'Entrega em domicílio é suportada. Outras opções de retirada dependem da configuração de frete da loja.' },
        { q: 'Qual é o e-mail de suporte?', a: 'Envie para arvix1413@gmail.com e responderemos em breve.' },
      ],
    },
    {
      title: 'Planos e faturação',
      desc: 'Planos de preços e como funciona a contratação',
      faqs: [
        { q: 'Que planos estão disponíveis?', a: 'Store Explorer, Commerce Strategist, OMO Master e Omnichannel Navigator — veja Preços para detalhes.' },
        { q: 'Posso mudar de plano a qualquer momento?', a: 'Sim. Upgrades aplicam-se de imediato; downgrades entram em vigor no próximo ciclo de faturação.' },
      ],
    },
    {
      title: 'Funcionalidades do produto',
      desc: 'Capacidades da plataforma, personalização e promoções',
      faqs: [
        { q: 'O que é OMO?', a: 'Online Merge Offline unifica canais para que os compradores tenham uma experiência fluida e os comerciantes geram encomendas, inventário e membros num só lugar.' },
        { q: 'O que faz o Shoplytics?', a: 'Analytics de pessoas, produtos e locais — mais insights de IA com orientação de marketing acionável.' },
      ],
    },
    {
      title: 'Social commerce',
      desc: 'Funcionalidades de compras sociais e suporte a live commerce',
      faqs: [
        { q: 'Que plataformas sociais?', a: 'Facebook, Instagram, LINE e mais — compre a partir de publicações ou lives.' },
        { q: 'O que é Instagram Live shopping?', a: 'Receba encomendas durante o Instagram Live; os compradores podem comprar comentando.' },
      ],
    },
    {
      title: 'POS',
      desc: 'Checkout, inventário e hardware para lojas físicas',
      faqs: [
        { q: 'Que hardware é suportado?', a: 'Caixas registadoras, scanners, impressoras de recibos, ecrãs para clientes e configurações com iPad.' },
        { q: 'O POS sincroniza com a loja online?', a: 'Sim — inventário, encomendas e membros sincronizam em tempo real para um OMO verdadeiro.' },
      ],
    },
    {
      title: 'Anúncios digitais',
      desc: 'Serviços de gestão de anúncios e ofertas relacionadas',
      faqs: [
        { q: 'A ARVIX gere anúncios?', a: 'Sim — Facebook, Google, LINE e mais, com segmentação RFIM.' },
      ],
    },
    {
      title: 'Serviços adicionais',
      desc: 'Consultores, eventos, cursos e workshops sazonais',
      faqs: [
        { q: 'Oferecem consultoria?', a: 'Sim — consultores one-on-one ajudam com a estratégia de lançamento e planos de marketing.' },
        { q: 'Que recursos de aprendizagem existem?', a: 'Artigos da base de conhecimento, guias em vídeo, webinars e sessões presenciais.' },
      ],
    },
    {
      title: 'Parcerias',
      desc: 'Damos as boas-vindas a propostas de colaboração que criem valor mútuo',
      faqs: [
        { q: 'Como faço parceria com a ARVIX?', a: 'Contacte-nos pelo site com a sua proposta — tecnologia, marketing e eventos co-branded são bem-vindos.' },
      ],
    },
  ],
  resources: [
    { title: 'Guia de design da loja', desc: 'Construa uma loja de marca que se destaque' },
    { title: 'Guia de SEO da marca', desc: 'Suba no ranking e ganhe mais tráfego orgânico' },
    { title: 'Guia de anúncios para iniciantes', desc: 'Aprenda publicidade digital do zero' },
    { title: 'Guia de membership', desc: 'Cresça clientes fiéis e a recompra' },
  ],
}

const de: FaqCopy = {
  title: 'ARVIX Einsteiger-FAQ',
  subtitle: 'Noch Fragen? Kontaktieren Sie das ARVIX-Team — wir helfen Ihnen beim besten nächsten Schritt.',
  faqHeading: 'Häufig gestellte Fragen',
  resourcesTitle: 'Starter-Ressourcen',
  download: 'Herunterladen',
  ctaTitle: 'Brauchst du Hilfe? Sprich mit uns.',
  ctaSubtitle: 'Support-Zeiten: Mo–Fr, 10:00–19:00',
  contactUs: 'Kontaktieren Sie uns',
  categories: [
    {
      title: 'Über ARVIX',
      desc: 'Unternehmensüberblick, Services und Nutzung der ARVIX-Plattform',
      faqs: [
        { q: 'Was bietet ARVIX?', a: 'ARVIX bietet Omnichannel-Retail-Lösungen inklusive Online-Shops, Social Commerce, POS, Marketing-Tools und Analytics.' },
        { q: 'Wo ist ARVIX aktiv?', a: 'ARVIX bedient Taiwan, Hongkong, Malaysia, Singapur und mehr — vertraut von über 600.000 Händlern.' },
      ],
    },
    {
      title: 'Erste Schritte',
      desc: 'Shop starten, Website einrichten und verkaufen',
      faqs: [
        { q: 'Wie erstelle ich einen Shop?', a: 'Klicken Sie auf Kostenlose Testphase starten, füllen Sie die Basisdaten aus und starten Sie — keine Kreditkarte, 14-Tage-Test.' },
        { q: 'Brauche ich technische Kenntnisse?', a: 'Nein. Das Admin ist für nicht-technische Teams gebaut, um einen professionellen Marken-Shop zu starten.' },
      ],
    },
    {
      title: 'Zahlungen & Logistik',
      desc: 'Zahlungs- und Versandoptionen für Ihre Kunden',
      faqs: [
        { q: 'Welche Zahlungen werden unterstützt?', a: 'Der Checkout unterstützt Kartenzahlungen.' },
        { q: 'Welche Logistik wird unterstützt?', a: 'Lieferung nach Hause wird unterstützt. Weitere Abholoptionen hängen von den Versandeinstellungen des Shops ab.' },
        { q: 'Wie lautet die Support-E-Mail?', a: 'Schreiben Sie an arvix1413@gmail.com — wir antworten zeitnah.' },
      ],
    },
    {
      title: 'Pläne & Abrechnung',
      desc: 'Preispläne und Vertragsablauf',
      faqs: [
        { q: 'Welche Pläne gibt es?', a: 'Store Explorer, Commerce Strategist, OMO Master und Omnichannel Navigator — Details auf der Preisseite.' },
        { q: 'Kann ich Pläne jederzeit ändern?', a: 'Ja. Upgrades gelten sofort; Downgrades ab dem nächsten Abrechnungszyklus.' },
      ],
    },
    {
      title: 'Produktfunktionen',
      desc: 'Plattformfähigkeiten, Anpassung und Aktionen',
      faqs: [
        { q: 'Was ist OMO?', a: 'Online Merge Offline vereint Kanäle, damit Käufer ein nahtloses Erlebnis erhalten und Händler Bestellungen, Bestand und Mitglieder an einem Ort verwalten.' },
        { q: 'Was macht Shoplytics?', a: 'Analytics zu Menschen, Produkten und Orten — plus KI-Insights mit umsetzbarer Marketing-Guidance.' },
      ],
    },
    {
      title: 'Social Commerce',
      desc: 'Social-Shopping-Funktionen und Live-Commerce-Support',
      faqs: [
        { q: 'Welche Social-Plattformen?', a: 'Facebook, Instagram, LINE und mehr — Einkauf aus Posts oder Livestreams.' },
        { q: 'Was ist Instagram Live Shopping?', a: 'Bestellungen während Instagram Live empfangen; Käufer können per Kommentar kaufen.' },
      ],
    },
    {
      title: 'POS',
      desc: 'Kasse, Bestand und Hardware für Filialen',
      faqs: [
        { q: 'Welche Hardware wird unterstützt?', a: 'Kassen, Scanner, Belegdrucker, Kundendisplays und iPad-Setups.' },
        { q: 'Synchronisiert POS mit dem Online-Shop?', a: 'Ja — Bestand, Bestellungen und Mitglieder synchronisieren in Echtzeit für echtes OMO.' },
      ],
    },
    {
      title: 'Digitale Anzeigen',
      desc: 'Anzeigenmanagement und verwandte Angebote',
      faqs: [
        { q: 'Schaltet ARVIX Anzeigen?', a: 'Ja — Facebook, Google, LINE und mehr, kombiniert mit RFIM-Segmentierung.' },
      ],
    },
    {
      title: 'Zusatzleistungen',
      desc: 'Berater, Events, Kurse und saisonale Workshops',
      faqs: [
        { q: 'Bieten Sie Beratung an?', a: 'Ja — One-to-one-Berater helfen bei Launch-Strategie und Marketingplänen.' },
        { q: 'Welche Lernressourcen gibt es?', a: 'Knowledge-Base-Artikel, Video-Guides, Webinare und Präsenzsessions.' },
      ],
    },
    {
      title: 'Partnerschaften',
      desc: 'Wir begrüßen Kooperationsvorschläge mit gegenseitigem Nutzen',
      faqs: [
        { q: 'Wie werde ich Partner von ARVIX?', a: 'Kontaktieren Sie uns über die Website mit Ihrem Vorschlag — Tech, Marketing und Co-Branding-Events sind willkommen.' },
      ],
    },
  ],
  resources: [
    { title: 'Shop-Design-Playbook', desc: 'Einen Marken-Shop bauen, der auffällt' },
    { title: 'Marken-SEO-Guide', desc: 'Höher ranken und mehr organischen Traffic gewinnen' },
    { title: 'Anzeigen-Starter-Guide', desc: 'Digitale Werbung von null lernen' },
    { title: 'Membership-Playbook', desc: 'Treue Kunden aufbauen und Wiederkäufe steigern' },
  ],
}

const fr: FaqCopy = {
  title: 'FAQ débutant ARVIX',
  subtitle: 'Encore des questions ? Contactez l’équipe ARVIX — nous vous aiderons à trouver la meilleure prochaine étape.',
  faqHeading: 'Questions fréquentes',
  resourcesTitle: 'Ressources de démarrage',
  download: 'Télécharger',
  ctaTitle: 'Besoin d’aide ? Parlez-nous.',
  ctaSubtitle: 'Horaires du support : lun–ven, 10:00–19:00',
  contactUs: 'Nous contacter',
  categories: [
    {
      title: 'À propos d’ARVIX',
      desc: 'Présentation de l’entreprise, services et utilisation de la plateforme ARVIX',
      faqs: [
        { q: 'Que propose ARVIX ?', a: 'ARVIX propose des solutions retail omnicanales incluant boutiques en ligne, social commerce, POS, outils marketing et analytics.' },
        { q: 'Où ARVIX opère-t-il ?', a: 'ARVIX sert Taïwan, Hong Kong, la Malaisie, Singapour et plus — de confiance pour plus de 600 000 marchands.' },
      ],
    },
    {
      title: 'Premiers pas',
      desc: 'Comment lancer une boutique, configurer le site et commencer à vendre',
      faqs: [
        { q: 'Comment créer une boutique ?', a: 'Cliquez sur Démarrer l’essai gratuit, renseignez les infos de base et lancez — sans carte bancaire, essai de 14 jours.' },
        { q: 'Faut-il des compétences techniques ?', a: 'Non. L’admin est conçu pour que des équipes non techniques lancent une boutique de marque professionnelle.' },
      ],
    },
    {
      title: 'Paiements et logistique',
      desc: 'Options de paiement et de livraison pour vos clients',
      faqs: [
        { q: 'Quels paiements sont pris en charge ?', a: 'Le paiement prend en charge les cartes.' },
        { q: 'Quelles options logistiques ?', a: 'La livraison à domicile est prise en charge. Les autres options de retrait dépendent de la configuration d’expédition de la boutique.' },
        { q: 'Quel est l’e-mail du support ?', a: 'Écrivez à arvix1413@gmail.com — nous vous répondrons rapidement.' },
      ],
    },
    {
      title: 'Offres et facturation',
      desc: 'Plans tarifaires et fonctionnement du contrat',
      faqs: [
        { q: 'Quels plans sont disponibles ?', a: 'Store Explorer, Commerce Strategist, OMO Master et Omnichannel Navigator — voir Tarifs pour les détails.' },
        { q: 'Puis-je changer de plan à tout moment ?', a: 'Oui. Les upgrades s’appliquent immédiatement ; les downgrades prennent effet au prochain cycle de facturation.' },
      ],
    },
    {
      title: 'Fonctionnalités produit',
      desc: 'Capacités de la plateforme, personnalisation et promotions',
      faqs: [
        { q: 'Qu’est-ce que l’OMO ?', a: 'Online Merge Offline unifie les canaux pour une expérience fluide aux acheteurs et une gestion des commandes, stocks et membres en un seul endroit pour les marchands.' },
        { q: 'Que fait Shoplytics ?', a: 'Analytics sur les personnes, produits et lieux — plus des insights IA avec des conseils marketing actionnables.' },
      ],
    },
    {
      title: 'Social commerce',
      desc: 'Fonctionnalités d’achat social et support live commerce',
      faqs: [
        { q: 'Quelles plateformes sociales ?', a: 'Facebook, Instagram, LINE et plus — achetez depuis les publications ou les lives.' },
        { q: 'Qu’est-ce qu’Instagram Live shopping ?', a: 'Recevez des commandes pendant Instagram Live ; les acheteurs peuvent acheter en commentant.' },
      ],
    },
    {
      title: 'POS',
      desc: 'Caisse, stocks et matériel pour les magasins physiques',
      faqs: [
        { q: 'Quel matériel est pris en charge ?', a: 'Caisses, scanners, imprimantes de reçus, écrans client et configurations iPad.' },
        { q: 'Le POS se synchronise-t-il avec la boutique en ligne ?', a: 'Oui — stocks, commandes et membres se synchronisent en temps réel pour un vrai OMO.' },
      ],
    },
    {
      title: 'Publicité digitale',
      desc: 'Services de gestion publicitaire et offres associées',
      faqs: [
        { q: 'ARVIX gère-t-il des pubs ?', a: 'Oui — Facebook, Google, LINE et plus, associés à la segmentation RFIM.' },
      ],
    },
    {
      title: 'Services complémentaires',
      desc: 'Conseillers, événements, cours et ateliers saisonniers',
      faqs: [
        { q: 'Proposez-vous du conseil ?', a: 'Oui — des conseillers en one-to-one aident sur la stratégie de lancement et les plans marketing.' },
        { q: 'Quelles ressources d’apprentissage existent ?', a: 'Articles de la base de connaissances, guides vidéo, webinaires et sessions en présentiel.' },
      ],
    },
    {
      title: 'Partenariats',
      desc: 'Nous accueillons les propositions de collaboration à valeur mutuelle',
      faqs: [
        { q: 'Comment devenir partenaire d’ARVIX ?', a: 'Contactez-nous via le site avec votre proposition — tech, marketing et événements co-brandés sont les bienvenus.' },
      ],
    },
  ],
  resources: [
    { title: 'Playbook design boutique', desc: 'Créer une boutique de marque qui se démarque' },
    { title: 'Guide SEO de marque', desc: 'Mieux se classer et gagner plus de trafic organique' },
    { title: 'Guide pubs pour débutants', desc: 'Apprendre la publicité digitale depuis zéro' },
    { title: 'Playbook membership', desc: 'Développer des clients fidèles et le rachat' },
  ],
}

const copy: Record<Locale, FaqCopy> = {
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

export default function FaqPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)
  const [openItem, setOpenItem] = useState<string | null>(null)

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
          <h2 className="text-2xl font-black mb-10" style={{ color: '#00142D' }}>{c.faqHeading}</h2>
          <div className="space-y-12">
            {c.categories.map((cat) => (
              <div key={cat.title}>
                <h3 className="text-xl font-black mb-1" style={{ color: '#00142D' }}>{cat.title}</h3>
                <p className="text-sm mb-5" style={{ color: '#687280' }}>{cat.desc}</p>
                <div className="space-y-3">
                  {cat.faqs.map((faq) => {
                    const key = `${cat.title}-${faq.q}`
                    const isOpen = openItem === key
                    return (
                      <div key={faq.q} className="rounded-xl border border-gray-100 overflow-hidden">
                        <button className="w-full text-left p-5 flex items-center justify-between font-semibold hover:bg-gray-50 transition-colors"
                          style={{ color: '#00142D' }}
                          onClick={() => setOpenItem(isOpen ? null : key)}>
                          {faq.q}
                          <span className="ml-4 flex-shrink-0 text-lg" style={{ color: '#5B5FF0' }}>{isOpen ? '−' : '+'}</span>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: '#687280' }}>
                            {faq.a}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black mb-8" style={{ color: '#00142D' }}>{c.resourcesTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {c.resources.map((r) => (
              <div key={r.title} className="p-6 bg-white rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#EEF0FF' }}>
                  <span style={{ color: '#5B5FF0' }}>📄</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: '#00142D' }}>{r.title}</h3>
                  <p className="text-sm" style={{ color: '#687280' }}>{r.desc}</p>
                </div>
                <span className="ml-auto text-sm font-bold" style={{ color: '#5B5FF0' }}>{c.download}</span>
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
            {c.contactUs}
          </a>
        </div>
      </section>
    </main>
  )
}
