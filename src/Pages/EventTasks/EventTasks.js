import React, { useEffect, useState } from 'react';
import EventTask from '../EventTask/EventTask';

const EventTasks = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <div>
            <div>
                {
                    events.map(event => <EventTask
                        key={event._id}
                        event={event}
                    ></EventTask>)
                }
            </div>
        </div>
    );
};

export default EventTasks;