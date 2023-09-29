import Link from 'next/link'
import Image from 'next/image'
import { ImageType } from '@/types'

type Props = {
  title: string
  description: string
  image: ImageType
  link: string
}

const HomeArticle = ({ title, description, image, link }: Props) => {
  return (
    <article className="home-box">
      <Link href={link} className="home-box__link">
        <Image
          className="home-box__img"
          src={`https:${image.fields?.file.url}`}
          alt={image.fields?.title ?? ''}
          {...image.fields?.file.details.image}
        />
        <footer className="home-box__text-container">
          <h2 className="main-h2 home-box__title-h2">{title}</h2>
          <p className="home-box__paragraph main-p">{description}</p>
        </footer>
      </Link>
    </article>
  )
}

export default HomeArticle
