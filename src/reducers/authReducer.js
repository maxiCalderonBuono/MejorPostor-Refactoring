import { types } from "../types/types";

const initialState = {
  isAutho: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        isAutho: true,
        ...action.payload,
      };

    case types.isAuthoFinish:
      return {
        ...state,
        isAutho: true,
      };

    case types.logout:
      return {
        isAutho: false,
      };

    default:
      return state;
  }
};
