import { EventDocument } from '../../types.generated'
import { createClient } from '../../prismic/client'
import Link from 'next/link'
import { longDate } from '../../utils/time'
import { NavSpacer } from '../../components/NavSpacer'
import { PrismicNextImage } from '@prismicio/next'
import Image from 'next/image'

export function EventRow({ event }: { event: EventDocument }) {
  const { data } = event

  return (
    <div className='group'>
      <Link href={`/events/${event.uid}`}>
        <div className='border-t py-4 cursor-pointer border-black mb-8 grid grid-cols-2'>
          <h2 className='mb-4 col-span-2 md:col-span-1'>{data.title}</h2>

          <div className='col-span-2'>
            <div className='flex flex-col md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 text-xl'>
              <div className=''>
                <p className=''>{longDate(data.date || '')}</p>
                <p className='pb-4'>
                  {data.startTime} - {data.endTime}
                </p>
                {data.ticketLink && (
                  <a
                    href={data.ticketLink}
                    className='hidden max-w-min md:block'
                    target='_blank'
                    rel='noreferrer'
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className='flex flex-row items-center space-x-2 max-w-fit border-b border-transparent hover:border-black'>
                      <span className='block'>Tickets</span>
                      <div className='flex items-center justify-center h-5 w-5 flex-shrink-0'>
                        <Image
                          src={'/UpRightArrow.svg'}
                          height={16}
                          width={16}
                        />
                      </div>
                    </div>
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
        </div>
      </Link>
      <div className='hidden md:block fixed h-screen top-0 bottom-0 right-8 w-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
        <div className='image-container'>
          <PrismicNextImage
            className='w-full'
            field={data.flyer}
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>
    </div>
  )
}

export default function EventIndex({ events, navigation, settings }: any) {
  return (
    <div>
      <NavSpacer />
      <div className='px-8 py-4'>
        {events.map((event: EventDocument) => (
          <EventRow event={event} key={event.uid} />
        ))}
        <div className='border-t border-black pt-8'>
          <Link href={'/past-events'}>
            <h2 className='underline cursor-pointer'>Past Events</h2>
          </Link>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ params, previewData }: any) {
  const client = createClient({ previewData })

  const events = await client.getAllByType('event', {
    orderings: {
      field: 'my.event.date',
    },
  })

  const filteredEvents = events.filter((event: EventDocument) => {
    const date = event.data.date || ''
    return new Date(date) > new Date()
  })

  return {
    props: {
      events: filteredEvents,
    },
  }
}
