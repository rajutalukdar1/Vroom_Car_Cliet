
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../Contexts/AuthProvider';
import Loading from '../../../../Shared/Loading/Loading';
import Advertise from './Advertise';

const AdvertiseProducts = () => {
    const { loading } = useContext(AuthContext);
    const [advertise, setAdvertise] = useState([]);

    useEffect(() => {
        axios.get(`https://vroom-car-ass-12.vercel.app/advertise`)
            .then(data => {
                setAdvertise(data.data);
            })
    }, []);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <p className='text-5xl font-bold text-center text-[#0071A1] p-5'>Our Special Offers</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 max-w-screen-xl mx-auto my-16'>
                {
                    advertise &&
                    advertise?.map(advertiseProduct => <Advertise
                        key={advertiseProduct._id}
                        advertiseProduct={advertiseProduct}
                    ></Advertise>)
                }
            </div>
        </div>
    );
};

export default AdvertiseProducts;