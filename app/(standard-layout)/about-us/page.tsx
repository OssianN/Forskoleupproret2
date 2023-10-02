import Image from 'next/image'
import { client } from '@/contentful'
import type { EntryFieldTypes } from 'contentful'
import { getImage } from '@/utils'
import { PeopleList } from '@/components/people/PeopleList'
import ReactMarkdown from 'react-markdown'

type AboutUsEntry = {
  contentTypeId: 'aboutUsPage'
  fields: {
    title: EntryFieldTypes.Text
    introImage: EntryFieldTypes.AssetLink
    paragraph: EntryFieldTypes.RichText
  }
}

const AboutUs = async () => {
  const { title, introImage, paragraph } = (
    await client.getEntry<AboutUsEntry>('3rE8XlMRfsFABpmMlmMh2B')
  ).fields

  return (
    <div className="about-us__container">
      <header className="main-header">
        <h1 className="main-header__h1">{title}</h1>
        <Image
          className="main-header__hero-img"
          src={`https:${getImage(introImage).fields?.file.url}`}
          {...getImage(introImage).fields?.file.details.image}
          alt={getImage(introImage).fields?.title ?? ''}
        />
        <div className="main-header__intro-paragraph main-p">
          <ReactMarkdown>{paragraph.toString()}</ReactMarkdown>
        </div>
      </header>

      <PeopleList />
    </div>
  )
}

export default AboutUs
