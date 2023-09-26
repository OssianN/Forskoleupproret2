import { client } from '@/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { EntryFieldTypes } from 'contentful'
import { Law } from './Law'

type ViVagrarBrytaLagenSectionEntries = {
  contentTypeId: 'viVagrarBrytaLagenSection'
  fields: {
    title: EntryFieldTypes.Text
    subTitle: EntryFieldTypes.AssetLink[]
    body: EntryFieldTypes.RichText
    order: EntryFieldTypes.Number
  }
}

export const LawList = async () => {
  const lawList = await client.getEntries<ViVagrarBrytaLagenSectionEntries>({
    content_type: 'viVagrarBrytaLagenSection',
  })

  return (
    <div className="law-list__container">
      {lawList.items
        .sort((a, b) => a.fields.order - b.fields.order)
        .map(({ fields }) => (
          <Law key={fields.title} {...fields} />
        ))}
    </div>
  )
}
