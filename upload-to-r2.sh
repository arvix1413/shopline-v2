#!/bin/bash

echo "🚀 开始上传图片到 R2 存储..."

cd product-images

# 上传所有图片到 R2
for file in *.jpg; do
    if [ -f "$file" ]; then
        echo "📤 上传: $file"
        wrangler r2 object put shopline-images/products/$file --file=$file
        echo "✅ 上传完成: $file"
    fi
done

echo "🎉 所有图片上传完成！"