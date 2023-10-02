import { client } from '@/contentful'
import { Person } from './Person'
import { EntryFieldTypes } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getImage } from '@/utils'

export type PersonEntry = {
  contentTypeId: 'people'
  fields: {
    name: EntryFieldTypes.Text
    description: EntryFieldTypes.RichText
    image: EntryFieldTypes.AssetLink
  }
}

export const PeopleList = async () => {
  const people = await client.getEntries<PersonEntry>({
    content_type: 'people',
  })
  return (
    <section className="person-thumbnails__container">
      {people.items.map(({ fields: { name, description, image } }, i) => {
        const descriptionText = documentToReactComponents(description)
        const imageObject = getImage(image)

        return (
          <Person
            key={name}
            name={name}
            description={descriptionText}
            image={imageObject}
            order={i}
          />
        )
      })}
    </section>
  )
}
