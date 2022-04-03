import React from "react";
import CardProduct from "./CardProduct";

const AllProductList = ({ products }) => {
    return(
        <>
          {
            products.length > 0 ? (
                products.map(product => (
                    <CardProduct
                        key={product.id}
                        id={product.id}
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