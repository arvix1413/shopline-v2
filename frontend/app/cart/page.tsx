'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

interface CartItem {
  id: number
  productId: number
  quantity: number
  product: {
    id: number
    name: string
    price: number
    imageUrl: string
    category: string
    stock: number
  }
}

type CartCopy = {
  loading: string
  title: string
  clear: string
  confirmClear: string
  emptyTitle: string
  emptyDesc: string
  shopNow: string
  itemList: (n: number) => string
  summary: string
  subtotal: string
  shipping: string
  free: string
  total: string
  checkout: string
  continueShopping: string
  updateFail: string
  updateRetry: string
  deleteFail: string
  deleteRetry: string
  clearFail: string
  clearRetry: string
}

const zhTW: CartCopy = {
  loading: '載入中...',
  title: '購物車',
  clear: '清空購物車',
  confirmClear: '確定要清空購物車嗎？',
  emptyTitle: '購物車是空的',
  emptyDesc: '快去挑選一些心儀的商品吧！',
  shopNow: '去購物',
  itemList: (n) => `商品清單 (${n} 件商品)`,
  summary: '訂單摘要',
  subtotal: '商品總計',
  shipping: '運費',
  free: '免費',
  total: '總計',
  checkout: '立即結帳',
  continueShopping: '繼續購物',
  updateFail: '更新失敗',
  updateRetry: '更新失敗，請重試',
  deleteFail: '刪除失敗',
  deleteRetry: '刪除失敗，請重試',
  clearFail: '清空失敗',
  clearRetry: '清空失敗，請重試',
}

const zhCN: CartCopy = {
  loading: '加载中...',
  title: '购物车',
  clear: '清空购物车',
  confirmClear: '确定要清空购物车吗？',
  emptyTitle: '购物车是空的',
  emptyDesc: '快去挑选一些心仪的商品吧！',
  shopNow: '去购物',
  itemList: (n) => `商品清单 (${n} 件商品)`,
  summary: '订单摘要',
  subtotal: '商品总计',
  shipping: '运费',
  free: '免费',
  total: '总计',
  checkout: '立即结账',
  continueShopping: '继续购物',
  updateFail: '更新失败',
  updateRetry: '更新失败，请重试',
  deleteFail: '删除失败',
  deleteRetry: '删除失败，请重试',
  clearFail: '清空失败',
  clearRetry: '清空失败，请重试',
}

const en: CartCopy = {
  loading: 'Loading...',
  title: 'Cart',
  clear: 'Clear cart',
  confirmClear: 'Clear all items from your cart?',
  emptyTitle: 'Your cart is empty',
  emptyDesc: 'Browse products and add something you love.',
  shopNow: 'Shop now',
  itemList: (n) => `Items (${n})`,
  summary: 'Order summary',
  subtotal: 'Subtotal',
  shipping: 'Shipping',
  free: 'Free',
  total: 'Total',
  checkout: 'Checkout',
  continueShopping: 'Continue shopping',
  updateFail: 'Update failed',
  updateRetry: 'Update failed. Please try again.',
  deleteFail: 'Remove failed',
  deleteRetry: 'Remove failed. Please try again.',
  clearFail: 'Clear failed',
  clearRetry: 'Clear failed. Please try again.',
}

const copy: Partial<Record<Locale, CartCopy>> & { 'zh-TW': CartCopy; en: CartCopy } = {
  'zh-TW': zhTW,
  'zh-CN': zhCN,
  en,
  ko: en,
  ja: en,
  vi: en,
  es: en,
  pt: en,
  de: en,
  fr: en,
}

export default function CartPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)
  const [sessionId, setSessionId] = useState('')

  useEffect(() => {
    let sid = localStorage.getItem('cart_session_id')
    if (!sid) {
      sid = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      localStorage.setItem('cart_session_id', sid)
    }
    setSessionId(sid)
    fetchCartItems(sid)
  }, [])

  const fetchCartItems = async (sid: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/${sid}`)
      if (response.ok) {
        const items = await response.json()
        setCartItems(items)
      }
    } catch (error) {
      console.error('Failed to fetch cart items:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateQuantity = async (itemId: number, newQuantity: number) => {
    if (newQuantity < 1) return

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/${itemId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: newQuantity })
      })

      if (response.ok) {
        fetchCartItems(sessionId)
      } else {
        const error = await response.json()
        alert(error.error || c.updateFail)
      }
    } catch (error) {
      console.error('Failed to update quantity:', error)
      alert(c.updateRetry)
    }
  }

  const removeItem = async (itemId: number) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/${itemId}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        fetchCartItems(sessionId)
      } else {
        const error = await response.json()
        alert(error.error || c.deleteFail)
      }
    } catch (error) {
      console.error('Failed to remove item:', error)
      alert(c.deleteRetry)
    }
  }

  const clearCart = async () => {
    if (!confirm(c.confirmClear)) return

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/clear/${sessionId}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        setCartItems([])
      } else {
        const error = await response.json()
        alert(error.error || c.clearFail)
      }
    } catch (error) {
      console.error('Failed to clear cart:', error)
      alert(c.clearRetry)
    }
  }

  const totalAmount = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 sm:px-6 py-8">
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-2 text-gray-600">{c.loading}</span>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">{c.title}</h1>
          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-800 text-sm"
            >
              {c.clear}
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg p-12 text-center shadow-lg">
            <ShoppingBag size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{c.emptyTitle}</h2>
            <p className="text-gray-600 mb-6">{c.emptyDesc}</p>
            <Link
              href="/products"
              className="bg-brand-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
            >
              {c.shopNow}
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-lg font-semibold">{c.itemList(totalItems)}</h2>
                </div>

                <div className="divide-y">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6 flex items-center gap-4">
                      <img
                        src={item.product.imageUrl || '/placeholder.jpg'}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />

                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{item.product.name}</h3>
                        <p className="text-sm text-gray-500">{item.product.category}</p>
                        <p className="text-lg font-semibold text-brand-blue mt-1">
                          NT$ {item.product.price.toLocaleString()}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-full hover:bg-gray-100"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={16} />
                        </button>

                        <span className="w-12 text-center font-medium">{item.quantity}</span>

                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-full hover:bg-gray-100"
                          disabled={item.quantity >= item.product.stock}
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="font-semibold">
                          NT$ {(item.product.price * item.quantity).toLocaleString()}
                        </p>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-800 mt-2"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                <h2 className="text-lg font-semibold mb-4">{c.summary}</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>{c.subtotal}</span>
                    <span>NT$ {totalAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{c.shipping}</span>
                    <span className="text-green-600">{c.free}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>{c.total}</span>
                      <span className="text-brand-blue">NT$ {totalAmount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-brand-blue text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  {c.checkout}
                </button>

                <Link
                  href="/products"
                  className="block w-full text-center text-brand-blue py-3 mt-3 border border-brand-blue rounded-lg hover:bg-blue-50 transition-colors"
                >
                  {c.continueShopping}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
