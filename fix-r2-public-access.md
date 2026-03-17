# 🔧 修复R2图片访问问题

## 问题诊断
✅ 图片上传功能正常  
✅ 图片URL正确保存到数据库  
❌ R2存储桶没有公共访问权限 (401错误)

## 解决方案

### 方法1: Cloudflare Dashboard (推荐)

1. 访问 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 选择你的账户
3. 点击左侧菜单 "R2 Object Storage"
4. 点击 `shopline-images` 存储桶
5. 点击 "Settings" 标签页
6. 在 "Public access" 部分找到 "R2.dev subdomain"
7. 点击 "Allow Access" 按钮
8. 输入 "allow" 确认启用公共访问

### 方法2: 使用S3 API (高级用户)

```bash
# 设置环境变量
export AWS_ACCESS_KEY_ID="your-r2-access-key"
export AWS_SECRET_ACCESS_KEY="your-r2-secret-key"
export AWS_DEFAULT_REGION="auto"

# 使用AWS CLI设置存储桶策略
aws s3api put-bucket-policy \
  --bucket shopline-images \
  --policy '{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Sid": "PublicReadGetObject",
        "Effect": "Allow",
        "Principal": "*",
        "Action": "s3:GetObject",
        "Resource": "arn:aws:s3:::shopline-images/*"
      }
    ]
  }' \
  --endpoint-url https://your-account-id.r2.cloudflarestorage.com
```

## 验证修复

启用公共访问后，你可以测试：

1. 访问管理后台: https://shopline-clone-frontend.pages.dev/admin
2. 上传一张新图片
3. 检查图片是否正确显示

或者测试现有的上传图片：
```bash
curl -I "https://pub-51908639511240656e3a5d46a004f299.r2.dev/products/1773655159509-test.png"
```

应该返回 `200 OK` 而不是 `401 Unauthorized`

## 预期结果

✅ 上传的图片A将正确显示  
✅ 不再显示默认图片B  
✅ 所有商品图片正常加载  
✅ 图片上传功能完全正常

## 注意事项

- 启用公共访问后，存储桶中的所有文件都可以通过URL直接访问
- 建议只在此存储桶中存储需要公开访问的图片
- 敏感文件应使用其他私有存储桶