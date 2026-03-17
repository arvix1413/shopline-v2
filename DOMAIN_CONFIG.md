# 🌐 SHOPLINE 域名配置说明

## 固定生产域名

### 前端域名
- **主域名**: `https://shopline-frontend.pages.dev`
- **管理后台**: `https://shopline-frontend.pages.dev/admin`
- **商品页面**: `https://shopline-frontend.pages.dev/products`
- **购物车**: `https://shopline-frontend.pages.dev/cart`

### 后端域名
- **API 基础地址**: `https://shopline-backend.arvix1413.workers.dev`
- **商品 API**: `https://shopline-backend.arvix1413.workers.dev/api/products`
- **上传 API**: `https://shopline-backend.arvix1413.workers.dev/api/upload`
- **图片代理**: `https://shopline-backend.arvix1413.workers.dev/images/*`

## 存储配置

### R2 存储桶
- **存储桶名称**: `shopline-v2`
- **图片路径**: `products/`
- **访问方式**: Worker代理 (不依赖R2公共访问)

## 域名配置文件

### 前端配置 (`frontend/.env.local`)
```env
NEXT_PUBLIC_API_URL=https://shopline-backend.arvix1413.workers.dev
```

### 后端 CORS 配置 (`backend/src/index.ts`)
```typescript
app.use('*', cors({
  origin: ['https://shopline-frontend.pages.dev', 'http://localhost:3000'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}))
```

### Wrangler 配置 (`frontend/wrangler.toml`)
```toml
name = "shopline-frontend"
compatibility_date = "2024-01-15"
pages_build_output_dir = "out"

[env.production]
name = "shopline-frontend"
```

### 后端配置 (`backend/wrangler.toml`)
```toml
[[r2_buckets]]
binding = "R2_BUCKET"
bucket_name = "shopline-v2"
```

## 部署说明

### 为什么会看到不同的预览域名？

Cloudflare Pages 每次部署都会生成一个唯一的预览 URL（如 `https://abc123.shopline-frontend.pages.dev`），这是正常的。这些预览 URL 用于：

1. **部署验证** - 在推送到生产前验证更改
2. **版本控制** - 每个部署都有独特的 URL
3. **回滚支持** - 可以访问历史版本

### 主域名始终固定

无论生成多少预览 URL，**主生产域名始终是固定的**：
- `https://shopline-frontend.pages.dev` 始终指向最新的生产部署
- 用户访问的是这个固定域名，不是预览域名

### 如何确保使用固定域名

1. **前端部署**:
   ```bash
   npx wrangler pages deploy out --project-name shopline-frontend
   ```

2. **后端部署**:
   ```bash
   npx wrangler deploy
   ```

3. **使用部署脚本**:
   ```bash
   ./deploy.sh
   ```

## 验证域名配置

### 检查前端
```bash
curl -s "https://shopline-frontend.pages.dev" | grep -o "SHOPLINE"
```

### 检查后端
```bash
curl -s "https://shopline-backend.arvix1413.workers.dev"
```

### 检查 API
```bash
curl -s "https://shopline-backend.arvix1413.workers.dev/api/products" | jq 'length'
```

## 常见问题

### Q: 为什么每次部署都显示新的 URL？
A: 这是 Cloudflare Pages 的预览功能，主域名 `shopline-frontend.pages.dev` 始终固定。

### Q: 用户访问哪个域名？
A: 用户始终访问 `https://shopline-frontend.pages.dev`，这是固定的生产域名。

### Q: 如何确认当前生产版本？
A: 访问 `https://shopline-frontend.pages.dev` 即可看到最新的生产版本。

### Q: 预览域名有什么用？
A: 预览域名用于测试和验证，不影响生产环境的固定域名。

## 总结

✅ **固定域名已配置完成**
- 前端: `https://shopline-frontend.pages.dev`
- 后端: `https://shopline-backend.arvix1413.workers.dev`
- 这些域名不会改变，用户始终访问固定地址

✅ **预览域名是正常现象**
- 每次部署生成的预览 URL 不影响生产域名
- 主域名始终指向最新部署

✅ **配置文件已更新**
- CORS 配置指向固定前端域名
- API 配置使用固定后端域名
- Wrangler 配置确保正确的项目名称
- R2 存储桶更新为 `shopline-v2`