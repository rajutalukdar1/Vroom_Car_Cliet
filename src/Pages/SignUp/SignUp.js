import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { createUser, updateUser, signInWithGoogle } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handelSignUp = data => {
        // console.log(data);
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User SignUp Successfully')
                navigate(from, { replace: true });
                const userInfo = {
                    displayName: data.name
                }
                // console.log(userInfo);
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => console.log(err))
            })
            .catch(error => {
                console.error(error);
                setSignUpError(error.message)

            })
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user.uid) {
                    toast.success('Login successfully', {
                        position: "top-center"
                    });
                }
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen text-black">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Place Register now!!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl text-black">
                        <form className="card-body" onSubmit={handleSubmit(handelSignUp)}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Name</span>
                                </label>
                                <input type="name" {...register("name", {
                                    required: "Name is required"
                                })}
                                    placeholder="Name" className="input input-bordered " />
                                {errors.name && <p role="alert" className='text-red-500'>{errors.name?.message}</p>}
                            </div>
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
                                    <span className="label-text text-black">Select</span>
                                </label>
                                <select type="select" {...register("select", {
                                    required: "selection is required"
                                })}
                                    placeholder="select" className="select select-warning w-full max-w-xs" >
                                    <option selected>Buyer</option>
                                    <option>Seller</option>
                                </select>
                                {errors.select && <p role="alert" className='text-red-500'>{errors.select?.message}</p>}
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
                            <input className="btn btn-warning" value='Register' type="submit" />
                            {
                                signUpError && <p className='text-red-600'>{signUpError}</p>
                            }
                            <small><p>Already have a accounts?<Link className='text-purple-600 font-bold' to='/login'>Login now</Link></p></small>
                        </form>
                    </div>
                    <p className='text-center'>-------------Or-------------</p>
                    <div>
                        <Link onClick={handleSignInWithGoogle}>
                            <div className='flex justify-content-center align-items-center mt-3 '>
                                <div className='flex justify-between items-center login-container hover:bg-warning'>
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

export default SignUp;