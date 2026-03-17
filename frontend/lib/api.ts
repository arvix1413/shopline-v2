const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8787'

export interface Product {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
  category: string
  stock: number
  featured: boolean
}

export interface Category {
  id: number
  name: string
  description: string
  imageUrl: string
}

export interface User {
  id: number
  email: string
  name: string
  phone: string
  address: string
}

export interface Order {
  id: number
  userId: number
  totalAmount: number
  status: string
  shippingAddress: string
  createdAt: string
}

class ApiClient {
  private baseUrl: string

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl
  }

  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`
    
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        ...options,
      })

      if (!response.ok) {
        let errorMessage = `请求失败: ${response.status} ${response.statusText}`
        
        try {
          const errorData = await response.json()
          if (errorData.error) {
            errorMessage = errorData.error
          }
        } catch {
          // 如果无法解析错误响应，使用默认错误消息
        }
        
        throw new Error(errorMessage)
      }

      return response.json()
    } catch (error) {
      if (error instanceof Error) {
        throw error
      }
      throw new Error('网络连接失败，请检查网络后重试')
    }
  }

  // 商品相关 API
  async getProducts(): Promise<Product[]> {
    return this.request<Product[]>('/api/products')
  }

  async getProduct(id: number): Promise<Product> {
    return this.request<Product>(`/api/products/${id}`)
  }

  async createProduct(product: Omit<Product, 'id'>): Promise<Product> {
    return this.request<Product>('/api/products', {
      method: 'POST',
      body: JSON.stringify(product),
    })
  }

  // 分类相关 API
  async getCategories(): Promise<Category[]> {
    return this.request<Category[]>('/api/categories')
  }

  // 用户相关 API
  async getUsers(): Promise<User[]> {
    return this.request<User[]>('/api/users')
  }

  // 订单相关 API
  async getOrders(): Promise<Order[]> {
    return this.request<Order[]>('/api/orders')
  }

  // 文件上传
  async uploadFile(file: File): Promise<{ imageUrl: string }> {
    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch(`${this.baseUrl}/api/upload`, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        let errorMessage = `上传失败: ${response.status} ${response.statusText}`
        
        try {
          const errorData = await response.json()
          if (errorData.error) {
            errorMessage = errorData.error
          }
        } catch {
          // 如果无法解析错误响应，使用默认错误消息
        }
        
        throw new Error(errorMessage)
      }

      return response.json()
    } catch (error) {
      if (error instanceof Error) {
        throw error
      }
      throw new Error('文件上传失败，请检查网络连接后重试')
    }
  }
}

export const apiClient = new ApiClient()