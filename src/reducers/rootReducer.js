import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { modalReducer } from "./modalReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  ui: modalReducer,
  auth: authReducer,
  user: userReducer,
});
