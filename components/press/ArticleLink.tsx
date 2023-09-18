import React from 'react'
import Link from 'next/link'

const ArticleLink = ({ post, header, children }) => {
  const link = header === 'Publicerat' ? post.url : `/${post.slug}`

  return (
    <>
      {header === 'Publicerat' ? (
        <a href={link} className="press__contentful-link">
          {children}
        </a>
      ) : (
        <Link to={link} className="press__contentful-link">
          {children}
        </Link>
      )}
    </>
  )
}

export default ArticleLink
