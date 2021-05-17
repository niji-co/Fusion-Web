import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import ProjectRowModel from "../models/ProjectRowModel";

import { fetchProjectWithTitle } from "../../services/projectsReducer";

const projectRowsAdapter = createEntityAdapter<ProjectRowModel>({
  selectId: row => row.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const projectRowSlice = createSlice({
  name: "projectRows",
  initialState: projectRowsAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProjectWithTitle.fulfilled, (state, action) => {
      projectRowsAdapter.upsertMany(state, action.payload.projectRows);
    });
  },
});

const { reducer } = projectRowSlice;

export default reducer;
export { projectRowsAdapter };
