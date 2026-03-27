import './globals.css'

export const metadata = {
  title: 'Adeyemi Favour Oluwapelumi — Web & Mobile App Developer',
  description: 'Portfolio of Adeyemi Favour Oluwapelumi, a Web and Mobile App Developer based in Nigeria.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
