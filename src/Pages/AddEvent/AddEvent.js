import React from 'react';
import Header from '../../Shared/Header/Header';
import './AddEvent.css'

const AddEvent = () => {
    const formSubmit = e => {
        e.preventDefault()
        const name = e.target.title.value

        const service = { name }

        fetch('http://localhost:5000/service', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <Header></Header>
            <form onSubmit={formSubmit} className='add-event'>
                <div>
                    <div>
                        <div>
                            <label htmlFor="text">Title</label>
                        </div>
                        <div>
                            <input type="text" name='title' placeholder='Title' />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="description">Description</label>
                        </div>
                        <div>
                            <textarea name="description" id="dexcription" cols="30" rows="10" placeholder='Description'></textarea>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <label htmlFor="date">Date</label>
                        </div>
                        <div>
                            <input type="date" name="date" id="date" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="img">Banner</label>
                        </div>
                        <div>
                            <input type="file" name="file" id="" />
                        </div>
                    </div>
                </div>
            </form>
            <input className='submit' type="submit" value="Submit" />
        </div>
    );
};

export default AddEvent;