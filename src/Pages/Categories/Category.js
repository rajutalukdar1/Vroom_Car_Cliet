import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    // console.log(category.car_id);
    const { image, brandName, sellerName, location, car_id } = category;


    const handleAllCars = () => {
        console.log('view all cars');
    }

    return (
        <div>
            <Link to={`/products/${car_id}`} onClick={handleAllCars}>
                <div className="card bg-base-100 shadow-2xl">
                    <figure className="px-5 pt-8">
                        <img src={image} alt="Shoes" className="rounded-sm w-full h-48" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-center text-2xl font-bold">{brandName}</h2>
                        <p className='font-semibold text-cyan-400'>{sellerName}</p>
                        <p>{location}</p>
                        <div className="card-actions">
                            <button className="btn btn-warning w-full text-white hover:bg-orange-600">View Cars</button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Category;