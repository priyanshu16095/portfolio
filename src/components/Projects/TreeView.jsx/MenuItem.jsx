import React, { useState } from 'react'

function MenuItem({item}) {
    const[selectedItem, setSelectedItem] = useState([])

    function handleOpen(label) {
        let arr = [...selectedItem]
        let indexOfCurrentLabel = arr.indexOf(label)
        if(indexOfCurrentLabel === -1) {
            arr.push(label)
        } else {
            arr.splice(label, 1)
        }
        setSelectedItem(arr)
    }

  return (
    <div className='menuitem flex-v'>
      <p className='menuitemLabel link' onClick={() => handleOpen(item.label)}>{item.label}</p>
      <div className="menuitemChildren">
      {item.children && item.children.length > 0 && selectedItem.indexOf(item.label) !== -1 ?
      item.children.map((child, index) => <MenuItem item={child} key={index} />)
      : null}
      </div>
    </div>
  )
}

export default MenuItem
