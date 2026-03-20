import Image from 'next/image';

export default function SmartOmoPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24" style={{ background: 'linear-gradient(90deg, rgb(127, 193, 255) 0%, rgb(0, 159, 180) 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#00142D' }}>
              解鎖全通路新零售
            </h1>
            <p className="text-lg mb-8" style={{ color: '#00142D' }}>
              你知道嗎？同時在網店和門市消費的會員能多帶來 3 倍業績。Smart OMO 會員導購工具助你輕鬆轉型全通路新零售模式。
            </p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
              立即免費試用
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" alt="Smart OMO 全通路" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 1 - 快速加入會員 / 同步加 LINE 好友 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>快速註冊、綁定 LINE 帳號<br />會員，輕鬆 Get!</h2>
            <p className="mb-6" style={{ color: '#687280' }}>進店註冊會員，會員數、LINE 好友同步成長，讓你的顧客資產快速累積。</p>
            <div className="space-y-4">
              {['快速加入會員', '同步加 LINE 好友'].map(h4 => (
                <div key={h4} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#356DFF' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h4}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" alt="Smart OMO 會員註冊" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 2 - 全通路資料整合 / 線下消費金額同步累積 */}
      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>全通路消費輪廓整合<br />店員銷售強力推手</h2>
            <p className="mb-6" style={{ color: '#687280' }}>掌握會員全通路資訊，提袋率大幅增加。店員 = 你的最佳 KOL，銷售更多可能。</p>
            <div className="space-y-4">
              {['全通路資料整合', '線下消費金額同步累積'].map(h4 => (
                <div key={h4} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#356DFF' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h4}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" alt="Smart OMO 全通路輪廓" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 3 - 商品導購連結 / 業績歸屬管理 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>店員 = 你的最佳 KOL<br />銷售，更多可能</h2>
            <p className="mb-6" style={{ color: '#687280' }}>客製化購物車連結，導購不分時、地、域。關鍵 3 步驟跨入全通路時代趁現在。</p>
            <div className="space-y-4">
              {['商品導購連結', '業績歸屬管理'].map(h4 => (
                <div key={h4} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#356DFF' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h4}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" alt="Smart OMO 店員導購" width={600} height={450} className="w-full h-auto" unoptimized />
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
