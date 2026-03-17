export default function GroupBuyingPage() {
  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>
            打造團購銷售熱潮<br />新客、業績一把罩！
          </h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: '#687280' }}>
            SHOPLINE 推出全新「網紅團購模組」，在官網內可新建獨立賣場直接綁定分潤機制，搭配合作夥伴成效中心快速計算分潤金，另外還有網紅媒合服務，協助品牌導入團購商機、帶來更多業績！
          </p>
          <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>業績放大術</h2>
          <p className="text-center mb-12 text-xl" style={{ color: '#687280' }}>團購經濟魅力無法擋</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '3x', desc: '透過網紅推廣，業績可達原本的 3 倍' },
              { stat: '0 成本', desc: '按成效付費，無需預付廣告費' },
              { stat: '快速', desc: '快速累積新客，擴大品牌知名度' },
            ].map((item) => (
              <div key={item.stat} className="p-8 rounded-2xl text-center" style={{ backgroundColor: '#F4F7FC' }}>
                <div className="text-5xl font-black mb-4" style={{ color: '#356DFF' }}>{item.stat}</div>
                <p className="text-sm font-medium" style={{ color: '#354253' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F2F7FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>SHOPLINE 推出「團購解決方案」</h2>
          <p className="text-center mb-12" style={{ color: '#687280' }}>你的開團得力助手</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '獨立分潤賣場', desc: '為每位網紅建立專屬賣場，自動計算分潤金額' },
              { title: '團購隱藏賣場', desc: '限定粉絲專屬優惠，製造稀缺感提升轉換' },
              { title: '優惠直接套用', desc: '顧客透過網紅連結購買，優惠自動套用' },
            ].map((item) => (
              <div key={item.title} className="p-8 bg-white rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold mb-3" style={{ color: '#356DFF' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>加值服務</h2>
          <p className="mb-8" style={{ color: '#687280' }}>想找配合的團購主，但不知該從何找起？</p>
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#F4F7FC' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#356DFF' }}>網紅媒合服務</h3>
            <p className="text-sm mb-6" style={{ color: '#687280' }}>SHOPLINE 提供網紅媒合服務，協助品牌找到最適合的合作夥伴，快速啟動團購計畫</p>
            <a href="/register" className="inline-block text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
              了解更多
            </a>
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
