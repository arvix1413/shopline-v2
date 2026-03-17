import { test, expect } from '@playwright/test';

test.describe('导航功能测试', () => {
  test('主页导航链接应该正常工作', async ({ page }) => {
    // 访问主页
    await page.goto('https://shopline-clone-frontend.pages.dev/');
    
    console.log('🏠 访问主页成功');
    
    // 测试 Header 中的 SHOPLINE logo 链接
    await page.locator('header').getByText('SHOPLINE').click();
    await expect(page).toHaveURL(/.*\//);
    console.log('✅ SHOPLINE logo 链接正常');
    
    // 测试 Header 中的"產品方案"链接
    await page.locator('header').getByText('產品方案').click();
    await expect(page).toHaveURL(/.*\/products/);
    console.log('✅ 產品方案链接跳转到商品页面');
    
    // 返回主页
    await page.goto('https://shopline-clone-frontend.pages.dev/');
    
    // 测试 Header 中的"管理後台"链接
    await page.locator('header').getByText('管理後台').click();
    await expect(page).toHaveURL(/.*\/admin/);
    console.log('✅ 管理後台链接跳转到管理页面');
    
    // 返回主页
    await page.goto('https://shopline-clone-frontend.pages.dev/');
    
    // 测试 Hero 区域的"查看商品"按钮
    await page.getByText('查看商品').first().click();
    await expect(page).toHaveURL(/.*\/products/);
    console.log('✅ Hero 区域查看商品按钮正常');
    
    // 返回主页
    await page.goto('https://shopline-clone-frontend.pages.dev/');
    
    // 测试 Hero 区域的"管理後台"按钮
    await page.getByText('管理後台').first().click();
    await expect(page).toHaveURL(/.*\/admin/);
    console.log('✅ Hero 区域管理後台按钮正常');
    
    // 返回主页
    await page.goto('https://shopline-clone-frontend.pages.dev/');
    
    // 测试 Features 区域的"了解所有方案"按钮
    await page.getByText('了解所有方案').click();
    await expect(page).toHaveURL(/.*\/products/);
    console.log('✅ 了解所有方案按钮正常');
    
    // 返回主页
    await page.goto('https://shopline-clone-frontend.pages.dev/');
    
    // 测试 Integration 区域的"了解更多"按钮
    await page.getByText('了解更多').click();
    await expect(page).toHaveURL(/.*\/products/);
    console.log('✅ 了解更多按钮正常');
    
    console.log('🎉 所有导航链接测试通过！');
  });

  test('移动端导航菜单应该正常工作', async ({ page }) => {
    // 设置移动端视口
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.goto('https://shopline-clone-frontend.pages.dev/');
    
    // 点击移动端菜单按钮
    const menuButton = page.locator('header button').last();
    await menuButton.click();
    
    // 检查移动端菜单是否显示
    await expect(page.getByText('產品方案').nth(1)).toBeVisible();
    console.log('✅ 移动端菜单显示正常');
    
    // 测试移动端菜单中的链接
    await page.getByText('產品方案').nth(1).click();
    await expect(page).toHaveURL(/.*\/products/);
    console.log('✅ 移动端產品方案链接正常');
    
    console.log('🎉 移动端导航测试通过！');
  });

  test('页面间导航应该保持一致性', async ({ page }) => {
    // 测试从主页到商品页面再到管理后台的导航流程
    await page.goto('https://shopline-clone-frontend.pages.dev/');
    
    // 主页 -> 商品页面
    await page.getByText('查看商品').first().click();
    await expect(page).toHaveURL(/.*\/products/);
    await expect(page.getByText('商品展示')).toBeVisible();
    console.log('✅ 主页到商品页面导航正常');
    
    // 商品页面 -> 管理后台
    await page.locator('header').getByText('管理後台').click();
    await expect(page).toHaveURL(/.*\/admin/);
    await expect(page.getByText('商品管理')).toBeVisible();
    console.log('✅ 商品页面到管理后台导航正常');
    
    // 管理后台 -> 主页
    await page.locator('header').getByText('SHOPLINE').click();
    await expect(page).toHaveURL(/.*\//);
    await expect(page.getByText('全方位零售整合專家')).toBeVisible();
    console.log('✅ 管理后台到主页导航正常');
    
    console.log('🎉 页面间导航一致性测试通过！');
  });
});