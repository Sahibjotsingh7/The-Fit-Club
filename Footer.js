import React from 'react'
import './Footer.css'
import logo from './images/logo.png'

const Footer = () => {
  return (
    <div >
        <footer>
            <div className='icons'>
            <i class="fa-brands fa-gitlab"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            </div>
            <img className='logo' src={logo} alt='LOGO' style={{height:'3rem', width:'10rem' }}  />
             <p style={{color:'gray'}} ><i class="fa-regular fa-copyright"></i> copyright 2024 fitness club </p>
        </footer>  
    </div>
  )
}

export default Footer
