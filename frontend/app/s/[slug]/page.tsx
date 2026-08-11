import BrandStoreClient from './StoreClient'

/** Placeholder for static export; Cloudflare rewrites /{slug} and /s/* here */
export function generateStaticParams() {
  return [{ slug: '_' }]
}

export default function BrandStorePage() {
  return <BrandStoreClient />
}
