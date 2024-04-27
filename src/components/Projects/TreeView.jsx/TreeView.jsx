import React from 'react'
import '../projects.css'
import MenuList from './MenuList.jsx'
import data from './data.js'

function TreeView() {
    return (
        <div className='treeview'>
            <div className="treeviewBody flex-v">
                <p className="title">Tree View</p>
                <div className="treeContainer bigContainer">
                    {data && data.length ? <MenuList items={data} /> : null}
                </div>
            </div>
        </div>
    )
}

export default TreeView
