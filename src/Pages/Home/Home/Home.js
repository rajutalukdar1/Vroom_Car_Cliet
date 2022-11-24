import React from 'react';
import Banner from '../Banner/Banner';
import BrandLogo from '../BrandLogo/BrandLogo';

const Home = () => {
    return (
        <div className='mx-4'>
            <Banner></Banner>
            <h2>this is card</h2>
            <BrandLogo></BrandLogo>
        </div>
    );
};

export default Home;