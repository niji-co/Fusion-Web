import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import { normalize } from "normalizr";

import ProjectProps from "../models/ProjectProps";
import projectEntity from "../ProjectSchemas";

import fakeProjectAPI from "./fakeProjectAPI";

const projectsAdapter = createEntityAdapter<ProjectProps>({
  selectId: project => project.title,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const fetchAllProjects = createAsyncThunk(
  "projects/fetchAllProejcts",
  async () => {
    const data = await fakeProjectAPI.fetchAll();
    const normalized = normalize<
      ProjectProps,
      { projects: { [key: string]: ProjectProps } }
    >(data, projectEntity);
    return normalized.entities;
  }
);

const fetchProjectWithTitle = createAsyncThunk(
  "projects/fetchProjectWithTitle",
  async (title: string) => {
    const data = await fakeProjectAPI.fetchWithTitle(title);
    const normalized = normalize<
      ProjectProps,
      { projects: { [key: string]: ProjectProps } }
    >(data, projectEntity);

    return normalized.entities;
  }
);

const projectSlice = createSlice({
  name: "project",
  initialState: projectsAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllProjects.fulfilled, (state, action) => {
        // console.log("fetch all", action.payload.projects);
        projectsAdapter.upsertMany(state, action.payload.projects);
      })
      .addCase(fetchProjectWithTitle.fulfilled, (state, action) => {
        projectsAdapter.upsertMany(state, action.payload.projects);
      });
  },
});

const { reducer } = projectSlice;
export { projectsAdapter, fetchAllProjects, fetchProjectWithTitle };
export default reducer;
