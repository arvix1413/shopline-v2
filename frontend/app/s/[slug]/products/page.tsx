import BrandStoreClient from '../StoreClient'

export function generateStaticParams() {
  return [{ slug: 'shop' }]
}

export default function StoreProductsPage() {
  return <BrandStoreClient view="products" />
}
