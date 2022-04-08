import React from "react";

import { MisOfertas } from "../components/organisms/MisOfertas";
import { useFetch } from "../hooks/useFetch";

export const MyBidsScreen = () => {
  const URL = "https://api.mercadolibre.com/sites/MLA/search?q=auto";

  const { data, loading } = useFetch(URL);
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col p-8">
        <div className="flex flex-col items-center justify-center">
          <MisOfertas data={data} loading={loading} />
        </div>
      </div>
    </div>
  );
};
