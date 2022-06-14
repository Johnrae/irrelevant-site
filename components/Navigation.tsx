import Link from 'next/Link'

export default function Navigation() {
  return (
    <div className='flex flex-row justify-between items-center px-8 py-4'>
      <div>
        <Link href={'/'}>irrelevant</Link>
      </div>

      <div className='flex flex-row space-x-4'>
        <Link href={'/events'}>Events</Link>
        <Link href={'/consulting'}>Consulting</Link>
        <Link href={'/bands'}>Roster</Link>
        <Link href={'/shop'}>Shop</Link>
      </div>
    </div>
  )
}
