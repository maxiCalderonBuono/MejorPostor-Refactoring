import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { ImHammer2 } from "react-icons/im";
import * as styles from "../atoms/Buttons/buttonStyles";
import Button from "../atoms/Buttons/Button";

import { useDispatch, useSelector } from "react-redux";
import { uiOpenLogin, uiOpenRegister } from "../../actions/modal";
import LoginScreen from "./auth/LoginScreen";
import RegisterScreen from "./auth/RegisterScreen";
import { startLogout } from "../../actions/auth";
import { Link } from "react-router-dom";
import { Logo } from "../";

export const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  //Hago el dispatch de la apertura del modal de Login y Registro
  const dispatch = useDispatch();

  const { isAutho, username, image } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
    localStorage.clear();
  };

  const openLogin = () => {
    dispatch(uiOpenLogin());
  };

  const OpenRegister = () => {
    dispatch(uiOpenRegister());
  };
  return (
    <header>
      <LoginScreen />
      <RegisterScreen />
      <nav className="flex items-center w-full shadow-md h-[80px] bg-dark-gray py-2 px-9">
        <Link to="/">
          <Logo />
        </Link>
      </nav>
    </header>
  );
};
