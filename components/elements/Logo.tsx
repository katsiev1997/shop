import Link from 'next/link'

export const Logo = () => (
  <Link className='logo' href='/'>
    <img
      className='logo__img'
      src='../../public/img/Rostelecom.svg'
      alt='Rostelecom'
    />
  </Link>
)
