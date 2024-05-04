import React from 'react'
import './style.css'
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

function Contact() {
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
              <div className="formButtonDiv flex-e"><button className="formButton button">Send Message</button></div>
            </div>
          </div>
        </div>
        <div className="contactwithme container flex-v">
          <p className="title">Contact With Me</p>
          <div className="contactwithmeContianer flex-v">
            <div className="flex locationDiv">
              <LocationOnIcon className="icon" />
              <p className="md-font location">Planet Earth</p>
            </div>
            <div className="flex mailDiv">
              <EmailIcon className='icon' />
              <p className="md-font mail">priyanshu16095@gmail.com</p>
            </div>
            <div className="icons flex">
            <a href="https://github.com/priyanshu16095" target='_blank' className='round'><GitHubIcon className='icon' /></a>
              <a href="https://www.linkedin.com/in/priyanshu-gupta-960136303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className='round'><LinkedInIcon className='icon' /></a>
              <div className="round"><XIcon className='icon' /> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
