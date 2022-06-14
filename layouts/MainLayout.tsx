// components/layout.js

import * as React from 'react'
import Navbar from '../components/Navigation'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <div className='px-8 py-4'>
        <main>{children}</main>
      </div>
    </>
  )
}
