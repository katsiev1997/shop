import { ReactNode } from 'react'
import { Header } from '../modules/Header/Header'

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    {children}
    <div className='' />
  </>
)
