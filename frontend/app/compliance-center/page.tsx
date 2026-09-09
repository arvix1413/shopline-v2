'use client'

import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type ComplianceCopy = {
  title: string
  subtitle: string
  modelTitle: string
  modelDesc: string
  sections: { title: string; items: string[] }[]
  certTitle: string
  certifications: { title: string; desc: string }[]
  dataTitle: string
  dataItems: { title: string; desc: string }[]
  ctaTitle: string
  ctaSubtitle: string
  cta: string
}

const zhTW: ComplianceCopy = {
  title: '資格與認證',
  subtitle: 'ARVIX 致力於提供安全可靠的電商平台，持續取得國際認證保障商家與消費者的資料安全',
  modelTitle: 'ARVIX - 共同責任模型',
  modelDesc: 'ARVIX 與商家共同承擔平台安全責任，確保整體生態系統的安全性',
  sections: [
    {
      title: 'ARVIX 的安全責任',
      items: ['平台基礎設施的安全性與可用性', '資料中心的實體安全防護', '網路安全與 DDoS 防護', '應用程式層級的安全更新與修補', '資料加密傳輸與儲存'],
    },
    {
      title: '商家的安全責任',
      items: ['帳號密碼的安全管理', '員工帳號權限的適當設定', '消費者個人資料的合規處理', '第三方應用程式的安全評估', '定期審查帳號存取紀錄'],
    },
  ],
  certTitle: '獲獎及認證紀錄',
  certifications: [
    { title: 'PCI-DSS 合規', desc: 'ARVIX Payments 符合 PCI-DSS 支付卡產業資料安全標準，確保所有支付交易的安全性。' },
    { title: 'CBPR 認證', desc: 'APEC 跨境隱私規則認證，確保跨境資料傳輸符合國際隱私保護標準。' },
    { title: 'ISO/IEC 27001:2022', desc: '國際資訊安全管理系統標準認證，代表 ARVIX 具備完善的資訊安全管理體系。' },
  ],
  dataTitle: '資料處理補充條款',
  dataItems: [
    { title: 'ARVIX 資料處理補充條款', desc: '詳細說明 ARVIX 如何處理、儲存及保護商家與消費者的個人資料，符合 GDPR 及台灣個資法規範。' },
    { title: '儲存在平台上的資料安全性', desc: '所有資料均採用 AES-256 加密儲存，並定期進行安全稽核與滲透測試，確保資料不被未授權存取。' },
    { title: '安全配置和管理任務', desc: '提供詳細的安全配置指南，協助商家正確設定帳號權限、啟用雙因素驗證等安全措施。' },
  ],
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  ctaSubtitle: '有疑問嗎？我們的安全團隊隨時為您解答',
  cta: '立即免費試用',
}

const zhCN: ComplianceCopy = {
  title: '资格与认证',
  subtitle: 'ARVIX 致力于提供安全可靠的电商平台，持续取得国际认证保障商家与消费者的资料安全',
  modelTitle: 'ARVIX - 共同责任模型',
  modelDesc: 'ARVIX 与商家共同承担平台安全责任，确保整体生态系统的安全性',
  sections: [
    {
      title: 'ARVIX 的安全责任',
      items: ['平台基础设施的安全性与可用性', '数据中心的实体安全防护', '网络安全与 DDoS 防护', '应用程序层级的安全更新与修补', '数据加密传输与存储'],
    },
    {
      title: '商家的安全责任',
      items: ['账号密码的安全管理', '员工账号权限的适当设定', '消费者个人资料的合规处理', '第三方应用程序的安全评估', '定期审查账号访问纪录'],
    },
  ],
  certTitle: '获奖及认证纪录',
  certifications: [
    { title: 'PCI-DSS 合规', desc: 'ARVIX Payments 符合 PCI-DSS 支付卡产业数据安全标准，确保所有支付交易的安全性。' },
    { title: 'CBPR 认证', desc: 'APEC 跨境隐私规则认证，确保跨境数据传输符合国际隐私保护标准。' },
    { title: 'ISO/IEC 27001:2022', desc: '国际信息安全管理体系标准认证，代表 ARVIX 具备完善的信息安全管理体系。' },
  ],
  dataTitle: '数据处理补充条款',
  dataItems: [
    { title: 'ARVIX 数据处理补充条款', desc: '详细说明 ARVIX 如何处理、存储及保护商家与消费者的个人资料，符合 GDPR 及台湾个资法规范。' },
    { title: '存储在平台上的资料安全性', desc: '所有资料均采用 AES-256 加密存储，并定期进行安全稽核与渗透测试，确保资料不被未授权访问。' },
    { title: '安全配置和管理任务', desc: '提供详细的安全配置指南，协助商家正确设定账号权限、启用双因素验证等安全措施。' },
  ],
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  ctaSubtitle: '有疑问吗？我们的安全团队随时为您解答',
  cta: '立即免费试用',
}

