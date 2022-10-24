import { CourseCard } from './components/CourseCard';
import { Header } from './components/Header';
import imageHeroMobile from './assets/images/image-hero-mobile.webp';
import imageHeroMobile2x from './assets/images/image-hero-mobile@2x.webp';
import imageHeroTablet from './assets/images/image-hero-tablet.webp';
import imageHeroTablet2x from './assets/images/image-hero-tablet@2x.webp';
import imageHeroDesktop from './assets/images/image-hero-desktop.webp';
import imageHeroDesktop2x from './assets/images/image-hero-desktop@2x.webp';
import iconAnimation from './assets/icons/icon-animation.svg';
import iconBusiness from './assets/icons/icon-business.svg';
import iconCrypto from './assets/icons/icon-crypto.svg';
import iconDesign from './assets/icons/icon-design.svg';
import iconPhotography from './assets/icons/icon-photography.svg';
import ButtonOrange from './components/ButtonOrange';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      {/* Container that defines the limits of the image at the top right of the page with absolute positioning */}
      <div className='max-w-[1440px] mx-auto relative overflow-x-clip'>
        <Header />
        {/* Top section */}
        {/* Container that defines horizontal limits of the top section */}
        <div className='max-w-6xl mx-auto'>
          <div className='sm:px-10 sm:grid sm:grid-cols-[60%_auto] sm:mt-20 xl:mt-44'>
            <div className='px-4 sm:px-0'>
              <h1 className='text-dark font-extrabold text-[40px] leading-[50px] xl:text-[56px] xl:leading-[71px]'>Maximize skill, minimize budget</h1>
              <p className='font-medium text-gray mt-7 leading-7 max-w-md'>Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</p>
              <ButtonOrange />
            </div>
            <picture>
              <source srcSet={`${imageHeroDesktop}, ${imageHeroDesktop2x} 2x`} media='(min-width: 1280px)' />
              <source srcSet={`${imageHeroTablet}, ${imageHeroTablet2x} 2x`} media='(min-width: 640px)' />
              <source srcSet={`${imageHeroMobile}, ${imageHeroMobile2x} 2x`} />
              <img src={`${imageHeroDesktop}`} alt="hero" className='mt-5 mx-auto -z-10 sm:mt-0 sm:absolute sm:-top-20 sm:-right-[19rem] xl:-top-[10rem] xl:-right-[22rem]' />
            </picture>
          </div>
        </div>
      </div>
      {/* Courses section */}
      {/* Container that defines the full page width gradient */}
      <div className='bg-gradient-to-b from-white to-[#F0F1FF]'>
        {/* Container that defines horizontal limits of the content */}
        <div className='max-w-6xl mx-auto px-4 sm:px-10 pb-20 sm:mt-56 lg:mt-56'>
          <div className='mt-12 grid gap-y-12 sm:grid-cols-courses sm:gap-x-3 lg:gap-x-6 xl:gap-y-20'>
            <p className='font-bold text-2xl bg-gradient-to-b from-orange to-light-purple text-white py-6 px-7 inline-block rounded-xl min-[692px]:pt-14 xl:text-[32px] xl:leading-10 xl:pt-10'>Checkout our most popular courses!</p>
            <CourseCard
              icon={iconAnimation}
              title='Animation'
              description='Learn the latest animation techniques to create stunning motion design and captivate your audience.' />
            <CourseCard
              icon={iconDesign}
              title='Design'
              description='Create beautiful, usable interfaces to help shape the future of how the web looks.' />
            <CourseCard
              icon={iconPhotography}
              title='Photography'
              description='Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.' />
            <CourseCard
              icon={iconCrypto}
              title='Crypto'
              description='All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.' />
            <CourseCard
              icon={iconBusiness}
              title='Business'
              description='A step-by-step playbook to help you start, scale, and sustain your business without outside investment.' />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
