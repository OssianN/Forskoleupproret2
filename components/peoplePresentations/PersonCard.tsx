'use client'
import { useEffect, useState } from 'react'
import * as img from '@/images'
import anki from './anki.json'
import katrin from './katrin.json'
import diana from './diana.json'
import annette from './annette.json'
import monica from './monica.json'
import annica from './annica.json'
import './personPresentation.scss'
import Image from 'next/image'

const PersonCard = ({ personName, setShowPerson }) => {
  const [personImg, setPersonImg] = useState<StaticImageData>()
  const [personText, setPersonText] = useState<string[]>()

  useEffect(() => {
    switch (personName) {
      case 'Anki Jansson':
        setPersonImg(img.anki)
        setPersonText(anki.paragraphs)
        break
      case 'Katrin Nörthen':
        setPersonImg(img.katrin)
        setPersonText(katrin.paragraphs)
        break
      case 'Diana Hall':
        setPersonImg(img.diana)
        setPersonText(diana.paragraphs)
        break
      case 'Annette Nord':
        setPersonImg(img.annette)
        setPersonText(annette.paragraphs)
        break
      case 'Monica Lindström':
        setPersonImg(img.monica)
        setPersonText(monica.paragraphs)
        break
      case 'Annica Järking':
        setPersonImg(img.annica)
        setPersonText(annica.paragraphs)
        break
      default:
        break
    }
  }, [personName])

  const limitText = () => personText?.[0]

  const handleShowPerson = () => {
    setShowPerson('show-person')
  }

  return (
    <div className="person-card__container">
      <div className="person-card__header">
        <h2 className="main-h2 person-card__person-name">{personName}</h2>
        <Image
          className="person-card__person-img"
          src={personImg}
          alt={personName}
        ></Image>
      </div>
      <div className="person-card__text-container">
        <div className="person-card__bread-text main-p">{limitText()}</div>
        <button className="person-card__more-button" onClick={handleShowPerson}>
          Läs mer
        </button>
      </div>
    </div>
  )
}

export default PersonCard
