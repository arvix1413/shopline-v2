/** Reserved top-level paths that must not become brand store slugs */
export const RESERVED_STORE_SLUGS = new Set([
  'about', 'admin', 'api', 'apps', 'cart', 'changelog', 'compliance-center',
  'components', 'consultation', 'contact', 'cooperate', 'faq', 'forgot-password',
  'group-buying', 'line-solution', 'login', 'online-store', 'online-store-setup',
  'payments', 'pos', 'products', 'profile', 'register', 'reset-password',
  'selectedpartners', 'seminar', 'settings', 'shoplytics', 'shopper-app',
  'showcase', 'smart-omo', 'social-commerce', 'solutions', 'targeted-marketing',
  'templates', 'trial', 'trial-redirect', 'billing', 's', 'store', 'stores', 'www', 'shop',
  'static', 'assets', 'favicon.ico', 'robots.txt', 'sitemap.xml', '_next',
])

export function slugifyBrand(input: string): string {
  const raw = (input || '').trim().toLowerCase()
  let slug = raw
    .replace(/[\s_]+/g, '-')
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
  if (slug.length > 48) slug = slug.slice(0, 48).replace(/-$/, '')
  return slug
}
