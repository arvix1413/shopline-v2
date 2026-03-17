export default function Footer() {
  const cols = [
    {
      title: '解決方案',
      links: ['流量獲取與轉換', 'OMO 全通路整合', '商店營運效率', '數據賦能', '會員回購'],
    },
    {
      title: '產品與服務',
      links: ['網路商店', '社群購物', '零售 POS', 'Smart OMO', 'Shopper App'],
    },
    {
      title: '更多資源',
      links: ['電商成長學苑', '開放生態圈', '成功案例', '電商教室 Blog', '開店白皮書'],
    },
    {
      title: '支援服務',
      links: ['客服中心', '技術支援', '合作夥伴', '聯絡我們', '關於 SHOPLINE'],
    },
  ]

  return (
    <footer className="bg-[#0a0a2e] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-2xl font-black mb-4">
              <span className="text-white">SHOP</span><span className="text-blue-400">LINE</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              全方位零售整合專家，助你實現全通路成長
            </p>
            <div className="flex gap-3">
              {['f', 'in', 'ig', 'yt'].map((s) => (
                <a key={s} href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-xs text-gray-400 hover:bg-white/20 hover:text-white transition-all font-bold">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-white mb-4 text-sm">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 SHOPLINE Inc. All rights reserved.</p>
          <div className="flex gap-6">
            {['隱私政策', '服務條款', 'Cookie 政策', '法律聲明'].map((item) => (
              <a key={item} href="#" className="text-gray-500 hover:text-white text-sm transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
