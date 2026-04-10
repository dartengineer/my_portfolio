const skillGroups = [
  {
    name: 'Mobile',
    skills: [
      { name: 'Flutter', level: 82 },
      { name: 'Dart', level: 78 },
      { name: 'UI Animations', level: 70 },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 75 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'JavaScript', level: 72 },
    ],
  },
  {
    name: 'Design',
    skills: [
      { name: 'Figma', level: 68 },
      { name: 'UI/UX Thinking', level: 74 },
      { name: 'Responsive Design', level: 80 },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git & GitHub', level: 78 },
      { name: 'Vercel', level: 75 },
      { name: 'VS Code', level: 90 },
    ],
  },
  {
    name: 'Support & Operations',
    skills: [
      { name: 'Technical Documentation', level: 85 },
      { name: 'Problem Solving & Troubleshooting', level: 80 },
      { name: 'User Training & Onboarding', level: 78 },
      { name: 'Customer Support & Communication', level: 82 },
      { name: 'System Monitoring & Performance', level: 75 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 5vw', maxWidth: '1100px', margin: '0 auto' }}>
      <p style={styles.label}>Skills</p>
      <h2 style={styles.title}>What I work with</h2>

      <div style={styles.grid}>
        {skillGroups.map(group => (
          <div key={group.name} style={styles.card}>
            <p style={styles.groupName}>{group.name}</p>
            {group.skills.map((skill, i) => (
              <div
                key={skill.name}
                style={{
                  ...styles.skillItem,
                  borderBottom: i < group.skills.length - 1
                    ? '0.5px solid rgba(255,255,255,0.04)' : 'none',
                }}
              >
                <span style={styles.skillName}>{skill.name}</span>
                <div style={styles.barWrap}>
                  <div style={{ ...styles.bar, width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
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
    fontWeight: 800, letterSpacing: '-0.02em',
    marginBottom: '2.5rem', lineHeight: 1.15,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '1.2rem',
  },
  card: {
    background: 'var(--card)', border: '0.5px solid var(--border)',
    borderRadius: '12px', padding: '1.4rem',
  },
  groupName: {
    fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
    letterSpacing: '0.1em', color: 'var(--amber)', marginBottom: '1rem',
  },
  skillItem: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0.45rem 0',
  },
  skillName: { fontSize: '0.88rem', color: 'var(--muted)' },
  barWrap: {
    width: '80px', height: '4px',
    background: 'rgba(255,255,255,0.06)', borderRadius: '2px',
  },
  bar: { height: '100%', borderRadius: '2px', background: 'var(--amber)' },
}
