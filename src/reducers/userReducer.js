import { types } from "../types/types";

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.editUser:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
