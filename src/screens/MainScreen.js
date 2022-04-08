import React from "react";
import Novedades from "../components/organisms/Novedades";
import UltimoAviso from "../components/organisms/UltimoAviso";
import { useFetch } from "../hooks/useFetch";


const MainScreen = () => {
  const URL = "https://api.mercadolibre.com/sites/MLA/search?q=auto";

  const { data, loading } = useFetch(URL);

  return (
    <div className="flex flex-col p-8">

    <div className="flex flex-col items-center justify-center">
      <Novedades data={data.results} loading={loading} />
    </div>

    <div>
      <UltimoAviso data={data.results} loading={loading} />
    </div>
  </div>
  );
};
export default MainScreen;
