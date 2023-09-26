import { ImageType } from '@/types'
import Image from 'next/image'

export const CarouselArrows = ({
  item,
  image,
  isSelected,
  handleCarouselArrowPress,
}: {
  item: number
  image: ImageType
  isSelected: boolean
  handleCarouselArrowPress: (index: number) => void
}) => {
  return (
    <button
      className="image-with-text__arrow-button"
      onClick={() => handleCarouselArrowPress(item)}
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
