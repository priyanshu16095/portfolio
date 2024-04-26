import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const data = [
    {
      img: '',
      name: 'Email Verification API',
      desc: 'Java Springboot, SMTP, Rest API, MySQL', 
      link: ''
    },
    {
      img: '',
      name: 'Disney+ Clone',
      desc: 'React, React Redux, Firebase, Material UI', 
      link: 'https://github.com/priyanshu16095/react-clones/tree/master/Disney-Plus'
    },
    {
      img: '',
      name: 'Whatsapp Clone',
      desc: 'React, React Redux, Firebase, Material UI',
      link: ''
    },
    {
      img: '',
      name: 'Student Management System',
      desc: 'Java Swing, MySQL',
      link: ''
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
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 705,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1 ,
        },
      },
    ]
  };

  return (
    <div className='projects'>
      <div className="projectsBody">
        <div className="projectsContainer container flex-v">

          <p className="title">Projects</p>

          <div className="projectsCards">
          <Slider {...settings}>
            {data && data.map((item, index) => (
              <div className='projectCard flex-v' key={index}>
                <div className="projectImage">
                  <img src={item.img} />
                </div>
                <div className="aboutProject flex-v">
                  <p className="md-font">{item.name}</p>
                  <p className="key">{item.desc}</p>
                  <button className='button'><a href={item.link} target='_blank'>View</a></button>
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
