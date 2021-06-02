import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import ProjectRowModel from "models/ProjectRow";
import { fetchProjectWithTitle } from "reducers/Project";

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

export default projectRowSlice;
export { projectRowsAdapter };
