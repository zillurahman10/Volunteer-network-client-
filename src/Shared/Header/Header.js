import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom';
import auth from '../../FIrebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <div className='d-inline'>
                    <h3>Logo</h3>
                </div>
                <div className='d-inline'>
                    {
                        user ? <button onClick={logOut}>Sign Out</button> : <Link to='/login'></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;