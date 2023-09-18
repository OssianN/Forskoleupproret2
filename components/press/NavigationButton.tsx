const NavigationButton = ({
  title,
  handleArticleListPick,
  showArticleList,
}) => {
  return (
    <button
      className="press__category-button"
      onClick={handleArticleListPick}
      style={
        showArticleList === title
          ? { color: '#ff9f50', pointerEvents: 'none' }
          : { color: 'black', cursor: 'pointer' }
      }
    >
      {title}
    </button>
  )
}

export default NavigationButton
