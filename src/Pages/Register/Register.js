import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Shared/Header/Header';

const Register = () => {
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()

        const name = e.target.library.value
        const date = e.target.date.value
        const imgUrl = e.target.imageUrl.value

        const service = { name, date, imgUrl }

        fetch('http://localhost:5000/eventtasks', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
            })
        navigate(`/eventtasks/1`)
    }
    return (
        <div>
            <Header></Header>
            <h2 className='text-center' >Register as a Volunteer</h2>
            <form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <input type="text" name='name' placeholder='Full Name' required />
                <br />
                <input type="email" name="email" id="" placeholder='Username or Email' required />
                <br />
                <input type="date" name="date" id="" placeholder='Date' />
                <br />
                <input type="text" name='imageUrl' placeholder='img-url' required />
                <br />
                <input type="text" name='library' placeholder='Organize books at the library.' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;