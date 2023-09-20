import type { EntryFieldTypes } from 'contentful'

type ImageType = {
  fields?: {
    file: {
      url: string
      details: {
        image: {
          width: number
          height: number
        }
      }
    }
  }
}

export const getImageUrl = (image: any) => {
  const imageFields = image as ImageType
  return imageFields.fields?.file.url
}

export const getImageSize = (image: any) => {
  const imageFields = image as ImageType
  return imageFields.fields?.file.details.image
}
