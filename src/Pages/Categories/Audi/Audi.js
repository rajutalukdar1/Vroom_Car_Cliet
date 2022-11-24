import React from 'react';
import { Link } from 'react-router-dom';

const Audi = () => {
    return (
        <div>
            <Link>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="card-title">Audi!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-warning w-full">Buy Now</button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Audi;