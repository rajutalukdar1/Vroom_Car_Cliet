import React from 'react';
import Categories from '../../Categories/Categories';
import AdvertiseProducts from '../../Dashboard/AllUsers/Seller/Advertise/AdvertiseProducts';
import ActionsOffers from '../ActionsOffers';
import Banner from '../Banner/Banner';
import BrandLogo from '../BrandLogo/BrandLogo';
import InfoCard from '../InfoCard/InfoCard';

const Home = () => {
    return (
        <div className='mx-4'>
            <Banner></Banner>
            <AdvertiseProducts></AdvertiseProducts>
            <div className="flex flex-col w-full mt-6">
                <div className="divider text-black text-3xl">TOP BRANDS</div>
            </div>
            <BrandLogo></BrandLogo>
            <Categories></Categories>
            <InfoCard></InfoCard>
            <ActionsOffers></ActionsOffers>
        </div>
    );
};

export default Home;