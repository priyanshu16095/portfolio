import React, { useState, useEffect } from 'react'
import ProgressBar from './ProgressBar'
import '../projects.css'

function Page() {
    const [value, setValue] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setValue((value) => value + 1)
        }, 100)
    }, [])

    return (
        <div className='progressbarPage'>
            <ProgressBar value={value} />
        </div>
    )
}

export default Page
