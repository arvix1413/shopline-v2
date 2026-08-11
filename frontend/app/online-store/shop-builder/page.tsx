import Image from 'next/image';

export default function ShopBuilderPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(244, 247, 252) 0%, rgb(122, 210, 254) 50%, rgb(0, 97, 255) 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#00142D' }}>
              隨心所欲、盡情發揮<br />SHOP Builder 頁面編輯器
            </h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>
              免寫程式，自由拖曳完成頁面編排，打造一流品牌網站不再是夢。
            </p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              立即免費試用
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80" alt="SHOP Builder 頁面編輯器" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>SHOP Builder + 產業推薦版型<br />打造一流品牌網站不是夢</h2>
            <p className="mb-6" style={{ color: '#687280' }}>多種設計版型任選，搭配產業推薦版型，快速建立專業品牌形象。</p>
            <div className="space-y-4">
              {['免寫程式自由拖曳完成編排', '產業推薦版型多種設計版型任選', 'Layout Engine前端語言編輯權限'].map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80" alt="SHOP Builder 版型" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>款款巧妙<br />15+ 互動型元件</h2>
            <p className="mb-6" style={{ color: '#687280' }}>豐富的互動元件，讓你的網站更生動有趣，提升訪客停留時間。</p>
            <div className="space-y-4">
              {['SHOP Builder 促購元件 APP', '官網也能建立募資頁面'].map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80" alt="SHOP Builder 互動元件" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>效能優化<br />讓網站更上一層樓</h2>
            <p className="mb-6" style={{ color: '#687280' }}>優化頁面載入速度，提升 Google 網站評分，帶來更多長尾 SEO 效益。</p>
            <div className="space-y-4">
              {['有助提升頁面元素載入速度', '有助優化Google 網站評分', '絕佳 SEO帶來更多長尾效益'].map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80" alt="SHOP Builder SEO 優化" width={600} height={450} className="w-full h-auto" unoptimized />
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
