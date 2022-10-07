import { createClient, prismicLoader } from '../../prismic/client'
import Image from 'next/image'
import * as prismicH from '@prismicio/helpers'
import { EventDocument } from '../../types.generated'
import { PrismicRichText } from '@prismicio/react'
import { ReactElement } from 'react'
import FixedNavbar from '../../layouts/FixedNavbar'
import Link from 'next/link'
import { longDate } from '../../utils/time'

interface EventProps {
  event: EventDocument
  navigation: any
  settings: any
}

function Event({ event, navigation, settings }: EventProps) {
  const { data } = event

  return (
    <div>
      <div className='relative h-screen'>
        <Image
          className='object-cover'
          src={event.data.featuredImage.url as string}
          layout='fill'
          loader={prismicLoader}
        />
        <div className='absolute text-center w-full bottom-1/2 translate-y-1/2'>
          <h1 className='py-8 text-center text-white font-semibold drop-shadow-md'>
            {event.data.title}
          </h1>
          {data.ticketLink && (
            <a href={data.ticketLink} target='_blank'>
              <h1 className='text-white font-semibold drop-shadow-md'>
                Buy Tickets
              </h1>
            </a>
          )}
        </div>
      </div>

      <div className='px-8 py-20'>
        <div className='mx-auto prose text-black'>
          <p className=''>{longDate(data.date || '')}</p>
          <p>
            {data.startTime} - {data.endTime}
          </p>
          <p className=''>{data.venueName}</p>
          <p className=''>{data.price}</p>
          <p>{data.ages}</p>
          <PrismicRichText field={event.data.body} />
        </div>
      </div>
    </div>
  )
}

Event.getLayout = (page: ReactElement) => {
  return <FixedNavbar>{page}</FixedNavbar>
}

export async function getStaticProps({ params, previewData }: any) {
  const client = createClient({ previewData })

  const event = await client.getByUID('event', params.id)

  return {
    props: {
      event,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const events = await client.getAllByType('event')

  return {
    paths: events.map((event) => prismicH.asLink(event)),
    fallback: false,
  }
}

export default Event
