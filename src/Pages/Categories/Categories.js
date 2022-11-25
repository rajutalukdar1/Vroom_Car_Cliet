import React, { useEffect, useState } from 'react';
import Category from './Category';
// import Audi from './Audi/Audi';
// import Bmw from './BmwCar/Bmw';
// import Mercedes from './Mercedes/Mercedes';
// import Suzuki from './Suzuki/Suzuki';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/catagories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 mb-5'>
                {/* <Audi></Audi>
            <Bmw></Bmw>
            <Mercedes></Mercedes>
            <Suzuki></Suzuki> */}
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>)
                }

            </div>
            <div className="flex justify-center p-5">
                <button className="btn btn-warning text-white hover:bg-orange-600">View All Cars</button>
            </div>
        </div>

    );
};

export default Categories;