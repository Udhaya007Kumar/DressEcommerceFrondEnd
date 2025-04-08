import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import products from "../../data/products.json";
import ProductCard from '../shop/ProductCard';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter(
      (product) => product.category.toLowerCase() === categoryName.toLowerCase()
    );
    setFilteredProducts(filtered);
  }, [categoryName]);

  return (
    <>
      <section className="container mx-auto py-16 bg-red-300 rounded-b-4xl">
        <h2 className="mb-4 text-4xl font-extrabold text-gray-900 text-center capitalize">
          {categoryName}
        </h2>
        <p className="max-w-[500px] mx-auto text-gray-500 text-center mb-12">
          Browse a diverse range of categories, from chic dresses to versatile accessories. 
          Elevate your style today!
        </p>
      </section>

      <div className=" container mx-auto p-25 mr-2">
        {
            filteredProducts .length > 0 ? (
                <ProductCard product={filteredProducts}/>
            ) : <p className="text-center text-gray-500">No products found in this category.</p>
        }
        
      </div> 
    </>
  );
};

export default CategoryPage;
