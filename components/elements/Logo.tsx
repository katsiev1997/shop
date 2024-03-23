/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export const Logo = () => (
  <Link className='logo' href='/'>
    <img className='logo__img' src='/img/Rostelecom.svg' alt='Rostelecom' />
  </Link>
)
