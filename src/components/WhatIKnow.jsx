import React from 'react'
import './style.css'
import htmlIconSvg from '../assets/htmlIconSvg.svg'
import cssSvgIcon from '../assets/cssSvgIcon.svg'
import javascriptSvgIcon from '../assets/javascriptSvgIcon.svg'
import springSvgIcon from '../assets/springSvgIcon.svg'
import dockerSvgIcon from '../assets/dockerSvgIcon.svg'
import reactSvgIcon from '../assets/reactSvgIcon.svg'
import linuxSvgIcon from '../assets/linuxSvgIcon.svg'
import gitSvgIcon from '../assets/gitSvgIcon.svg'
import javaSvgIcon from '../assets/javaSvgIcon.svg'
import pythonSvgIcon from '../assets/pythonSvgIcon.svg'
import kubernetesvgIcon from '../assets/kubernetesSvgIcon.svg'
import redisSvgIcon from '../assets/redisSvgIcon.svg'
import tsSvgIcon from '../assets/tsSvgIcon.svg'
import figmaSvgIcon from '../assets/figmaSvgIcon.svg'

function WhatIKnow() {
    return (
        <div className='whatiknow'>
            <div className="whatiknowBody">
                <div className="whatiknowContainer container flex-v">

                    <p className="title">What I Know</p>

                    <div className="skills flex-v">
                        <div className="skillsIcons flex">
                            <div className="languages flex-v">
                                <p className="md-font">Languages and Tools</p>
                                <div className="icons flex">
                                    <img src={htmlIconSvg} className='skillsIcon' />
                                    <img src={cssSvgIcon} className='skillsIcon' />
                                    <img src={javascriptSvgIcon} className='skillsIcon' />
                                    <img src={javaSvgIcon} className='skillsIcon' />
                                    <img src={pythonSvgIcon} className='skillsIcon' />
                                    <img src={reactSvgIcon} className='skillsIcon' />
                                    <img src={springSvgIcon} className='skillsIcon' />
                                    <img src={gitSvgIcon} className='skillsIcon' />
                                    <img src={dockerSvgIcon} className='skillsIcon' />
                                    <img src={linuxSvgIcon} className='skillsIcon' />
                                    <img src={figmaSvgIcon} className='skillsIcon' />
                                </div>
                            </div>
                            <div className="learning flex-v">
                                <p className="md-font">Learning</p>
                                <div className="icons flex">
                                    <img src={tsSvgIcon} className='skillsIcon' />
                                    <img src={kubernetesvgIcon} className='skillsIcon' />
                                    <img src={redisSvgIcon} className='skillsIcon' />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default WhatIKnow
