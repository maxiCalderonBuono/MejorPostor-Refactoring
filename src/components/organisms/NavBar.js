// import { Menu, Transition } from "@headlessui/react";
// import { Fragment, useState } from "react";

// import { FaBriefcase } from "react-icons/fa";
// import { GiTakeMyMoney } from "react-icons/gi";
// import { ImHammer2 } from "react-icons/im";
//
// import Button from "../atoms/Buttons/Button";
// import { startLogout } from "../../actions/auth";

// import { useDispatch, useSelector } from "react-redux";
// import { uiOpenLogin, uiOpenRegister } from "../../actions/modal";

import { useState } from "react";

import LoginScreen from "./auth/LoginScreen";
import RegisterScreen from "./auth/RegisterScreen";

import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Logo } from "../";
import * as styles from "../atoms/Buttons/buttonStyles";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { HamburgerButton } from "../atoms/HamburgerButton";

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  //Hago el dispatch de la apertura del modal de Login y Registro
  // const dispatch = useDispatch();

  // const { isAutho, username, image } = useSelector((state) => state.auth);

  // const handleLogout = () => {
  //   dispatch(startLogout());
  //   localStorage.clear();
  // };

  // const openLogin = () => {
  //   dispatch(uiOpenLogin());
  // };

  // const OpenRegister = () => {
  //   dispatch(uiOpenRegister());
  // };
  return (
    <header>
      <LoginScreen />
      <RegisterScreen />
      <nav className="flex justify-between items-center w-full shadow-md h-[88px] bg-dark-gray py-2 px-5 sm:px-12 md:px-14 lg:px-20">
        <Link to="/" className="md:w-1/2 lg:1/3">
          <Logo />
        </Link>
        <div className="flex items-center justify-center gap-3 text-white">
          <BiSearchAlt size={20} className="md:hidden" />
          <HamburgerButton action={showMenu} setShowMenu={setShowMenu} />
        </div>
        <div className="justify-end hidden gap-3 lg:w-2/3 md:flex">
          <div>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<BiSearchAlt />}
                className="h-full px-3"
              />
              <Input
                type="text"
                placeholder="Search for products"
                className="rounded-[10px] md:w-12 lg:w-60 xl:w-96 pl-7 placeholder-dark-gray h-10 md:placeholder-transparent"
              />
            </InputGroup>
          </div>

          <button className={`${styles.GHOST_BUTTON} md:px-6 lg:px-8 `}>
            Login
          </button>
          <button className={`${styles.PRIMARY_BUTTON} md:px-6 lg:px-8 py-2 `}>
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};
