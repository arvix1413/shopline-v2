'use client'

import { useState, useRef } from 'react'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const BANNER_TEXT = '🎁 開店零負擔！補助、資源一次到位'

type NavLink = { label: string; href: string }
type NavCol = { title: string; links: NavLink[] }
type FeaturedItem = { name: string; desc: string; href: string }

type SolutionsDropdown = {
  featured: { title: string; desc: string; href: string }
  links: NavLink[]
}
type ColsDropdown = {
  cols: NavCol[]
  featured?: FeaturedItem[]
}

type NavItem = {
  label: string
  href?: string
  dropdown?: SolutionsDropdown | ColsDropdown
}

const navItems: NavItem[] = [
  {
    label: '解決方案',
    dropdown: {
      featured: { title: '5 大解決方案', desc: '提供商家全方位的零售解決方案', href: '/solutions' },
      links: [
        { label: '流量獲取與轉換', href: '/solutions/traffic-and-conversion' },
        { label: '會員回購', href: '/solutions/member-repurchase' },
        { label: 'OMO 全通路整合', href: '/solutions/omo' },
        { label: '商店營運效率', href: '/solutions/shop-efficiency' },
        { label: '數據賦能', href: '/solutions/data-analysis' },
      ],
    } as SolutionsDropdown,
  },
  {
    label: '產品與服務',
    dropdown: {
      cols: [
        { title: '網路商店', links: [
          { label: '特色總覽', href: '/online-store' },
          { label: '功能介紹', href: '/online-store/features' },
          { label: '客戶案例', href: '/showcase' },
          { label: 'SHOP Builder', href: '/online-store/shop-builder' },
          { label: '版型主題', href: '/templates' },
        ]},
        { title: '社群購物', links: [
          { label: '特色總覽', href: '/social-commerce' },
          { label: '功能介紹', href: '/social-commerce/features' },
          { label: 'Instagram Live', href: '/social-commerce/instagram-live' },
        ]},
        { title: '零售 POS', links: [
          { label: '特色總覽', href: '/pos' },
          { label: '功能介紹', href: '/pos/features' },
          { label: '週邊硬體', href: '/pos/hardware' },
        ]},
        { title: '功能應用', links: [
          { label: 'RFIM 分眾行銷', href: '/targeted-marketing' },
          { label: 'LINE 官方帳號整合', href: '/line-solution' },
          { label: '團購解決方案', href: '/group-buying' },
          { label: 'Shoplytics 數據分析中心', href: '/shoplytics' },
        ]},
      ],
      featured: [
        { name: 'SHOPLINE Payments', desc: '安全便利的金流收款服務', href: '/payments' },
        { name: 'Smart OMO', desc: '為你聰明串連門市和網店', href: '/smart-omo' },
        { name: 'Shopper App', desc: '快速建立品牌會員購物 App', href: '/shopper-app' },
      ],
    } as ColsDropdown,
  },
  { label: '方案費用', href: '/about/pricing' },
  {
    label: '更多資源',
    dropdown: {
      cols: [
        { title: '知識庫', links: [
          { label: '電商成長學苑', href: '#' },
          { label: '電商教室', href: '#' },
          { label: 'SHOPLINE TRENDS', href: '#' },
          { label: '資訊安全保護專區', href: '#' },
        ]},
        { title: '最新動態', links: [
          { label: '產品最新動態', href: '/changelog' },
          { label: '關於我們', href: '/about' },
        ]},
      ],
    } as ColsDropdown,
  },
  {
    label: '新手上路',
    dropdown: {
      cols: [
        { title: '', links: [
          { label: '顧問諮詢', href: '#' },
          { label: '開店講座', href: '#' },
          { label: '開店祕技', href: '/online-store-setup' },
          { label: '新手問答', href: '/faq/overview' },
        ]},
      ],
    } as ColsDropdown,
  },
  { label: '擴充功能', href: '#' },
]

const regions = [
  'Global (English)', 'UK (ENG)', 'Japan (日本語)', 'Australia (ENG)',
  'Singapore (English)', '香港 ( 繁體中文 )', 'Hong Kong (English)', 'Malaysia (English)',
]

