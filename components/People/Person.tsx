'use client'
import type { ImageType } from '@/types'
import { type ReactNode, type CSSProperties, useState, useEffect } from 'react'
import { PersonThumbnail } from './PersonThumbnail'

type Props = {
  name: string
  description: ReactNode
  image: ImageType
  order: number
}

export const Person = ({ name, description, image, order }: Props) => {
  const [selected, setSelected] = useState<boolean>(false)
  const [hideArrow, setHideArrow] = useState<boolean>(false)
  const translateX: Record<number, string> = {
    0: '24vw',
    1: '0',
    2: '-24vw',
  }
  const translateXLarge: Record<number, string> = {
    0: '380px',
    1: '0',
    2: '-380px',
  }

  useEffect(() => {
    !selected && setHideArrow(false)
  }, [selected, setHideArrow])

  return (
    <div
      className="person__container"
      onMouseOver={() => setSelected(true)}
      onMouseOut={() => setSelected(false)}
      style={{
        zIndex: selected ? 200 : 0,
      }}
    >
      <PersonThumbnail name={name} image={image} setSelected={setSelected} />

      <div
        className="person-content__container"
        style={
          {
            display: selected ? 'flex' : 'none',
            '--person-details-translate-x': translateX[order % 3],
            '--person-details-translate-x-lg': translateXLarge[order % 3],
          } as CSSProperties
        }
      >
        <div
          className="person-content__wrapper"
          onScroll={() => setHideArrow(true)}
        >
          <button
            className="person-content__button--close"
            onClick={() => setSelected(false)}
          >
            &#x2717;
          </button>
          <h2 className="main-h2 person-content__name-h2">{name}</h2>
          <div className="person-content__bread-text main-p">{description}</div>
        </div>
        <div
          className="person-content__arrow-down"
          style={{ display: hideArrow ? 'none' : 'block' }}
        >
          &#709;
        </div>
      </div>
    </div>
  )
}
