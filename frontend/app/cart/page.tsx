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
    storeSlug?: string | null
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
  checkoutHint: string
  goStoreCheckout: string
  multiStoreHint: string
  errStock: string
  errGeneric: string
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
  checkoutHint: '結帳請到各品牌商店頁的購物車完成。',
  goStoreCheckout: '前往商店結帳',
  multiStoreHint: '購物車含多家商店商品，請分別到各商店結帳。',
  errStock: '庫存不足',
  errGeneric: '操作失敗，請重試',
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
  checkoutHint: '结账请到各品牌商店页的购物车完成。',
  goStoreCheckout: '前往商店结账',
  multiStoreHint: '购物车含多家商店商品，请分别到各商店结账。',
  errStock: '库存不足',
  errGeneric: '操作失败，请重试',
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
  checkoutHint: 'Complete checkout in each brand store’s cart.',
  goStoreCheckout: 'Go to store checkout',
  multiStoreHint: 'Your cart has items from multiple stores. Check out in each store separately.',
  errStock: 'Not enough stock',
  errGeneric: 'Something went wrong. Please try again.',
}

const ko: CartCopy = {
  loading: '로딩 중...',
  title: '장바구니',
  clear: '장바구니 비우기',
  confirmClear: '장바구니의 모든 상품을 삭제할까요?',
  emptyTitle: '장바구니가 비어 있습니다',
  emptyDesc: '마음에 드는 상품을 둘러보고 담아 보세요.',
  shopNow: '쇼핑하기',
  itemList: (n) => `상품 목록 (${n}개)`,
  summary: '주문 요약',
  subtotal: '소계',
  shipping: '배송비',
  free: '무료',
  total: '합계',
  checkout: '결제하기',
  continueShopping: '계속 쇼핑하기',
  updateFail: '업데이트 실패',
  updateRetry: '업데이트에 실패했습니다. 다시 시도해 주세요.',
  deleteFail: '삭제 실패',
  deleteRetry: '삭제에 실패했습니다. 다시 시도해 주세요.',
  clearFail: '비우기 실패',
  clearRetry: '비우기에 실패했습니다. 다시 시도해 주세요.',
  checkoutHint: '결제는 각 브랜드 스토어 장바구니에서 완료하세요.',
  goStoreCheckout: '스토어 결제로 이동',
  multiStoreHint: '여러 스토어 상품이 있습니다. 스토어별로 결제하세요.',
  errStock: '재고가 부족합니다',
  errGeneric: '실패했습니다. 다시 시도해 주세요.',
}

const ja: CartCopy = {
  loading: '読み込み中...',
  title: 'カート',
  clear: 'カートを空にする',
  confirmClear: 'カート内のすべての商品を削除しますか？',
  emptyTitle: 'カートは空です',
  emptyDesc: 'お好みの商品を探して追加しましょう。',
  shopNow: 'ショッピングへ',
  itemList: (n) => `商品一覧（${n}点）`,
  summary: '注文概要',
  subtotal: '小計',
  shipping: '送料',
  free: '無料',
  total: '合計',
  checkout: 'レジに進む',
  continueShopping: '買い物を続ける',
  updateFail: '更新に失敗しました',
  updateRetry: '更新に失敗しました。もう一度お試しください。',
  deleteFail: '削除に失敗しました',
  deleteRetry: '削除に失敗しました。もう一度お試しください。',
  clearFail: 'クリアに失敗しました',
  clearRetry: 'クリアに失敗しました。もう一度お試しください。',
  checkoutHint: 'お支払いは各ブランド店のカートで完了してください。',
  goStoreCheckout: 'ストアのレジへ',
  multiStoreHint: '複数ストアの商品があります。ストアごとに決済してください。',
  errStock: '在庫が不足しています',
  errGeneric: '失敗しました。再度お試しください。',
}

const vi: CartCopy = {
  loading: 'Đang tải...',
  title: 'Giỏ hàng',
  clear: 'Xóa giỏ hàng',
  confirmClear: 'Xóa tất cả sản phẩm trong giỏ hàng?',
  emptyTitle: 'Giỏ hàng trống',
  emptyDesc: 'Duyệt sản phẩm và thêm món bạn yêu thích.',
  shopNow: 'Mua sắm ngay',
  itemList: (n) => `Danh sách sản phẩm (${n})`,
  summary: 'Tóm tắt đơn hàng',
  subtotal: 'Tạm tính',
  shipping: 'Phí vận chuyển',
  free: 'Miễn phí',
  total: 'Tổng cộng',
  checkout: 'Thanh toán',
  continueShopping: 'Tiếp tục mua sắm',
  updateFail: 'Cập nhật thất bại',
  updateRetry: 'Cập nhật thất bại. Vui lòng thử lại.',
  deleteFail: 'Xóa thất bại',
  deleteRetry: 'Xóa thất bại. Vui lòng thử lại.',
  clearFail: 'Xóa giỏ thất bại',
  clearRetry: 'Xóa giỏ thất bại. Vui lòng thử lại.',
  checkoutHint: 'Hãy thanh toán trong giỏ của từng cửa hàng thương hiệu.',
  goStoreCheckout: 'Đến thanh toán cửa hàng',
  multiStoreHint: 'Giỏ có hàng từ nhiều cửa hàng. Thanh toán riêng từng cửa hàng.',
  errStock: 'Không đủ tồn kho',
  errGeneric: 'Thất bại. Vui lòng thử lại.',
}

