# 部署指南

## 1. Cloudflare 账户设置

首先确保你有 Cloudflare 账户，并安装了 Wrangler CLI：

```bash
npm install -g wrangler
wrangler login
```

## 2. 创建 D1 数据库

```bash
cd backend
wrangler d1 create shopline-db
```

复制返回的数据库 ID，更新 `backend/wrangler.toml` 中的 `database_id`。

## 3. 创建 R2 存储桶

```bash
wrangler r2 bucket create shopline-images
```

## 4. 设置自定义域名（可选）

在 Cloudflare Dashboard 中为 R2 存储桶设置自定义域名，然后更新：
- `backend/wrangler.toml` 中的 `R2_DOMAIN`
- `frontend/next.config.js` 中的 images domains

## 5. 部署后端

```bash
cd backend
npm install
npm run deploy
```

## 6. 初始化数据库

```bash
cd backend
wrangler d1 execute shopline-db --file=./schema.sql
wrangler d1 execute shopline-db --file=./seed.sql
```

## 7. 部署前端

```bash
cd frontend
npm install
npm run deploy
```

## 8. 更新 CORS 设置

部署完成后，更新 `backend/src/index.ts` 中的 CORS origin 为你的实际前端域名，然后重新部署后端。

## 注意事项

- 确保所有环境变量都正确配置
- 检查 R2 存储桶的 CORS 设置
- 测试图片上传功能
- 验证 API 端点是否正常工作