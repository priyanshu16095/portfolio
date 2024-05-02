import React from 'react'
import './style.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import mine_img from '../assets/mine_img.jpg'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import Marquee from "react-fast-marquee";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Hero() {
  return (
    <div className='hero'>
      <div className="heroBody">
        <div className="responsiveHero flex-v">
          <p className='md-font'>Hi, I'm</p>
          <div className="about">
            <h1 className='hi'>Priyanshu</h1>
            <h1 className='build'>I build things for the web</h1>
          </div>
          <p className='location'>Full Stack Development and Devops</p>
          <p>I like to craft solid and scalable frontend products with great user experiences.</p>
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
