import Image from 'next/image';

export default function InstagramLivePage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(255, 225, 249) 0%, rgb(238, 169, 255) 50%, rgb(149, 92, 255) 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#00142D' }}>
              圈粉、轉單一把罩！<br />讓 Instagram 幫你賣更多！
            </h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>
              LIVE 獨家功能幫你在 Instagram 創造最大效益，直播 +1 喊單自動加入購物車。
            </p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
              立即免費試用
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80" alt="Instagram 直播購物" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>LIVE獨家功能<br />幫你在 Instagram 創造最大效益</h2>
            <p className="mb-6" style={{ color: '#687280' }}>直播 +1 喊單自動加入購物車，讓粉絲邊看邊買，業績輕鬆翻倍。</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80" alt="Instagram LIVE 功能" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>互動遊戲讓人走不開<br />有效提高粉絲黏著度</h2>
            <p className="mb-6" style={{ color: '#687280' }}>豐富的互動遊戲功能，讓直播更有趣，粉絲停留更久，購買意願更高。</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=1200&q=80" alt="Instagram 互動遊戲" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>聊天勸敗不可少<br />30 秒私訊接單術</h2>
            <p className="mb-6" style={{ color: '#687280' }}>自動私訊功能，讓顧客在 30 秒內完成下單，大幅提升轉換率。</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" alt="Instagram 私訊接單" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>全方位數據報告<br />專攻社群轉換成效</h2>
            <p className="mb-6" style={{ color: '#687280' }}>完整的直播數據分析，幫你了解每場直播的轉換成效，持續優化策略。</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80" alt="Instagram 數據報告" width={600} height={450} className="w-full h-auto" unoptimized />
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
