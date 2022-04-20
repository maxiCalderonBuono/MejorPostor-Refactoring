import React, {useEffect, useState}  from "react";
import Novedades from "../components/organisms/Novedades";
import UltimoAviso from "../components/organisms/UltimoAviso";
import { getDiffDate } from "../helpers/getDiffDate";
import { useFetch } from "../hooks/useFetch";


const MainScreen = () => {
  const URL = "http://localhost:4000/api/products";

  const { data, loading } = useFetch(URL);

  const [latest, setLatest]= useState([])

  useEffect(() => {
    const now = new Date()

    if(!loading){
         const productDetail = data.products.filter(product => getDiffDate(now, product.createdAt) <= 1);
         setLatest([...productDetail]);
    }
}, [data, loading])

  return (
    <div className="flex flex-col p-8">

    <div className="flex flex-col items-center justify-center">
      <Novedades data={data.products} loading={loading} />
    </div>

    <div>
      <UltimoAviso data={latest} loading={loading} />
    </div>
  </div>
  );
};
export default MainScreen;
