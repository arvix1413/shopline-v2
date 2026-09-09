import StoreCustomPageClient from './Client'

export function generateStaticParams() {
  return [
    { pageKey: 'contact' },
    { pageKey: 'shipping' },
    { pageKey: 'returns' },
    { pageKey: 'privacy' },
    { pageKey: 'faq' },
  ]
}

export default function StoreCustomPage() {
  return <StoreCustomPageClient />
}
