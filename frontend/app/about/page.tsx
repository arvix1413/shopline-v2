const milestones = [
  { year: '2013', desc: '在香港成立，開始提供電商解決方案' },
  { year: '2015', desc: '進入台灣市場，快速成長' },
  { year: '2017', desc: '商家數突破 50,000，進軍東南亞' },
  { year: '2018', desc: '商家數突破 100,000，完成 B 輪融資' },
  { year: '2020', desc: '推出 OMO 全通路整合解決方案' },
  { year: '2021', desc: '商家數突破 400,000，推出 Shoplytics 數據分析' },
  { year: '2022', desc: '迎接十週年，商家數突破 600,000' },
  { year: '2023', desc: '推出擴充功能商店，打造開放生態圈' },
  { year: '2024', desc: '啟動 AI 洞察策略，定位「全方位零售整合專家」' },
]

const awards = [
  { title: 'ISO/IEC 27001:2022', desc: '國際資訊安全管理系統認證' },
  { title: 'PCI-DSS 合規', desc: '支付卡產業資料安全標準' },
  { title: 'CBPR 認證', desc: 'APEC 跨境隱私規則認證' },
  { title: '最佳 IT 雇主獎', desc: 'IT Matters Awards 肯定' },
  { title: 'IIA 國際創新獎', desc: '社群購物解決方案獲獎' },
]

export default function AboutPage() {
  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>
            我們協助商家成功「賣」向全世界
          </h1>
          <p className="text-lg" style={{ color: '#687280' }}>
            ARVIX 是全球領先的全方位零售整合平台，協助超過 600,000 個品牌實現 OMO 全通路銷售
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black mb-6" style={{ color: '#00142D' }}>我們的故事</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#687280' }}>
                ARVIX 於 2013 年在香港成立，以「讓每個人都能輕鬆開店」為使命，致力於打造最完整的電商解決方案。
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#687280' }}>
                從最初的網路商店建置工具，到今日涵蓋社群購物、POS 零售、數據分析、行銷自動化的全方位零售整合平台，ARVIX 持續進化，陪伴品牌在數位時代茁壯成長。
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#687280' }}>
                如今，全球超過 600,000 個商家信賴 ARVIX，我們的足跡遍及台灣、香港、馬來西亞、新加坡等地，持續擴展全球版圖。
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#EBF1F8', height: '360px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="text-center">
                <div className="text-6xl font-black mb-2" style={{ color: '#356DFF' }}>600K+</div>
                <div className="text-lg font-bold" style={{ color: '#00142D' }}>全球商家數</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>ARVIX 里程碑</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 hidden md:block" style={{ backgroundColor: '#D1DCE8', transform: 'translateX(-50%)' }} />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="inline-block p-6 bg-white rounded-2xl shadow-sm">
                      <div className="text-2xl font-black mb-1" style={{ color: '#356DFF' }}>{m.year}</div>
                      <p className="text-sm" style={{ color: '#354253' }}>{m.desc}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full flex-shrink-0 hidden md:block" style={{ backgroundColor: '#356DFF' }} />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>獲獎及認證紀錄</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {awards.map((a) => (
              <div key={a.title} className="p-6 rounded-2xl border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: '#EBF1F8' }}>
                  <span className="text-xl">🏆</span>
                </div>
                <h3 className="font-bold text-sm mb-1" style={{ color: '#00142D' }}>{a.title}</h3>
                <p className="text-xs" style={{ color: '#687280' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">全球超過 600,000 商家已使用 ARVIX</h2>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>
    </main>
  )
}
