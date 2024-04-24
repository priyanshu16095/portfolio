import React from 'react'
import './style.css'
import mine_img from '../assets/mine_img.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbarBody">
        <div className="navbarContainer lightpContainer flex-s">
          <div className="navbarLeft flex">
            <div className="round"><img src={mine_img} className='mine_img' /></div>
            <div className="info flex-v">
              <p className="name">Priyanshu Gupta</p>
              <p className="email">priyanshu@gmail.com</p>
            </div>
          </div>
          <div className="navbarRight flex">
            <button className="button">Download CV</button>
            <div className="round"><LinkedInIcon /></div>
            <div className="round"><GitHubIcon /></div>
            <div className="round"><LightModeIcon /></div>
            <div className="round"><MenuIcon /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
