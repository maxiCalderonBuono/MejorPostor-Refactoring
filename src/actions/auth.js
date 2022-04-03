import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import { uiCloseLogin } from "./modal";

const login = (user) => ({ type: types.login, payload: user });

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const res = await fetchSinToken("auth/signin", { email, password }, "POST");
    const body = await res.json();
    console.log(body);
    if (body.ok) {
      localStorage.setItem("token", body.token);

      dispatch(login({ id: body.payload.id, username: body.payload.username }));
      dispatch(uiCloseLogin());
    } else {
      console.log("error", body);
    }
  };
};
