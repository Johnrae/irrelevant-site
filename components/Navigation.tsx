import Link from 'next/link'

export default function Navigation() {
  return (
    <>
      <nav className='difference fixed w-full flex flex-row justify-between items-center px-8 py-4 z-50 text-xl'>
        <div>
          <Link href={'/'}>Irrelevant</Link>
        </div>

        <div className='flex flex-row space-x-4'>
          <Link href={'/events'}>Events</Link>
          <Link href={'/bands'}>Roster</Link>
          <a
            target='_blank'
            rel='noreferrer'
            href={'https://irrelevantmusic.net/shop'}
          >
            Shop
          </a>
        </div>
      </nav>
    </>
  )
}
