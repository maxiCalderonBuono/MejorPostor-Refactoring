import React from "react";
import { useState, useEffect } from "react";
import AllProductList from "./AllProductList";

const ProductListContainer = () => {
    const [products, setProducts] = useState([]);
    const URL = "http://localhost:4000/api/products";

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setProducts(data.results);
                console.log(data.results)
            });
    }, []);
 
    
    return(
        <div className="flex flex-wrap gap-8 items-center justify-center">
            <AllProductList products={products}/>
        </div>
    );
}

export default ProductListContainer;