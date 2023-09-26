import { client } from '@/contentful'
import { Entry, EntryFieldTypes } from 'contentful'
import { getImage } from '@/utils'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { ImageWithText } from './ImageWithText'
import { ImageType } from '@/types'
import LinkList from './LinkList'

type ImageWithTextEntries = {
  contentTypeId: 'pressatLageImageWithText'
  fields: {
    title: EntryFieldTypes.Text
    images: EntryFieldTypes.AssetLink[]
    body: EntryFieldTypes.RichText
    order: EntryFieldTypes.Integer
    type: EntryFieldTypes.Text
  }
}

export const ContentList = async () => {
  const ImagesWithTextEntries = await client.getEntries<ImageWithTextEntries>({
    content_type: 'pressatLageImageWithText',
  })

  return (
    <>
      {ImagesWithTextEntries.items
        .sort((a, b) => a.fields.order - b.fields.order)
        .map(({ fields: { title, body, images, type }, sys: { id } }) => {
          const imageList = (images as ImageType[]).map(image =>
            getImage(image)
          )
          const bodyNode = documentToReactComponents(body)

          if (type === 'normal') {
            return (
              <ImageWithText
                key={id}
                title={title}
                images={imageList}
                body={bodyNode}
              />
            )
          }

          if (type === 'links') {
            return (
              <LinkList
                key={id}
                title={title}
                image={imageList[0]}
                links={bodyNode}
              />
            )
          }
        })}
    </>
  )
}
