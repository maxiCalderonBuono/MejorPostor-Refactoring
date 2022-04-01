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
        <div className="grid auto-rows-max">
           <ProductList products={products} />
        </div>
    );
};

export default ProductListContainer;