const es: CartCopy = {
  loading: 'Cargando...',
  title: 'Carrito',
  clear: 'Vaciar carrito',
  confirmClear: '¿Vaciar todos los artículos del carrito?',
  emptyTitle: 'Tu carrito está vacío',
  emptyDesc: 'Explora productos y añade algo que te guste.',
  shopNow: 'Comprar ahora',
  itemList: (n) => `Artículos (${n})`,
  summary: 'Resumen del pedido',
  subtotal: 'Subtotal',
  shipping: 'Envío',
  free: 'Gratis',
  total: 'Total',
  checkout: 'Pagar',
  continueShopping: 'Seguir comprando',
  updateFail: 'Error al actualizar',
  updateRetry: 'Error al actualizar. Inténtalo de nuevo.',
  deleteFail: 'Error al eliminar',
  deleteRetry: 'Error al eliminar. Inténtalo de nuevo.',
  clearFail: 'Error al vaciar',
  clearRetry: 'Error al vaciar. Inténtalo de nuevo.',
  checkoutHint: 'Completa el pago en el carrito de cada tienda de marca.',
  goStoreCheckout: 'Ir al checkout de la tienda',
  multiStoreHint: 'Hay artículos de varias tiendas. Paga en cada tienda por separado.',
  errStock: 'Stock insuficiente',
  errGeneric: 'Error. Inténtalo de nuevo.',
}

const pt: CartCopy = {
  loading: 'Carregando...',
  title: 'Carrinho',
  clear: 'Esvaziar carrinho',
  confirmClear: 'Remover todos os itens do carrinho?',
  emptyTitle: 'Seu carrinho está vazio',
  emptyDesc: 'Navegue pelos produtos e adicione algo que você goste.',
  shopNow: 'Comprar agora',
  itemList: (n) => `Itens (${n})`,
  summary: 'Resumo do pedido',
  subtotal: 'Subtotal',
  shipping: 'Frete',
  free: 'Grátis',
  total: 'Total',
  checkout: 'Finalizar compra',
  continueShopping: 'Continuar comprando',
  updateFail: 'Falha ao atualizar',
  updateRetry: 'Falha ao atualizar. Tente novamente.',
  deleteFail: 'Falha ao remover',
  deleteRetry: 'Falha ao remover. Tente novamente.',
  clearFail: 'Falha ao esvaziar',
  clearRetry: 'Falha ao esvaziar. Tente novamente.',
  checkoutHint: 'Finalize no carrinho de cada loja da marca.',
  goStoreCheckout: 'Ir ao checkout da loja',
  multiStoreHint: 'Há itens de várias lojas. Finalize em cada loja separadamente.',
  errStock: 'Estoque insuficiente',
  errGeneric: 'Falhou. Tente de novo.',
}

const de: CartCopy = {
  loading: 'Wird geladen...',
  title: 'Warenkorb',
  clear: 'Warenkorb leeren',
  confirmClear: 'Alle Artikel aus dem Warenkorb entfernen?',
  emptyTitle: 'Ihr Warenkorb ist leer',
  emptyDesc: 'Produkte durchstöbern und etwas hinzufügen, das Ihnen gefällt.',
  shopNow: 'Jetzt einkaufen',
  itemList: (n) => `Artikel (${n})`,
  summary: 'Bestellübersicht',
  subtotal: 'Zwischensumme',
  shipping: 'Versand',
  free: 'Kostenlos',
  total: 'Gesamt',
  checkout: 'Zur Kasse',
  continueShopping: 'Weiter einkaufen',
  updateFail: 'Aktualisierung fehlgeschlagen',
  updateRetry: 'Aktualisierung fehlgeschlagen. Bitte erneut versuchen.',
  deleteFail: 'Entfernen fehlgeschlagen',
  deleteRetry: 'Entfernen fehlgeschlagen. Bitte erneut versuchen.',
  clearFail: 'Leeren fehlgeschlagen',
  clearRetry: 'Leeren fehlgeschlagen. Bitte erneut versuchen.',
  checkoutHint: 'Schließen Sie den Kauf im Warenkorb jedes Markenshops ab.',
  goStoreCheckout: 'Zur Shop-Kasse',
  multiStoreHint: 'Artikel aus mehreren Shops. Bitte je Shop separat bezahlen.',
  errStock: 'Nicht genug Lagerbestand',
  errGeneric: 'Fehlgeschlagen. Bitte erneut versuchen.',
}

