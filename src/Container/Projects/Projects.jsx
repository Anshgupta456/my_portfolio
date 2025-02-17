import React from 'react'
import './Projects.css'
import govolve from '../../assets/Govolve.png'
import portfolio from '../../assets/PORTFOLIO.png'
import wyr from '../../assets/Question.webp'

const Projects = () => {
  return (
    <div className='project-section'>
      <div className='section-title'>Projects</div>
      <div className='section-tagline'><span style={{ color: 'yellow'}}>Projects</span> make a <span style={{ color: 'yellow'}}>Developer</span> Perfect</div>
      <div className='projects'>
        <div className='project-tile'>
          <img src={govolve} alt='project1' />
          <h2 className='project-title'>Govolve</h2>
          <div className='desc-wrap'>
            <p className='project-desc'>Govolve is a web-based platform developed during my internship at Tehri District Administration</p>
          </div>
        </div>

        <div className='project-tile'>
          <img src={portfolio} alt='project2' />
          <h2 className='project-title'>My Portfolio</h2>
          <div className='desc-wrap'>
            <p className='project-desc'>A digital introduction of me</p>
          </div>
        </div>

        <div className='project-tile'>
          <img src={wyr} alt='project3' />
          <h2 className='project-title'>Would You Rather</h2>
          <div className='desc-wrap'>
            <p className='project-desc'>A responsive application that allows users to post questions and answer/vote on them along with leaderboard functionality to rank users based on their interactions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
