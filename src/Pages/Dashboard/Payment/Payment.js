import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutFrom from './CheckoutFrom';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_pK);

const Payment = () => {
    const booking = useLoaderData();
    // console.log(booking);
    return (
        <div>
            <h2 className='text-2xl font-bold'>Payment for : <span className='font-extrabold text-sky-500'>{booking.product_name}</span></h2>
            <h3>Place Pay For <strong>{booking.price} </strong>And Enjoy You Life</h3>
            <div className='w-96 my-10'>
                <Elements stripe={stripePromise}>
                    <CheckoutFrom
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;