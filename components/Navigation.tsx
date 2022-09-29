import Link from 'next/link'

interface NavigationProps {
  isFixedLayout?: boolean
}

export default function Navigation({ isFixedLayout = false }: NavigationProps) {
  return (
    <>
      <div className='fixed w-full flex flex-row justify-between items-center px-8 py-4 z-50'>
        <div>
          <Link href={'/'}>Irrelevant</Link>
        </div>

        <div className='flex flex-row space-x-4'>
          <Link href={'/events'}>Events</Link>
          <Link href={'/consulting'}>Consulting</Link>
          <Link href={'/bands'}>Roster</Link>
          <Link href={'/shop'}>Shop</Link>
        </div>
      </div>
    </>
  )
}
