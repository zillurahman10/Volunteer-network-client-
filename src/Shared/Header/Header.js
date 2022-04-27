import { signOut } from 'firebase/auth';
import './Header.css'
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom';
import auth from '../../FIrebase.init';
import logo from '../../Shared/logos/Group 1329.png'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <div className='header'>
                <div className='d-inline'>
                    <img style={{ width: '200px' }} src={logo} alt="" />
                </div>
                <div className='links'>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/donation'>Donation</Link>
                    <Link className='link' to='/eventtasks/1'>Events</Link>
                    <Link className='link' to='/blog'>Blog</Link>
                    <Link className='link' to='/addevent'>Add Event</Link>
                    <button className='admin'>Admin</button>
                    {
                        user ? <button className='signOut' onClick={logOut}>Sign Out</button> : <button className='signOut'>Login</button>
                    }
                    <span style={{ marginLeft: '10px', fontWeight: '900' }}>{user?.displayName}</span>
                </div>
            </div>
        </div>
    );
};

export default Header;