import Image from 'next/image';

export default function TargetedMarketingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(251, 225, 255) 0%, rgb(169, 181, 255) 50%, rgb(0, 97, 255) 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#00142D' }}>
              精準鎖定、放大轉單<br />ARVIX 分眾行銷中心
            </h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>
              獨家 RFIM 價值模型，9 大智慧顧客分群，讓你精準觸達對的人，有效提升行銷 ROI。
            </p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
              立即免費試用
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" alt="ARVIX 分眾行銷中心" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>哪個更重要？<br />開發新客 &amp; 經營舊客</h2>
            <p className="mb-4" style={{ color: '#687280' }}>你也遇到這些問題？如何找到對的人？ARVIX 分眾行銷中心讓你一勞永逸！</p>
            <div className="space-y-3 mb-6">
              {[
                { title: 'RFIM 價值模型', sub: '9 大智慧顧客分群獨家數據演算' },
                { title: '內建分群', sub: '6 大分類、55+ 篩選條件' },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: '#356DFF' }}></span>
                  <div>
                    <span className="font-bold block" style={{ color: '#00142D' }}>{item.title}</span>
                    <span className="text-sm" style={{ color: '#687280' }}>{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['指標性分類篩選', '細緻的分眾選項', '預先掌握觸及人數', '自動更新分群名單獨家支援', '靈活運用客群'].map(tag => (
                <div key={tag} className="text-xs px-3 py-2 rounded-lg font-medium" style={{ backgroundColor: '#EBF1F8', color: '#356DFF' }}>{tag}</div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" alt="分眾行銷 RFIM 模型" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>比你想的更深，比你想的更簡單<br />獨家演算！ 數據賦能的 RFIM 價值模型</h2>
            <p className="mb-6" style={{ color: '#687280' }}>運用 RFIM 價值模型分群有效喚回顧客，讓每一分行銷預算都花在刀口上。</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" alt="RFIM 數據模型" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>溝通零斷點<br />打造無痛分眾行銷</h2>
            <p className="mb-6" style={{ color: '#687280' }}>分眾行銷搭配多元優惠衝高單品銷售成長，讓每個顧客都感受到專屬服務。</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80" alt="分眾行銷溝通" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>如何找到對的人？<br />ARVIX 分眾行銷中心讓你一勞永逸！</h2>
            <p className="mb-6" style={{ color: '#687280' }}>6 大分類、55+ 篩選條件，精準定位目標客群，提升行銷效益。</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" alt="分眾行銷篩選" width={600} height={450} className="w-full h-auto" unoptimized />
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
