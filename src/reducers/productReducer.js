import { types } from "../types/types";

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case types.createProduct:
      return {
        ...state,
        ...action.payload,
      };
      case types.updateProduct:
      return {
        ...state,
        ...action.payload,
      };
      case types.purchaseProduct:
        return {
          ...state,
          ...action.payload,
        };
        case types.deleteProduct:
        return {
          ...state,
          ...action.payload,
        };
    default:
      return state;
  }
};
