import React from 'react'
import Projects from './Projects'
import Contact from './Contact'
import Navbar from './Navbar'

function Home() {
  return (
    <div className='home'>
      <div className="homeBody flex-v">
        <Navbar />
        <div className="homeProjects"><Projects /></div>
        <Contact />
      </div>
    </div>
  )
}

export default Home
