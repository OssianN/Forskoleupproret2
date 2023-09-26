import { ImageType } from '@/types'
import Image from 'next/image'
import type { Dispatch, SetStateAction } from 'react'

type Props = {
  name: string
  image: ImageType
}

const PersonThumbnail = ({ name, image }: Props) => {
  return (
    <button className="person-thumbnails__button" name={name}>
      <Image
        className="person-thumbnails__img"
        src={`https:${image.fields?.file.url}`}
        {...image.fields?.file.details.image}
        alt={name}
      />
      <p className="person-thumbnails__name">{name.split(' ')[0]}</p>
    </button>
  )
}

export default PersonThumbnail
