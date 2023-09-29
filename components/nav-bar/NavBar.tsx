'use client'
import Link from 'next/link'
import './nav-bar.scss'
import MultipleLinksItem from './MultipleLinksItem'
import MobileToggleButton from './MobileToggleButton'
import { type CSSProperties, useState } from 'react'
import Image from 'next/image'
import pinIcon from '@/images/pinIcon.png'

const NavBar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)

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
            <Link className="nav__link" href="/goalDemand">
              Mål & krav
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" href="/about-us">
              Om oss
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" href="/history">
              Bakgrund
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" href="/press/news">
              Press
            </Link>
          </li>
          <MultipleLinksItem />
        </ul>
      </nav>
    </>
  )
}

export default NavBar
