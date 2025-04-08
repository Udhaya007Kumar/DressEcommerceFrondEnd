import React from 'react';
import card1 from "../../assets/card-1.png";
import card2 from "../../assets/card-2.png";
import card3 from "../../assets/card-3.png";

const cards = [
    { id: 1, image: card1, trend: '2024 Trend', title: 'Womens Shirt' },
    { id: 2, image: card2, trend: '2024 Trend', title: 'Womens Dresses' },
    { id: 3, image: card3, trend: '2024 Trend', title: 'Womens Casuals' },
];

const HeroSection = () => {
    return (
        <div className='container mx-auto px-4 md:px-8 py-10 '>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cards.map((card) => (
                    <div key={card.id} className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
                        <img 
                            src={card.image} 
                            alt="Card Image" 
                            className="w-full h-48 object-cover" 
                        />
                        
                        <div className="p-4 md:p-6   ">
                            <p className="text-blue-500 text-sm font-semibold">{card.trend}</p>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
                            
                            <a
                                href="#"
                                className="inline-block text-blue-500 font-medium hover:text-blue-600 transition"
                            >
                                Discover More →
                            </a> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroSection;
