import React from "react";
import Button from "../../atoms/Buttons/Button";

const CardProduct = () => {
  return (
  <div className="container flex justify-center items-center w-full min-h-screen bg-gray-900">
        <div className="h-full w-72 bg-slate-50 flex flex-wrap rounded-lg shadow-xl relative overflow-hidden  flex-row items-center">
                <img className="relative w-full  sm:max-h-48 max-h-48 object-cover" src="https://placeimg.com/640/480/tech" alt="img-product"/>     
            <div className="card-content flex flex-col content-center items-center w-full h-full">
                <h3 className="color-gray-400">Ferrari s90</h3>
                <span className="text-slate-400">Quedan 2 horasl</span>
            </div>
            <div className="flex flex-col content-center items-center m-5">
                <div className="card-action flex space-x-4 items-center justify-center">
                    <p className="p-1">Puja actual</p>
                    <p className="p-1">100.000</p>
                </div>
                <div className="flex space-x-4 items-center justify-center">
                    <Button className="p-1" name='Pujar'/>
                    <p className="p-1">10.000 +</p>
                </div>
            </div>
        </div>
   </div>
  );
}

export default CardProduct;