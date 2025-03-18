import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Manuel Colusso',
  description: 'Landing page',
  icons: {
    icon: '/terminal.png'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
