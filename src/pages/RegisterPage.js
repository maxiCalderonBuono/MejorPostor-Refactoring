import { useRef } from "react";
import { Link } from "react-router-dom";
// import { useForm } from "../../hooks";
import { useForm } from "react-hook-form";
// import { useAuthStore } from "../../hooks";
import { Error } from "../components/atoms/Error";
import { LoadingButton } from "../components/atoms/LoadingButton";
import { Logo } from "../components";
import * as styles from "../components/atoms/Buttons/buttonStyles";

const registerFields = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

export const RegisterPage = () => {
  // const { name, email, password, password2, onInputChange } =
  //   useForm(registerFields);

  // const { startRegister, errorMsg, status } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = useRef();

  password.current = watch("password", "");

  // const registerSubmit = () => {
  //   console.log({ name, email, password, password2 });
  // };
  return (
    <section className="flex flex-col items-center min-h-screen bg-light-gray">
      <div className="flex items-center justify-center pt-10 pb-24">
        <Logo theme={"dark"} className="text-2xl" />
      </div>

      <div>
        <div className="hidden md:block">
          <h1>HELLO</h1>
        </div>
        <div className="max-w-[410px]">
          <div
            className={`bg-white w-full p-10 rounded-xl 
            ${
              "logi" === "login"
                ? "drop-shadow-[0_30px_45px_rgba(250,98,127,0.30)]"
                : "drop-shadow-[0_30px_45px_rgba(22,22,22,0.10)]"
            }
          `}
          >
            <p className="w-full pb-3 text-3xl text-left">Create an account</p>
            <span className="text-sm">Already have an account?</span>{" "}
            <Link
              to="/auth"
              className={`${styles.GHOST_BUTTON} md:px-6 lg:px-8 py-2`}
            >
              <span className="text-sm tracking-wid">Login instead!</span>
            </Link>
            <form
              className="flex-col items-center w-full pt-8 space-y-6"
              onSubmit={handleSubmit(startRegister)}
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
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  autoComplete="off"
                  className={`peer w-full h-10 border-b-2 outline-none caret-text-primary ${
                    errors.password
                      ? "focus:border-red-400"
                      : "focus:border-text-primary"
                  } focus:border-text-primary focus:border-b-[3px] border-gray-300 placeholder-gray-600 invalid:border-b-[3px] focus:invalid:no-underline focus:invalid:outline-none disabled:border-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-500 placeholder-transparent`}
                  placeholder="Password"
                  // value={password}
                  // onChange={onInputChange}
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
              </div>
              <div className="space-y-4">
                {"check" === "checking" ? (
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
            <div className="w-3/4 pt-6 mt-2 space-y-6">
              {/* <div className="w-full h-2">
              {errorMsg?.type === "register" && <Error msg={errorMsg.error} />}
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
