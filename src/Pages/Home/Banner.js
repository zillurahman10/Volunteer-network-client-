import React from 'react';
import banner from '../../assets/Purple_Professional_Course_Twitter_Ad-removebg-preview.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='flex justify-between mr-24 ml-24 grid-rows-2 sm: grid-rows-1'>
            <div className='banner-text'>
                <h1 className='text-4xl'>Learn Web Development With</h1>
                <h1 className='text-6xl font-bold'>Programming Psycho</h1>
            </div>
            <div>
                <img className='banner-img' src={banner} alt=""></img>
            </div>
        </div>
    );
};

export default Banner;