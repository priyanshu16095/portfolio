import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import gitSvgIcon from '../assets/gitSvgIcon.svg'
import gitSvgIcon from '../assets/gitSvgIcon.svg'

function Projects() {
  const data = [
    {
      img: 'disney.png',
      name: 'Disney+ Clone',
      desc: 'React, React Redux, Firebase',
      link: 'https://github.com/priyanshu16095/react-clones/tree/master/Disney-Plus'
    },
    {
      img: 'contact-application.png',
      name: 'Contact Application',
      desc: 'React Js, Java Springboot, REST API',
      link: 'https://github.com/priyanshu16095/contact-application'
    },
    {
      img: 'spring-verify.png',
      name: 'Email Verification API',
      desc: 'Java Spring, SMTP, Rest API, MySQL',
      link: ''
    },
    {
      img: 'stu-management.png',
      name: 'Student Management System',
      desc: 'Java Swing, MySQL',
      link: ''
    },
    {
      img: 'github-profile.png',
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
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
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

          {/* onClick={() => window.open(item.link, '_blank')} */}
          <div className="projectsCards flex-v">
            <Slider {...settings}>
              {data && data.map((item, index) => (
                <div key={index} >
                  <div className='projectCard flex-v'>
                    <img src={item.img} className='projectCard__img' />
                    <div className="projectCard__bottom flex-v">
                      <p className="md-font">{item.name}</p>
                      <p className="key">{item.desc}</p>
                      <button className='button' onClick={() => window.open(item.link, '_blank')}>View</button>
                    </div>
                  </div>
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