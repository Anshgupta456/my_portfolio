import React, { useState } from 'react'
import './Skills.css'

const Experience = () => {
  const [isHovered, setisHovered] =useState(false);
  const [isHovered2, setisHovered2] =useState(false);

  return (
    <div className='experience-container'>
        {/* //dm internship */}
        <div className='dmintern'>
            <div className='Year'> 2024 </div>
            <div
            className='title'
            onMouseEnter={() => setisHovered(true)}
            onMouseLeave={() => setisHovered(false)}
            >
                <div className='designation'>React JS Developer</div>
                <div className='organisation'>District Administration</div>
            </div>
            <div className={isHovered ? 'description-box' : 'hidden-box'}><span className='description'>Contributed in Govolve Portal as React JS Developer. Govolve was developed to link government and students for various Government Internship/Volunteer opportunities.</span></div>
        </div>

        {/* WIT Fellowship */}
        <div className='witfellow'>
            <div className='Year'> 2022 </div>
            <div
            className='title'
            onMouseEnter={() => setisHovered2(true)}
            onMouseLeave={() => setisHovered2(false)}
            >
                <div className='designation'>WIT Fellowship Learner</div>
                <div className='organisation'>ColoredCow, Gurgaon</div>
            </div>
            <div className={isHovered2 ? 'description-box' : 'hidden-box'}><span className='description'>Contributed in Govolve Portal as React JS Developer. Govolve was developed to link government and students for various Government Internship/Volunteer opportunities.</span></div>
        </div>
        
        
    </div>
  )
}

export default Experience
