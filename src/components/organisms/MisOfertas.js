import React from "react";
import Loader from "../moleculs/Loader";
import ProductListContainer from "./ProductListContainer";
import { GiTakeMyMoney } from "react-icons/gi";

export const MisOfertas = (props) => {
  return (
    <div className="mt-20 md:min-w-full">
      <div className="grid grid-cols-3 grid-rows-2">
        <div className="col-span-2 flex items-center">
          <GiTakeMyMoney className="text-4xl font-bold md:text-6xl" />
          <h3 className="text-4xl font-bold md:text-6xl text-start">
            Mis pujas
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
