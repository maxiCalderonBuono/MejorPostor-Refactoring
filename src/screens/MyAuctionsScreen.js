import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { MisSubastas } from "../components/organisms/MisSubastas";
import { fetchSinToken } from "../helpers/fetch";

export const MyAuctionsScreen = () => {

  const { userId } = useSelector((state) => state.auth);

  const [auctions, setAuctions] = useState(()=> [])

 useEffect(()=>{

  const getAuctionsById = async() => {
   const data= await fetchSinToken(`products/${userId}`)
  console.log(data) }

   getAuctionsById();

 })

 
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col p-8">
        <div className="flex flex-col items-center justify-center">
          <MisSubastas data={[]} />
        </div>
      </div>
    </div>
  );
};
