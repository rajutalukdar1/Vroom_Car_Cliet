import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    // onClick={handleGoogleSignIn}
    // onSubmit={handelSubmit}
    return (
        <div>
            <div className="hero min-h-screen text-black">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl text-black">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered " required />
                                <label className="label">
                                    <Link to="" className="label-text-alt link link-hover text-black">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <small><p>Don't have a accounts?<Link className='text-purple-600 font-bold' to='/signup'>Register now</Link></p></small>
                            {/* <p className='text-red-600'>{error}</p> */}
                        </form>
                    </div>
                    <p className='text-center'>-------------Or-------------</p>
                    <div>
                        <Link >
                            <div className='flex justify-content-center align-items-center mt-3 '>
                                <div className='flex justify-between items-center login-container hover:bg-primary'>
                                    <div className='w-10 h-10 ml-1'>
                                        <img
                                            src='https://i.ibb.co/7yz77Hj/google.png' alt=''
                                        ></img>
                                    </div>
                                    <div className=' font-semibold '>
                                        Continue with Google
                                    </div>
                                    <div className='mr-6'>

                                    </div>
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;