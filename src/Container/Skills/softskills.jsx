import React from 'react'
import './Skills.css'
import lead from '../../assets/lead.avif'
import team from '../../assets/team.webp'
import res from '../../assets/res.avif'
import prob from '../../assets/ps.avif'
import prof from '../../assets/profes.jpg'


const softskills = () => {
  return (
    <div>
        <div className='tech-skills'>
          <div className='container'>
              <img src={ lead } alt='leadership' className='softimg'/>
            <span className='card-caption'>Leadership</span>
          </div>
          <div className='container'>
              <img src={ team } alt='team building' className='softimg'/>
            <span className='card-caption'>Team Building</span>
          </div>
          <div className='container'>
              <img src={ res } alt='resilience' className='softimg'/>
            <span className='card-caption'>Resilience</span>
          </div>
          <div className='container'>
              <img src={ prob } alt='Problem Solving' className='softimg'/>
            <span className='card-caption'>Problem Solving</span>
          </div>
          <div className='container'>
              <img src={ prof } alt='Professionalism' className='softimg'/>
            <span className='card-caption'>Professionalism</span>
          </div>
        </div>
    </div>
  )
}

export default softskills
