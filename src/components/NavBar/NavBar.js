import { Menu } from "@headlessui/react";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { ImHammer2 } from "react-icons/im";

export const NavBar = () => {
  let [openNav, setOpenNav] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-[#3196DA] py-2 md:px-10 px-7">
        <div className="text-2xl cursor-pointer flex items-center ">
          <img
            src="https://res.cloudinary.com/di57h1uhf/image/upload/v1648567242/Mejor%20postor/logo2_ehp6pn.png"
            alt="Mejor postor"
            className="w-16"
          />
        </div>

        <div
          onClick={() => setOpenNav(!openNav)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {openNav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <div className="items-center">
          <ul
            className={`md:flex md:items-center  md:pb-0 absolute md:static md:z-auto z-[-1] left-auto right-auto w-96 md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in ${
              openNav ? "top-20 " : "top-[-490px] "
            }`}
          >
            {/* Dropdown User */}
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
            <div className="md:hidden mt-8 flex items-center justify-center ">
              <button className="mx-auto bg-lime-300">Editar perfil</button>
              <button className="mx-auto bg-danger">Cerrar sesion</button>
            </div>
            {/* hr */}
            <hr className="mt-7" />
            {/* Navbar main */}
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
            <li className="hidden md:flex md:ml-4 items-center justify-center hover:text-gray-500 duration-500">
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
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
