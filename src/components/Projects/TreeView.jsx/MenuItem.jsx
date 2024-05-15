import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
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
      <p className='menuitemLabel link flex-h' onClick={() => handleOpen(item.label)}>{item.label} {item.children && <span>{selectedItem.indexOf(item.label) !== -1 ? <KeyboardArrowUp className='icon' /> : <KeyboardArrowDown className='icon' />}</span>}</p>
      <div className="menuitemChildren">
      {item.children && item.children.length > 0 && selectedItem.indexOf(item.label) !== -1 ?
      item.children.map((child, index) => <MenuItem item={child} key={index} />)
      : null}
      </div>
    </div>
  )
}

export default MenuItem
