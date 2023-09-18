'use client'
import { useState, useEffect } from 'react'
import anki from './anki.json'
import katrin from './katrin.json'
import diana from './diana.json'
import annette from './annette.json'
import monica from './monica.json'
import annica from './annica.json'
import * as img from '@/images'
import Image, { StaticImageData } from 'next/image'

type Props = {
  personName: string
  setShowPerson: (className: string) => void
  showPerson: boolean
}

const Person = ({ personName, setShowPerson, showPerson }: Props) => {
  const [personImg, setPersonImg] = useState<StaticImageData>()
  const [personText, setPersonText] = useState<string[]>()

  const renderPersonParagraphs = (data: string[] | undefined) =>
    data?.map((paragraph, i) => {
      if (i === 0)
        return (
          <p key={i} className="person-content__bread-text main-p orange-text">
            {paragraph}
          </p>
        )
      return (
        <p key={i} className="person-content__bread-text main-p">
          {paragraph}
        </p>
      )
    })

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

  const handleHidePerson = () => setShowPerson('hide-person')

  return (
    <div className={`person-content__wrapper ${showPerson}`}>
      <div className="person-content__container">
        <button
          className="person-content__exit-person-button"
          onClick={handleHidePerson}
        >
          &#10005;
        </button>
        <Image
          className="person-content__img"
          src={personImg ?? ''}
          alt={personName}
        ></Image>
        <h2 className="main-h2 person-content__name-h2">{personName}</h2>
        <div className="person-content__bread-text">
          {personName === 'Anki Jansson' ? (
            <div className="person-content__anki-details">
              <p className="person-content__bread-text main-p">
                <b>Kontakt:</b>
                <br />
                mailadress under arbete.
                <br />
                <br />
                <b>Ansvarar för:</b>
                <br />
                Förskoleupprorets talesperson.
                <br />
                Administrerar vår Facebookgrupp samt vår Facebook-sida.
              </p>
            </div>
          ) : (
            ''
          )}
          {renderPersonParagraphs(personText)}
        </div>
      </div>
    </div>
  )
}

export default Person
