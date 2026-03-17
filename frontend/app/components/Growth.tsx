'use client'

import { useState } from 'react'

const testimonials = [
  { quote: 'SHOPLINE 在行動裝置上操作的順暢度很高；使用者給的建議與意見會採納，處理的速度也不錯；還一直有新功能推出，不斷成長。', name: 'Stan', brand: 'BONNY & READ', role: '店長' },
  { quote: 'SHOPLINE 的 UI、UX 做得很好，保有能自行調整的彈性；《電商教室 Blog》也對我幫助很大，按照裡頭分享的 SEO 攻略本去優化商店設定，搜尋排名真的可以不斷上升！', name: 'Samuel', brand: '團圓堅果', role: '店長' },
  { quote: 'SHOPLINE 的系統在商品下、上架方便是我最喜歡的部份，跟客服聯絡能馬上獲得協助，也是非常重要的環節。', name: 'Daddi', brand: 'SNATCH', role: '店長' },
  { quote: 'SHOPLINE 在行銷模組方面非常多元，在功能上不會碰到優惠設定「打架」的情形，同時商店版型較為簡潔、乾淨，在後台操作上也比較直觀。', name: '阿南', brand: '許許兒', role: '品牌主理人' },
  { quote: '使用 SHOPLINE 像請了 24 小時的員工可以不停地接單，省去了本來需要人工紀錄的金流、物流作業，我們有更多的時間可以專心做出更好的產品。', name: 'Roy ＆ Boyeong', brand: '淡果香', role: '店長' },
]

const growthItems = [
  { icon: '🎓', title: '電商成長學苑', desc: '商家專屬學習平台，多元課程包含趨勢講座與檔期實戰班等，讓商家跟上市場趨勢、掌握致勝關鍵。', href: 'https://course.shopline.tw/' },
  { icon: '🔌', title: '開放生態圈', desc: '一鍵安裝！提供近 200 個自主研發和第三方應用程式，滿足商家在多元零售的銷售需求，助力業績成長。', href: 'https://apps.shopline.tw/' },
]

const supports = [
  { icon: '💬', title: '專業顧問線上支援', desc: '專業顧問手把手教學，多元課程協助商家在各個階段都能獲得全方位支援，打造持續成長力。' },
  { icon: '🎯', title: '全方位策略顧問服務', desc: '具有豐富實務經驗的專業顧問提供深度諮詢，為品牌量身打造最適合的策略規劃，突破業績成長。' },
  { icon: '📣', title: '廣告媒體代操', desc: '由官方認證的專業投手團隊，協助品牌導入精準流量、優化導流，實現業績的持續增長。' },
  { icon: '📰', title: '趨勢焦點洞察', desc: 'SHOPLINE 定期透過電商教室、開店白皮書與產業趨勢報告，分享功能應用、市場趨勢及新知等。' },
]

export default function Growth() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <>
      {/* Section 6: 持續準備賦能成長 — transparent bg, #00142D color */}
      <section className="py-20" style={{ backgroundColor: 'transparent', color: '#00142D' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black mb-4" style={{ color: '#00142D', fontSize: 40 }}>
              <span style={{ color: '#354253' }}>持續準備</span>賦能成長
            </h2>
          </div>

          {/* Two main cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {growthItems.map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                className="rounded-3xl p-8 block group transition-all hover:shadow-lg"
                style={{ border: '1px solid #F4F7FC', backgroundColor: '#fff' }}>
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-black mb-4" style={{ color: '#00142D' }}>{item.title}</h3>
                <p className="leading-relaxed mb-6" style={{ color: '#354253' }}>{item.desc}</p>
                {/* 了解更多: transparent bg, #356DFF color, 16px/700 */}
                <span className="font-bold text-sm" style={{ color: '#356DFF' }}>了解更多 →</span>
              </a>
            ))}
          </div>

          {/* Four support items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supports.map((s, i) => (
              <div key={i} className="rounded-2xl p-6 transition-all"
                style={{ border: '1px solid #F4F7FC', backgroundColor: '#fff' }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-2xl"
                  style={{ backgroundColor: '#EDF4FD' }}>
                  {s.icon}
                </div>
                <h4 className="font-black mb-2 text-sm" style={{ color: '#00142D' }}>{s.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: '#354253' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Testimonials — bg #F2F7FC, color #00142D */}
      <section className="py-20" style={{ backgroundColor: '#F2F7FC', color: '#00142D' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl p-10 mb-8 min-h-[180px]" style={{ backgroundColor: '#fff' }}>
              <p className="text-lg leading-relaxed mb-6 italic" style={{ color: '#354253' }}>
                "{testimonials[activeTestimonial].quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: 'linear-gradient(135deg, #356DFF, #6b52b8)' }}>
                  {testimonials[activeTestimonial].name[0]}
                </div>
                <div className="font-bold text-sm" style={{ color: '#00142D' }}>
                  {testimonials[activeTestimonial].name} | {testimonials[activeTestimonial].brand} {testimonials[activeTestimonial].role}
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className="h-2.5 rounded-full transition-all"
                  style={{
                    width: i === activeTestimonial ? 24 : 10,
                    backgroundColor: i === activeTestimonial ? '#356DFF' : '#D9D9D9',
                  }}
                  aria-label={`切換到第 ${i + 1} 則評價`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: CTA — transparent bg, #00142D color */}
      <section className="py-20 text-center" style={{ backgroundColor: 'transparent', color: '#00142D' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black mb-8" style={{ color: '#00142D', fontSize: 40 }}>
            全球超過 600,000 商家已使用 SHOPLINE
          </h2>
          {/* 免費試用 14 天: white bg, #356DFF text, radius 30px, 18px/700 */}
          <a
            href="https://admin.shoplineapp.com/users/sign_up?locale=zh-hant"
            className="inline-block font-bold hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: '#fff',
              color: '#356DFF',
              borderRadius: 30,
              fontSize: 18,
              fontWeight: 700,
              padding: '14px 48px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            }}
          >
            免費試用 14 天
          </a>
        </div>
      </section>
    </>
  )
}
