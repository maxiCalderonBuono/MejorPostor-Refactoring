import React, { useEffect } from "react";
import Novedades from "../components/organisms/Novedades";
import UltimoAviso from "../components/organisms/UltimoAviso";
import { useFetch } from "../hooks/useFetch";


const MainScreen = () => {
  const URL = "http://localhost:4000/api/products";
  const { data, loading } = useFetch(URL);

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
