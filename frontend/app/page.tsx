import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Solutions from './components/Solutions'
import Integration from './components/Integration'
import OneStop from './components/OneStop'
import Growth from './components/Growth'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#fff', color: '#00142D' }}>
      <Header />
      <Hero />
      {/* Dark navy block: Features + Solutions share #00142D background */}
      <div style={{ backgroundColor: '#00142D' }}>
        <Features />
        <Solutions />
      </div>
      <Integration />
      <OneStop />
      {/* White block: Growth sections */}
      <div style={{ backgroundColor: '#fff' }}>
        <Growth />
      </div>
      <Footer />
    </main>
  )
}
