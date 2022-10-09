import { BandDocument } from '../../types.generated'
import { createClient } from '../../prismic/client'
import Link from 'next/link'
import { NavSpacer } from '../../components/NavSpacer'
import { useFillScreen } from '../../hooks/useFillScreen'
import { PrismicNextImage } from '@prismicio/next'

function BandRow({ band }: { band: BandDocument }) {
  const { data } = band
  return (
    <div className='relative group'>
      <Link href={`/bands/${band.uid}`}>
        <div>
          <div className='border-t py-3 cursor-pointer border-black relative z-10'>
            <p className='mb-10'>{data.loacation}</p>
            <h1 className=''>{data.name}</h1>
          </div>
          <div className='hidden md:block transition duration-200 opacity-0 group-hover:opacity-100 absolute right-0 top-0 p-4 z-0 h-40 w-60'>
            <PrismicNextImage
              className='object-cover grayscale z-0 '
              field={data.headerImage}
              imgixParams={{ w: 200, h: 150 }}
            />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default function BandIndex({ bands }: any) {
  const { minHeight } = useFillScreen()
  return (
    <div style={{ minHeight }}>
      <NavSpacer />
      <div className='px-8 py-4 grid md:grid-cols-2 gap-8'>
        {bands.map((band: BandDocument) => (
          <BandRow band={band} key={band.uid} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps({ params, previewData }: any) {
  const client = createClient({ previewData })

  const bands = await client.getAllByType('band', {
    orderings: {
      field: 'my.band.name',
    },
  })

  return {
    props: {
      bands,
    },
  }
}
