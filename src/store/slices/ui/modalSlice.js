import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    newState: {},
  },
  reducers: {
    first: (state) => {},
  },
});

export const { first } = modalSlice.actions;
