import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import IProject from "./IProject";

import { onInputChange } from "../../../services/actions/inputActions";

const initialState: IProject = {
  title: "",
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(onInputChange, (state, action) => {
      state.title = action.payload;
    });
  },
});

const { actions, reducer } = projectSlice;
export const { setTitle } = actions;
export default reducer;
