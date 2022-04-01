import { types } from "../types/types";

export const login = (email, password) => ({
  type: types.login,
  payload: {
    email,
    password,
  },
});
