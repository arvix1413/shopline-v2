'use client'

import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type AboutCopy = {
  title: string
  subtitle: string
  storyTitle: string
  story: string[]
  merchantsLabel: string
  milestonesTitle: string
  milestones: { year: string; desc: string }[]
  awardsTitle: string
  awards: { title: string; desc: string }[]
  ctaTitle: string
  ctaButton: string
}

const zhTW: AboutCopy = {
  title: '我們協助商家成功「賣」向全世界',
  subtitle: 'ARVIX 是全球領先的全方位零售整合平台，協助超過 600,000 個品牌實現 OMO 全通路銷售',
  storyTitle: '我們的故事',
  story: [
    'ARVIX 於 2026 年在新加坡成立，以「讓每個人都能輕鬆開店」為使命，致力於打造最完整的電商解決方案。',
    '從最初的網路商店建置工具，到今日涵蓋社群購物、POS 零售、數據分析、行銷自動化的全方位零售整合平台，ARVIX 持續進化，陪伴品牌在數位時代茁壯成長。',
    '如今，全球超過 600,000 個商家信賴 ARVIX，我們的足跡遍及台灣、香港、馬來西亞、新加坡等地，持續擴展全球版圖。',
  ],
  merchantsLabel: '全球商家數',
  milestonesTitle: 'ARVIX 里程碑',
  milestones: [
    { year: '2026', desc: '在新加坡成立，開始提供電商解決方案' },
    { year: '2015', desc: '進入台灣市場，快速成長' },
    { year: '2017', desc: '商家數突破 50,000，進軍東南亞' },
    { year: '2018', desc: '商家數突破 100,000，完成 B 輪融資' },
    { year: '2020', desc: '推出 OMO 全通路整合解決方案' },
    { year: '2021', desc: '商家數突破 400,000，推出 Shoplytics 數據分析' },
    { year: '2022', desc: '迎接十週年，商家數突破 600,000' },
    { year: '2023', desc: '推出擴充功能商店，打造開放生態圈' },
    { year: '2024', desc: '啟動 AI 洞察策略，定位「全方位零售整合專家」' },
  ],
  awardsTitle: '獲獎及認證紀錄',
  awards: [
    { title: 'ISO/IEC 27001:2022', desc: '國際資訊安全管理系統認證' },
    { title: 'PCI-DSS 合規', desc: '支付卡產業資料安全標準' },
    { title: 'CBPR 認證', desc: 'APEC 跨境隱私規則認證' },
    { title: '最佳 IT 雇主獎', desc: 'IT Matters Awards 肯定' },
    { title: 'IIA 國際創新獎', desc: '社群購物解決方案獲獎' },
  ],
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  ctaButton: '立即免費試用',
}

const zhCN: AboutCopy = {
  title: '我们协助商家成功「卖」向全世界',
  subtitle: 'ARVIX 是全球领先的全方位零售整合平台，协助超过 600,000 个品牌实现 OMO 全渠道销售',
  storyTitle: '我们的故事',
  story: [
    'ARVIX 于 2026 年在新加坡成立，以「让每个人都能轻松开店」为使命，致力于打造最完整的电商解决方案。',
    '从最初的网络商店建置工具，到今日涵盖社群购物、POS 零售、数据分析、营销自动化的全方位零售整合平台，ARVIX 持续进化，陪伴品牌在数字时代茁壮成长。',
    '如今，全球超过 600,000 个商家信赖 ARVIX，我们的足迹遍及台湾、香港、马来西亚、新加坡等地，持续扩展全球版图。',
  ],
  merchantsLabel: '全球商家数',
  milestonesTitle: 'ARVIX 里程碑',
  milestones: [
    { year: '2026', desc: '在新加坡成立，开始提供电商解决方案' },
    { year: '2015', desc: '进入台湾市场，快速成长' },
    { year: '2017', desc: '商家数突破 50,000，进军东南亚' },
    { year: '2018', desc: '商家数突破 100,000，完成 B 轮融资' },
    { year: '2020', desc: '推出 OMO 全渠道整合解决方案' },
    { year: '2021', desc: '商家数突破 400,000，推出 Shoplytics 数据分析' },
    { year: '2022', desc: '迎接十周年，商家数突破 600,000' },
    { year: '2023', desc: '推出扩展功能商店，打造开放生态圈' },
    { year: '2024', desc: '启动 AI 洞察策略，定位「全方位零售整合专家」' },
  ],
  awardsTitle: '获奖及认证记录',
  awards: [
    { title: 'ISO/IEC 27001:2022', desc: '国际信息安全管理体系认证' },
    { title: 'PCI-DSS 合规', desc: '支付卡产业数据安全标准' },
    { title: 'CBPR 认证', desc: 'APEC 跨境隐私规则认证' },
    { title: '最佳 IT 雇主奖', desc: 'IT Matters Awards 肯定' },
    { title: 'IIA 国际创新奖', desc: '社群购物解决方案获奖' },
  ],
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  ctaButton: '立即免费试用',
}

