import { createClient, prismicLoader } from '../../prismic/client'
import Image from 'next/image'
import * as prismicH from '@prismicio/helpers'
import { BandDocument } from '../../types.generated'
import { PrismicRichText } from '@prismicio/react'
import { ReactElement } from 'react'
import FixedNavbar from '../../layouts/FixedNavbar'
import Link from 'next/link'

interface BandProps {
  band: BandDocument
  navigation: any
  settings: any
}

function Band({ band, navigation, settings }: BandProps) {
  console.log(band.data.links)
  return (
    <div>
      <div className='relative h-screen'>
        <Image
          className='object-cover grayscale'
          src={band.data.headerImage.url as string}
          layout='fill'
          loader={prismicLoader}
        />
        <h1 className='py-8 absolute bottom-0 w-full text-center text-white font-semibold'>
          {band.data.name}
        </h1>
      </div>
      <div className='px-8 py-20'>
        <div className='grid lg:grid-cols-2 gap-4'>
          <div className='w-full space-y-8'>
            <div>
              <span className='text-sm'>{band.data.loacation}</span>
            </div>

            <div>
              <p className='block text-sm pb-4'>Booking Agent</p>
              {band.data.agent.map((agent) => (
                <a href={`mailto:${agent.email}`} className='text-lg'>
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
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          <div className='text-black'>
            <div className='prose w-full'>
              <PrismicRichText field={band.data.bio} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Band.getLayout = (page: ReactElement) => {
  return <FixedNavbar>{page}</FixedNavbar>
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
