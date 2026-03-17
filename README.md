# 🛍️ SHOPLINE - 全栈电商平台

基于 Next.js 14 + Cloudflare 技术栈构建的现代化电商平台，完整复刻 SHOPLINE 官网设计和功能。

## 🌐 在线演示

- **前端网站**: https://shopline-frontend.pages.dev
- **商品展示**: https://shopline-frontend.pages.dev/products
- **购物车**: https://shopline-frontend.pages.dev/cart
- **管理后台**: https://shopline-frontend.pages.dev/admin

## ✨ 核心功能

### 🎨 前端功能
- 📱 响应式设计，完美适配所有设备
- 🛍️ 商品浏览和分类筛选
- 🛒 完整购物车系统（添加、修改、删除）
- 🎯 商品搜索和排序
- 💫 流畅的用户交互体验

### ⚙️ 管理后台
- 📝 商品管理（创建、编辑、删除）
- 📷 图片上传和管理
- 🎨 智能默认图片系统
- 📊 库存管理
- ✨ 精选商品设置

### 🔧 技术特性
- 🚀 Cloudflare Pages 部署
- 💾 Cloudflare D1 数据库
- 📁 Cloudflare R2 对象存储
- 🌍 全球 CDN 加速
- 🔒 安全的 API 设计

## 🏗️ 技术架构

### 前端技术栈
- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **类型**: TypeScript
- **部署**: Cloudflare Pages

### 后端技术栈
- **框架**: Hono (轻量级 Web 框架)
- **运行时**: Cloudflare Workers
- **数据库**: Cloudflare D1 (SQLite)
- **存储**: Cloudflare R2 (S3 兼容)
- **ORM**: Drizzle ORM

### 基础设施
- **CDN**: Cloudflare 全球网络
- **域名**: 固定生产域名
- **SSL**: 自动 HTTPS
- **缓存**: 智能边缘缓存

## 📁 项目结构

```
shopline-v2/
├── frontend/                 # Next.js 前端应用
│   ├── app/                 # App Router 页面
│   │   ├── components/      # React 组件
│   │   ├── admin/          # 管理后台
│   │   ├── products/       # 商品页面
│   │   └── cart/           # 购物车页面
│   ├── lib/                # 工具库和 API 客户端
│   └── public/             # 静态资源
├── backend/                 # Hono 后端 API
│   ├── src/                # 源代码
│   │   ├── index.ts        # 主应用文件
│   │   └── schema.ts       # 数据库模式
│   ├── schema.sql          # 数据库结构
│   └── seed.sql            # 初始数据
├── e2e-tests/              # Playwright 端到端测试
└── product-images/         # 商品图片资源
```

## 🚀 快速开始

### 环境要求
- Node.js 18+
- npm 或 yarn
- Cloudflare 账户

### 1. 克隆项目
```bash
git clone <repository-url>
cd shopline-v2
```

### 2. 安装依赖
```bash
# 安装前端依赖
cd frontend
npm install

# 安装后端依赖
cd ../backend
npm install

# 安装测试依赖
cd ../e2e-tests
npm install
```

### 3. 配置环境变量
```bash
# 前端配置
cd frontend
cp .env.local.example .env.local
# 编辑 .env.local 设置 API URL

# 后端配置
cd ../backend
# 配置 wrangler.toml 中的数据库和存储桶
```

### 4. 本地开发
```bash
# 启动前端开发服务器
cd frontend
npm run dev

# 启动后端开发服务器
cd backend
npm run dev
```

### 5. 部署到生产环境
```bash
# 使用自动部署脚本
./deploy.sh

# 或手动部署
cd frontend && npm run build && npx wrangler pages deploy out --project-name shopline-frontend
cd backend && npx wrangler deploy
```

## 📊 数据库结构

### 核心表结构
- **products** - 商品信息
- **categories** - 商品分类
- **cart_items** - 购物车项目
- **users** - 用户信息
- **orders** - 订单数据

### 数据库初始化
```bash
cd backend
npx wrangler d1 execute shopline-db --file=schema.sql --remote
npx wrangler d1 execute shopline-db --file=seed.sql --remote
```

## 🧪 测试

### 端到端测试
```bash
cd e2e-tests
npm run test
```

### API 测试
```bash
# 测试商品 API
curl https://shopline-backend.arvix1413.workers.dev/api/products

# 测试图片上传
curl -X POST -F "file=@image.jpg" https://shopline-backend.arvix1413.workers.dev/api/upload
```

## 🔧 配置说明

### Cloudflare 配置
1. **D1 数据库**: `shopline-db`
2. **R2 存储桶**: `shopline-v2`
3. **Pages 项目**: `shopline-frontend`
4. **Workers 项目**: `shopline-backend`

### 域名配置
- 前端: `https://shopline-frontend.pages.dev`
- 后端: `https://shopline-backend.arvix1413.workers.dev`

## 📈 性能优化

- ⚡ 静态站点生成 (SSG)
- 🌍 全球 CDN 分发
- 📦 代码分割和懒加载
- 🖼️ 图片优化和缓存
- 💾 智能数据缓存

## 🛡️ 安全特性

- 🔒 HTTPS 强制加密
- 🛡️ CORS 跨域保护
- 🔐 API 访问控制
- 📝 输入验证和清理
- 🚫 SQL 注入防护

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [SHOPLINE](https://shopline.tw) - 原始设计灵感
- [Cloudflare](https://cloudflare.com) - 基础设施支持
- [Next.js](https://nextjs.org) - 前端框架
- [Hono](https://hono.dev) - 后端框架

---

**🌟 如果这个项目对你有帮助，请给个 Star！**