import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PreventBackstack from './components/PreventBackstack';

const App = () => {
  const idx = 1;
  return (
    <div className='w-screen bg-zinc-800'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App