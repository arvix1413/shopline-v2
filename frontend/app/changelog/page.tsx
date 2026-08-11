const updates = [
  { date: '2024 H1', version: '產品發表大會', title: '2024 H1 產品發表大會', desc: '全新 AI 洞察功能、Smart OMO 升級、社群購物全面強化，助商家迎戰新零售時代。', highlight: true },
  { date: '2025-03', version: 'v3.5', title: 'AI 洞察策略上線', desc: 'Shoplytics 新增 AI 自動分析功能，提供可執行的行銷建議，讓數據驅動決策更簡單。' },
  { date: '2025-02', version: 'v3.4', title: '網紅團購模組升級', desc: '新增合作夥伴成效中心，快速計算分潤金額，一鍵管理所有網紅合作。' },
  { date: '2025-01', version: 'v3.3', title: 'Smart OMO 全新改版', desc: '會員導購工具介面全面升級，操作更直覺，線上線下整合更流暢。' },
  { date: '2024-12', version: 'v3.2', title: 'ARVIX Payments 升級', desc: '新增 Apple Pay、Google Pay 快速結帳，支援更多支付方式，提升結帳轉換率。' },
  { date: '2024-11', version: 'v3.1', title: 'YouTube Shopping 整合', desc: '直播電商玩法再升級，導入 YouTube Shopping 功能，提供 API 技術串接。' },
  { date: '2024-10', version: 'v3.0', title: '擴充功能商店上線', desc: '全台首推「一鍵訂閱」夥伴擴充功能，開放 API 串接，打造電商界最強擴充功能商店。' },
  { date: '2024-09', version: 'v2.9', title: 'Shopper App 全面升級', desc: '品牌 App 新增個人化推薦、會員積點兌換、推播通知等功能，強化會員黏著度。' },
]

export default function ChangelogPage() {
  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EEF0FF 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>產品最新動態</h1>
          <p className="text-lg" style={{ color: '#687280' }}>
            持續進化的 ARVIX 平台，每月帶來全新功能與優化，助你掌握零售先機
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black mb-10" style={{ color: '#00142D' }}>產品更新紀錄</h2>
          <div className="space-y-6">
            {updates.map((u) => (
              <div key={u.version} className={`p-8 rounded-2xl ${u.highlight ? 'text-white' : 'border border-gray-100'}`}
                style={u.highlight ? { backgroundColor: '#5B5FF0' } : {}}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full"
                    style={u.highlight ? { backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' } : { backgroundColor: '#EEF0FF', color: '#5B5FF0' }}>
                    {u.date}
                  </span>
                  <span className="text-xs font-semibold" style={{ color: u.highlight ? 'rgba(255,255,255,0.7)' : '#687280' }}>{u.version}</span>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: u.highlight ? 'white' : '#00142D' }}>{u.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: u.highlight ? 'rgba(255,255,255,0.85)' : '#687280' }}>{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">全球超過 600,000 商家已使用 ARVIX</h2>
          <p className="text-white opacity-70 mb-8">有疑問嗎？我們的團隊隨時為您解答</p>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            立即免費試用
          </a>
        </div>
      </section>
    </main>
  )
}
