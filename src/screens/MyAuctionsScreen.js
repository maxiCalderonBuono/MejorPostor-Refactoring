import React from "react";
import { useSelector } from "react-redux";

import { MisSubastas } from "../components/organisms/MisSubastas";
import { useFetch } from "../hooks/useFetch";

export const MyAuctionsScreen = () => {
  const token = localStorage.getItem("token");

  const { id } = useSelector((state) => state.auth);

  const URL = `http://localhost:4000/api/products/user/${id}`;

  const { data, loading } = useFetch(URL, token);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col p-8">
        <div className="flex flex-col items-center justify-center">
          <MisSubastas data={data.products} loading={loading} />
        </div>
      </div>
    </div>
  );
};
