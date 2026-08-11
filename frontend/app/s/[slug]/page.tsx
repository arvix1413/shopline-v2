import BrandStoreClient from './StoreClient'

/** Storefront shell at /s/shop?slug={brand} (and /s/{slug} if linked that way) */
export function generateStaticParams() {
  return [{ slug: 'shop' }]
}

export default function BrandStorePage() {
  return <BrandStoreClient />
}
