import NavBar from '@/components/nav-bar/NavBar'
import './globals.css'
import '@/styles/index.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Förskoleupproret',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="se">
      <NavBar />
      <body>
        <main className="main-layout">{children}</main>
      </body>
    </html>
  )
}
