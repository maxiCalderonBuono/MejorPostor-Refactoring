import { types } from "../types/types";

const initialState = {
  ModalLogin: false,
  ModalRegister: false,
  Loading: false,
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

    case types.uiIsLoading:
      return {
        ...state,
        Loading: true,
      };

    case types.uiIsNotLoading:
      return {
        ...state,
        Loading: false,
      };

    default:
      return state;
  }
};
