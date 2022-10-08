import { ReactElement, useLayoutEffect, useState } from 'react'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  const [minHeight, setMinHeight] = useState('100vh')
  useLayoutEffect(() => {
    const footer = document.querySelector('footer')
    const footerHeight = footer?.clientHeight
    setMinHeight(`calc(100vh - ${footerHeight}px)`)
  })

  return (
    <div
      className='py-4 px-8 min-h-screen flex flex-col justify-center'
      style={{ minHeight }}
    >
      <div className='grid grid-cols-8'>
        <h1 className='mb-4 col-span-8 md:col-span-6 lg:col-span-5'>
          Irrelevant is a booking/promotions agency, record label, consulting
          agency, and cultural advocate based out of Atlanta, GA.
        </h1>
        <h4 className='text-lg col-span-6 md:col-span-4'>
          We work closely with national artists/booking agencies and local
          venues/community organizations to provide unique and meaningful
          programming in the southeastern United States and beyond. Irrelevant
          also offers design and photography services, social media management,
          and DJ services per special request.
        </h4>
      </div>
    </div>
  )
}

export default Home
