import React from "react";
import { BiListPlus } from "react-icons/bi";

const ProductCard = ({ product }) => {
  return (
    <div
      className=' w-full shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'
      key={product.id}
    >
      <div className='h-52 w-52 p-4 mx-auto hover:scale-105 transition-all'>
        <img
          className='w-full object-cover object-center'
          src={product.thumbnail}
          alt={product.title}
        />
      </div>
      <h1 className='font-bold text-center'>{product.brand}</h1>
      <p className='text-center font-semibold mb-3'>
        category:
        <span className='text-orange-500 ml-3'> {product.category}</span>
      </p>
      <p className='text-center font-bold mb-3'>{product.description}</p>
      <h3 className='text-extrabold text-center mt-2'>
        Price : ${product.price}
      </h3>
      <div className='flex items-center gap-2 mt-5 bottom-0'>
        <button className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
          Add to cart
        </button>
        <button
          title='Add to wishlist'
          className='bg-indigo-500  py-1 px-2 rounded-full'
        >
          <BiListPlus className='text-white' />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
