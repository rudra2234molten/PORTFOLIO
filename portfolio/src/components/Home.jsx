import React from 'react'
import Hero from './Hero'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

const Home = () => {
  return (
    <section className='w-full h-auto sm:pl-50 sm:pr-40 pt-20 sm:pt-10 bg-black text-white'>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </section>
  )
}

export default Home