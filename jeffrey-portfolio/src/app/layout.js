
// src/app/layout.js
import './globals.css'

export const metadata = {
  title: 'Jeffrey Di Perna',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