const en: AboutCopy = {
  title: 'We help merchants sell to the world',
  subtitle: 'ARVIX is a leading omnichannel retail platform, helping 600,000+ brands unify online and offline commerce.',
  storyTitle: 'Our story',
  story: [
    'Founded in Singapore in 2026, ARVIX set out to make launching a store simple for everyone — with a complete commerce toolkit.',
    'From store builders to social commerce, POS, analytics, and marketing automation, ARVIX keeps evolving with brands in the digital era.',
    'Today more than 600,000 merchants trust ARVIX across Taiwan, Hong Kong, Malaysia, Singapore, and beyond.',
  ],
  merchantsLabel: 'Merchants worldwide',
  milestonesTitle: 'ARVIX milestones',
  milestones: [
    { year: '2026', desc: 'Founded in Singapore to deliver commerce solutions' },
    { year: '2015', desc: 'Entered the Taiwan market and grew quickly' },
    { year: '2017', desc: 'Surpassed 50,000 merchants; expanded into Southeast Asia' },
    { year: '2018', desc: 'Surpassed 100,000 merchants; completed Series B' },
    { year: '2020', desc: 'Launched OMO omnichannel solutions' },
    { year: '2021', desc: 'Surpassed 400,000 merchants; launched Shoplytics' },
    { year: '2022', desc: '10th anniversary; surpassed 600,000 merchants' },
    { year: '2023', desc: 'Launched the app marketplace and open ecosystem' },
    { year: '2024', desc: 'Launched AI insights strategy as an omnichannel retail expert' },
  ],
  awardsTitle: 'Awards & certifications',
  awards: [
    { title: 'ISO/IEC 27001:2022', desc: 'International information security management certification' },
    { title: 'PCI-DSS compliant', desc: 'Payment Card Industry Data Security Standard' },
    { title: 'CBPR certified', desc: 'APEC Cross-Border Privacy Rules' },
    { title: 'Best IT Employer', desc: 'Recognized by IT Matters Awards' },
    { title: 'IIA Innovation Award', desc: 'Awarded for social commerce solutions' },
  ],
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  ctaButton: 'Start free trial',
}

