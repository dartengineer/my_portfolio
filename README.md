# Adeyemi Favour Oluwapelumi — Portfolio

A personal portfolio built with Next.js 14, Tailwind CSS, and custom CSS variables.

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles + CSS variables
│   ├── layout.jsx        # Root layout (metadata lives here)
│   └── page.jsx          # Main page (assembles all sections)
├── components/
│   ├── Navbar.jsx        # Sticky navigation bar
│   ├── Hero.jsx          # Hero section
│   ├── About.jsx         # About + tech stack + timeline
│   ├── Projects.jsx      # Project cards grid
│   ├── Skills.jsx        # Skills with progress bars
│   ├── Contact.jsx       # Contact info + form
│   └── Footer.jsx        # Footer
└── public/               # Put your images here
```

---

## ✏️ Customising Your Portfolio

### Update your contact details
In `components/Contact.jsx`, update the `contactLinks` array:
```js
{ icon: '✉️', label: 'Email', value: 'YOUR_EMAIL', href: 'mailto:YOUR_EMAIL' },
{ icon: '💬', label: 'WhatsApp', value: '+234 xxx', href: 'https://wa.me/234YOUR_NUMBER' },
{ icon: '🐙', label: 'GitHub', value: 'github.com/YOUR_USERNAME', href: '...' },
```

### Add your real projects
In `components/Projects.jsx`, edit the `projects` array. For each project:
```js
{
  icon: '🔥',
  name: 'Your Project Name',
  desc: 'What it does and the problem it solves.',
  tags: ['Next.js', 'Tailwind'],
  link: 'https://github.com/your/repo',
  linkText: 'View on GitHub →',
}
```

### Add project screenshots
1. Put your images in the `public/` folder
2. In `Projects.jsx`, add an `<img>` tag inside the project card:
```jsx
<img src="/your-screenshot.png" alt="Project preview"
  style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
```

### Connect your contact form
In `components/Contact.jsx`, replace the `handleSubmit` function with Formspree:
```js
const handleSubmit = async (e) => {
  e.preventDefault()
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  setSent(true)
}
```
Sign up free at [formspree.io](https://formspree.io)

---

## 🚢 Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for auto-deploys.
