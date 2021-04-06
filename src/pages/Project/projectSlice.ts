import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface Project {
  title: string;
}

const initialState: Project = {
  title: "",
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const { setTitle } = projectSlice.actions;
export const selectProject = (state: RootState): Project => state.project;

export default projectSlice.reducer;
