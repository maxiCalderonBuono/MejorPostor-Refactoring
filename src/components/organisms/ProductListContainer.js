import React from "react";
import { useState, useEffect } from "react";
import ProductList from "./ProductList";


const ProductListContainer = () => {
    const [products, setProducts] = useState([]);
    const URL = "https://api.mercadolibre.com/sites/MLA/search?q=celular";

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setProducts(data.results);
            });
    }, []);
    console.log(products);
    return(
        <>
          <ProductList products={products} />
        </>
    );
};

export default ProductListContainer;