const en: ComplianceCopy = {
  title: 'Trust & certifications',
  subtitle: 'ARVIX delivers a secure commerce platform with international certifications that protect merchant and shopper data',
  modelTitle: 'ARVIX shared responsibility model',
  modelDesc: 'ARVIX and merchants share platform security duties to keep the ecosystem safe',
  sections: [
    {
      title: 'ARVIX security responsibilities',
      items: ['Infrastructure security and availability', 'Physical data-center protection', 'Network security and DDoS defense', 'Application security updates and patches', 'Encrypted data in transit and at rest'],
    },
    {
      title: 'Merchant security responsibilities',
      items: ['Account password hygiene', 'Appropriate staff permission settings', 'Compliant handling of customer personal data', 'Security review of third-party apps', 'Regular review of account access logs'],
    },
  ],
  certTitle: 'Awards & certifications',
  certifications: [
    { title: 'PCI-DSS compliance', desc: 'ARVIX Payments meets PCI-DSS standards to keep payment transactions secure.' },
    { title: 'CBPR certification', desc: 'APEC Cross-Border Privacy Rules certification for international data transfers.' },
    { title: 'ISO/IEC 27001:2022', desc: 'International information security management certification for ARVIX controls.' },
  ],
  dataTitle: 'Data processing addendum',
  dataItems: [
    { title: 'ARVIX data processing addendum', desc: 'How ARVIX processes, stores, and protects personal data under GDPR and Taiwan PDPA.' },
    { title: 'Security of data on the platform', desc: 'AES-256 encryption at rest with regular audits and penetration tests against unauthorized access.' },
    { title: 'Security configuration & ops', desc: 'Guides for permissions, MFA, and other merchant security controls.' },
  ],
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  ctaSubtitle: 'Questions? Our security team is ready to help',
  cta: 'Start free trial',
}

const ko: ComplianceCopy = {
  title: '신뢰와 인증',
  subtitle: 'ARVIX는 판매자와 쇼퍼 데이터를 보호하는 국제 인증과 함께 안전한 커머스 플랫폼을 제공합니다',
  modelTitle: 'ARVIX 공동 책임 모델',
  modelDesc: 'ARVIX와 판매자가 플랫폼 보안 책임을 공유해 생태계를 안전하게 유지합니다',
  sections: [
    {
      title: 'ARVIX 보안 책임',
      items: ['인프라 보안과 가용성', '물리적 데이터센터 보호', '네트워크 보안과 DDoS 방어', '애플리케이션 보안 업데이트와 패치', '전송 중·저장 시 데이터 암호화'],
    },
    {
      title: '판매자 보안 책임',
      items: ['계정 비밀번호 위생', '적절한 직원 권한 설정', '고객 개인정보의 준수 처리', '서드파티 앱 보안 검토', '계정 접근 로그 정기 검토'],
    },
  ],
  certTitle: '수상 및 인증',
  certifications: [
    { title: 'PCI-DSS 준수', desc: 'ARVIX Payments는 결제 거래 보안을 위해 PCI-DSS 표준을 충족합니다.' },
    { title: 'CBPR 인증', desc: '국제 데이터 전송을 위한 APEC 국경 간 개인정보 규칙 인증.' },
    { title: 'ISO/IEC 27001:2022', desc: 'ARVIX 통제를 위한 국제 정보보안 관리 인증.' },
  ],
  dataTitle: '데이터 처리 부속서',
  dataItems: [
    { title: 'ARVIX 데이터 처리 부속서', desc: 'GDPR 및 대만 PDPA 하에서 ARVIX가 개인정보를 처리·저장·보호하는 방식.' },
    { title: '플랫폼 데이터 보안', desc: '무단 접근에 대비한 AES-256 저장 암호화와 정기 감사·침투 테스트.' },
    { title: '보안 구성 & 운영', desc: '권한, MFA 및 기타 판매자 보안 통제 가이드.' },
  ],
  ctaTitle: '전 세계 60만+ 판매자가 신뢰합니다',
  ctaSubtitle: '궁금한 점이 있나요? 보안 팀이 도와드릴 준비가 되어 있습니다',
  cta: '무료 체험 시작',
}

