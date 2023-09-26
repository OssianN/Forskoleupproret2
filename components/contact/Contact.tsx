import './contact.scss'
import Image from 'next/image'
import * as img from '@/images'

const Contact = () => {
  return (
    <section className="contact__container">
      <h2 className="contact__header">Kontakt</h2>

      <div className="contact__social-media-wrapper">
        <a
          className="social-media__link"
          href="mailto:forskoleuppror@gmail.com"
        >
          <Image
            width={30}
            height={30}
            className="social-media__img"
            src={img.at}
            alt="Email link"
          />
          forskoleuppror@gmail
        </a>
        <a
          className="social-media__link"
          href="https://www.facebook.com/groups/forskoleupproret"
        >
          <Image
            width={30}
            height={30}
            className="social-media__img"
            src={img.facebook}
            alt="facebook link"
          />
          Facebook
        </a>
        <a
          className="social-media__link"
          href="https://www.instagram.com/forskoleupproret/?hl=sv"
        >
          <Image
            width={30}
            height={30}
            className="social-media__img"
            src={img.insta}
            alt="instagram link"
          />
          Instagram
        </a>
        <a className="social-media__link" href="https://x.com/forskoleuppror">
          <Image
            width={30}
            height={30}
            className="social-media__img"
            src={img.xLogo}
            alt="X link"
          />
          X.com
        </a>
        <a
          className="social-media__link"
          href="https://www.linkedin.com/in/förskoleupproret-nationell-2839a9168"
        >
          <Image
            width={30}
            height={30}
            className="social-media__img"
            src={img.linkedin}
            alt="linkedin link"
          />
          LinkedIn
        </a>
        <a
          className="social-media__link"
          href="https://youtube.com/channel/UCbXox7QE2ShqjRQYp4Pqw3w"
        >
          <Image
            width={30}
            height={30}
            className="social-media__img"
            src={img.youtube}
            alt="youtube link"
          />
          YouTube
        </a>
      </div>
    </section>
  )
}

export default Contact
