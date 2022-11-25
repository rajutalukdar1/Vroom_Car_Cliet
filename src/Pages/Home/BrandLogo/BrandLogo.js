import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/Brand-Image/Toyota-1.png';
import img2 from '../../../assets/Brand-Image/SUZUKI-2.png';
import img3 from '../../../assets/Brand-Image/Mercedes-3.png';
import img4 from '../../../assets/Brand-Image/Nissan-4.png';
import img5 from '../../../assets/Brand-Image/Hyundai-5.png';
import img6 from '../../../assets/Brand-Image/Land-Rover-6.png';
import img7 from '../../../assets/Brand-Image/Audi-7.png';
import img8 from '../../../assets/Brand-Image/BMW-8.png';
import img9 from '../../../assets/Brand-Image/Plaggio-9.png';
import img10 from '../../../assets/Brand-Image/Mahindra-10.png';
import img11 from '../../../assets/Brand-Image/MG-11.png';
import img12 from '../../../assets/Brand-Image/Mitsubishi-logo-12.png';

const BrandLogo = () => {
    return (
        <div>
            <section>
                <div className="window border mb-4 rounded-lg shadow-2xl">
                    <div className="flex justify-center p-8 text-black mb-4 font-black text-3xl"><h2>Find Your Car Brand</h2></div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-20 px-32 lg:ml-20 mt-3'>
                        <Link to='/productAll'><img src={img1} alt="" /></Link>
                        <Link to='/productAll'><img src={img2} alt="" /></Link>
                        <Link to='/productAll'><img src={img3} alt="" /></Link>
                        <Link to='/productAll'><img src={img4} alt="" /></Link>
                        <Link to='/productAll'><img src={img5} alt="" /></Link>
                        <Link to='/productAll'><img src={img6} alt="" /></Link>
                        <Link to='/productAll'><img src={img7} alt="" /></Link>
                        <Link to='/productAll'><img src={img8} alt="" /></Link>
                        <Link to='/productAll'><img src={img9} alt="" /></Link>
                        <Link to='/productAll'><img src={img10} alt="" /></Link>
                        <Link to='/productAll'><img src={img11} alt="" /></Link>
                        <Link to='/productAll'><img src={img12} alt="" /></Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default BrandLogo;