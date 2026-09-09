import StoreCustomPageClient from './Client'

export function generateStaticParams() {
  const pageKeys = ['contact', 'shipping', 'returns', 'privacy', 'faq']
  return pageKeys.map((pageKey) => ({ slug: 'shop', pageKey }))
}

export default function StoreCustomPage() {
  return <StoreCustomPageClient />
}
