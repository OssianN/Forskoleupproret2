import Image from 'next/image'

const PersonThumbnail = ({ name, active, handlePersonChange, img }) => {
  return (
    <button
      className={`person-thumbnails__button`}
      name={name}
      onClick={e => handlePersonChange(e)}
    >
      <Image className={`person-thumbnails__img`} src={img} alt={name}></Image>
      <h4
        className={`person-thumbnails__name-h4 ${
          active ? 'person-thumbnails__h4--active' : null
        }`}
      >
        {name}
      </h4>
    </button>
  )
}

export default PersonThumbnail
