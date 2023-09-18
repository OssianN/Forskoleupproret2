import Image from 'next/image'
import './logo.css'
import * as images from '@/images'

const Logo = () => {
  return (
    <div className="logo-header__container">
      <Image
        className="logo-header__img"
        src={images.banner}
        alt="Forskoleupproret logga"
      />
    </div>
  )
}

export default Logo
