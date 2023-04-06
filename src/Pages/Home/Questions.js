import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <h1 className='text-4xl font-bold text-of-fre'>Frequently ask questions</h1>
                    <div className='questions'>
                        <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                            <div class="collapse-title text-xl font-medium">
                                What is web development?
                            </div>
                            <div class="collapse-content">
                                <p>Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.</p>
                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                            <div class="collapse-title text-xl font-medium">
                                Why we should learn web development?
                            </div>
                            <div class="collapse-content">
                                <p>Web development is an in-demand skill in every industry sector. Whether you want to work at a startup tech company, in healthcare, finance, creative agency, for the public sector, or a mixture of all these, learning web development gives you the opportunity to get your foot in the door anywhere.</p>
                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                            <div class="collapse-title text-xl font-medium">
                                Is ReactJS is a javascript framework?
                            </div>
                            <div class="collapse-content">
                                <p>No, ReactJS is not a javascript framework, It is a javascript library</p>
                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                            <div class="collapse-title text-xl font-medium">
                                Focus me to see content
                            </div>
                            <div class="collapse-content">
                                <p>tabindex="0" attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;