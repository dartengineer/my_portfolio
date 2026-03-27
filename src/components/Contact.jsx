'use client'
import { useState } from 'react'

const contactLinks = [
  { icon: '✉️', label: 'Email', value: 'favour@example.com', href: 'mailto:favour@example.com' },
  { icon: '💬', label: 'WhatsApp', value: '+234 xxx xxx xxxx', href: 'https://wa.me/234xxxxxxxxxx' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/adeyemifavour', href: 'https://github.com' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/adeyemifavour', href: 'https://linkedin.com' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    // Replace this with Formspree or EmailJS integration
    console.log('Form submitted:', form)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" style={{ padding: '6rem 5vw 8rem', maxWidth: '1100px', margin: '0 auto' }}>
      <p style={styles.label}>Contact</p>

      <div style={styles.grid}>
        {/* Left */}
        <div>
          <h2 style={styles.title}>Let's build something real</h2>
          <p style={styles.body}>
            Whether you have a project idea, a problem to solve, or you just want to
            say hi — I'm open. Based in Nigeria, available globally.
          </p>
          <p style={{ ...styles.body, marginBottom: 0 }}>
            Response time: usually within 24 hours.
          </p>

          <ul style={{ listStyle: 'none', marginTop: '1.8rem' }}>
            {contactLinks.map(({ icon, label, value, href }, i) => (
              <li key={label} style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '0.9rem 0', fontSize: '0.92rem',
                borderBottom: i < contactLinks.length - 1
                  ? '0.5px solid var(--border)' : 'none',
              }}>
                <div style={styles.clIcon}>{icon}</div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--muted)', display: 'block' }}>
                    {label}
                  </span>
                  <a href={href} style={styles.clLink}
                    onMouseEnter={e => e.target.style.color = 'var(--amber)'}
                    onMouseLeave={e => e.target.style.color = 'var(--muted)'}
                  >
                    {value}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { label: 'Your name', name: 'name', type: 'text', placeholder: 'e.g. Tunde Adeyemi' },
            { label: 'Email address', name: 'email', type: 'email', placeholder: 'you@example.com' },
          ].map(field => (
            <div key={field.name} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={styles.formLabel}>{field.label}</label>
              <input
                type={field.type} name={field.name}
                value={form[field.name]} onChange={handleChange}
                placeholder={field.placeholder} required
                style={styles.input}
                onFocus={e => e.target.style.borderColor = 'rgba(245,166,35,0.4)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={styles.formLabel}>Message</label>
            <textarea
              name="message" value={form.message} onChange={handleChange}
              placeholder="Tell me about your project or idea..."
              required rows={5}
              style={{ ...styles.input, resize: 'vertical', minHeight: '120px' }}
              onFocus={e => e.target.style.borderColor = 'rgba(245,166,35,0.4)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
          </div>

          <button type="submit" style={styles.submitBtn}
            onMouseEnter={e => e.target.style.background = 'var(--amber2)'}
            onMouseLeave={e => e.target.style.background = 'var(--amber)'}
          >
            {sent ? '✓ Message sent!' : 'Send message'}
          </button>
        </form>
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
    fontWeight: 800, letterSpacing: '-0.02em',
    marginBottom: '1.5rem', lineHeight: 1.15,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '4rem', alignItems: 'start',
  },
  body: { color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1rem' },
  clIcon: {
    width: '36px', height: '36px', borderRadius: '8px',
    background: 'var(--amber-dim)', display: 'flex',
    alignItems: 'center', justifyContent: 'center',
    fontSize: '16px', flexShrink: 0,
  },
  clLink: { color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.9rem' },
  formLabel: { fontSize: '0.82rem', color: 'var(--muted)', fontWeight: 500 },
  input: {
    background: 'var(--card)', border: '0.5px solid var(--border)',
    borderRadius: '8px', padding: '0.75rem 1rem', color: 'var(--text)',
    fontFamily: "'Instrument Sans', sans-serif", fontSize: '0.9rem',
    outline: 'none', transition: 'border-color 0.2s', width: '100%',
  },
  submitBtn: {
    background: 'var(--amber)', color: '#0e0c09',
    border: 'none', padding: '0.85rem', borderRadius: '8px',
    fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer',
    fontFamily: "'Instrument Sans', sans-serif",
    transition: 'background 0.2s', marginTop: '0.3rem',
  },
}
