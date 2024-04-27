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

function Hero() {
  return (
    <div className='hero'>
      <div className="heroBody">
        <div className="heroContainer flex-v">
          <div className='about flex-v'>
            <h1 className='hi'>Hi, I'm Priyanshu</h1>
            <h1 className='build'>I build things for the web</h1>
          </div>
          <div className="flex">
            <LocationOnIcon className='locationIcon' />
            <p className='location'>Full Stack Development and Devops</p>
          </div>
          <p className='like'>I like to craft solid and scalable frontend products with great user experiences.    </p>
          <div className="skillsMarquee flex">
            <div><FaHtml5 className='skillsIcon icon' /></div>
            <div><FaCss3Alt className='skillsIcon icon' /></div>
            <div><IoLogoJavascript className='skillsIcon icon' /></div>
            <div><FaReact className='skillsIcon icon' /></div>
            <div><FaJava className='skillsIcon icon' /></div>
            <div><SiSpringboot className='skillsIcon icon' /></div>
            <div><FaGitAlt className='skillsIcon icon' /></div>
            <div><FaDocker className='skillsIcon icon' /></div>
            <div><SiMysql className='skillsIcon icon' /></div>
          </div>
        </div>

        <div className="responsiveHero flex-v">
          <div className=""><img src={mine_img} className='mine_img_res' /></div>
          <div className='about flex-v'>
            <h1 className='hi'>Hi, I'm Priyanshu</h1>
            <h1 className='build'>I build things for the web</h1>
          </div>
          <p className='fullstack'>Full Stack Development & Devops</p>
          <div className="skillsMarqueeRes">
            <Marquee>
              <div><FaHtml5 className='skillsIcon' /></div>
              <div><FaCss3Alt className='skillsIcon' /></div>
              <div><IoLogoJavascript className='skillsIcon' /></div>
              <div><FaReact className='skillsIcon' /></div>
              <div><FaJava className='skillsIcon' /></div>
              <div><SiSpringboot className='skillsIcon' /></div>
              <div><FaGitAlt className='skillsIcon' /></div>
              <div><FaDocker className='skillsIcon' /></div>
              <div><SiMysql className='skillsIcon' /></div>
            </Marquee>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Hero
