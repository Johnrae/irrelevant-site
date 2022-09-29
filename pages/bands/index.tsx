import { BandDocument } from '../../types.generated'
import { PrismicText } from '@prismicio/react'
import { createClient } from '../../prismic/client'
import * as prismicH from '@prismicio/helpers'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

function BandRow({ band }: { band: BandDocument }) {
  const { data } = band
  return (
    <div>
      <div>{data.name}</div>
      <div>
        <PrismicText field={data.bio} />
      </div>
    </div>
  )
}

export default function BandIndex({ bands, navigation, settings }: any) {
  console.log(bands)
  return (
    <div>
      {bands.map((band: BandDocument) => (
        <BandRow band={band} />
      ))}
    </div>
  )
}

export async function getStaticProps({ params, previewData }: any) {
  const client = createClient({ previewData })

  const bands = await client.getAllByType('band')

  console.log(bands)

  return {
    props: {
      bands,
    },
  }
}
