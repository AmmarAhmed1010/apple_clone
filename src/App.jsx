import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HIghlights from './components/HIghlights'

const App = () => {
  return (
  <main className='bg-black'>
   <Navbar/>
   <Hero/>
   <HIghlights/>
  </main>
  )
}

export default App