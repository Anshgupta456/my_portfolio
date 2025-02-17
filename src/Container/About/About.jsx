import React from 'react'
import './About.css'
import reactimg from '../../assets/react.jpg'
import frontend from '../../assets/frontend.png'

const About = () => {
  return (
    <div className='about-box'>
      <div className='section-title'>About Me</div>
      <p className='section-tagline'>
      Highly motivated professional with proven experience.
      Proficient in data management software and content creation tools.
      </p>
      <div className='profile-cards'>
        <div className='cards-tile'>
          <img src = {reactimg} alt="react dev" />
          <h2 className='card-title'>Software Developer</h2>
          <p className='card-description'>A passionate software developer, learning DSA in JAVA</p>
        </div>
        <div className='cards-tile'>
          <img src = {frontend} alt="frontend dev" />
          <h2 className='card-title'>Frontend Developer</h2>
          <p className='card-description'>Hii I'm a Frontend Developer</p>
        </div>
      </div>
    </div>
  )
}

export default About
