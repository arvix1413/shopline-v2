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

const copy: Partial<Record<Locale, ComplianceCopy>> & { 'zh-TW': ComplianceCopy; en: ComplianceCopy } = {
  'zh-TW': zhTW,
  'zh-CN': zhCN,
  en,
  ko: en,
  ja: en,
  vi: en,
  es: en,
  pt: en,
  de: en,
  fr: en,
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
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
