/** Canonical public URLs for a merchant storefront (keeps ?slug= brand param). */

export function storeHomeUrl(storeSlug: string) {
  return `/s/shop?slug=${encodeURIComponent(storeSlug)}`
}

export function storeProductsUrl(storeSlug: string) {
  return `/s/shop/products?slug=${encodeURIComponent(storeSlug)}`
}

export function storePageUrl(storeSlug: string, pageKey: string) {
  if (pageKey === 'about') return `/s/shop/about?slug=${encodeURIComponent(storeSlug)}`
  return `/s/shop/p/${encodeURIComponent(pageKey)}?slug=${encodeURIComponent(storeSlug)}`
}
