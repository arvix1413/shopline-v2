export default function CooperatePage() {
  const types = [
    {
      title: '策略合作夥伴',
      desc: '與 ARVIX 共同開拓市場，提供互補的產品或服務，共創商業價值。',
      icon: '🤝',
    },
    {
      title: '代理商與聯盟夥伴',
      desc: '代理 ARVIX 服務，協助商家導入電商解決方案，享有豐厚分潤機制。',
      icon: '🏢',
    },
    {
      title: '開發者合作夥伴',
      desc: '透過 ARVIX 開放 API 開發擴充功能，上架至擴充功能商店觸及 60 萬商家。',
      icon: '💻',
    },
    {
      title: '技術合作夥伴',
      desc: '整合金流、物流、行銷等技術服務，成為 ARVIX 生態圈的一環。',
      icon: '⚙️',
    },
  ]

  const advantages = [
    { title: '全新客戶來源坐享其成', desc: '借助 ARVIX 60 萬商家基礎，快速觸及潛在客戶，降低獲客成本。' },
    { title: '提升服務範疇開拓新商機', desc: '結合 ARVIX 全方位零售解決方案，擴大服務範疇，開拓更多商業機會。' },
    { title: '打造三贏局面創造收入', desc: '商家、夥伴、ARVIX 三方共贏，透過合作創造穩定收入來源。' },
    { title: '提供專人輔導省時省力', desc: '專屬夥伴成功團隊全程輔導，協助快速上手並持續優化合作成效。' },
  ]

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EEF0FF 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>
            加入 ARVIX 開放生態圈，成為我們的合作夥伴！
          </h1>
          <p className="text-lg mb-8" style={{ color: '#687280' }}>
            與全球超過 600,000 商家的電商平台合作，共同打造零售新未來
          </p>
          <a href="#contact" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
            立即申請合作
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>與 ARVIX 的合作機會</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {types.map((t) => (
              <div key={t.title} className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-4">{t.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#00142D' }}>{t.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#687280' }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>四大合作優勢</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((a) => (
              <div key={a.title} className="p-8 bg-white rounded-2xl">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#5B5FF0' }}>{a.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#687280' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>想跟我們合作嗎？</h2>
          <p className="mb-8" style={{ color: '#687280' }}>請填寫以下表單，我們將盡快與您聯繫，謝謝！</p>
          <a href="mailto:partner@arvix.com" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
            聯繫合作團隊
          </a>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">全球超過 600,000 商家已使用 ARVIX</h2>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            立即免費試用
          </a>
        </div>
      </section>
    </main>
  )
}
