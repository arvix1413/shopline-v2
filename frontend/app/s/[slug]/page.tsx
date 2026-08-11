import BrandStoreClient from './StoreClient'

/** Placeholder for static export; Cloudflare rewrites /{slug} here */
export function generateStaticParams() {
  return [{ slug: 'shop' }]
}

export default function BrandStorePage() {
  return <BrandStoreClient />
}
