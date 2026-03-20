import Image from 'next/image';

export default function ShopperAppPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(249, 222, 195) 0%, rgb(255, 237, 187) 49%, rgb(252, 217, 101) 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#00142D' }}>
              掌上商店，隨走隨買<br />品牌會員購物 App
            </h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>
              為什麼要經營品牌會員 App？透過 Shopper App 強化會員經營及顧客體驗，讓業績增長將近 70%。
            </p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
              立即免費試用
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" alt="Shopper App 品牌購物" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 1 - 三大亮點 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>三大亮點功能<br />快速打造品牌專屬購物 App</h2>
            <p className="mb-6" style={{ color: '#687280' }}>設計介面操作簡單，快速建立品牌專屬的購物 App，提升顧客黏著度。</p>
            <div className="space-y-4">
              {['設計介面操作簡單', 'App 推播服務', '深化 OMO 整合效益'].map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#356DFF' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80" alt="Shopper App 功能" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 2 - 設計介面操作簡單 */}
      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>設計介面操作簡單</h2>
            <p className="mb-6" style={{ color: '#687280' }}>直覺式設計工具，讓你輕鬆打造符合品牌風格的購物 App，無需技術背景。</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" alt="Shopper App 設計介面" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 3 - 透過 Shopper App 縮短與顧客的消費路徑 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>透過 Shopper App 縮短與顧客的消費路徑</h3>
            <p className="mb-6" style={{ color: '#687280' }}>精準推播通知，讓顧客隨時掌握最新優惠和活動，提升回購率。打造無縫銜接全通路導購銷售。</p>
            <div className="space-y-4">
              {['App 推播服務', '社群購物'].map(h4 => (
                <div key={h4} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#356DFF' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h4}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80" alt="Shopper App 推播" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 4 - 深化 OMO 整合效益 */}
      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>深化 OMO 整合效益</h2>
            <p className="mb-6" style={{ color: '#687280' }}>將線上線下完美整合，讓顧客享受無縫的全通路購物體驗，最大化品牌價值。</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" alt="Shopper App OMO" width={600} height={450} className="w-full h-auto" unoptimized />
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
