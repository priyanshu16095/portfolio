import React, { useEffect, useRef } from 'react';
import './style.css';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '../theme-context';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';


function Navbar() {
  useGSAP(() => {
    gsap.to('.themeIcon .icon', {
      rotate: 360,
      duration: 3,
      dealy: 1
    })
  })

  const { theme, toggleTheme } = useTheme();

  return (
    <div className='navbar'>
      <div className="navbarBody">
        <div className="navbarContainer flex-e">
          <div className="navIcons flex">
            <div className="round themeIcon" onClick={toggleTheme}>
              {theme === 'dark' ? <DarkModeIcon className='icon' /> : <LightModeIcon className='icon' />}
            </div>
            <div className="round openIconDiv"><MenuIcon className='openIcon icon' /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
