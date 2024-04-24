import React, { useState } from 'react'
import data from './Projects/data'
import './style.css'

function MiniProjects() {
  const [selectedItem, setSelectedItem] = useState(0)
  return (
    <div className='miniprojects'>

      <div className="miniprojectsBody">
        <div className="miniprojectsContainer container">
          <div className="miniprojSidebar flex-v">
            <p className="title">Mini Projects</p>
            <div className="miniprojSidebarLinks flex-v">
            {data && data.map((item, index) => <p key={index} className='link' onClick={() => setSelectedItem(index)}>{item.name}</p>)}
            </div>
          </div>
          <div className="miniprojDisplay">
            {data && <div>{data[selectedItem].content}</div>}
          </div>
        </div>
      </div>

    </div>
  )
}

export default MiniProjects
