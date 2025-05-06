import React from 'react';
import Navbar from '../Pages/Navbar';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <Navbar></Navbar>


            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;