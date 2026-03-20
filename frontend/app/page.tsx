import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Solutions from './components/Solutions'
import Integration from './components/Integration'
import OneStop from './components/OneStop'
import Growth from './components/Growth'
import Footer from './components/Footer'
import TrackPageView from './components/TrackPageView'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#08081A', color: '#fff' }}>
      <TrackPageView event="visit_homepage" />
      <Header />
      <Hero />
      {/* Dark block: Features + Solutions */}
      <div style={{ backgroundColor: '#0E0E2C' }}>
        <Features />
        <Solutions />
      </div>
      <Integration />
      <OneStop />
      <div style={{ backgroundColor: '#08081A' }}>
        <Growth />
      </div>
      <Footer />
    </main>
  )
}
