import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import contactapplication from '../../public/contact-application.img'


function Projects() {
  const data = [
    {
      img: 'disney.png',
      name: 'Disney+ Clone',
      desc: 'React, React Redux, Firebase, OMDB API',
      link: 'https://github.com/priyanshu16095/react-clones/tree/master/Disney-Plus'
    },
    {
      img: 'contact-application.png',
      name: 'Contact Application',
      desc: 'React Js, Java Springboot, REST API',
      link: 'https://github.com/priyanshu16095/contact-application'
    },
    {
      img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Email Verification API',
      desc: 'Java Spring, SMTP, Rest API, MySQL',
      link: ''
    },
    {
      img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Whatsapp Clone',
      desc: 'React, React Redux, Firebase, Socket.IO',
      link: ''
    },
    {
      img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Student Management System',
      desc: 'Java Swing, MySQL',
      link: ''
    },
    {
      img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Explore all my projects',
      desc: 'On Github',
      link: 'https://github.com/priyanshu16095'
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 705,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  };

  return (
    <div className='projects'>
      <div className="projectsBody">
        <div className="projectsContainer container flex-v">

          <p className="title">Projects</p>

          <div className="projectsCards flex-v">
            <Slider {...settings}>
              {data && data.map((item, index) => (
                <div className='projectCard' key={index}>
                    <img src={item.img} className='projectCard__img' />
                    <p className="md-font">{item.name}</p>
                    <p className="key">{item.desc}</p>        
                    <button className='button' onClick={() => window.open(item.link, '_blank')}>View</button>
                </div>
              ))}
            </Slider>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects



// app
// title
// link
// md-font
// key
// inputBox
// container bigContainer
// lightpContainer lightContainer
// round
// miniProjSidebar