/**
 * 统一审计上报中间件
 * 供所有子系统使用，自动上报所有操作到 shopline 审计中心
 */

interface AuditContext {
  systemName: string
  userId?: string
  userEmail?: string
  operationType?: string
  operationDetail?: string
}

export async function createAuditMiddleware(systemName: string) {
  return async (c: any, next: any) => {
    const startTime = Date.now()
    const method = c.req.method
    const url = c.req.url
    const path = new URL(url).pathname
    
    // 跳过不需要审计的路径
    const skipPaths = ['/', '/health', '/init', '/init-admin', '/auth/login', '/auth/register', '/auth/sso']
    if (skipPaths.some(p => path.includes(p))) {
      await next()
      return
    }
    
    // 提取用户信息（支持多种认证方式）
    let userId: string | null = null
    let userEmail: string | null = null
    
    // 1. Bearer Token (JWT)
    const authHeader = c.req.header('Authorization')
    if (authHeader?.startsWith('Bearer ')) {
      try {
        const token = authHeader.slice(7)
        const parts = token.split('.')
        if (parts.length === 3) {
          const payload = JSON.parse(atob(parts[1]))
          userId = payload.userId?.toString() || payload.id?.toString()
          userEmail = payload.email
        }
      } catch {
        // Token 解析失败，继续尝试其他方式
      }
    }
    
    // 2. Custom Header (如 ims-token)
    const customToken = c.req.header('ims-token') || c.req.header('x-token')
    if (customToken && !userId) {
      try {
        const payload = JSON.parse(atob(customToken))
        userId = payload.id?.toString()
        userEmail = payload.email
      } catch {
        // 解析失败
      }
    }
    
    // 执行原始请求
    await next()
    
    // 记录审计日志
    const endTime = Date.now()
    const responseTime = endTime - startTime
    const responseStatus = c.res.status || 200
    
    // 只记录有用户信息的操作
    if (userId) {
      try {
        const auditId = `audit_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
        
        // 智能解析操作类型
        const { operationType, operationDetail } = parseOperation(path, method, systemName)
        
        const auditPayload = {
          user_id: userId,
          session_id: `session_${Date.now()}`,
          operation_type: operationType,
          operation_detail: operationDetail,
          ip_address: c.req.header('CF-Connecting-IP') || '',
          user_agent: c.req.header('User-Agent') || '',
          device_type: 'web',
          location_country: c.req.header('CF-IPCountry') || '',
          location_city: c.req.header('CF-IPCity') || '',
          response_status: responseStatus,
          response_time: responseTime
        }
        
        // 异步上报到 shopline 审计中心
        fetch('https://shopline-backend.arvix1413.workers.dev/api/admin/audit-cross-system', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-System-Source': systemName.toLowerCase()
          },
          body: JSON.stringify(auditPayload)
        }).catch(e => {
          console.error('Audit report failed:', e)
        })
        
      } catch (e) {
        console.error('Audit middleware error:', e)
      }
    }
  }
}

function parseOperation(path: string, method: string, systemName: string): { operationType: string; operationDetail: string } {
  let operationType = 'unknown'
  let operationDetail = ''
  
  // 通用路径解析
  if (path.includes('/products')) {
    if (method === 'GET' && path.match(/\/\d+$/)) {
      operationType = 'product_view'
      operationDetail = '查看商品详情'
    } else if (method === 'GET') {
      operationType = 'product_list_view'
      operationDetail = '浏览商品列表'
    } else if (method === 'POST') {
      operationType = 'product_create'
      operationDetail = '创建商品'
    } else if (method === 'PUT') {
      operationType = 'product_update'
      operationDetail = '更新商品'
    } else if (method === 'DELETE') {
      operationType = 'product_delete'
      operationDetail = '删除商品'
    }
  } else if (path.includes('/cart')) {
    if (method === 'POST') {
      operationType = 'cart_add'
      operationDetail = '加入购物车'
    } else if (method === 'PUT') {
      operationType = 'cart_update'
      operationDetail = '更新购物车'
    } else if (method === 'DELETE') {
      operationType = 'cart_remove'
      operationDetail = '移除购物车'
    } else if (method === 'GET') {
      operationType = 'cart_view'
      operationDetail = '查看购物车'
    }
  } else if (path.includes('/orders')) {
    if (method === 'POST') {
      operationType = 'order_create'
      operationDetail = '创建订单'
    } else if (method === 'GET') {
      operationType = 'order_view'
      operationDetail = '查看订单'
    } else if (method === 'PUT') {
      operationType = 'order_update'
      operationDetail = '更新订单'
    }
  } else if (path.includes('/users')) {
    operationType = 'user_operation'
    operationDetail = '用户操作'
  } else if (path.includes('/auth')) {
    operationType = 'auth_operation'
    operationDetail = '认证操作'
  } else if (path.includes('/admin')) {
    operationType = 'admin_operation'
    operationDetail = '管理员操作'
  } else if (path.includes('/design')) {
    operationType = 'design_operation'
    operationDetail = '设计操作'
  } else if (path.includes('/item')) {
    operationType = 'item_operation'
    operationDetail = '商品操作'
  } else if (path.includes('/member')) {
    operationType = 'member_operation'
    operationDetail = '会员操作'
  } else if (path.includes('/cash')) {
    operationType = 'cash_operation'
    operationDetail = '收银操作'
  }
  
  return { operationType, operationDetail }
}

// 预定义系统名称常量
export const SYSTEM_NAMES = {
  SHOPLINE: 'SHOPLINE',
  TINYWEAR: 'Tiny Wearhouse',
  IMS: 'IMS',
  DAF_SHOES: 'DAF Shoes',
  MOLAVA: 'MOLAVA',
  ZENLET: 'ZENLET',
  MEIERQ: 'MEIERQ'
} as const
