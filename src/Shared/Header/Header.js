import { signOut } from 'firebase/auth';
import './Header.css'
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom';
import logo from '../../assets/Blue_Modern_Business_Corporate_Logo__2_-removebg-preview.png'

const Header = () => {
    // const [user, loading, error] = useAuthState(auth);
    // const logOut = () => {

    //     signOut(auth)
    // }
    return (
        <div>
            <div className='header'>
                <div className='d-inline'>
                    <img className='logo' src={logo} alt="" />
                </div>
                <div className='links'>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/blog'>Blog</Link>
                    {/* <Link className='link' to='/contents'>Contents</Link> */}
                    <Link className='link' to='/about'>About Us</Link>
                    <Link className='link' to='/contact'>Contact Us</Link>
                    {/* {user ? <div class="dropdown">
                        <label tabindex="0" class="btn m-1">{user?.displayName}</label>
                        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='font-bold'><button><Link to='/profile'>Profile</Link></button></li>
                            <li><button onClick={() => logOut()} className='font-bold'>Sign Out</button></li>
                        </ul>
                    </div> : <Link className='link' to="/login">Join Us</Link>} */}
                </div>
            </div>
        </div>
    );
};

export default Header;