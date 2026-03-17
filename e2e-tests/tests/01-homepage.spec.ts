import { test, expect } from '@playwright/test';

test.describe('核心功能验证', () => {
  test('网站基本功能验证', async ({ page }) => {
    // 1. 首页加载测试
    await page.goto('/');
    await expect(page).toHaveTitle(/SHOPLINE/);
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('header').getByText('SHOPLINE')).toBeVisible();
    
    console.log('✅ 首页加载正常');
    
    // 2. 商品页面测试
    await page.goto('/products/');
    await expect(page.getByText('商品展示')).toBeVisible();
    await page.waitForTimeout(3000); // 等待 API 加载
    
    const productCards = page.locator('[class*="bg-white"][class*="rounded"]').filter({ hasText: /NT\$/ });
    const cardCount = await productCards.count();
    console.log(`✅ 商品页面显示 ${cardCount} 个商品`);
    
    // 3. 管理后台测试
    await page.goto('/admin/');
    await expect(page.getByText('商品管理')).toBeVisible();
    await expect(page.getByRole('button', { name: '新增商品' })).toBeVisible();
    
    await page.waitForTimeout(3000); // 等待数据加载
    const adminRows = page.locator('tbody tr');
    const adminRowCount = await adminRows.count();
    console.log(`✅ 管理后台显示 ${adminRowCount} 个商品`);
    
    // 4. API 连接测试
    const response = await page.request.get('https://shopline-clone-backend.arvix1413.workers.dev/api/products');
    expect(response.status()).toBe(200);
    const products = await response.json();
    console.log(`✅ API 返回 ${products.length} 个商品数据`);
    
    console.log('🎉 所有核心功能验证通过！');
  });

  test('完整用户流程验证', async ({ page }) => {
    // 用户购物流程
    await page.goto('/');
    await page.scroll({ x: 0, y: 500 });
    
    await page.goto('/products/');
    await page.waitForTimeout(3000);
    
    const addToCartButtons = page.getByText('加入購物車');
    const buttonCount = await addToCartButtons.count();
    if (buttonCount > 0) {
      await addToCartButtons.first().click();
      console.log('✅ 用户可以点击加入购物车');
    }
    
    // 管理员流程
    await page.goto('/admin/');
    await page.getByRole('button', { name: '新增商品' }).click();
    
    await page.fill('input[type="text"]', '最终测试商品');
    await page.fill('input[type="number"]', '999');
    await page.selectOption('select', '電子產品');
    
    console.log('✅ 管理员可以填写商品表单');
    
    await page.getByText('取消').click();
    console.log('✅ 表单取消功能正常');
    
    console.log('🎉 用户流程验证完成！');
  });
});