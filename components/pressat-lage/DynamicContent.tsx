import { client } from '@/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { EntryFieldTypes } from 'contentful'
import Image from 'next/image'

type PressatLageDynamicEntries = {
  contentTypeId: 'pressatLageDynamicComonent'
  fields: {
    content: EntryFieldTypes.RichText
  }
}

const DynamicContent = async () => {
  const dynamicContent = (
    await client.getEntries<PressatLageDynamicEntries>({
      content_type: 'pressatLageDynamicComonent',
    })
  ).items

  return (
    <>
      {dynamicContent.map(({ fields, sys: { id } }) => (
        <div className="pressat__dynamic-content grid-view" key={id}>
          {documentToReactComponents(fields.content, {
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: node => (
                <Image
                  src={`https:${node.data?.target?.fields?.file?.url}`}
                  alt={node.data?.target?.fields?.title}
                  {...node.data?.target?.fields?.file?.details.image}
                />
              ),
            },
          })}
        </div>
      ))}
    </>
  )
}

export default DynamicContent
