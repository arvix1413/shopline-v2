import { test, expect } from '@playwright/test';

test.describe('API 集成测试', () => {
  const API_BASE = 'https://shopline-clone-backend.arvix1413.workers.dev';

  test('应该能够获取商品列表', async ({ request }) => {
    const response = await request.get(`${API_BASE}/api/products`);
    
    expect(response.status()).toBe(200);
    
    const products = await response.json();
    expect(Array.isArray(products)).toBeTruthy();
    expect(products.length).toBeGreaterThan(0);
    
    // 检查商品数据结构
    const firstProduct = products[0];
    expect(firstProduct).toHaveProperty('id');
    expect(firstProduct).toHaveProperty('name');
    expect(firstProduct).toHaveProperty('price');
    expect(firstProduct).toHaveProperty('description');
    expect(firstProduct).toHaveProperty('category');
    expect(firstProduct).toHaveProperty('stock');
    expect(firstProduct).toHaveProperty('featured');
  });

  test('应该能够获取单个商品', async ({ request }) => {
    const response = await request.get(`${API_BASE}/api/products/1`);
    
    expect(response.status()).toBe(200);
    
    const product = await response.json();
    expect(product).toHaveProperty('id', 1);
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('price');
  });

  test('应该能够获取分类列表', async ({ request }) => {
    const response = await request.get(`${API_BASE}/api/categories`);
    
    expect(response.status()).toBe(200);
    
    const categories = await response.json();
    expect(Array.isArray(categories)).toBeTruthy();
  });

  test('应该能够获取用户列表', async ({ request }) => {
    const response = await request.get(`${API_BASE}/api/users`);
    
    expect(response.status()).toBe(200);
    
    const users = await response.json();
    expect(Array.isArray(users)).toBeTruthy();
  });

  test('应该能够获取订单列表', async ({ request }) => {
    const response = await request.get(`${API_BASE}/api/orders`);
    
    expect(response.status()).toBe(200);
    
    const orders = await response.json();
    expect(Array.isArray(orders)).toBeTruthy();
  });

  test('API 健康检查应该正常', async ({ request }) => {
    const response = await request.get(`${API_BASE}/`);
    
    expect(response.status()).toBe(200);
    
    const result = await response.json();
    expect(result).toHaveProperty('message');
    expect(result.message).toContain('SHOPLINE Clone API is running');
  });

  test('应该正确处理不存在的商品', async ({ request }) => {
    const response = await request.get(`${API_BASE}/api/products/99999`);
    
    expect(response.status()).toBe(404);
    
    const result = await response.json();
    expect(result).toHaveProperty('error');
  });

  test('应该支持 CORS', async ({ request }) => {
    const response = await request.options(`${API_BASE}/api/products`);
    
    // OPTIONS 请求应该成功或返回适当的 CORS 头
    expect([200, 204]).toContain(response.status());
  });

  test('前端应该能够成功调用 API', async ({ page }) => {
    // 监听网络请求
    const apiRequests: any[] = [];
    
    page.on('request', request => {
      if (request.url().includes('/api/')) {
        apiRequests.push({
          url: request.url(),
          method: request.method()
        });
      }
    });

    page.on('response', response => {
      if (response.url().includes('/api/')) {
        console.log(`API Response: ${response.status()} ${response.url()}`);
      }
    });

    // 访问商品页面
    await page.goto('/products/');
    
    // 等待 API 调用完成
    await page.waitForTimeout(5000);
    
    // 检查是否有 API 请求
    expect(apiRequests.length).toBeGreaterThan(0);
    
    // 检查是否调用了商品 API
    const productApiCall = apiRequests.find(req => 
      req.url.includes('/api/products') && req.method === 'GET'
    );
    expect(productApiCall).toBeDefined();
  });

  test('管理后台应该能够调用 API', async ({ page }) => {
    const apiRequests: any[] = [];
    
    page.on('request', request => {
      if (request.url().includes('/api/')) {
        apiRequests.push({
          url: request.url(),
          method: request.method()
        });
      }
    });

    // 访问管理后台
    await page.goto('/admin/');
    
    // 等待 API 调用完成
    await page.waitForTimeout(5000);
    
    // 检查是否有 API 请求
    expect(apiRequests.length).toBeGreaterThan(0);
  });

  test('应该能够创建新商品', async ({ request }) => {
    const newProduct = {
      name: '测试商品 E2E',
      description: '这是一个端到端测试创建的商品',
      price: 1999,
      imageUrl: 'https://example.com/test-product.jpg',
      category: '電子產品',
      stock: 50,
      featured: false
    };

    const response = await request.post(`${API_BASE}/api/products`, {
      data: newProduct
    });

    expect(response.status()).toBe(201);
    
    const createdProduct = await response.json();
    expect(createdProduct).toHaveProperty('id');
    expect(createdProduct.name).toBe(newProduct.name);
    expect(createdProduct.price).toBe(newProduct.price);
  });

  test('应该验证数据完整性', async ({ request }) => {
    // 获取所有商品
    const productsResponse = await request.get(`${API_BASE}/api/products`);
    const products = await productsResponse.json();
    
    // 验证每个商品的数据完整性
    for (const product of products.slice(0, 5)) { // 只检查前5个商品
      expect(product.id).toBeGreaterThan(0);
      expect(product.name).toBeTruthy();
      expect(product.price).toBeGreaterThan(0);
      expect(product.stock).toBeGreaterThanOrEqual(0);
      expect(typeof product.featured).toBe('boolean');
    }
  });
});