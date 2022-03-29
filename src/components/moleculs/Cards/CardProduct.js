import React from "react";
import Button from "../../atoms/Buttons/Button";
import * as styles from "../../atoms/Buttons/buttonStyles";

//Card de los productos. EN PROCESO.
const CardProduct = () => {
  return (
  <div className="container flex justify-center items-center w-full min-h-screen bg-white">
        <div className="h-full w-72 bg-slate-50 flex flex-wrap rounded-lg shadow-xl relative overflow-hidden  flex-row items-center">
                <img className="relative w-full  sm:max-h-48 max-h-48 object-cover" src="https://placeimg.com/640/480/tech" alt="img-product"/>     
            <div className="card-content flex flex-col content-center items-center w-full h-full">
                <h3 className="color-gray-400 text-xl">Ferrari s90</h3>
                <span className="text-slate-400 text-sm">Quedan 20hs 59min 30seg</span>
            </div>
            <div className="flex flex-col content-center w-full items-center m-5">
                <div className="card-action flex space-x-4 items-center justify-center text-center">
                    <p className="p-1 font-bold text-lg">Puja actual</p>
                    <p className="p-1 font-bold text-red-500 text-lg">USD 100.000</p>
                </div>
                <div className="flex space-x-4 items-center justify-center text-center">
                    <p className="p-1 border-2 border-black rounded-full">+ 10.000 -</p>
                    <Button styles={`P-1 ${styles.PRIMARY_BUTTON}`} name='Pujar'/>
                </div>
            </div>
        </div>
   </div>
  );
}

export default CardProduct;