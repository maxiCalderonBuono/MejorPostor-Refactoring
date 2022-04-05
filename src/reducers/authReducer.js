import { types } from "../types/types";

const initialState = {
  checkingisAutho: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        checkingisAutho: true,
        ...action.payload,
      };

    case types.isAuthoFinish:
      return {
        ...state,
        checkingisAutho: true,
      };

    case types.logout:
      return {
        checkingisAutho: false,
      };

    default:
      return state;
  }
};
