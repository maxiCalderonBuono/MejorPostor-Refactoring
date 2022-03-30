import React from "react";
import CardProduct from "../moleculs/Cards/CardProduct";

// Función para mapear el componente Card con todas las popiedades que se le pasen. EN PROCESO.
const ProductList = ({ products }) => {
    return (
        <>
            {
                products.map(product => (
                    <CardProduct
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.thumbnail}
                    />
                ))
            }
        </>
    );
};
export default ProductList;
