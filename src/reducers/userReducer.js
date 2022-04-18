import { types } from "../types/types";

const initialState = {};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.editUser:
      return {
        ...state,
        image: action.payload.image,
        username: action.payload.username,
        email: action.payload.email,
      };
    default:
      return state;
  }
};
