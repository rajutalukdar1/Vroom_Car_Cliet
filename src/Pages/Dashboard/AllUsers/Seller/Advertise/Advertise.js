import React from 'react';

const Advertise = ({ advertiseProduct }) => {

    const { image, name, resale_Price } = advertiseProduct;

    return (
        <div>

            <div className="card  bg-base-100 shadow-xl" style={{ height: '380px' }}>
                <figure><img className='rounded-sm' src={image} alt="Movie" style={{ height: '200px' }} /></figure>
                <div className="card-body">
                    <h2 className="card-title"><strong>{resale_Price}</strong></h2>
                    <p>Model : {name}</p>

                </div>
            </div>
        </div>
    );
};

export default Advertise;