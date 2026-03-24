-- 创建用户表
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  phone TEXT,
  address TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- 创建分类表
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- 创建商品表
CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  price REAL NOT NULL,
  image_url TEXT,
  category TEXT,
  stock INTEGER DEFAULT 0,
  featured INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- 创建订单表
CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER REFERENCES users(id),
  total_amount REAL NOT NULL,
  status TEXT DEFAULT 'pending',
  shipping_address TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- 创建订单项表
CREATE TABLE IF NOT EXISTS order_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_id INTEGER REFERENCES orders(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL,
  price REAL NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- 创建审计日志表
CREATE TABLE IF NOT EXISTS audit_logs (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  session_id TEXT NOT NULL,
  system_name TEXT NOT NULL,
  operation_type TEXT NOT NULL,
  operation_detail TEXT,
  ip_address TEXT,
  user_agent TEXT,
  device_type TEXT,
  location_country TEXT,
  location_city TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  response_status INTEGER,
  response_time INTEGER,
  error_message TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- 创建用户会话表
CREATE TABLE IF NOT EXISTS user_sessions (
  session_id TEXT PRIMARY KEY,
  user_id TEXT,
  system_name TEXT NOT NULL,
  ip_address TEXT,
  user_agent TEXT,
  device_type TEXT,
  start_time DATETIME DEFAULT CURRENT_TIMESTAMP,
  last_activity DATETIME DEFAULT CURRENT_TIMESTAMP,
  page_count INTEGER DEFAULT 1,
  is_active BOOLEAN DEFAULT 1
);

-- 创建操作类型表
CREATE TABLE IF NOT EXISTS operation_types (
  id TEXT PRIMARY KEY,
  category TEXT NOT NULL,
  action TEXT NOT NULL,
  description TEXT,
  risk_level INTEGER DEFAULT 1
);

-- 创建系统列表表
CREATE TABLE IF NOT EXISTS audit_systems (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  display_name TEXT NOT NULL,
  url TEXT,
  color TEXT DEFAULT '#3B82F6',
  active BOOLEAN DEFAULT 1
);

-- 插入系统列表
INSERT OR IGNORE INTO audit_systems (id, name, display_name, url, color) VALUES
('shopline', 'shopline', 'SHOPLINE 主系统', 'https://shopline-frontend.pages.dev', '#3B82F6'),
('daf-shoes', 'daf-shoes', 'DAF Shoes', 'https://daf-shoes.pages.dev', '#10B981'),
('molava', 'molava', 'XYN Shop', 'https://xyn-shop.pages.dev', '#8B5CF6'),
('ims', 'ims', 'IMS 系统', 'https://ims.pages.dev', '#F59E0B'),
('meierq', 'meierq', 'MeierQ', 'https://meierq.pages.dev', '#EF4444'),
('tinywearhouse', 'tinywearhouse', 'Tiny Warehouse', 'https://tinywearhouse.pages.dev', '#EC4899'),
('zenlet', 'zenlet', 'Zenlet', 'https://zenlet.pages.dev', '#6366F1');

-- 插入操作类型
INSERT OR IGNORE INTO operation_types (id, category, action, description, risk_level) VALUES
('auth_login', '认证', '登录', '用户登录系统', 1),
('auth_logout', '认证', '登出', '用户登出系统', 1),
('auth_register', '认证', '注册', '新用户注册', 2),
('page_view', '页面', '浏览', '用户浏览页面', 1),
('product_view', '商品', '查看', '用户查看商品详情', 1),
('product_search', '商品', '搜索', '用户搜索商品', 1),
('cart_add', '购物车', '添加', '添加商品到购物车', 2),
('cart_remove', '购物车', '移除', '从购物车移除商品', 2),
('cart_clear', '购物车', '清空', '清空购物车', 2),
('order_create', '订单', '创建', '用户创建订单', 3),
('order_cancel', '订单', '取消', '用户取消订单', 3),
('admin_login', '管理', '登录', '管理员登录', 3),
('admin_product_create', '管理', '创建商品', '管理员创建商品', 3),
('admin_product_update', '管理', '更新商品', '管理员更新商品', 3),
('admin_product_delete', '管理', '删除商品', '管理员删除商品', 4),
('admin_user_delete', '管理', '删除用户', '管理员删除用户', 4),
('error_404', '错误', '404', '页面不存在', 2),
('error_500', '错误', '500', '服务器错误', 3);