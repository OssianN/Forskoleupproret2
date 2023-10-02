import Image from 'next/image'
import './logo.css'
import banner from '@/images/banner.png'

const Logo = () => {
  return (
    <div className="logo-header__container">
      <Image
        className="logo-header__img"
        src={banner}
        alt="Forskoleupproret logga"
      />
    </div>
  )
}

export default Logo
