import Link from 'next/link'
import Image from 'next/image'

const HomeArticle = ({ link, title, desc, img, imgName }) => {
  return (
    <article className="home-box">
      <Link href={link} className="home-box__link">
        <Image className="home-box__img" src={img} alt={imgName} />
        <footer className="home-box__text-container">
          <h2 className="main-h2 home-box__title-h2">{title}</h2>
          <p className="home-box__paragraph main-p">{desc}</p>
        </footer>
      </Link>
    </article>
  )
}

export default HomeArticle
