import { createClient } from '../../prismic/client'
import * as prismicH from '@prismicio/helpers'
import { EventDocument } from '../../types.generated'
import { PrismicRichText } from '@prismicio/react'
import { longDate } from '../../utils/time'
import { PrismicNextImage } from '@prismicio/next'
import SliceRenderer from '../../components/SliceRenderer'
import Image from 'next/image'

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
        <PrismicNextImage
          className='object-cover'
          field={event.data.featuredImage}
          layout='fill'
        />
        <div className='absolute text-center w-full bottom-1/2 translate-y-1/2 px-20 max-w-1/2'>
          <h1 className='text-8xl text-white animate-bounce drop-shadow-lg'>
            ↓
          </h1>
        </div>
      </div>

      <div className='px-8 py-20 grid grid-cols-1 md:grid-cols-3 gap-4 min-h-screen'>
        <div className='col-span-1'>
          <div className='space-y-4 text-black'>
            <h2 className='mb-4'>{data.title}</h2>
            <div>
              <p className=''>{longDate(data.date || '')}</p>
              <p>
                {data.startTime} - {data.endTime}
              </p>
            </div>
            <div>
              <p className=''>{data.venueName}</p>
              <p>{data.venueAddress}</p>
            </div>
            <p className=''>{data.price}</p>
            <p>{data.ages}</p>

            {data.ticketLink && (
              <div>
                <a href={data.ticketLink} target='_blank' rel='noreferrer'>
                  <div className='flex flex-row items-center space-x-2 max-w-fit border-b border-transparent hover:border-black'>
                    <span className='block'>Tickets</span>
                    <div className='flex items-center justify-center'>
                      <Image
                        src={'/UpRightArrow.svg'}
                        height={16}
                        width={16}
                        alt='arrow'
                      />
                    </div>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
        <div className='col-span-1 md:col-span-2'>
          <div className='break-words space-y-4'>
            <PrismicRichText field={event.data.body} />
            <SliceRenderer slices={event.data.slices} />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps({ params, previewData }: any) {
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
