import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Spotlight from './components/Spotlight'
import LocomotiveScroll from 'locomotive-scroll';
const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
  <main className='bg-black'>
   <Navbar/>
   <Hero/>
   <Spotlight/>
  </main>
  )
}

export default App