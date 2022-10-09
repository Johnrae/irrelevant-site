import { BandDocument } from '../../types.generated'
import { createClient, prismicLoader } from '../../prismic/client'
import Link from 'next/link'
import Image from 'next/image'
import { NavSpacer } from '../../components/NavSpacer'
import { useFillScreen } from '../../hooks/useFillScreen'

function BandRow({ band }: { band: BandDocument }) {
  const { data } = band
  const imageUrl =
    data.headerImage?.thumbnail?.url || (data.headerImage.url as string)
  return (
    <div className='relative group'>
      <Link href={`/bands/${band.uid}`}>
        <div>
          <div className='border-t py-3 cursor-pointer border-black relative z-10'>
            <p className='mb-10'>{data.loacation}</p>
            <h1 className=''>{data.name}</h1>
          </div>
          <div className='hidden md:block transition duration-200 opacity-0 group-hover:opacity-100 absolute right-0 top-0 p-4 z-0'>
            <Image
              className='object-cover grayscale z-0'
              src={imageUrl}
              loader={prismicLoader}
              height={150}
              width={200}
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

  const bands = await client.getAllByType('band')

  return {
    props: {
      bands,
    },
  }
}
