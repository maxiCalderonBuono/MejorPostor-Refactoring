import { useDispatch, useSelector } from "react-redux";
import { mejorPostorApi } from "../api";
import { onChecking, onLogin, onLogout } from "../store";

export const useAuthStore = () => {
  const { status, errorMsg } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await mejorPostorApi.post("auth/signin", {
        email,
        password,
      });

      console.log(`data:`, data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
      localStorage.setItem("username", data.username);
      localStorage.setItem("id", data.id);
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      dispatch(
        onLogout({
          type: "login",
          error:
            error.response.data?.message ||
            "There was an error with your E-Mail/Password combination. Please try again.",
        })
      );
    }
  };

  const startRegister = async ({ name, surname, email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await mejorPostorApi.post("auth/signup", {
        name,
        surname,
        password,
        email,
        image:
          "https://res.cloudinary.com/di57h1uhf/image/upload/v1648590723/Mejor%20postor/circle-user-solid_abtmjp.png",
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("uid", data.data.uid);
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      console.log(`error:`, error);
      dispatch(
        onLogout({
          type: "register",
          error:
            error.response.data?.message || "Please, contact the administrator",
        })
      );
    }
  };

  return {
    //Properties
    status,
    errorMsg,
    //Methods

    startRegister,
    startLogin,
  };
};
