import React from 'react'
import './Home.css';
import Header from './Header.js';
import hero_image from './images/hero_image.png';
import heart from './images/heart.png';
import { Link } from 'react-scroll';
import calories from './images/calories.png'
import NumberCounter from 'number-counter'
const Home = () => {
    return(
        <div className='home' id='home'>
            <div className='blur' style={{height:'500px' , width:'300px' , left:'50px' , top:"150px"}}></div>
            <div className='left'>
                <Header/>
                <div className='add'>
                    <span>The best Fitness Club of the Town</span>
                    
                    <div></div>
                </div>
                <div className='headingtext'>
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span > Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div className='text'>
                        In here we will help you to shape and build your ideal body body and live up  your life to fullest 
                    </div>
                </div>
                <div className='figures'>
                    <div>
                        <span><NumberCounter end={187} start={100} delay='2' preFix="+" /></span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span><NumberCounter end={655} start={500} delay='2' preFix='+' /></span>
                        <span>Members Joined</span>
                    </div>
                    <div>
                        <span> <NumberCounter end={90} start={50} delay='2' preFix='+' /></span>
                        <span>Fittness Programs</span>
                    </div>                 
                </div>
                <div className='buttons'>
                  <button className='btn'>Get Started</button>
                  <button className='btn'>Learn more</button>
                </div>
            </div>
            <div className='right'>
                <button><Link to='join-us' duration={2000} smooth={true} >JOIN NOW</Link></button> 
                <div className='heartrate'>
                    <img src={heart} alt='heart' />
                    <span>Heart rate</span> <span>116 bpm </span>
                </div>
                  <div className='backgound1'>
                  </div>
                  <div className='backgound2'>
                  </div>
                  <img src={hero_image} alt='aa' className='hero_image'/>
                <div className='calories'>
                  <img src={calories}  alt="a" />
                 <div>  <span style={{color: 'gray'}}>Calories Burned </span><br/><span style={{color: 'white'}}> 220 kcal</span></div>
                </div>
            </div>
        </div>
    )
}

export default Home;