const ja: ComplianceCopy = {
  title: '信頼と認証',
  subtitle: 'ARVIX は加盟店とショッパーのデータを守る国際認証とともに、安全なコマースプラットフォームを提供します',
  modelTitle: 'ARVIX 共同責任モデル',
  modelDesc: 'ARVIX と加盟店がプラットフォームセキュリティの責務を共有し、エコシステムを安全に保ちます',
  sections: [
    {
      title: 'ARVIX のセキュリティ責任',
      items: ['インフラのセキュリティと可用性', 'データセンターの物理的保護', 'ネットワークセキュリティと DDoS 防御', 'アプリケーションのセキュリティ更新とパッチ', '転送中・保管時のデータ暗号化'],
    },
    {
      title: '加盟店のセキュリティ責任',
      items: ['アカウントパスワードの衛生管理', '適切なスタッフ権限設定', '顧客個人データの準拠した取り扱い', 'サードパーティアプリのセキュリティレビュー', 'アカウントアクセスログの定期確認'],
    },
  ],
  certTitle: '受賞と認証',
  certifications: [
    { title: 'PCI-DSS 準拠', desc: 'ARVIX Payments は決済取引の安全のため PCI-DSS 基準を満たします。' },
    { title: 'CBPR 認証', desc: '国際データ転送向けの APEC 越境プライバシールール認証。' },
    { title: 'ISO/IEC 27001:2022', desc: 'ARVIX の統制のための国際情報セキュリティ管理認証。' },
  ],
  dataTitle: 'データ処理補足条項',
  dataItems: [
    { title: 'ARVIX データ処理補足条項', desc: 'GDPR および台湾 PDPA のもとで ARVIX が個人データを処理・保管・保護する方法。' },
    { title: 'プラットフォーム上のデータの安全性', desc: 'AES-256 保管時暗号化と、不正アクセスに対する定期監査・侵入テスト。' },
    { title: 'セキュリティ設定と運用', desc: '権限、MFA、その他加盟店セキュリティ統制のガイド。' },
  ],
  ctaTitle: '世界中 60 万以上の加盟店が信頼',
  ctaSubtitle: 'ご質問は？セキュリティチームがサポートします',
  cta: '無料トライアルを開始',
}

