import React from "react";
import Loader from "../moleculs/Loader";
import ProductListContainer from "./ProductListContainer";

export const MisOfertas = (props) => {
  return (
    <div className="mt-20 md:min-w-full">
      <div className="grid grid-cols-3 grid-rows-2">
        <div className="col-span-2">
          <h3 className="text-4xl font-bold md:text-6xl text-start">
            Mis ofertas
          </h3>
        </div>

        <div className="col-span-2 mt-4">
          <p className="text-start text-slate-400">Se el Mejor Postor</p>
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
