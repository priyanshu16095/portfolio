import React, { useState } from 'react'
import '../projects.css'
import data from './data'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'

function Accordion() {
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multipleId, setMultipleId] = useState([])

    function handleSingleSelection(index) {
        if (selectedItemIndex === index) {
            setSelectedItemIndex(-1)
            return
        }
        setSelectedItemIndex(index)
    }
    function handleMultiSelection(index) {
        let arr = [...multipleId]
        let indexOfCurrentIndex = arr.indexOf(index)
        if (indexOfCurrentIndex === -1) {
            arr.push(index)
        } else {
            arr.splice(indexOfCurrentIndex, 1)
        }
        setMultipleId(arr)
    }

    return (
        <div className='accordion'>

            <div className="accordionBody flex-v">
                <p className="title">Accordion</p>

                <div className="accordionContainer flex-v">
                    <div className="accordionHeader flex-h">
                        <button className="button" onClick={() => setEnableMultiSelection(!enableMultiSelection)}>{enableMultiSelection ? 'Disable Multi Selection' : 'Enable Multi Selection'}</button>
                    </div>
                    <div className="accordionBoxes flex-v">
                        {data && data.length ?
                            data.map((box, index) => (
                                <div className='accordionBox lightpContainer flex-v' key={index}>
                                    <div className="accordionBoxQuestion pointer flex-h" onClick={enableMultiSelection ? () => handleMultiSelection(index) : () => handleSingleSelection(index)}>
                                        <p className="md-font">{box.question}</p>
                                        {enableMultiSelection ? multipleId.indexOf(index) !== -1 ? <KeyboardArrowUp className='icon' /> : <KeyboardArrowDown className='icon' /> : selectedItemIndex === index ? <KeyboardArrowUp className='icon' /> : <KeyboardArrowDown className='icon' />}
                                    </div>
                                    <div className="accordionBoxAnswer">
                                        {enableMultiSelection ? multipleId.indexOf(index) !== -1 ? <p>{data[index].answer}</p> : null : selectedItemIndex === index ? <p>{data[index].answer}</p> : null}
                                    </div>
                                </div>
                            ))
                            : null}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Accordion
