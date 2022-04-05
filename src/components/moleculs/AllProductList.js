import React from "react";
import CardProduct from "./CardProduct";

const AllProductList = ({ products }) => {
    return(
        <>
          {
            products.length > 0 ? (
                products.map((product, index) => (
                    <CardProduct
                        key={index}
                        title={product.title}
                        price={product.price}
                        image={product.thumbnail}
                    />
                ))
            )
            : (<p>Cargando Productos...</p>)

          }
        </>
           
    )
}
export default AllProductList;