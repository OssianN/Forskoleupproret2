import { ImageType } from '@/types'
import Image from 'next/image'
import type { Dispatch, SetStateAction } from 'react'

type Props = {
  name: string
  image: ImageType
  setSelected: Dispatch<SetStateAction<boolean>>
}

const PersonThumbnail = ({ name, image, setSelected }: Props) => {
  return (
    <button
      className="person-thumbnails__button"
      name={name}
      onClick={() => setSelected(true)}
    >
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
