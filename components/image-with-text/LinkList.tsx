import Image from 'next/image'
import type { ImageType } from '@/types'
import type { ReactNode } from 'react'

type Props = {
  title: string
  image: ImageType
  links: ReactNode
}

const LinkList = ({ title, image, links }: Props) => {
  return (
    <div className="link-list">
      <h2 className="link-list__title">{title}</h2>
      <div className="link-list__links-container">{links}</div>
      <Image
        className="pressat__svg"
        src={`https:${image.fields?.file.url}`}
        alt={image.fields?.title ?? ''}
        {...image.fields?.file.details.image}
      />
    </div>
  )
}

export default LinkList
