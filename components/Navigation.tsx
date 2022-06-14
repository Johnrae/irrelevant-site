import Link from 'next/Link'

export default function Navigation() {
  return (
    <div className='flex flex-row justify-between items-center'>
      <div>
        <Link href={'/'}>Irrelevant</Link>
      </div>

      <div>
        <Link href={'/events'}>Events</Link>
        <Link href={'/consulting'}>Consulting</Link>
        <Link href={'/bands'}>Roster</Link>
        <Link href={'/shop'}>Shop</Link>
      </div>
    </div>
  )
}
