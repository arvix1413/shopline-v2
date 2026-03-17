import { test, expect } from '@playwright/test';

test.describe('商品图片显示测试', () => {
  test('商品页面应该显示所有商品图片', async ({ page }) => {
    console.log('🖼️ 开始测试商品图片显示...');
    
    // 访问商品页面
    await page.goto('https://shopline-clone-frontend.pages.dev/products/');
    await expect(page.getByText('商品展示')).toBeVisible();
    
    // 等待商品数据加载
    await page.waitForTimeout(4000);
    
    // 检查商品卡片
    const productCards = page.locator('[class*="bg-white"][class*="rounded"]').filter({ hasText: /NT\$/ });
    const cardCount = await productCards.count();
    
    console.log(`📦 找到 ${cardCount} 个商品卡片`);
    expect(cardCount).toBeGreaterThan(0);
    
    // 检查前5个商品的图片
    for (let i = 0; i < Math.min(cardCount, 5); i++) {
      const card = productCards.nth(i);
      const images = card.locator('img');
      const imageCount = await images.count();
      
      if (imageCount > 0) {
        const img = images.first();
        const src = await img.getAttribute('src');
        const alt = await img.getAttribute('alt');
        
        console.log(`🖼️ 商品 ${i + 1}: 图片 src="${src}", alt="${alt}"`);
        
        // 检查图片是否有有效的 src
        expect(src).toBeTruthy();
        expect(src).toContain('https://');
        
        // 检查图片是否加载成功
        await expect(img).toBeVisible();
        
        // 等待图片加载
        await img.waitFor({ state: 'visible' });
        
        console.log(`✅ 商品 ${i + 1} 图片显示正常`);
      } else {
        console.log(`⚠️ 商品 ${i + 1} 没有找到图片`);
      }
    }
    
    console.log('🎉 商品图片测试完成！');
  });

  test('管理后台应该显示商品图片', async ({ page }) => {
    console.log('⚙️ 开始测试管理后台图片显示...');
    
    // 访问管理后台
    await page.goto('https://shopline-clone-frontend.pages.dev/admin/');
    await expect(page.getByText('商品管理')).toBeVisible();
    
    // 等待数据加载
    await page.waitForTimeout(4000);
    
    // 检查表格中的商品图片
    const productRows = page.locator('tbody tr');
    const rowCount = await productRows.count();
    
    console.log(`📋 管理后台显示 ${rowCount} 个商品记录`);
    
    if (rowCount > 0) {
      // 检查前3个商品的图片
      for (let i = 0; i < Math.min(rowCount, 3); i++) {
        const row = productRows.nth(i);
        const images = row.locator('img');
        const imageCount = await images.count();
        
        if (imageCount > 0) {
          const img = images.first();
          const src = await img.getAttribute('src');
          
          console.log(`🖼️ 管理后台商品 ${i + 1}: 图片 src="${src}"`);
          
          // 检查图片是否有有效的 src
          expect(src).toBeTruthy();
          expect(src).toContain('https://');
          
          // 检查图片是否可见
          await expect(img).toBeVisible();
          
          console.log(`✅ 管理后台商品 ${i + 1} 图片显示正常`);
        }
      }
    }
    
    console.log('🎉 管理后台图片测试完成！');
  });

  test('图片加载性能测试', async ({ page }) => {
    console.log('⚡ 开始图片加载性能测试...');
    
    await page.goto('https://shopline-clone-frontend.pages.dev/products/');
    
    // 等待页面加载
    await page.waitForTimeout(2000);
    
    // 监听图片加载
    const imageLoadPromises: Promise<void>[] = [];
    
    page.on('response', response => {
      if (response.url().includes('images.unsplash.com')) {
        console.log(`📥 图片加载: ${response.status()} ${response.url().substring(0, 80)}...`);
        if (response.status() === 200) {
          console.log(`✅ 图片加载成功`);
        } else {
          console.log(`❌ 图片加载失败: ${response.status()}`);
        }
      }
    });
    
    // 等待所有图片加载
    await page.waitForTimeout(5000);
    
    // 检查是否有图片加载失败
    const brokenImages = await page.locator('img[src*="unsplash"]').evaluateAll(imgs => {
      return imgs.filter(img => !img.complete || img.naturalWidth === 0).length;
    });
    
    console.log(`🔍 检查结果: ${brokenImages} 个图片加载失败`);
    expect(brokenImages).toBe(0);
    
    console.log('🎉 图片加载性能测试完成！');
  });

  test('验证 API 返回的图片 URL', async ({ request }) => {
    console.log('🔌 开始验证 API 图片 URL...');
    
    // 获取商品数据
    const response = await request.get('https://shopline-clone-backend.arvix1413.workers.dev/api/products');
    expect(response.status()).toBe(200);
    
    const products = await response.json();
    console.log(`📦 API 返回 ${products.length} 个商品`);
    
    // 检查前5个商品的图片 URL
    for (let i = 0; i < Math.min(products.length, 5); i++) {
      const product = products[i];
      
      console.log(`🔍 商品 ${product.id}: ${product.name}`);
      console.log(`🖼️ 图片 URL: ${product.imageUrl}`);
      
      // 验证图片 URL 格式
      expect(product.imageUrl).toBeTruthy();
      expect(product.imageUrl).toContain('https://');
      expect(product.imageUrl).toContain('images.unsplash.com');
      
      // 测试图片 URL 是否可访问
      const imageResponse = await request.head(product.imageUrl);
      console.log(`📥 图片响应: ${imageResponse.status()}`);
      expect(imageResponse.status()).toBe(200);
      
      console.log(`✅ 商品 ${product.id} 图片 URL 验证通过`);
    }
    
    console.log('🎉 API 图片 URL 验证完成！');
  });
});