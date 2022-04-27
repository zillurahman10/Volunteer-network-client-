import React from 'react';
import './EventTask.css'

const EventTask = ({ event }) => {
    const { imgUrl, name, date, _id } = event
    const handleCancel = id => {
        const confirmCancel = window.confirm("Are you sure to cancel the event?")
        if (confirmCancel) {
            console.log('deleting a event!', id);
            const url = `http://localhost:5000/events/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }
    return (
        <div className='container'>
            <div>
                <img style={{ width: '100px' }} src={imgUrl} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <h4>{date}</h4>
                <button onClick={() => handleCancel(_id)} >Cancel</button>
            </div>
        </div>
    );
};

export default EventTask;