import { client } from '@/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { EntryFieldTypes } from 'contentful'

type HistoryEntrySkeleton = {
  contentTypeId: 'historyPage'
  fields: {
    title: EntryFieldTypes.Text
    subTitle: EntryFieldTypes.Text
    body: EntryFieldTypes.RichText
  }
}

const History = async () => {
  const { title, subTitle, body } = (
    await client.getEntry<HistoryEntrySkeleton>('6Lfxcuqivx5lCuaBOivQGD')
  ).fields

  return (
    <div className="history__container">
      <div className="main-header">
        <h1 className="main-header__h1">{title}</h1>
      </div>
      <h2 className="main-h2 history__ankis-title">{subTitle}</h2>
      <div className="history__ankis-paragraph grid-view">
        {documentToReactComponents(body)}
      </div>
    </div>
  )
}

export default History
