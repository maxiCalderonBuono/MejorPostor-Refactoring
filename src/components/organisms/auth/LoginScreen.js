import React from "react";
import { useState, useRef, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/userForm";
import { useDispatch } from "react-redux";
import Button from "../../atoms/Buttons/Button";
import * as styles from "../../atoms/Buttons/buttonStyles";
import { login } from "../../../actions/auth";

const LoginScreen = () => {
  const [isOpen, setIsOpen] = useState(true);

  const firstInput = useRef(null);

  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  return (
    <>
      <Button
        styles={styles.PRIMARY_BUTTON}
        content="Open"
        setFunction={() => setIsOpen(true)}
      />
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 flex flex-row items-center justify-center overflow-y-auto"
          onClose={() => setIsOpen(false)}
          initialFocus={firstInput}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-50"
          >
            <div className="relative flex bg-white rounded-2xl w-[736px] h-[480px]">
              <div className="rounded-[16px_0px_0px_16px] bg-background_main flex items-center">
                <img
                  src="https://res.cloudinary.com/di57h1uhf/image/upload/v1648567242/Mejor%20postor/logo2_ehp6pn.png"
                  alt="main logo"
                  className=" w-96"
                />
              </div>
              <div className="relative flex flex-col items-center w-1/2">
                <Button
                  styles={`${styles.DANGER_BUTTON} absolute right-1`}
                  content={<AiOutlineCloseCircle />}
                  setFunction={() => setIsOpen(false)}
                />
                <Dialog.Title
                  as="h1"
                  className="absolute mt-3 text-2xl italic font-bold text-text-primary top-8"
                >
                  Bienvenidos a Mejor postor
                </Dialog.Title>
                <Dialog.Description
                  as="p"
                  className="absolute mt-2 text-sm text-center top-20 text-text-secondary"
                >
                  El lugar donde podrás encontrar la mayor variedad de subastas
                  de Argentina. Busca, pujá y ganá!
                </Dialog.Description>

                <form
                  onSubmit={handleSubmit}
                  className="absolute flex flex-col items-center w-full top-36"
                >
                  <label
                    for="email"
                    className="w-4/5 text-left text-text-primary"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="off"
                    placeholder="Email"
                    value={email}
                    onChange={handleInputChange}
                    className="w-4/5 h-10 border-2 border-solid border-text-secondary rounded-[43px] mb-4 p-2"
                    ref={firstInput}
                  />
                  <label
                    for="email"
                    className="w-4/5 text-left text-text-primary"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    autoComplete="off"
                    placeholder="Password"
                    value={password}
                    onChange={handleInputChange}
                    className="w-4/5 h-10 border-2 border-solid border-text-secondary rounded-[43px] mb-4 p-2"
                  />
                  <Button
                    styles={`${styles.PRIMARY_BUTTON} text-xl h-9 w-4/5`}
                    content="Iniciar Sesión"
                    type="submit"
                  />
                </form>
                <div className="absolute flex flex-col items-center w-full bottom-4">
                  <p className="mb-4 text-dark-blue">
                    ¿Olvidaste tu contraseña?
                  </p>
                  <p className="text-light-blue">
                    ¿Todavía no tienes una cuenta?
                  </p>
                  <Link
                    className={`${styles.GHOST_BUTTON} text-xl h-9 w-4/5 text-center leading-[1.75]`}
                    to="/auth/register"
                  >
                    Registrarse
                  </Link>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default LoginScreen;
