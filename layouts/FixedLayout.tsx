import * as React from 'react'
import FixedFooter from '../components/Footer/FixedFooter'
import Navbar from '../components/Navigation'

interface Props {
  children: React.ReactNode
}

export default function FixedLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <FixedFooter />
    </>
  )
}
