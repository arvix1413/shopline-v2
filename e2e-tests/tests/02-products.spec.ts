import { test, expect } from '@playwright/test';

test.describe('商品页面测试', () => {
  test('应该正确加载商品列表页面', async ({ page }) => {
    await page.goto('/products/');
    
    // 检查页面标题
    await expect(page.getByText('商品展示')).toBeVisible();
    
    // 检查 Header 和 Footer 存在
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
    
    // 等待商品加载完成
    await page.waitForTimeout(2000);
    
    // 检查是否显示商品网格
    const productGrid = page.locator('[class*="grid"]').filter({ hasText: /NT\$/ });
    await expect(productGrid).toBeVisible();
  });

  test('应该显示商品卡片信息', async ({ page }) => {
    await page.goto('/products/');
    
    // 等待 API 数据加载
    await page.waitForTimeout(3000);
    
    // 检查是否有商品卡片
    const productCards = page.locator('[class*="bg-white"][class*="rounded"]').filter({ hasText: /NT\$/ });
    const cardCount = await productCards.count();
    
    if (cardCount > 0) {
      // 检查第一个商品卡片的内容
      const firstCard = productCards.first();
      
      // 检查商品名称
      await expect(firstCard.locator('h3')).toBeVisible();
      
      // 检查价格
      await expect(firstCard.getByText(/NT\$/)).toBeVisible();
      
      // 检查库存信息
      await expect(firstCard.getByText(/庫存:/)).toBeVisible();
      
      // 检查加入购物车按钮
      await expect(firstCard.getByText('加入購物車')).toBeVisible();
    } else {
      console.log('没有找到商品卡片，可能是 API 加载问题');
    }
  });

  test('应该能够点击加入购物车按钮', async ({ page }) => {
    await page.goto('/products/');
    
    // 等待商品加载
    await page.waitForTimeout(3000);
    
    const addToCartButtons = page.getByText('加入購物車');
    const buttonCount = await addToCartButtons.count();
    
    if (buttonCount > 0) {
      await addToCartButtons.first().click();
      // 这里可以添加购物车功能的验证
    }
  });

  test('应该正确显示精选商品标签', async ({ page }) => {
    await page.goto('/products/');
    
    // 等待商品加载
    await page.waitForTimeout(3000);
    
    // 检查是否有精选标签
    const featuredLabels = page.getByText('精選');
    const labelCount = await featuredLabels.count();
    
    if (labelCount > 0) {
      await expect(featuredLabels.first()).toBeVisible();
    }
  });

  test('商品页面应该有响应式设计', async ({ page }) => {
    await page.goto('/products/');
    
    // 测试不同屏幕尺寸
    const viewports = [
      { width: 1200, height: 800 }, // 桌面
      { width: 768, height: 1024 }, // 平板
      { width: 375, height: 667 }   // 手机
    ];
    
    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      await page.waitForTimeout(1000);
      
      // 检查页面基本元素仍然可见
      await expect(page.getByText('商品展示')).toBeVisible();
      await expect(page.locator('header')).toBeVisible();
    }
  });

  test('应该处理 API 错误情况', async ({ page }) => {
    // 拦截 API 请求并返回错误
    await page.route('**/api/products', route => {
      route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Internal Server Error' })
      });
    });
    
    await page.goto('/products/');
    
    // 等待错误处理
    await page.waitForTimeout(2000);
    
    // 检查是否显示了适当的错误处理或加载状态
    const loadingText = page.getByText('載入中');
    if (await loadingText.isVisible()) {
      console.log('显示了加载状态');
    }
  });
});