import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const closeModal = () => setIsOpen(false)

  const Links = () => (
    <>
      <Link onClick={closeModal} href={'/events'}>
        Events
      </Link>
      <Link onClick={closeModal} href={'/bands'}>
        Artists
      </Link>
      <Link onClick={closeModal} href={'/consulting'}>
        Consulting
      </Link>
      <Link onClick={closeModal} href={'/shop'}>
        Shop
      </Link>
    </>
  )

  return (
    <>
      <nav className='difference fixed w-full flex flex-row justify-between items-center px-8 py-4 z-50 text-xl'>
        <div>
          <Link href={'/'}>Irrelevant</Link>
        </div>

        <div className='hidden md:flex flex-row space-x-8'>
          <Links />
        </div>

        <div className='md:hidden'>
          <button onClick={toggle}>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </span>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className='md:hidden fixed top-0 left-0 w-full h-full bg-white z-50'>
          <div className='flex flex-col justify-center items-center h-full relative space-y-4'>
            <Link onClick={closeModal} href={'/'}>
              Home
            </Link>
            <Links />
          </div>
          <button
            className='fixed top-0 right-0 px-8 py-4 cursor-pointer'
            onClick={toggle}
          >
            <span>Close</span>
          </button>
        </div>
      )}
    </>
  )
}
