import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import MenuIcon from '@mui/icons-material/Menu';
import './style.css'

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({ right: false })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setState({ ...state, [anchor]: open })
  }

  const sidebarData = [
    { name: "About", icon: <NavigateNextIcon className='icon' /> },
    { name: "Projects", icon: <NavigateNextIcon className='icon' /> },
    { name: "Mini-Projects", icon: <NavigateNextIcon className='icon' /> },
    { name: "Contact", icon: <NavigateNextIcon className='icon' /> },
  ]

  function handleClick() {
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {sidebarData.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <p className="link">{item.name}</p>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className='sidebar'>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor} >
          {/* <button onClick={toggleDrawer(anchor, true)}>{anchor}</button> */}
          <div className="round openIconDiv" onClick={toggleDrawer(anchor, true)}><MenuIcon className='openIcon icon' /></div>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <div className="drawer">
              <p className='sidebar__info md-font flex-c'>Under Construction.</p>
              {list(anchor)}
              </div>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
