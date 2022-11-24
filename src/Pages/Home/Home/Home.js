import React from 'react';
import Categories from '../../Categories/Categories';
import Banner from '../Banner/Banner';
import BrandLogo from '../BrandLogo/BrandLogo';
import InfoCard from '../InfoCard/InfoCard';

const Home = () => {
    return (
        <div className='mx-4'>
            <Banner></Banner>
            <div className="flex flex-col w-full mt-6">
                <div className="divider text-black text-3xl">TOP BRANDS</div>
            </div>
            <BrandLogo></BrandLogo>
            <h2>this is card</h2>
            <Categories></Categories>
            <InfoCard></InfoCard>
        </div>
    );
};

export default Home;