import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { VideoIframe } from '@/components/press/VideoIframe'
import { EntryFieldTypes } from 'contentful'
import { client } from '@/contentful'
import { getImage } from '@/utils'
import { ImageType } from '@/types'
import { BackToPressButton } from '@/components/press/BackToPressButton'

type BlogPostEntry = {
  contentTypeId: 'blogPost'
  fields: {
    title: EntryFieldTypes.Text
    slug: EntryFieldTypes.Text
    videoLink: EntryFieldTypes.Text
    contentImage: EntryFieldTypes.AssetLink
    mainText: EntryFieldTypes.RichText
    authorImage: EntryFieldTypes.AssetLink
  }
}

const ArticlePage = async ({
  params: { slug },
}: {
  params: { slug: string }
}) => {
  try {
    const { title, videoLink, contentImage, mainText, authorImage } = (
      await client.withoutUnresolvableLinks.getEntries<BlogPostEntry>({
        content_type: 'blogPost',
        'fields.slug': slug,
      })
    ).items[0].fields

    return (
      <div className="article__container">
        <header className="main-header">
          <BackToPressButton />
          <h1 className="main-header__h1 article__heading">{title}</h1>

          <div className="main-header__hero-img">
            <VideoIframe image={contentImage as ImageType} video={videoLink} />
          </div>
        </header>

        <div className="grid-view article__body">
          {documentToReactComponents(mainText)}
        </div>
        <div className="author__container">
          <Image
            className="author__img"
            src={`https:${getImage(authorImage).fields?.file.url}`}
            alt={getImage(authorImage).fields?.title ?? ''}
            {...getImage(authorImage).fields?.file.details.image}
          />
          <h4 className="author__title">
            {getImage(authorImage).fields?.title}
          </h4>
        </div>
      </div>
    )
  } catch (e) {
    return <></>
  }
}

export default ArticlePage
