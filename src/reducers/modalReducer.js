import { types } from "../types/types";

const initialState = {
  ModalLogin: false,
  ModalRegister: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenLogin:
      return {
        ...state,
        ModalLogin: true,
      };

    case types.uiOpenRegister:
      return {
        ...state,
        ModalRegister: true,
      };
    case types.uiCloseLogin:
      return {
        ...state,
        ModalLogin: false,
      };

    case types.uiCloseRegister:
      return {
        ...state,
        ModalRegister: false,
      };

    default:
      return state;
  }
};
