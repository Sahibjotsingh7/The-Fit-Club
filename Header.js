import React from 'react'
import './Header.css'
import logo from './images/logo.png'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <div className='header'>
     <img className='logo' src={logo} alt='LOGO'/>
     <ul className='menu'>
     <li><Link
          to='home'
          duration={2000}
          smooth={true}
          >Home</Link></li>
          <li><Link
          to='programs'
          duration={2000}
          smooth={true}
          >Programs</Link></li>
          <li><Link
          to='whyus'
          duration={2000}
          smooth={true}
          >Why us</Link></li>
          <li><Link
          to='plans'
          duration={2000}
          smooth={true}
          >Plans</Link></li>
        <li><Link
          to='testinomials'
          duration={2000}
          smooth={true}
          >Testimonials</Link></li>
     </ul>
    </div>
  )
}

export default Header
