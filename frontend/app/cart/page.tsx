'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import Link from 'next/link'

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

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)
  const [sessionId, setSessionId] = useState('')

  useEffect(() => {
    // 生成或获取会话ID
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
        alert(error.error || '更新失败')
      }
    } catch (error) {
      console.error('Failed to update quantity:', error)
      alert('更新失败，请重试')
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
        alert(error.error || '删除失败')
      }
    } catch (error) {
      console.error('Failed to remove item:', error)
      alert('删除失败，请重试')
    }
  }

  const clearCart = async () => {
    if (!confirm('确定要清空购物车吗？')) return

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/clear/${sessionId}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        setCartItems([])
      } else {
        const error = await response.json()
        alert(error.error || '清空失败')
      }
    } catch (error) {
      console.error('Failed to clear cart:', error)
      alert('清空失败，请重试')
    }
  }

  const totalAmount = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-2 text-gray-600">加载中...</span>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">购物车</h1>
          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-800 text-sm"
            >
              清空购物车
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg p-12 text-center shadow-lg">
            <ShoppingBag size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">购物车是空的</h2>
            <p className="text-gray-600 mb-6">快去挑选一些心仪的商品吧！</p>
            <Link
              href="/products"
              className="bg-brand-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
            >
              去购物
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* 购物车商品列表 */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-lg font-semibold">商品清单 ({totalItems} 件商品)</h2>
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

            {/* 订单摘要 */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                <h2 className="text-lg font-semibold mb-4">订单摘要</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>商品总计</span>
                    <span>NT$ {totalAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>运费</span>
                    <span className="text-green-600">免费</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>总计</span>
                      <span className="text-brand-blue">NT$ {totalAmount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-brand-blue text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  立即结账
                </button>
                
                <Link
                  href="/products"
                  className="block w-full text-center text-brand-blue py-3 mt-3 border border-brand-blue rounded-lg hover:bg-blue-50 transition-colors"
                >
                  继续购物
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}