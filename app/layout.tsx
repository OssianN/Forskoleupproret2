import NavBar from '@/components/nav-bar/NavBar'
import { Montserrat } from 'next/font/google'
import './globals.css'
import '@/styles/index.scss'
import type { Metadata } from 'next'
const montserratScript = Montserrat({ subsets: ['latin'] })

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
      <body className={montserratScript.className}>
        <NavBar />
        <main className="main-layout">{children}</main>
      </body>
    </html>
  )
}
