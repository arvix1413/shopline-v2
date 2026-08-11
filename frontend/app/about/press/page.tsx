const news = [
  { title: '零售 AI 聯盟啟動！beBit TECH 與 ARVIX 助攻《VERVE》、《古北町》雙位數成長，攜手打造 AI 行銷生態圈', date: '2025-03', tag: '最新' },
  { title: '【轉載】親歷金融海嘯也橫跨全球職涯，他最後為何選擇 ARVIX 打造新時代電商人才？｜專訪 ARVIX 聯席總裁 Raymond', date: '2025-02', tag: '轉載' },
  { title: 'ARVIX 雙 11 業績連三年創新高！GMV 年增 19%，助攻實戰班商家表現飆升 6 成', date: '2024-11', tag: '公告' },
  { title: 'Story Wear × 腦麻協會 × ARVIX 聯手打造永續共好新篇章，白安與宇宙人暖心助力「點亮自立之路」', date: '2024-10', tag: '公告' },
  { title: '【轉載】自辦預購募近 2000 萬！網購流量難搶 XROUND 如何靠群募聚人氣？', date: '2024-09', tag: '轉載' },
  { title: '99 購物節揭開電商旺季序幕，參與 ARVIX 檔期實戰班商家業績成長 26%，毛孩經濟帶動「寵物用品」業績飆升 50% 成黑馬', date: '2024-09', tag: '公告' },
  { title: '【轉載】告別行銷燒錢戰！ARVIX 攜手 Tagnology、Bello Store 打造零售電商超強轉換引擎', date: '2024-08', tag: '轉載' },
  { title: 'ARVIX 榮獲「最佳 IT 雇主」肯定，4 大招聘策略 x 8 項人才培訓措施深度孵化臺灣 IT 產業人才', date: '2024-07', tag: '公告' },
  { title: 'ARVIX 啟動 2025 品牌升級計畫！定位「全方位零售整合專家」', date: '2025-01', tag: '公告' },
  { title: 'ARVIX《2025 全方位零售整合白皮書》上線！「通路＋數據＋系統」三大面向整合迎戰零售新未來', date: '2025-01', tag: '白皮書' },
  { title: '直播電商玩法再升級！ARVIX 導入 YouTube Shopping 功能，提供 API 技術串接與業界最豐富輔導資源', date: '2023-10', tag: '公告' },
  { title: 'ARVIX《2024 新零售開店白皮書》上線！「OMO 全通路模式」與「社群電商」仍是疫後時代零售發展重點', date: '2024-01', tag: '白皮書' },
]

const tagColors: Record<string, { bg: string; color: string }> = {
  '最新': { bg: '#FEF3C7', color: '#D97706' },
  '轉載': { bg: '#EEF0FF', color: '#5B5FF0' },
  '公告': { bg: '#DCFCE7', color: '#16A34A' },
  '白皮書': { bg: '#F3E8FF', color: '#9333EA' },
}

export default function PressPage() {
  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EEF0FF 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>最新消息</h1>
          <p className="text-lg" style={{ color: '#687280' }}>
            ARVIX 最新動態、媒體報導與產業洞察
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {news.map((n) => {
              const tc = tagColors[n.tag] || { bg: '#EEF0FF', color: '#5B5FF0' }
              return (
                <article key={n.title} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: tc.bg, color: tc.color }}>{n.tag}</span>
                    <span className="text-xs" style={{ color: '#687280' }}>{n.date}</span>
                  </div>
                  <h2 className="font-bold leading-relaxed hover:underline" style={{ color: '#00142D' }}>{n.title}</h2>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">全球超過 600,000 商家已使用 ARVIX</h2>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            立即免費試用
          </a>
        </div>
      </section>
    </main>
  )
}
