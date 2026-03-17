const https = require('https');
const fs = require('fs');
const path = require('path');

// 创建图片目录
const imageDir = './product-images';
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir);
}

// 商品图片 URL 列表 - 使用免费的商品图片
const productImages = [
  {
    name: 'iphone15-pro.jpg',
    url: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&h=500&fit=crop'
  },
  {
    name: 'macbook-air-m2.jpg', 
    url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop'
  },
  {
    name: 'airpods-pro.jpg',
    url: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&h=500&fit=crop'
  },
  {
    name: 'fashion-jacket.jpg',
    url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop'
  },
  {
    name: 'sports-shoes.jpg',
    url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop'
  },
  {
    name: 'smart-watch.jpg',
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop'
  },
  {
    name: 'bluetooth-speaker.jpg',
    url: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop'
  },
  {
    name: 'jeans.jpg',
    url: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop'
  },
  {
    name: 'handbag.jpg',
    url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop'
  },
  {
    name: 'coffee-machine.jpg',
    url: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop'
  },
  {
    name: 'air-purifier.jpg',
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop'
  },
  {
    name: 'face-cream.jpg',
    url: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop'
  },
  {
    name: 'serum.jpg',
    url: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop'
  },
  {
    name: 'yoga-mat.jpg',
    url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop'
  },
  {
    name: 'dumbbells.jpg',
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop'
  }
];

function downloadImage(imageInfo, index) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imageDir, imageInfo.name);
    const file = fs.createWriteStream(filePath);
    
    console.log(`下载图片 ${index + 1}/15: ${imageInfo.name}`);
    
    https.get(imageInfo.url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✅ 下载完成: ${imageInfo.name}`);
        resolve(filePath);
      });
      
      file.on('error', (err) => {
        fs.unlink(filePath, () => {}); // 删除失败的文件
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('🚀 开始下载商品图片...');
  
  try {
    for (let i = 0; i < productImages.length; i++) {
      await downloadImage(productImages[i], i);
      // 添加延迟避免请求过快
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log('🎉 所有图片下载完成！');
    console.log(`图片保存在: ${path.resolve(imageDir)}`);
  } catch (error) {
    console.error('❌ 下载失败:', error);
  }
}

downloadAllImages();