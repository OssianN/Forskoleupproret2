import Link from 'next/link'

type Props = {
  post
  header
  children
}

const ArticleLink = ({ post, header, children }: Props) => {
  const link = header === 'Publicerat' ? post.url : `/${post.slug}`

  return (
    <>
      {header === 'Publicerat' ? (
        <a href={link} className="press__contentful-link">
          {children}
        </a>
      ) : (
        <Link href={link} className="press__contentful-link">
          {children}
        </Link>
      )}
    </>
  )
}

export default ArticleLink
