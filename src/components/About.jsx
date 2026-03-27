const stack = [
  'Flutter', 'React', 'Next.js', 'Tailwind CSS',
  'Dart', 'JavaScript', 'Git & GitHub', 'Vercel', 'Figma',
]

const timeline = [
  { event: 'Started learning web development', year: '2022' },
  { event: 'Built first Flutter mobile app', year: '2023' },
  { event: 'Explored UI/UX design with Figma', year: '2023' },
  { event: 'Launched projects on Vercel & GitHub', year: '2024' },
  { event: 'Building MVPs & real-world apps', year: '2025' },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '6rem 5vw', maxWidth: '1100px', margin: '0 auto' }}>
      <p style={styles.label}>About me</p>

      <div style={styles.grid}>
        {/* Left: text */}
        <div>
          <h2 style={styles.title}>
            Building with purpose,<br />not just code
          </h2>
          <p style={styles.body}>
            I'm a developer passionate about turning ideas into real, working products.
            Whether it's a <strong style={styles.strong}>Flutter mobile app</strong> or a{' '}
            <strong style={styles.strong}>Next.js web platform</strong>, I focus on clean UI,
            fast performance, and real-world usability.
          </p>
          <p style={styles.body}>
            I've been building tools that matter — from{' '}
            <strong style={styles.strong}>fintech-inspired apps</strong> to{' '}
            <strong style={styles.strong}>e-commerce concepts</strong> rooted in Nigerian
            market needs. Every project teaches me something new.
          </p>
          <p style={styles.body}>
            My goal: become a developer who ships products that people actually use and love.
          </p>

          {/* Stack chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '1.5rem' }}>
            {stack.map(s => (
              <span key={s} style={styles.chip}>{s}</span>
            ))}
          </div>
        </div>

        {/* Right: timeline card */}
        <div style={styles.card}>
          <p style={styles.cardTitle}>My journey so far</p>
          <ul style={{ listStyle: 'none' }}>
            {timeline.map(({ event, year }, i) => (
              <li key={i} style={{
                ...styles.tlItem,
                borderBottom: i < timeline.length - 1
                  ? '0.5px solid var(--border)' : 'none',
              }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>{event}</span>
                <span style={styles.year}>{year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
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
    fontWeight: 800, letterSpacing: '-0.02em',
    marginBottom: '1.5rem', lineHeight: 1.15,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '4rem', alignItems: 'start',
  },
  body: { color: 'var(--muted)', marginBottom: '1rem', lineHeight: 1.8 },
  strong: { color: 'var(--text)', fontWeight: 500 },
  chip: {
    background: 'var(--card)', border: '0.5px solid var(--border)',
    color: 'var(--muted)', padding: '0.35rem 0.9rem',
    borderRadius: '5px', fontSize: '0.82rem', fontWeight: 500,
  },
  card: {
    background: 'var(--card)', border: '0.5px solid var(--border)',
    borderRadius: '14px', padding: '1.8rem',
  },
  cardTitle: {
    fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1rem',
    marginBottom: '1.2rem', color: 'var(--amber)',
  },
  tlItem: {
    padding: '0.7rem 0', fontSize: '0.9rem',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  },
  year: { fontSize: '0.75rem', color: 'var(--amber)', fontWeight: 600, marginLeft: '1rem' },
}
