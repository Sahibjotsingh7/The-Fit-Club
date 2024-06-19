import React from 'react'
import './plans.css'
const Plans = () => {
  return (
    <div className='plans'>
       <div className='planheading'>
        <span className='stroke-text'>READY TO SRART </span><span style={{color:'black'}}>YOUR JOURNY</span> <span className='stroke-text'> NOW WITH US</span>
       </div>
       <div className='plancards'>
         <div className='p1'>
            <span><i class="fa-solid fa-shield-halved"></i></span>
            <h1>BASIC PLAN</h1>
            <h2>$ 25</h2>
            <ul>
               <li><i class="fa-regular fa-circle-check"></i>2 hours of excercises</li>
               <li><i class="fa-regular fa-circle-check"></i>Free consultaion to coaches</li>
               <li><i class="fa-regular fa-circle-check"></i>Access to The Community</li>
            </ul>
            <p>See more benefits <i class="fa-solid fa-arrow-right"></i></p>
            <button>JOIN NOW</button> 
         </div>
         <div className='p2'>
            <i class="fa-solid fa-crown"></i>
            <h1>PREMIUM PLAN</h1>
            <h2>$ 30</h2>
            <ul>
               <li><i class="fa-regular fa-circle-check"></i>5 hour of excercises</li>
               <li><i class="fa-regular fa-circle-check"></i>Free consultaion of Coaches</li>
               <li><i class="fa-regular fa-circle-check"></i>Accessto minibar</li>
            </ul>
            <p>See more benefits <i class="fa-solid fa-arrow-right"></i></p>
            <button>JOIN NOW</button> 
            </div>
         <div className='p3'>
            <span><i class="fa-solid fa-dumbbell"></i></span>
            <h1>PRO PLAN</h1>
            <h2>$ 45</h2>
            <ul>
               <li><i class="fa-regular fa-circle-check"></i>8 hours of excercises</li>
               <li><i class="fa-regular fa-circle-check"></i>Private Coach</li>
               <li><i class="fa-regular fa-circle-check"></i>Free Fitness Merchandises</li>
            </ul>
            <p>See more benefits <i class="fa-solid fa-arrow-right"></i></p>
            <button>JOIN NOW</button> 
         </div>
       </div>
    </div>
  )
}

export default Plans
