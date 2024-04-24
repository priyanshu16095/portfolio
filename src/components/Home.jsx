import React from 'react'
import MiniProjects from './MiniProjects'
import Contact from './Contact'
import Navbar from './Navbar'
import WhatIKnow from './WhatIKnow'
import Hero from './Hero'
import Projects from './Projects'

function Home() {
  return (
    <div className='home'>
      <div className="homeBody flex-v">
        <Navbar />
        <Hero />
        <Projects />
        <div className="homeProjects"><MiniProjects /></div>
        <WhatIKnow />
        <Contact />
      </div>
    </div>
  )
}

export default Home
