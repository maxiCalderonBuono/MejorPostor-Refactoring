import React from "react";

const ProductDetail = ({detail}) => {
   
    
    
    return (
        <>
    <div className="flex flex-col h-full w-full items-center justify-center p-10">
        <h1>{detail.title}</h1>
        <div className="flex flex-col w-full items-center justify-center m-20">
            <img className="h-60 w-full border-b-4 border-bg-lime-700" src={detail.thumbnail} alt={detail.title} />
        </div>
        <div className="p-4 m-3  rounded-lg bg-lime-400 hover:bg-lime-200">
            <a className="text-lg font-bold text-right text-white item-end" href="">Ver galería de imágenes</a>
        </div>
        <div className="flex flex-wrap justify-center items-center">
            <div className="bg-lime-400 border border-bg-lime-700 text-white font-bold rounded-lg p-10 transform hover:scale-125 transition-all">
                <h3 className="text-5xl">Detalles del producto:</h3>
                <div className="flex flex-wrap">
                    <div className="mr-20">
                        <p className="text-lg mt-5">detalle 1</p>
                        <p className="text-lg mt-5">detalle 2</p>
                        <p className="text-lg mt-5">detalle 3</p>
                    </div>
                    <div className="mr-20">
                        <p className="text-lg mt-5">detalle 4</p>
                        <p className="text-lg mt-5">detalle 5</p>
                        <p className="text-lg mt-5">detalle 6</p>
                    </div>
                    <div className="mr-20">
                        <p className="text-lg mt-5">detalle 4</p>
                        <p className="text-lg mt-5">detalle 5</p>
                        <p className="text-lg mt-5">detalle 6</p>
                    </div>
                    <div className="mr-20">
                        <p className="text-lg mt-5">detalle 4</p>
                        <p className="text-lg mt-5">detalle 5</p>
                        <p className="text-lg mt-5">detalle 6</p>
                    </div>
                </div>
            </div>
            <div className="bg-slate-100 border border-bg-lime-700 text-black font-bold rounded-lg p-10 items-center justify-center transform hover:scale-125 transition-all">
                <h3 className="text-5xl">Últimas pujas</h3>
                <div className="flex flex-wrap">
                    <p className="text-lg mt-5 mr-3 text-green-500">1: PUJA ACTUAL:</p>
                    <p className="text-lg mt-5 mr-3 text-green-500">Miguel Ramón</p>
                    <p className="text-lg mt-5 text-green-400">{detail.price}</p>
                </div>
                <div className="flex flex-wrap">
                    <p className="text-lg mt-5 mr-3 text-red-200">2: puja anterior:</p>
                    <p className="text-lg mt-5 mr-3 text-gray-300">Juan Maquinola</p>
                    <p className="text-lg mt-5 text-green-200">$300</p>
                </div>
                <div className="flex flex-wrap">
                    <p className="text-lg mt-5 mr-3 text-red-200">3: puja anterior:</p>
                    <p className="text-lg mt-5 mr-3 text-gray-300">Lalo Landa</p>
                    <p className="text-lg mt-5 text-green-200">$200</p>
                </div>
            </div>
        </div>
    </div>
        
        </>
    );
};

export default ProductDetail;