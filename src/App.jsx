import React from 'react'
import Home from './components/Home'
import { ThemeProvider } from './theme-context'
import LocomotiveScroll from 'locomotive-scroll';

// const locomotiveScroll = new LocomotiveScroll()

function App() {
  return (
    <div className='app'>
      <div className="appBody">
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </div>
    </div>
  )
}

export default App
