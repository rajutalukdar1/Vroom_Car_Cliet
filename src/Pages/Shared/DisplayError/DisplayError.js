import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <p className='text-red-500'>Something Went Wrong !!!</p>
            <p className='text-red-500'>{error.statusText || error.message}</p>
            <h2 className="text-3xl">Please <Link onClick={handleLogOut}>Log Out</Link> And log in back</h2>
        </div>
    );
};

export default DisplayError;