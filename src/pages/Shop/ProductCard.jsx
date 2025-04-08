import React from 'react';
import { Link } from 'react-router-dom';
import RatingStar from '../../components/RatingStar';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';



const ProductCard = ({product}) => {

   const dispatch = useDispatch();
  
      const handleAddToCart = (product) => {
          dispatch(addToCart(product))
      }

    return (
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {product.map((product, index) => (
          <div key={index} className=" relative">
            <div className="">
              <Link to={`/shop/${product._id}`}>
                <img
                  src={product.image}
                  alt="product image"
                  className="max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-300"
                />
              </Link>
            </div>
            <div className=" hover:block absolute top-4 right-4   ">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product)
              }}
              >
                <i className="ri-shopping-bag-line bg-red-500 p-1.5 rounded-3xl hover:bg-red-200"></i>
              </button>
            </div>

            {/* product Description */}

            <div className='text-center p-4'>
                    <h4 className='mb-1 text-xl font-extrabold font-header' >{product.name}</h4>
                     <p className='font-medium text-dark'>${product.price} {product?.oldPrice ? <s >${product?.oldPrice}</s> : null}</p>
                    <RatingStar rating={product.rating}/>
            </div>



          </div>
        ))}
      </div>
    );
};

export default ProductCard;