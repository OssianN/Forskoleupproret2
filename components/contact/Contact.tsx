import Image from 'next/image'
import { client } from '@/contentful'
import { EntryFieldTypes } from 'contentful'
import { getImage } from '@/utils'
import './contact.scss'

type ContactLinkEntries = {
  contentTypeId: 'contactLink'
  fields: {
    name: EntryFieldTypes.Text
    image: EntryFieldTypes.AssetLink
    link: EntryFieldTypes.Text
    order: EntryFieldTypes.Number
  }
}

const Contact = async () => {
  const contactLinkEntries = (
    await client.getEntries<ContactLinkEntries>({
      content_type: 'contactLink',
    })
  ).items

  return (
    <section className="contact__container">
      <h2 className="contact__header">Kontakt</h2>

      <div className="contact__social-media-wrapper">
        {contactLinkEntries
          .sort((a, b) => a.fields.order - b.fields.order)
          .map(({ fields: { name, link, image } }) => (
            <a key={name} className="social-media__link" href={link}>
              <Image
                width={30}
                height={30}
                className="social-media__img"
                src={`https:${getImage(image).fields?.file.url}`}
                alt={getImage(image).fields?.title ?? ''}
              />
              {name}
            </a>
          ))}
      </div>
    </section>
  )
}

export default Contact
