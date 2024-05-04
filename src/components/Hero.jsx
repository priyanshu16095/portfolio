import React from 'react'
import './style.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Hero() {
  return (
    <div className='hero'>
      <div className="heroBody">
        <div className="heroContainer flex-v">
          <p className='heroA'>Hi, I'm</p>
          <div className="about">
            <h1 className='heroB pri'>Priyanshu</h1>
            <h1 className='heroB build'>I build things for the web</h1>
          </div>
          <p className='heroA'>Full Stack Development and Devops</p>
          {/* <p className='like'>I like to craft solid and scalable frontend products with great user experiences.</p> */}
          <div className="resheroIcons flex">
            <a href="https://www.linkedin.com/in/priyanshu-gupta-960136303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className='round'><LinkedInIcon className='icon' /></a>
            <a href="https://github.com/priyanshu16095" target='_blank' className='round'><GitHubIcon className='icon' /></a>
            <a href="#" className='icon round'><EmailIcon /></a>
          </div>
          <button className="button">Download CV</button>
        </div>
      </div>

    </div>
  )
}

export default Hero
