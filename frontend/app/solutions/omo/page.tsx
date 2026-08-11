export default function OmoPage() {
  const steps1 = [
    { step: 'STEP 01', title: '新會員優惠 x 簡易註冊流程，快速提升會員數與 App 下載率', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: 'ARVIX 的簡易註冊流程搭配新會員優惠，讓你快速提升會員數與 App 下載率' },
    { step: 'STEP 02', title: '門市 POS 系統一站整合，線上、線下資料全面打通', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'ARVIX 提供完整線下整合方案，線上、線下資料全面打通' },
    { step: 'STEP 03', title: '顧客離店後持續互動不失聯，讓你線上導購零斷點', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', alt: 'ARVIX 的多元功能讓顧客離店後持續互動不失聯，線上導購零斷點' },
  ]
  const steps2 = [
    { step: 'STEP 01', title: '線上無縫導流門市，會員回店再造商機', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'ARVIX 的「線上買門市取」、「分眾發送門市專屬優惠券」等功能，有效引導顧客從線上進入實體通路' },
    { step: 'STEP 02', title: '會員資訊一目瞭然，強化店員即時導購力', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: 'ARVIX 整合網店與實體店的會員資訊，讓你掌握會員輪廓、精準導購' },
    { step: 'STEP 03', title: '會員條碼一鍵展開，快速掃描結帳體驗再升級', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'ARVIX OMO 全通路整合解決方案' },
  ]
  return (
    <main>
      <section className="py-20" style={{ background: 'linear-gradient(rgb(0, 20, 45) 0%, rgb(0, 65, 147) 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">OMO 全通路整合解決方案</h1>
            <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>ARVIX 提供一站式的 OMO 全通路整合方案，讓實體店及網店無縫接軌，全面整合「通路x系統x數據」拓展新商機。實現線上線下零斷點體驗，精準打造個人化消費旅程。</p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>立即免費試用</a>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" alt="ARVIX OMO 全通路整合解決方案" className="w-full rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>ARVIX OMO 3 大優點</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['通路整合', '系統串接', '數據打通'].map((item) => (
              <div key={item} className="p-8 rounded-2xl text-center" style={{ backgroundColor: '#F4F7FC' }}>
                <h3 className="text-xl font-bold" style={{ color: '#00142D' }}>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20" style={{ backgroundColor: '#F2F7FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>市場最完整的 OMO 解決方案</h2>
          <p className="text-center mb-16" style={{ color: '#687280' }}>無縫串接全通路消費旅程！</p>
          <h3 className="text-2xl font-black mb-10 text-center" style={{ color: '#00142D' }}>消費者首次進入實體店<br />3 步驟提升顧客註冊率與品牌黏著度</h3>
          <div className="space-y-16">
            {steps1.map((s, i) => (
              <div key={s.step} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}>
                <div className="flex-1">
                  <div className="text-sm font-bold mb-2" style={{ color: '#5B5FF0' }}>{s.step}</div>
                  <h4 className="text-xl font-bold" style={{ color: '#00142D' }}>{s.title}</h4>
                </div>
                <div className="flex-1">
                  <img src={s.img} alt={s.alt} className="w-full rounded-2xl shadow-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-black mb-10 text-center" style={{ color: '#00142D' }}>提升會員回訪率<br />3 步驟幫你提升消費體驗與客單價</h3>
          <div className="space-y-16">
            {steps2.map((s, i) => (
              <div key={s.step} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}>
                <div className="flex-1">
                  <div className="text-sm font-bold mb-2" style={{ color: '#5B5FF0' }}>{s.step}</div>
                  <h4 className="text-xl font-bold" style={{ color: '#00142D' }}>{s.title}</h4>
                </div>
                <div className="flex-1">
                  <img src={s.img} alt={s.alt} className="w-full rounded-2xl shadow-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">全球超過 600,000 商家已使用 ARVIX</h2>
          <p className="text-white/70 mb-8">立即加入，開始你的全通路零售之旅</p>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>立即免費試用</a>
        </div>
      </section>
    </main>
  )
}
