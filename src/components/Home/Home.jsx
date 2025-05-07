import React from 'react';

import Slider from '../MainSection/Slider';
import HighRating from '../MainSection/HighRating';
import ExtraSecOne from '../MainSection/ExtraSecOne';
import ExtraSecTwo from '../MainSection/ExtraSecTwo';
import Footer from '../Pages/Footer';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <HighRating></HighRating>
            <ExtraSecOne></ExtraSecOne>
            <ExtraSecTwo></ExtraSecTwo>
            <Footer></Footer>
        </div>
    );
};

export default Home;