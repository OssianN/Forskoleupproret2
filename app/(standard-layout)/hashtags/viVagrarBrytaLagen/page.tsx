import { LawList } from '@/components/LawSection/LawList'
import { client } from '@/contentful'
import thousand from '@/images/1000.svg'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { EntryFieldTypes } from 'contentful'
import Image from 'next/image'

type ViVagrarBrytaLagenEntry = {
  contentTypeId: 'pressatLage'
  fields: {
    title: EntryFieldTypes.Text
    subTitle: EntryFieldTypes.Text
    introParagraph: EntryFieldTypes.RichText
    introBox: EntryFieldTypes.RichText
  }
}

const ViVagrarBrytaLagen = async () => {
  const { title, subTitle, introParagraph, introBox } = (
    await client.getEntry<ViVagrarBrytaLagenEntry>('4VOa7y5lFNtsRY07XG1Kyt')
  ).fields

  const [span1, span2, span3, span4] = title.split(' ')

  return (
    <div className="vi-vagrar-bryta-lagen__container">
      <header className="main-header laws">
        <h1 className="main-h1">
          <span style={{ display: 'block' }}>{span1}</span>
          <span style={{ display: 'block' }}>{`${span2} ${span3}`}</span>
          <span
            className="main-header__h1 vi-vagrar-bryta-lagen__h1--big"
            style={{ display: 'block' }}
          >
            {span4}
          </span>
        </h1>
        <p className="main-p">{subTitle}</p>
      </header>

      <div className="vi-vagrar-bryta-lagen__intro-paragraph">
        {documentToReactComponents(introParagraph)}
      </div>

      <div className="vittnesmal__container">
        <Image src={thousand} alt="1000" className="vittnesmal__img" />
        <div className="vittnesmal__textbox">
          {documentToReactComponents(introBox)}
        </div>
      </div>

      <LawList />
    </div>
  )
}

export default ViVagrarBrytaLagen
