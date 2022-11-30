import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { createUser, updateUser, signInWithGoogle } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    // const location = useLocation();
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/')
    }
    // const from = location.state?.from?.pathname || '/';

    const handelSignUp = data => {
        // console.log(data);
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User SignUp Successfully')

                const userInfo = {
                    displayName: data.name
                }
                // console.log(userInfo);
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role);
                    })
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
                // console.log(user);
                // const googleUser ={
                //     name:user.displayName,
                //     email:user.email
                // }
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


    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('https://vroom-car-ass-12.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
                // getUserToken(email)
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
                                <select type="role" {...register("role", {
                                    required: "selection is required"
                                })}
                                    placeholder="role" className="select select-warning w-full max-w-xs" >
                                    <option>buyer</option>
                                    <option>seller</option>
                                </select>
                                {errors.role && <p role="alert" className='text-red-500'>{errors.role?.message}</p>}
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