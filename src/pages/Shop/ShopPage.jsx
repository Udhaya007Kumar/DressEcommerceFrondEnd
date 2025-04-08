import React, { useEffect, useState } from 'react';
import productsData from "../../data/products.json"
import ProductCard from './ProductCard';
import ShopFiltering from './ShopFiltering';
import { useFetchAllProductsQuery } from '../../redux/features/products/productsApi';




const filters = {
    categories: ['all', 'accessories', 'dress', 'jewellery', 'cosmetics'],
    colors: ['all', 'black', 'red', 'gold', 'blue', 'silver', 'beige', 'green'],
    priceRanges: [
        { label: 'Under $50', min: 0, max: 50 },
        { label: '$50 - $100', min: 50, max: 100 },
        { label: '$100 - $200', min: 100, max: 200 },
        { label: '$200 and above', min: 200, max: Infinity }
    ]
};


const ShopPage = () => {
   const [filtersState, setFiltersState] = useState({
           category: 'all',
           color: 'all',
           priceRange: ''
       });

    const [currentPage, setCurrentPage] = useState(1);
        const [ProductsPerPage] = useState(8);
    
        const { category, color, priceRange } = filtersState;
        const [minPrice, maxPrice] = priceRange.split('-').map(Number);
    
        const { data: { products = [], totalPages, totalProducts } = {}, error, isLoading } = useFetchAllProductsQuery({
            category: category !== 'all' ? category : '',
            color: color !== 'all' ? color : '',
            minPrice: isNaN(minPrice) ? '' : minPrice,
            maxPrice: isNaN(maxPrice) ? '' : maxPrice,
            page: currentPage,
            limit: ProductsPerPage,
        })
    



    //    const applyfilters = () =>{
    //     let filterProducts = productsData

    //     //Fillter by catedgory
    //     if(filtersState.category && filtersState.category !== 'all'){
    //         filterProducts = filterProducts.filter(product => product.category === filtersState.category)
    //     }
    //     //Fillter by catedgory
    //     if(filtersState.color && filtersState.color !== 'all'){
    //         filterProducts = filterProducts.filter(product => product.color === filtersState.color)
    //     }
    //      //Fillter by price Range
    //     //  if(filtersState.priceRange && filtersState.priceRange !== 'all'){
    //     //     filterProducts = filterProducts.filter(product => product.priceRange === filtersState.priceRange)
    //     // }
    //     if(filtersState.priceRange){
    //         const [minPrice,maxPrice] = filtersState.priceRange.split('-').map(Number);
    //         filterProducts=filterProducts.filter(product =>product.price >= minPrice && product.price <= maxPrice)
    //     }
    //     setProducts(filterProducts)
    //    }

    //    useEffect(()=>{
    //     applyfilters()
    //    },[filtersState])

       //cler the fillter 

       const clearFilters = () =>{
        setFiltersState({
            category:'all',
            color:"all",
            priceRange:""
        })
       }

       if (isLoading) return <div>Loading....</div>
    if (error) return <div>Error loading products.</div>
   


    return (
       <>
       <section className="container mx-auto py-16 bg-red-300 rounded-b-4xl">
        <h2 className="mb-4 text-4xl font-extrabold text-gray-900 text-center capitalize">
        Shop Page
        </h2>
        <p className="max-w-[500px] mx-auto text-gray-500 text-center mb-12">
        Discover the Hottest Picks: Elevate Your Style with Our Curated Collection of Trending Women's Fashion Products.
        </p>
      </section>

      <section className=' container mx-auto py-15'>
        <div className='flex flex-col md:flex-row md:gap-12 gap-8'>
            {/* left side */}
            <div>Shop Fitering
                <ShopFiltering  
                filters={filters}
                filtersState={filtersState}
                setFiltersState={setFiltersState}
                clearFilters={clearFilters}
               />
            </div>

            {/* right side */}
            <div>
                <h3 className='text-xl font-medium mb-4' >Showing Products</h3>
                <ProductCard product={products}/>
            </div>

        </div>
      </section>


       </>
    );
};

export default ShopPage;