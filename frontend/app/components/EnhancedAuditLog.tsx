'use client'

import { useState, useEffect, useCallback } from 'react'
import { Search, Filter, Calendar, Globe, Monitor, Smartphone, Tablet, AlertTriangle, User, Clock, TrendingUp, Eye, X } from 'lucide-react'

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8787'

interface AuditLog {
  id: string
  user_id: string
  session_id: string
  system_name: string
  operation_type: string
  operation_detail: string
  ip_address: string
  user_agent: string
  device_type: string
  location_country: string
  location_city: string
  timestamp: string
  response_status: number
  response_time: number
  error_message?: string
  email?: string
  name?: string
  category?: string
  action?: string
  op_description?: string
  risk_level?: number
  system_display_name?: string
}

interface AuditSystem {
  id: string
  name: string
  display_name: string
  url: string
  color: string
  active: boolean
}

interface OperationType {
  id: string
  category: string
  action: string
  description: string
  risk_level: number
}

interface Customer {
  id: string
  email: string
  name: string
  created_at: string
  operation_count: number
  last_activity: string
}

interface RealtimeData {
  recentLogs: AuditLog[]
  activeSessions: number
  todayStats: {
    total_logs: number
    unique_users: number
    unique_sessions: number
    active_systems: number
  }
  highRiskOps: AuditLog[]
}

