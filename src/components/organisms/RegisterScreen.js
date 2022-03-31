import React from "react";
import { useState, useRef, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineCloseCircle } from "react-icons/ai";

import Button from "../atoms/Buttons/Button";
import * as styles from "../atoms/Buttons/buttonStyles";

const RegisterScreen = () => {
  const [isOpen, setIsOpen] = useState(true);
  const firstInput = useRef(null);
  console.log(isOpen);
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
            <div className="relative flex bg-white rounded-2xl w-[900px] h-[480px]">
              <div className="rounded-[16px_0px_0px_16px] bg-background_main flex items-center">
                <img
                  src="https://res.cloudinary.com/di57h1uhf/image/upload/v1648567242/Mejor%20postor/logo2_ehp6pn.png"
                  alt="main logo"
                  className=" w-96"
                />
              </div>
              <div className="relative flex flex-col items-center w-3/4">
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
                  className="absolute px-4 mt-2 text-sm text-center top-20 text-text-secondary"
                >
                  El lugar donde podrás encontrar la mayor variedad de subastas
                  de Argentina. Busca, pujá y ganá!
                </Dialog.Description>

                <div className="absolute flex flex-col items-center w-full top-40">
                  <div className="flex flex-row justify-center w-full">
                    <div className="flex flex-col items-center w-1/2">
                      <label
                        for="user"
                        className="w-5/6 text-left text-text-primary"
                      >
                        Usuario
                      </label>
                      <input
                        id="user"
                        type="text"
                        name="user"
                        autoComplete="off"
                        placeholder="Usuario"
                        className="w-5/6 t h-10 border-2 border-solid border-text-secondary rounded-[43px] mb-4 p-2"
                        ref={firstInput}
                      />
                    </div>
                    <div className="flex flex-col items-center w-1/2">
                      <label
                        for="email"
                        className="w-5/6 text-left t text-text-primary"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        autoComplete="off"
                        placeholder="Email"
                        className="w-5/6 t h-10 border-2 border-solid border-text-secondary rounded-[43px] mb-4 p-2"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full">
                    <div className="flex flex-col items-center w-1/2">
                      <label
                        for="email"
                        className="w-5/6 text-left t text-text-primary"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        autoComplete="off"
                        placeholder="Password"
                        className="w-5/6 t h-10 border-2 border-solid border-text-secondary rounded-[43px] mb-4 p-2"
                      />
                    </div>
                    <div className="flex flex-col items-center w-1/2">
                      <label
                        for="password-2"
                        className="w-5/6 text-left t text-text-primary"
                      >
                        Repite la contraseña
                      </label>
                      <input
                        id="password-2"
                        type="password"
                        name="password-2"
                        autoComplete="off"
                        placeholder="Repeat Password"
                        className="w-5/6  h-10 border-2 border-solid border-text-secondary rounded-[43px] mb-4 p-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col items-center w-full bottom-4">
                  <Button
                    styles={`${styles.PRIMARY_BUTTON} text-xl h-9 w-4/5 mb-5`}
                    content="Registrarse"
                  />
                  <p className="text-light-blue">¿Ya tienes una cuenta?</p>
                  <Button
                    styles={`${styles.GHOST_BUTTON} text-xl h-9 w-4/5`}
                    content="Iniciar Sesión"
                  />
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default RegisterScreen;
