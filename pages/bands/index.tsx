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
        <div className='border-t py-3 cursor-pointer border-black'>
          <p className='mb-10'>{data.loacation}</p>
          <h1 className='font-semibold'>{data.name}</h1>
        </div>
      </Link>
    </div>
  )
}

export default function BandIndex({ bands, navigation, settings }: any) {
  return (
    <div className='px-8 py-4 grid grid-cols-2 gap-8'>
      {bands.map((band: BandDocument) => (
        <BandRow band={band} key={band.uid} />
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
