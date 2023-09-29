import { client } from '@/contentful'
import { getImage } from '@/utils'
import { EntryFieldTypes } from 'contentful'
import Image from 'next/image'

type PublishedEntries = {
  contentTypeId: 'publicerade'
  fields: {
    title: EntryFieldTypes.Text
    url: EntryFieldTypes.Text
    publishDate: EntryFieldTypes.Date
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
        <h1 className="main-header__h1">Published</h1>
      </header>

      <ul className="press__post-list">
        {newsList.map(({ fields: { title }, sys: { id } }) => {
          return (
            <div className="press__post-container" key={id}>
              <h3 className="press__post-title">{title}</h3>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Published
