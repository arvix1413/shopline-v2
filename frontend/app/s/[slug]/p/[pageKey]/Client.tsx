'use client'

import { useParams } from 'next/navigation'
import BrandStoreClient from '../../StoreClient'

export default function StoreCustomPageClient() {
  const params = useParams<{ pageKey: string }>()
  const pageKey = typeof params.pageKey === 'string' ? params.pageKey : 'about'
  return <BrandStoreClient view="page" pageKey={pageKey} />
}
