export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '8rem 5vw 5rem',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>
      {/* Main Content Container */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'center',
        marginBottom: '2rem',
      }} className="hero-grid">
        {/* Left Side - Text Content */}
        <div>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'var(--amber-dim)',
            border: '0.5px solid rgba(245,166,35,0.3)',
            borderRadius: '20px', padding: '0.35rem 1rem',
            fontSize: '0.82rem', color: 'var(--amber)',
            fontWeight: 500, marginBottom: '1.8rem',
            width: 'fit-content',
          }}>
            <span style={{
              width: '7px', height: '7px', borderRadius: '50%',
              background: 'var(--green)', display: 'inline-block',
              animation: 'pulse 2s infinite',
            }} />
            Open to opportunities
          </div>

          {/* Title - Smaller */}
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800, lineHeight: 1.05,
            letterSpacing: '-0.03em', marginBottom: '1.4rem',
          }}>
            Adeyemi Favour<br />
            <span style={{ color: 'var(--amber)' }}>Oluwapelumi</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '1.1rem', color: 'var(--muted)',
            maxWidth: '520px', lineHeight: 1.75, marginBottom: '2.4rem',
          }}>
            <strong style={{ color: 'var(--text)', fontWeight: 500 }}>
              Web & Mobile App Developer | Technical Support Specialist
            </strong>{' '}
            based in Nigeria.<br />
            I build fast, scalable products that solve real problems — from elegant
            frontends to functional mobile apps.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary">View my work</a>
            <a href="#contact" className="btn-secondary">Get in touch</a>
          </div>
        </div>

        {/* Right Side - Profile Picture */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            width: '100%',
            maxWidth: '350px',
            aspectRatio: '1',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(245,166,35,0.15) 0%, rgba(80,200,120,0.15) 100%)',
            border: '1px solid rgba(245,166,35,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(245,166,35,0.1)',
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              background: 'var(--card)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--muted)',
              fontSize: '0.9rem',
              textAlign: 'center',
              padding: '2rem',
            }}>
              <img src="/profile.jpg" alt="Adeyemi Favour Oluwapelumi" style={{ width: '100%', height: '100%', objectFit: 'fill', objectPosition: 'center', borderRadius: '16px' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{
        marginTop: '4rem',
        display: 'flex', gap: '3rem', flexWrap: 'wrap',
        paddingTop: '2.5rem',
        borderTop: '0.5px solid var(--border)',
      }}>
        {[
          { num: '5+', label: 'Projects built' },
          { num: '2+', label: 'Years of experience' },
          { num: '2', label: 'Platforms: Web + Mobile' },
        ].map(({ num, label }) => (
          <div key={label}>
            <span style={{
              fontFamily: "'Syne', sans-serif", fontSize: '2rem',
              fontWeight: 800, color: 'var(--amber)', display: 'block',
            }}>{num}</span>
            <span style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>{label}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        .btn-primary {
          background: var(--amber); color: #0e0c09;
          padding: 0.75rem 1.8rem; border-radius: 8px;
          font-weight: 600; font-size: 0.95rem;
          text-decoration: none; transition: all 0.2s;
          font-family: 'Instrument Sans', sans-serif;
        }
        .btn-primary:hover { background: var(--amber2); transform: translateY(-2px); }
        .btn-secondary {
          background: transparent; color: var(--text);
          border: 0.5px solid rgba(255,255,255,0.2);
          padding: 0.75rem 1.8rem; border-radius: 8px;
          font-weight: 500; font-size: 0.95rem;
          text-decoration: none; transition: all 0.2s;
          font-family: 'Instrument Sans', sans-serif;
        }
        .btn-secondary:hover { border-color: var(--amber); color: var(--amber); }
        
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .hero-grid > div:last-child {
            order: -1;
          }
        }
      `}</style>
    </section>
  )
}
