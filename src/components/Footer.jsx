import React from 'react';

import instaImg1 from "../assets/instagram-1.jpg";
import instaImg2 from "../assets/instagram-2.jpg";
import instaImg3 from "../assets/instagram-3.jpg";
import instaImg4 from "../assets/instagram-4.jpg";
import instaImg5 from "../assets/instagram-5.jpg";
import instaImg6 from "../assets/instagram-6.jpg";

const Footer = () => {
    return (
      <footer className="container mx-auto py-10 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-lg font-extrabold font-header text-text-dark">
              CONTACT INFO
            </h4>
            <p className="mb-4 text-sm font-medium text-text-light">
              <span className="mr-2 text-red-500 text-xl">
                <i className="ri-map-pin-2-fill"></i>
              </span>
              123, London Bridge Street, London
            </p>
            <p className="mb-4 text-sm font-medium text-text-light">
              <span className="mr-2 text-red-500 text-xl">
                <i className="ri-mail-fill"></i>
              </span>
              support@lebaba.com
            </p>
            <p className="mb-4 text-sm font-medium text-text-light">
              <span className="mr-2 text-red-500 text-xl">
                <i className="ri-phone-fill"></i>
              </span>
              (+012) 3456 789
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-6 text-lg font-extrabold font-header text-text-dark">
              COMPANY
            </h4>
            {['Home', 'About Us', 'Work With Us', 'Our Blogs', 'Terms & Conditions'].map((link) => (
              <a
                key={link}
                className="block mb-4 text-sm font-medium text-gray-400 hover:text-red-500"
                href="/"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="mb-6 text-lg font-extrabold font-header text-text-dark">
              USEFUL LINK
            </h4>
            {['Help', 'Track your order', 'Men', 'Women', 'Dresses'].map((link) => (
              <a
                key={link}
                className="block mb-4 text-sm font-medium text-gray-400 hover:text-red-500"
                href="/"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Instagram Section */}
          <div>
            <h4 className="mb-6 text-lg font-extrabold font-header text-text-dark">
              INSTAGRAM
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {[instaImg1, instaImg2, instaImg3, instaImg4, instaImg5, instaImg6].map((img, index) => (
                <img key={index} src={img} alt={`Instagram ${index + 1}`} className="w-full rounded-md" />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='p-4 text-center text-sm text-gray-400 border-t-2 border-gray-100 mt-8'>
          Copyright © 2025 by Lebaba. All rights reserved.
        </div>
      </footer>
    );
};

export default Footer;
