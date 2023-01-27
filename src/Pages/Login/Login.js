import React from 'react';
import './Login.css'
import login from '../../assets/login.gif'
import google from '../../assets/google-removebg-preview.png'

const Login = () => {
    return (
        <div className='login-full-form'>
            <div>
                <form>
                    <h1>Hello Again !</h1>
                    <div>
                    <input type="email" name='email' placeholder='example@xyz.com' className='email'></input>
                    <br/>
                    <input type="password" name='password' placeholder='123456' className='password'></input>
                    </div>
                    <input className='login-button' type='submit' value='login'></input>
                    <button className='google-button'><img style={{width: '40px', marginRight: '5px'}} src={google} alt=''></img><p>Login With Google</p></button>
                </form>
            </div>
            <div>
                <img style={{width: '500px', marginTop: '50px'}} src={login} alt=''/>
            </div>
        </div>
    );
};

export default Login;