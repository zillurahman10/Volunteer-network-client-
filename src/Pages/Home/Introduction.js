import React from 'react';
import pp from '../../assets/Programming Psycho.mp4'
import './Introduction.css'

const intorduction = () => {
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row ">
                    <iframe className=' mr-24 ml-24 rounded-xl' width="800" height="315" src="https://www.youtube.com/embed/Cqnoz1jRwk8" autoplay="1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div>
                        <h1 class="text-5xl font-bold">Learn With Basic</h1>
                        <p class="py-6">Here it's a channel where people can learn web development in a significant way. People can learn web development in simple and fluent language.</p>

                        <a target="_blank" href="https://www.youtube.com/channel/UCzQAGmO5tdYSnpySwS2U5kw"><button class="btn btn-primary">Review Channel</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default intorduction;