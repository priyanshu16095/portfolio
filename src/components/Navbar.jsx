import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '../theme-context';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Sidebar from './Sidebar'
import AnimationIcon from '@mui/icons-material/Animation';
import {AnimationState} from '../AnimationContext'
import MotionPhotosOffIcon from '@mui/icons-material/MotionPhotosOff';

function Navbar() {
  useGSAP(() => {
    gsap.to('.themeIcon .icon', {
      rotate: 360,
      duration: 3,
      dealy: 1
    })
  })

  const { theme, toggleTheme } = useTheme();
  const{showAnimation, setShowAnimation} = AnimationState()

  return (
    <div className='navbar'>
      <div className="navbarBody">
        <div className="navbarContainer flex-e">
          <div className="navIcons flex">
            <div className="round" onClick={() => setShowAnimation(!showAnimation)}>{showAnimation ? <MotionPhotosOffIcon className='icon' /> : <AnimationIcon className='icon' />}</div>
            <div className="round themeIcon" onClick={toggleTheme}>
              {theme === 'dark' ? <DarkModeIcon className='icon' /> : <LightModeIcon className='icon' />}
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
