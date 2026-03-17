export default function InstagramLivePage() {
  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>
            圈粉、轉單一把罩！<br />讓 Instagram 幫你賣更多！
          </h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: '#687280' }}>
            透過自動化功能招攬更多粉絲、將互動轉成訂單，讓你的 Instagram 更好玩、更好看、更好買！
          </p>
          <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>LIVE 獨家功能幫你在 Instagram 創造最大效益</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: '留言自動接單', desc: '粉絲留言 +1 即自動建立訂單，不漏接任何商機' },
              { title: '直播商品展示', desc: '直播中即時展示商品，點擊即可加入購物車' },
              { title: '限時搶購倒數', desc: '製造緊迫感，刺激粉絲快速下單' },
              { title: '訂單自動整合', desc: '直播結束後自動整理所有訂單，省時省力' },
              { title: '粉絲互動分析', desc: '了解哪些商品最受歡迎，優化直播策略' },
              { title: '多平台同步', desc: '同時在 IG、FB 直播，觸及更多潛在顧客' },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-2xl" style={{ backgroundColor: '#F4F7FC' }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#00142D' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F2F7FC' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black mb-8" style={{ color: '#00142D' }}>迎戰社群電商，全面升級你的導購裝備！</h2>
          <div className="p-8 bg-white rounded-2xl shadow-sm">
            <div className="text-5xl font-black mb-4" style={{ color: '#356DFF' }}>+3 萬</div>
            <p className="text-lg font-bold" style={{ color: '#00142D' }}>串接 Instagram 直播後，每場直播業績多 3 萬！</p>
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
