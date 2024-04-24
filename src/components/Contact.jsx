import React from 'react'
import './style.css'

function Contact() {
  return (
    <div className='contact'>
      <div className="contactBody">
        <div className="contactContainer flex-v lightpContainer">
          <div className="contactHeader flex-h">
            <p className="title">Contact</p>
            <p>React Hook Form</p>
          </div>
          <div className="contactInputs flex-v">
            <div className="contactInputsUpper flex">
              <input type="text" placeholder='Name' className='contactInput contactName' />
              <input type="text" placeholder='Email' className='contactInput contactEmail' />
            </div>
            <input type="text" placeholder='Message' className='contactInput contactMessage' />
          </div>
          <div className="contactButton flex-e">
            <button className="button">Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
