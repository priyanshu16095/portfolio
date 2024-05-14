import React from 'react'
import './style.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Hero() {
  function handleClick() {
    window.open('https://github.com/priyanshu16095/resume/blob/main/resume.pdf', '_blank')
  }

  return (
    <div className='hero'>
      <div className="heroBody">
        
        <div className="heroBox flex-s">
          
          <div className="heroContainer flex-v">
            <p className='heroA'>Hi, I'm</p>
            <div className="about">
              <h1 className='heroB pri'>Priyanshu</h1>
              <h1 className='heroB build'>I build things for the web</h1>
            </div>
            <p className='heroA'>Full Stack Development and Devops</p>
            <div className="resheroIcons flex">
              <a href="www.linkedin.com/in/priyanshu16095" target='_blank' className='round'><LinkedInIcon className='icon' /></a>
              <a href="https://github.com/priyanshu16095" target='_blank' className='round'><GitHubIcon className='icon' /></a>
              <a href="#" className='icon round'><EmailIcon /></a>
            </div>
            <button className="button" onClick={handleClick}>Download CV</button>
          </div>

          <div className="heroRight displayNone">
            <div className="box box1 flex-v">
              <p className="heroB">{'<'} coder {'>'}</p>
              <p className="key">A optimistic Developer who writes clean and efficient code</p>
            </div>
            <div className="box box2"></div>
            <div className="box box3"></div>
            <div className="box box4 flex-v">
              <p className="heroB">about</p>
              <p className="key">First Year Engineering student looking for internships.</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Hero
