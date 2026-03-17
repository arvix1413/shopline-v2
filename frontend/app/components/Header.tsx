'use client'

import { useState } from 'react'
import { Menu, X, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-shopline-blue">
              SHOPLINE
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-700 hover:text-shopline-blue transition-colors">
              產品方案
            </Link>
            <a href="#" className="text-gray-700 hover:text-shopline-blue transition-colors">成功案例</a>
            <a href="#" className="text-gray-700 hover:text-shopline-blue transition-colors">資源中心</a>
            <a href="#" className="text-gray-700 hover:text-shopline-blue transition-colors">定價</a>
            <Link href="/cart" className="text-gray-700 hover:text-shopline-blue transition-colors flex items-center gap-1">
              <ShoppingCart size={18} />
              購物車
            </Link>
            <Link href="/admin" className="text-gray-700 hover:text-shopline-blue transition-colors">
              管理後台
            </Link>
            <Link href="/products" className="bg-shopline-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              查看商品
            </Link>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/products" className="text-gray-700 hover:text-shopline-blue">
                產品方案
              </Link>
              <a href="#" className="text-gray-700 hover:text-shopline-blue">成功案例</a>
              <a href="#" className="text-gray-700 hover:text-shopline-blue">資源中心</a>
              <a href="#" className="text-gray-700 hover:text-shopline-blue">定價</a>
              <Link href="/cart" className="text-gray-700 hover:text-shopline-blue flex items-center gap-1">
                <ShoppingCart size={18} />
                購物車
              </Link>
              <Link href="/admin" className="text-gray-700 hover:text-shopline-blue">
                管理後台
              </Link>
              <Link href="/products" className="bg-shopline-blue text-white px-6 py-2 rounded-lg w-fit">
                查看商品
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}