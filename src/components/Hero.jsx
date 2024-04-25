import React from 'react'
import './style.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Hero() {
  return (
    <div className='hero'>
        <div className="heroBody center-both">
            <div className="heroContainer flex-v">
            <div className='about flex-v'>
            <h1 className='hi'>Hi, I'm Priyanshu</h1>
            <h1 className='build'>I build things for the web</h1>
            </div>
            <div className="flex">
                <LocationOnIcon className='locationIcon' />
            <p className='location'>Greater Noida, India</p>
            </div>
            <p className='like'>I like to craft solid and scalable frontend products with great user experiences.    </p>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
