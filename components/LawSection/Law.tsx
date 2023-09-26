import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'

type Props = { title: string; subTitle: string; body: Document }

export const Law = ({ title, subTitle, body }: Props) => {
  return (
    <div className="law__container" key={title}>
      <h2 className="law__title">{title}</h2>
      <p className="law__subTitle">{subTitle}</p>
      <span className="law__section-span" />

      <div className="law__body">{documentToReactComponents(body)}</div>
    </div>
  )
}
