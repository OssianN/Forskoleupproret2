'use client'
import { useState, useEffect } from 'react'
import * as img from '@/images'
import Image, { StaticImageData } from 'next/image'

type Props = {
  personName: string
  setShowPerson: (className: string) => void
  showPerson: string
}

const Person = ({ personName, setShowPerson, showPerson }: Props) => {
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
          {personText}
        </div>
      </div>
    </div>
  )
}

export default Person
