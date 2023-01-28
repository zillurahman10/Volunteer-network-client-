import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../assets/google-removebg-preview.png'
import register from '../../assets/Animated register Template (1).gif'
import auth from '../../FIrebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Register = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    console.log(user)
    return (
        <div>
            <div className='login-full-form'>
            <div>
                <form>
                    <h1 className='text-3xl mb-5 mt-12'>Hello New Member !</h1>
                    <div>
                    <input type="text" placeholder="Neymar JR" class="input input-bordered w-full max-w-xs mb-5" />
                    <input type="email" placeholder="example@xyz.com" class="input input-bordered w-full max-w-xs mb-5" />
                    <input type="password" placeholder="......." class="input input-bordered w-full max-w-xs mb-5" />
                    <input type="password" placeholder="......." class="input input-bordered w-full max-w-xs" />
                    </div>
                    <input className='btn btn-wide mt-5 flex justify-center' type='submit' value='Register'></input>
                    
                </form>
                <button onClick={()=>{signInWithGoogle()}} className='btn btn-primary btn-wide mt-5'><img style={{width: '40px', marginRight: '5px'}} src={google} alt=''></img><p className='font-bold'>Login With Google</p></button>
                <p>Already Have an Account ! <Link to='/login' className='underline font-bold'>Login Now</Link></p>
            </div>
            <div>
                <img style={{width: '700px'}} src={register} alt=''/>
            </div>
        </div>
        </div>
    );
};

export default Register;