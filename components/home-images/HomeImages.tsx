import Link from 'next/link'
import './home-images.css'
import * as images from '@/images'
import HomeArticle from './HomeArticle'

const HomeImages = () => {
  return (
    <div className="home-box__container">
      <HomeArticle
        link="/goalDemand"
        title={'Mål & Krav'}
        desc={'Läs om vårt mål och vilka krav vi har...'}
        img={images.powerful}
        imgName={'powerful'}
      />
      <HomeArticle
        link="/om-oss"
        title={'Om oss'}
        desc={'Läs om vilka vi är och vad vi gör...'}
        img={images.aboutUs}
        imgName={'om oss'}
      />
      <HomeArticle
        link="/history"
        title={'Historik'}
        desc={'Hur Förskoleupproret började...'}
        img={images.history}
        imgName={'historik'}
      />
      <HomeArticle
        link="/press"
        title={'Press'}
        desc={'Våra artiklar, publicerade artiklar och omnämnda...'}
        img={images.press}
        imgName={'historik'}
      />

      <div className="home-box hashtag-card">
        <Link href="/pressatLage" className="home-box__hashtag-link">
          <h2 className="home-box__hashtag-text">#PRESSATLÄGE</h2>
          <span className="home-box__hashtag-span span1"></span>
        </Link>
      </div>
      <div className="home-box hashtag-card">
        <Link href="/viVagrarBrytaLagen" className="home-box__hashtag-link">
          <h2 className="home-box__hashtag-text home-box__smaller-font">
            #VIVÄGRARBRYTALAGEN
          </h2>
          <span className="home-box__hashtag-span span2"></span>
        </Link>
      </div>
    </div>
  )
}

export default HomeImages
