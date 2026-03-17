export default function OmoPage() {
  const steps = [
    { step: 'STEP 01', title: '新會員優惠 x 簡易註冊流程', desc: '快速提升會員數與 App 下載率' },
    { step: 'STEP 02', title: '門市 POS 系統一站整合', desc: '線上、線下資料全面打通' },
    { step: 'STEP 03', title: '顧客離店後持續互動不失聯', desc: '讓你線上導購零斷點' },
  ]

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>OMO 全通路整合解決方案</h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: '#687280' }}>
            SHOPLINE 提供一站式的 OMO 全通路整合方案，讓實體店及網店無縫接軌，全面整合「通路x系統x數據」拓展新商機。實現線上線下零斷點體驗，精準打造個人化消費旅程。
          </p>
          <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>SHOPLINE OMO 3 大優點</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['通路整合', '系統串接', '數據打通'].map((item) => (
              <div key={item} className="p-8 rounded-2xl text-center" style={{ backgroundColor: '#F4F7FC' }}>
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-lg font-bold" style={{ color: '#00142D' }}>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F2F7FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>市場最完整的 OMO 解決方案</h2>
          <p className="text-center mb-12" style={{ color: '#687280' }}>無縫串接全通路消費旅程！</p>
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-6 p-8 bg-white rounded-2xl shadow-sm">
                <div className="text-sm font-bold shrink-0 w-20" style={{ color: '#356DFF' }}>{s.step}</div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#00142D' }}>{s.title}</h3>
                  <p className="text-sm" style={{ color: '#687280' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">全球超過 600,000 商家已使用 SHOPLINE</h2>
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>
    </main>
  )
}
