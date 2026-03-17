export default function SocialCommercePage() {
  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>
            SHOPLINE 社群購物系統<br />簡單開賣、快速整單
          </h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: '#687280' }}>
            全方位的「社群＋電商」購物系統！善用社群的高互動性並透過系統的高導購性，包含直播購物、導購機器人及訊息整合中心，從直播互動、留言導購到後續整單付款等無縫整合購物體驗，讓顧客快速下單，你輕鬆收單！
          </p>
          <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>直播購物就該這樣玩</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'SHOPLINE LIVE 獨立直播間', desc: '專屬直播平台，不受第三方平台限制，完整掌控直播體驗' },
              { title: 'FB / IG / LINE +1 接單', desc: '留言自動接單，顧客只需留言 +1 即可完成購買' },
              { title: '專屬開播 APP', desc: '手機即可開播，隨時隨地直播賣貨' },
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
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>SHOPLINE 社群購物系統完美結合「社群＋電商」</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: '社群商店', desc: '在 FB、IG、LINE 上直接開設商店，讓粉絲無需離開社群即可購物' },
              { title: '導購機器人', desc: '24 小時自動回覆，智慧導購不間斷，提升轉換率' },
              { title: '訊息整合中心', desc: '所有社群訊息統一管理，不漏接任何顧客詢問' },
              { title: '直播購物', desc: '整合多平台直播，自動接單、整單、出貨一氣呵成' },
            ].map((item) => (
              <div key={item.title} className="p-8 bg-white rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold mb-3" style={{ color: '#356DFF' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{item.desc}</p>
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
