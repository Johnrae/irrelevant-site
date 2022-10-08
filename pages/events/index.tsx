import { EventDocument } from '../../types.generated'
import { PrismicText } from '@prismicio/react'
import { createClient } from '../../prismic/client'
import * as prismicH from '@prismicio/helpers'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Link from 'next/link'
import { longDate } from '../../utils/time'
import { NavSpacer } from '../../components/NavSpacer'
import { useFillScreen } from '../../hooks/useFillScreen'

function EventRow({ event }: { event: EventDocument }) {
  const { data } = event
  return (
    <div>
      <Link href={`/events/${event.uid}`}>
        <div className='border-t py-4 cursor-pointer border-black mb-8'>
          <h2 className='mb-4'>{data.title}</h2>

          <div className='grid grid-cols-3 lg:grid-cols-4 gap-4 text-xl'>
            <div className='space-y'>
              <p className=''>{longDate(data.date || '')}</p>
              <p className='pb-4'>
                {data.startTime} - {data.endTime}
              </p>
              {data.ticketLink && (
                <a
                  href={data.ticketLink}
                  target='_blank'
                  rel='noreferrer'
                  onClick={(e) => e.stopPropagation()}
                >
                  Tickets
                </a>
              )}
            </div>

            <div className='space-y'>
              <p className=''>{data.venueName}</p>
              <p className=''>{data.price}</p>
            </div>

            <div className='space-y'>
              <p>{data.ages}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default function EventIndex({ events, navigation, settings }: any) {
  const { minHeight } = useFillScreen()
  return (
    <div style={{ minHeight }}>
      <NavSpacer />
      <div className='px-8 py-4'>
        {events.map((event: EventDocument) => (
          <EventRow event={event} key={event.uid} />
        ))}
      </div>
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
