import React from 'react';
import Audi from './Audi/Audi';
import Bmw from './BmwCar/Bmw';
import Mercedes from './Mercedes/Mercedes';
import Suzuki from './Suzuki/Suzuki';

const Categories = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 mb-5'>
            <Audi></Audi>
            <Bmw></Bmw>
            <Mercedes></Mercedes>
            <Suzuki></Suzuki>
        </div>
    );
};

export default Categories;