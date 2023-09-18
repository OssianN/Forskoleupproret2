import React from "react"

const ArticleImg = ({ img }) => {
  return (
    <img
      className="press__contentful-img"
      src={img.file.url}
      alt={img.title}
    ></img>
  )
}

export default ArticleImg
