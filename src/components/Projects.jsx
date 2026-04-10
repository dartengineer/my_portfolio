'use client'
import { useState } from 'react'

const projects = [
  {
    icon: '💰',
    name: 'Adept.ml',
    desc: '•Cross-platform AI assistant for business and communication management.',
    tags: ['Flutter', 'Dart', 'Mobile'],
    link: 'https://adept.ml',
    linkText: 'View case study →',
    featured: true,
  },
  {
    icon: '💬',
    name: 'Messaging UI',
    desc: 'A clean, WhatsApp-inspired messaging interface built entirely in Flutter. Focused on smooth animations, chat bubbles, and real-time feel.',
    tags: ['Flutter', 'UI/UX', 'Animations'],
    link: 'https://github.com/adept-ml/messaging-ui',
    linkText: 'View on GitHub →',
  },
  {
    icon: '🧵',
    name: 'FabricHub NG',
    desc: 'A marketplace concept for Nigerian fabric vendors and buyers — solving the problem of unreliable sourcing by connecting artisans with customers online.',
    tags: ['Next.js', 'Tailwind', 'E-commerce'],
    link: 'https://the-african-store.vercel.app/',
    linkText: 'View case study →',
    featured: true,
    badge: 'Concept',
  },
  {
    icon: '🌐',
    name: 'Personal Portfolio',
    desc: 'This portfolio — designed and built to showcase my work, tell my story, and attract clients and collaborators. Clean, responsive, and fast.',
    tags: ['Next.js', 'Tailwind', 'Vercel'],
    link: '#',
    linkText: "You're looking at it →",
  },
]

export default function Projects() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="projects" style={{ padding: '6rem 5vw', maxWidth: '1100px', margin: '0 auto' }}>
      <p style={styles.label}>Projects</p>
      <h2 style={styles.title}>What I've built</h2>

      <div style={styles.grid}>
        {projects.map((p, i) => (
          <div
            key={p.name}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              ...styles.card,
              transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
              borderColor: hovered === i ? 'rgba(245,166,35,0.3)' : 'var(--border)',
            }}
          >
            {/* Top accent bar */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: 'linear-gradient(90deg, #f5a623, #e07b3c)',
              transform: hovered === i ? 'scaleX(1)' : 'scaleX(0)',
              transformOrigin: 'left',
              transition: 'transform 0.3s',
              borderRadius: '14px 14px 0 0',
            }} />

            {/* Featured badge */}
            {p.featured && (
              <span style={styles.badge}>{p.badge || 'Featured'}</span>
            )}

            <div style={styles.icon}>{p.icon}</div>
            <p style={styles.name}>{p.name}</p>
            <p style={styles.desc}>{p.desc}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.4rem' }}>
              {p.tags.map(tag => (
                <span key={tag} style={styles.tag}>{tag}</span>
              ))}
            </div>

            <a href={p.link} style={styles.link}>{p.linkText}</a>
          </div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  label: {
    fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.12em',
    textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '0.8rem',
  },
  title: {
    fontFamily: "'Syne', sans-serif",
    fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
    fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '2.5rem', lineHeight: 1.15,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    background: 'var(--card)', border: '0.5px solid var(--border)',
    borderRadius: '14px', padding: '1.8rem',
    transition: 'all 0.25s', cursor: 'pointer',
    position: 'relative', overflow: 'hidden',
  },
  badge: {
    position: 'absolute', top: '1.2rem', right: '1.2rem',
    background: 'rgba(245,166,35,0.15)', color: 'var(--amber)',
    fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.6rem',
    borderRadius: '4px', letterSpacing: '0.05em', textTransform: 'uppercase',
  },
  icon: {
    width: '44px', height: '44px', borderRadius: '10px',
    background: 'var(--amber-dim)', border: '0.5px solid rgba(245,166,35,0.2)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '20px', marginBottom: '1.2rem',
  },
  name: {
    fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.1rem',
    marginBottom: '0.5rem', color: 'var(--text)',
  },
  desc: { fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.2rem' },
  tag: {
    background: 'var(--tag-bg)', color: 'var(--tag-text)',
    padding: '0.22rem 0.65rem', borderRadius: '4px',
    fontSize: '0.75rem', fontWeight: 500,
  },
  link: {
    fontSize: '0.83rem', color: 'var(--amber)', textDecoration: 'none',
    fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px',
  },
}
