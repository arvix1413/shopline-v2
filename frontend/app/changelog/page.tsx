export default function ChangelogPage() {
  const updates = [
    { date: '2025-03', version: 'v3.5', title: 'AI 洞察策略上線', desc: 'Shoplytics 新增 AI 自動分析功能，提供可執行的行銷建議' },
    { date: '2025-02', version: 'v3.4', title: '網紅團購模組升級', desc: '新增合作夥伴成效中心，快速計算分潤金額' },
    { date: '2025-01', version: 'v3.3', title: 'Smart OMO 全新改版', desc: '會員導購工具介面全面升級，操作更直覺' },
    { date: '2024-12', version: 'v3.2', title: 'SHOPLINE Payments 新增 BNPL', desc: '支援無卡分期付款，降低顧客購買門檻' },
    { date: '2024-11', version: 'v3.1', title: 'Shopper App 推播優化', desc: '推播通知個人化升級，點擊率提升 40%' },
    { date: '2024-10', version: 'v3.0', title: 'SHOP Builder 全新版本', desc: '新增 15+ 互動型元件，頁面編輯更自由' },
  ]

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>產品最新動態</h1>
          <p className="text-lg" style={{ color: '#687280' }}>
            想知道 SHOPLINE 最新的產品、優化項目、即將上線的新功能以及更多應用方式？立即往下查看！
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-12" style={{ color: '#00142D' }}>產品更新紀錄</h2>
          <div className="space-y-8">
            {updates.map((u) => (
              <div key={u.version} className="flex gap-6 p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="shrink-0 text-right">
                  <div className="text-xs font-bold" style={{ color: '#687280' }}>{u.date}</div>
                  <div className="text-sm font-bold mt-1" style={{ color: '#356DFF' }}>{u.version}</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#00142D' }}>{u.title}</h3>
                  <p className="text-sm" style={{ color: '#687280' }}>{u.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">全球超過 600,000 商家已使用 SHOPLINE</h2>
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>
    </main>
  )
}
