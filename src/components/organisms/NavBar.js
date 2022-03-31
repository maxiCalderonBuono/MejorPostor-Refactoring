import { Menu } from "@headlessui/react";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { ImHammer2 } from "react-icons/im";
import * as styles from "../atoms/Buttons/buttonStyles";
import Button from "../atoms/Buttons/Button";

export const NavBar = () => {
  let [openNav, setOpenNav] = useState(false);
  return (
    <div className="fixed z-20 top-0 left-0 w-full shadow-md">
      <div className="md:flex items-center justify-between bg-[#3196DA] py-2 md:px-10 px-7">
        <div className="flex items-center text-2xl cursor-pointer ">
          <img
            src="https://res.cloudinary.com/di57h1uhf/image/upload/v1648567242/Mejor%20postor/logo2_ehp6pn.png"
            alt="Mejor postor"
            className="w-16"
          />
        </div>

        <div
          onClick={() => setOpenNav(!openNav)}
          className="absolute text-3xl cursor-pointer right-8 top-6 sm:hidden"
        >
          {openNav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        <ul
          className={`sm:flex  shadow-xl rounded-lg sm:shadow-none sm:items-center bg-background_main sm:bg-[#3196DA] sm:pb-0 absolute sm:static sm:z-auto z-[-1] pr-5 pl-5 sm:w-auto sm:pl-0 transition-all duration-500 ease-in ${
            openNav ? "top-20  " : " top-[-490px]"
          }`}
        >
          {/* Dropdown User */}
          <div className="flex mt-3 sm:hidden">
            <img
              src="https://res.cloudinary.com/di57h1uhf/image/upload/v1648590723/Mejor%20postor/circle-user-solid_abtmjp.png"
              alt="icon-default"
              className="w-20"
            />
            <h1 className="my-auto ml-5 text-xl text-gray-800">
              NombreUsuario
            </h1>
          </div>
          <div className="flex items-center justify-center mt-8 sm:hidden ">
            <Button
              styles={`${styles.SUCCESS_BUTTON} p-2 `}
              content="Editar perfil"
            />
            <Button
              styles={`${styles.DANGER_BUTTON} p-2 `}
              content="Cerrar sesión"
            />
          </div>
          {/* hr */}
          <hr className="mt-7" />
          {/* Navbar main */}
          <li key="crear-subasta" className="text-xl sm:ml-4 sm:my-0 my-7 ">
            <button className="flex items-center text-gray-800 duration-500 cursor-pointer hover:text-gray-500">
              <ImHammer2 className="mr-1.5" />
              Crear subasta
            </button>
          </li>
          <li key="mis-subastas" className="text-xl sm:ml-4 sm:my-0 my-7">
            <button className="flex items-center text-gray-800 duration-500 cursor-pointer hover:text-gray-500 ">
              <FaBriefcase className="mr-1.5" />
              Mis subastas
            </button>
          </li>
          <li key="mis-pujas" className="text-xl sm:ml-4 sm:my-0 my-7">
            <button className="flex items-center text-gray-800 duration-500 cursor-pointer hover:text-gray-500">
              <GiTakeMyMoney className="mr-1.5" />
              Mis pujas
            </button>
          </li>
          {/*<li className="items-center justify-center hidden duration-500 md:flex md:ml-4 hover:text-gray-500">
              <Menu>
                <Menu.Button>
                  <img
                    src="https://res.cloudinary.com/di57h1uhf/image/upload/v1648590723/Mejor%20postor/circle-user-solid_abtmjp.png"
                    alt="icon-default"
                    className="w-7"
                  />
                </Menu.Button>
                <Menu.Items>
                  <Menu.Item>
                    <img
                      src="https://res.cloudinary.com/di57h1uhf/image/upload/v1648590723/Mejor%20postor/circle-user-solid_abtmjp.png"
                      alt="icon-default"
                      className="w-20"
                    />
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </li> */}
        </ul>
      </div>
    </div>
  );
};
