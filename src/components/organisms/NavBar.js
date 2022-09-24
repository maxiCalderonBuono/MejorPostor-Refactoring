// import { Menu, Transition } from "@headlessui/react";
// import { Fragment, useState } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { FaBriefcase } from "react-icons/fa";
// import { GiTakeMyMoney } from "react-icons/gi";
// import { ImHammer2 } from "react-icons/im";
//
// import Button from "../atoms/Buttons/Button";
// import { startLogout } from "../../actions/auth";

// import { useDispatch, useSelector } from "react-redux";
// import { uiOpenLogin, uiOpenRegister } from "../../actions/modal";
import LoginScreen from "./auth/LoginScreen";
import RegisterScreen from "./auth/RegisterScreen";

import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Logo } from "../";
import * as styles from "../atoms/Buttons/buttonStyles";
import { Flex, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

export const NavBar = () => {
  // const [openNav, setOpenNav] = useState(false);

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
      <nav className="flex justify-between items-center w-full shadow-md h-[88px] bg-dark-gray py-2 px-10 md:px-20">
        <Link to="/" className="w-1/3">
          <Logo />
        </Link>
        <div className="justify-end hidden w-2/3 gap-3 md:flex">
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
                className="rounded-[10px] w-96 pl-7 placeholder-dark-gray h-10"
              />
            </InputGroup>
          </div>

          <button className={`${styles.GHOST_BUTTON} px-8 `}>Login</button>
          <button className={`${styles.PRIMARY_BUTTON} px-8 py-2 `}>
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};
