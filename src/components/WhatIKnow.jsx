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

function WhatIKnow() {
    return (
        <div className='whatiknow'>
            <div className="whatiknowBody">
                <div className="whatiknowContainer container flex-v">

                    <p className="title">What I Know</p>

                    <div className="skills flex-v">
                        {/* <div className="languages flex-v">
                            <p className="md-font">Languages and Tools</p>
                            <div className="icons flex">
                                <img src={javaSvgIcon} className='skillsIcon' />
                                <img src={pythonSvgIcon} className='skillsIcon' />
                            </div>
                        </div> */}
                        <div className="flex-s">
                            <div className="frontend flex-v">
                                <p className="md-font">Frontend</p>
                                <div className="icons flex">
                                    <img src={htmlIconSvg} className='skillsIcon' />
                                    <img src={cssSvgIcon} className='skillsIcon' />
                                    <img src={javascriptSvgIcon} className='skillsIcon' />
                                    <img src={reactSvgIcon} className='skillsIcon' />
                                </div>
                            </div>
                            <div className="backend flex-v">
                                <p className="md-font">Backend</p>
                                <div className="icons flex">
                                    <img src={javaSvgIcon} className='skillsIcon' />
                                    <img src={pythonSvgIcon} className='skillsIcon' />
                                    <img src={springSvgIcon} className='skillsIcon' />
                                </div>
                            </div>
                            <div className="devops flex-v">
                                <p className="md-font">Devops</p>
                                <div className="icons flex">
                                    <img src={gitSvgIcon} className='skillsIcon' />
                                    <img src={dockerSvgIcon} className='skillsIcon' />
                                    <img src={linuxSvgIcon} className='skillsIcon' />
                                </div>
                            </div>
                            <div className="learning flex-v">
                                <p className="md-font">Learning</p>
                                <div className="icons flex">
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
