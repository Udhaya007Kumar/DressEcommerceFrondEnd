import React, { useState } from 'react';
import ProductCard from '../shop/ProductCard';
import productsData from "../../data/products.json"



const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(productsData);


    const handleSearch = () =>{
        const query = searchQuery.toLowerCase();

        const filtered = productsData.filter(product => product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query));

        setFilteredProducts(filtered);
    }

    return (
        <>
        <section className="container mx-auto py-16 bg-red-300 rounded-b-4xl">
        <h2 className="mb-4 text-4xl font-extrabold text-gray-900 text-center capitalize">
        Search Products
        </h2>
        <p className="max-w-[500px] mx-auto text-gray-500 text-center mb-12">
        Browse a diverse range of categories, from chic dresses to versatile accessories. Elevate your style today!
        </p>
      </section>

      <section className=' container mx-auto py-15'>
        <div className='w-full mb-12 flex flex-col md:flex-row items-center justify-center gap-4'>
            <input type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='search-bar w-full max-w-4xl p-2 border rounded'
            placeholder='Search for products...' />

            <button 
            onClick={handleSearch}
            className='search-button w-full md:w-auto py-2 px-8 bg-red-500 hover:bg-red-800 text-white rounded'>Search</button>
            
        </div>


        {
            filteredProducts.length > 0 ? (
                <ProductCard product={filteredProducts}/>
            ) : <h1>No Searching found in this category.</h1>
        }
        


      </section>







        </>
    );
};

export default Search;