import { EventDocument } from '../../types.generated'
import { createClient } from '../../prismic/client'
import { NavSpacer } from '../../components/NavSpacer'
import { EventRow } from '../events'

export default function EventIndex({ events, navigation, settings }: any) {
  return (
    <div>
      <NavSpacer />
      <div className='px-8 py-4'>
        {events.map((event: EventDocument) => (
          <EventRow event={event} key={event.uid} />
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps({ params, previewData }: any) {
  const client = createClient({ previewData })

  const events = await client.getAllByType('event', {
    orderings: {
      field: 'my.event.date',
      direction: 'desc',
    },
  })

  const filteredEvents = events.filter((event: EventDocument) => {
    const date = event.data.date || ''
    return new Date(date) < new Date()
  })

  return {
    props: {
      events: filteredEvents,
    },
  }
}
