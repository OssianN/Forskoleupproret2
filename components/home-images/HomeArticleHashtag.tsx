import Link from 'next/link'

type Props = {
  title: string
  link: string
}

const HomeArticle = ({ title, link }: Props) => {
  return (
    <div className="home-box hashtag-card">
      <Link href={link} className="home-box__hashtag-link">
        <h2 className="home-box__hashtag-text home-box__smaller-font">
          {title}
        </h2>
        <span className="home-box__hashtag-span span2"></span>
      </Link>
    </div>
  )
}

export default HomeArticle
