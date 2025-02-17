import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../styles/Navbar.css'
import { Link } from "react-router-dom";
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <div className='navbar'>
      <a href = "/" className='navbar-logo'>Anshika Gupta</a>
      <ul className='tabs'>
        {navLinks.map((nav) => (
          <li key={nav.id}>
            <Link to={nav.to} className='nav-items'>
              <FontAwesomeIcon icon={nav.icon} className="nav-icons" /> {nav.title}
            </Link>
          </li>
        ))}
      </ul>
      
      <span className='contact-items'>
        <a href="https://github.com/Anshgupta456"
        target="_blank" rel="noreferrer" className="nav-items">
          <FontAwesomeIcon icon={ faGithub } className='nav-icons2' />
        </a>
        <a href="https://www.linkedin.com/in/anshika-gupta-267542228/"
        target="_blank" rel="noreferrer" className='nav-items'>
          <FontAwesomeIcon icon={ faLinkedin } className='nav-icons2' />
        </a>
      </span>
    </div>
  )
}

export default Navbar;
