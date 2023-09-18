import Image from 'next/image'
import goalImage from '@/images/goal.svg'
import demandImage from '@/images/demand2.svg'

export const OmOss = () => {
  return (
    <>
      <div className="goal-demand__container">
        <section className="main-header section1">
          <h1 className="main-header__h1">Förskoleupprorets mål</h1>
          <Image
            className="main-header__hero-img"
            src={goalImage}
            alt="demand"
          ></Image>
          <p className="main-header__intro-paragraph main-p">
            En blocköverskidande, rikstäckande, överenskommelse för en
            demokratiskt, socialt, miljömässigt och ekonomiskt
            <span className="orangeText"> hållbar förskola </span>
            med
            <span className="orangeText"> likvärdig kvalité </span>
            där det ges förutsättningar för att nå målen enligt styrdokumenten.
          </p>
        </section>
        <h4 className="goal-demand__link">
          Hitta vårt måldokument{' '}
          <a
            style={{ color: '#ff9f50' }}
            href="https://drive.google.com/file/d/1ao46aacCtTx2C2NfqoV9eoNas2fOYb1e/view?usp=drivesdk"
          >
            här
          </a>
        </h4>
        <h3 className="goal-demand__black-banner">
          Framtiden börjar i förskolan!
        </h3>
        <section className="main-header section2">
          <h1 className="main-header__h1">Förskoleupprorets krav</h1>
          <img
            className="main-header__hero-img goal-demand__img"
            src={demandImage}
            alt="demand"
          ></img>
          <div className="demand__list-wrapper grid-view">
            <ul className="demand__list list-one">
              <span>Förskoleupproret vill se...</span>
              <li>max 12 barn i småbarnsgrupp, 1-3 år</li>
              <li>max 15 barn i storbarnsgrupp, 3-5 år</li>
              <li>max 4-5 barn per pedagog i varje barngrupp</li>
              <li>
                beslut om likvärdig, reglerad planeringstid för förskollärare
                och barnskötare i hela landet
              </li>
              <li>
                att kringuppgifter tas bort för förskollärare och barnskötare
              </li>
            </ul>
            <ul className="demand__list list-two">
              <span>Samt att arbetsgivaren ges förutsättningar...</span>
              <li>Att anpassa barngruppsstorleken efter lokalens storlek</li>
              <li>Att ge fortbildning och kurser på arbetstid</li>
              <li>Att ge alla förskolor tillgång till specialpedagog</li>
              <li>
                Att barn i behov av särskilt stöd får de resurser som krävs
              </li>
              <li>
                Att det sätts in vikarier när verksamheten kräver det samt att
                det kan sättas in från första dagen
              </li>
              <li>
                Att höja löner så vi får behålla våra förskollärare och
                barnskötare
              </li>
            </ul>
          </div>
          <h4 className="goal-demand__link">
            Hitta vårt kravdokument{' '}
            <a
              style={{ color: '#ff9f50' }}
              href="https://drive.google.com/file/d/15hH8CIBp8xywhOIQXxw8oc4GBeFtKNUP/view?usp=drivesdk"
            >
              här
            </a>
          </h4>
        </section>
      </div>
    </>
  )
}

export default OmOss
