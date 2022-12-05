import axios from "axios";
import _, { range } from "lodash";
import React, { useEffect, useState } from "react";
import { paginate } from "../utils/paginate";
import CartItem from "./cart";

const Products = ({isLoading,filteredProducts}) => {
 
  const [currentPage,setCurrentPage]=useState(1);
  const [perPage,]=useState(5);

  const totalProducts = filteredProducts.length;

  const pageCount = Math.ceil(totalProducts / perPage);
 
  const pages = range(1, pageCount + 1);
  let productsPage = paginate(filteredProducts, currentPage, perPage);

  const onChangePage = page => {

      setCurrentPage(page);

    
  };

  if (isLoading) {
    return (
      <section className="flex justify-center w-100">
        <p>LOADING...</p>
      </section>
    );
  }
  const productsList = productsPage.map(product =>
    <CartItem
      key={product.id}
      id={product.id}
      title={product.title}
      description={product.description}
      price={product.price}
      image={product.image}
      rating={product.rating}
    />
  );
  return (
    <div>
      <div className="flex flex-wrap  align-center justify-center  p-8">
       {productsList}
      </div>
      <div className="flex  align-center justify-center ">
        <ul className="flex  align-center justify-center  p-2">
          {pages.map(p =>
            <li className="p-2 cursor-pointer" key={p.id}>
              <a onClick={() => onChangePage(p)}>
                {p}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Products;
