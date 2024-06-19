import React from 'react'
import './reasons.css'
import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'
import image4 from './images/image4.png'
import image5 from './images/nb.png'
import image6 from './images/nike.png'
import image7 from './images/adidas.png'

export default function Reasons() {
  return (
    <div className='reasons' id='whyus'>
        <div className='rleft'>
           <img src={image1} alt='aa' />
           <img src={image2} alt='aa' />
           <img src={image3} alt='aa' />
           <img src={image4} alt='aa' />
        </div>
        <div className='rright'>
          <div className='rheading'><span className='stroke-text'>Why </span><span style={{color:'black'}}> Choose Us? </span></div>
          <div className='Someresons'>
              <p><i class="fa-regular fa-calendar-check"></i> OVER 140+ EXPERT COACHS</p>
              <p><i class="fa-regular fa-calendar-check"></i> TRAIN SMARTER AND FASTER THAN BEFORE</p>
              <p><i class="fa-regular fa-calendar-check"></i> 1 FREE PROGRAM FOR NEW MEMBER</p>
              <p><i class="fa-regular fa-calendar-check"></i> RELIABLE PARTNERS</p>
          </div>
          <div className='partners'>
            <p>OUR PARTNERS</p>
            <img src={image6} alt='aa' />
            <img src={image5} alt='aa' />
            <img src={image7} alt='aa' />
          </div>
        </div>
    </div>
  )
}
