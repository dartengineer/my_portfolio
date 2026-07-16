import './globals.css'

export const metadata = {
  title: 'Adeyemi Favour Oluwapelumi — Fullstack Developer & Mobile App Developer',
  description: 'Portfolio of Adeyemi Favour Oluwapelumi, a Fullstack and Mobile App Developer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