const vi: ComplianceCopy = {
  title: 'Tin cậy & chứng nhận',
  subtitle: 'ARVIX cung cấp nền tảng thương mại an toàn với các chứng nhận quốc tế bảo vệ dữ liệu người bán và người mua',
  modelTitle: 'Mô hình trách nhiệm chung ARVIX',
  modelDesc: 'ARVIX và người bán chia sẻ trách nhiệm bảo mật nền tảng để giữ hệ sinh thái an toàn',
  sections: [
    {
      title: 'Trách nhiệm bảo mật của ARVIX',
      items: ['Bảo mật và tính sẵn sàng hạ tầng', 'Bảo vệ vật lý trung tâm dữ liệu', 'Bảo mật mạng và phòng thủ DDoS', 'Cập nhật và vá bảo mật ứng dụng', 'Mã hóa dữ liệu khi truyền và khi lưu'],
    },
    {
      title: 'Trách nhiệm bảo mật của người bán',
      items: ['Vệ sinh mật khẩu tài khoản', 'Thiết lập quyền nhân viên phù hợp', 'Xử lý dữ liệu cá nhân khách hàng đúng tuân thủ', 'Rà soát bảo mật ứng dụng bên thứ ba', 'Định kỳ xem nhật ký truy cập tài khoản'],
    },
  ],
  certTitle: 'Giải thưởng & chứng nhận',
  certifications: [
    { title: 'Tuân thủ PCI-DSS', desc: 'ARVIX Payments đáp ứng tiêu chuẩn PCI-DSS để giữ giao dịch thanh toán an toàn.' },
    { title: 'Chứng nhận CBPR', desc: 'Chứng nhận Quy tắc quyền riêng tư xuyên biên giới APEC cho truyền dữ liệu quốc tế.' },
    { title: 'ISO/IEC 27001:2022', desc: 'Chứng nhận quản lý bảo mật thông tin quốc tế cho kiểm soát ARVIX.' },
  ],
  dataTitle: 'Phụ lục xử lý dữ liệu',
  dataItems: [
    { title: 'Phụ lục xử lý dữ liệu ARVIX', desc: 'Cách ARVIX xử lý, lưu trữ và bảo vệ dữ liệu cá nhân theo GDPR và PDPA Đài Loan.' },
    { title: 'Bảo mật dữ liệu trên nền tảng', desc: 'Mã hóa AES-256 khi lưu kèm kiểm toán và kiểm thử xâm nhập định kỳ chống truy cập trái phép.' },
    { title: 'Cấu hình & vận hành bảo mật', desc: 'Hướng dẫn về quyền, MFA và các kiểm soát bảo mật khác cho người bán.' },
  ],
  ctaTitle: 'Được hơn 600.000 người bán trên thế giới tin dùng',
  ctaSubtitle: 'Có câu hỏi? Đội bảo mật của chúng tôi sẵn sàng hỗ trợ',
  cta: 'Bắt đầu dùng thử miễn phí',
}

const es: ComplianceCopy = {
  title: 'Confianza y certificaciones',
  subtitle: 'ARVIX ofrece una plataforma de comercio segura con certificaciones internacionales que protegen los datos de comercios y compradores',
  modelTitle: 'Modelo de responsabilidad compartida ARVIX',
  modelDesc: 'ARVIX y los comercios comparten deberes de seguridad de la plataforma para mantener el ecosistema seguro',
  sections: [
    {
      title: 'Responsabilidades de seguridad de ARVIX',
      items: ['Seguridad y disponibilidad de la infraestructura', 'Protección física del centro de datos', 'Seguridad de red y defensa DDoS', 'Actualizaciones y parches de seguridad de aplicaciones', 'Datos cifrados en tránsito y en reposo'],
    },
    {
      title: 'Responsabilidades de seguridad del comercio',
      items: ['Higiene de contraseñas de cuenta', 'Configuración adecuada de permisos del personal', 'Manejo conforme de datos personales de clientes', 'Revisión de seguridad de apps de terceros', 'Revisión regular de registros de acceso a cuentas'],
    },
  ],
  certTitle: 'Premios y certificaciones',
  certifications: [
    { title: 'Cumplimiento PCI-DSS', desc: 'ARVIX Payments cumple estándares PCI-DSS para mantener seguras las transacciones de pago.' },
    { title: 'Certificación CBPR', desc: 'Certificación de Reglas de Privacidad Transfronteriza APEC para transferencias internacionales de datos.' },
    { title: 'ISO/IEC 27001:2022', desc: 'Certificación internacional de gestión de seguridad de la información para controles ARVIX.' },
  ],
  dataTitle: 'Anexo de procesamiento de datos',
  dataItems: [
    { title: 'Anexo de procesamiento de datos ARVIX', desc: 'Cómo ARVIX procesa, almacena y protege datos personales bajo GDPR y PDPA de Taiwán.' },
    { title: 'Seguridad de los datos en la plataforma', desc: 'Cifrado AES-256 en reposo con auditorías y pruebas de penetración regulares contra acceso no autorizado.' },
    { title: 'Configuración y operaciones de seguridad', desc: 'Guías de permisos, MFA y otros controles de seguridad del comercio.' },
  ],
  ctaTitle: 'Más de 600.000 comercios confían en ARVIX',
  ctaSubtitle: '¿Preguntas? Nuestro equipo de seguridad está listo para ayudar',
  cta: 'Empezar prueba gratis',
}

