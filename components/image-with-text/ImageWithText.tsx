'use client'
import { ImageType } from '@/types'
import Image from 'next/image'
import { ReactNode, useRef, useState } from 'react'
import { CarouselArrows } from './CarouselArrows'

type Props = {
  title: string
  images: ImageType[]
  body: ReactNode
}
export const ImageWithText = ({ title, images, body }: Props) => {
  const [currentItem, setCurrentItem] = useState<number>(0)
  const ref = useRef<HTMLDivElement>(null)

  const handleCarouselArrowPress = (index: number) => {
    if (!ref.current) return
    const { children } = ref.current

    const child = children.item(index)
    if (!child) return

    setCurrentItem(index)
    child.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    })
  }

  return (
    <div className="image-with-text__container">
      <div className="image-with-text__carousel">
        <div className="image-with-text__image-container" ref={ref}>
          {images.map(image => (
            <Image
              key={image.fields?.file.url}
              className="image-with-text__image"
              src={`https:${image.fields?.file.url}`}
              alt={image.fields?.title ?? ''}
              {...image.fields?.file.details.image}
            />
          ))}
        </div>

        <div className="image-with-text__arrow-button-container">
          {images.map((image, i) => (
            <CarouselArrows
              key={image.fields?.file.url}
              item={i}
              image={image}
              isSelected={currentItem === i}
              handleCarouselArrowPress={handleCarouselArrowPress}
            />
          ))}
        </div>
      </div>

      <div className="image-with-text__text-container">
        <h2 className="image-with-text__title">{title}</h2>
        <div className="main-p grid__p">{body}</div>
      </div>
    </div>
  )
}