export default function EnhancedAuditLog({ token }: { token: string }) {
  // 状态管理
  const [logs, setLogs] = useState<AuditLog[]>([])
  const [systems, setSystems] = useState<AuditSystem[]>([])
  const [operationTypes, setOperationTypes] = useState<OperationType[]>([])
  const [customers, setCustomers] = useState<Customer[]>([])
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)
  const [customerTimeline, setCustomerTimeline] = useState<any>(null)
  const [realtimeData, setRealtimeData] = useState<RealtimeData | null>(null)
  
  // 筛选状态
  const [filters, setFilters] = useState({
    userId: '',
    systemName: '',
    operationType: '',
    dateRangeStart: '',
    dateRangeEnd: '',
    ipAddress: '',
    deviceType: '',
    searchQuery: ''
  })
  
  // UI状态
  const [loading, setLoading] = useState(false)
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 50,
    total: 0,
    totalPages: 0
  })
  const [showFilters, setShowFilters] = useState(false)
  const [showCustomerSearch, setShowCustomerSearch] = useState(false)
  const [activeTab, setActiveTab] = useState<'logs' | 'realtime' | 'customer-tracking'>('logs')

  // 获取系统列表
  const fetchSystems = useCallback(async () => {
    try {
      const res = await fetch(`${API}/api/admin/audit-systems`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      if (res.ok) {
        const data = await res.json()
        setSystems(data)
      }
    } catch (error) {
      console.error('获取系统列表失败:', error)
    }
  }, [token])

  // 获取操作类型列表
  const fetchOperationTypes = useCallback(async () => {
    try {
      const res = await fetch(`${API}/api/admin/operation-types`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      if (res.ok) {
        const data = await res.json()
        setOperationTypes(data)
      }
    } catch (error) {
      console.error('获取操作类型失败:', error)
    }
  }, [token])

  // 获取审计日志
  const fetchLogs = useCallback(async (page = 1) => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: pagination.limit.toString(),
        ...Object.fromEntries(
          Object.entries(filters).filter(([_, v]) => v !== '')
        )
      })
      
      const res = await fetch(`${API}/api/admin/audit-logs?${params}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      
      if (res.ok) {
        const data = await res.json()
        setLogs(data.logs)
        setPagination(data.pagination)
      }
    } catch (error) {
      console.error('获取审计日志失败:', error)
    } finally {
      setLoading(false)
    }
  }, [token, filters, pagination.limit])

  // 获取实时数据
  const fetchRealtimeData = useCallback(async () => {
    try {
      const res = await fetch(`${API}/api/admin/audit-realtime`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      if (res.ok) {
        const data = await res.json()
        setRealtimeData(data)
      }
    } catch (error) {
      console.error('获取实时数据失败:', error)
    }
  }, [token])

  // 搜索客户
  const searchCustomers = useCallback(async (query: string) => {
    if (!query.trim()) return
    
    try {
      const res = await fetch(`${API}/api/admin/customers/search?q=${encodeURIComponent(query)}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      if (res.ok) {
        const data = await res.json()
        setCustomers(data.users)
      }
    } catch (error) {
      console.error('搜索客户失败:', error)
    }
  }, [token])

  // 获取客户时间线
  const fetchCustomerTimeline = useCallback(async (userId: string) => {
    try {
      const res = await fetch(`${API}/api/admin/customers/${userId}/timeline`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      if (res.ok) {
        const data = await res.json()
        setCustomerTimeline(data)
      }
    } catch (error) {
      console.error('获取客户时间线失败:', error)
    }
  }, [token])

  // 初始化
  useEffect(() => {
    fetchSystems()
    fetchOperationTypes()
  }, [fetchSystems, fetchOperationTypes])

  useEffect(() => {
    if (activeTab === 'logs') {
      fetchLogs()
    } else if (activeTab === 'realtime') {
      fetchRealtimeData()
      // 每30秒刷新实时数据
      const interval = setInterval(fetchRealtimeData, 30000)
      return () => clearInterval(interval)
    }
  }, [activeTab, fetchLogs, fetchRealtimeData])

  // 获取操作类型显示信息
  const getOperationTypeDisplay = (type: string) => {
    const opType = operationTypes.find(ot => ot.id === type)
    if (!opType) return { label: type, color: 'bg-gray-100 text-gray-600', icon: '📋', risk: 1 }
    
    const riskColors = {
      1: 'bg-green-100 text-green-800',
      2: 'bg-yellow-100 text-yellow-800', 
      3: 'bg-orange-100 text-orange-800',
      4: 'bg-red-100 text-red-800'
    }
    
    const categoryIcons = {
      '认证': '🔐',
      '页面': '📄',
      '商品': '🛍️',
      '购物车': '🛒',
      '订单': '📋',
      '管理': '⚙️',
      '错误': '⚠️'
    }
    
    return {
      label: opType.action,
      color: riskColors[opType.risk_level as keyof typeof riskColors] || riskColors[1],
      icon: categoryIcons[opType.category as keyof typeof categoryIcons] || '📋',
      risk: opType.risk_level
    }
  }

  // 获取设备图标
  const getDeviceIcon = (deviceType: string) => {
    switch (deviceType) {
      case 'mobile': return <Smartphone className="w-4 h-4" />
      case 'tablet': return <Tablet className="w-4 h-4" />
      default: return <Monitor className="w-4 h-4" />
    }
  }

  // 获取风险等级显示
  const getRiskLevelDisplay = (level: number) => {
    if (level >= 4) return { color: 'text-red-600', label: '高风险' }
    if (level >= 3) return { color: 'text-orange-600', label: '中风险' }
    if (level >= 2) return { color: 'text-yellow-600', label: '低风险' }
    return { color: 'text-green-600', label: '安全' }
  }

  return (
    <div className="space-y-6">
      {/* 标签页导航 */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {[
            { id: 'logs', label: '审计日志', icon: <Eye className="w-4 h-4" /> },
            { id: 'realtime', label: '实时监控', icon: <TrendingUp className="w-4 h-4" /> },
            { id: 'customer-tracking', label: '客户跟踪', icon: <User className="w-4 h-4" /> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* 审计日志标签页 */}
      {activeTab === 'logs' && (
        <>
          {/* 筛选栏 */}
          <div className="bg-white rounded-lg shadow border p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  <Filter className="w-4 h-4" />
                  筛选
                  {Object.values(filters).filter(v => v !== '').length > 0 && (
                    <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                      {Object.values(filters).filter(v => v !== '').length}
                    </span>
                  )}
                </button>
                
                <button
                  onClick={() => {
                    setFilters({
                      userId: '',
                      systemName: '',
                      operationType: '',
                      dateRangeStart: '',
                      dateRangeEnd: '',
                      ipAddress: '',
                      deviceType: '',
                      searchQuery: ''
                    })
                    fetchLogs(1)
                  }}
                  className="px-3 py-2 text-sm text-gray-600 hover:text-gray-800"
                >
                  重置
                </button>
              </div>
              
              <div className="text-sm text-gray-500">
                共 {pagination.total} 条记录
              </div>
            </div>

            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">系统</label>
                  <select
                    className="w-full border rounded-lg px-3 py-2"
                    value={filters.systemName}
                    onChange={(e) => setFilters({ ...filters, systemName: e.target.value })}
                  >
                    <option value="">全部系统</option>
                    {systems.map(system => (
                      <option key={system.id} value={system.id}>{system.display_name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">操作类型</label>
                  <select
                    className="w-full border rounded-lg px-3 py-2"
                    value={filters.operationType}
                    onChange={(e) => setFilters({ ...filters, operationType: e.target.value })}
                  >
                    <option value="">全部操作</option>
                    {operationTypes.map(op => (
                      <option key={op.id} value={op.id}>{op.description}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">设备类型</label>
                  <select
                    className="w-full border rounded-lg px-3 py-2"
                    value={filters.deviceType}
                    onChange={(e) => setFilters({ ...filters, deviceType: e.target.value })}
                  >
                    <option value="">全部设备</option>
                    <option value="desktop">桌面</option>
                    <option value="mobile">移动</option>
                    <option value="tablet">平板</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">IP地址</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder="输入IP地址"
                    value={filters.ipAddress}
                    onChange={(e) => setFilters({ ...filters, ipAddress: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">开始时间</label>
                  <input
                    type="datetime-local"
                    className="w-full border rounded-lg px-3 py-2"
                    value={filters.dateRangeStart}
                    onChange={(e) => setFilters({ ...filters, dateRangeStart: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">结束时间</label>
                  <input
                    type="datetime-local"
                    className="w-full border rounded-lg px-3 py-2"
                    value={filters.dateRangeEnd}
                    onChange={(e) => setFilters({ ...filters, dateRangeEnd: e.target.value })}
                  />
                </div>

                <div className="lg:col-span-2">
                  <button
                    onClick={() => fetchLogs(1)}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    应用筛选
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 日志列表 */}
          <div className="bg-white rounded-lg shadow border overflow-hidden">
            {loading ? (
              <div className="flex justify-center py-10">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600" />
              </div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
                      <tr>
                        <th className="px-4 py-3 text-left">时间</th>
                        <th className="px-4 py-3 text-left">用户</th>
                        <th className="px-4 py-3 text-left">系统</th>
                        <th className="px-4 py-3 text-left">操作</th>
                        <th className="px-4 py-3 text-left">设备</th>
                        <th className="px-4 py-3 text-left">位置</th>
                        <th className="px-4 py-3 text-left">响应时间</th>
                        <th className="px-4 py-3 text-left">风险</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {logs.map((log) => {
                        const opDisplay = getOperationTypeDisplay(log.operation_type)
                        const riskDisplay = getRiskLevelDisplay(log.risk_level || 1)
                        const systemInfo = systems.find(s => s.id === log.system_name)
                        
                        return (
                          <tr key={log.id} className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-xs text-gray-500 whitespace-nowrap">
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {new Date(log.timestamp).toLocaleString('zh-TW', {
                                  month: '2-digit',
                                  day: '2-digit',
                                  hour: '2-digit',
                                  minute: '2-digit',
                                  second: '2-digit'
                                })}
                              </div>
                            </td>
                            
                            <td className="px-4 py-3">
                              {log.email ? (
                                <div>
                                  <div className="font-medium text-blue-700">{log.email}</div>
                                  {log.name && <div className="text-xs text-gray-400">{log.name}</div>}
                                </div>
                              ) : (
                                <span className="text-xs text-gray-400">匿名用户</span>
                              )}
                            </td>
                            
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-2">
                                <div 
                                  className="w-3 h-3 rounded-full"
                                  style={{ backgroundColor: systemInfo?.color || '#3B82F6' }}
                                />
                                <span className="text-xs font-medium">
                                  {systemInfo?.display_name || log.system_name}
                                </span>
                              </div>
                            </td>
                            
                            <td className="px-4 py-3">
                              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${opDisplay.color}`}>
                                <span>{opDisplay.icon}</span>
                                {opDisplay.label}
                              </span>
                              {log.operation_detail && (
                                <div className="text-xs text-gray-400 mt-1 truncate max-w-xs">
                                  {JSON.parse(log.operation_detail || '{}').summary || ''}
                                </div>
                              )}
                            </td>
                            
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-2 text-gray-600">
                                {getDeviceIcon(log.device_type)}
                                <span className="text-xs">{log.device_type}</span>
                              </div>
                            </td>
                            
                            <td className="px-4 py-3 text-xs text-gray-600">
                              <div className="flex items-center gap-1">
                                <Globe className="w-3 h-3" />
                                {log.location_country !== 'unknown' ? (
                                  <span>{log.location_country} {log.location_city}</span>
                                ) : (
                                  <span className="text-gray-400">未知</span>
                                )}
                              </div>
                            </td>
                            
                            <td className="px-4 py-3 text-xs text-gray-600">
                              <div className="flex items-center gap-1">
                                <span className={log.response_time > 1000 ? 'text-red-600' : 'text-green-600'}>
                                  {log.response_time}ms
                                </span>
                              </div>
                            </td>
                            
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-1">
                                {log.risk_level && log.risk_level >= 3 && (
                                  <AlertTriangle className="w-3 h-3 text-orange-500" />
                                )}
                                <span className={`text-xs font-medium ${riskDisplay.color}`}>
                                  {riskDisplay.label}
                                </span>
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>

                {/* 分页 */}
                {pagination.totalPages > 1 && (
                  <div className="px-4 py-3 border-t bg-gray-50 flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      显示第 {((pagination.page - 1) * pagination.limit) + 1} - {Math.min(pagination.page * pagination.limit, pagination.total)} 条，共 {pagination.total} 条
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => fetchLogs(pagination.page - 1)}
                        disabled={pagination.page <= 1}
                        className="px-3 py-1 text-sm border rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        上一页
                      </button>
                      <span className="text-sm">
                        {pagination.page} / {pagination.totalPages}
                      </span>
                      <button
                        onClick={() => fetchLogs(pagination.page + 1)}
                        disabled={pagination.page >= pagination.totalPages}
                        className="px-3 py-1 text-sm border rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        下一页
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </>
      )}

      {/* 实时监控标签页 */}
      {activeTab === 'realtime' && (
        <div className="space-y-6">
          {realtimeData ? (
            <>
              {/* 统计卡片 */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500">今日日志</div>
                      <div className="text-2xl font-bold text-blue-600">
                        {realtimeData.todayStats.total_logs.toLocaleString()}
                      </div>
                    </div>
                    <TrendingUp className="w-8 h-8 text-blue-200" />
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500">活跃用户</div>
                      <div className="text-2xl font-bold text-green-600">
                        {realtimeData.todayStats.unique_users.toLocaleString()}
                      </div>
                    </div>
                    <User className="w-8 h-8 text-green-200" />
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500">活跃会话</div>
                      <div className="text-2xl font-bold text-purple-600">
                        {realtimeData.activeSessions.toLocaleString()}
                      </div>
                    </div>
                    <Eye className="w-8 h-8 text-purple-200" />
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500">活跃系统</div>
                      <div className="text-2xl font-bold text-orange-600">
                        {realtimeData.todayStats.active_systems.toLocaleString()}
                      </div>
                    </div>
                    <Globe className="w-8 h-8 text-orange-200" />
                  </div>
                </div>
              </div>

              {/* 高风险操作 */}
              {realtimeData.highRiskOps.length > 0 && (
                <div className="bg-white rounded-lg shadow border p-4">
                  <h3 className="text-lg font-semibold text-red-600 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    高风险操作 (最近1小时)
                  </h3>
                  <div className="space-y-2">
                    {realtimeData.highRiskOps.map((log) => {
                      const opDisplay = getOperationTypeDisplay(log.operation_type)
                      return (
                        <div key={log.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{opDisplay.icon}</span>
                            <div>
                              <div className="font-medium text-red-800">{opDisplay.label}</div>
                              <div className="text-sm text-red-600">{log.email} • {log.system_display_name}</div>
                            </div>
                          </div>
                          <div className="text-xs text-red-500">
                            {new Date(log.timestamp).toLocaleString('zh-TW')}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* 最近日志 */}
              <div className="bg-white rounded-lg shadow border p-4">
                <h3 className="text-lg font-semibold mb-4">实时日志流</h3>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {realtimeData.recentLogs.map((log) => {
                    const opDisplay = getOperationTypeDisplay(log.operation_type)
                    return (
                      <div key={log.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                        <div className="flex items-center gap-3">
                          <span className="text-sm">{opDisplay.icon}</span>
                          <div>
                            <div className="text-sm font-medium">{opDisplay.label}</div>
                            <div className="text-xs text-gray-500">{log.email} • {log.system_display_name}</div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-400">
                          {new Date(log.timestamp).toLocaleTimeString('zh-TW')}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </>
          ) : (
            <div className="flex justify-center py-10">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600" />
            </div>
          )}
        </div>
      )}

      {/* 客户跟踪标签页 */}
      {activeTab === 'customer-tracking' && (
        <div className="space-y-6">
          {/* 客户搜索 */}
          <div className="bg-white rounded-lg shadow border p-4">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="搜索客户邮箱或姓名..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => {
                      if (e.target.value.length > 2) {
                        searchCustomers(e.target.value)
                      }
                    }}
                  />
                </div>
              </div>
              <button
                onClick={() => setShowCustomerSearch(!showCustomerSearch)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {showCustomerSearch ? '隐藏搜索' : '显示搜索'}
              </button>
            </div>

            {showCustomerSearch && customers.length > 0 && (
              <div className="mt-4 space-y-2">
                {customers.map((customer) => (
                  <div
                    key={customer.id}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                    onClick={() => {
                      setSelectedCustomer(customer)
                      fetchCustomerTimeline(customer.id)
                    }}
                  >
                    <div>
                      <div className="font-medium text-blue-700">{customer.email}</div>
                      <div className="text-sm text-gray-500">{customer.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{customer.operation_count} 次操作</div>
                      <div className="text-xs text-gray-400">
                        最后活动: {new Date(customer.last_activity).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 客户时间线 */}
          {selectedCustomer && customerTimeline && (
            <div className="bg-white rounded-lg shadow border p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">客户跟踪: {selectedCustomer.email}</h3>
                  <div className="text-sm text-gray-500">{selectedCustomer.name}</div>
                </div>
                <button
                  onClick={() => {
                    setSelectedCustomer(null)
                    setCustomerTimeline(null)
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 统计信息 */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-sm text-blue-500">总操作数</div>
                  <div className="text-xl font-bold text-blue-700">
                    {customerTimeline.statistics.total_operations}
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="text-sm text-green-500">访问系统</div>
                  <div className="text-xl font-bold text-green-700">
                    {customerTimeline.statistics.systems_visited}
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3">
                  <div className="text-sm text-purple-500">操作类型</div>
                  <div className="text-xl font-bold text-purple-700">
                    {customerTimeline.statistics.operation_types}
                  </div>
                </div>
                <div className="bg-orange-50 rounded-lg p-3">
                  <div className="text-sm text-orange-500">活跃天数</div>
                  <div className="text-xl font-bold text-orange-700">
                    {Math.ceil((new Date(customerTimeline.statistics.last_activity).getTime() - 
                      new Date(customerTimeline.statistics.first_activity).getTime()) / (1000 * 60 * 60 * 24))}
                  </div>
                </div>
              </div>

              {/* 时间线 */}
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-700">操作时间线</h4>
                <div className="max-h-96 overflow-y-auto">
                  {customerTimeline.logs.map((log: any) => {
                    const opDisplay = getOperationTypeDisplay(log.operation_type)
                    return (
                      <div key={log.id} className="flex items-start gap-3 p-3 border-l-2 border-blue-200 bg-blue-50">
                        <div className="mt-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{opDisplay.icon}</span>
                            <span className="font-medium">{opDisplay.label}</span>
                            <span className="text-xs text-gray-500">
                              {new Date(log.timestamp).toLocaleString('zh-TW')}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            系统: {log.system_display_name} • 设备: {log.device_type}
                          </div>
                          {log.operation_detail && (
                            <div className="text-xs text-gray-400 mt-1">
                              {JSON.parse(log.operation_detail || '{}').summary || ''}
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
