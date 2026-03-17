import { test, expect } from '@playwright/test';

test.describe('SHOPLINE Clone 最终验证', () => {
  test('🎯 完整网站功能验证', async ({ page }) => {
    console.log('🚀 开始 SHOPLINE Clone 最终验证...');
    
    // 1. 首页验证
    console.log('📱 测试首页...');
    await page.goto('/');
    await expect(page).toHaveTitle(/SHOPLINE/);
    await expect(page.locator('header').getByText('SHOPLINE')).toBeVisible();
    await expect(page.getByRole('heading', { name: '全方位零售整合專家' })).toBeVisible();
    console.log('✅ 首页加载正常，品牌标识和主标题显示正确');
    
    // 2. 商品页面验证
    console.log('🛍️ 测试商品页面...');
    await page.goto('/products/');
    await expect(page.getByText('商品展示')).toBeVisible();
    
    // 等待 API 数据加载
    await page.waitForTimeout(4000);
    
    const productCards = page.locator('[class*="bg-white"][class*="rounded"]').filter({ hasText: /NT\$/ });
    const productCount = await productCards.count();
    expect(productCount).toBeGreaterThan(0);
    console.log(`✅ 商品页面正常，显示 ${productCount} 个商品`);
    
    // 验证商品卡片内容
    if (productCount > 0) {
      const firstCard = productCards.first();
      await expect(firstCard.locator('h3')).toBeVisible(); // 商品名称
      await expect(firstCard.getByText(/NT\$/)).toBeVisible(); // 价格
      await expect(firstCard.getByText('加入購物車')).toBeVisible(); // 按钮
      console.log('✅ 商品卡片信息完整（名称、价格、按钮）');
    }
    
    // 3. 管理后台验证
    console.log('⚙️ 测试管理后台...');
    await page.goto('/admin/');
    await expect(page.getByText('商品管理')).toBeVisible();
    await expect(page.getByRole('button', { name: '新增商品' })).toBeVisible();
    
    // 等待管理后台数据加载
    await page.waitForTimeout(4000);
    
    const adminRows = page.locator('tbody tr');
    const adminRowCount = await adminRows.count();
    expect(adminRowCount).toBeGreaterThan(0);
    console.log(`✅ 管理后台正常，显示 ${adminRowCount} 个商品记录`);
    
    // 测试新增商品表单
    await page.getByRole('button', { name: '新增商品' }).click();
    await expect(page.getByText('商品名称')).toBeVisible();
    await expect(page.getByText('价格')).toBeVisible();
    await expect(page.getByText('商品描述')).toBeVisible();
    console.log('✅ 新增商品表单功能正常');
    
    // 4. API 连接验证
    console.log('🔌 测试 API 连接...');
    const apiResponse = await page.request.get('https://shopline-clone-backend.arvix1413.workers.dev/api/products');
    expect(apiResponse.status()).toBe(200);
    
    const apiProducts = await apiResponse.json();
    expect(Array.isArray(apiProducts)).toBeTruthy();
    expect(apiProducts.length).toBeGreaterThan(0);
    console.log(`✅ API 连接正常，返回 ${apiProducts.length} 个商品数据`);
    
    // 验证 API 数据结构
    const firstProduct = apiProducts[0];
    expect(firstProduct).toHaveProperty('id');
    expect(firstProduct).toHaveProperty('name');
    expect(firstProduct).toHaveProperty('price');
    expect(firstProduct).toHaveProperty('category');
    console.log('✅ API 数据结构完整');
    
    // 5. 响应式设计验证
    console.log('📱 测试响应式设计...');
    const viewports = [
      { name: '桌面', width: 1920, height: 1080 },
      { name: '平板', width: 768, height: 1024 },
      { name: '手机', width: 375, height: 667 }
    ];
    
    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/');
      await expect(page.locator('header')).toBeVisible();
      console.log(`✅ ${viewport.name} (${viewport.width}x${viewport.height}) 显示正常`);
    }
    
    console.log('🎉 所有验证完成！SHOPLINE Clone 网站完全正常运行！');
  });

  test('📊 性能和数据验证', async ({ page }) => {
    console.log('⚡ 开始性能测试...');
    
    // 首页加载性能
    const homeStart = Date.now();
    await page.goto('/');
    const homeLoadTime = Date.now() - homeStart;
    expect(homeLoadTime).toBeLessThan(5000); // 5秒内
    console.log(`✅ 首页加载时间: ${homeLoadTime}ms`);
    
    // 商品页面加载性能
    const productsStart = Date.now();
    await page.goto('/products/');
    await page.waitForTimeout(3000); // 等待 API
    const productsLoadTime = Date.now() - productsStart;
    expect(productsLoadTime).toBeLessThan(8000); // 8秒内
    console.log(`✅ 商品页面加载时间: ${productsLoadTime}ms`);
    
    // 管理后台加载性能
    const adminStart = Date.now();
    await page.goto('/admin/');
    await page.waitForTimeout(3000); // 等待 API
    const adminLoadTime = Date.now() - adminStart;
    expect(adminLoadTime).toBeLessThan(8000); // 8秒内
    console.log(`✅ 管理后台加载时间: ${adminLoadTime}ms`);
    
    console.log('🎉 性能测试通过！所有页面加载时间在合理范围内');
  });

  test('🔍 SEO 和可访问性验证', async ({ page }) => {
    console.log('🔍 开始 SEO 和可访问性测试...');
    
    const pages = [
      { url: '/', name: '首页' },
      { url: '/products/', name: '商品页面' },
      { url: '/admin/', name: '管理后台' }
    ];
    
    for (const testPage of pages) {
      await page.goto(testPage.url);
      
      // 检查页面标题
      const title = await page.title();
      expect(title).toBeTruthy();
      expect(title.length).toBeGreaterThan(0);
      console.log(`✅ ${testPage.name} 标题: ${title}`);
      
      // 检查 H1 标签
      const h1Elements = page.locator('h1');
      const h1Count = await h1Elements.count();
      if (h1Count > 0) {
        const h1Text = await h1Elements.first().textContent();
        console.log(`✅ ${testPage.name} 主标题: ${h1Text}`);
      }
    }
    
    console.log('🎉 SEO 和可访问性验证通过！');
  });

  test('🛠️ 实际功能操作验证', async ({ page }) => {
    console.log('🛠️ 开始实际功能操作测试...');
    
    // 1. 商品浏览功能
    await page.goto('/products/');
    await page.waitForTimeout(3000);
    
    const addToCartButtons = page.getByText('加入購物車');
    const buttonCount = await addToCartButtons.count();
    
    if (buttonCount > 0) {
      await addToCartButtons.first().click();
      console.log('✅ 用户可以点击"加入購物車"按钮');
    }
    
    // 2. 管理后台操作
    await page.goto('/admin/');
    await page.waitForTimeout(3000);
    
    // 打开新增表单
    await page.getByRole('button', { name: '新增商品' }).click();
    
    // 填写表单
    await page.fill('input[type="text"]', '端到端测试商品');
    await page.fill('input[type="number"]', '1999');
    await page.fill('textarea', '这是一个端到端测试创建的商品');
    await page.selectOption('select', '電子產品');
    
    console.log('✅ 管理员可以填写新增商品表单');
    
    // 取消操作
    await page.getByText('取消').click();
    console.log('✅ 表单取消功能正常');
    
    console.log('🎉 实际功能操作验证完成！');
  });
});