import React from "react";

const ProductDetail = ({detail}) => {
   
    
    
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full h-full p-8">
                <h1>{detail.name}</h1>
                <div className="flex flex-col items-center justify-center w-full m-20">
                    <img className="w-auto rounded-md border-8 border-[#3196DA] h-60" src={detail.image} alt={detail.name} />
                </div>
                <div className="px-4 m-2 mb-5 rounded-lg bg-black-400">
                    <a className="text-5xl font-bold text-right text-[#3196DA] item-end" href="">{detail.name}</a>
                </div>
                <div className="flex flex-wrap items-center justify-center">
                    <div className="p-10 mt-5 font-bold text-white transition-all transform border rounded-lg bg-[#3196DA] border-bg-lime-700 hover:scale-125">
                        <h3 className="text-2xl text-center border-b-4  md:text-5xl">Detalles del producto:</h3>
                        <div className="flex flex-wrap">
                            <div className="mr-20">
                                <p className="mt-5 text-sm md:text-lg">Descripción: {detail.description}</p>
                                <p className="mt-5 text-sm md:text-lg">Ubicación: {detail.location}</p>
                                <p className="mt-5 text-sm md:text-lg">Categoría: {detail.category}</p>
                            </div>
                            <div className="mr-10">
                                <p className="mt-5 text-sm text-red-300 md:text-lg">Publicación iniciada el: {detail.createdAt}</p>
                                <p className="mt-5 text-sm text-red-300 md:text-lg">Última actualización: {detail.updatedAt}</p>
                                <p className="mt-5 text-sm text-red-300 md:text-lg">Fecha de finalización: {detail.duration}</p>
                            </div>
                        </div>
                    </div>
                    <div className="items-center justify-center p-10 mt-5 font-bold text-black transition-all transform border rounded-lg bg-slate-100 border-bg-lime-700 hover:scale-125">
                        <h3 className="text-2xl text-center text-[#3196DA] border-b-4 border-indigo-500 md:text-5xl">PUJA ACTUAL</h3>
                        <div className="flex flex-col md:flex-wrap">
                            <p className="mt-5 mr-3 text-sm text-[#3196DA] md:text-lg">USUARIO: Miguel Ramón</p>
                            <p className="mt-5 mr-3 text-sm text-[#3196DA] md:text-lg">FINALIZA EL: {detail.duration}</p>
                            <p className="mt-5 mr-3 text-sm text-green-400 md:text-lg">CANTIDAD: ${detail.highestBid}</p>
                        </div>
                    </div>
                </div>
            </div>

          
        </>
    );
};

export default ProductDetail;