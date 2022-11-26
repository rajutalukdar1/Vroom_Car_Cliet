import React from 'react';

const Product = ({ product, setAllProduct }) => {
    const { name, image, sellerName, location, resale_Price, original_Price } = product;
    return (
        <div>
            <div className="card bg-base-100 shadow-2xl " style={{ height: '480px' }}>
                <figure className="px-5 pt-8">
                    <img src={image} alt="Shoes" className="rounded-sm w-full " style={{ height: '200px' }} />
                </figure>
                <div className="card-body text-center">
                    <h2 className="text-center text-xl font-bold">{name}</h2>
                    <p className='font-semibold text-cyan-400'>{sellerName}</p>
                    <p>{location}</p>
                    <div className='flex justify-between'>
                        <h1 className=' font-bold'>|New Price:{original_Price}|</h1>
                        <h1 className=' font-bold'>|Now Price:{resale_Price}|</h1>
                    </div>
                    <div className="card-actions flex justify-between">
                        <label onClick={() => setAllProduct(product)} htmlFor="my-modal-3" className=" btn btn-warning text-white hover:bg-yellow-600">Book Mark</label>
                        <button className="btn btn-warning text-white hover:bg-orange-600">Wish List </button>
                        {/* <button className="">Book Mark</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;