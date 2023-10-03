import { getImage } from '@/utils'
import { Entry, EntryFieldTypes } from 'contentful'
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

type Props = {
  list: Entry<NewsEntries, undefined, string>[]
}

const News = async ({ list }: Props) => {
  return (
    <ul className="press__post-list">
      {list.map(
        ({
          fields: { title, contentImage, description, slug },
          sys: { id },
        }) => {
          return (
            <li className="press__post-container" key={id}>
              <Link className="press__post-link" href={`/article/${slug}/`}>
                <div className="press__post-text-container ">
                  <h3 className="press__post-title">{title}</h3>
                  <p className="main-p press__post-description">
                    {description}
                  </p>
                </div>

                <Image
                  className="press__post-image"
                  src={`https:${getImage(contentImage).fields?.file.url}`}
                  alt={getImage(contentImage).fields?.title ?? ''}
                  {...getImage(contentImage).fields?.file.details.image}
                />
              </Link>
            </li>
          )
        }
      )}
    </ul>
  )
}

export default News
