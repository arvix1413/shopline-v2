'use client'
import { useState } from 'react'

const BASE = 'https://d31xv78q8gnfco.cloudfront.net/developer-center/images/'

const featuredApps = [
  { name: 'OmniSegment CDP 行銷雲', desc: '電商指名度最高，整合多方顧客數據，提升行銷效能及營收增長！', img: `${BASE}646718ad23b8724998aedee9.png`, tag: '行銷' },
  { name: 'Instagram 用戶口碑內容牆', desc: '三步驟將您的商店搖身一變，有效提升品牌信任感與轉換率', img: `${BASE}6491387446e4ad6db1059dd7.png`, tag: '社群' },
  { name: 'Feversocial 發燒互動｜會員增長互動平台', desc: '用遊戲化互動，把折扣設計成驚喜，將過客變成熟客', img: `${BASE}654b44a930447b931e7f67c6.png`, tag: '會員' },
  { name: 'awoo 人工智慧行銷平台 (AMP)', desc: 'AI 個人化購物旅程提升銷售與忠誠度，讓消費者好逛又好買！', img: `${BASE}644b42dedf49f886841ea441.png`, tag: 'AI' },
]

const popularApps = [
  { name: 'Omnichat 全通路會員模組', desc: '串連 EC 會員數據，開啟 LINE / FB Messenger 會員卡，打造顧客心動循環。', img: `${BASE}651b7e6b200ea65f2467da6c.png`, tag: '會員' },
  { name: 'OOOPEN Lab 超開放實驗室｜遊戲化行銷工具', desc: '編輯超直覺，十分鐘完成！註冊即可免費編輯，刷卡後 1 秒開通', img: `${BASE}6763ce4de1ec1cabedf6dc0d.png`, tag: '行銷' },
  { name: 'infFITS 智慧尺寸AI', desc: '提升購買 | 加速選購 | 掌握數據', img: `${BASE}65e69ec3f35077d43dec7844.png`, tag: 'AI' },
  { name: '漸強實驗室 - 全方位電商 AI 助理', desc: '無痛綁定｜綁定專屬｜顧客輪廓360', img: `${BASE}668219ff95044ef652e4bf57.png`, tag: 'AI' },
  { name: 'Ocard CRM 顧客經營管家', desc: '全通路會員經營，高效提升顧客回流率', img: `${BASE}667d6c3ff0b05be6ff3d58fc.jpg`, tag: 'CRM' },
  { name: 'ARVIX 聊天小工具', desc: '整合 4 大社群及網店訊息的官網前台客服工具！', img: `${BASE}60dde041a1af4c001d811d83.jpg`, tag: '客服' },
]

const newApps = [
  { name: '訂單狀態自動化 APP', desc: '根據客製化指定條件，自動變更訂單狀態的實用工具', img: `${BASE}63be2b6d0d4811001d525eea.png`, tag: '訂單' },
  { name: 'Zotasell：AI 加購與交叉銷售', desc: '透過 AI 商品推薦進行交叉銷售與加購，提升平均客單價', img: `${BASE}63abe09aa1d9ea001d796ccd.png`, tag: 'AI' },
  { name: 'YouTube Shopping 頻道串接', desc: '在串接完成的 YouTube 頻道上標記並銷售商店商品', img: `${BASE}62a2fe5956cfe5001dcee384.png`, tag: '社群' },
  { name: 'OneShip 全方位物流解決方案', desc: 'OneShip is the all-in-one shipping solution', img: `${BASE}6964a141f9091bdf41ecb433.png`, tag: '物流' },
]

const categories = ['全部', '行銷', '會員', 'AI', '社群', 'CRM', '客服', '訂單', '物流']

function AppCard({ app }: { app: { name: string; desc: string; img: string; tag: string } }) {
  return (
    <div className="bg-white rounded-2xl p-5 border hover:shadow-lg transition-all cursor-pointer" style={{ borderColor: '#E0E3E8' }}>
      <div className="flex items-start gap-4">
        <img src={app.img} alt={app.name} className="w-14 h-14 rounded-xl object-cover flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: '#EBF1F8', color: '#356DFF' }}>{app.tag}</span>
          </div>
          <h3 className="font-bold text-sm leading-snug mb-1 line-clamp-2" style={{ color: '#00142D' }}>{app.name}</h3>
          <p className="text-xs line-clamp-2" style={{ color: '#687280' }}>{app.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default function AppsPage() {
  const [activeCategory, setActiveCategory] = useState('全部')

  const allApps = [...featuredApps, ...popularApps, ...newApps]
  const filtered = activeCategory === '全部' ? allApps : allApps.filter(a => a.tag === activeCategory)

  return (
    <main>
      {/* Hero */}
      <section className="py-20 text-center" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #f8f0ff 100%)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#00142D' }}>擴充功能商店</h1>
          <p className="text-lg" style={{ color: '#687280' }}>
            豐富的擴充功能，讓你的商店更強大
          </p>
        </div>
      </section>

      {/* 精選合作夥伴 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-black mb-8" style={{ color: '#00142D' }}>ARVIX 精選合作夥伴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredApps.map(app => <AppCard key={app.name} app={app} />)}
          </div>
        </div>
      </section>

      {/* 分類篩選 + 全部 */}
      <section className="py-16" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  backgroundColor: activeCategory === cat ? '#356DFF' : '#fff',
                  color: activeCategory === cat ? '#fff' : '#354253',
                  border: `1px solid ${activeCategory === cat ? '#356DFF' : '#E0E3E8'}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <h2 className="text-2xl font-black mb-6" style={{ color: '#00142D' }}>本月熱門擴充功能</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {(activeCategory === '全部' ? popularApps : filtered).map(app => <AppCard key={app.name} app={app} />)}
          </div>

          <h2 className="text-2xl font-black mb-6" style={{ color: '#00142D' }}>最新上架擴充功能</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(activeCategory === '全部' ? newApps : filtered).map(app => <AppCard key={app.name} app={app} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: 'linear-gradient(270.52deg, rgb(0, 79, 209) 0%, rgb(37, 124, 255) 100%)' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-8">擴充功能商店</h2>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#356DFF' }}>
            免費試用 14 天
          </a>
        </div>
      </section>
    </main>
  )
}
