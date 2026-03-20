const { chromium } = require('playwright');

const BASE = 'https://shopline-frontend.pages.dev';

// All pages linked from nav/footer/buttons
const internalPages = [
  '/',
  '/solutions',
  '/solutions/traffic-and-conversion',
  '/solutions/member-repurchase',
  '/solutions/omo',
  '/solutions/shop-efficiency',
  '/solutions/data-analysis',
  '/online-store',
  '/online-store/features',
  '/online-store/shop-builder',
  '/showcase',
  '/templates',
  '/social-commerce',
  '/social-commerce/features',
  '/social-commerce/instagram-live',
  '/pos',
  '/pos/features',
  '/pos/hardware',
  '/targeted-marketing',
  '/line-solution',
  '/group-buying',
  '/shoplytics',
  '/payments',
  '/smart-omo',
  '/shopper-app',
  '/about/pricing',
  '/changelog',
  '/about',
  '/consultation',
  '/seminar',
  '/online-store-setup',
  '/faq/overview',
  '/apps',
  '/login',
  '/trial',
  '/trial-redirect',
  '/register',
  '/forgot-password',
  '/profile',
  '/settings',
  '/about/press',
  '/about/sitemap',
  '/about/privacy',
  '/about/terms',
  '/compliance-center',
  '/cooperate',
  '/selectedpartners',
  '/cart',
  '/admin',
  '/products',
];

async function checkUrl(page, url) {
  try {
    const res = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
    const status = res?.status();
    await page.waitForTimeout(300);
    const is404 = await page.evaluate(() => {
      const title = document.title;
      const h1 = document.querySelector('h1');
      return title.includes('404') || (h1 && h1.textContent.trim() === '404');
    });
    return { url, status, is404 };
  } catch (e) {
    return { url, status: 'error', error: e.message, is404: true };
  }
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log('=== Scanning shopline-frontend.pages.dev ===\n');

  const results = [];
  for (const path of internalPages) {
    const url = BASE + path;
    const result = await checkUrl(page, url);
    const icon = result.is404 ? '❌' : '✅';
    console.log(`${icon} ${result.status} ${path}`);
    results.push(result);
  }

  const broken404 = results.filter(r => r.is404);
  console.log(`\n=== Summary ===`);
  console.log(`Total checked: ${results.length}`);
  console.log(`✅ OK: ${results.length - broken404.length}`);
  console.log(`❌ 404/error: ${broken404.length}`);
  if (broken404.length > 0) {
    console.log('\nBroken pages:');
    broken404.forEach(r => console.log(`  ❌ ${r.url}`));
  }

  await browser.close();
})();
