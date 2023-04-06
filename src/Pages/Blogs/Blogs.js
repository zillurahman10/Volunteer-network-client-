import React from 'react';
import blogPhoto from '../../assets/blogs-removebg-preview.png'

const Blogs = () => {
    return (
        <div className='flex justify-between m-24'>
            <h1 className='text-6xl font-bold text-center mt-24 ml-24'>Blogs are coming soon...</h1>
            <div>
                <img src={blogPhoto} alt=""></img>
            </div>
        </div>
    );
};

export default Blogs;