import React, { useState } from 'react';
import './testimonials.css';
import { testimonialsData } from './testimonialsData';

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    const handlePrevious = () => {
        setSelected(selected === 0 ? tLength - 1 : selected - 1);
    };

    const handleNext = () => {
        setSelected(selected === tLength - 1 ? 0 : selected + 1);
    };

    return (
        <div className='testimonials' id='testinomials'>
            <div className='tleft'>
                <span style={{fontSize:'1.5rem'}}>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>
                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span>
                        {testimonialsData[selected].name}
                    </span>{" - "}
                    {testimonialsData[selected].status}
                </span>
            </div>
            <div className='tright'>
                <div className='thin'></div>
                <div className='thik'></div>
                <img src={testimonialsData[selected].image} alt='aa' />
                <span className='a1' onClick={handlePrevious}>
                    <i className="fa-solid fa-arrow-left"></i>
                </span>
                <span className='a2' onClick={handleNext}>
                    <i className="fa-solid fa-arrow-right"></i>
                </span>
            </div>
        </div>
    );
}

export default Testimonials;
