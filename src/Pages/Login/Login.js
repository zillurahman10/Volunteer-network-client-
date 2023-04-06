// import React from 'react';
// import './Login.css'
// import login from '../../assets/login.gif'
// import google from '../../assets/google-removebg-preview.png'
// import { Link } from 'react-router-dom';
// import auth from '../../FIrebase.init';
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

// const Login = () => {
//     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
//     console.log(user);
//     return (
//         <div className='login-full-form'>
//             <div>
//                 <form>
//                     <h1 className='text-4xl mb-5'>Hello Again !</h1>
//                     <div>
//                     <input type="email" placeholder="example@xyz.com" class="input input-bordered w-full max-w-xs mb-5" />
//                     <input type="password" placeholder="......." class="input input-bordered w-full max-w-xs" />
//                     </div>
//                     <p>Forget password? <button className='underline font-bold'>Reset password</button></p>
//                     <input className='btn btn-wide mt-5 flex justify-center' type='submit' value='login'></input>
                    
//                 </form>
//                 <button onClick={() => signInWithGoogle()} className='btn btn-primary btn-wide mt-5'><img style={{width: '40px', marginRight: '5px'}} src={google} alt=''></img><p className='font-bold'>Login With Google</p></button>
//                 <p>Don't Have an Account ! <Link to='/register' className='underline font-bold'>Create New</Link></p>
//             </div>
//             <div>
//                 <img style={{width: '500px', marginTop: '50px'}} src={login} alt=''/>
//             </div>
//         </div>
//     );
// };

// export default Login;