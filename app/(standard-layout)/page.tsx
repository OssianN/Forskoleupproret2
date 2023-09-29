import Logo from '@/components/logo-header/Logo'
import '@/styles/index.scss'
import { HomeArticleList } from '@/components/home-images/HomeArticleList'

export default function Home() {
  return (
    <>
      <Logo />
      <div className="home-box__container">
        <HomeArticleList />
      </div>
    </>
  )
}
