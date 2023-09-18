import React, { useEffect } from "react"
import { animateScroll } from "react-scroll"
import NavigationButton from "./NavigationButton"

const CategoryNavigation = ({ handleArticleListPick, showArticleList }) => {
  const setScroll = () => {
    const position = window.localStorage.getItem("scrollPosition")
    animateScroll.scrollTo(position)
  }

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    setScroll()

    window.addEventListener("scroll", () => {
      if (window.scrollY < 10) {
        return
      }

      window.localStorage.setItem("scrollPosition", window.scrollY)
    })

    return () => window.removeEventListener("scroll", () => {})
  }, [])

  return (
    <div className="press__categories-list">
      <NavigationButton
        title="Nyheter"
        handleArticleListPick={handleArticleListPick}
        showArticleList={showArticleList}
      />
      <NavigationButton
        title="Vittnesmål"
        handleArticleListPick={handleArticleListPick}
        showArticleList={showArticleList}
      />
      <NavigationButton
        title="Publicerat"
        handleArticleListPick={handleArticleListPick}
        showArticleList={showArticleList}
      />
    </div>
  )
}

export default CategoryNavigation
