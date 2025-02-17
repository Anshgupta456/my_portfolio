import React from 'react'
import ansh from '../../assets/Ansh.png'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'; 
import resume from '../../assets/Resume.pdf'

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className='intro'>
        <span className='hi'>Hii, I am</span>
        <span className='name'>Anshika Gupta</span>
        <span className='bio'>A React JS Developer, motivated and young professional, a fresher with 'learning-new-things' attitude.</span>
        <a href={ resume } target="_blank" rel="noreferrer">
          <div className='resume-btn'><FontAwesomeIcon icon={faFileDownload} /> <span className='resume'>Resume</span></div>
        </a>
      </div>
      <div className='photo'>
        <img src={ansh} alt="my profile pic" className='pic' />
      </div>
    </div>
  )
}

export default Hero