const pt: ComplianceCopy = {
  title: 'Confiança e certificações',
  subtitle: 'A ARVIX oferece uma plataforma de comércio segura com certificações internacionais que protegem dados de comerciantes e compradores',
  modelTitle: 'Modelo de responsabilidade compartilhada ARVIX',
  modelDesc: 'ARVIX e comerciantes compartilham deveres de segurança da plataforma para manter o ecossistema seguro',
  sections: [
    {
      title: 'Responsabilidades de segurança da ARVIX',
      items: ['Segurança e disponibilidade da infraestrutura', 'Proteção física do data center', 'Segurança de rede e defesa DDoS', 'Atualizações e patches de segurança de aplicações', 'Dados criptografados em trânsito e em repouso'],
    },
    {
      title: 'Responsabilidades de segurança do comerciante',
      items: ['Higiene de senhas de conta', 'Configuração adequada de permissões da equipe', 'Tratamento conforme de dados pessoais de clientes', 'Revisão de segurança de apps de terceiros', 'Revisão regular de logs de acesso à conta'],
    },
  ],
  certTitle: 'Prêmios e certificações',
  certifications: [
    { title: 'Conformidade PCI-DSS', desc: 'O ARVIX Payments atende padrões PCI-DSS para manter transações de pagamento seguras.' },
    { title: 'Certificação CBPR', desc: 'Certificação das Regras de Privacidade Transfronteiriça APEC para transferências internacionais de dados.' },
    { title: 'ISO/IEC 27001:2022', desc: 'Certificação internacional de gestão de segurança da informação para controles ARVIX.' },
  ],
  dataTitle: 'Adendo de processamento de dados',
  dataItems: [
    { title: 'Adendo de processamento de dados ARVIX', desc: 'Como a ARVIX processa, armazena e protege dados pessoais sob GDPR e PDPA de Taiwan.' },
    { title: 'Segurança dos dados na plataforma', desc: 'Criptografia AES-256 em repouso com auditorias e testes de penetração regulares contra acesso não autorizado.' },
    { title: 'Configuração e operações de segurança', desc: 'Guias de permissões, MFA e outros controles de segurança do comerciante.' },
  ],
  ctaTitle: 'Mais de 600.000 comerciantes confiam na ARVIX',
  ctaSubtitle: 'Dúvidas? Nossa equipe de segurança está pronta para ajudar',
  cta: 'Começar teste grátis',
}

const de: ComplianceCopy = {
  title: 'Vertrauen & Zertifizierungen',
  subtitle: 'ARVIX liefert eine sichere Commerce-Plattform mit internationalen Zertifizierungen, die Händler- und Shopper-Daten schützen',
  modelTitle: 'ARVIX Shared-Responsibility-Modell',
  modelDesc: 'ARVIX und Händler teilen Plattform-Sicherheitspflichten, um das Ökosystem sicher zu halten',
  sections: [
    {
      title: 'Sicherheitsverantwortung von ARVIX',
      items: ['Infrastruktursicherheit und Verfügbarkeit', 'Physischer Rechenzentrumsschutz', 'Netzwerksicherheit und DDoS-Abwehr', 'Anwendungssicherheitsupdates und Patches', 'Verschlüsselte Daten in Transit und at Rest'],
    },
    {
      title: 'Sicherheitsverantwortung des Händlers',
      items: ['Konto-Passwort-Hygiene', 'Angemessene Mitarbeiterberechtigungen', 'Konforme Verarbeitung von Kundendaten', 'Sicherheitsprüfung von Drittanbieter-Apps', 'Regelmäßige Prüfung von Kontozugriffsprotokollen'],
    },
  ],
  certTitle: 'Auszeichnungen & Zertifizierungen',
  certifications: [
    { title: 'PCI-DSS-Konformität', desc: 'ARVIX Payments erfüllt PCI-DSS-Standards, um Zahlungstransaktionen sicher zu halten.' },
    { title: 'CBPR-Zertifizierung', desc: 'APEC Cross-Border Privacy Rules-Zertifizierung für internationale Datenübertragungen.' },
    { title: 'ISO/IEC 27001:2022', desc: 'Internationale Informationssicherheitsmanagement-Zertifizierung für ARVIX-Kontrollen.' },
  ],
  dataTitle: 'Datenverarbeitungszusatz',
  dataItems: [
    { title: 'ARVIX-Datenverarbeitungszusatz', desc: 'Wie ARVIX personenbezogene Daten unter GDPR und Taiwan-PDPA verarbeitet, speichert und schützt.' },
    { title: 'Sicherheit der Daten auf der Plattform', desc: 'AES-256-Verschlüsselung at Rest mit regelmäßigen Audits und Penetrationstests gegen unbefugten Zugriff.' },
    { title: 'Sicherheitskonfiguration & Betrieb', desc: 'Leitfäden für Berechtigungen, MFA und weitere Händler-Sicherheitskontrollen.' },
  ],
  ctaTitle: 'Über 600.000 Händler weltweit vertrauen ARVIX',
  ctaSubtitle: 'Fragen? Unser Sicherheitsteam hilft gerne',
  cta: 'Kostenlose Testphase starten',
}

