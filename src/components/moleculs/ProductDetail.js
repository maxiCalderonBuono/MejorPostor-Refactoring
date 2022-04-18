import React from "react";

const ProductDetail = ({detail}) => {
   
    
    
    return (
        <>
    <div className="flex flex-col items-center justify-center w-full h-full p-10">
        <h1>{detail.name}</h1>
        <div className="flex flex-col items-center justify-center w-full m-20">
            <img className="w-full border-b-4 h-60 border-bg-lime-700" src={detail.image} alt={detail.name} />
        </div>
        <div className="p-4 m-2 mb-5 rounded-lg bg-black-400">
            <a className="text-5xl font-bold text-right text-lime-500 item-end" href="">{detail.name}</a>
        </div>
        <div className="flex flex-wrap items-center justify-center">
            <div className="p-10 mt-5 font-bold text-white transition-all transform border rounded-lg bg-lime-400 border-bg-lime-700 hover:scale-125">
                <h3 className="text-lg md:text-5xl">Detalles del producto:</h3>
                <div className="flex flex-wrap">
                    <div className="mr-20">
                        <p className="mt-5 text-sm md:text-lg">Descripción: {detail.description}</p>
                        <p className="mt-5 text-sm md:text-lg">Ubicación: {detail.location}</p>
                        <p className="mt-5 text-sm md:text-lg">Categoría: {detail.category}</p>
                    </div>
                    <div className="mr-20">
                        <p className="mt-5 text-sm md:text-lg">Publicación iniciada el: {detail.createdAt}</p>
                        <p className="mt-5 text-sm md:text-lg">Última actualización: {detail.updatedAt}</p>
                        <p className="mt-5 text-sm md:text-lg">Fecha de finalización: EN PROCESO</p>
                    </div>
                </div>
            </div>
            <div className="items-center justify-center p-10 mt-5 font-bold text-black transition-all transform border rounded-lg bg-slate-100 border-bg-lime-700 hover:scale-125">
                <h3 className="text-lg md:text-5xl">Últimas pujas</h3>
                <div className="flex flex-col md:flex-wrap">
                    <p className="mt-2 mr-3 text-sm text-green-500 md:text-lg md:mt-5">1: PUJA ACTUAL:</p>
                    <p className="mt-5 mr-3 text-sm text-green-500 md:text-lg">Miguel Ramón</p>
                    <p className="mt-5 mr-3 text-sm text-green-400 md:text-lg">${detail.initialPrice}</p>
                </div>
                <div className="flex flex-col md:flex-wrap">
                    <p className="mt-5 mr-3 text-sm text-red-200 md:text-lg">2: puja anterior:</p>
                    <p className="mt-5 mr-3 text-sm text-gray-300 md:text-lg">Juan Maquinola</p>
                    <p className="mt-5 text-sm text-green-200 md:text-lg">$300</p>
                </div>
                <div className="flex flex-wrap">
                    <p className="mt-5 mr-3 text-sm text-red-200 md:text-lg">3: puja anterior:</p>
                    <p className="mt-5 mr-3 text-sm text-gray-300 md:text-lg">Lalo Landa</p>
                    <p className="mt-5 text-sm text-green-200 md:text-lg">$200</p>
                </div>
            </div>
        </div>
    </div>
        
        </>
    );
};

export default ProductDetail;