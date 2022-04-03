import React from "react";
import ProductListContainer from "./ProductListContainer";
const UltimoAviso = () => {
    return (
        <div className="mt-20 pb-20">
            <div className="grid grid-rows-3 grid-flow-col">
                <div className="col-span-2">
                    <h3 className="text-6xl text-start font-bold">Último aviso</h3>
                </div>
                <div className="col-span-2">
                    <p className="item-end text-lg  text-right text-indigo-900">Ver más.</p>
                </div>
                <div className="col-span-2 mt-4">
                    <p className="text-start text-slate-400">Quedan 24 hs para pujar</p>
                </div>
            </div>
            <ProductListContainer />
        </div>
    );
    };

    export default UltimoAviso;