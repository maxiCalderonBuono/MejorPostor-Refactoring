import { types } from "../types/types";


export const authReducer = (state= {}, action) => {

  switch (action.type) {
    
    case types.login:
      return {
        ...state,
        isAutho: true,
        email: action.payload.email,
        password: action.payload.password,
      };

    case types.logout:
      return { };

    default:
      return state;
  }
};
