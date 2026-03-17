# Cloudflare 自动化设置指南

由于我无法直接访问你的 Cloudflare 账户，你需要完成以下步骤来启用自动部署：

## 1. 安装和登录 Wrangler

```bash
npm install -g wrangler
wrangler login
```

## 2. 运行自动部署脚本

```bash
# 方式一：使用 Node.js 脚本
node auto-deploy.js

# 方式二：使用 Bash 脚本 (macOS/Linux)
./deploy.sh

# 方式三：使用 npm 命令
npm run deploy
```

## 3. 脚本会自动完成以下操作：

✅ 检查 Wrangler CLI 安装状态  
✅ 创建 D1 数据库 `shopline-db`  
✅ 创建 R2 存储桶 `shopline-images`  
✅ 部署后端到 Cloudflare Workers  
✅ 初始化数据库表和测试数据  
✅ 部署前端到 Cloudflare Pages  
✅ 配置 CORS 和环境变量  

## 4. 部署后的手动配置

### R2 自定义域名设置：
1. 进入 Cloudflare Dashboard > R2 Object Storage
2. 选择 `shopline-images` 存储桶
3. 点击 "Settings" > "Custom Domains"
4. 添加自定义域名（如：`cdn.your-domain.com`）
5. 更新以下文件中的域名配置：
   - `backend/wrangler.toml` 中的 `R2_DOMAIN`
   - `frontend/next.config.js` 中的 `images.domains`

### 环境变量配置：
```bash
# 为 Pages 项目设置环境变量
wrangler pages secret put NEXT_PUBLIC_API_URL --project-name=shopline-clone-frontend
# 输入值：https://shopline-clone-backend.your-subdomain.workers.dev
```

## 5. 验证部署

部署完成后，访问以下地址验证：

- **前端**: `https://shopline-clone-frontend.pages.dev`
- **后端 API**: `https://shopline-clone-backend.your-subdomain.workers.dev`
- **商品页面**: `https://shopline-clone-frontend.pages.dev/products`
- **管理后台**: `https://shopline-clone-frontend.pages.dev/admin`

## 6. 测试功能

- ✅ 主页加载和动画效果
- ✅ 商品列表显示
- ✅ 管理后台商品管理
- ✅ 图片上传到 R2
- ✅ API 数据获取
- ✅ 响应式设计

## 故障排除

如果遇到问题：

1. **CORS 错误**: 检查后端 `src/index.ts` 中的 origin 配置
2. **图片无法显示**: 确认 R2 自定义域名配置正确
3. **API 调用失败**: 检查环境变量 `NEXT_PUBLIC_API_URL`
4. **数据库错误**: 重新运行数据库初始化命令

```bash
cd backend
wrangler d1 execute shopline-db --file=./schema.sql
wrangler d1 execute shopline-db --file=./seed.sql
```

## 完成！

运行自动部署脚本后，你的 SHOPLINE 复刻网站就会完全部署到 Cloudflare 的生产环境中。