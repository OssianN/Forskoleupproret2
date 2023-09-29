import { Dispatch, SetStateAction } from 'react'

const MobileToggleButton = ({
  showMobileNav,
  setShowMobileNav,
}: {
  showMobileNav: boolean
  setShowMobileNav: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <button
      className="nav__mobile-toggle-button"
      onClick={() => setShowMobileNav(prev => !prev)}
    >
      <div id="nav-icon2" className={showMobileNav ? 'open' : ''}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  )
}

export default MobileToggleButton
