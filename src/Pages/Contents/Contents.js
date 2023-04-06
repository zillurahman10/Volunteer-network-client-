import React, { useEffect, useState } from 'react';

const Contents = () => {


    return (
        <div>
            <p className='text-4xl font-bold text-center'>Watch our contents</p>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <iframe className='mr-24 ml-24 rounded-xl' width="400" height="250" src="" ></iframe>
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title"></h2>
                    <div class="card-actions">
                        <button class="btn btn-primary"><a href="" alt=""> View details in Youtube</a></button>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <iframe className='mr-24 ml-24 rounded-xl' width="400" height="250" src=""></iframe>
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Welcome to my channel</h2>
                    <div class="card-actions">
                        <button class="btn btn-primary"><a href="" alt=""> View details in Youtube</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contents;