import React from 'react';
import { Link } from 'react-router-dom';

const BrandLogo = () => {
    return (
        <div>

            <section>

            </section>
            <div className="window border mb-4 rounded-lg shadow-2xl">
                <div className="flex justify-center p-8 text-black mb-4 font-black text-3xl"><h2>Find Your Car Brand</h2></div>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-32 lg:ml-20 mt-3'>
                    <Link><img src="https://i.ibb.co/yd8r1VP/Toyota-1.png" alt="" /></Link>
                    <Link><img src="https://i.ibb.co/BVMSYFC/SUZUKI.png" alt="" /></Link>
                    <Link><img src="https://i.ibb.co/xJ25g6f/Mercedes1.png" alt="" /></Link>
                    <Link><img src="https://i.ibb.co/z448nC2/Nissan.png" alt="" /></Link>
                    <Link><img src="https://i.ibb.co/W3GbRWM/Hyundai.png" alt="" /></Link>
                    <Link><img src="https://i.ibb.co/yRkWZ3y/Land-Rover.png" alt="" /></Link>
                    <Link><img src="https://i.ibb.co/gPK8KmQ/Audi.png" alt="" /></Link>
                    <Link><img src="https://i.ibb.co/6YCV0nJ/BMW.png" alt="" /></Link>
                    <Link><img src="https://i.ibb.co/8xtpfHP/Plaggio.png" alt="" /></Link>
                    <Link><img src="https://i.ibb.co/HF4jkRC/Mahindra.png" alt="" /></Link>
                    <Link><img src="https://i.ibb.co/f9MG73w/MG.png" alt="" /></Link>
                    <Link><img src="https://i.ibb.co/PNBrQqt/Mitsubishi-logo.png" alt="" /></Link>
                </div>
            </div>
        </div>
    );
};

export default BrandLogo;