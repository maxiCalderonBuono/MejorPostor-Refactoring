import React, { useEffect, useState } from "react";

import { MisSubastas } from "../components/organisms/MisSubastas";
// import { useFetch } from "../hooks/useFetch";

export const MyAuctionsScreen = () => {
  // const token = localStorage.getItem("token");

  // const [myAuctions, setMyAuctions] = useState([]);

  // const id = localStorage.getItem("id");

  // const URL = `https://mejor-postor.herokuapp.com/api/products/user/${id}`;

  // const { data, loading } = useFetch(URL, token);

  // console.log("data", data);

  // useEffect(() => {
  //   if (!loading) {
  //     const productDetail = data.products.filter((product) => !product.deleted);
  //     setMyAuctions([...productDetail]);
  //   }
  // }, [data, loading, id]);

  return (
    <h1>MY AUCTIONS</h1>
    // <div className="flex flex-col w-full">
    //   <div className="flex flex-col p-8">
    //     <div className="flex flex-col items-center justify-center">
    //       <MisSubastas data={myAuctions} loading={loading} />
    //     </div>
    //   </div>
    // </div>
  );
};
