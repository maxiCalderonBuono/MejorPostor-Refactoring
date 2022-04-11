import React from "react";
import ProductDetail from "./ProductDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetailContainer = () =>{
    const [data, setData] = useState([]);
    const [detail, setDetail] = useState({});
    const {id} = useParams();
    console.log(detail);
    console.log(id);
    const URL = "https://api.mercadolibre.com/sites/MLA/search?q=auto";
    

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setData(data.results);
                
            });
    }, []);

    useEffect(() => {
        fetch(data.find(item => item.id === id))
        .then(res => setDetail(res))
        .then(console.log(detail))
        .catch(err => alert(err))
     },[])
    return(
        <>
            <ProductDetail detail={detail}/>
        </>
    );
};

export default ProductDetailContainer;