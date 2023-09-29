import { client } from '@/contentful'
import { EntryFieldTypes } from 'contentful'
import HomeArticle from './HomeArticle'
import { getImage } from '@/utils'
import HomeArticleHashtag from './HomeArticleHashtag'

type HomeArticleEntries = {
  contentTypeId: 'landingPageCard'
  fields: {
    title: EntryFieldTypes.Text
    description: EntryFieldTypes.Text
    image: EntryFieldTypes.AssetLink
    link: EntryFieldTypes.Text
    isHashtag: EntryFieldTypes.Boolean
    order: EntryFieldTypes.Number
  }
}

export const HomeArticleList = async () => {
  const list = (
    await client.getEntries<HomeArticleEntries>({
      content_type: 'landingPageCard',
    })
  ).items

  return (
    <>
      {list
        .sort((a, b) => a.fields.order - b.fields.order)
        .map(({ fields: { title, description, image, link, isHashtag } }) => {
          const imageObject = getImage(image)

          return !isHashtag ? (
            <HomeArticle
              key={title}
              title={title}
              description={description}
              image={imageObject}
              link={link}
            />
          ) : (
            <HomeArticleHashtag title={title} link={link} />
          )
        })}
    </>
  )
}
