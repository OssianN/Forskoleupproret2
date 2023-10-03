'use client'

import Link from 'next/link'
import { CSSProperties, useState } from 'react'

const MultipleLinksItem = ({ path }: { path: string }) => {
  const [hashtagListOpen, setHashtagListOpen] = useState<boolean>(false)

  return (
    <li
      className="nav__item nav__item--multiple-container"
      onMouseOver={() => setHashtagListOpen(true)}
      onMouseOut={() => setHashtagListOpen(false)}
    >
      <p className="nav__item--multiple-title">
        Hashtags <span className="nav__item--multiple-arrow">&#8250;</span>
      </p>
      <div
        className="nav__item-list"
        style={
          {
            visibility: hashtagListOpen
              ? 'visible'
              : 'var(--nav-item-list-hidden)',
          } as CSSProperties
        }
      >
        <Link
          className="nav__link"
          style={
            path === '/hashtags/pressatLage'
              ? {
                  color: 'white',
                }
              : {}
          }
          href="/hashtags/pressatLage"
        >
          #pressatläge
        </Link>
        <Link
          className="nav__link"
          style={
            path === '/hashtags/viVagrarBrytaLagen'
              ? {
                  color: 'white',
                }
              : {}
          }
          href="/hashtags/viVagrarBrytaLagen"
        >
          #vivägrarbrytalagen
        </Link>
      </div>
    </li>
  )
}

export default MultipleLinksItem
