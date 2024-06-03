import React from 'react'
import MiniProjects from './MiniProjects'
import Contact from './Contact'
import Navbar from './Navbar'
import Hero from './Hero'
import Projects from './Projects'
import Footer from './Footer'
import WhatIKnow from './WhatIKnow'
import { AnimationState } from '../AnimationContext'

function Home() {
  const {showAnimation, setShowAnimation} = AnimationState()
  return (
    <div className='home'>
      <div className="homeBody flex-v">
        <Navbar />
        <Hero />
        <WhatIKnow />
        <div className={showAnimation ? 'block' : ''}><Projects /></div>
        <div className={showAnimation ? 'block' : ''}><MiniProjects /></div>
        <div className={showAnimation ? 'block' : ''}><Contact /></div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
