import React from "react";
import ProductListContainer from "../moleculs/ProductListContainer";
import { Link } from "react-router-dom";
import Loader from "../moleculs/Loader";

const UltimoAviso = (props) => {
  return (
    <div className="min-w-full mt-10 mb-10 md:mt-16">
      <div className="grid grid-cols-3 grid-rows-2">
        <div className="col-span-3">
          <h3 className="text-4xl font-bold md:text-6xl text-start">
            Último aviso
          </h3>
        </div>

        <div className="col-span-2 mt-4">
          <p className="text-start text-slate-400">Quedan 24 hs para pujar</p>
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

export default UltimoAviso;
