'use client'
import Link from 'next/link'
import MultipleLinksItem from './MultipleLinksItem'
import MobileToggleButton from './MobileToggleButton'
import { type CSSProperties, useState, useEffect } from 'react'
import Image from 'next/image'
import pinIcon from '@/images/pinIcon.png'
import './nav-bar.scss'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)
  const path = usePathname()

  useEffect(() => {
    setShowMobileNav(false)
  }, [path])

  return (
    <>
      <MobileToggleButton
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />

      <nav
        className="nav__container"
        style={
          {
            '--mobile-nav-offset': showMobileNav ? '0' : '400px',
          } as CSSProperties
        }
      >
        <ul className="nav__ul">
          <li className="nav__item">
            <Link className="nav__link" href="/">
              <Image className="nav__home-image" src={pinIcon} alt="hem" />
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className={`nav__link ${
                path === '/goal-demand' ? 'orange-text' : ''
              }`}
              href="/goal-demand"
            >
              Mål & krav
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className={`nav__link ${
                path === '/about-us' ? 'orange-text' : ''
              }`}
              href="/about-us"
            >
              Om oss
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className={`nav__link ${
                path === '/history' ? 'orange-text' : ''
              }`}
              href="/history"
            >
              Bakgrund
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className={`nav__link ${
                path === '/press/news' ? 'orange-text' : ''
              }`}
              href="/press/news"
            >
              Press
            </Link>
          </li>
          <MultipleLinksItem path={path} />
        </ul>
      </nav>
    </>
  )
}

export default NavBar
