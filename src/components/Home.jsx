import React from 'react'
import MiniProjects from './MiniProjects'
import Contact from './Contact'
import Navbar from './Navbar'
import Hero from './Hero'
import Projects from './Projects'
import Footer from './Footer'

function Home() {
  return (
    <div className='home'>
      {/* <div className="scrollTracker"></div> */}
      <div className="homeBody flex-v">
        <Navbar />
        <Hero />
        <Projects />
        <div className="homeProjects"><MiniProjects /></div>
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Home
