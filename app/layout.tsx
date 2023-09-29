import NavBar from '@/components/nav-bar/NavBar'
import { Montserrat } from 'next/font/google'
import type { Metadata } from 'next'
import Contact from '@/components/contact/Contact'
const montserratScript = Montserrat({ subsets: ['latin'] })
import './globals.scss'
import '@/styles/index.scss'

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
        <main>{children}</main>
        <Contact />
      </body>
    </html>
  )
}
