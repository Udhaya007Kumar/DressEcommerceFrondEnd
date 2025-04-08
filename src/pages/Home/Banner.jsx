import React from 'react';
import { Link } from 'react-router-dom';
import BannerImg from '../../assets/header.png';

const Banner = () => {
    return (
      <div className="max-w-[1400px] mx-auto py-20 px-4 min-h-[650px] rounded-b-xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start md:items-center bg-red-200">
        
        {/* Content Section */}
        <div className='max-w-[600px] mx-auto text-center md:text-left'>
          <h4 className="text-red-500 text-base font-medium uppercase">UP TO 20% Discount on</h4>
          <h1 className='text-[3rem] md:text-[5rem] font-extrabold font-header text-dark'>
            Girl's Fashion
          </h1>
          <p className="mb-8 text-light">
            Discover the latest trends and express your unique style with our
            Women's Fashion website. Explore a curated collection of clothing,
            accessories, and footwear that caters to every taste and occasion.
          </p>

          <button className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition">
            <Link to="/shop">EXPLORE NOW</Link>
          </button>
        </div>

        {/* Image Section */}
        <div className="relative h-full hidden md:block opacity-100 md:opacity-100">
          <img
            src={BannerImg}
            alt="bannerImage"
            className="absolute left-1/2 bottom-[-5rem] transform -translate-x-1/2 max-w-[500px]"
          />
        </div>
      </div>
    );
};

export default Banner;
