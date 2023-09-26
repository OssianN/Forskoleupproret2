import Image from 'next/image'
import { client } from '@/contentful'
import { EntryFieldTypes } from 'contentful'
import ReactMarkdown from 'react-markdown'
import { getImage } from '@/utils'
import { ContentList } from '@/components/image-with-text/ContentList'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { UnionList } from '@/components/pressat-lage/UnionList'
import DynamicContent from '@/components/pressat-lage/DynamicContent'

type PressatLageEntry = {
  contentTypeId: 'pressatLage'
  fields: {
    title: EntryFieldTypes.Text
    introImage: EntryFieldTypes.AssetLink
    paragraph: EntryFieldTypes.RichText
    link: EntryFieldTypes.RichText
  }
}

const PressatLage = async () => {
  const { title, introImage, paragraph, link } = (
    await client.getEntry<PressatLageEntry>('2ZDey7dckFSLnuzahGCGr9')
  ).fields

  return (
    <div className="pressat__container">
      <header className="main-header">
        <h1 className="main-header__h1">{title}</h1>
        <Image
          className="main-header__hero-img pressat__intro-img"
          src={`https:${getImage(introImage).fields?.file.url}`}
          {...getImage(introImage).fields?.file.details.image}
          alt={getImage(introImage).fields?.title ?? ''}
        />

        <div className="orange-text">{documentToReactComponents(link)}</div>

        <div className="grid-view pressat__intro-text">
          <ReactMarkdown>{paragraph.toString()}</ReactMarkdown>
        </div>
      </header>

      <ContentList />
      <DynamicContent />
      <UnionList />
    </div>
  )
}

export default PressatLage
