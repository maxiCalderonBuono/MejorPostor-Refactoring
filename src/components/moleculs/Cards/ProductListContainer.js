import React from "react";
import { useState, useEffect } from "react";

import ProductList from "./ProductList";

const ProductListContainer = () => {
  const [products, setProducts] = useState([]);
  const URL = "https://api.mercadolibre.com/sites/MLA/search?q=auto";


    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setProducts(data.results);
            console.log(data.results)
            });
    }, []);


    return(
        <div className="grid gap-4 bg-gray-100 rounded-lg shadow-[3px_3px_2px_3px_rgba(0,0,0,0.25)] w-4/6 mt-20 max-h-screen md:h-max-h-80">
           <ProductList products={products} />
        </div>
    );
};

export default ProductListContainer;
