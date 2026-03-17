export default function SmartOmoPage() {
  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>解鎖全通路新零售</h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: '#687280' }}>
            門市會員導入線上消費，培養跨通路消費會員！不論是實體門市、快閃店或展場銷售商家，都能透過 SHOPLINE 「Smart OMO 會員導購工具」讓線下顧客快速註冊會員、店員隨時精準導購，極速提升 OMO 虛實整合業績！
          </p>
          <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>你知道嗎？</h2>
          <p className="text-center text-xl mb-12" style={{ color: '#687280' }}>同時在網店和門市消費的會員 能多帶來 3 倍業績</p>
          <div className="p-12 rounded-2xl text-center" style={{ backgroundColor: '#F4F7FC' }}>
            <div className="text-7xl font-black mb-4" style={{ color: '#356DFF' }}>3x</div>
            <p className="text-lg font-bold" style={{ color: '#00142D' }}>跨通路會員帶來的業績是單通路會員的 3 倍</p>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F2F7FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>關鍵 3 步驟</h2>
          <p className="text-center mb-12" style={{ color: '#687280' }}>跨入全通路時代趁現在</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: '進店註冊會員', desc: '會員數、LINE 好友 UP，快速建立品牌會員資產' },
              { step: '02', title: '掌握會員全通路資訊', desc: '提袋率大幅增加，店員即時掌握顧客偏好' },
              { step: '03', title: '客製化購物車連結', desc: '導購不分時、地、域，隨時隨地完成銷售' },
            ].map((item) => (
              <div key={item.step} className="p-8 bg-white rounded-2xl shadow-sm">
                <div className="text-4xl font-black mb-4" style={{ color: '#356DFF' }}>{item.step}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#00142D' }}>{item.title}</h3>
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
