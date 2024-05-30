import React from 'react'
import './style.css'
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { IoIosSend } from "react-icons/io";

function Contact() {
  function handleCopy() {
    navigator.clipboard.writeText('priyanshu16095@gmail.com')
    alert('✉️ Email copied!')
  }
  function handleSubmitMessage() {
    alert("Message sent! 🎉🎉")
  }
  return (
    <div className='contact'>
      <div className="contactBody">

        <div className="contactContainer">
          <div className="getintouch flex-v container">
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
              <div className="formButtonDiv flex-e"><button className="formButton button flex-c gap-1" onClick={handleSubmitMessage}><IoIosSend className='send__icon' />Send Message</button></div>
            </div>
          </div>
        </div>
        
        <div className="contactwithme container flex-v">
          <p className="title">Contact With Me</p>
          <div className="contactwithmeContianer flex-v">
            <div className="flex locationDiv">
              <LocationOnIcon className="icon" />
              <p className="md-font">Planet Earth</p>
            </div>
            <div className="flex mailDiv">
              <EmailIcon className='icon' />
              <p className="md-font">priyanshu16095@gmail.com</p>
            </div>
            <div className="icons flex">
            <a href="https://github.com/priyanshu16095" target='_blank' className='round'><GitHubIcon className='icon' /></a>
              <a href="https://www.linkedin.com/in/priyanshu16095/" className='round'><LinkedInIcon className='icon' /></a>
              {/* <div className="round"><XIcon className='icon' /> </div> */}
              <div className="round"><EmailIcon onClick={handleCopy} className='icon' /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