const fr: CartCopy = {
  loading: 'Chargement...',
  title: 'Panier',
  clear: 'Vider le panier',
  confirmClear: 'Vider tous les articles du panier ?',
  emptyTitle: 'Votre panier est vide',
  emptyDesc: 'Parcourez les produits et ajoutez quelque chose que vous aimez.',
  shopNow: 'Acheter maintenant',
  itemList: (n) => `Articles (${n})`,
  summary: 'Récapitulatif de commande',
  subtotal: 'Sous-total',
  shipping: 'Livraison',
  free: 'Gratuit',
  total: 'Total',
  checkout: 'Passer à la caisse',
  continueShopping: 'Continuer vos achats',
  updateFail: 'Échec de la mise à jour',
  updateRetry: 'Échec de la mise à jour. Veuillez réessayer.',
  deleteFail: 'Échec de la suppression',
  deleteRetry: 'Échec de la suppression. Veuillez réessayer.',
  clearFail: 'Échec du vidage',
  clearRetry: 'Échec du vidage. Veuillez réessayer.',
  checkoutHint: 'Finalisez dans le panier de chaque boutique de marque.',
  goStoreCheckout: 'Aller au paiement boutique',
  multiStoreHint: 'Articles de plusieurs boutiques. Payez dans chaque boutique.',
  errStock: 'Stock insuffisant',
  errGeneric: 'Échec. Réessayez.',
}

const copy: Partial<Record<Locale, CartCopy>> & { 'zh-TW': CartCopy; en: CartCopy } = {
  'zh-TW': zhTW,
  'zh-CN': zhCN,
  en,
  ko,
  ja,
  vi,
  es,
  pt,
  de,
  fr,
}

export default function CartPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)
  const [sessionIds, setSessionIds] = useState<string[]>([])

  const mapCartError = (data: { code?: string }, fallback: string) => {
    if (data.code === 'OUT_OF_STOCK') return c.errStock
    return fallback
  }

  const fetchCartItems = async (sids: string[]) => {
    try {
      const results = await Promise.all(
        sids.map(async (sid) => {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/${encodeURIComponent(sid)}`)
          if (!response.ok) return [] as CartItem[]
          const items = await response.json()
          return Array.isArray(items) ? (items as CartItem[]) : []
        })
      )
      const byId = new Map<number, CartItem>()
      for (const item of results.flat()) {
        if (item?.product) byId.set(item.id, item)
      }
      setCartItems(Array.from(byId.values()))
    } catch (error) {
      console.error('Failed to fetch cart items:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const ids = new Set<string>()
    const platform = localStorage.getItem('cart_session_id')
    if (platform) ids.add(platform)
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i) || ''
      if (key.startsWith('arvix_cart_')) {
        const sid = localStorage.getItem(key)
        if (sid) ids.add(sid)
      }
    }
    if (ids.size === 0) {
      const sid = `session_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
      localStorage.setItem('cart_session_id', sid)
      ids.add(sid)
    }
    const list = Array.from(ids)
    setSessionIds(list)
    fetchCartItems(list)
  }, [])

  const refresh = () => fetchCartItems(sessionIds.length ? sessionIds : [])

  const updateQuantity = async (itemId: number, newQuantity: number) => {
    if (newQuantity < 1) return
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/${itemId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: newQuantity }),
      })
      if (response.ok) refresh()
      else {
        const error = await response.json().catch(() => ({}))
        alert(mapCartError(error, c.updateFail))
      }
    } catch {
      alert(c.updateRetry)
    }
  }

  const removeItem = async (itemId: number) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/${itemId}`, { method: 'DELETE' })
      if (response.ok) refresh()
      else {
        const error = await response.json().catch(() => ({}))
        alert(mapCartError(error, c.deleteFail))
      }
    } catch {
      alert(c.deleteRetry)
    }
  }

  const clearCart = async () => {
    if (!confirm(c.confirmClear)) return
    try {
      await Promise.all(
        sessionIds.map((sid) =>
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/clear/${encodeURIComponent(sid)}`, { method: 'DELETE' })
        )
      )
      setCartItems([])
    } catch {
      alert(c.clearRetry)
    }
  }

  const totalAmount = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const storeSlugs = Array.from(
    new Set(cartItems.map((i) => String(i.product?.storeSlug || '').trim().toLowerCase()).filter(Boolean))
  )
  const checkoutHref =
    storeSlugs.length >= 1
      ? `/s/shop?slug=${encodeURIComponent(storeSlugs[0])}&open_cart=1`
      : '/products'
  const checkoutHint = storeSlugs.length > 1 ? c.multiStoreHint : c.checkoutHint
  const checkoutLabel = storeSlugs.length >= 1 ? c.goStoreCheckout : c.checkout

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

                <Link
                  href={checkoutHref}
                  className="block w-full bg-brand-blue text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                >
                  {checkoutLabel}
                </Link>
                <p className="text-xs text-gray-500 mt-2 text-center">{checkoutHint}</p>

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
