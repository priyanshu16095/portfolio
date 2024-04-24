import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Slider from './Slider'
import '../projects.css'

export default function ImageSlider() {
    return (
        <div className='imageslider'>

            <div className="imagesliderBody flex-v">
                <p className="title">Image Slider</p>
                <div className="imagesliderMain">
                    <Slider />
                </div>
            </div>

        </div>
    )
}
