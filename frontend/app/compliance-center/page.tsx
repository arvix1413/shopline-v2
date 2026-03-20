export default function ComplianceCenterPage() {
  const sections = [
    {
      title: 'ARVIX 的安全責任',
      items: [
        '平台基礎設施的安全性與可用性',
        '資料中心的實體安全防護',
        '網路安全與 DDoS 防護',
        '應用程式層級的安全更新與修補',
        '資料加密傳輸與儲存',
      ],
    },
    {
      title: '商家的安全責任',
      items: [
        '帳號密碼的安全管理',
        '員工帳號權限的適當設定',
        '消費者個人資料的合規處理',
        '第三方應用程式的安全評估',
        '定期審查帳號存取紀錄',
      ],
    },
  ]

  const certifications = [
    {
      title: 'PCI-DSS 合規',
      desc: 'ARVIX Payments 符合 PCI-DSS 支付卡產業資料安全標準，確保所有支付交易的安全性。',
    },
    {
      title: 'CBPR 認證',
      desc: 'APEC 跨境隱私規則認證，確保跨境資料傳輸符合國際隱私保護標準。',
    },
    {
      title: 'ISO/IEC 27001:2022',
      desc: '國際資訊安全管理系統標準認證，代表 ARVIX 具備完善的資訊安全管理體系。',
    },
  ]

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>資格與認證</h1>
          <p className="text-lg" style={{ color: '#687280' }}>
            ARVIX 致力於提供安全可靠的電商平台，持續取得國際認證保障商家與消費者的資料安全
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>ARVIX - 共同責任模型</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: '#687280' }}>
            ARVIX 與商家共同承擔平台安全責任，確保整體生態系統的安全性
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((s) => (
              <div key={s.title} className="p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#356DFF' }}>{s.title}</h3>
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
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>獲獎及認證紀錄</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((c) => (
              <div key={c.title} className="p-8 bg-white rounded-2xl text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#EBF1F8' }}>
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#00142D' }}>{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#687280' }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>資料處理補充條款</h2>
          <div className="space-y-6">
            {[
              { title: 'ARVIX 資料處理補充條款', desc: '詳細說明 ARVIX 如何處理、儲存及保護商家與消費者的個人資料，符合 GDPR 及台灣個資法規範。' },
              { title: '儲存在平台上的資料安全性', desc: '所有資料均採用 AES-256 加密儲存，並定期進行安全稽核與滲透測試，確保資料不被未授權存取。' },
              { title: '安全配置和管理任務', desc: '提供詳細的安全配置指南，協助商家正確設定帳號權限、啟用雙因素驗證等安全措施。' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold mb-2" style={{ color: '#00142D' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">全球超過 600,000 商家已使用 ARVIX</h2>
          <p className="text-white opacity-70 mb-8">有疑問嗎？我們的安全團隊隨時為您解答</p>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>
    </main>
  )
}
