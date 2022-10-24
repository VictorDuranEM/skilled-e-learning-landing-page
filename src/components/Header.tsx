import logoDark from '../assets/icons/logo-dark.svg';
import ButtonDark from './ButtonDark';

export function Header() {
  return (
    <header className='py-6 px-4 max-w-6xl mx-auto flex items-center justify-between sm:px-8'>
      <img src={logoDark} alt="logo" className='w-[89px] xl:w-[114px]'/>
      <ButtonDark />
    </header>
  )
}
