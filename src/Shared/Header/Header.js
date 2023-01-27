import { signOut } from 'firebase/auth';
import './Header.css'
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom';
import auth from '../../FIrebase.init';
import logo from '../../assets/Free_Sample_By_Wix.jpeg'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <div className='header'>
                <div className='d-inline'>
                    <img className='logo' src={logo} alt="" />
                </div>
                <div className='links'>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/blog'>Blog</Link>
                    <Link className='link' to='/eventtasks/1'>Events</Link>
                    <Link className='link' to='/blog'>Blog</Link>
                    <Link className='link' to='/addevent'>Add Event</Link>
                    <Link className='link' to="/login">join Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;