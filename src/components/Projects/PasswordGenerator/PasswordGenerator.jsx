import React, { useState } from 'react'
import '../projects.css'
import usePasswordGenerator from './usePasswordGenerator'
import PasswordStrengthIndicator from './PasswordStrengthIndicator'

function PasswordGenerator() {

    const[isCopied, setIsCopied] = useState(false)
    const[length, setLength] = useState(4)
    const[checkboxData, setCheckboxData] = useState(
        [
            {title: 'Include Uppercase Letters', state: false},
            {title: 'Include Lowercase Letters', state: false},
            {title: 'Include Numbers', state: false},
            {title: 'Include Symbols', state: false},
        ]
    )

    function handleCheckboxChange(index) {
        const updatedCheckboxData = [...checkboxData]
        updatedCheckboxData[index].state = !updatedCheckboxData[index].state
        setCheckboxData(updatedCheckboxData)
    }

    function handleCopy() {
        if(password === '') return
        navigator.clipboard.writeText(password)
        setIsCopied(true)

        setTimeout(() => {
            setIsCopied(false)
        }, 1000)
    }

    const { password, error, generatePassword } = usePasswordGenerator() 

  return (
    <div className='passwordgen'>

        <div className="passwordgenBody flex-v">
            <p className="title">Password Generator</p>

            <div className='passwordgenContainer bigContainer flex-v'>

                <div className="passwordgenPassword lightContainer">
                    <p className='password'>{password}</p>
                    <button className="button" onClick={handleCopy}>{isCopied ? 'Copied' : 'Copy'}</button>
                </div>

                <div className="passwordgenChoices flex-v">
                    <div className="charLength flex-v">
                        <span className='flex-h'>Character Length <label>{length}</label></span>
                        <input value={length} type="range" min={4} max={20} onChange={e => setLength(e.target.value)} />
                    </div>

                    <div className='passCheckboxContainer flex-v'>
                        <div className="passCheckboxes lightContainer flex-h">
                            {checkboxData.map((checkbox, index) => {
                                return (
                                    <div key={index} className='passCheckbox flex'>
                                        <input checked={checkbox.state} type="checkbox" onChange={() => handleCheckboxChange(index)} />
                                        <p>{checkbox.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                        {error && <p className='error'>{error}</p>}
                    </div>
                </div>

                <PasswordStrengthIndicator password={password} />

                <div className='passwordgenGenButton flex-h'>
                    <button className='button' onClick={() => generatePassword(checkboxData, length)}>Generate</button>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default PasswordGenerator
