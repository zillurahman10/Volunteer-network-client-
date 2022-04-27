import React, { useEffect, useState } from 'react';
import './EventTask.css'

const EventTask = ({ event }) => {
    const { imgUrl, name, date, _id } = event
    const [reEvents, setReEvents] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setReEvents(data))
    }, [])

    const handleCancel = id => {
        const confirmCancel = window.confirm("Are you sure to cancel the event?")
        if (confirmCancel) {
            console.log('deleting a event!', id);
            const url = `http://localhost:5000/event/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const remaining = reEvents.filter(events => events._id !== id)
                        setReEvents(remaining)
                    }
                })
        }
    }
    return (
        <div className='container'>
            <div>
                <img style={{ width: '150px' }} src={imgUrl} alt="" />
            </div>
            <div className='text'>
                <h3>{name}</h3>
                <h4>{date}</h4>
                <button className='cancel-button' onClick={() => handleCancel(_id)} >Cancel</button>
            </div>
        </div>
    );
};

export default EventTask;