const ko: AboutCopy = {
  title: '판매자가 전 세계에 판매하도록 돕습니다',
  subtitle: 'ARVIX는 선도적인 옴니채널 리테일 플랫폼으로, 60만 개 이상의 브랜드가 온·오프라인 커머스를 통합하도록 지원합니다.',
  storyTitle: '우리의 이야기',
  story: [
    '2026년 싱가포르에서 설립된 ARVIX는 누구나 쉽게 스토어를 열 수 있도록 — 완전한 커머스 툴킷과 함께 — 출발했습니다.',
    '스토어 빌더부터 소셜 커머스, POS, 분석, 마케팅 자동화까지 ARVIX는 디지털 시대의 브랜드와 함께 계속 진화합니다.',
    '오늘 대만, 홍콩, 말레이시아, 싱가포르 등에서 60만 명 이상의 판매자가 ARVIX를 신뢰합니다.',
  ],
  merchantsLabel: '전 세계 판매자',
  milestonesTitle: 'ARVIX 마일스톤',
  milestones: [
    { year: '2026', desc: '싱가포르에서 설립되어 커머스 솔루션 제공' },
    { year: '2015', desc: '대만 시장 진출 및 빠른 성장' },
    { year: '2017', desc: '판매자 5만 돌파; 동남아시아 확장' },
    { year: '2018', desc: '판매자 10만 돌파; 시리즈 B 완료' },
    { year: '2020', desc: 'OMO 옴니채널 솔루션 출시' },
    { year: '2021', desc: '판매자 40만 돌파; Shoplytics 출시' },
    { year: '2022', desc: '10주년; 판매자 60만 돌파' },
    { year: '2023', desc: '앱 마켓플레이스 및 개방형 생태계 출시' },
    { year: '2024', desc: '옴니채널 리테일 전문가로서 AI 인사이트 전략 시작' },
  ],
  awardsTitle: '수상 및 인증',
  awards: [
    { title: 'ISO/IEC 27001:2022', desc: '국제 정보보안 경영시스템 인증' },
    { title: 'PCI-DSS 준수', desc: '결제 카드 산업 데이터 보안 표준' },
    { title: 'CBPR 인증', desc: 'APEC 국경 간 개인정보 보호 규칙' },
    { title: 'Best IT Employer', desc: 'IT Matters Awards 수상' },
    { title: 'IIA Innovation Award', desc: '소셜 커머스 솔루션으로 수상' },
  ],
  ctaTitle: '전 세계 60만+ 판매자가 신뢰합니다',
  ctaButton: '무료 체험 시작',
}

const ja: AboutCopy = {
  title: '店舗が世界に売れるよう支援します',
  subtitle: 'ARVIX は先進的なオムニチャネル小売プラットフォームで、60万以上のブランドのオンライン／オフライン統合を支援しています。',
  storyTitle: '私たちのストーリー',
  story: [
    '2026 年にシンガポールで設立された ARVIX は、誰でも簡単にストアを開設できるよう — 完全なコマースツールキットとともに — スタートしました。',
    'ストアビルダーからソーシャルコマース、POS、分析、マーケティングオートメーションまで、ARVIX はデジタル時代のブランドと共に進化し続けます。',
    '今日、台湾・香港・マレーシア・シンガポールなど、60万以上の店舗が ARVIX を信頼しています。',
  ],
  merchantsLabel: '世界の店舗数',
  milestonesTitle: 'ARVIX マイルストーン',
  milestones: [
    { year: '2026', desc: 'シンガポールで設立し、コマースソリューションを提供' },
    { year: '2015', desc: '台湾市場に参入し急速に成長' },
    { year: '2017', desc: '店舗数 5 万突破；東南アジアへ拡大' },
    { year: '2018', desc: '店舗数 10 万突破；シリーズ B 完了' },
    { year: '2020', desc: 'OMO オムニチャネルソリューションを発表' },
    { year: '2021', desc: '店舗数 40 万突破；Shoplytics を発表' },
    { year: '2022', desc: '10 周年；店舗数 60 万突破' },
    { year: '2023', desc: 'アプリマーケットプレイスとオープンエコシステムを発表' },
    { year: '2024', desc: 'オムニチャネル小売の専門家として AI インサイト戦略を開始' },
  ],
  awardsTitle: '受賞・認証',
  awards: [
    { title: 'ISO/IEC 27001:2022', desc: '国際情報セキュリティマネジメント認証' },
    { title: 'PCI-DSS 準拠', desc: 'ペイメントカード業界データセキュリティ基準' },
    { title: 'CBPR 認証', desc: 'APEC 越境プライバシールール' },
    { title: 'Best IT Employer', desc: 'IT Matters Awards で認定' },
    { title: 'IIA Innovation Award', desc: 'ソーシャルコマースソリューションで受賞' },
  ],
  ctaTitle: '世界 60 万以上の店舗に信頼されています',
  ctaButton: '無料トライアルを開始',
}

