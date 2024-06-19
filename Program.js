import React, { useState } from 'react';
import './Program.css';

const Program = () => {
    const [flippedStrength, setFlippedStrength] = useState(false);
    const [flippedCardio, setFlippedCardio] = useState(false);
    const [flippedFatBurning, setFlippedFatBurning] = useState(false);
    const [flippedHealthFitness, setFlippedHealthFitness] = useState(false);

    const handleFlip = (program) => {
        switch (program) {
            case 'Strength':
                setFlippedStrength(!flippedStrength);
                break;
            case 'Cardio':
                setFlippedCardio(!flippedCardio);
                break;
            case 'FatBurning':
                setFlippedFatBurning(!flippedFatBurning);
                break;
            case 'HealthFitness':
                setFlippedHealthFitness(!flippedHealthFitness);
                break;
            default:
                break;
        }
    };

    return (
        <div className='programs' id='programs'>
            <div className='Program-header'>
                <span className='stroke-text'>Explore our</span>
                <span style={{ color: 'black' }}> programs </span>
                <span className='stroke-text'> To Shape You </span>
            </div>
            <div className='types'>
                <div className={`program-card ${flippedStrength ? 'flipped' : ''}`} onClick={() => handleFlip('Strength')}>
                    <div className='front'>
                        <i className="fa-solid fa-dumbbell"></i>
                        <h4>Strength Training</h4>
                        <p>In this program, you are trained to improve your strength through many exercises.</p>
                        <span>Join Now <i className="fa-solid fa-arrow-right"></i></span>
                    </div>
                    <div className='back'>
                       <h4>Details</h4>
                        <p> These involve multiple muscle groups and joints. Examples include squats, deadlifts, bench presses, and pull-ups. Regular strength training helps you become stronger by increasing muscle fiber size and improving muscle function.</p>
                    </div>
                </div>
                <div className={`program-card ${flippedCardio ? 'flipped' : ''}`} onClick={() => handleFlip('Cardio')}>
                    <div className='front'>
                        <i className="fa-solid fa-person-running"></i>
                        <h4>Cardio Training</h4>
                        <p>In this program, you are trained to do sequential moves in range of 20 until 30 minutes.</p>
                        <span>Join Now <i className="fa-solid fa-arrow-right"></i></span>
                    </div>
                    <div className='back'>
                        <h4>Details</h4>
                        <p>Aim for 20 to 30 minutes per session, gradually increasing intensity. Cardio workouts offer benefits such as weight loss, reduced stress, and increased stamina. Always warm up, wear comfortable shoes, and listen to your body during cardio sessions. </p>
                    </div>
                </div>
                <div className={`program-card ${flippedFatBurning ? 'flipped' : ''}`} onClick={() => handleFlip('FatBurning')}>
                    <div className='front'>
                        <i className="fa-solid fa-fire"></i>
                        <h4>Fat Burning</h4>
                        <p>This program is suitable for you who wants to get rid of your fat and lose their weight.</p>
                        <span>Join Now <i className="fa-solid fa-arrow-right"></i></span>
                    </div>
                    <div className='back'>
                        <h4>Details</h4>
                        <p>Running/Jogging: Great for overall fat loss.Cycling: Stationary or outdoor cycling. Jump Rope: Simple yet effective. Dancing: Fun way to burn calories. These exercises use your own body weight for resistance.</p>
                    </div>
                </div>
                <div className={`program-card ${flippedHealthFitness ? 'flipped' : ''}`} onClick={() => handleFlip('HealthFitness')}>
                    <div className='front'>
                        <i className="fa-solid fa-heart-pulse"></i>
                        <h4>Health Fitness</h4>
                        <p>This program is designed for those who exercise only for their body fitness not body building.</p>
                        <span>Join Now <i className="fa-solid fa-arrow-right"></i></span>
                    </div>
                    <div className='back'>
                        <h4>Details</h4>
                        <p> Health fitness programs cater to individuals who prioritize overall well-being, stamina, and vitality.  health fitness focuses on maintaining a healthy weight, cardiovascular health, flexibility, and functional strength.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Program;
