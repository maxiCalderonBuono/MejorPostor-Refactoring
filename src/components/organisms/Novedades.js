import React from "react";
import ProductListContainer from "./ProductListContainer";
import { Link } from "react-router-dom";

const Novedades = () => {

    return(
        <div className="mt-20">
            <div className="grid grid-rows-2 grid-cols-3">
                <div className="col-span-2">
                    <h3  className="text-6xl text-start font-bold">Novedades</h3>
                </div>
                <div className="col-span-1 flex justify-end items-center">
                    <Link to={'AllProducts'} className="item-end text-lg  text-right text-indigo-900 hover:underline underline-offset-1">Ver más.</Link>
                </div>
                <div className="col-span-2 mt-4">
                    <p className="text-start text-slate-400">Subastas recién creadas</p>
                </div>
            </div>
            <ProductListContainer />
        </div>
    );
}

export default Novedades;