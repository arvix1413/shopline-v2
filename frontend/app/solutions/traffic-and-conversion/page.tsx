'use client'
import { useState } from 'react'

const tabs = [
  { title: '全方位功能支援，強化多銷售場景轉換效能！', desc: 'ARVIX 提供多元場景功能支援，讓你針對不同流量特性制定轉換策略，最大化每位訪客價值，有效提升流量轉換和收單，加速品牌成長。' },
  { title: '全場景流量掌控專家，為你破解流量困境！', desc: 'ARVIX 推出市場最完整的流量佈局解決方案，打造多場景流量生態池，讓品牌從流量獲取到轉換，在不同渠道和銷售場景都能主動出擊，掌握流量主導權！' },
  { title: '全通路流量整合管理，釋放流量最大價值！', desc: '當品牌從社群平台、廣告投放等管道獲取流量後，如何有效進行整合是關鍵！ARVIX 具備跨系統流量整合能力，助力品牌統一管理、深度分析並精準再行銷。' },
]

const tools = [
  { title: '網紅團購模組', desc: '專屬獨立分潤賣場，顧客不用輸入推薦代碼就能直接套用優惠、下單，搭配合作夥伴成效中心快速計算分潤金，讓你開團沒難度。', img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80' },
  { title: '商品募資', desc: '官網也能做商品募資活動！透過 SHOP Builder 促購元件 App，就能自建買氣爆棚的商品預購募資活動頁，支援顯示商品累積銷量、剩餘庫存，創造搶購氛圍。', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80' },
  { title: 'POS 快閃店', desc: 'ARVIX POS 輕巧好移動、易於操作的特點，幫助品牌在百貨快閃、展覽攤位快速建立好結帳定點，不僅能即時同步訂單與庫存，最重要的是能將線下流量納入 OMO 會員池！', img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80' },
]

export default function TrafficConversionPage() {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <main>
      <section className="py-20" style={{ background: 'linear-gradient(rgb(0, 20, 45) 0%, rgb(0, 65, 147) 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">流量獲取與轉換解決方案</h1>
            <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>在消費者注意高度分散、廣告效益明顯下降的今日，ARVIX 提供全方位的流量獲取與轉換解決方案，從多流量池的佈局到跨平台的數據整合分析，全面賦能品牌在多變的數位環境中搶占先機！</p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>立即免費試用</a>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80" alt="ARVIX 流量獲取與轉換解決方案" className="w-full rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>零售品牌遇到的 3 大流量經營困境</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '流量破碎化挑戰', desc: '過去集中式流量紅利消失，如今高度分散在 Facebook、Instagram、短影音、搜尋等多元場景，單一管道投放效益遞減，讓預算分散、投資報酬率下滑。' },
              { title: '消費決策路徑複雜', desc: '消費者決策路徑變長，從接觸品牌、了解產品、評價到購買，觸點橫跨多渠道，複雜的跨渠道行為模式讓流量歸因變得困難且難以整合。' },
              { title: '多通路數據孤島', desc: '多平台經營帶來不同數據來源與操作介面，難以整合分析，無法精準評估跨平台行銷成效，不易優化投放策略，導致轉換成效不佳。' },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-2xl" style={{ backgroundColor: '#F4F7FC' }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#00142D' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#687280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20" style={{ backgroundColor: '#F2F7FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>市場最完整的流量佈局解決方案</h2>
          <p className="text-center mb-10" style={{ color: '#687280' }}>從流量獲取、整合到轉換，多方位掌握！</p>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {tabs.map((tab, i) => (
              <button key={i} onClick={() => setActiveTab(i)} className="flex-1 px-5 py-4 rounded-xl text-sm font-semibold text-left transition-all"
                style={{ backgroundColor: activeTab === i ? '#5B5FF0' : '#fff', color: activeTab === i ? '#fff' : '#354253', boxShadow: activeTab === i ? '0 4px 16px rgba(91,95,240,0.3)' : '0 1px 4px rgba(0,0,0,0.08)' }}>
                {tab.title}
              </button>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-base leading-relaxed" style={{ color: '#354253' }}>{tabs[activeTab].desc}</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>ARVIX 2025 最新流量獲取工具</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <div key={tool.title} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <img src={tool.img} alt={"ARVIX " + tool.title} className="w-full" />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#00142D' }}>{tool.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#687280' }}>{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">全球超過 600,000 商家已使用 ARVIX</h2>
          <p className="text-white/70 mb-8">立即加入，開始你的全通路零售之旅</p>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>立即免費試用</a>
        </div>
      </section>
    </main>
  )
}
