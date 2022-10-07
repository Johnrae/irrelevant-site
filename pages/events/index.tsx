import { EventDocument } from '../../types.generated'
import { PrismicText } from '@prismicio/react'
import { createClient } from '../../prismic/client'
import * as prismicH from '@prismicio/helpers'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Link from 'next/link'
import { longDate } from '../../utils/time'

function EventRow({ event }: { event: EventDocument }) {
  const { data } = event
  return (
    <div>
      <Link href={`/events/${event.uid}`}>
        <div className='border-t py-4 cursor-pointer border-black mb-8'>
          <h2 className='mb-4'>{data.title}</h2>

          <div className='grid grid-cols-3 lg:grid-cols-4 gap-4 text-xl'>
            <div className='space-y-2'>
              <p className=''>{longDate(data.date || '')}</p>
              <p>
                {data.startTime} - {data.endTime}
              </p>
            </div>

            <div className='space-y-2'>
              <p className=''>{data.venueName}</p>
              <p className=''>{data.price}</p>
            </div>

            <div className='space-y-2'>
              <p>{data.ages}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default function EventIndex({ events, navigation, settings }: any) {
  return (
    <div className='px-8 py-4'>
      {events.map((event: EventDocument) => (
        <EventRow event={event} key={event.uid} />
      ))}
    </div>
  )
}

export async function getStaticProps({ params, previewData }: any) {
  const client = createClient({ previewData })

  const events = await client.getAllByType('event')

  return {
    props: {
      events,
    },
  }
}
