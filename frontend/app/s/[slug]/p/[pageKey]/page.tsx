import Client from './Client'

export function generateStaticParams() {
  return [
    { pageKey: 'contact' },
    { pageKey: 'shipping' },
    { pageKey: 'returns' },
    { pageKey: 'privacy' },
    { pageKey: 'faq' },
  ]
}

export default function StoreCustomPage({ params }: { params: { pageKey: string } }) {
  return <Client pageKey={params.pageKey} />
}
