import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { ImHammer2 } from "react-icons/im";

export const NavBar2 = () => {
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-[#3196DA] py-2 md:px-10 px-7">
        <div className=" text-2xl cursor-pointer flex items-center  ">
          <img
            src="https://res.cloudinary.com/di57h1uhf/image/upload/v1648567242/Mejor%20postor/logo2_ehp6pn.png"
            alt="Mejor postor"
            className="w-16"
          />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-[-1] left-0 right-0 w-96 md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px] "
          }`}
        >
          <div className="md:hidden mt-3 flex">
            <img
              src="https://res.cloudinary.com/di57h1uhf/image/upload/v1648590723/Mejor%20postor/circle-user-solid_abtmjp.png"
              alt="icon-default"
              className="w-20"
            />
            <h1 className="ml-5 my-auto text-gray-800 text-xl">
              NombreUsuario
            </h1>
          </div>
          <hr className="mt-3" />
          <li key="crear-subasta" className="md:ml-4 text-xl md:my-0 my-7 ">
            <button className="text-gray-800 hover:text-gray-500 duration-500 flex items-center cursor-pointer">
              <ImHammer2 className="mr-1.5" />
              Crear subasta
            </button>
          </li>
          <li key="mis-subastas" className="md:ml-4 text-xl md:my-0 my-7">
            <button className="text-gray-800 hover:text-gray-500 duration-500 flex items-center cursor-pointer ">
              <FaBriefcase className="mr-1.5" />
              Mis subastas
            </button>
          </li>
          <li key="mis-pujas" className="md:ml-4 text-xl md:my-0 my-7">
            <button className="text-gray-800 hover:text-gray-500 duration-500 flex items-center cursor-pointer">
              <GiTakeMyMoney className="mr-1.5" />
              Mis pujas
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
