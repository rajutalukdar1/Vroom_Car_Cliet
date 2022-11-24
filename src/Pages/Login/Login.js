import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handelLogin = data => {
        console.log(data);
    }
    return (
        <div>
            <div className="hero min-h-screen text-black">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Place Login now!!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl text-black">
                        <form className="card-body" onSubmit={handleSubmit(handelLogin)}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Email</span>
                                </label>
                                <input type="email" {...register("email", {
                                    required: "Email Address is required"
                                })}
                                    placeholder="Email" className="input input-bordered " />
                                {errors.email && <p role="alert" className='text-red-500'>{errors.email?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: "Password Address is required",
                                    minLength: { value: 6, message: 'password must be 6 cheaters' }
                                })} placeholder="Password" className="input input-bordered " />
                                {errors.password && <p role="alert" className='text-red-500'>{errors.password?.message}</p>}
                            </div>
                            <label className="label">
                                <Link to="" className="label-text-alt link text-black">Forgot password?</Link>
                            </label>
                            <input className="btn btn-primary" value='Login' type="submit" />
                            <small><p>Don't have a accounts?<Link className='text-purple-600 font-bold' to='/signup'>Register now</Link></p></small>
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