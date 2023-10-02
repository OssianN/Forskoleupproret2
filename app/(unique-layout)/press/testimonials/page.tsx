import BlogList from '@/components/press/BlogList'
import { client } from '@/contentful'
import { EntryFieldTypes } from 'contentful'

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

const Testimonials = async () => {
  const newsList = (
    await client.getEntries<NewsEntries>({
      content_type: 'blogPost',
    })
  ).items

  return (
    <>
      <header className="main-header">
        <h1 className="main-header__h1">Vittnesmål</h1>
      </header>
      <BlogList list={newsList.filter(({ fields }) => !!fields.vittnesmal)} />
    </>
  )
}

export default Testimonials
