import toast from "react-hot-toast";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import { uiCloseLogin, uiCloseRegister } from "./modal";

const login = (user) => ({ type: types.login, payload: user });

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const res = await fetchSinToken("auth/signin", { email, password }, "POST");
    const body = await res.json();
    if (res.status === 200) {
      localStorage.setItem("token", body.token);
      const loginToast = toast.loading("Iniciando sesión...");
      dispatch(
        login({
          id: body.payload.id,
          username: body.payload.username,
          email: body.payload.email,
        })
      );
      toast.dismiss(loginToast);
      dispatch(uiCloseLogin());
      toast.success(`Bienvenido ${body.payload.username}`);
    } else {
      toast.error(body.message);
    }
  };
};

export const startRegister = (username, password, email) => {
  return async (dispatch) => {
    const res = await fetchSinToken(
      "auth/signup",
      {
        username,
        password,
        email,
        name: "HARCODED",
        surname: "HARCODED",
        birthYear: 1990,
      },
      "POST"
    );
    const body = await res.json();

    if (res.status === 200) {
      localStorage.setItem("token", body.token);
      dispatch(login({ id: body.data.id, username: body.data.username }));
      toast.success(`Bienvenido ${body.data.username}`);

      dispatch(uiCloseRegister());
    } else {
      toast.error(body.message);
    }
    toast.info("Por favor verifica tu correo electronico");
  };
};

export const startIsAuth = () => {
  return async (dispatch) => {
    const res = await fetchConToken("auth/renew");
    const body = await res.json();
    if (res.status === 200) {
      localStorage.setItem("token", body.token);
      dispatch(login({ id: body.id, username: body.username }));
      dispatch(uiCloseLogin());
    } else {
      console.log("error", body);
      localStorage.removeItem("token");
      dispatch(isAuthoFinish());
    }
  };
};

const isAuthoFinish = () => ({ type: types.isAuthoFinish });

export const startLogout = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch(logout());
    toast.success("Sesión cerrada");
  };
};
const logout = () => ({ type: types.logout });
