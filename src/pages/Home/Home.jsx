import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import HeroSection from './HeroSection'
import TrendingProducts from '../Shop/TrendingProducts';
import DealSection from './DealSection';
import ProBanner from './ProBanner';
import Blogs from '../blogs/Blogs';

const Home = () => {
    return (
       <>
       <Banner/>
       <Categories/>
       <HeroSection/>
       <TrendingProducts/>
       <DealSection/>
       <ProBanner/>
       <Blogs/>
       </>
    );
};

export default Home;