import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { ImHammer2 } from "react-icons/im";
import * as styles from "../atoms/Buttons/buttonStyles";
import Button from "../atoms/Buttons/Button";
import { Link } from "react-router-dom";

export const NavBar = () => {
  let [openNav, setOpenNav] = useState(false);
  return (
    <div className="fixed top-0 left-0 z-20 w-full shadow-md">
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
        <div>
          <ul
            className={`sm:flex sm:shadow-none sm:items-center sm:bg-[#3196DA] sm:pb-0 sm:static sm:z-auto sm:w-auto sm:pl-0
            shadow-xl rounded-lg bg-background_main absolute z-[-1] pr-5 pl-5 transition-all duration-500 ease-in ${
              openNav ? "top-20" : " top-[-490px]"
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
              {/* Una vez loggeado, ve estos botones 
              
              <Button
                styles={`${styles.SUCCESS_BUTTON} p-2 `}
                content="Editar perfil"
              />
              <Button
                styles={`${styles.DANGER_BUTTON} p-2 `}
                content="Cerrar sesión"
          /> */}

              <Button
                styles={`${styles.PRIMARY_BUTTON} p-2 `}
                content="Ingresa"
              />
              <Button
                styles={`${styles.GHOST_BUTTON} p-2 `}
                content="Crea tu cuenta"
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
            {/* TODO: Si el usuario esta logeado render otro componente */}
            <li className="items-center justify-center hidden duration-500 md:flex md:ml-4 hover:text-gray-500">
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-2 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ">
                  <div>
                    <Menu.Button className="flex text-sm bg-gray-800 rounded-full ">
                      <img
                        src="https://res.cloudinary.com/di57h1uhf/image/upload/v1648590723/Mejor%20postor/circle-user-solid_abtmjp.png"
                        alt="icon-default"
                        className="w-8 h-8 rounded-full"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 w-64 px-0 py-1 pt-3 pb-3 mt-2 origin-top-right rounded-md shadow-lg bg-background_main ">
                      <Menu.Item>
                        <div className="flex ">
                          <img
                            src="https://res.cloudinary.com/di57h1uhf/image/upload/v1648590723/Mejor%20postor/circle-user-solid_abtmjp.png"
                            alt="icon-default"
                            className="w-16 ml-3.5 rounded-full"
                          />
                          <h1 className="my-auto ml-3 text-xl text-gray-800">
                            NombreUsuario
                          </h1>
                        </div>
                      </Menu.Item>

                      <Menu.Item>
                        <div className="flex justify-center">
                          {/* Estos botones los ve al estar loggeado
                          <Button
                            styles={`${styles.SUCCESS_BUTTON} p-1`}
                            content="Editar perfil"
                          />
                          <Button
                            styles={`${styles.DANGER_BUTTON} p-1`}
                            content="Cerrar sesión"
                          /> */}
                          <Link
                      className={`${styles.PRIMARY_BUTTON} p-2`}
                      to="/auth/login"
                    >
                      Iniciar
                    </Link>
                          <Button
                            styles={`${styles.GHOST_BUTTON} p-2`}
                            content="Crear cuenta"
                          />
                          
                        </div>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
