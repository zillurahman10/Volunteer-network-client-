import React from 'react';
import contact from '../../assets/contact-us-concept-illustration_114360-3147.png'
import './Contact.css'

const ContactUs = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-red-600 text-center'>This page is under development</h1>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <img className='ml-12 contact-img' style={{ width: '500px' }} src={contact} alt=""></img>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Message</span>
                                </label>
                                <textarea class="textarea textarea-bordered" placeholder="Message"></textarea>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;