import { client } from '@/contentful'
import { getImage } from '@/utils'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { EntryFieldTypes } from 'contentful'
import Image from 'next/image'

type PressatLageUnionEntries = {
  contentTypeId: 'pressatLageUnionComponent'
  fields: {
    name: EntryFieldTypes.Text
    logo: EntryFieldTypes.AssetLink
    body: EntryFieldTypes.RichText
  }
}

export const UnionList = async () => {
  const unions = (
    await client.getEntries<PressatLageUnionEntries>({
      content_type: 'pressatLageUnionComponent',
    })
  ).items

  return (
    <div className="fackforbund__container">
      {unions.map(({ fields: { name, body, logo } }) => (
        <div key={name} className="fackforbund__image-container">
          <Image
            className="fackforbund__image"
            src={`https:${getImage(logo).fields?.file.url}`}
            {...getImage(logo).fields?.file.details.image}
            alt={getImage(logo).fields?.title ?? ''}
          />
          <div className="fackforbund__body">
            {documentToReactComponents(body)}
          </div>
        </div>
      ))}
    </div>
  )
}
