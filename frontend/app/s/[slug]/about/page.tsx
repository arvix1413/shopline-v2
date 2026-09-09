import BrandStoreClient from '../StoreClient'

export function generateStaticParams() {
  return [{ slug: 'shop' }]
}

export default function StoreAboutPage() {
  return <BrandStoreClient view="page" pageKey="about" />
}
