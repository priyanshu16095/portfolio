import React, { useState } from 'react'
import '../projects.css'
import data from './data'

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
                                <div className='accordionBox flex-v' key={index}>
                                    <div className="accordionBoxQuestion flex-h">
                                        <p className="md-font">{box.question}</p>
                                        <button className="button" onClick={enableMultiSelection ? () => handleMultiSelection(index) : () => handleSingleSelection(index)}>{enableMultiSelection ? multipleId.indexOf(index) !== -1 ? '-' : '+' : selectedItemIndex === index ? '-' : '+'}</button>
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
