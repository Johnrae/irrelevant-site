import * as React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navigation'
import { NavSpacer } from '../components/NavSpacer'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export function NavbarSpacerLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <NavSpacer />
      <main>{children}</main>
      <Footer />
    </>
  )
}
