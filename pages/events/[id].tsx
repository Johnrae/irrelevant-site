import { createClient, prismicLoader } from '../../prismic/client'
import Image from 'next/image'
import * as prismicH from '@prismicio/helpers'
import { EventDocument } from '../../types.generated'
import { PrismicRichText } from '@prismicio/react'
import { longDate } from '../../utils/time'

interface EventProps {
  event: EventDocument
  navigation: any
  settings: any
}

function Event({ event }: EventProps) {
  const { data } = event

  return (
    <div>
      <div className='relative h-screen'>
        <Image
          className='object-cover'
          src={event.data.featuredImage.url as string}
          layout='fill'
          loader={prismicLoader}
          alt='Event Header Image'
        />
        <div className='absolute text-center w-full bottom-1/2 translate-y-1/2'>
          <h1 className='py-8 text-center text-white font-semibold drop-shadow-md'>
            {event.data.title}
          </h1>
          {data.ticketLink && (
            <a href={data.ticketLink} target='_blank' rel='noreferrer'>
              <h1 className='text-white font-semibold drop-shadow-md'>
                Buy Tickets
              </h1>
            </a>
          )}
        </div>
      </div>

      <div className='px-8 py-20 grid grid-cols-2 gap-4'>
        <div className='col-span-2 md:col-span-1'>
          <div className='mx-auto text-black'>
            <h2 className='mb-4'>{data.title}</h2>
            <p className=''>{longDate(data.date || '')}</p>
            <p>
              {data.startTime} - {data.endTime}
            </p>
            <p className=''>{data.venueName}</p>
            <p>{data.venueAddress}</p>
            <p className=''>{data.price}</p>
            <p>{data.ages}</p>

            {data.ticketLink && (
              <a href={data.ticketLink} target='_blank' rel='noreferrer'>
                Tickets
              </a>
            )}
          </div>
        </div>
        <div className='col-span-2 md:col-span-1'>
          <div className='prose break-words'>
            <PrismicRichText field={event.data.body} />
          </div>
        </div>
      </div>
    </div>
  )
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
