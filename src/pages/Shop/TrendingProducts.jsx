import React, { useState } from 'react';
import ProductCard from './ProductCard';
import product from '../../data/products.json'

const TrendingProducts = () => {
    const [visibleProducts,setVisibleProducts] =useState(8)

    const loadMoreProducts =()=>{
        setVisibleProducts(prevcount => prevcount +4)
    }



    return (
        <section className=' container mx-auto py-15'>
           <h2 className='mb-4 text-4xl font-extrabold text-gray-900 text-center'>Trending Products</h2>
           <p className='max-w-[500px] mx-auto text-gray-500 text-center mb-12'>
                Discover the Hottest Picks: Elevate Your Style with Our Curated Collection of Trending Women's Fashion Products.
            </p>

           <div className='mt-12'>
           <ProductCard product={product.slice(0,visibleProducts)}/>
           </div>

           <div className='text-center'>
            {
                visibleProducts < product.length && (
                    <button
                     className="px-6 py-3 text-white bg-red-500 rounded-md text-base border-none outline-none cursor-pointer transition duration-300 hover:opacity-90"
                     onClick={loadMoreProducts}>Load More</button>
                )
            }
           </div>

        </section>
    );
};

export default TrendingProducts;