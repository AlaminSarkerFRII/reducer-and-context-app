import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const TopRated = () => {
  const {
    state: { products, loading, error },
  } = useProducts();

  let product;

  //loading
  if (loading) {
    product = <p className='text-center my-10 text-3xl'>Loading------------</p>;
  }

  //error

  if (error) {
    product = <p>Something went wrong</p>;
  }

  if (!loading && !error && products.length == 0) {
    product = <p>the product container is empty</p>;
  }

  if (!loading && !error && products.length) {
    product = (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grids-cols-3 gap-10'>
        {products
          .filter((product) => product.price >= 500)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    );
  }
  return <div className=''>{product}</div>;
};

export default TopRated;
