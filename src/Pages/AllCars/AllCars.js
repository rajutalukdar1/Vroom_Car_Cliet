import React, { useEffect, useState } from 'react';
import AllCar from './AllCar';

const AllCars = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 mb-5'>

                {
                    categories.map(allCar => <AllCar
                        key={allCar._id}
                        allCar={allCar}
                    ></AllCar>)
                }

            </div>
        </div>
    );
};

export default AllCars;