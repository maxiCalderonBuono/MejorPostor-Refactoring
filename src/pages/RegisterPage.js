import { useRef } from "react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";

import { Error } from "../components/atoms/Error";
import { LoadingButton } from "../components/atoms/LoadingButton";
import { Logo } from "../components";
import * as styles from "../components/atoms/Buttons/buttonStyles";
import { useAuthStore } from "../hooks/useAuthStore";
import { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export const RegisterPage = () => {
  const [showPass, setShowPass] = useState(false);

  const [captchaToken, setCaptchaToken] = useState("");
  const captcha = useRef();

  const [captchaError, setCaptchaError] = useState("");

  const { startRegister, errorMsg, status } = useAuthStore();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!captchaToken) {
      setCaptchaError("You must verify the captcha");
      return;
    }
    startRegister({ ...data, captchaToken });
  };

  const checkValue = getValues("email");

  return (
    <section className="flex flex-col items-center min-h-screen bg-light-gray lg:px-8">
      <div className="flex items-center justify-center w-full pt-10 pb-24 lg:justify-start lg:py-6">
        <Link to="/">
          <Logo theme={"dark"} className="text-2xl md:text-3xl" />
        </Link>
      </div>

      <div className="lg:w-full lg:flex lg:items-center lg:justify-between lg:max-w-[1080px]">
        <div className="hidden lg:block">
          <h1 className="mb-4 text-5xl">Search. Bet. Get.</h1>
          <span className="text-black-white">
            You'll find the option that you're looking for.
          </span>
        </div>
        <div className="max-w-[410px]">
          <div
            className={`bg-white w-full p-10 rounded-xl 
            ${
              (errorMsg?.type === "register" && checkValue) ||
              captchaError ||
              Object.keys(errors).length > 0
                ? "drop-shadow-[0_30px_45px_rgba(250,98,127,0.30)]"
                : "drop-shadow-[0_30px_45px_rgba(22,22,22,0.10)]"
            }
          `}
          >
            <p className="w-full pb-3 text-3xl text-left">Create an account</p>
            <div className="flex gap-2">
              <span className="text-sm">Already have an account?</span>{" "}
              <Link
                to="/auth"
                className={`${styles.GHOST_BUTTON} rounded leading-3`}
              >
                <span className="block text-sm">Log in</span>
              </Link>
            </div>
            <form
              className="flex-col items-center w-full pt-8 space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex gap-2">
                <div className="relative w-1/2">
                  <input
                    id="name"
                    type="text"
                    autoComplete="off"
                    className={`peer w-full h-10 border-b-2 outline-none caret-text-primary ${
                      errors.name
                        ? "focus:border-red-400"
                        : "focus:border-text-primary"
                    } focus:border-text-primary focus:border-b-[3px] border-gray-300 placeholder-gray-600 invalid:border-b-[3px] focus:invalid:no-underline focus:invalid:outline-none disabled:border-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-500 placeholder-transparent`}
                    placeholder="Name"
                    {...register("name", {
                      required: "This is required",
                    })}
                  />
                  <label
                    htmlFor="name"
                    className="text-sm text-gray-600 absolute left-0 -top-3.5 peer-placeholder-shown:top-1.5 peer-placeholder-shown:text-base peer-placeholer-shown:text-gray-400 transition-all"
                  >
                    Name
                  </label>
                  <div className="flex content-center h-5 w-ful">
                    {errors.name && (
                      <span className="text-sm italic font-bold text-red-400">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="relative w-1/2">
                  <input
                    id="surname"
                    type="string"
                    autoComplete="off"
                    className={`peer w-full h-10 border-b-2 outline-none caret-text-primary ${
                      errors.surname
                        ? "focus:border-red-400"
                        : "focus:border-text-primary"
                    } focus:border-sky-text-primary focus:border-b-[3px] border-gray-300 placeholder-gray-600 invalid:border-b-[3px] focus:invalid:no-underline focus:invalid:outline-none disabled:border-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-500 placeholder-transparent`}
                    placeholder="Your email"
                    {...register("surname", {
                      required: "This is required",
                    })}
                  />
                  <label
                    htmlFor="surname"
                    className="text-sm text-gray-600 absolute  left-0 -top-3.5 peer-placeholder-shown:top-1.5 peer-placeholder-shown:text-base peer-placeholer-shown:text-gray-400 transition-all"
                  >
                    Surname
                  </label>
                  <div className="flex content-center h-5 w-ful">
                    {errors.surname && (
                      <span className="text-sm italic font-bold text-red-400">
                        {errors.surname.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="relative">
                <input
                  id="email"
                  type="string"
                  autoComplete="off"
                  className={`relative peer w-full h-10  border-b-2 outline-none caret-text-primary 
                     ${
                       errors.email
                         ? "focus:border-red-400"
                         : "focus:border-text-primary"
                     } focus:border-text-primary focus:border-b-[3px] border-gray-300 placeholder-gray-600 invalid:border-b-[3px] focus:invalid:no-underline focus:invalid:outline-none disabled:border-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-500 placeholder-transparent`}
                  placeholder="Your email"
                  {...register("email", {
                    required: "This is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please insert a valid email address.",
                    },
                  })}
                />

                <label
                  htmlFor="email"
                  className="text-sm text-gray-600 absolute left-0 -top-3.5 peer-placeholder-shown:top-1.5 peer-placeholder-shown:text-base peer-placeholer-shown:text-gray-400 transition-all"
                >
                  Email
                </label>
                <div className="flex content-center h-5 w-ful">
                  {errors.email && (
                    <span className="text-sm italic font-bold text-red-400">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPass ? "text" : "password"}
                  autoComplete="off"
                  className={`peer w-full h-10 border-b-2 outline-none caret-text-primary ${
                    errors.password
                      ? "focus:border-red-400"
                      : "focus:border-text-primary"
                  } focus:border-text-primary focus:border-b-[3px] border-gray-300 placeholder-gray-600 invalid:border-b-[3px] focus:invalid:no-underline focus:invalid:outline-none disabled:border-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-500 placeholder-transparent`}
                  placeholder="Password"
                  {...register("password", {
                    required: "You must specify a password",
                    minLength: {
                      value: 6,
                      message: "Password must have at least 6 characters",
                    },
                  })}
                />
                <div className="flex content-center h-5 w-ful">
                  {errors.password && (
                    <span className="text-sm italic font-bold text-red-400">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <label
                  htmlFor="password"
                  className="text-sm text-gray-600 absolute  left-0 -top-3.5 peer-placeholder-shown:top-1.5 peer-placeholder-shown:text-base peer-placeholer-shown:text-gray-400 transition-all"
                >
                  Password
                </label>
                <div
                  onClick={() => setShowPass((prev) => !prev)}
                  className="absolute right-0 cursor-pointer top-4"
                >
                  {showPass ? <RiEyeFill /> : <RiEyeCloseFill />}
                </div>
              </div>
              <div className="flex justify-center">
                <HCaptcha
                  sitekey="1eb6dd60-2d5d-4e07-a00c-267fd43b1b46"
                  ref={captcha}
                  onVerify={(token) => {
                    setCaptchaToken(token);
                    setCaptchaError("");
                  }}
                  onExpire={(e) => {
                    setCaptchaToken("");
                    setCaptchaError("You must verify the captcha");
                  }}
                />
              </div>
              <div className="space-y-4">
                {status === "checking" ? (
                  <LoadingButton />
                ) : (
                  <button
                    className={`${styles.PRIMARY_BUTTON} md:px-6 lg:px-8 py-2 w-full`}
                  >
                    Create account
                  </button>
                )}
              </div>
            </form>
            <div className="w-full pt-6 mt-2 space-y-6 ">
              <div className="w-full h-2">
                {captchaError ? (
                  <Error msg={captchaError} />
                ) : (
                  errorMsg?.type === "register" &&
                  checkValue && <Error msg={errorMsg.error} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
