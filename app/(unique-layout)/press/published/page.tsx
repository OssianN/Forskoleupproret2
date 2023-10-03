import { client } from '@/contentful'
import { EntryFieldTypes } from 'contentful'
import Link from 'next/link'

type PublishedEntries = {
  contentTypeId: 'publicerade'
  fields: {
    title: EntryFieldTypes.Text
    url: EntryFieldTypes.Text
    publishedDate: EntryFieldTypes.Date
  }
}

const Published = async () => {
  const newsList = (
    await client.getEntries<PublishedEntries>({
      content_type: 'publicerade',
    })
  ).items

  return (
    <div>
      <header className="main-header">
        <h1 className="main-header__h1">Publicerat</h1>
      </header>

      <ul className="press__post-list">
        {newsList.map(
          ({ fields: { title, url, publishedDate }, sys: { id } }) => (
            <li className="press__published-container" key={id}>
              <Link className="press__post-text-container" href={url}>
                <h3 className="press__post-title">{title}</h3>
                <p className="main-p press__post-description">
                  Publicerat: {publishedDate}
                </p>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default Published
