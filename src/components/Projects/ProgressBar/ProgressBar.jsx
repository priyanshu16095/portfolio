import React, { useState, useEffect } from 'react'
import '../projects.css'

function ProgressBar({ value = 0 }) {
    const [percent, setPercent] = useState(value)

    useEffect(() => {
        setPercent(Math.min(100, Math.max(value, 0)))
    }, [value])

    return (
        <div className='progressbar'>

            <div className="progressbarBody flex-v">
                <p className="title">Progress Bar</p>
                <div className="progress">
                    <span style={{color: percent>49 ? 'white': 'black'}}>{percent.toFixed()}%</span>
                    <div style={{width: `${percent}%`}} />
                </div>
            </div>

        </div>
    )
}

export default ProgressBar
