import React from "react";
import Footer from "../components/organisms/Footer";
import { MisSubastas } from "../components/organisms/MisSubastas";
import { NavBar } from "../components/organisms/NavBar";
import { useFetch } from "../hooks/useFetch";

export const MyAuctionsScreen = () => {
  const URL = "https://api.mercadolibre.com/sites/MLA/search?q=auto";

  const { data, loading, error } = useFetch(URL);
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col p-8">
        <div className="flex flex-col items-center justify-center">
          <MisSubastas data={data} loading={loading} />
        </div>
      </div>
    </div>
  );
};
