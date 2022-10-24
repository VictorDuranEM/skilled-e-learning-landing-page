import logoLight from '../assets/icons/logo-light.svg';
import ButtonPurple from './ButtonPurple';

export function Footer() {
  return (
    <footer className='bg-dark'>
      <div className='py-6 px-4 max-w-6xl mx-auto flex items-center justify-between sm:px-8'>
        <img src={logoLight} alt="logo" className='w-[89px] xl:w-[114px]'/>
        <ButtonPurple />
      </div>
    </footer>
  )
}
