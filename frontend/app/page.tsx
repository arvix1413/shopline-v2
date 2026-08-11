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
    <main className="min-h-screen" style={{ backgroundColor: '#FFFFFF', color: '#12131F' }}>
      <TrackPageView event="visit_homepage" />
      <Header />
      <Hero />
      <Features />
      <Solutions />
      <Integration />
      <OneStop />
      <Growth />
      <Footer />
    </main>
  )
}
