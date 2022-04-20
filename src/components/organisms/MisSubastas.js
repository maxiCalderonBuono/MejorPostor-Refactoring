import React from "react";
import Loader from "../moleculs/Loader";
import ProductListContainer from "../moleculs/ProductListContainer";
import { FaBriefcase } from "react-icons/fa";

export const MisSubastas = (props) => {

  

  return (
    <div className="mt-20 md:min-w-full">
      <div className="grid grid-cols-3 grid-rows-2">
        <div className="flex items-center col-span-3">
          <FaBriefcase className="mr-2 text-4xl font-bold md:text-6xl" />
          <h3 className="text-3xl font-bold sm:text-4xl md:text-6xl text-start">
            Mis subastas
          </h3>
        </div>

        <div className="col-span-2 mt-4">
          <p className="text-start text-slate-400">
            Observa el estado de tus subastas
          </p>
        </div>
      </div>

      {props.loading ? (
        <Loader />
      ) : (
        <ProductListContainer products={props.data} />
      )}
    </div>
  );
};
