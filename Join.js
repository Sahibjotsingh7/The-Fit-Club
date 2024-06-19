import React, { useRef } from 'react'
import './join.css'
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef()
  return (
    <div className='join' id='join-us'>
      <div className='leftj'>
       <div className='line'></div>
        <div>
            <span className='stroke-text'>ready to </span>
            <span>level up</span>
        </div>
        <div>
            <span className='stroke-text'>your body</span>
            <span> with us</span>
        </div>

      </div>
      <div className='rightj'>
          <from ref={form} className="email_div">
              <input type='email' name='user_email' placeholder='Enter your email address'/>
              <button>JOIN NOW</button>
          </from>
      </div>
    </div>
  )
}

export default Join
