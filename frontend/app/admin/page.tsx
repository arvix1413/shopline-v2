'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import { apiClient, Product } from '../../lib/api'
import { Upload, Plus, Edit, Trash2, AlertCircle, CheckCircle } from 'lucide-react'

// 默认图片映射
const DEFAULT_IMAGES: Record<string, string> = {
  '電子產品': 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&h=500&fit=crop&auto=format',
  '服飾配件': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=500&fit=crop&auto=format',
  '居家生活': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop&auto=format',
  '美妝保養': 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop&auto=format',
  '運動健身': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop&auto=format',
  '': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=500&fit=crop&auto=format' // 默认商品图片
}

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [showAddForm, setShowAddForm] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
    category: '',
    stock: 0,
    featured: false
  })

  useEffect(() => {
    fetchProducts()
  }, [])

  // 显示消息提示
  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text })
    setTimeout(() => setMessage(null), 5000)
  }

  const fetchProducts = async () => {
    try {
      const data = await apiClient.getProducts()
      setProducts(data)
    } catch (error) {
      console.error('Failed to fetch products:', error)
      showMessage('error', '获取商品列表失败，请刷新页面重试')
    } finally {
      setLoading(false)
    }
  }

  // 根据分类获取默认图片
  const getDefaultImage = (category: string) => {
    return DEFAULT_IMAGES[category] || DEFAULT_IMAGES['']
  }

  // 编辑商品
  const handleEditProduct = (product: Product) => {
    setEditingProduct(product)
    setNewProduct({
      name: product.name,
      description: product.description,
      price: product.price,
      imageUrl: product.imageUrl,
      category: product.category,
      stock: product.stock,
      featured: product.featured
    })
    setShowAddForm(true)
  }

  // 删除商品
  const handleDeleteProduct = async (productId: number, productName: string) => {
    if (!confirm(`确定要删除商品"${productName}"吗？此操作不可恢复。`)) {
      return
    }

    try {
      const response = await fetch(`${apiClient['baseUrl']}/api/products/${productId}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        showMessage('success', '商品删除成功')
        fetchProducts()
      } else {
        const error = await response.json()
        showMessage('error', error.error || '删除商品失败')
      }
    } catch (error) {
      console.error('Delete product failed:', error)
      showMessage('error', '删除商品失败，请检查网络连接后重试')
    }
  }

  // 当分类改变时自动设置默认图片
  const handleCategoryChange = (category: string) => {
    setNewProduct(prev => ({ 
      ...prev, 
      category,
      imageUrl: prev.imageUrl || getDefaultImage(category)
    }))
  }

  const handleImageUpload = async (file: File) => {
    if (!file) return
    
    // 验证文件类型
    if (!file.type.startsWith('image/')) {
      showMessage('error', '请选择有效的图片文件')
      return
    }
    
    // 验证文件大小 (5MB)
    if (file.size > 5 * 1024 * 1024) {
      showMessage('error', '图片文件不能超过 5MB')
      return
    }

    setUploading(true)
    try {
      const result = await apiClient.uploadFile(file)
      setNewProduct(prev => ({ ...prev, imageUrl: result.imageUrl }))
      showMessage('success', '图片上传成功')
    } catch (error) {
      console.error('Upload failed:', error)
      showMessage('error', '图片上传失败，请重试')
    } finally {
      setUploading(false)
    }
  }

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // 表单验证
    if (!newProduct.name.trim()) {
      showMessage('error', '请输入商品名称')
      return
    }
    
    if (newProduct.price <= 0) {
      showMessage('error', '请输入有效的商品价格')
      return
    }
    
    if (!newProduct.category) {
      showMessage('error', '请选择商品分类')
      return
    }

    // 如果没有上传图片，使用默认图片
    const productData = {
      ...newProduct,
      imageUrl: newProduct.imageUrl || getDefaultImage(newProduct.category)
    }

    try {
      if (editingProduct) {
        // 更新商品
        const response = await fetch(`${apiClient['baseUrl']}/api/products/${editingProduct.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(productData)
        })

        if (response.ok) {
          showMessage('success', '商品更新成功')
        } else {
          const error = await response.json()
          showMessage('error', error.error || '更新商品失败')
          return
        }
      } else {
        // 创建新商品
        await apiClient.createProduct(productData)
        showMessage('success', '商品添加成功')
      }
      
      // 重置表单
      setNewProduct({
        name: '',
        description: '',
        price: 0,
        imageUrl: '',
        category: '',
        stock: 0,
        featured: false
      })
      setEditingProduct(null)
      setShowAddForm(false)
      fetchProducts()
    } catch (error) {
      console.error('Failed to save product:', error)
      showMessage('error', editingProduct ? '更新商品失败，请检查网络连接后重试' : '添加商品失败，请检查网络连接后重试')
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* 消息提示 */}
        {message && (
          <div className={`mb-6 p-4 rounded-lg flex items-center gap-2 ${
            message.type === 'success' 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {message.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
            {message.text}
          </div>
        )}

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">商品管理</h1>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-shopline-blue text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
          >
            <Plus size={20} />
            新增商品
          </button>
        </div>

        {showAddForm && (
          <div className="bg-white rounded-lg p-6 mb-8 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              {editingProduct ? '编辑商品' : '新增商品'}
            </h2>
            <form onSubmit={handleAddProduct} className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">商品名称 *</label>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请输入商品名称"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">价格 (NT$) *</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct(prev => ({ ...prev, price: Number(e.target.value) }))}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">商品描述</label>
                <textarea
                  value={newProduct.description}
                  onChange={(e) => setNewProduct(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full p-3 border rounded-lg h-24 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请输入商品描述..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">分类 *</label>
                <select
                  value={newProduct.category}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">选择分类</option>
                  <option value="電子產品">電子產品</option>
                  <option value="服飾配件">服飾配件</option>
                  <option value="居家生活">居家生活</option>
                  <option value="美妝保養">美妝保養</option>
                  <option value="運動健身">運動健身</option>
                </select>
                {newProduct.category && (
                  <p className="text-sm text-gray-600 mt-1">
                    💡 已自动设置该分类的默认图片，您也可以上传自定义图片
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">库存数量</label>
                <input
                  type="number"
                  min="0"
                  value={newProduct.stock}
                  onChange={(e) => setNewProduct(prev => ({ ...prev, stock: Number(e.target.value) }))}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">商品图片</label>
                <div className="flex items-center gap-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) handleImageUpload(file)
                    }}
                    className="hidden"
                    id="image-upload"
                    disabled={uploading}
                  />
                  <label
                    htmlFor="image-upload"
                    className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-50 flex items-center gap-2 transition-colors ${
                      uploading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    <Upload size={20} />
                    {uploading ? '上传中...' : '上传自定义图片'}
                  </label>
                  
                  {(newProduct.imageUrl || newProduct.category) && (
                    <div className="flex items-center gap-2">
                      <img 
                        src={newProduct.imageUrl || getDefaultImage(newProduct.category)} 
                        alt="Preview" 
                        className="w-16 h-16 object-cover rounded border"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = getDefaultImage('')
                        }}
                      />
                      <div className="text-sm text-gray-600">
                        {newProduct.imageUrl ? '✅ 自定义图片' : '🎯 默认图片'}
                      </div>
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  支持 JPG、PNG、WebP 格式，文件大小不超过 5MB。未上传图片时将使用分类默认图片。
                </p>
              </div>

              <div className="md:col-span-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={newProduct.featured}
                    onChange={(e) => setNewProduct(prev => ({ ...prev, featured: e.target.checked }))}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium">设为精选商品</span>
                  <span className="text-xs text-gray-500">（精选商品将在首页展示）</span>
                </label>
              </div>

              <div className="md:col-span-2 flex gap-4">
                <button
                  type="submit"
                  disabled={uploading}
                  className="bg-shopline-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploading ? '处理中...' : (editingProduct ? '更新商品' : '添加商品')}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false)
                    setEditingProduct(null)
                    setNewProduct({
                      name: '',
                      description: '',
                      price: 0,
                      imageUrl: '',
                      category: '',
                      stock: 0,
                      featured: false
                    })
                  }}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  取消
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-2 text-gray-600">加载中...</span>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Plus size={48} className="mx-auto mb-2" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">暂无商品</h3>
              <p className="text-gray-500 mb-4">开始添加您的第一个商品吧</p>
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-shopline-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                添加商品
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">商品</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">价格</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">分类</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">库存</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            src={product.imageUrl || getDefaultImage(product.category)}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded-lg mr-4 border"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = getDefaultImage('')
                            }}
                          />
                          <div className="min-w-0 flex-1">
                            <div className="font-medium text-gray-900 truncate">{product.name}</div>
                            <div className="text-sm text-gray-500 truncate">
                              {product.description ? 
                                (product.description.length > 50 ? 
                                  `${product.description.substring(0, 50)}...` : 
                                  product.description
                                ) : 
                                '暂无描述'
                              }
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          NT$ {product.price.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {product.category || '未分类'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`text-sm font-medium ${
                          product.stock > 10 ? 'text-green-600' : 
                          product.stock > 0 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {product.stock > 0 ? product.stock : '缺货'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col gap-1">
                          {product.featured && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                              ⭐ 精选
                            </span>
                          )}
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {product.stock > 0 ? '有库存' : '缺货'}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex gap-2">
                          <button 
                            onClick={() => handleEditProduct(product)}
                            className="text-blue-600 hover:text-blue-800 transition-colors p-1 rounded hover:bg-blue-50"
                            title="编辑商品"
                          >
                            <Edit size={16} />
                          </button>
                          <button 
                            onClick={() => handleDeleteProduct(product.id, product.name)}
                            className="text-red-600 hover:text-red-800 transition-colors p-1 rounded hover:bg-red-50"
                            title="删除商品"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}