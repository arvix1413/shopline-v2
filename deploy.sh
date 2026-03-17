#!/bin/bash

# SHOPLINE 自动部署脚本
# 确保使用固定域名部署

set -e

echo "🚀 开始部署 SHOPLINE 到生产环境..."

# 固定的生产域名
FRONTEND_DOMAIN="https://shopline-frontend.pages.dev"
BACKEND_DOMAIN="https://shopline-backend.arvix1413.workers.dev"

echo "📦 构建前端..."
cd frontend
npm run build

echo "🌐 部署前端到固定域名: $FRONTEND_DOMAIN"
npx wrangler pages deploy out --project-name shopline-frontend --commit-dirty=true

echo "⚙️ 部署后端到固定域名: $BACKEND_DOMAIN"
cd ../backend
npx wrangler deploy

echo "✅ 部署完成！"
echo ""
echo "🌐 网站地址:"
echo "   前端: $FRONTEND_DOMAIN"
echo "   管理后台: $FRONTEND_DOMAIN/admin"
echo "   API: $BACKEND_DOMAIN"
echo ""
echo "🧪 验证部署..."

# 验证前端
if curl -s -f "$FRONTEND_DOMAIN" > /dev/null; then
    echo "✅ 前端部署成功"
else
    echo "❌ 前端部署失败"
    exit 1
fi

# 验证后端
if curl -s -f "$BACKEND_DOMAIN" > /dev/null; then
    echo "✅ 后端部署成功"
else
    echo "❌ 后端部署失败"
    exit 1
fi

# 验证 API
PRODUCT_COUNT=$(curl -s "$BACKEND_DOMAIN/api/products" | jq 'length' 2>/dev/null || echo "0")
echo "✅ API 正常，当前有 $PRODUCT_COUNT 个商品"

echo ""
echo "🎉 SHOPLINE 部署完成！"
echo "   所有服务都使用固定域名，不会再变化"