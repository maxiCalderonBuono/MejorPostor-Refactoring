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
          className="fixed inset-0 z-10 flex flex-row items-center justify-center h-full overflow-y-auto"
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
            <div className="relative h-full flex modal-2:flex-row flex-col bg-white modal-2:rounded-2xl w-[1000px]  modal-2:h-[480px]">
              <div className="modal-2:rounded-[16px_0px_0px_16px] bg-background_main flex flex-col items-center justify-center w-full modal-2:w-1/2 py-3 px-2">
                <img
                  src="https://res.cloudinary.com/dvqlenul5/image/upload/v1648904794/logo1_ykmcgn.png"
                  alt="main logo"
                  className="modal-2:w-72 w-60"
                />
                <Button
                  styles={`${styles.DANGER_BUTTON} absolute top-1 right-1 block modal-2:hidden`}
                  content={<AiOutlineCloseCircle />}
                  setFunction={() => setIsOpen(false)}
                />
              </div>
              <div className=" bg-white relative flex flex-col min-h-[510px] items-center w-full modal-2:min-h-full modal-2:rounded-[0px_16px_16px_0px] top-8modal-2:w-1/2 modal-1:w-3/4">
                <Button
                  styles={`${styles.DANGER_BUTTON} absolute right-1 hidden modal-2:block`}
                  content={<AiOutlineCloseCircle />}
                  setFunction={() => setIsOpen(false)}
                />
                <Dialog.Title
                  as="h1"
                  className="absolute mt-3 text-2xl italic font-bold text-text-primary modal-2:top-8"
                >
                  Bienvenidos a Mejor postor
                </Dialog.Title>
                <Dialog.Description
                  as="p"
                  className="absolute px-4 mt-2 text-sm text-center modal-1:px-0 top-12 modal-2:top-20 text-text-secondary"
                >
                  El lugar donde podrás encontrar la mayor variedad de subastas
                  de Argentina.
                  <span className="modal-1:block"> Busca, pujá y ganá!</span>
                </Dialog.Description>

                <form
                  onSubmit={handleSubmit}
                  className="absolute flex flex-col items-center w-full top-28 modal-2:top-36"
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
                    className="w-4/5 h-10 border-2 border-solid outline-none border-text-secondary rounded-[43px] mb-4 p-2"
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
                    className="w-4/5 h-10 border-2 border-solid outline-none border-text-secondary rounded-[43px] mb-4 p-2"
                  />
                  <div className="w-full text-center bg-white">
                    <Button
                      styles={`${styles.PRIMARY_BUTTON} text-xl h-9 w-4/5 mt-4 modal-2:mt-0`}
                      content="Iniciar Sesión"
                      type="submit"
                    />
                    <p className="mt-2 text-dark-blue">
                      ¿Olvidaste tu contraseña?
                    </p>
                  </div>
                  <div className="flex flex-col items-center w-full mt-8 bg-white modal-2:mt-5 ">
                    <p className="mb-2 text-light-blue">
                      ¿Todavía no tienes una cuenta?
                    </p>
                    <Link
                      className={`${styles.GHOST_BUTTON} text-xl h-9 w-4/5 text-center leading-[1.75]`}
                      to="/auth/register"
                    >
                      Registrarse
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default LoginScreen;
