import React from "react";
import Loader from "../moleculs/Loader";
import ProductListContainer from "./ProductListContainer";
import { FaBriefcase } from "react-icons/fa";

export const MisSubastas = (props) => {
  return (
    <div className="mt-20 md:min-w-full">
      <div className="grid grid-cols-3 grid-rows-2">
        <div className="col-span-3 flex items-center">
          <FaBriefcase className="text-4xl font-bold md:text-6xl mr-2" />
          <h3 className="sm:text-4xl text-3xl font-bold md:text-6xl text-start">
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
