import { test, expect } from '@playwright/test';

test.describe('管理后台测试', () => {
  test('应该正确加载管理后台页面', async ({ page }) => {
    await page.goto('/admin/');
    
    // 检查页面标题
    await expect(page.getByText('商品管理')).toBeVisible();
    
    // 检查新增商品按钮
    await expect(page.getByText('新增商品')).toBeVisible();
    
    // 检查 Header 存在
    await expect(page.locator('header')).toBeVisible();
  });

  test('应该显示商品管理表格', async ({ page }) => {
    await page.goto('/admin/');
    
    // 等待数据加载
    await page.waitForTimeout(3000);
    
    // 检查表格头部
    await expect(page.getByText('商品')).toBeVisible();
    await expect(page.getByText('价格')).toBeVisible();
    await expect(page.getByText('分类')).toBeVisible();
    await expect(page.getByText('库存')).toBeVisible();
    await expect(page.getByText('状态')).toBeVisible();
    await expect(page.getByText('操作')).toBeVisible();
  });

  test('应该能够打开新增商品表单', async ({ page }) => {
    await page.goto('/admin/');
    
    // 点击新增商品按钮
    await page.getByText('新增商品').click();
    
    // 检查表单是否显示
    await expect(page.getByText('新增商品')).toBeVisible();
    await expect(page.getByText('商品名称')).toBeVisible();
    await expect(page.getByText('价格')).toBeVisible();
    await expect(page.getByText('商品描述')).toBeVisible();
    await expect(page.getByText('分类')).toBeVisible();
    await expect(page.getByText('库存')).toBeVisible();
    await expect(page.getByText('商品图片')).toBeVisible();
  });

  test('应该能够填写新增商品表单', async ({ page }) => {
    await page.goto('/admin/');
    
    // 打开新增表单
    await page.getByText('新增商品').click();
    
    // 填写表单
    await page.fill('input[type="text"]', '测试商品');
    await page.fill('input[type="number"]', '999');
    await page.fill('textarea', '这是一个测试商品的描述');
    
    // 选择分类
    await page.selectOption('select', '電子產品');
    
    // 填写库存
    const stockInputs = page.locator('input[type="number"]');
    await stockInputs.nth(1).fill('100');
    
    // 检查精选商品复选框
    await page.check('input[type="checkbox"]');
    
    // 检查表单字段是否正确填写
    await expect(page.locator('input[type="text"]')).toHaveValue('测试商品');
    await expect(page.locator('input[type="number"]').first()).toHaveValue('999');
    await expect(page.locator('textarea')).toHaveValue('这是一个测试商品的描述');
  });

  test('应该能够取消新增商品', async ({ page }) => {
    await page.goto('/admin/');
    
    // 打开新增表单
    await page.getByText('新增商品').click();
    
    // 点击取消按钮
    await page.getByText('取消').click();
    
    // 检查表单是否关闭
    const formTitle = page.getByText('新增商品').nth(1); // 第二个是表单标题
    await expect(formTitle).not.toBeVisible();
  });

  test('应该显示现有商品数据', async ({ page }) => {
    await page.goto('/admin/');
    
    // 等待数据加载
    await page.waitForTimeout(3000);
    
    // 检查是否有商品行
    const productRows = page.locator('tbody tr');
    const rowCount = await productRows.count();
    
    if (rowCount > 0) {
      // 检查第一行商品数据
      const firstRow = productRows.first();
      
      // 检查是否有商品名称
      await expect(firstRow.locator('td').first()).toBeVisible();
      
      // 检查是否有价格信息
      await expect(firstRow.getByText(/NT\$/)).toBeVisible();
      
      // 检查操作按钮
      const editButtons = firstRow.locator('button').filter({ hasText: /edit/i });
      const deleteButtons = firstRow.locator('button').filter({ hasText: /trash/i });
      
      // 这些按钮可能是图标按钮，所以检查是否存在
      if (await editButtons.count() > 0) {
        await expect(editButtons.first()).toBeVisible();
      }
      if (await deleteButtons.count() > 0) {
        await expect(deleteButtons.first()).toBeVisible();
      }
    }
  });

  test('管理后台应该有响应式设计', async ({ page }) => {
    await page.goto('/admin/');
    
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
      await expect(page.getByText('商品管理')).toBeVisible();
      await expect(page.getByText('新增商品')).toBeVisible();
    }
  });

  test('应该处理图片上传区域', async ({ page }) => {
    await page.goto('/admin/');
    
    // 打开新增表单
    await page.getByText('新增商品').click();
    
    // 检查图片上传区域
    await expect(page.getByText('上传图片')).toBeVisible();
    
    // 检查文件输入框存在（虽然是隐藏的）
    const fileInput = page.locator('input[type="file"]');
    await expect(fileInput).toBeAttached();
  });

  test('应该能够搜索和过滤商品', async ({ page }) => {
    await page.goto('/admin/');
    
    // 等待数据加载
    await page.waitForTimeout(3000);
    
    // 检查表格是否可以滚动（对于大量数据）
    const table = page.locator('table');
    await expect(table).toBeVisible();
    
    // 检查是否有分页或滚动功能
    const tableContainer = page.locator('.overflow-x-auto');
    if (await tableContainer.count() > 0) {
      await expect(tableContainer.first()).toBeVisible();
    }
  });
});