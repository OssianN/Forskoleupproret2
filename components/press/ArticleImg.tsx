import Image from 'next/image'

const ArticleImg = ({ img }) => {
  return (
    <Image
      className="press__contentful-img"
      src={img.file.url}
      alt={img.title}
    ></Image>
  )
}

export default ArticleImg
