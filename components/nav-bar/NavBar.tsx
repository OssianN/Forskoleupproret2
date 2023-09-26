'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import './nav-bar.scss'
import pinIcon from '@/images/pinIcon.png'

const NavBar = () => {
  const [showMobileNav, setShowMobileNav] = useState('-400px')
  const [navToggleClass, setNavToggleClass] = useState('')
  const [history, setHistory] = useState('/')

  useEffect(() => {
    if (window) {
      setHistory(window.location.pathname)
    }
  }, [])

  const handleMobileNavToggle = () => {
    if (showMobileNav === '0') {
      setShowMobileNav('-400px')
      setNavToggleClass('')
    } else {
      setShowMobileNav('0')
      setNavToggleClass('open')
    }
  }

  return (
    history !== '/' && (
      <>
        <button
          className="nav__mobile-toggle-button"
          onClick={handleMobileNavToggle}
        >
          <div id="nav-icon2" className={navToggleClass}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className="nav__mobile-top-span">
          {/* <Link href="/" className="nav__mobile-home-button">
            Hem
          </Link> */}
        </div>
        <nav className="nav__container" style={{ marginRight: showMobileNav }}>
          <ul className="nav__ul">
            <li className="nav__list-item nav__mobile-home-link">
              <Link href="/" className="nav__link">
                Hem
              </Link>
            </li>
            <li className="nav__list-item nav__home-link">
              <Link className="nav__link" href="/">
                Hem
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="nav__link" href="/goalDemand">
                Mål & krav
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="nav__link" href="/om-oss">
                Om oss
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="nav__link" href="/history">
                Bakgrund
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="nav__link" href="/press">
                Press
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="nav__link" href="/pressatLage">
                #pressatläge
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="nav__link" href="/viVagrarBrytaLagen">
                #vivägrarbrytalagen
              </Link>
            </li>
          </ul>
        </nav>
      </>
    )
  )
}

export default NavBar
