import { PrismicRichText } from '@prismicio/react'
import ImageGallery from './Slices/ImageGallery'
import { ImageGallerySlice, BasicContentSlice } from '../types.generated'

interface Props {
  slices: (ImageGallerySlice | BasicContentSlice)[]
}

export default function SliceRenderer({ slices }: Props) {
  const content = slices.map((slice) => {
    console.log(slice)
    if (slice.slice_type === 'image_gallery') {
      return <ImageGallery slice={slice} />
    }

    if (slice.slice_type === 'basic_content') {
      return (
        <div className='space-y-4'>
          <PrismicRichText field={slice.primary.body} />
        </div>
      )
    }

    return null
  })

  return <>{content}</>
}
