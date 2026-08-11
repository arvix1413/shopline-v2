'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import { ShoppingCart, Star } from 'lucide-react'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'

interface Product {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
  category: string
  stock: number
  featured: boolean
}

const copy = {
  'zh-TW': {
    title: '商品展示',
    loading: '載入中...',
    all: '全部商品',
    empty: '暫無商品',
    featured: '精選',
    outOfStock: '缺貨',
    stock: '庫存',
    adding: '加入中...',
    addToCart: '加入購物車',
    added: '商品已加入購物車！',
    addFail: '加入失敗，請重試',
    categories: ['電子產品', '服飾配件', '居家生活', '美妝保養', '運動健身'],
  },
  'zh-CN': {
    title: '商品展示',
    loading: '加载中...',
    all: '全部商品',
    empty: '暂无商品',
    featured: '精选',
    outOfStock: '缺货',
    stock: '库存',
    adding: '添加中...',
    addToCart: '加入购物车',
    added: '商品已添加到购物车！',
    addFail: '添加失败，请重试',
    categories: ['电子产品', '服饰配件', '居家生活', '美妆保养', '运动健身'],
  },
  en: {
    title: 'Products',
    loading: 'Loading...',
    all: 'All products',
    empty: 'No products yet',
    featured: 'Featured',
    outOfStock: 'Out of stock',
    stock: 'Stock',
    adding: 'Adding...',
    addToCart: 'Add to cart',
    added: 'Added to cart!',
    addFail: 'Could not add. Please try again.',
    categories: ['Electronics', 'Apparel', 'Home', 'Beauty', 'Fitness'],
  },
}
const aliased = { ...copy, ko: copy.en, ja: copy.en, vi: copy.en, es: copy.en, pt: copy.en, de: copy.en, fr: copy.en }

export default function ProductsPage() {
  const { locale } = useI18n()
  const t = pickCopy(locale, aliased)
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [addingToCart, setAddingToCart] = useState<number | null>(null)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error('Failed to fetch products:', error)
    } finally {
      setLoading(false)
    }
  }

  const addToCart = async (productId: number) => {
    setAddingToCart(productId)
    try {
      let sessionId = localStorage.getItem('cart_session_id')
      if (!sessionId) {
        sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
        localStorage.setItem('cart_session_id', sessionId)
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, productId, quantity: 1 }),
      })

      if (response.ok) {
        alert(t.added)
      } else {
        const error = await response.json()
        alert(error.error || t.addFail)
      }
    } catch (error) {
      console.error('Failed to add to cart:', error)
      alert(t.addFail)
    } finally {
      setAddingToCart(null)
    }
  }

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 sm:px-6 py-8">
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
            <span className="ml-2 text-gray-600">{t.loading}</span>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">{t.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              type="button"
              onClick={() => setSelectedCategory('')}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === '' ? 'bg-brand-blue text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {t.all}
            </button>
            {t.categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category ? 'bg-brand-blue text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{t.empty}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={product.imageUrl || '/placeholder.jpg'}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {product.featured && (
                    <div className="absolute top-2 left-2 bg-brand-orange text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Star size={12} fill="currentColor" />
                      {t.featured}
                    </div>
                  )}
                  {product.stock === 0 && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-medium">{t.outOfStock}</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="mb-2">
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                  {product.description && (
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                  )}
                  <div className="flex items-center justify-between mb-3 gap-2">
                    <span className="text-xl sm:text-2xl font-bold text-brand-blue">
                      NT$ {product.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-500 whitespace-nowrap">
                      {t.stock}: {product.stock}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => addToCart(product.id)}
                    disabled={product.stock === 0 || addingToCart === product.id}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                      product.stock === 0
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : addingToCart === product.id
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-brand-blue text-white hover:bg-blue-700'
                    }`}
                  >
                    <ShoppingCart size={16} />
                    {addingToCart === product.id ? t.adding : product.stock === 0 ? t.outOfStock : t.addToCart}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
