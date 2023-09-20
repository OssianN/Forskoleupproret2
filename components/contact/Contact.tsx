import './contact.scss'
import Image from 'next/image'
import * as img from '@/images'

const Contact = () => {
  return (
    <section className="contact__container">
      <h2 className="main-header__h1 contact__header-h1">Kontakt</h2>

      <div className="contact__social-media-wrapper">
        <a
          className="social-media__link"
          href="mailto:forskoleuppror@gmail.com"
        >
          <Image className="social-media__img" src={img.at} alt="Email link" />
        </a>
        <a
          className="social-media__link"
          href="https://www.facebook.com/groups/forskoleupproret"
        >
          <Image
            className="social-media__img"
            src={img.facebook}
            alt="facebook link"
          />
        </a>
        <a
          className="social-media__link"
          href="https://www.instagram.com/forskoleupproret/?hl=sv"
        >
          <Image
            className="social-media__img"
            src={img.insta}
            alt="instagram link"
          />
        </a>
        <a
          className="social-media__link"
          href="https://twitter.com/forskoleuppror"
        >
          <Image
            className="social-media__img"
            src={img.twitter}
            alt="twitter link"
          />
        </a>
        <a
          className="social-media__link"
          href="https://www.linkedin.com/in/förskoleupproret-nationell-2839a9168"
        >
          <Image
            className="social-media__img"
            src={img.linkedin}
            alt="linkedin link"
          />
        </a>
        <a
          className="social-media__link"
          href="https://youtube.com/channel/UCbXox7QE2ShqjRQYp4Pqw3w"
        >
          <Image
            className="social-media__img"
            src={img.youtube}
            alt="youtube link"
          />
        </a>
      </div>
    </section>
  )
}

export default Contact
