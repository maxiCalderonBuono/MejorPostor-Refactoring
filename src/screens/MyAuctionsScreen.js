import React from "react";

import { MisSubastas } from "../components/organisms/MisSubastas";
import { useFetch } from "../hooks/useFetch";

export const MyAuctionsScreen = () => {
  const URL = "https://api.mercadolibre.com/sites/MLA/search?q=auto";

  const { data, loading } = useFetch(URL);
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
