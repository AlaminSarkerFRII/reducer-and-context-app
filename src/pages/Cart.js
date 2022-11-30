import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Cart = () => {
  const {
    state: { cart, loading, error },
  } = useProducts();

  console.log(cart);

  let product;

  //loading
  if (loading) {
    product = <p className='text-center my-10 text-3xl'>Loading------------</p>;
  }

  //error

  if (error) {
    product = <p>Something went wrong</p>;
  }

  if (!loading && !error && cart.length === 0) {
    product = <p>the product container is empty</p>;
  }

  if (!loading && !error && cart.length) {
    product = (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {cart.map((item, index) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>
    );
  }

  return <div className='max-w-[1640px] mx-auto'>{product}</div>;
};

export default Cart;
