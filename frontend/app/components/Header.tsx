'use client'

import { useState } from 'react'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showBanner, setShowBanner] = useState(true)

  return (
    <>
      {/* Top announcement banner */}
      {showBanner && (
        <div className="bg-[#1a1a6e] text-white text-sm py-2 px-4 flex items-center justify-center relative">
          <span className="mr-1">🎉</span>
          <span>開店零負擔！補助、資源一次到位</span>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Main header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-black tracking-tight">
                <span className="text-gray-900">SHOP</span><span className="text-[#0066ff]">LINE</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { label: '解決方案', href: '#' },
                { label: '產品與服務', href: '#' },
                { label: '方案費用', href: '#' },
                { label: '更多資源', href: '#' },
                { label: '新手上路', href: '#' },
                { label: '擴充功能', href: '#' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-[#0066ff] text-sm font-medium transition-colors flex items-center gap-0.5"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
                <Globe size={16} />
                <span>台灣</span>
              </button>
              <a href="#" className="text-sm text-gray-700 hover:text-[#0066ff] font-medium">
                登入
              </a>
              <a
                href="#"
                className="bg-[#0066ff] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                免費試用
              </a>
            </div>

            {/* Mobile menu button */}
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4">
            <nav className="flex flex-col space-y-4">
              {['解決方案', '產品與服務', '方案費用', '更多資源', '新手上路', '擴充功能'].map((item) => (
                <a key={item} href="#" className="text-gray-700 text-sm font-medium py-1">{item}</a>
              ))}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <a href="#" className="text-sm text-gray-700 font-medium">登入</a>
                <a href="#" className="bg-[#0066ff] text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center">
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
