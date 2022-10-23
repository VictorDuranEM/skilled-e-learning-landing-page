import { Header } from './components/Header';
import imageHeroMobile from './assets/images/image-hero-mobile.webp';
import imageHeroMobile2x from './assets/images/image-hero-mobile@2x.webp';
import imageHeroTablet from './assets/images/image-hero-tablet.webp';
import imageHeroTablet2x from './assets/images/image-hero-tablet@2x.webp';
import imageHeroDesktop from './assets/images/image-hero-desktop.webp';
import imageHeroDesktop2x from './assets/images/image-hero-desktop@2x.webp';

function App() {
  return (
    <div className='max-w-6xl mx-auto'>
      <Header />
      <main className='py-6 px-4 sm:px-8'>
        <div>
          <h1>Maximize skill, minimize budget</h1>
          <p>Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</p>
          <a href="#">Get Started</a>
        </div>
        <picture>
          <source srcSet={`${imageHeroDesktop}, ${imageHeroDesktop2x} 2x`} media='(min-width: 768px)' />
          <source srcSet={`${imageHeroTablet}, ${imageHeroTablet2x} 2x`} media='(min-width: 640px)' />
          <source srcSet={`${imageHeroMobile}, ${imageHeroMobile2x} 2x`}/>
          <img src={`${imageHeroDesktop}`} alt="hero" className='sm:absolute sm:-top-10 sm:-right-60'/>
        </picture>
      </main>
    </div>
  )
}

export default App
