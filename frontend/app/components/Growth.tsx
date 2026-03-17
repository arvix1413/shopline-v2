'use client'

import { useState } from 'react'

const testimonials = [
  { quote: 'SHOPLINE 在行動裝置上操作的順暢度很高；使用者給的建議與意見會採納，處理的速度也不錯；還一直有新功能推出，不斷成長。', name: 'Stan', brand: 'BONNY & READ', role: '店長' },
  { quote: 'SHOPLINE 的 UI、UX 做得很好，保有能自行調整的彈性；《電商教室 Blog》也對我幫助很大，按照裡頭分享的 SEO 攻略本去優化商店設定，搜尋排名真的可以不斷上升！', name: 'Samuel', brand: '團圓堅果', role: '店長' },
  { quote: 'SHOPLINE 的系統在商品下、上架方便是我最喜歡的部份，跟客服聯絡能馬上獲得協助，也是非常重要的環節。', name: 'Daddi', brand: 'SNATCH', role: '店長' },
  { quote: 'SHOPLINE 在行銷模組方面非常多元，在功能上不會碰到優惠設定「打架」的情形，同時商店版型較為簡潔、乾淨，在後台操作上也比較直觀。', name: '阿南', brand: '許許兒', role: '品牌主理人' },
  { quote: '使用 SHOPLINE 像請了 24 小時的員工可以不停地接單，省去了本來需要人工紀錄的金流、物流作業，我們有更多的時間可以專心做出更好的產品。', name: 'Roy & Boyeong', brand: '淡果香', role: '店長' },
]

const growthItems = [
  { icon: '🎓', title: '電商成長學苑', desc: '商家專屬學習平台，多元課程包含趨勢講座與檔期實戰班等，讓商家跟上市場趨勢、掌握致勝關鍵。', cta: '立即學習' },
  { icon: '🔌', title: '開放生態圈', desc: '一鍵安裝！提供近 200 個自主研發和第三方應用程式，滿足商家在多元零售的銷售需求，助力業績成長。', cta: '探索應用' },
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
      {/* Growth section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">持續準備賦能成長</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {growthItems.map((item, i) => (
              <div key={i} className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{item.desc}</p>
                <a href="#" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-sm">
                  {item.cta}
                </a>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supports.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h4 className="font-black text-gray-900 mb-2 text-sm">{s.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900">商家怎麼說</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-3xl p-10 mb-8 min-h-[180px]">
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonials[activeTestimonial].quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                  {testimonials[activeTestimonial].name[0]}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{testimonials[activeTestimonial].name}</div>
                  <div className="text-gray-500 text-xs">{testimonials[activeTestimonial].brand} {testimonials[activeTestimonial].role}</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === activeTestimonial ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-gray-400'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0f0f5e 0%, #2d2db0 50%, #4a3fa8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">立即開始免費試用</h2>
          <p className="text-white/80 text-xl mb-10 leading-relaxed">
            加入超過 50,000 個品牌商家，一站實現全通路零售升級
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-white text-blue-700 font-bold text-lg px-10 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
              免費試用 14 天
            </a>
            <a href="#" className="border-2 border-white text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-white/10 transition-colors">
              聯絡顧問
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
