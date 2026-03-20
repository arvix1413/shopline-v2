'use client'

import { useState, useRef } from 'react'
import { Menu, X, Globe, ChevronDown, User, LogOut, Settings } from 'lucide-react'
import Link from 'next/link'
import { useI18n } from '../../contexts/I18nContext'
import { useAuth } from '../../contexts/AuthContext'
import { locales, type Locale } from '../../lib/i18n'

type NavLink = { label: string; href: string }
type NavCol = { title: string; links: NavLink[] }
type FeaturedItem = { name: string; desc: string; href: string }
type SolutionsDropdown = { featured: { title: string; desc: string; href: string }; links: NavLink[] }
type ColsDropdown = { cols: NavCol[]; featured?: FeaturedItem[] }
type NavItem = { label: string; href?: string; dropdown?: SolutionsDropdown | ColsDropdown }

function isSolutionsDropdown(d: SolutionsDropdown | ColsDropdown): d is SolutionsDropdown {
  return 'links' in d && 'featured' in d && 'href' in (d as SolutionsDropdown).featured
}

export default function Header() {
  const { t, locale, setLocale } = useI18n()
  const { user, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const [showRegion, setShowRegion] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const navItems: NavItem[] = [
    {
      label: t.nav.solutions,
      dropdown: {
        featured: { title: t.nav.solutionsTitle, desc: t.nav.solutions, href: '/solutions' },
        links: [
          { label: t.integration.items[0].title, href: '/solutions/traffic-and-conversion' },
          { label: t.integration.items[3].title, href: '/solutions/member-repurchase' },
          { label: t.integration.items[1].title, href: '/solutions/omo' },
          { label: t.integration.items[2].title, href: '/solutions/shop-efficiency' },
          { label: t.integration.items[4].title, href: '/solutions/data-analysis' },
        ],
      } as SolutionsDropdown,
    },
    {
      label: t.nav.products,
      dropdown: {
        cols: [
          { title: locale === 'en' ? 'Online Store' : locale === 'zh-CN' ? '网络商店' : '網路商店', links: [
            { label: locale === 'en' ? 'Overview' : locale === 'zh-CN' ? '特色总览' : '特色總覽', href: '/online-store' },
            { label: locale === 'en' ? 'Features' : locale === 'zh-CN' ? '功能介绍' : '功能介紹', href: '/online-store/features' },
            { label: locale === 'en' ? 'Case Studies' : locale === 'zh-CN' ? '客户案例' : '客戶案例', href: '/showcase' },
            { label: 'SHOP Builder', href: '/online-store/shop-builder' },
            { label: locale === 'en' ? 'Themes' : locale === 'zh-CN' ? '版型主题' : '版型主題', href: '/templates' },
          ]},
          { title: locale === 'en' ? 'Social Commerce' : locale === 'zh-CN' ? '社群购物' : '社群購物', links: [
            { label: locale === 'en' ? 'Overview' : locale === 'zh-CN' ? '特色总览' : '特色總覽', href: '/social-commerce' },
            { label: locale === 'en' ? 'Features' : locale === 'zh-CN' ? '功能介绍' : '功能介紹', href: '/social-commerce/features' },
            { label: 'Instagram Live', href: '/social-commerce/instagram-live' },
          ]},
          { title: locale === 'en' ? 'Retail POS' : locale === 'zh-CN' ? '零售 POS' : '零售 POS', links: [
            { label: locale === 'en' ? 'Overview' : locale === 'zh-CN' ? '特色总览' : '特色總覽', href: '/pos' },
            { label: locale === 'en' ? 'Features' : locale === 'zh-CN' ? '功能介绍' : '功能介紹', href: '/pos/features' },
            { label: locale === 'en' ? 'Hardware' : locale === 'zh-CN' ? '周边硬件' : '週邊硬體', href: '/pos/hardware' },
          ]},
          { title: locale === 'en' ? 'Add-ons' : locale === 'zh-CN' ? '功能应用' : '功能應用', links: [
            { label: locale === 'en' ? 'RFIM Marketing' : locale === 'zh-CN' ? 'RFIM 分众营销' : 'RFIM 分眾行銷', href: '/targeted-marketing' },
            { label: locale === 'en' ? 'LINE Integration' : locale === 'zh-CN' ? 'LINE 官方账号整合' : 'LINE 官方帳號整合', href: '/line-solution' },
            { label: locale === 'en' ? 'Group Buy' : locale === 'zh-CN' ? '团购解决方案' : '團購解決方案', href: '/group-buying' },
            { label: 'Shoplytics', href: '/shoplytics' },
          ]},
        ],
        featured: [
          { name: 'ARVIX Payments', desc: locale === 'en' ? 'Secure payment processing' : locale === 'zh-CN' ? '安全便利的收款服务' : '安全便利的金流收款服務', href: '/payments' },
          { name: 'Smart OMO', desc: locale === 'en' ? 'Connect stores & online shop' : locale === 'zh-CN' ? '智能串联门店和网店' : '為你聰明串連門市和網店', href: '/smart-omo' },
          { name: 'Shopper App', desc: locale === 'en' ? 'Build your brand shopping app' : locale === 'zh-CN' ? '快速建立品牌购物 App' : '快速建立品牌會員購物 App', href: '/shopper-app' },
        ],
      } as ColsDropdown,
    },
    { label: t.nav.pricing, href: '/about/pricing' },
    {
      label: t.nav.resources,
      dropdown: {
        cols: [
          { title: locale === 'en' ? 'Knowledge' : locale === 'zh-CN' ? '知识库' : '知識庫', links: [
            { label: locale === 'en' ? 'Commerce Academy' : locale === 'zh-CN' ? '电商成长学院' : '電商成長學苑', href: '#' },
            { label: locale === 'en' ? 'Commerce Blog' : locale === 'zh-CN' ? '电商教室' : '電商教室', href: '#' },
            { label: 'ARVIX TRENDS', href: '#' },
            { label: locale === 'en' ? 'Security Center' : locale === 'zh-CN' ? '信息安全保护专区' : '資訊安全保護專區', href: '#' },
          ]},
          { title: locale === 'en' ? 'News' : locale === 'zh-CN' ? '最新动态' : '最新動態', links: [
            { label: locale === 'en' ? 'Product Updates' : locale === 'zh-CN' ? '产品最新动态' : '產品最新動態', href: '/changelog' },
            { label: locale === 'en' ? 'About Us' : locale === 'zh-CN' ? '关于我们' : '關於我們', href: '/about' },
          ]},
        ],
      } as ColsDropdown,
    },
    {
      label: t.nav.getStarted,
      dropdown: {
        cols: [
          { title: '', links: [
            { label: locale === 'en' ? 'Consultation' : locale === 'zh-CN' ? '顾问咨询' : '顧問諮詢', href: '/consultation' },
            { label: locale === 'en' ? 'Seminar' : locale === 'zh-CN' ? '开店讲座' : '開店講座', href: '/seminar' },
            { label: locale === 'en' ? 'Setup Guide' : locale === 'zh-CN' ? '开店秘技' : '開店祕技', href: '/online-store-setup' },
            { label: locale === 'en' ? 'FAQ' : locale === 'zh-CN' ? '新手问答' : '新手問答', href: '/faq/overview' },
          ]},
        ],
      } as ColsDropdown,
    },
    { label: t.nav.apps, href: '/apps' },
  ]

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
        <div className="text-white text-sm py-2 overflow-hidden relative flex items-center"
          style={{ background: 'linear-gradient(90deg, #1E3A8A 0%, #1E40AF 100%)' }}>
          <div className="flex whitespace-nowrap animate-marquee">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="mx-12">{t.banner}</span>
            ))}
          </div>
          <button onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 pl-2"
            style={{ background: 'linear-gradient(90deg, transparent, #1E40AF)' }}
            aria-label="Close">
            <X size={16} />
          </button>
        </div>
      )}

      <header className="sticky top-0 z-50"
        style={{ backgroundColor: 'rgba(8,8,26,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-black tracking-tight"
                style={{ background: 'linear-gradient(135deg, #60A5FA, #93C5FD)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                ARVIX
              </span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, i) => (
                <div key={item.label} className="relative"
                  onMouseEnter={() => item.dropdown ? handleMouseEnter(i) : undefined}
                  onMouseLeave={item.dropdown ? handleMouseLeave : undefined}>
                  {item.href ? (
                    <Link href={item.href}
                      className="flex items-center gap-0.5 px-3 py-2 text-sm font-medium transition-colors rounded-md"
                      style={{ color: 'rgba(255,255,255,0.75)' }}>
                      {item.label}
                    </Link>
                  ) : (
                    <button className="flex items-center gap-0.5 px-3 py-2 text-sm font-medium transition-colors rounded-md"
                      style={{ color: activeDropdown === i ? '#93C5FD' : 'rgba(255,255,255,0.75)' }}>
                      {item.label}
                      <ChevronDown size={14} className="transition-transform duration-200"
                        style={{ transform: activeDropdown === i ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </button>
                  )}

                  {item.dropdown && activeDropdown === i && (
                    <div className="absolute top-full left-0 mt-1 rounded-2xl z-50"
                      style={{ background: 'rgba(14,14,44,0.97)', backdropFilter: 'blur(24px)', boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)', minWidth: 380 }}
                      onMouseEnter={() => handleMouseEnter(i)}
                      onMouseLeave={handleMouseLeave}>
                      {isSolutionsDropdown(item.dropdown) ? (
                        <div className="flex">
                          <div className="p-5 rounded-l-2xl" style={{ backgroundColor: 'rgba(30,64,175,0.15)', minWidth: 180 }}>
                            <Link href={(item.dropdown as SolutionsDropdown).featured.href}
                              className="font-black text-sm mb-1 block hover:text-[#93C5FD]" style={{ color: '#fff' }}>
                              {(item.dropdown as SolutionsDropdown).featured.title}
                            </Link>
                            <div className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                              {(item.dropdown as SolutionsDropdown).featured.desc}
                            </div>
                          </div>
                          <ul className="py-3 px-2 flex-1">
                            {(item.dropdown as SolutionsDropdown).links.map((link) => (
                              <li key={link.label}>
                                <Link href={link.href}
                                  className="block px-3 py-2 text-sm rounded-lg transition-colors hover:text-[#93C5FD] hover:bg-white/5"
                                  style={{ color: 'rgba(255,255,255,0.7)' }}>
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
                                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'rgba(255,255,255,0.3)' }}>
                                  {col.title}
                                </div>
                              )}
                              <ul className="space-y-1">
                                {col.links.map((link) => (
                                  <li key={link.label}>
                                    <Link href={link.href}
                                      className="block text-sm py-1.5 px-2 rounded-md hover:text-[#93C5FD] hover:bg-white/5 transition-colors"
                                      style={{ color: 'rgba(255,255,255,0.65)' }}>
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          {(item.dropdown as ColsDropdown).featured && (
                            <div className="pl-4 min-w-[180px]" style={{ borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
                              {(item.dropdown as ColsDropdown).featured!.map((f) => (
                                <Link key={f.name} href={f.href}
                                  className="block py-2 px-2 rounded-lg hover:bg-white/5 transition-colors group">
                                  <div className="text-sm font-semibold group-hover:text-[#93C5FD] transition-colors" style={{ color: '#fff' }}>{f.name}</div>
                                  <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>{f.desc}</div>
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
              {/* Language switcher */}
              <div className="relative">
                <button
                  className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg transition-colors hover:bg-white/5"
                  style={{ color: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.1)' }}
                  onClick={() => setShowRegion(!showRegion)}
                >
                  <Globe size={14} />
                  <span>{locales.find(l => l.code === locale)?.label}</span>
                  <ChevronDown size={12} style={{ transform: showRegion ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                </button>
                {showRegion && (
                  <div className="absolute right-0 top-full mt-1 rounded-xl py-1 min-w-[160px] z-50"
                    style={{ background: 'rgba(14,14,44,0.97)', backdropFilter: 'blur(24px)', boxShadow: '0 8px 32px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    {locales.map(l => (
                      <button key={l.code}
                        onClick={() => { setLocale(l.code as Locale); setShowRegion(false) }}
                        className="w-full text-left flex items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-white/5"
                        style={{ color: locale === l.code ? '#93C5FD' : 'rgba(255,255,255,0.65)' }}>
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                        {locale === l.code && <span className="ml-auto text-xs" style={{ color: '#93C5FD' }}>✓</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors hover:bg-white/10"
                    style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)' }}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: 'linear-gradient(135deg, #1E40AF, #1D4ED8)' }}>
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm font-medium max-w-[100px] truncate">{user.name}</span>
                    <ChevronDown size={12} style={{ transform: showUserMenu ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                  </button>
                  {showUserMenu && (
                    <div className="absolute right-0 top-full mt-2 rounded-xl py-1 min-w-[180px] z-50"
                      style={{ background: 'rgba(14,14,44,0.97)', backdropFilter: 'blur(24px)', boxShadow: '0 8px 32px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div className="px-4 py-2.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                        <div className="text-sm font-semibold text-white truncate">{user.name}</div>
                        <div className="text-xs truncate" style={{ color: 'rgba(255,255,255,0.45)' }}>{user.email}</div>
                      </div>
                      <Link href="/profile" onClick={() => setShowUserMenu(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors hover:bg-white/5"
                        style={{ color: 'rgba(255,255,255,0.7)' }}>
                        <User size={14} /> 個人資料
                      </Link>
                      <Link href="/settings" onClick={() => setShowUserMenu(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors hover:bg-white/5"
                        style={{ color: 'rgba(255,255,255,0.7)' }}>
                        <Settings size={14} /> 帳號設定
                      </Link>
                      {user.isAdmin === 1 && (
                        <Link href="/admin" onClick={() => setShowUserMenu(false)}
                          className="flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors hover:bg-white/5"
                          style={{ color: '#FBBF24' }}>
                          <span style={{ fontSize: 14 }}>⚙️</span> 管理後台
                        </Link>
                      )}
                      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', marginTop: 4, paddingTop: 4 }}>
                        <button onClick={() => { logout(); setShowUserMenu(false) }}
                          className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors hover:bg-white/5"
                          style={{ color: '#F87171' }}>
                          <LogOut size={14} /> 登出
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <a href="/login" className="text-sm font-medium px-2 py-1 transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.65)' }}>
                    {t.nav.login}
                  </a>
                  <a href="/trial-redirect"
                    className="text-white text-sm font-bold px-6 py-2 rounded-full transition-all btn-glow"
                    style={{ background: 'linear-gradient(135deg, #1E40AF 0%, #1D4ED8 100%)' }}>
                    {t.nav.freeTrial}
                  </a>
                </>
              )}
            </div>

            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu"
              style={{ color: 'rgba(255,255,255,0.8)' }}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden px-6 py-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', backgroundColor: 'rgba(8,8,26,0.97)' }}>
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a key={item.label} href={item.href || '#'}
                  className="text-sm font-medium py-1 flex items-center justify-between"
                  style={{ color: 'rgba(255,255,255,0.75)' }}>
                  {item.label}
                  {item.dropdown && <ChevronDown size={14} />}
                </a>
              ))}
              {/* Mobile language switcher */}
              <div className="flex gap-2 pt-2">
                {locales.map(l => (
                  <button key={l.code}
                    onClick={() => setLocale(l.code as Locale)}
                    className="flex-1 text-xs py-1.5 rounded-lg transition-colors"
                    style={{
                      background: locale === l.code ? 'rgba(30,64,175,0.3)' : 'rgba(255,255,255,0.05)',
                      border: `1px solid ${locale === l.code ? 'rgba(30,64,175,0.5)' : 'rgba(255,255,255,0.08)'}`,
                      color: locale === l.code ? '#93C5FD' : 'rgba(255,255,255,0.55)',
                    }}>
                    {l.flag} {l.label}
                  </button>
                ))}
              </div>
              <div className="pt-3 flex flex-col gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <a href="/login" className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.65)' }}>{t.nav.login}</a>
                <a href="/trial-redirect" className="text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center"
                  style={{ background: 'linear-gradient(135deg, #1E40AF 0%, #1D4ED8 100%)' }}>
                  {t.nav.freeTrial}
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
