import React from "react";
import ProductDetail from "./ProductDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetailContainer = () =>{
    const [detail, setDetail] = useState({});
    const {id} = useParams();
    console.log(detail);
    console.log(id);
    const URL = "https://api.mercadolibre.com/sites/MLA/search?q=auto";
    useEffect(() => {
        fetch(URL.find (item => item.id === id))
            .then(response => response.json())
            .then(data => {
                setDetail(data.results);
                console.log(data.results)
            });
    }, []);
    return(
        <>
            <ProductDetail detail={detail}/>
        </>
    );
};

export default ProductDetailContainer;