import React from "react";
import ProductDetail from "./ProductDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetailContainer = () =>{
    const [data, setData] = useState([]);
    const [detail, setDetail] = useState({});
    const {id} = useParams();
    console.log("ESTOS SON LOS DETALLES: " + detail);
    const URL = "https://api.mercadolibre.com/sites/MLA/search?q=auto";
    

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setData(data.results);
                
            });
    }, []);

    useEffect(() => {
        const productDetail = data.filter(item=> item.id === id)
        setDetail(productDetail)
     },[data, id])

    return(
        <>
            <ProductDetail detail={detail}/>
        </>
    );
};

export default ProductDetailContainer;