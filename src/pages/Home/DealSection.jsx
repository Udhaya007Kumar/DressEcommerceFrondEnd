import React from 'react';
import dealsImg from "../../assets/deals.png"

const DealSection = () => {
    return (
      <div className="container mx-auto bg-red-200 m-8 ">
  <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-5">
    
    {/* Image Section */}
    <div className="w-full md:w-1/2 ml-8">
      <img 
        src={dealsImg} 
        alt="Deals Image" 
        className=" w-[500px] h-auto mx-auto md:mx-0 rounded-lg"
      />
    </div>

    {/* Content Section */}
    <div className="w-full md:w-2/3 text-center md:text-left">
      <h5 className="mb-4 text-base font-medium text-red-500">
        Get Up To 20% Discount
      </h5>
      <h4 className="mb-4 text-2xl font-extrabold text-black">
        Deals Of This Month
      </h4>
      <p className="mb-8 text-gray-400">
        Our Women's Fashion Deals of the Month are here to make your style 
        dreams a reality without breaking the bank. Discover a curated 
        collection of exquisite clothing, accessories, and footwear, 
        all handpicked to elevate your wardrobe.
      </p>
      <div className='flex items-center gap-4 flex-wrap'>
                <div className='h-20 w-20 grid place-content-center text-center bg-white rounded-full shadow-[5px_5px_20px_rgba(0,0,0,0.1)]'>
                    <h4 className='mb-0 text-2xl text-black'>14</h4>
                    <p className='mb-0 font-medium text-text-dark'>Days</p>
                </div>
                <div className='h-20 w-20 grid place-content-center text-center bg-white rounded-full shadow-[5px_5px_20px_rgba(0,0,0,0.1)]'>
                    <h4 className='mb-0 text-2xl text-black'>20</h4>
                    <p className='mb-0 font-medium text-text-dark'>Hours</p>
                </div>
                <div className='h-20 w-20 grid place-content-center text-center bg-white rounded-full shadow-[5px_5px_20px_rgba(0,0,0,0.1)]'>
                    <h4 className='mb-0 text-2xl text-black'>15</h4>
                    <p className='mb-0 font-medium text-text-dark'>Mins</p>
                </div>
                <div className='h-20 w-20 grid place-content-center text-center bg-white rounded-full shadow-[5px_5px_20px_rgba(0,0,0,0.1)]'>
                    <h4 className='mb-0 text-2xl text-black'>05</h4>
                    <p className='mb-0 font-medium text-text-dark'>Secs</p>
                </div>
            </div>
    </div>
  </div>
</div>


       
    );
};

export default DealSection;