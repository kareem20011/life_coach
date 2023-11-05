import React from 'react';
import './style/Mission.css'
const Mission = () => {
    return (
        <div className='Mission row'>
            <div data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-offset="300" className='col-lg-6 col-sm-12 text'>
                <h6>About Me</h6>
                <h1>My Mission is to Empower Your Life </h1>
                <p>Transform your life and achieve your goals with professional and personalized support.</p>
            </div>
            <div data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-offset="300" data-aos-delay='300' className='col-lg-6 col-sm-12 img'></div>
        </div>
    );
}

export default Mission;
