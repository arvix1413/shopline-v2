import { test, expect } from '@playwright/test'

const EMAIL = `e2e_${Date.now()}@test.com`
const PASSWORD = 'test1234'
// Fixed account for login test (pre-registered or registered in first test)
const FIXED_EMAIL = 'e2e_fixed@test.com'
const FIXED_PASSWORD = 'test1234'

test.describe('Auth flow', () => {
  test('register → auto login → trial page accessible', async ({ page }) => {
    // 1. Go to register
    await page.goto('/register')
    await expect(page.locator('input[type="email"]')).toBeVisible()

    // 2. Fill form and submit
    await page.fill('input[type="email"]', EMAIL)
    await page.fill('input[type="password"]', PASSWORD)
    await page.click('button[type="submit"]')

    // 3. Should redirect to home page after register
    await page.waitForURL('/', { timeout: 10000 })
    console.log('✅ Register redirected to home')

    // 4. Check localStorage has token
    const token = await page.evaluate(() => localStorage.getItem('token'))
    console.log('Token in localStorage:', token ? token.slice(0, 30) + '...' : 'NULL')
    expect(token).not.toBeNull()

    // 5. Check user in localStorage
    const userStr = await page.evaluate(() => localStorage.getItem('user'))
    console.log('User in localStorage:', userStr)
    expect(userStr).not.toBeNull()

    // 6. Check header shows user name (not login button)
    await page.waitForTimeout(1000) // wait for hydration
    const loginBtn = page.locator('a[href="/login"]').first()
    const isLoginVisible = await loginBtn.isVisible()
    console.log('Login button visible after register:', isLoginVisible)
    expect(isLoginVisible).toBe(false)

    // 7. Navigate to /trial directly
    await page.goto('/trial')
    await page.waitForTimeout(2000)
    const currentUrl = page.url()
    console.log('URL after navigating to /trial:', currentUrl)
    expect(currentUrl).toContain('/trial')

    // 8. Check trial page content
    await expect(page.locator('text=系統試用中心')).toBeVisible({ timeout: 5000 })
    console.log('✅ Trial page loaded successfully')
  })

  test('login → trial page accessible', async ({ page }) => {
    // 1. Ensure account exists first
    await fetch('https://shopline-backend.arvix1413.workers.dev/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: FIXED_EMAIL, password: FIXED_PASSWORD, shopName: 'E2E Fixed' }),
    }).catch(() => {}) // ignore if already exists

    // 2. Go to login
    await page.goto('/login')

    // 3. Login
    await page.fill('input[type="email"]', FIXED_EMAIL)
    await page.fill('input[type="password"]', FIXED_PASSWORD)
    await page.click('button[type="submit"]')

    // 3. Should redirect to home
    await page.waitForURL('/', { timeout: 10000 })
    console.log('✅ Login redirected to home')

    // 4. Check token
    const token = await page.evaluate(() => localStorage.getItem('token'))
    expect(token).not.toBeNull()

    // 5. Click trial button in hero
    const trialBtn = page.locator('a[href="/trial"]').first()
    await expect(trialBtn).toBeVisible({ timeout: 5000 })
    console.log('✅ Trial button visible in hero')
    await trialBtn.click()

    // 6. Should be on trial page
    await page.waitForURL('/trial', { timeout: 5000 })
    await expect(page.locator('text=系統試用中心')).toBeVisible()
    console.log('✅ Trial page accessible after login')
  })

  test('unauthenticated user redirected from /trial to /login', async ({ page }) => {
    // Clear storage
    await page.goto('/')
    await page.evaluate(() => { localStorage.clear() })

    // Try to access /trial
    await page.goto('/trial')
    await page.waitForTimeout(2000)
    const url = page.url()
    console.log('URL after unauthenticated /trial access:', url)
    expect(url).toContain('/login')
    console.log('✅ Unauthenticated user correctly redirected to login')
  })
})
