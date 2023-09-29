import Image from 'next/image'
import goalImage from '@/images/goal.svg'
import demandImage from '@/images/demand2.svg'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import ReactMarkdown from 'react-markdown'
import { EntryFieldTypes } from 'contentful'
import { client } from '@/contentful'

type GoalAndDemandEntrySkeleton = {
  contentTypeId: 'gaolAndDemandsPage'
  fields: {
    title: EntryFieldTypes.Text
    paragraph: EntryFieldTypes.RichText
    link1: EntryFieldTypes.RichText
    bannerText: EntryFieldTypes.Text
    title2: EntryFieldTypes.Text
    subTitle1: EntryFieldTypes.Text
    subTitle2: EntryFieldTypes.Text
    list1: EntryFieldTypes.RichText
    list2: EntryFieldTypes.RichText
    link2: EntryFieldTypes.RichText
  }
}

export const OmOss = async () => {
  const {
    title,
    paragraph,
    link1,
    bannerText,
    title2,
    subTitle1,
    subTitle2,
    list1,
    list2,
    link2,
  } = (
    await client.getEntry<GoalAndDemandEntrySkeleton>('2BIzhF9n6pUHPB5q4TPZQL')
  ).fields

  return (
    <div className="goal-demand__container">
      <header className=" main-header section1">
        <h1 className="main-header__h1">{title}</h1>

        <Image className="main-header__hero-img" src={goalImage} alt="demand" />

        <div className="main-header__intro-paragraph main-p orange-text-parent">
          {documentToReactComponents(paragraph)}
        </div>
      </header>

      <div className="goal-demand__link">
        {documentToReactComponents(link1)}
      </div>

      <h3 className="goal-demand__black-banner">{bannerText}</h3>

      <section className="main-header section2">
        <h2 className="main-h2">{title2}</h2>

        <Image
          className="goal-demand__img main-header__hero-img"
          src={demandImage}
          alt="demand"
        />

        <div className="demand__list-wrapper grid-view">
          <ul className="demand__list list-one">
            <span>{subTitle1}</span>
            <ReactMarkdown>{list1.toString()}</ReactMarkdown>
          </ul>

          <ul className="demand__list list-two">
            <span>{subTitle2}</span>
            <ReactMarkdown>{list2.toString()}</ReactMarkdown>
          </ul>
        </div>

        <div className="goal-demand__link">
          {documentToReactComponents(link2)}
        </div>
      </section>
    </div>
  )
}

export default OmOss
