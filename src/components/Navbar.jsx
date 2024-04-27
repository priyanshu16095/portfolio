import React, { useState } from 'react'
import './style.css'
import mine_img from '../assets/mine_img.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useTheme} from '../theme-context'

function Navbar() {
  const {theme, toggleTheme} = useTheme()

  const[isOpen, setIsOpen] = useState(false)
  // const[isDarkMode, setIsDarkMode] = useState(false)
  return (
    <div className='navbar'>
      <div className="navbarBody">
        <div className="navbarContainer flex-s">
          <div className="navbarLeft">
            <div className=""><img src={mine_img} className='mine_img' /></div>
            <div className="info flex-v">
              <p className="name">Priyanshu Gupta</p>
              <p className="email">priyanshu@gmail.com</p>
            </div>
          </div>
          <div className="navbarRight flex">
            <button className="button displayNone">Download CV</button>
            <a href="https://www.linkedin.com/in/priyanshu-gupta-960136303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className='round displayNone'><LinkedInIcon className='icon' /></a>
            <a href="https://github.com/priyanshu16095" target='_blank' className='round displayNone'><GitHubIcon className='icon' /></a>
            <div className="round" onClick={toggleTheme}>{theme === 'dark' ? <DarkModeIcon className='icon' /> : <LightModeIcon className='icon' />}</div>
            <div className="round displayNone" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <CloseIcon className='icon' /> : <MenuIcon className='icon' />}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
