'use client'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import type { CSSProperties } from 'react'

export const PressNavigation = () => {
  const activeSegment = useSelectedLayoutSegment()

  return (
    <ul className="press__navigation-bar">
      <li
        style={
          {
            color: activeSegment === 'news' ? 'var(--nav-color)' : 'black',
          } as CSSProperties
        }
      >
        <Link href="/press/news">Nyheter</Link>
      </li>
      <li
        style={
          {
            color: activeSegment === 'published' ? 'var(--nav-color)' : 'black',
          } as CSSProperties
        }
      >
        <Link href="/press/published">Published</Link>
      </li>
      <li
        style={
          {
            color:
              activeSegment === 'testimonials' ? 'var(--nav-color)' : 'black',
          } as CSSProperties
        }
      >
        <Link href="/press/testimonials">Testimonials</Link>
      </li>
    </ul>
  )
}
