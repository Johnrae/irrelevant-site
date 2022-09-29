import { createClient, prismicLoader } from '../../prismic/client'
import Image from 'next/image'
import * as prismicH from '@prismicio/helpers'
import { BandDocument } from '../../types.generated'
import { PrismicRichText } from '@prismicio/react'
import FixedLayout from '../../layouts/FixedLayout'
import { ReactElement } from 'react'

interface BandProps {
  band: BandDocument
  navigation: any
  settings: any
}

function Band({ band, navigation, settings }: any) {
  return (
    <div>
      <div className='relative h-screen'>
        <Image
          className='object-cover'
          src={band.data.headerImage.url}
          layout='fill'
          loader={prismicLoader}
        />
        <h1 className='py-8 absolute bottom-0 w-full text-center'>
          {band.data.name}
        </h1>
      </div>
      <div className='px-8 py-20'>
        <PrismicRichText field={band.data.bio} />
      </div>
    </div>
  )
}

export async function getStaticProps({ params, previewData }: any) {
  const client = createClient({ previewData })

  const band = await client.getByUID('band', params.id)

  return {
    props: {
      band,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const bands = await client.getAllByType('band')

  return {
    paths: bands.map((band) => prismicH.asLink(band)),
    fallback: false,
  }
}

export default Band
