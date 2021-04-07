import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../services/rootReducer";

import IProject from "./IProject";

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
});

const { actions, reducer } = projectSlice;

export const { setTitle } = actions;
export const selectProject = (state: RootState): IProject => state.project;

export default reducer;
