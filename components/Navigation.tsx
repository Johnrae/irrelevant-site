import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const closeModal = () => setIsOpen(false)

  const Links = () => (
    <div className='flex flex-col space-y-4 justify-center items-center md:space-y-0 md:flex-row md:justify-between md:items-baseline w-full'>
      <Link onClick={closeModal} href={'/events'}>
        <p
          className='block cursor-pointer hover:underline'
          onClick={closeModal}
        >
          Events
        </p>
      </Link>
      <Link onClick={closeModal} href={'/bands'}>
        <p
          className='block cursor-pointer hover:underline'
          onClick={closeModal}
        >
          Artists
        </p>
      </Link>
      <Link onClick={closeModal} href={'/consulting'}>
        <p
          className='block cursor-pointer hover:underline'
          onClick={closeModal}
        >
          Consulting
        </p>
      </Link>
      <Link onClick={closeModal} href={'/shop'}>
        <p
          className='block cursor-pointer hover:underline'
          onClick={closeModal}
        >
          Shop
        </p>
      </Link>
    </div>
  )

  return (
    <>
      <nav className='difference fixed w-full grid gap-4 grid-cols-8 justify-between items-center px-8 py-4 z-50 text-xl'>
        <div className='col-span-7 md:col-span-5'>
          <Link href={'/'}>Irrelevant</Link>
        </div>

        <div className='hidden col-span-3 md:flex flex-row space-x-8'>
          <Links />
        </div>

        <div className='md:hidden flex items-baseline justify-end'>
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
