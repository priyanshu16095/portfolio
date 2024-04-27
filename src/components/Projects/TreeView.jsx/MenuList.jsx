import React from 'react'
import MenuItem from './MenuItem'

function MenuList({items}) {
  return (
    <div className='menulist'>
      <div className="menulist body flex-v">
        {items && items.length > 0 ?
        items.map((item, index) => <MenuItem item={item} key={index} />)
        : null}
      </div>
    </div>
  )
}

export default MenuList
