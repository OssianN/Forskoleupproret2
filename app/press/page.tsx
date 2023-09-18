'use client'
import { useState, useEffect } from 'react'
import ContentfulList from '@/components/press/ContentfulList'
import CategoryNavigation from '@/components/press/CategoryNavigation'

const Press = () => {
  const [showArticleList, setShowArticleList] = useState()

  //   const data = useStaticQuery(
  //     graphql`
  //       query {
  //         allContentfulBlogPost {
  //           nodes {
  //             id
  //             vittnesmal
  //             slug
  //             title
  //             publishDate
  //             authorImage {
  //               file {
  //                 url
  //               }
  //               title
  //             }
  //             mainText {
  //               raw
  //             }
  //             description
  //             contentImage {
  //               file {
  //                 url
  //               }
  //               title
  //             }
  //           }
  //         }
  //         allContentfulPublicerade {
  //           nodes {
  //             id
  //             publishedDate
  //             url
  //             title
  //           }
  //         }
  //       }
  //     `
  //   )

  //   useEffect(() => {
  //     if (typeof window === 'undefined') {
  //       return
  //     }

  //     const pickedList = window.localStorage.getItem('articleList') || 'Nyheter'
  //     setShowArticleList(pickedList)
  //   }, [])

  //   const handleArticleListPick = e => {
  //     const { innerHTML } = e.target
  //     window.localStorage.setItem('articleList', innerHTML)
  //     setShowArticleList(innerHTML)
  //   }

  //   const filteredData = data.allContentfulBlogPost?.nodes.filter(
  //     post => !post.slug.includes('dummy9211')
  //   )

  //   const articles = filteredData.filter(post => !post.vittnesmal)
  //   const vittnesmal = filteredData.filter(post => post.vittnesmal)
  //   const published = data.allContentfulPublicerade?.nodes

  return (
    <>
      {/* <main className="press__container">
        <CategoryNavigation
          handleArticleListPick={handleArticleListPick}
          showArticleList={showArticleList}
        />

        <ContentfulList
          showArticleList={showArticleList}
          header="Nyheter"
          data={articles}
        />
        <ContentfulList
          showArticleList={showArticleList}
          header="Vittnesmål"
          data={vittnesmal}
        />
        <ContentfulList
          showArticleList={showArticleList}
          header="Publicerat"
          data={published}
        />
      </main> */}
    </>
  )
}

export default Press
