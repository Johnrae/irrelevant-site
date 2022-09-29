import { BandDocument } from '../../types.generated'
import { PrismicText } from '@prismicio/react'
import { createClient } from '../../prismic/client'
import * as prismicH from '@prismicio/helpers'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Link from 'next/link'

function BandRow({ band }: { band: BandDocument }) {
  const { data } = band
  return (
    <div>
      <Link href={`/bands/${band.uid}`}>
        <div className='border-b py-3 cursor-pointer'>
          <p>{data.loacation}</p>
          <h1>{data.name}</h1>
        </div>
      </Link>
    </div>
  )
}

export default function BandIndex({ bands, navigation, settings }: any) {
  return (
    <div className='px-8 py-4 grid grid-cols-2 gap-8'>
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
