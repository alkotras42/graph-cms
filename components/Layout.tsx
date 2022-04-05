import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import Header from './Header'

const Layout = ({ children }: LayoutInterface): JSX.Element => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

interface LayoutInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode
}

export default Layout
