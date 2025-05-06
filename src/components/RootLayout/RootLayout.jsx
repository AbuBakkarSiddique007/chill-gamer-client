import React from 'react';
import Navbar from '../Pages/Navbar';
import { Outlet } from 'react-router-dom';
import Slider from '../Home/Slider';
import HighRating from '../Home/HighRating';
import ExtraSecOne from '../Home/ExtraSecOne';
import ExtraSecTwo from '../Home/ExtraSecTwo';

const RootLayout = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <Navbar></Navbar>
            <Slider></Slider>
            <HighRating></HighRating>
            <ExtraSecOne></ExtraSecOne>
            <ExtraSecTwo></ExtraSecTwo>

            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;