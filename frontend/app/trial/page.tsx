'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../contexts/AuthContext'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ExternalLink } from 'lucide-react'
import { track } from '../../lib/tracker'

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8787'

interface TrialSystem {
  id: number; name: string; desc: string; url: string
  color: string; bg: string; border: string; emoji: string; tags: string[]
}

export default function TrialPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [systems, setSystems] = useState<TrialSystem[]>([])
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    if (!isLoading && !user) router.push('/login')
  }, [user, isLoading, router])

  useEffect(() => {
    if (!user) return
    fetch(`${API}/api/trial-systems`)
      .then(r => r.json())
      .then(data => setSystems(Array.isArray(data) ? data.filter((s: any) => s.active) : []))
      .catch(() => setSystems([]))
      .finally(() => setFetching(false))
  }, [user])

  if (isLoading || fetching) return (
    <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#08081A' }}>
      <div className="text-white/40 text-sm">載入中...</div>
    </main>
  )

  if (!user) return null

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#08081A', color: '#fff' }}>
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-semibold"
            style={{ background: 'rgba(30,64,175,0.15)', border: '1px solid rgba(30,64,175,0.3)', color: '#93C5FD' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#1E40AF', display: 'inline-block' }} />
            系統試用中心
          </div>
          <h1 className="text-4xl font-black mb-4">選擇你想試用的系統</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16 }}>
            點擊任一系統即可立即體驗，所有系統均為完整功能展示
          </p>
        </div>

        {systems.length === 0 ? (
          <div className="text-center py-20" style={{ color: 'rgba(255,255,255,0.4)' }}>
            目前尚無可用的試用系統，請稍後再試
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {systems.map(sys => (
              <a key={sys.id} href={sys.url} target="_blank" rel="noopener noreferrer"
              onClick={() => track('enter_dashboard', { system: sys.name }, user.id)}
                className="group relative rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
                style={{ background: sys.bg, border: `1px solid ${sys.border}`, boxShadow: '0 4px 24px rgba(0,0,0,0.2)' }}>
                <div className="text-4xl mb-4">{sys.emoji}</div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{sys.name}</h3>
                  <ExternalLink size={16} className="opacity-40 group-hover:opacity-100 transition-opacity mt-0.5 flex-shrink-0" style={{ color: sys.color }} />
                </div>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{sys.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {sys.tags.map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ background: `${sys.color}18`, color: sys.color, border: `1px solid ${sys.color}30` }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 pt-4 flex items-center gap-1.5 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ borderTop: `1px solid ${sys.border}`, color: sys.color }}>
                  立即體驗 <ExternalLink size={13} />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}
