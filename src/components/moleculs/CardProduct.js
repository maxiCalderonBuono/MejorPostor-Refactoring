import React from "react";
import Button from "../atoms/Buttons/Button";
import * as styles from "../atoms/Buttons/buttonStyles";
import { AiOutlineFieldTime } from "react-icons/ai";
import { Link } from "react-router-dom";


//Card de los productos. EN PROCESO.
const CardProduct = (props) => {
  
  const { name, _id, image, initialPrice } = props;

  return (
    <div className="items-center h-fit flex flex-col w-72 rounded-xl shadow-[3px_3px_2px_3px_rgba(0,0,0,0.25)] bg-white">

      <div className="flex flex-col items-center content-center w-full">
        <img
          src={image}
          className="rounded-[12px_12px_30px_30px] mb-3 w-full h-44 object-fit"
          alt={name}
        />
        <h3 className="text-xl font-bold text-text-primary">{name}</h3>
        <div className="flex flex-row mt-2 space-x-2 text-text-secondary">
          <AiOutlineFieldTime />
          <span className="text-sm">Quedan 20hs 59min 30seg</span>
        </div>
      </div>

      <div className="flex flex-col items-center content-center w-full mb-4">
        <div className="flex items-center justify-center my-2 space-x-4 text-center">
          <p className="p-1 text-lg font-bold">Puja actual</p>
          <p className="p-1 text-lg font-bold text-danger">{initialPrice}</p>
        </div>

        <div  className="flex flex-col items-center justify-center w-full">
    
          <Link className="w-full" to={`/producto/${_id}`}>
          <Button
            styles={`${styles.SUCCESS_BUTTON} w-5/6 p-1`}
            content="Pujar"
          />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default CardProduct;
