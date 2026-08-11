import Image from 'next/image';

export default function ShoplyticsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(29, 15, 125) 0%, rgb(33, 67, 191) 50%, rgb(110, 150, 255) 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white">
              Shoplytics 零售數據分析<br />善用數據驅動決策，讓你掌握商機
            </h1>
            <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
              即時銷售數據分析、AI 洞察策略、多通路整合數據，讓品牌經營更有方向。
            </p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              立即免費試用
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" alt="Shoplytics 數據分析" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>Shoplytics 數據分析中心</h2>
            <p className="mb-6" style={{ color: '#687280' }}>一站查看從數據到決策，讓品牌經營更有方向。</p>
            <div className="space-y-4">
              {['即時銷售數據分析', 'AI 洞察策略', 'AI 數據自動應用', '即時營運儀表'].map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" alt="Shoplytics 數據中心" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>Shoplytics x AI<br />驅動智慧洞察</h2>
            <p className="mb-6" style={{ color: '#687280' }}>AI 驅動的智慧洞察，讓你快速掌握市場趨勢，做出更精準的決策。</p>
            <div className="space-y-4">
              {['顧客行為分析', '多維度行銷分析'].map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80" alt="Shoplytics AI 洞察" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>一站查看<br />從數據到決策，讓品牌經營更有方向</h2>
            <p className="mb-6" style={{ color: '#687280' }}>多通路整合數據，讓你在一個平台上掌握所有銷售渠道的表現。</p>
            <div className="space-y-4">
              {['多通路整合數據', '流量組成', '銷售數據', '轉換分析'].map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" alt="Shoplytics 多通路數據" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>即時掌握<br />每一個關鍵數據</h2>
            <p className="mb-6" style={{ color: '#687280' }}>即時營運儀表，讓你隨時掌握品牌的最新狀況，快速應對市場變化。</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" alt="Shoplytics 即時儀表" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">全球超過 600,000 商家已使用 ARVIX</h2>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            立即免費試用
          </a>
        </div>
      </section>
    </main>
  );
}
