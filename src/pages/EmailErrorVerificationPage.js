import { useRef } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components";
import * as styles from "../components/atoms/Buttons/buttonStyles";
import { LoadingButton } from "../components/atoms/LoadingButton";
import { useAuthStore } from "../hooks/useAuthStore";
import { useForm } from "react-hook-form";
import { Error } from "../components/atoms/Error";

export const EmailErrorVerificationPage = ({ error }) => {
  const { startLogin, errorMsg, status } = useAuthStore();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    watch,
  } = useForm();

  const checkValue = getValues("email");

  const password = useRef();

  password.current = watch("password", "");

  return (
    <section className="flex flex-col items-center h-screen min-h-screen bg-light-gray lg:px-8">
      <div className="flex items-center justify-center w-full pt-10 pb-24 lg:justify-start lg:pt-6 lg:pb-0">
        <Link to="/">
          <Logo theme={"dark"} className="text-2xl md:text-3xl" />
        </Link>
      </div>

      <div className="lg:w-full lg:flex lg:items-center lg:justify-between lg:max-w-[1080px] h-full">
        <div className="hidden lg:block">
          <img
            src="https://res.cloudinary.com/dvqlenul5/image/upload/v1664805251/error-verification_ckr55a.png"
            className="w-[500px] -rotate-12"
            alt="email illustration"
          />
        </div>
        <div className="w-[410px]">
          <div
            className={`bg-white p-10 rounded-xl w-full
            ${
              errorMsg?.type === "login" && checkValue
                ? "drop-shadow-[0_30px_45px_rgba(250,98,127,0.30)]"
                : "drop-shadow-[0_30px_45px_rgba(22,22,22,0.10)]"
            }
          `}
          >
            <p className="w-full pb-3 text-3xl text-left">Verify your email</p>
            <span className="text-black-white">Enter your email to verify</span>
            <div className="w-full pt-6 mt-2 space-y-6">
              <div className="w-full h-2 mb-10">
                <Error msg={error} />
              </div>
            </div>
            <form
              className="flex-col items-center w-full pt-8 space-y-6"
              onSubmit={handleSubmit(startLogin)}
            >
              <div className="relative">
                <input
                  id="email"
                  type="string"
                  autoComplete="off"
                  className={`peer w-full h-10  border-b-2 outline-none caret-text-primary ${
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

              <div className="space-y-4">
                {status === "checking" ? (
                  <LoadingButton />
                ) : (
                  <button
                    className={`${styles.PRIMARY_BUTTON} md:px-6 lg:px-8 py-2 w-full`}
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
