import React from 'react';
import { Link } from 'react-router-dom';

const AllCar = ({ allCar }) => {
    const { name, image, sellerName, location, resale_Price, original_Price } = allCar;
    return (
        <div>
            <Link>
                <div className="card bg-base-100 shadow-2xl " style={{ height: '480px' }}>
                    <figure className="px-5 pt-8">
                        <img src={image} alt="Shoes" className="rounded-sm w-full " style={{ height: '200px' }} />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>{sellerName}</p>
                        <p>{location}</p>
                        <div className='flex justify-between'>
                            <h1 className='text-red-500 font-semibold'>|New Price:{original_Price}|</h1>
                            <h1 className='text-green-500 font-semibold'>|Now Price:{resale_Price}|</h1>
                        </div>
                        <div className="card-actions flex justify-between">
                            <button className="btn btn-success text-white hover:bg-orange-600">View Cars</button>
                            <button className="btn btn-error text-white hover:bg-yellow-600">Book Mark</button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default AllCar;