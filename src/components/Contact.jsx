import React from 'react'
import './style.css'

function Contact() {
  return (
    <div className='contact'>
      <div className="contactBody">
        <div className="contactContainer flex-v container">
          <div className="contactHeader flex-h">
            <p className="title">Get In Touch</p>
            <p className='key'>React Hook Form</p>
          </div>
          <div className="form flex-v">
            <div className="formNameEmail flex">
              <input type="text" className="contactInput" placeholder='Name' />
              <input type="text" className="contactInput" placeholder='Email' />
            </div>
            <textarea placeholder='Message' cols="30" rows="5" className='messageInput contactInput' />
            <div className="flex-e"><button className="formButton button">Send</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
