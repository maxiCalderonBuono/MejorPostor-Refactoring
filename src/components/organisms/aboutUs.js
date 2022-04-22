import React from "react";

export const AboutUs = () => {
    return (
        <div className="h-full w-full pb-20">
        <div className="grid grid-rows-3 grid-flow-col gap-4 items-center justify-center w-full h-full p-10 mt-20 ">
                <div className="row-span-3 align-middle justify-start">
                    <div className="hidden md:flex items-center justify-center h-70 w-full mb-1 mt-1">
                            <img className="flex rounded-full  mb-1 mt-1 h-full w-full drop-shadow-lg" src="https://images.unsplash.com/photo-1496054967538-14294f2376b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1248&q=80" alt="Edificio empresa" />
                    </div>  
                </div>
                <div className="col-span-2">
                  <h3 className="text-center text-5xl text-[#3196DA] font-bold border-b-4 border-[#3196DA] ">Mejor Postor</h3>
                </div>
                <div className="row-span-2 col-span-2">
                        <h6 className="text-xl text-center text-[#3196DA] font-bold mt-1">Una empresa con trayectoria y experiencia</h6>
                        <p className="text-lg mt-5 px-5 text-justify text-blue-400 font-bold">En "Mejor Postor" buscamos conectar a vendedores y compradores mediante una forma sencilla y segura de realizar transacciones. Nuestra trayectoria como empresa es una garantía de la capacidad de la aplicación, siendo ésta en la mejor del mercado.</p>
                </div>
        </div>
        </div>
    );
};