const vi: AboutCopy = {
  title: 'Chúng tôi giúp nhà bán hàng bán ra thế giới',
  subtitle: 'ARVIX là nền tảng bán lẻ omnichannel hàng đầu, hỗ trợ hơn 600.000 thương hiệu thống nhất thương mại online và offline.',
  storyTitle: 'Câu chuyện của chúng tôi',
  story: [
    'Thành lập tại Singapore năm 2026, ARVIX hướng tới việc mở cửa hàng đơn giản cho mọi người — với bộ công cụ thương mại đầy đủ.',
    'Từ trình tạo cửa hàng đến thương mại xã hội, POS, phân tích và tự động hóa marketing, ARVIX tiếp tục phát triển cùng các thương hiệu trong kỷ nguyên số.',
    'Hôm nay hơn 600.000 nhà bán hàng tin tưởng ARVIX tại Đài Loan, Hồng Kông, Malaysia, Singapore và hơn thế nữa.',
  ],
  merchantsLabel: 'Nhà bán hàng toàn cầu',
  milestonesTitle: 'Các cột mốc ARVIX',
  milestones: [
    { year: '2026', desc: 'Thành lập tại Singapore để cung cấp giải pháp thương mại' },
    { year: '2015', desc: 'Gia nhập thị trường Đài Loan và tăng trưởng nhanh' },
    { year: '2017', desc: 'Vượt 50.000 nhà bán hàng; mở rộng Đông Nam Á' },
    { year: '2018', desc: 'Vượt 100.000 nhà bán hàng; hoàn tất Series B' },
    { year: '2020', desc: 'Ra mắt giải pháp OMO omnichannel' },
    { year: '2021', desc: 'Vượt 400.000 nhà bán hàng; ra mắt Shoplytics' },
    { year: '2022', desc: 'Kỷ niệm 10 năm; vượt 600.000 nhà bán hàng' },
    { year: '2023', desc: 'Ra mắt chợ ứng dụng và hệ sinh thái mở' },
    { year: '2024', desc: 'Khởi động chiến lược AI insights với tư cách chuyên gia bán lẻ omnichannel' },
  ],
  awardsTitle: 'Giải thưởng & chứng nhận',
  awards: [
    { title: 'ISO/IEC 27001:2022', desc: 'Chứng nhận quản lý an ninh thông tin quốc tế' },
    { title: 'Tuân thủ PCI-DSS', desc: 'Tiêu chuẩn bảo mật dữ liệu ngành thẻ thanh toán' },
    { title: 'Chứng nhận CBPR', desc: 'Quy tắc quyền riêng tư xuyên biên giới APEC' },
    { title: 'Best IT Employer', desc: 'Được IT Matters Awards ghi nhận' },
    { title: 'IIA Innovation Award', desc: 'Được trao cho giải pháp thương mại xã hội' },
  ],
  ctaTitle: 'Được hơn 600.000 nhà bán hàng trên thế giới tin tưởng',
  ctaButton: 'Bắt đầu dùng thử miễn phí',
}

