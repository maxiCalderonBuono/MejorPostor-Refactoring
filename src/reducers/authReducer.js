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

    case types.logout:
      return {};

    default:
      return state;
  }
};
