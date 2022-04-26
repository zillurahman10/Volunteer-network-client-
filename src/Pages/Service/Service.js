import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { img, name } = service
    const navigate = useNavigate()
    const navToRe = () => {
        navigate('/register')
    }
    return (
        <div className='cards' onClick={navToRe}>
            <img className='image' src={img} alt="" />
            <div className='name'>
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default Service;