const fr: ComplianceCopy = {
  title: 'Confiance et certifications',
  subtitle: 'ARVIX propose une plateforme commerce sécurisée avec des certifications internationales qui protègent les données marchands et acheteurs',
  modelTitle: 'Modèle de responsabilité partagée ARVIX',
  modelDesc: 'ARVIX et les marchands partagent les devoirs de sécurité de la plateforme pour garder l’écosystème sûr',
  sections: [
    {
      title: 'Responsabilités de sécurité d’ARVIX',
      items: ['Sécurité et disponibilité de l’infrastructure', 'Protection physique du data center', 'Sécurité réseau et défense DDoS', 'Mises à jour et correctifs de sécurité applicative', 'Données chiffrées en transit et au repos'],
    },
    {
      title: 'Responsabilités de sécurité du marchand',
      items: ['Hygiène des mots de passe de compte', 'Paramétrage approprié des permissions du personnel', 'Traitement conforme des données personnelles clients', 'Revue de sécurité des apps tierces', 'Revue régulière des journaux d’accès aux comptes'],
    },
  ],
  certTitle: 'Récompenses et certifications',
  certifications: [
    { title: 'Conformité PCI-DSS', desc: 'ARVIX Payments répond aux normes PCI-DSS pour sécuriser les transactions de paiement.' },
    { title: 'Certification CBPR', desc: 'Certification APEC Cross-Border Privacy Rules pour les transferts internationaux de données.' },
    { title: 'ISO/IEC 27001:2022', desc: 'Certification internationale de management de la sécurité de l’information pour les contrôles ARVIX.' },
  ],
  dataTitle: 'Addendum de traitement des données',
  dataItems: [
    { title: 'Addendum de traitement des données ARVIX', desc: 'Comment ARVIX traite, stocke et protège les données personnelles sous GDPR et PDPA de Taïwan.' },
    { title: 'Sécurité des données sur la plateforme', desc: 'Chiffrement AES-256 au repos avec audits et tests d’intrusion réguliers contre l’accès non autorisé.' },
    { title: 'Configuration et ops de sécurité', desc: 'Guides pour permissions, MFA et autres contrôles de sécurité marchands.' },
  ],
  ctaTitle: 'Plus de 600 000 marchands font confiance à ARVIX',
  ctaSubtitle: 'Des questions ? Notre équipe sécurité est prête à aider',
  cta: 'Démarrer l’essai gratuit',
}


const copy: Partial<Record<Locale, ComplianceCopy>> & { 'zh-TW': ComplianceCopy; en: ComplianceCopy } = {
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

export default function ComplianceCenterPage() {
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
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>{c.modelTitle}</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: '#687280' }}>{c.modelDesc}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {c.sections.map((s) => (
              <div key={s.title} className="p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#5B5FF0' }}>{s.title}</h3>
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm" style={{ color: '#354253' }}>
                      <span className="mt-0.5 text-green-500 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.certTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {c.certifications.map((cert) => (
              <div key={cert.title} className="p-8 bg-white rounded-2xl text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#EEF0FF' }}>
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#00142D' }}>{cert.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#687280' }}>{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.dataTitle}</h2>
          <div className="space-y-6">
            {c.dataItems.map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold mb-2" style={{ color: '#00142D' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{item.desc}</p>
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