const es: AboutCopy = {
  title: 'Ayudamos a los comercios a vender al mundo',
  subtitle: 'ARVIX es una plataforma líder de retail omnicanal que ayuda a más de 600.000 marcas a unificar el comercio online y offline.',
  storyTitle: 'Nuestra historia',
  story: [
    'Fundada en Singapur en 2026, ARVIX nació para que abrir una tienda sea simple para todos — con un kit de comercio completo.',
    'Desde constructores de tienda hasta social commerce, POS, analítica y automatización de marketing, ARVIX evoluciona con las marcas en la era digital.',
    'Hoy más de 600.000 comercios confían en ARVIX en Taiwán, Hong Kong, Malasia, Singapur y más allá.',
  ],
  merchantsLabel: 'Comercios en el mundo',
  milestonesTitle: 'Hitos de ARVIX',
  milestones: [
    { year: '2026', desc: 'Fundada en Singapur para ofrecer soluciones de comercio' },
    { year: '2015', desc: 'Entró en el mercado de Taiwán y creció rápido' },
    { year: '2017', desc: 'Superó 50.000 comercios; expansión en el Sudeste Asiático' },
    { year: '2018', desc: 'Superó 100.000 comercios; completó Serie B' },
    { year: '2020', desc: 'Lanzó soluciones OMO omnicanal' },
    { year: '2021', desc: 'Superó 400.000 comercios; lanzó Shoplytics' },
    { year: '2022', desc: '10º aniversario; superó 600.000 comercios' },
    { year: '2023', desc: 'Lanzó el marketplace de apps y un ecosistema abierto' },
    { year: '2024', desc: 'Lanzó estrategia de IA insights como experto en retail omnicanal' },
  ],
  awardsTitle: 'Premios y certificaciones',
  awards: [
    { title: 'ISO/IEC 27001:2022', desc: 'Certificación internacional de gestión de seguridad de la información' },
    { title: 'Cumple PCI-DSS', desc: 'Estándar de seguridad de datos de la industria de tarjetas de pago' },
    { title: 'Certificado CBPR', desc: 'Reglas de privacidad transfronteriza de APEC' },
    { title: 'Best IT Employer', desc: 'Reconocido por IT Matters Awards' },
    { title: 'IIA Innovation Award', desc: 'Premiado por soluciones de social commerce' },
  ],
  ctaTitle: 'Más de 600.000 comercios en el mundo confían en nosotros',
  ctaButton: 'Empezar prueba gratis',
}

const pt: AboutCopy = {
  title: 'Ajudamos comerciantes a vender para o mundo',
  subtitle: 'ARVIX é uma plataforma líder de varejo omnichannel que ajuda mais de 600.000 marcas a unificar o comércio online e offline.',
  storyTitle: 'Nossa história',
  story: [
    'Fundada em Singapura em 2026, a ARVIX nasceu para tornar a abertura de loja simples para todos — com um kit de comércio completo.',
    'De construtores de loja a social commerce, POS, analytics e automação de marketing, a ARVIX evolui com as marcas na era digital.',
    'Hoje mais de 600.000 comerciantes confiam na ARVIX em Taiwan, Hong Kong, Malásia, Singapura e além.',
  ],
  merchantsLabel: 'Comerciantes no mundo',
  milestonesTitle: 'Marcos da ARVIX',
  milestones: [
    { year: '2026', desc: 'Fundada em Singapura para entregar soluções de comércio' },
    { year: '2015', desc: 'Entrou no mercado de Taiwan e cresceu rápido' },
    { year: '2017', desc: 'Ultrapassou 50.000 comerciantes; expansão no Sudeste Asiático' },
    { year: '2018', desc: 'Ultrapassou 100.000 comerciantes; concluiu Série B' },
    { year: '2020', desc: 'Lançou soluções OMO omnichannel' },
    { year: '2021', desc: 'Ultrapassou 400.000 comerciantes; lançou Shoplytics' },
    { year: '2022', desc: '10º aniversário; ultrapassou 600.000 comerciantes' },
    { year: '2023', desc: 'Lançou o marketplace de apps e um ecossistema aberto' },
    { year: '2024', desc: 'Lançou estratégia de IA insights como especialista em varejo omnichannel' },
  ],
  awardsTitle: 'Prêmios e certificações',
  awards: [
    { title: 'ISO/IEC 27001:2022', desc: 'Certificação internacional de gestão de segurança da informação' },
    { title: 'Conformidade PCI-DSS', desc: 'Padrão de segurança de dados da indústria de cartões de pagamento' },
    { title: 'Certificado CBPR', desc: 'Regras de privacidade transfronteiriça da APEC' },
    { title: 'Best IT Employer', desc: 'Reconhecido pelo IT Matters Awards' },
    { title: 'IIA Innovation Award', desc: 'Premiado por soluções de social commerce' },
  ],
  ctaTitle: 'Mais de 600.000 comerciantes no mundo confiam em nós',
  ctaButton: 'Começar teste grátis',
}

