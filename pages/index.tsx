import { NavbarSpacerLayout } from '../layouts/MainLayout'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <div className='flex flex-col justify-center md:min-h-[calc(100vh_-_150px)]'>
      <div className='py-4 px-8'>
        <div className='grid grid-cols-8'>
          <h1 className='mb-4 col-span-8 md:col-span-6 lg:col-span-5'>
            Irrelevant is a booking/promotions agency, record label, consulting
            agency, and cultural advocate based out of Atlanta, GA.
          </h1>
          <p className=' col-span-6 md:col-span-4'>
            We work closely with national artists/booking agencies and local
            venues/community organizations to provide unique and meaningful
            programming in the southeastern United States and beyond. Irrelevant
            also offers design and photography services, social media
            management, and DJ services per special request.
          </p>
        </div>
      </div>
    </div>
  )
}

Home.getLayout = (page) => <NavbarSpacerLayout>{page}</NavbarSpacerLayout>

export default Home
