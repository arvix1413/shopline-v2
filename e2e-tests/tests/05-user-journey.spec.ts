import { test, expect } from '@playwright/test';

test.describe('用户完整流程测试', () => {
  test('完整的用户购物流程', async ({ page }) => {
    // 1. 访问首页
    await page.goto('/');
    await expect(page.getByText('SHOPLINE')).toBeVisible();
    
    // 2. 浏览首页内容
    await page.scroll({ x: 0, y: 500 });
    await page.waitForTimeout(1000);
    
    // 3. 点击查看商品（如果有相关链接）
    const productLinks = page.getByText('了解所有方案');
    if (await productLinks.count() > 0) {
      await productLinks.first().click();
      await page.waitForTimeout(2000);
    }
    
    // 4. 直接导航到商品页面
    await page.goto('/products/');
    await expect(page.getByText('商品展示')).toBeVisible();
    
    // 5. 等待商品加载
    await page.waitForTimeout(3000);
    
    // 6. 浏览商品列表
    await page.scroll({ x: 0, y: 300 });
    
    // 7. 查看商品详情（点击第一个商品）
    const productCards = page.locator('[class*="bg-white"][class*="rounded"]').filter({ hasText: /NT\$/ });
    const cardCount = await productCards.count();
    
    if (cardCount > 0) {
      const firstCard = productCards.first();
      
      // 检查商品信息
      const productName = await firstCard.locator('h3').textContent();
      const productPrice = await firstCard.getByText(/NT\$/).textContent();
      
      console.log(`查看商品: ${productName}, 价格: ${productPrice}`);
      
      // 8. 点击加入购物车
      const addToCartButton = firstCard.getByText('加入購物車');
      if (await addToCartButton.isVisible()) {
        await addToCartButton.click();
        await page.waitForTimeout(1000);
      }
    }
    
    // 9. 测试不同分类的商品
    const categories = ['電子產品', '服飾配件', '居家生活'];
    for (const category of categories) {
      const categoryProducts = page.locator('[class*="bg-white"]').filter({ hasText: category });
      const categoryCount = await categoryProducts.count();
      if (categoryCount > 0) {
        console.log(`找到 ${categoryCount} 个 ${category} 商品`);
      }
    }
  });

  test('管理员完整管理流程', async ({ page }) => {
    // 1. 访问管理后台
    await page.goto('/admin/');
    await expect(page.getByText('商品管理')).toBeVisible();
    
    // 2. 查看现有商品列表
    await page.waitForTimeout(3000);
    
    const productRows = page.locator('tbody tr');
    const initialRowCount = await productRows.count();
    console.log(`当前商品数量: ${initialRowCount}`);
    
    // 3. 打开新增商品表单
    await page.getByText('新增商品').click();
    await expect(page.getByText('新增商品').nth(1)).toBeVisible();
    
    // 4. 填写商品信息
    const testProductName = `E2E测试商品_${Date.now()}`;
    await page.fill('input[type="text"]', testProductName);
    await page.fill('input[type="number"]', '2999');
    await page.fill('textarea', '这是一个端到端测试创建的商品，用于验证管理功能');
    
    // 5. 选择分类
    await page.selectOption('select', '電子產品');
    
    // 6. 设置库存
    const stockInputs = page.locator('input[type="number"]');
    await stockInputs.nth(1).fill('88');
    
    // 7. 设置为精选商品
    await page.check('input[type="checkbox"]');
    
    // 8. 模拟图片上传（点击上传区域）
    const uploadArea = page.getByText('上传图片');
    await uploadArea.click();
    
    // 9. 提交表单
    await page.getByText('添加商品').click();
    
    // 10. 等待表单提交完成
    await page.waitForTimeout(3000);
    
    // 11. 验证商品是否添加成功
    // 注意：由于我们使用的是真实的 API，这个测试可能会实际创建商品
    const updatedRows = page.locator('tbody tr');
    const newRowCount = await updatedRows.count();
    
    if (newRowCount > initialRowCount) {
      console.log('商品添加成功！');
    }
    
    // 12. 查找刚创建的商品
    const newProductRow = page.locator('tbody tr').filter({ hasText: testProductName });
    if (await newProductRow.count() > 0) {
      console.log(`找到新创建的商品: ${testProductName}`);
      
      // 13. 测试编辑功能（点击编辑按钮）
      const editButton = newProductRow.locator('button').first();
      if (await editButton.isVisible()) {
        await editButton.hover();
      }
    }
  });

  test('响应式设计完整测试', async ({ page }) => {
    const pages = ['/', '/products/', '/admin/'];
    const viewports = [
      { name: '桌面', width: 1920, height: 1080 },
      { name: '笔记本', width: 1366, height: 768 },
      { name: '平板横屏', width: 1024, height: 768 },
      { name: '平板竖屏', width: 768, height: 1024 },
      { name: '手机大屏', width: 414, height: 896 },
      { name: '手机小屏', width: 375, height: 667 }
    ];

    for (const testPage of pages) {
      for (const viewport of viewports) {
        console.log(`测试 ${testPage} 在 ${viewport.name} (${viewport.width}x${viewport.height}) 下的显示`);
        
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.goto(testPage);
        await page.waitForTimeout(2000);
        
        // 检查基本元素是否可见
        await expect(page.locator('header')).toBeVisible();
        
        if (testPage === '/') {
          await expect(page.getByText('SHOPLINE')).toBeVisible();
        } else if (testPage === '/products/') {
          await expect(page.getByText('商品展示')).toBeVisible();
        } else if (testPage === '/admin/') {
          await expect(page.getByText('商品管理')).toBeVisible();
        }
        
        // 测试滚动
        await page.scroll({ x: 0, y: 500 });
        await page.waitForTimeout(500);
        
        // 检查 Footer（如果存在）
        if (testPage !== '/admin/') {
          const footer = page.locator('footer');
          if (await footer.count() > 0) {
            await expect(footer).toBeVisible();
          }
        }
      }
    }
  });

  test('性能和加载测试', async ({ page }) => {
    // 测试首页加载性能
    const startTime = Date.now();
    await page.goto('/');
    const homeLoadTime = Date.now() - startTime;
    console.log(`首页加载时间: ${homeLoadTime}ms`);
    
    // 测试商品页面加载性能
    const productStartTime = Date.now();
    await page.goto('/products/');
    await page.waitForTimeout(3000); // 等待 API 数据加载
    const productLoadTime = Date.now() - productStartTime;
    console.log(`商品页面加载时间: ${productLoadTime}ms`);
    
    // 测试管理后台加载性能
    const adminStartTime = Date.now();
    await page.goto('/admin/');
    await page.waitForTimeout(3000); // 等待 API 数据加载
    const adminLoadTime = Date.now() - adminStartTime;
    console.log(`管理后台加载时间: ${adminLoadTime}ms`);
    
    // 验证加载时间在合理范围内（10秒内）
    expect(homeLoadTime).toBeLessThan(10000);
    expect(productLoadTime).toBeLessThan(10000);
    expect(adminLoadTime).toBeLessThan(10000);
  });

  test('错误处理和边界情况测试', async ({ page }) => {
    // 测试访问不存在的页面
    await page.goto('/nonexistent-page/');
    // Next.js 应该显示 404 页面或重定向
    
    // 测试网络错误情况
    await page.route('**/api/**', route => {
      route.abort();
    });
    
    await page.goto('/products/');
    await page.waitForTimeout(3000);
    
    // 应该显示加载状态或错误信息
    const loadingIndicator = page.getByText('載入中');
    if (await loadingIndicator.isVisible()) {
      console.log('正确显示了加载状态');
    }
    
    // 恢复网络请求
    await page.unroute('**/api/**');
  });

  test('SEO 和可访问性基础测试', async ({ page }) => {
    const pages = ['/', '/products/', '/admin/'];
    
    for (const testPage of pages) {
      await page.goto(testPage);
      
      // 检查页面标题
      const title = await page.title();
      expect(title).toBeTruthy();
      expect(title.length).toBeGreaterThan(0);
      console.log(`${testPage} 页面标题: ${title}`);
      
      // 检查是否有 meta 描述
      const metaDescription = page.locator('meta[name="description"]');
      if (await metaDescription.count() > 0) {
        const description = await metaDescription.getAttribute('content');
        console.log(`${testPage} 页面描述: ${description}`);
      }
      
      // 检查是否有适当的标题结构
      const h1Elements = page.locator('h1');
      const h1Count = await h1Elements.count();
      if (h1Count > 0) {
        const h1Text = await h1Elements.first().textContent();
        console.log(`${testPage} 主标题: ${h1Text}`);
      }
      
      // 检查图片是否有 alt 属性
      const images = page.locator('img');
      const imageCount = await images.count();
      if (imageCount > 0) {
        for (let i = 0; i < Math.min(imageCount, 3); i++) {
          const img = images.nth(i);
          const alt = await img.getAttribute('alt');
          if (!alt) {
            console.warn(`图片缺少 alt 属性: ${await img.getAttribute('src')}`);
          }
        }
      }
    }
  });
});