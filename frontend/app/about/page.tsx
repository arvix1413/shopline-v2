export default function AboutPage() {
  const milestones = [
    { year: '2013', desc: '在香港成立，開始提供電商解決方案' },
    { year: '2015', desc: '進入台灣市場，快速成長' },
    { year: '2018', desc: '商家數突破 100,000' },
    { year: '2020', desc: '推出 OMO 全通路整合解決方案' },
    { year: '2022', desc: '全球商家數突破 400,000' },
    { year: '2025', desc: '全球超過 600,000 商家使用 SHOPLINE' },
  ]

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>
            我們協助商家<br />成功「賣」向全世界
          </h1>
          <p className="text-lg" style={{ color: '#687280' }}>
            立足於亞洲，展望全世界。我們深信「品牌的成功才是 SHOPLINE 的成功！」
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>SHOPLINE 里程碑</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((m) => (
              <div key={m.year} className="p-8 rounded-2xl" style={{ backgroundColor: '#F4F7FC' }}>
                <div className="text-3xl font-black mb-3" style={{ color: '#356DFF' }}>{m.year}</div>
                <p className="text-sm" style={{ color: '#354253' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F2F7FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>獲獎及認證紀錄</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['LINE 指定技術合作夥伴', 'PCI-DSS 安全認證', 'Meta 官方合作夥伴', 'Google 認證合作夥伴'].map((award) => (
              <div key={award} className="p-6 bg-white rounded-2xl text-center shadow-sm">
                <div className="text-3xl mb-3">🏆</div>
                <p className="text-sm font-bold" style={{ color: '#00142D' }}>{award}</p>
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
