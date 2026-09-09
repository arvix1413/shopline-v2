'use client'

import BrandStoreClient from '../../StoreClient'

export default function StoreCustomPageClient({ pageKey }: { pageKey: string }) {
  return <BrandStoreClient view="page" pageKey={pageKey || 'about'} />
}
