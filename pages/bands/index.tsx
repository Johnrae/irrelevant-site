import { BandDocument } from '../../types.generated'
import { PrismicText } from '@prismicio/react'
import { createClient } from '../../prismic/client'
import * as prismicH from '@prismicio/helpers'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Link from 'next/link'

function BandRow({ band }: { band: BandDocument }) {
  const { data } = band
  return (
    <Link href={`/bands/${band.uid}`}>
      <div className='border-b py-3 cursor-pointer'>
        <h2>{data.name}</h2>
        <p>{data.loacation}</p>
      </div>
    </Link>
  )
}

export default function BandIndex({ bands, navigation, settings }: any) {
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

  return {
    props: {
      bands,
    },
  }
}
