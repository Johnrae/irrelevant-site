import * as React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navigation'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className='fill-screen'>{children}</main>
      <Footer />
    </>
  )
}
