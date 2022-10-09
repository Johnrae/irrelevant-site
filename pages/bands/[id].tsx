import { createClient } from '../../prismic/client'
import * as prismicH from '@prismicio/helpers'
import { BandDocument } from '../../types.generated'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import SliceRenderer from '../../components/SliceRenderer'

interface BandProps {
  band: BandDocument
  navigation: any
  settings: any
}

function Band({ band }: BandProps) {
  return (
    <div>
      <div className='relative h-screen'>
        <PrismicNextImage
          className='object-cover grayscale'
          field={band.data.headerImage}
          layout='fill'
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
              <span className='small'>{band.data.loacation}</span>
            </div>

            <div>
              <p className='block small pb-4'>Booking Agent</p>
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
              <p className='block small pb-4'>Artist Links</p>
              {band.data.links.map((link) => {
                if (!link.url || !link.title) return null
                return (
                  <a href={link.url} className='text-lg block' key={link.title}>
                    {link.title}
                  </a>
                )
              })}
            </div>
          </div>

          <div className='lg:col-span-2 w-full break-words space-y-4'>
            <PrismicRichText field={band.data.bio} />
            <SliceRenderer slices={band.data.slices} />
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
