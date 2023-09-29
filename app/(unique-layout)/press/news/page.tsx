import { client } from '@/contentful'
import { getImage } from '@/utils'
import { EntryFieldTypes } from 'contentful'
import Image from 'next/image'
import Link from 'next/link'

type NewsEntries = {
  contentTypeId: 'blogPost'
  fields: {
    title: EntryFieldTypes.Text
    slug: EntryFieldTypes.Text
    description: EntryFieldTypes.Text
    contentImage: EntryFieldTypes.AssetLink
    videoLink: EntryFieldTypes.Text
    mainText: EntryFieldTypes.RichText
    authorImage: EntryFieldTypes.AssetLink
    publishDate: EntryFieldTypes.Date
    vittnesmal: EntryFieldTypes.Boolean
  }
}

const News = async () => {
  const newsList = (
    await client.getEntries<NewsEntries>({
      content_type: 'blogPost',
    })
  ).items

  return (
    <div>
      <header className="main-header">
        <h1 className="main-header__h1">Nyheter</h1>
      </header>

      <ul className="press__post-list">
        {newsList
          .filter(({ fields }) => !fields.vittnesmal)
          .map(
            ({
              fields: { title, contentImage, description, slug },
              sys: { id },
            }) => {
              return (
                <div className="press__post-container" key={id}>
                  <Link href={`/article/${slug}`}>
                    <h3 className="press__post-title">{title}</h3>
                    <p className="main-p press__post-description">
                      {description}
                    </p>
                    <Image
                      className="press__post-image"
                      src={`https:${getImage(contentImage).fields?.file.url}`}
                      alt={getImage(contentImage).fields?.title ?? ''}
                      {...getImage(contentImage).fields?.file.details.image}
                    />
                  </Link>
                </div>
              )
            }
          )}
      </ul>
    </div>
  )
}

export default News
