import React from 'react';
import auth from '../../FIrebase.init';
import './Login.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <button onClick={() => signInWithGoogle()}>
                <p>continue with google</p>
            </button>
        </div>
    );
};

export default Login;