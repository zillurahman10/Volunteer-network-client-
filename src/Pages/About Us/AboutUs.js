import React from 'react';
import raihan from '../../assets/raihan.jpg'
import zillur from '../../assets/zillur.jpg'

const AboutUs = () => {
    return (
        <div className='mt-12'>

            {/* Modal for Reveal Face */}
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Picture is not Available</h3>
                    <p class="py-4">When my channel has 10k subscribers, his face will automatically be revealed 😊</p>
                    <div class="modal-action">
                        <a target="_blank" href="https://www.youtube.com/channel/UCzQAGmO5tdYSnpySwS2U5kw" alt=""><button className='btn btn-primary'>Subscribe my channel</button></a>
                        <label for="my-modal" class="btn">Ok</label>
                    </div>
                </div>
            </div>



            <p className='text-4xl font-bold text-center'>Meet Our Team Members</p>
            <div class="hero min-h-screen mt-12">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={zillur} class=" zillur max-w-sm rounded-lg shadow-2xl mr-12" />
                    <div className='ml-12 mr-12'>
                        <h1 class="text-5xl font-bold">MD ZILLUR RAHMAN</h1>
                        <p className='text-2xl'>Founder</p>
                        <p class="py-6">Hello! I am Zillur, a passionate web developer. I develop Web application and desktop application. My core skill based on ReactJS and I love to do most of the things using ReactJS. I love to make the web more open to the world.</p>
                    </div>
                </div>
            </div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    {/* <img src={raihan} class="max-w-sm rounded-lg shadow-2xl ml-12 mr-24" /> */}
                    <div class="card w-96 bg-gray-500 shadow-xl ml-24 mr-24 p-24">
                        <div class="card-body">
                            <div class="avatar placeholder justify-center">
                                <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
                                    <span class="text-3xl">K</span>
                                </div>
                            </div>
                            <label for="my-modal" class="btn btn-accent">Reveal Face</label>
                        </div>
                    </div>
                    <div className='mr-12'>
                        <h1 class="text-5xl font-bold">KAMRUL HASSAN</h1>
                        <p className='text-2xl'>Advisor</p>
                        <p class="py-6">A motivated and adaptable marketing student seeking to gain new experiences and skills over time. Looking forward to build expertise in the field of marketing and Public Relation. Ready to utilize my time and efforts in the internship program.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;