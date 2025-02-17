import React from 'react'
import './Skills.css'
import Techskills from './techskills'
import Softskills from './softskills'
import Experience from './Experience'

const Skills = () => {
  return (
    <div className='skills-exp'>
      <div className='section-title'>Skills & Experience</div>
      <div className='section-tagline'><span style={{ color: 'yellow'}}>What</span> I bring to the <span style={{ color: 'yellow'}}>Table</span></div>
      <div className='flex-div'>
        <section className='skills'>
          <Techskills />
          <Softskills />
        </section>
        <section className='experience'>
          <Experience />
        </section>
      </div>
    </div>
  )
}

export default Skills
