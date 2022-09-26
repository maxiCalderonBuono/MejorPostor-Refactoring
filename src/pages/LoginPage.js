import { Link } from "react-router-dom";
// import { useAuthStore } from "../../hooks";
import { Error } from "../components/atoms/Error";
import { useForm } from "react-hook-form";
import { LoadingButton } from "../components/atoms/LoadingButton";

// const loginFields = {
//   email: "",
//   password: "",
// };

export const LoginPage = () => {
  // const { email, password, onInputChange } = useForm(loginFields);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const { startLogin, errorMsg, status } = useAuthStore();

  // const loginSubmit = (e) => {
  //   e.preventDefault();
  //   startLogin({ email, password });
  // };
  return (
    <section className="flex flex-col justify-center lg:flex-row w-[90%] h-screen mx-auto  items-center">
      <div className="lg:w-1/2 w-[60%]  flex flex-col items-center justify-center">
        <p className="text-3xl italic font-bold text-center md:text-5xl">
          Calenly
        </p>
        <img
          className="w-3/4"
          src="https://res.cloudinary.com/dvqlenul5/image/upload/v1656419993/accounts___user_users_profile_account_man_people_website_browser_webpage_mn77ws.svg"
          alt="user_account"
        />
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2 lg:h-full">
        <div
          className={`bg-white w-full lg:w-3/4 lg:py-10 flex flex-col justify-center items-center rounded-xl py-6 mt-4 
            // errorMsg?.type === "login"
              // ? "drop-shadow-[0_30px_45px_rgba(250,98,127,0.30)]"
              // : "drop-shadow-[0_30px_45px_rgba(22,22,22,0.10)]"
          `}
        >
          <form
            className="flex-col items-center w-3/4 space-y-8 rounded-lg"
            // onSubmit={handleSubmit(startLogin)}
          >
            <div className="relative">
              <input
                id="email"
                className={`peer w-full h-10 px-6 border-b-2 mb-2 outline-none caret-sky-500 ${
                  errors.email ? "focus:border-red-400" : "focus:border-sky-500"
                } focus:border-sky-500 focus:border-b-[3px] border-gray-300 placeholder-gray-600 invalid:border-b-[3px] focus:invalid:no-underline focus:invalid:outline-none disabled:border-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-500 placeholder-transparent`}
                placeholder="Email address"
                autoComplete="off"
                {...register("email", {
                  required: "This is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please insert a valid email address.",
                  },
                })}
                // value={email}
                // required
                // onChange={onInputChange}
              />
              <div className="flex content-center h-5 w-ful">
                {errors.email && (
                  <span className="text-sm italic font-bold text-red-400">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <label
                htmlFor="email"
                className="text-sm text-gray-600 absolute px-6 left-0 -top-3.5 peer-placeholder-shown:top-1.5 peer-placeholder-shown:text-base peer-placeholer-shown:text-gray-400 transition-all"
              >
                Email address
              </label>
            </div>

            <div className="flex flex-col items-end">
              <div className="relative w-full">
                <input
                  id="password"
                  type="password"
                  className={`peer w-full h-10 px-6 border-b-2 outline-none caret-sky-500 ${
                    errors.password
                      ? "focus:border-red-400"
                      : "focus:border-sky-500"
                  } focus:border-sky-500 focus:border-b-[3px] border-gray-300 placeholder-gray-600 invalid:border-b-[3px] focus:invalid:no-underline focus:invalid:outline-none disabled:border-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-500 placeholder-transparent`}
                  placeholder="Password"
                  {...register("password", { required: "This is required" })}
                  // required
                  // value={password}
                  // onChange={onInputChange}
                />
                <div className="h-6 w-ful">
                  {errors.password && (
                    <span className="mt-2 text-sm italic font-bold text-red-400">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <label
                  htmlFor="password"
                  className="text-sm text-gray-600 absolute px-6 left-0 -top-3.5 peer-placeholder-shown:top-1.5 peer-placeholder-shown:text-base peer-placeholer-shown:text-gray-400 transition-all"
                >
                  Password
                </label>
              </div>
              <button type="reset" className="p-3 -mr-3 w-max">
                <span className="text-sm tracking-wide text-blue-600">
                  Forgot password ?
                </span>
              </button>
            </div>
            <div className="mt-0">
              {"check" === "checking" ? (
                <LoadingButton />
              ) : (
                <button
                  type="submit"
                  className="block w-full px-6 py-2 md:py-3 rounded-xl bg-sky-500 hover:bg-sky-600 focus:bg-sky-700 active:bg-sky-500 disabled:pointer-events-none disabled:opacity-40 disabled:bg-gray-400"
                >
                  <span className="text-white text-md md:text-lg ">Login</span>
                </button>
              )}
              <Link to="/auth/register" className="block p-3 -ml-3 w-max">
                <span className="text-sm tracking-wide text-blue-600">
                  Create new account
                </span>
              </Link>
            </div>
          </form>
          <div className="w-3/4 pt-6 space-y-6 border-t">
            {/* <div className="w-full h-12">
              {errorMsg?.type === "login" && <Error msg={errorMsg.error} />}
            </div> */}
            <span className="block text-center text-gray-500">
              Organize your time in a simple way
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