const de: AboutCopy = {
  title: 'Wir helfen Händlern, in die Welt zu verkaufen',
  subtitle: 'ARVIX ist eine führende Omnichannel-Retail-Plattform und hilft über 600.000 Marken, Online- und Offline-Handel zu vereinen.',
  storyTitle: 'Unsere Geschichte',
  story: [
    '2026 in Singapur gegründet, wollte ARVIX das Eröffnen eines Shops für alle einfach machen — mit einem vollständigen Commerce-Toolkit.',
    'Von Shop-Buildern über Social Commerce, POS, Analytics und Marketing-Automatisierung entwickelt sich ARVIX mit Marken im digitalen Zeitalter weiter.',
    'Heute vertrauen mehr als 600.000 Händler ARVIX in Taiwan, Hongkong, Malaysia, Singapur und darüber hinaus.',
  ],
  merchantsLabel: 'Händler weltweit',
  milestonesTitle: 'ARVIX-Meilensteine',
  milestones: [
    { year: '2026', desc: 'In Singapur gegründet, um Commerce-Lösungen bereitzustellen' },
    { year: '2015', desc: 'Eintritt in den taiwanesischen Markt und schnelles Wachstum' },
    { year: '2017', desc: 'Über 50.000 Händler; Expansion nach Südostasien' },
    { year: '2018', desc: 'Über 100.000 Händler; Series B abgeschlossen' },
    { year: '2020', desc: 'OMO-Omnichannel-Lösungen gestartet' },
    { year: '2021', desc: 'Über 400.000 Händler; Shoplytics gestartet' },
    { year: '2022', desc: '10. Jubiläum; über 600.000 Händler' },
    { year: '2023', desc: 'App-Marktplatz und offenes Ökosystem gestartet' },
    { year: '2024', desc: 'KI-Insights-Strategie als Omnichannel-Retail-Experte gestartet' },
  ],
  awardsTitle: 'Auszeichnungen & Zertifizierungen',
  awards: [
    { title: 'ISO/IEC 27001:2022', desc: 'Internationale Zertifizierung für Informationssicherheitsmanagement' },
    { title: 'PCI-DSS-konform', desc: 'Payment Card Industry Data Security Standard' },
    { title: 'CBPR-zertifiziert', desc: 'APEC Cross-Border Privacy Rules' },
    { title: 'Best IT Employer', desc: 'Ausgezeichnet von IT Matters Awards' },
    { title: 'IIA Innovation Award', desc: 'Ausgezeichnet für Social-Commerce-Lösungen' },
  ],
  ctaTitle: 'Mehr als 600.000 Händler weltweit vertrauen uns',
  ctaButton: 'Kostenlose Testversion starten',
}

