export default function FaqPage() {
  const faqs = [
    { q: 'SHOPLINE 提供什麼服務？', a: 'SHOPLINE 提供全方位零售解決方案，包含網路商店、社群購物、POS 系統、行銷工具、數據分析等，協助品牌實現 OMO 全通路整合。' },
    { q: '如何開始建立商店？', a: '只需點擊「免費試用」，填寫基本資料後即可立即開始建立你的網路商店，無需信用卡，14 天免費試用。' },
    { q: '金、物流服務有哪些？', a: 'SHOPLINE Payments 支援信用卡、ATM 轉帳、Apple Pay、LINE Pay 等多種支付方式；物流整合黑貓、7-11、全家等主流物流商。' },
    { q: '不懂設計或程式，也能自己使用嗎？', a: '完全可以！SHOP Builder 拖曳式編輯器讓你無需任何程式知識，即可打造專業品牌網站。' },
    { q: '可以免費試用嗎？', a: '是的，所有方案均提供 14 天免費試用，期間可使用完整功能，試用結束後再決定是否付費。' },
    { q: '有提供客服支援嗎？', a: '有的，SHOPLINE 提供線上客服、電話客服及專屬顧問服務，確保你在開店過程中獲得完整支援。' },
  ]

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>SHOPLINE 新手問答</h1>
          <p className="text-lg" style={{ color: '#687280' }}>
            有更多疑問嗎？聯繫 SHOPLINE 團隊吧！讓我們知道你需要幫助，我們的團隊將盡力為你找到最佳的解決方案。
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-12" style={{ color: '#00142D' }}>常見問題</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-8 rounded-2xl" style={{ backgroundColor: '#F4F7FC' }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#00142D' }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#687280' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F2F7FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>新手資源</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '網店設計攻略', desc: '從零開始打造品牌網店的完整教學' },
              { title: '品牌官網 SEO 全攻略', desc: '提升搜尋排名，讓更多顧客找到你' },
              { title: '廣告新手投放攻略', desc: '學習如何有效投放廣告，提升 ROI' },
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
          <h2 className="text-3xl font-black text-white mb-4">使用有疑問？ 歡迎與我們聯繫！</h2>
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>
    </main>
  )
}
