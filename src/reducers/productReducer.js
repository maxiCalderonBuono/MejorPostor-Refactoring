import { types } from "../types/types";

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case types.createProduct:
      return {
        ...state,
        ...action.payload,
      };
      case types.createAuction:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
