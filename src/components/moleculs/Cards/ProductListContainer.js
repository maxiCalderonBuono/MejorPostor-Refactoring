import React from "react";
import { useState, useEffect } from "react";

import ProductList from "./ProductList";

const ProductListContainer = () => {
  const [products, setProducts] = useState([]);
  const URL = "https://api.mercadolibre.com/sites/MLA/search?q=auto";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <div className="grid gap-4 bg-gray-100 ">
      <ProductList products={products} />
    </div>
  );
};

export default ProductListContainer;
