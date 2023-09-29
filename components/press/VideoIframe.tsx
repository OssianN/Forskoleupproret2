'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ImageType } from '@/types'
import { getImage } from '@/utils'

type Props = {
  video: string
  image: ImageType | undefined
}

export const VideoIframe = ({ video, image }: Props) => {
  const [play, setPlay] = useState(false)

  if (!image) {
    return <></>
  }

  const handlePlay = () => {
    setPlay(!play)
  }

  return (
    <div className={'video__container'}>
      {!play ? (
        <Image
          className="article__image"
          src={`https:${getImage(image).fields?.file.url}`}
          alt={getImage(image).fields?.title ?? ''}
          {...getImage(image).fields?.file.details.image}
        />
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={video}
          frameBorder="0"
          allowFullScreen
          title="Embedded youtube"
        />
      )}
      {video && (
        <button className="video__play-button" onClick={handlePlay}>
          {play ? 'Stoppa' : 'Spela'} video &#x203A;
        </button>
      )}
    </div>
  )
}
