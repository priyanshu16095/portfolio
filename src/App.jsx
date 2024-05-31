import React, {useState, useEffect} from 'react'
import Home from './components/Home'
import { ThemeProvider } from './theme-context'
import LocomotiveScroll from 'locomotive-scroll';
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

function App() {
  const { width, height } = useWindowSize()
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='app'>
      <div className="appBody">
        <div className={`confetti-wrapper ${showConfetti ? 'show' : 'hide'}`}>
          <Confetti width={width} height={height} />
        </div>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </div>
    </div>
  )
}

export default App
