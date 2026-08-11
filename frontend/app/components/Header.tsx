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
  const [mobileOpen, setMobileOpen] = useState<number | null>(null)
  const [showRegion, setShowRegion] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const h = t.header

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
          { title: h.onlineStore, links: [
            { label: h.overview, href: '/online-store' },
            { label: h.features, href: '/online-store/features' },
            { label: h.caseStudies, href: '/showcase' },
            { label: 'SHOP Builder', href: '/online-store/shop-builder' },
            { label: h.themes, href: '/templates' },
          ]},
          { title: h.socialCommerce, links: [
            { label: h.overview, href: '/social-commerce' },
            { label: h.features, href: '/social-commerce/features' },
            { label: 'Instagram Live', href: '/social-commerce/instagram-live' },
          ]},
          { title: h.retailPos, links: [
            { label: h.overview, href: '/pos' },
            { label: h.features, href: '/pos/features' },
            { label: h.hardware, href: '/pos/hardware' },
          ]},
          { title: h.addOns, links: [
            { label: h.rfim, href: '/targeted-marketing' },
            { label: h.lineIntegration, href: '/line-solution' },
            { label: h.groupBuy, href: '/group-buying' },
            { label: 'Shoplytics', href: '/shoplytics' },
          ]},
        ],
        featured: [
          { name: 'ARVIX Payments', desc: h.paymentsDesc, href: '/payments' },
          { name: 'Smart OMO', desc: h.smartOmoDesc, href: '/smart-omo' },
          { name: 'Shopper App', desc: h.shopperAppDesc, href: '/shopper-app' },
        ],
      } as ColsDropdown,
    },
    { label: t.nav.pricing, href: '/about/pricing' },
    {
      label: t.nav.resources,
      dropdown: {
        cols: [
          { title: h.knowledge, links: [
            { label: h.academy, href: '/about' },
            { label: h.blog, href: '/about' },
            { label: 'ARVIX TRENDS', href: '/about' },
            { label: h.securityCenter, href: '/compliance-center' },
          ]},
          { title: h.news, links: [
            { label: h.productUpdates, href: '/changelog' },
            { label: h.aboutUs, href: '/about' },
          ]},
        ],
      } as ColsDropdown,
    },
    {
      label: t.nav.getStarted,
      dropdown: {
        cols: [
          { title: '', links: [
            { label: h.consultation, href: '/consultation' },
            { label: h.seminar, href: '/seminar' },
            { label: h.setupGuide, href: '/online-store-setup' },
            { label: h.faq, href: '/faq/overview' },
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

  const localePicker = (compact = false) => (
    <div className={compact ? 'grid grid-cols-2 gap-2 max-h-48 overflow-y-auto' : ''}>
      {compact ? (
        locales.map((l) => (
          <button
            key={l.code}
            type="button"
            onClick={() => setLocale(l.code as Locale)}
            className="text-left text-xs py-2 px-2.5 rounded-lg transition-colors"
            style={{
              background: locale === l.code ? '#F0F1FE' : '#F6F7FB',
              border: `1px solid ${locale === l.code ? 'rgba(91,95,240,0.4)' : 'rgba(18,19,31,0.08)'}`,
              color: locale === l.code ? '#5B5FF0' : '#5C5F7A',
            }}
          >
            <span className="mr-1">{l.flag}</span>
            {l.label}
          </button>
        ))
      ) : (
        locales.map((l) => (
          <button
            key={l.code}
            type="button"
            onClick={() => { setLocale(l.code as Locale); setShowRegion(false) }}
            className="w-full text-left flex items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-[#F0F1FE]"
            style={{ color: locale === l.code ? '#5B5FF0' : '#3A3D55' }}
          >
            <span>{l.flag}</span>
            <span>{l.label}</span>
            {locale === l.code && <span className="ml-auto text-xs" style={{ color: '#5B5FF0' }}>✓</span>}
          </button>
        ))
      )}
    </div>
  )

  return (
    <>
      {showBanner && (
        <div className="text-white text-sm py-2 overflow-hidden relative flex items-center"
          style={{ background: 'linear-gradient(90deg, #484CE8 0%, #5B5FF0 55%, #6B6FF5 100%)' }}>
          <div className="flex whitespace-nowrap animate-marquee">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="mx-12">{t.banner}</span>
            ))}
          </div>
          <button onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 pl-2"
            style={{ background: 'linear-gradient(90deg, transparent, #5B5FF0)' }}
            aria-label={t.common.close}>
            <X size={16} />
          </button>
        </div>
      )}

      <header className="sticky top-0 z-50"
        style={{ backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(18,19,31,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex-shrink-0">
              <span className="font-brand text-2xl font-extrabold tracking-tight brand-text">ARVIX</span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, i) => (
                <div key={item.label} className="relative"
                  onMouseEnter={() => item.dropdown ? handleMouseEnter(i) : undefined}
                  onMouseLeave={item.dropdown ? handleMouseLeave : undefined}>
                  {item.href ? (
                    <Link href={item.href}
                      className="flex items-center gap-0.5 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-[#5B5FF0]"
                      style={{ color: '#3A3D55' }}>
                      {item.label}
                    </Link>
                  ) : (
                    <button type="button" className="flex items-center gap-0.5 px-3 py-2 text-sm font-medium transition-colors rounded-md"
                      style={{ color: activeDropdown === i ? '#5B5FF0' : '#3A3D55' }}>
                      {item.label}
                      <ChevronDown size={14} className="transition-transform duration-200"
                        style={{ transform: activeDropdown === i ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </button>
                  )}

                  {item.dropdown && activeDropdown === i && (
                    <div className="absolute top-full left-0 mt-1 rounded-2xl z-50 max-w-[min(92vw,720px)]"
                      style={{ background: '#fff', boxShadow: '0 12px 40px rgba(18,19,31,0.12)', border: '1px solid rgba(18,19,31,0.08)', minWidth: 280 }}
                      onMouseEnter={() => handleMouseEnter(i)}
                      onMouseLeave={handleMouseLeave}>
                      {isSolutionsDropdown(item.dropdown) ? (
                        <div className="flex flex-col sm:flex-row">
                          <div className="p-5 rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none" style={{ backgroundColor: '#F0F1FE', minWidth: 180 }}>
                            <Link href={(item.dropdown as SolutionsDropdown).featured.href}
                              className="font-black text-sm mb-1 block hover:text-[#5B5FF0]" style={{ color: '#12131F' }}>
                              {(item.dropdown as SolutionsDropdown).featured.title}
                            </Link>
                            <div className="text-xs leading-relaxed" style={{ color: '#5C5F7A' }}>
                              {(item.dropdown as SolutionsDropdown).featured.desc}
                            </div>
                          </div>
                          <ul className="py-3 px-2 flex-1">
                            {(item.dropdown as SolutionsDropdown).links.map((link) => (
                              <li key={link.href + link.label}>
                                <Link href={link.href}
                                  className="block px-3 py-2 text-sm rounded-lg transition-colors hover:text-[#5B5FF0] hover:bg-[#F0F1FE]"
                                  style={{ color: '#3A3D55' }}>
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <div className="p-5 flex flex-wrap gap-6">
                          {(item.dropdown as ColsDropdown).cols.map((col) => (
                            <div key={col.title || col.links[0]?.href} className="min-w-[120px]">
                              {col.title && (
                                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#8A8DA8' }}>
                                  {col.title}
                                </div>
                              )}
                              <ul className="space-y-1">
                                {col.links.map((link) => (
                                  <li key={link.href + link.label}>
                                    <Link href={link.href}
                                      className="block text-sm py-1.5 px-2 rounded-md hover:text-[#5B5FF0] hover:bg-[#F0F1FE] transition-colors"
                                      style={{ color: '#3A3D55' }}>
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          {(item.dropdown as ColsDropdown).featured && (
                            <div className="pl-0 sm:pl-4 min-w-[180px] w-full sm:w-auto" style={{ borderLeft: '1px solid rgba(18,19,31,0.08)' }}>
                              {(item.dropdown as ColsDropdown).featured!.map((f) => (
                                <Link key={f.name} href={f.href}
                                  className="block py-2 px-2 rounded-lg hover:bg-[#F0F1FE] transition-colors group">
                                  <div className="text-sm font-semibold group-hover:text-[#5B5FF0] transition-colors" style={{ color: '#12131F' }}>{f.name}</div>
                                  <div className="text-xs mt-0.5" style={{ color: '#5C5F7A' }}>{f.desc}</div>
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
                  type="button"
                  className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg transition-colors hover:bg-[#F0F1FE]"
                  style={{ color: '#5C5F7A', border: '1px solid rgba(18,19,31,0.1)' }}
                  onClick={() => setShowRegion(!showRegion)}
                >
                  <Globe size={14} />
                  <span>{locales.find(l => l.code === locale)?.label}</span>
                  <ChevronDown size={12} style={{ transform: showRegion ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                </button>
                {showRegion && (
                  <div className="absolute right-0 top-full mt-1 rounded-xl py-1 min-w-[180px] max-h-80 overflow-y-auto z-50"
                    style={{ background: '#fff', boxShadow: '0 12px 32px rgba(18,19,31,0.12)', border: '1px solid rgba(18,19,31,0.08)' }}>
                    {localePicker(false)}
                  </div>
                )}
              </div>

              {user ? (
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors hover:bg-[#F0F1FE]"
                    style={{ border: '1px solid rgba(18,19,31,0.12)', color: '#12131F' }}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: 'linear-gradient(135deg, #5B5FF0, #484CE8)' }}>
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm font-medium max-w-[100px] truncate">{user.name}</span>
                    <ChevronDown size={12} style={{ transform: showUserMenu ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                  </button>
                  {showUserMenu && (
                    <div className="absolute right-0 top-full mt-2 rounded-xl py-1 min-w-[180px] z-50"
                      style={{ background: '#fff', boxShadow: '0 12px 32px rgba(18,19,31,0.12)', border: '1px solid rgba(18,19,31,0.08)' }}>
                      <div className="px-4 py-2.5" style={{ borderBottom: '1px solid rgba(18,19,31,0.08)' }}>
                        <div className="text-sm font-semibold truncate" style={{ color: '#12131F' }}>{user.name}</div>
                        <div className="text-xs truncate" style={{ color: '#5C5F7A' }}>{user.email}</div>
                      </div>
                      <Link href="/profile" onClick={() => setShowUserMenu(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors hover:bg-[#F0F1FE]"
                        style={{ color: '#3A3D55' }}>
                        <User size={14} /> {t.common.profile}
                      </Link>
                      <Link href="/settings" onClick={() => setShowUserMenu(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors hover:bg-[#F0F1FE]"
                        style={{ color: '#3A3D55' }}>
                        <Settings size={14} /> {t.common.settings}
                      </Link>
                      {user.isAdmin === 1 && (
                        <Link href="/admin" onClick={() => setShowUserMenu(false)}
                          className="flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors hover:bg-[#F0F1FE]"
                          style={{ color: '#B45309' }}>
                          <span style={{ fontSize: 14 }}>⚙️</span> {t.common.admin}
                        </Link>
                      )}
                      <div style={{ borderTop: '1px solid rgba(18,19,31,0.08)', marginTop: 4, paddingTop: 4 }}>
                        <button type="button" onClick={() => { logout(); setShowUserMenu(false) }}
                          className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors hover:bg-[#F0F1FE]"
                          style={{ color: '#DC2626' }}>
                          <LogOut size={14} /> {t.common.logout}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <a href="/login" className="text-sm font-medium px-2 py-1 transition-colors hover:text-[#5B5FF0]"
                    style={{ color: '#5C5F7A' }}>
                    {t.nav.login}
                  </a>
                  <a href="/trial-redirect"
                    className="text-white text-sm font-bold px-6 py-2 rounded-full transition-all btn-glow btn-brand">
                    {t.nav.freeTrial}
                  </a>
                </>
              )}
            </div>

            <button type="button" className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu"
              style={{ color: '#3A3D55' }}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden px-4 sm:px-6 py-4 max-h-[min(80vh,640px)] overflow-y-auto"
            style={{ borderTop: '1px solid rgba(18,19,31,0.08)', backgroundColor: '#fff' }}>
            <nav className="flex flex-col space-y-1">
              {navItems.map((item, i) => (
                <div key={item.label}>
                  {item.href && !item.dropdown ? (
                    <Link href={item.href} onClick={() => setIsMenuOpen(false)}
                      className="block text-sm font-medium py-2.5" style={{ color: '#3A3D55' }}>
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="w-full text-sm font-medium py-2.5 flex items-center justify-between"
                        style={{ color: '#3A3D55' }}
                        onClick={() => setMobileOpen(mobileOpen === i ? null : i)}
                      >
                        {item.label}
                        <ChevronDown size={14} style={{ transform: mobileOpen === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                      </button>
                      {mobileOpen === i && item.dropdown && (
                        <div className="pb-2 pl-2 space-y-1">
                          {isSolutionsDropdown(item.dropdown) ? (
                            <>
                              <Link href={item.dropdown.featured.href} onClick={() => setIsMenuOpen(false)}
                                className="block text-sm py-1.5 font-semibold" style={{ color: '#5B5FF0' }}>
                                {item.dropdown.featured.title}
                              </Link>
                              {item.dropdown.links.map((link) => (
                                <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}
                                  className="block text-sm py-1.5" style={{ color: '#5C5F7A' }}>
                                  {link.label}
                                </Link>
                              ))}
                            </>
                          ) : (
                            <>
                              {item.dropdown.cols.flatMap((col) => col.links).map((link) => (
                                <Link key={link.href + link.label} href={link.href} onClick={() => setIsMenuOpen(false)}
                                  className="block text-sm py-1.5" style={{ color: '#5C5F7A' }}>
                                  {link.label}
                                </Link>
                              ))}
                              {item.dropdown.featured?.map((f) => (
                                <Link key={f.name} href={f.href} onClick={() => setIsMenuOpen(false)}
                                  className="block text-sm py-1.5" style={{ color: '#5C5F7A' }}>
                                  {f.name}
                                </Link>
                              ))}
                            </>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}

              <div className="pt-3" style={{ borderTop: '1px solid rgba(18,19,31,0.08)' }}>
                <div className="text-xs font-semibold mb-2" style={{ color: '#8A8DA8' }}>{t.common.language}</div>
                {localePicker(true)}
              </div>

              <div className="pt-3 flex flex-col gap-3" style={{ borderTop: '1px solid rgba(18,19,31,0.08)' }}>
                <a href="/login" className="text-sm font-medium" style={{ color: '#5C5F7A' }}>{t.nav.login}</a>
                <a href="/trial-redirect" className="text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center btn-brand">
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
