import Link from 'next/link'

export default function Footer() {
  const cols = [
    {
      title: '網路開店',
      links: [
        { label: '特色總覽', href: '/online-store' },
        { label: '功能介紹', href: '/online-store/features' },
        { label: '版型主題', href: '/templates' },
        { label: 'SHOP Builder', href: '/online-store/shop-builder' },
        { label: '客戶案例', href: '/showcase' },
      ],
    },
    {
      title: '社群購物',
      links: [
        { label: '特色總覽', href: '/social-commerce' },
        { label: '功能介紹', href: '/social-commerce/features' },
        { label: 'Instagram 直播', href: '/social-commerce/instagram-live' },
      ],
    },
    {
      title: '零售 POS',
      links: [
        { label: '特色總覽', href: '/pos' },
        { label: '功能介紹', href: '/pos/features' },
        { label: '週邊硬體', href: '/pos/hardware' },
      ],
    },
    {
      title: '我要開店',
      links: [
        { label: '方案費用', href: '/about/pricing' },
        { label: '開店講座', href: 'https://seminar.shopline.tw', external: true },
        { label: '顧問諮詢', href: 'https://consultation.shopline.tw', external: true },
      ],
    },
    {
      title: '更多資源',
      links: [
        { label: '擴充功能商店', href: 'https://apps.shopline.tw', external: true },
        { label: '新手問答', href: '/faq/overview' },
        { label: '電商教室', href: 'https://blog.shopline.tw/', external: true },
        { label: '電商成長學苑', href: 'https://course.shopline.tw/', external: true },
        { label: '電商數據庫', href: 'https://trends.shopline.tw/', external: true },
        { label: 'LINE 官方帳號', href: 'https://partners.shopline.tw/line-account', external: true },
      ],
    },
    {
      title: '產品支援',
      links: [
        { label: '產品最新動態', href: '/changelog' },
        { label: '常見問題中心', href: 'https://support.shoplineapp.com/', external: true },
      ],
    },
    {
      title: 'SHOPLINE',
      links: [
        { label: '加入我們', href: 'https://marketing.shopline.tw/job', external: true },
        { label: '合作機會', href: '/cooperate' },
        { label: '精選夥伴', href: '/selectedpartners' },
        { label: '資格與認證', href: '/compliance-center' },
      ],
    },
  ]

  const socials = [
    { label: 'Facebook', href: 'https://www.facebook.com/shopline.tw', icon: 'f' },
    { label: 'Instagram', href: 'https://www.instagram.com/shopline_tw/', icon: 'ig' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/shopline', icon: 'in' },
    { label: 'YouTube', href: 'https://www.youtube.com/c/shoplineglobalsmartcommerceenabler', icon: 'yt' },
    { label: 'LINE', href: 'https://line.me/R/ti/p/%40prs5793t', icon: 'L' },
  ]

  const bottomLinks = [
    { label: '網站地圖', href: '/about/sitemap' },
    { label: '隱私權政策', href: '/about/privacy' },
    { label: '會員條款', href: '/about/terms' },
  ]

  return (
    <footer style={{ backgroundColor: '#00142D', color: '#fff' }}>
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center gap-4">
          <Link href="/about" className="text-white font-bold text-sm hover:text-white/80 transition-colors">關於我們</Link>
          <Link href="/about/press" className="text-white font-bold text-sm hover:text-white/80 transition-colors">最新消息</Link>
          <a
            href="https://marketing.shopline.tw/anti-fraud"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/40 text-white text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-white/10 transition-colors"
          >
            資訊安全保護專區
          </a>
        </div>
      </div>

      {/* Main columns */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-12">
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-white mb-4 text-sm">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {(link as any).external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm transition-colors hover:text-white"
                        style={{ color: '#B1BFC9' }}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm transition-colors hover:text-white"
                        style={{ color: '#B1BFC9' }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-3 flex-wrap">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-xs text-gray-400 hover:bg-white/20 hover:text-white transition-all font-bold"
              >
                {s.icon}
              </a>
            ))}
            <div className="flex gap-4 ml-2">
              {bottomLinks.map((item) => (
                <Link key={item.label} href={item.href} className="text-gray-500 hover:text-white text-xs transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-gray-500 text-xs text-right">
            <div>服務時間 星期一至五 上午 10 點至晚上 7 點</div>
            <div className="mt-1">© Copyright 2026 SHOPLINE Tech Co., Ltd.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
