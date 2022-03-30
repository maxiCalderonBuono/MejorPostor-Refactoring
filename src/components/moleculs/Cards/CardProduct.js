import React from "react";
import { useForm } from "../../hooks/userForm";
import Button from "../../atoms/Buttons/Button";
import * as styles from "../../atoms/Buttons/buttonStyles";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

//Card de los productos. EN PROCESO.
const CardProduct = (props) => {
  
  const [{ bid }, handleInputChange] = useForm({ bid: "" });


  return (
    <div className="items-center flex flex-col w-72 h-[400px] rounded-xl shadow-[3px_3px_2px_3px_rgba(0,0,0,0.25)] bg-white mb-5">
      <div className="flex flex-col items-center content-center w-full">
        <img
          src={props.image}
          className="rounded-[12px_12px_30px_30px] mb-3 w-full h-44 object-fit"
          alt={props.title}
        />
        <h3 className="text-xl font-bold text-text-primary">Tu próximo auto</h3>
        <div className="flex flex-row mt-2 space-x-2 text-text-secondary">
          <AiOutlineFieldTime />
          <span className="text-sm">Quedan 20hs 59min 30seg</span>
        </div>
      </div>

      <div className="flex flex-col items-center content-center w-full mb-4">
        <div className="flex items-center justify-center my-2 space-x-4 text-center">
          <p className="p-1 text-lg font-bold">Puja actual</p>
          <p className="p-1 text-lg font-bold text-danger">{props.price}</p>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-row items-center mb-3 space-x-3">
            <button>
              <FaMinusCircle size="28px" />
            </button>
            <input
              name="bid"
              autoComplete="off"
              placeholder="tu apuesta"
              value={bid}
              onChange={handleInputChange}
              className="rounded-[43px] border text-text-primary border-text-secondary w-36 h-9 text-center"
            />
            <button>
              <FaPlusCircle size="28px" />
            </button>
          </div>
          <Button styles={`${styles.SUCCESS_BUTTON} w-3/4 p-1`} content="Pujar" />
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
