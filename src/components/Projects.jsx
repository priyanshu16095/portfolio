import React, { useState } from 'react'
import data from './Projects/data'
import './style.css'

function Projects() {
  const [selectedItem, setSelectedItem] = useState(0)
  return (
    <div className='projects'>

      <div className="projectsBody">
        <div className="projectsContainer lightpContainer">
          <div className="projSidebar flex-v">
            <p className="title">Mini Projects</p>
            <div className="projSidebarLinks flex-v">
            {data && data.map((item, index) => <p key={index} className='link' onClick={() => setSelectedItem(index)}>{item.name}</p>)}
            </div>
          </div>
          <div className="projDisplay">
            {data && <div>{data[selectedItem].content}</div>}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects
