import Image from 'next/image';

export default function GroupBuyingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(175, 194, 251) 0%, rgb(169, 187, 255) 50%, rgb(57, 170, 209) 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#00142D' }}>
              打造團購銷售熱潮<br />新客、業績一把罩！
            </h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>
              業績放大術，團購經濟魅力無法擋。ARVIX 推出「團購解決方案」，你的開團得力助手。
            </p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
              立即免費試用
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80" alt="ARVIX 團購解決方案" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-2" style={{ color: '#00142D' }}>ARVIX 推出「團購解決方案」<br />你的開團得力助手</h2>
            <h2 className="text-xl font-black mb-4" style={{ color: '#356DFF' }}>獨立分潤賣場快速下單超方便</h2>
            <p className="mb-6" style={{ color: '#687280' }}>為每位合作夥伴建立獨立分潤賣場，讓顧客快速下單，提升購買體驗。</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { title: '獨立分潤賣場', desc: '為每位 KOL 建立專屬賣場' },
                { title: '團購隱藏賣場', desc: '限定顧客才能進入的專屬賣場' },
                { title: '優惠直接套用', desc: '自動套用折扣，無需手動輸入' },
                { title: '推薦活動與分潤', desc: '靈活設定推薦分潤比例' },
                { title: '各商品設定不同分潤', desc: '依商品設定不同分潤比例' },
                { title: '一頁結帳', desc: '簡化結帳流程，提升轉換率' },
              ].map(item => (
                <div key={item.title} className="p-3 rounded-xl" style={{ backgroundColor: '#F4F7FC' }}>
                  <div className="font-bold text-sm mb-1" style={{ color: '#00142D' }}>{item.title}</div>
                  <div className="text-xs" style={{ color: '#687280' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80" alt="團購分潤賣場" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>多管道社群導流<br />先讓客人嗨起來</h2>
            <p className="mb-6" style={{ color: '#687280' }}>透過多元社群渠道導流，讓更多潛在顧客加入你的團購活動。</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80" alt="團購社群導流" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>合作夥伴成效中心<br />即時數據一目瞭然</h2>
            <p className="mb-6" style={{ color: '#687280' }}>即時追蹤每位合作夥伴的銷售成效，讓數據說話，優化團購策略。</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80" alt="團購成效中心" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>官網一站式整合<br />團購效益最大化</h2>
            <p className="mb-6" style={{ color: '#687280' }}>將團購與官網完美整合，讓顧客享受無縫的購物體驗，最大化團購效益。</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80" alt="團購官網整合" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">全球超過 600,000 商家已使用 ARVIX</h2>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>
    </main>
  );
}
