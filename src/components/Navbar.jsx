'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Projects', 'Skills', 'Contact']

  if (!mounted) return null

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1.1rem 5vw',
      background: scrolled ? 'rgba(14,12,9,0.95)' : 'rgba(14,12,9,0.7)',
      backdropFilter: 'blur(12px)',
      borderBottom: '0.5px solid var(--border)',
      transition: 'background 0.3s',
    }}>
      {/* Logo */}
      <span style={{
        fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.1rem',
        color: 'var(--amber)', letterSpacing: '-0.02em',
      }}>
        AFO.
      </span>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0 }}
        className="desktop-nav">
        {links.map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} style={{
              color: 'var(--muted)', textDecoration: 'none',
              fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--amber)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="#contact" style={{
        background: 'var(--amber)', color: '#0e0c09',
        padding: '0.5rem 1.2rem', borderRadius: '6px',
        fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none',
        transition: 'background 0.2s',
      }}
        onMouseEnter={e => e.target.style.background = 'var(--amber2)'}
        onMouseLeave={e => e.target.style.background = 'var(--amber)'}
      >
        Hire me
      </a>

      <style>{`
        @media (max-width: 720px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
