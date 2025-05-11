import React from 'react';

import Slider from '../MainSection/Slider';
import HighRating from '../MainSection/HighRating';
import ExtraSecOne from '../MainSection/ExtraSecOne';
import ExtraSecTwo from '../MainSection/ExtraSecTwo';
import Footer from '../Pages/Footer';
import TopRatedGames from '../Pages/TopRatedGames';

const Home = () => {
    return (
        <div>
            <Slider></Slider>

            <HighRating></HighRating>
            <TopRatedGames></TopRatedGames>
            
            <ExtraSecOne></ExtraSecOne>
            <ExtraSecTwo></ExtraSecTwo>
            <Footer></Footer>
        </div>
    );
};

export default Home;