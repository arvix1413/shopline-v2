const fs = require('fs');
const path = require('path');

// 图片文件映射到商品ID
const imageMapping = [
  { id: 1, file: 'iphone15-pro.jpg', name: 'iPhone 15 Pro' },
  { id: 2, file: 'macbook-air-m2.jpg', name: 'MacBook Air M2' },
  { id: 3, file: 'airpods-pro.jpg', name: 'AirPods Pro' },
  { id: 4, file: 'fashion-jacket.jpg', name: '時尚外套' },
  { id: 5, file: 'sports-shoes.jpg', name: '運動鞋' },
  { id: 6, file: 'smart-watch.jpg', name: '智能手錶' },
  { id: 7, file: 'bluetooth-speaker.jpg', name: '藍牙喇叭' },
  { id: 8, file: 'jeans.jpg', name: '牛仔褲' },
  { id: 9, file: 'handbag.jpg', name: '手提包' },
  { id: 10, file: 'coffee-machine.jpg', name: '咖啡機' },
  { id: 11, file: 'air-purifier.jpg', name: '空氣清淨機' },
  { id: 12, file: 'face-cream.jpg', name: '保濕面霜' },
  { id: 13, file: 'serum.jpg', name: '精華液' },
  { id: 14, file: 'yoga-mat.jpg', name: '瑜伽墊' },
  { id: 15, file: 'dumbbells.jpg', name: '啞鈴組' }
];

async function uploadImageToR2(filePath, fileName) {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    
    // 使用 fetch API 上传到 R2
    const formData = new FormData();
    const blob = new Blob([fileBuffer], { type: 'image/jpeg' });
    formData.append('file', blob, fileName);
    
    const response = await fetch('https://shopline-clone-backend.arvix1413.workers.dev/api/upload', {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }
    
    const result = await response.json();
    return result.imageUrl;
  } catch (error) {
    console.error(`❌ 上传失败 ${fileName}:`, error);
    return null;
  }
}

async function updateProductImage(productId, imageUrl) {
  try {
    const response = await fetch(`https://shopline-clone-backend.arvix1413.workers.dev/api/products/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ imageUrl })
    });
    
    if (!response.ok) {
      throw new Error(`Update failed: ${response.statusText}`);
    }
    
    return true;
  } catch (error) {
    console.error(`❌ 更新商品 ${productId} 失败:`, error);
    return false;
  }
}

async function uploadAllImages() {
  console.log('🚀 开始上传图片到 R2 存储...');
  
  const imageDir = './product-images';
  const uploadedImages = [];
  
  for (const mapping of imageMapping) {
    const filePath = path.join(imageDir, mapping.file);
    
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️ 文件不存在: ${mapping.file}`);
      continue;
    }
    
    console.log(`📤 上传图片 ${mapping.id}/15: ${mapping.name} (${mapping.file})`);
    
    const imageUrl = await uploadImageToR2(filePath, mapping.file);
    
    if (imageUrl) {
      console.log(`✅ 上传成功: ${imageUrl}`);
      uploadedImages.push({
        id: mapping.id,
        name: mapping.name,
        imageUrl: imageUrl
      });
    }
    
    // 添加延迟避免请求过快
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  console.log('🎉 所有图片上传完成！');
  console.log('上传的图片:', uploadedImages);
  
  return uploadedImages;
}

// 如果直接运行此脚本
if (require.main === module) {
  uploadAllImages().catch(console.error);
}

module.exports = { uploadAllImages, imageMapping };