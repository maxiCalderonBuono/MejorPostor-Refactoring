import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";

import { MisSubastas } from "../components/organisms/MisSubastas";
import { useFetch } from "../hooks/useFetch";

export const MyAuctionsScreen = () => {
  const token = localStorage.getItem("token");

  const [myAuctions, setMyAuctions]= useState([])

  const { id } = useSelector((state) => state.auth);

  const URL = `http://localhost:4000/api/products/user/${id}`;

  const { data, loading } = useFetch(URL, token);
  
  useEffect(() => {
    if(!loading){
         const productDetail = data.products.filter(product=> !product.deleted);
         setMyAuctions([...productDetail]);
    }
}, [data, loading, id])
  
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col p-8">
        <div className="flex flex-col items-center justify-center">
          <MisSubastas data={myAuctions} loading={loading} />
        </div>
      </div>
    </div>
  );
};
