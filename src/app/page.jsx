import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      {/* Background glow blobs */}
      <div style={{
        position: 'fixed', pointerEvents: 'none',
        width: '600px', height: '600px', borderRadius: '50%',
        background: '#f5a623', top: '-200px', right: '-200px',
        filter: 'blur(90px)', opacity: 0.07, zIndex: 0,
      }} />
      <div style={{
        position: 'fixed', pointerEvents: 'none',
        width: '400px', height: '400px', borderRadius: '50%',
        background: '#e07b3c', bottom: '20%', left: '-150px',
        filter: 'blur(90px)', opacity: 0.07, zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
