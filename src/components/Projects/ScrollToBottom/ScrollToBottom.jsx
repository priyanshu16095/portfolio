import React, { useRef } from 'react'
import '../projects.css'
import Items from './Items'

function ScrollToBottom() {
    const bottomRef = useRef(null)
    const topRef = useRef(null)

    function handleScrollToBottom() {
        bottomRef.current.scrollIntoView({ behaviour: 'smooth' })
    }
    function handleScrollToTop() {
        topRef.current.scrollIntoView({ behaviour: 'smooth' })
    }

    return (
        <div className='scroll' ref={topRef}>
            <div className="scrollbody flex-v">
                <p className="title">Scroll To Bottom</p>
                <div className="scrollbodyContainer bigContainer flex-v">
                    <p className="md-font">Items</p>
                    <div className="inputBox lightContainer flex-h">
                        <p className='md-font'>Top-Section</p>
                        <button className='button' onClick={handleScrollToBottom}>Scroll to bottom</button>
                    </div>
                    <Items />
                    <div ref={bottomRef}></div>
                    <div className="inputBox lightContainer flex-h">
                        <p className='md-font'>Bottom-Section</p>
                        <button className='button' onClick={handleScrollToTop}>Scroll to top</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ScrollToBottom
