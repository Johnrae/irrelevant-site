import { createClient, prismicLoader } from '../../prismic/client'
import Image from 'next/image'
import * as prismicH from '@prismicio/helpers'
import { BandDocument } from '../../types.generated'

interface BandProps {
  band: BandDocument
  navigation: any
  settings: any
}

export default function Band({ band, navigation, settings }: any) {
  console.log(band)
  return (
    <div>
      <div className='relative h-screen'>
        <Image
          className='object-cover'
          src={band.data.headerImage.url}
          layout='fill'
          loader={prismicLoader}
        />
      </div>
      <h1>{band.data.name}</h1>
    </div>
  )
}

export async function getStaticProps({ params, previewData }: any) {
  const client = createClient({ previewData })

  const band = await client.getByUID('band', params.id)
  console.log('band', band)
  return {
    props: {
      band,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const bands = await client.getAllByType('band')
  console.log('bands from paths', bands)

  return {
    paths: bands.map((band) => prismicH.asLink(band)),
    fallback: false,
  }
}
