import React from 'react'
import '../projects.css'

function Suggestions({ data, handleClick }) {
  return (
    <div className='suggestions flex-v'>
        {data && data.length ?
        data.map((item, index) => <p className='suggestion' key={index} onClick={handleClick}>{item}</p>)
        : null}
    </div>
  )
}

export default Suggestions