function isSolutionsDropdown(d: SolutionsDropdown | ColsDropdown): d is SolutionsDropdown {
  return 'links' in d && 'featured' in d && 'href' in (d as SolutionsDropdown).featured
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const [showRegion, setShowRegion] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = (i: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(i)
  }
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  return (
    <>
      {showBanner && (
        <div className="bg-[#1a1a6e] text-white text-sm py-2 overflow-hidden relative flex items-center">
          <div className="flex whitespace-nowrap animate-marquee">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="mx-12">{BANNER_TEXT}</span>
            ))}
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 bg-[#1a1a6e] pl-2"
            aria-label="關閉公告"
          >
            <X size={16} />
          </button>
        </div>
      )}

      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex-shrink-0">
              <img
                src="https://img.shoplineapp.com/media/image_clips/60811bb98a60d74a03808d4d/original.png?1619073977"
                alt="SHOPLINE"
                width={120}
                height={20}
                className="h-7 w-auto"
              />
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, i) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown ? handleMouseEnter(i) : undefined}
                  onMouseLeave={item.dropdown ? handleMouseLeave : undefined}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex items-center gap-0.5 px-3 py-2 text-sm font-medium transition-colors rounded-md"
                      style={{ color: '#00142D' }}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      className="flex items-center gap-0.5 px-3 py-2 text-sm font-medium transition-colors rounded-md"
                      style={{ color: activeDropdown === i ? '#356DFF' : '#00142D' }}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-200"
                        style={{ transform: activeDropdown === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      />
                    </button>
                  )}

                  {item.dropdown && activeDropdown === i && (
                    <div
                      className="absolute top-full left-0 mt-1 bg-white rounded-2xl z-50"
                      style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.15)', border: '1px solid #E0E3E8', minWidth: 380 }}
                      onMouseEnter={() => handleMouseEnter(i)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {isSolutionsDropdown(item.dropdown) ? (
                        <div className="flex">
                          <div className="p-5 rounded-l-2xl" style={{ backgroundColor: '#F4F7FC', minWidth: 180 }}>
                            <Link href={(item.dropdown as SolutionsDropdown).featured.href} className="font-black text-sm mb-1 block hover:text-[#356DFF]" style={{ color: '#00142D' }}>
                              {(item.dropdown as SolutionsDropdown).featured.title}
                            </Link>
                            <div className="text-xs leading-relaxed" style={{ color: '#687280' }}>
                              {(item.dropdown as SolutionsDropdown).featured.desc}
                            </div>
                          </div>
                          <ul className="py-3 px-2 flex-1">
                            {(item.dropdown as SolutionsDropdown).links.map((link) => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  className="block px-3 py-2 text-sm rounded-lg transition-colors hover:text-[#356DFF] hover:bg-blue-50"
                                  style={{ color: '#354253' }}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <div className="p-5 flex gap-6">
                          {(item.dropdown as ColsDropdown).cols.map((col) => (
                            <div key={col.title} className="min-w-[120px]">
                              {col.title && (
                                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#B1BFC9' }}>
                                  {col.title}
                                </div>
                              )}
                              <ul className="space-y-1">
                                {col.links.map((link) => (
                                  <li key={link.label}>
                                    <Link href={link.href} className="block text-sm py-1.5 px-2 rounded-md hover:text-[#356DFF] hover:bg-blue-50 transition-colors" style={{ color: '#354253' }}>
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          {(item.dropdown as ColsDropdown).featured && (
                            <div className="pl-4 min-w-[180px]" style={{ borderLeft: '1px solid #E0E3E8' }}>
                              {(item.dropdown as ColsDropdown).featured!.map((f) => (
                                <Link key={f.name} href={f.href} className="block py-2 px-2 rounded-lg hover:bg-blue-50 transition-colors group">
                                  <div className="text-sm font-semibold group-hover:text-[#356DFF] transition-colors" style={{ color: '#00142D' }}>{f.name}</div>
                                  <div className="text-xs mt-0.5" style={{ color: '#687280' }}>{f.desc}</div>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <div className="relative">
                <button
                  className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 px-2 py-1 rounded-md hover:bg-gray-50"
                  onClick={() => setShowRegion(!showRegion)}
                >
                  <Globe size={15} />
                  <span>台灣</span>
                  <ChevronDown size={13} />
                </button>
                {showRegion && (
                  <div className="absolute right-0 top-full mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[180px] z-50">
                    {regions.map(r => (
                      <a key={r} href="#" className="block px-4 py-2 text-sm text-gray-600 hover:text-[#356DFF] hover:bg-blue-50">{r}</a>
                    ))}
                  </div>
                )}
              </div>
              <a href="/login" className="text-sm text-gray-700 hover:text-[#356DFF] font-medium px-2 py-1">
                登入
              </a>
              <a
                href="/register"
                className="text-white text-sm font-bold px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#356DFF' }}
              >
                免費試用
              </a>
            </div>

            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="選單">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a key={item.label} href={item.href || '#'} className="text-gray-700 text-sm font-medium py-1 flex items-center justify-between">
                  {item.label}
                  {item.dropdown && <ChevronDown size={14} />}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <a href="/login" className="text-sm text-gray-700 font-medium">登入</a>
                <a href="/register" className="bg-[#356DFF] text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center">
                  免費試用
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
