import { ImageType } from '@/types'
import Image from 'next/image'

type Props = {
  item: number
  image: ImageType
  isSelected: boolean
  handleThumbnailClick: (index: number) => void
}

export const CarouselThumbnails = ({
  item,
  image,
  isSelected,
  handleThumbnailClick,
}: Props) => {
  return (
    <button
      className="image-with-text__arrow-button"
      onClick={() => handleThumbnailClick(item)}
      type="button"
    >
      <Image
        className="image-with-text__arrow-button-image"
        style={{ outline: isSelected ? 'var(--thumbnail-border)' : 'none' }}
        src={`https:${image.fields?.file.url}`}
        alt={image.fields?.title ?? ''}
        {...image.fields?.file.details.image}
      />
    </button>
  )
}
