import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import './Main.css'

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='bottom'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Main;