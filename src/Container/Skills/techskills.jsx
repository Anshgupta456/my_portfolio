import React from 'react'
import './Skills.css'
import csslogo from '../../assets/css.png'
import figmalogo2 from '../../assets/Figma2.png'
import gitlogo from '../../assets/git.png'
import htmllogo from '../../assets/html2.png'
import jslogo2 from '../../assets/js.webp'
import reactlogo from '../../assets/reactjs.png'
import tailwindlogo from '../../assets/tailwind.png'


const techskills = () => {
  return (
    <div>
      <div className='tech-skills'>
          <div className='container'>
            <div className='bg html'>
              <img src={ htmllogo } alt='html logo' className='logo'/>
            </div>
            <span className='card-caption'>HTML</span>
          </div>
          <div className='container'>
            <div className='bg css'>
              <img src={ csslogo } alt='css logo' className='logo'/>
            </div>
            <span className='card-caption'>CSS</span>
          </div>
          <div className='container'>
            <div className='bg js'>
              <img src={ jslogo2 } alt='js logo' className='logo'/>
            </div>
            <span className='card-caption'>JavaScript</span>
          </div>
          <div className='container'>
            <div className='bg reactjs'>
              <img src={ reactlogo } alt='react logo' className='logo'/>
            </div>
            <span className='card-caption'>React JS</span>
          </div>
          <div className='container'>
            <div className='bg tailwind'>
              <img src={ tailwindlogo } alt='tailwind logo' className='logo'/>
            </div>
            <span className='card-caption'>Tailwind CSS</span>
          </div>
          <div className='container'>
            <div className='bg figma'>
              <img src={ figmalogo2 } alt='react logo' className='logo'/>
            </div>
            <span className='card-caption'>Figma</span>
          </div>
          <div className='container'>
            <div className='bg git'>
              <img src={ gitlogo } alt='react logo' className='logo'/>
            </div>
            <span className='card-caption'>Git</span>
          </div>
        </div>
    </div>
  )
}

export default techskills
