import { createClient, prismicLoader } from '../../prismic/client'
import Image from 'next/image'
import * as prismicH from '@prismicio/helpers'
import { BandDocument } from '../../types.generated'
import { PrismicRichText } from '@prismicio/react'

interface BandProps {
  band: BandDocument
  navigation: any
  settings: any
}

function Band({ band }: BandProps) {
  return (
    <div>
      <div className='relative h-screen'>
        <Image
          className='object-cover grayscale'
          src={band.data.headerImage.url as string}
          layout='fill'
          loader={prismicLoader}
          alt='Band Header Image'
        />
        <div className='absolute bottom-20 w-full p-8 grid gap-4 grid-cols-3'>
          <h1 className='col-span-2 col-start-2 text-white'>
            {band.data.name}
          </h1>
        </div>
      </div>
      <div className='px-8 py-20 min-h-screen'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div className='w-full space-y-8'>
            <div>
              <span className='text-sm'>{band.data.loacation}</span>
            </div>

            <div>
              <p className='block text-sm pb-4'>Booking Agent</p>
              {band.data.agent.map((agent) => (
                <a
                  href={`mailto:${agent.email}`}
                  className='text-lg'
                  key={agent.email}
                >
                  <span className='block'>{agent.name}</span>
                  <span className='block'>{agent.email}</span>
                </a>
              ))}
            </div>

            <div>
              <p className='block text-sm pb-4'>Artist Links</p>
              {band.data.links.map((link) => (
                <a
                  // @ts-expect-error
                  href={link.url.link_type === 'Web' && link.url.url}
                  className='text-lg block'
                  key={link.title}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          <div className='lg:col-span-2 w-full break-words space-y-4'>
            <PrismicRichText field={band.data.bio} />
          </div>
        </div>
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
