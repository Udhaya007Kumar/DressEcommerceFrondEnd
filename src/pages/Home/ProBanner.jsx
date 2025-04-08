import React from 'react';

const ProBanner = () => {
    return (
        <section className="container mx-auto flex justify-center items-center gap-8 py-8">
  
        {/* <!-- Card 1 --> */}
        <div className="text-center w-1/4">
          <span className="mb-4 inline-block text-4xl text-red-500">
            <i className="ri-truck-line"></i>
          </span>
          <h4 className="mb-2 text-xl font-header text-black">Free Delivery</h4>
          <p className="text-gray-400">
            Offers convenience and the ability to shop from anywhere, anytime.
          </p>
        </div>
      
        {/* <!-- Card 2 --> */}
        <div className="text-center w-1/4">
          <span className="mb-4 inline-block text-4xl text-red-500">
            <i className="ri-money-dollar-circle-line"></i>
          </span>
          <h4 className="mb-2 text-xl font-header text-black">100% Money Back Guaranty</h4>
          <p className="text-gray-400">
            E-commerce has a review system where customers can share feedback.
          </p>
        </div>
      
        {/* <!-- Card 3 --> */}
        <div className="text-center w-1/4">
          <span className="mb-4 inline-block text-4xl text-red-500">
            <i className="ri-user-voice-fill"></i>
          </span>
          <h4 className="mb-2 text-xl font-header text-black">Strong Support</h4>
          <p className="text-gray-400">
            Offer customer support services to assist customers with queries and issues.
          </p>
        </div>
      
      </section>
      
    );
};

export default ProBanner;