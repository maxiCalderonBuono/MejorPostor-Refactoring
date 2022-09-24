import React from "react";
import { useRef, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../atoms/Buttons/Button";
import * as styles from "../../atoms/Buttons/buttonStyles";
import {
  uiCloseRegister,
  uiIsLoading,
  uiIsNotLoading,
  uiOpenLogin,
} from "../../../actions/modal";
import { useForm } from "../../../hooks/userForm";
import { startRegister } from "../../../actions/auth";
import toast from "react-hot-toast";
import ButtonSpinner from "../../atoms/ButtonSpinner";

const RegisterScreen = (props) => {
  const firstInput = useRef(null);

  const dispatch = useDispatch();

  const { ModalRegister, Loading } = useSelector((state) => state.ui);

  const [formRegisterValues, handleRegisterInputChange, reset] = useForm({
    rName: "",
    rEmail: "",
    rPassword: "",
    rCPassword: "",
  });

  const { rName, rEmail, rPassword, rCPassword } = formRegisterValues;

  const onClosed = () => {
    dispatch(uiIsNotLoading());
    dispatch(uiCloseRegister());
    reset();
  };

  const openLogin = () => {
    dispatch(uiCloseRegister());
    reset();
    dispatch(uiOpenLogin());
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(uiIsLoading());

    if (rPassword !== rCPassword) {
      toast.error("Las contraseñas no coinciden");
      dispatch(uiIsNotLoading());
      return;
    }
    if (!rName) {
      toast.error("El nombre es obligatorio");
      dispatch(uiIsNotLoading());
      return;
    }
    if (!rEmail) {
      toast.error("El email es obligatorio");
      dispatch(uiIsNotLoading());
      return;
    }

    if (rPassword.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres");
      dispatch(uiIsNotLoading());
      return;
    }
    /*const registerToast = toast.loading("Registrando usuario...");*/
    dispatch(startRegister(rName, rPassword, rEmail, reset));
    /*toast.dismiss(registerToast);*/
  };

  return (
    <>
      <Transition show={ModalRegister} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-30 flex flex-row items-center justify-center h-full overflow-y-auto backdrop-blur-[5px]"
          onClose={() => onClosed()}
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
            <div className="relative h-full flex modal-2:flex-row flex-col bg-white modal-2:rounded-2xl w-[1000px]  modal-2:h-[620px] modal-1:h-[500px] modal-2:m-4">
              <div className="modal-2:rounded-[16px_0px_0px_16px] bg-background_main flex flex-col items-center justify-center w-full modal-2:w-1/2 py-3 px-2">
                <img
                  src="https://res.cloudinary.com/dvqlenul5/image/upload/v1648904794/logo1_ykmcgn.png"
                  alt="main logo"
                  className="w-60 modal-1:w-72"
                />
                <Button
                  styles={`${styles.DANGER_BUTTON} absolute top-1 right-1 block modal-2:hidden`}
                  content={<AiOutlineCloseCircle />}
                  setFunction={() => onClosed()}
                />
              </div>
              <div className=" bg-white relative flex flex-col items-center w-full min-h-[660px] modal-2:min-h-full modal-2:rounded-[0px_16px_16px_0px] top-8modal-2:w-1/2 modal-1:w-3/4">
                <Button
                  styles={`${styles.DANGER_BUTTON} absolute right-1 hidden modal-2:block`}
                  content={<AiOutlineCloseCircle />}
                  setFunction={() => onClosed()}
                />
                <Dialog.Title
                  as="h1"
                  className="absolute mt-3 text-2xl italic font-bold text-text-primary modal-2:top-5"
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
                  className="absolute flex flex-col items-center w-full top-28 modal-2:top-[135px] modal-1:top-40"
                  onSubmit={handleRegister}
                >
                  <div className="flex flex-col w-full modal-1:flex-row modal-1:justify-center">
                    <div className="flex flex-col items-center w-full modal-1:w-1/2">
                      <label
                        htmlFor="user"
                        className="w-5/6 text-left text-text-primary"
                      >
                        Usuario
                      </label>
                      <input
                        id="user"
                        type="text"
                        autoComplete="off"
                        placeholder="Usuario"
                        className="w-5/6 t h-10 border-2 border-solid outline-none border-text-secondary rounded-[43px] mb-4 p-2 text-sm"
                        ref={firstInput}
                        onChange={handleRegisterInputChange}
                        value={rName}
                        name="rName"
                        required
                      />
                    </div>
                    <div className="flex flex-col items-center w-full modal-1:w-1/2">
                      <label
                        htmlFor="email"
                        className="w-5/6 text-left t text-text-primary"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="rEmail"
                        autoComplete="off"
                        placeholder="Email"
                        className="w-5/6 t h-10 border-2 border-solid outline-none border-text-secondary rounded-[43px] mb-4 p-2 text-sm"
                        onChange={handleRegisterInputChange}
                        value={rEmail}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full bg-white modal-1:flex-row modal-1:justify-center modal-1:mb-4">
                    <div className="flex flex-col items-center w-full modal-1:w-1/2">
                      <label
                        htmlFor="password"
                        className="w-5/6 text-left t text-text-primary"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        name="rPassword"
                        autoComplete="off"
                        placeholder="Password"
                        className="w-5/6 t h-10 border-2 border-solid outline-none border-text-secondary rounded-[43px] mb-4 p-2 text-sm"
                        onChange={handleRegisterInputChange}
                        value={rPassword}
                        required
                      />
                    </div>
                    <div className="flex flex-col items-center w-full modal-1:w-1/2">
                      <label
                        htmlFor="password-2"
                        className="w-5/6 text-left t text-text-primary"
                      >
                        Repite la contraseña
                      </label>
                      <input
                        id="password-2"
                        type="password"
                        name="rCPassword"
                        autoComplete="off"
                        placeholder="Repeat Password"
                        className="w-5/6  h-10 border-2 border-solid outline-none border-text-secondary rounded-[43px] mb-4 p-2 text-sm"
                        onChange={handleRegisterInputChange}
                        value={rCPassword}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center w-full mt-4 bg-white modal-2:mt-4">
                    <Button
                      styles={`${
                        styles.PRIMARY_BUTTON
                      } text-xl modal-2:text-2xl h-9 w-4/5 ${
                        Loading ? "opacity-70" : ""
                      }`}
                      content={Loading ? <ButtonSpinner /> : "Registrar"}
                      disabled={Loading}
                    />
                    <p className="mt-8 modal-2:mt-4 text-light-blue">
                      ¿Ya tienes una cuenta?
                    </p>
                    <Link
                      className={`${styles.GHOST_BUTTON} text-xl h-9 w-4/5 modal-2:text-2xl text-center align-middle leading-[1.75]`}
                      to="/"
                      onClick={() => openLogin()}
                    >
                      Iniciar Sesión
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

export default RegisterScreen;
