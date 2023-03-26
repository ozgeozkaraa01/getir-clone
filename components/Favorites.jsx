import React, { useEffect, useState } from "react";
import Title from "./ui/Title";
import Products from "../api/products.json";
import ProductItem from "./ui/ProductItem";

const Favorites = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <div>
      <Title>Favoriler</Title>
      <div className="grid grid-cols-8 gap-1 bg-white rounded-lg overflow-hidden">
        {products &&
          products.map((product) => <ProductItem product={product} />)}
      </div>
    </div>
  );
};

export default Favorites;
