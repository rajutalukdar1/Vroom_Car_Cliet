import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ActionsOffers = () => {
    return (
        <div>
            <h2 className='text-5xl font-bold p-5'>Action Offer</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 mb-5'>
                <div className=" card-compact">
                    <figure><img src="https://i.ibb.co/NpKGJzM/883x496-all-models.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <button className='text-xl'>All Models</button>
                        <button className='text-xl'><div className='flex justify-center items-center'>Discover now <FaArrowRight className='ml-5 mt-1'></FaArrowRight></div></button>
                    </div>
                </div>
                <div className=" card-compact">
                    <figure><img src="https://i.ibb.co/9ptsbFh/883x496-repair-and-service.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <button className='text-xl'>Repair and Service</button>
                        <button className='text-xl'><div className='flex justify-center items-center'>Learn more <FaArrowRight className='ml-5 mt-1'></FaArrowRight></div></button>
                    </div>
                </div>
                <div className=" card-compact">
                    <figure><img src="https://i.ibb.co/pbGjbBg/883x496-audi-genuine-accessories.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <button className='text-xl'>Audi genuine accessories</button>
                        <button className='text-xl'><div className='flex justify-center items-center'>Discover now <FaArrowRight className='ml-5 mt-1'></FaArrowRight></div></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActionsOffers;