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

function Navbar() {
  useGSAP(() => {
    gsap.to('.themeIcon .icon', {
      rotate: 360,
      duration: 3,
      dealy: 1
    })
  })

  const { theme, toggleTheme } = useTheme();

  // const[currentTheme, setCurrentTheme] = useState("light")
  // function toggleCurrentTheme() {
  //   if(currentTheme === "light") {
  //     setCurrentTheme("dark")
  //     return 
  //   }
  //   setCurrentTheme("light")
  // }
  // useEffect(() => {
  //   document.documentElement.setAttribute("data-theme", currentTheme)
  //   localStorage.setItem('Theme', currentTheme);
  // }, [currentTheme]);
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem('Theme');
  //   if (savedTheme) {
  //     setCurrentTheme(savedTheme);
  //   }
  // }, []);

  return (
    <div className='navbar'>
      <div className="navbarBody">
        <div className="navbarContainer flex-e">
          <div className="navIcons flex">
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
