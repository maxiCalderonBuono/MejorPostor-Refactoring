import React from "react";
import ProductList from "./ProductList"

const ProductListContainer = ({products}) => {

   

    return(
            <div className="grid gap-4 bg-gray-100 rounded-lg shadow-[3px_3px_2px_3px_rgba(0,0,0,0.25)]  mt-1 min-h-[400px] md:min-h-[600px] items-center justify-center">
                <ProductList products={products} />
            </div>
       
    );
};

export default ProductListContainer;
