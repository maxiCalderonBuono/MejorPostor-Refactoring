import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
