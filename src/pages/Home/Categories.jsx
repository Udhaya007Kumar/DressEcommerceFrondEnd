import React from 'react';

import category1 from "../../assets/category-1.jpg";
import category2 from "../../assets/category-2.jpg";
import category3 from "../../assets/category-3.jpg";
import category4 from "../../assets/category-4.jpg";
import { Link } from 'react-router-dom';

const Categories = () => {
    const categories = [
        { name: 'Accessories', path: 'accessories', image: category1 },
        { name: 'Dress Collection', path: 'dress', image: category2 },
        { name: 'Jewellery', path: 'jewellery', image: category3 },
        { name: 'Cosmetics', path: 'cosmetics', image: category4 },
    ];

    return (
      <div className="max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 py-15">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/categories/${category.path}`}
            className="flex flex-col items-center text-center"
          >
            <div className="w-36 h-36 rounded-full overflow-hidden  shadow-md hover:scale-105 transition-transform">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="mt-4 text-lg font-medium hover:text-red-500">
              {category.name}
            </h4>
          </Link>
        ))}
      </div>
    );
};

export default Categories;
