import React, { useEffect } from "react";
import Novedades from "../components/organisms/Novedades";
import UltimoAviso from "../components/organisms/UltimoAviso";
import { useFetch } from "../hooks/useFetch";


const MainScreen = () => {
  const URL = "http://localhost:4000/api/products";

  const id= "625870d28f16763ec298bef8"

  const { data, loading } = useFetch(URL);
 
 
  useEffect ( ()=> {
    if(!loading) {
    const productounico = data.products.filter(item => item._id === id)
    console.log(...productounico)}
  })

  return (
    <div className="flex flex-col p-8">

    <div className="flex flex-col items-center justify-center">
      <Novedades data={data.products} loading={loading} />
    </div>

    <div>
      <UltimoAviso data={data.products} loading={loading} />
    </div>
  </div>
  );
};
export default MainScreen;
