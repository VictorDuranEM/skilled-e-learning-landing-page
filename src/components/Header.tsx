import logoDark from '../assets/icons/logo-dark.svg';
import { DarkButton } from './DarkButton';

export function Header() {
  return (
    <header className='py-6 px-4 sm:px-8 flex items-center justify-between'>
      <img src={logoDark} alt="logo" className='w-24' />
      <DarkButton />
    </header>
  )
}