const fr: AboutCopy = {
  title: 'Nous aidons les marchands à vendre au monde',
  subtitle: 'ARVIX est une plateforme de retail omnicanal de premier plan, qui aide plus de 600 000 marques à unifier le commerce en ligne et hors ligne.',
  storyTitle: 'Notre histoire',
  story: [
    'Fondée à Singapour en 2026, ARVIX a voulu rendre l’ouverture d’une boutique simple pour tous — avec une boîte à outils commerce complète.',
    'Des constructeurs de boutique au social commerce, POS, analytics et automatisation marketing, ARVIX évolue avec les marques à l’ère numérique.',
    'Aujourd’hui, plus de 600 000 marchands font confiance à ARVIX à Taïwan, Hong Kong, en Malaisie, à Singapour et au-delà.',
  ],
  merchantsLabel: 'Marchands dans le monde',
  milestonesTitle: 'Étapes clés d’ARVIX',
  milestones: [
    { year: '2026', desc: 'Fondée à Singapour pour fournir des solutions commerce' },
    { year: '2015', desc: 'Entrée sur le marché taïwanais et croissance rapide' },
    { year: '2017', desc: 'Plus de 50 000 marchands ; expansion en Asie du Sud-Est' },
    { year: '2018', desc: 'Plus de 100 000 marchands ; Series B terminée' },
    { year: '2020', desc: 'Lancement des solutions OMO omnicanales' },
    { year: '2021', desc: 'Plus de 400 000 marchands ; lancement de Shoplytics' },
    { year: '2022', desc: '10e anniversaire ; plus de 600 000 marchands' },
    { year: '2023', desc: 'Lancement de la marketplace d’apps et d’un écosystème ouvert' },
    { year: '2024', desc: 'Lancement de la stratégie AI insights en tant qu’expert retail omnicanal' },
  ],
  awardsTitle: 'Récompenses et certifications',
  awards: [
    { title: 'ISO/IEC 27001:2022', desc: 'Certification internationale de gestion de la sécurité de l’information' },
    { title: 'Conforme PCI-DSS', desc: 'Norme de sécurité des données de l’industrie des cartes de paiement' },
    { title: 'Certifié CBPR', desc: 'Règles de confidentialité transfrontalières APEC' },
    { title: 'Best IT Employer', desc: 'Reconnu par IT Matters Awards' },
    { title: 'IIA Innovation Award', desc: 'Récompensé pour les solutions de social commerce' },
  ],
  ctaTitle: 'Plus de 600 000 marchands dans le monde nous font confiance',
  ctaButton: 'Commencer l’essai gratuit',
}

const copy: Partial<Record<Locale, AboutCopy>> & { 'zh-TW': AboutCopy; en: AboutCopy } = {
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

export default function AboutPage() {
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black mb-6" style={{ color: '#00142D' }}>{c.storyTitle}</h2>
              {c.story.map((p) => (
                <p key={p.slice(0, 24)} className="text-base leading-relaxed mb-4 last:mb-0" style={{ color: '#687280' }}>{p}</p>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#EEF0FF', height: '360px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="text-center">
                <div className="text-6xl font-black mb-2" style={{ color: '#5B5FF0' }}>600K+</div>
                <div className="text-lg font-bold" style={{ color: '#00142D' }}>{c.merchantsLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.milestonesTitle}</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 hidden md:block" style={{ backgroundColor: '#D1DCE8', transform: 'translateX(-50%)' }} />
            <div className="space-y-8">
              {c.milestones.map((m, i) => (
                <div key={m.year} className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="inline-block p-6 bg-white rounded-2xl shadow-sm">
                      <div className="text-2xl font-black mb-1" style={{ color: '#5B5FF0' }}>{m.year}</div>
                      <p className="text-sm" style={{ color: '#354253' }}>{m.desc}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full flex-shrink-0 hidden md:block" style={{ backgroundColor: '#5B5FF0' }} />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.awardsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {c.awards.map((a) => (
              <div key={a.title} className="p-6 rounded-2xl border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: '#EEF0FF' }}>
                  <span className="text-xl">🏆</span>
                </div>
                <h3 className="font-bold text-sm mb-1" style={{ color: '#00142D' }}>{a.title}</h3>
                <p className="text-xs" style={{ color: '#687280' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.ctaTitle}</h2>
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.ctaButton}
          </a>
        </div>
      </section>
    </main>
  )
}
