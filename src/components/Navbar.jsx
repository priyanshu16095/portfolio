import React, { useEffect, useRef } from 'react';
import './style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '../theme-context';

// gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  // const fullRef = useRef(null);

  // useEffect(() => {
  //   const tl = gsap.timeline({ paused: true });

  //   tl.to(fullRef.current, {
  //     right: 0,
  //     duration: 0.8,
  //   })
  //     .from(fullRef.current.querySelectorAll('.navbarOpen p'), {
  //       x: 150,
  //       duration: 0.7,
  //       stagger: 0.3,
  //       opacity: 0,
  //     })
  //     .from(fullRef.current.querySelector('.navbarOpen .closeIcon'), {
  //       opacity: 0,
  //     });

  //   tl.pause();
  //   fullRef.current.animationTimeline = tl;
  // }, []);

  // const handleOpen = () => {
  //   fullRef.current.animationTimeline.play();
  // };
  
  // const handleClose = () => {
  //   fullRef.current.animationTimeline.reverse();
  // };

  const { theme, toggleTheme } = useTheme();

  return (
    <div className='navbar'>
      <div className="navbarBody">
        {/* <div className="navbarOpen flex-v" ref={fullRef}>
          <CloseIcon className='closeIcon' onClick={handleClose} />
          <p className="title">Home</p>
          <p className="title">Mini Projects</p>
          <p className="title">Contact</p>
          <p className="title">About</p>
        </div> */}

        <div className="navbarContainer flex-e">
          <div className="navIcons flex">
            <div className="round" onClick={toggleTheme}>
              {theme === 'dark' ? <DarkModeIcon className='icon' /> : <LightModeIcon className='icon' />}
            </div>
            <div className="round"><MenuIcon className='openIcon icon' /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
