import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import { normalize } from "normalizr";

import ProjectModel from "models/Project";
import ProjectRowModel from "models/Project/Row";
import fakeProjectAPI from "api/fakeProjectAPI";

import { projectEntity } from "./ProjectSchemas";

const projectsAdapter = createEntityAdapter<ProjectModel>({
  selectId: project => project.title,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const fetchAllProjects = createAsyncThunk(
  "projects/fetchAllProjects",
  async () => {
    const normalized = normalize<
      any,
      {
        projects: { [key: string]: ProjectModel };
        projectRows: { [key: string]: ProjectRowModel };
      }
    >(await fakeProjectAPI.fetchAll(), projectEntity);
    return normalized.entities;
  }
);

const fetchProjectWithTitle = createAsyncThunk(
  "projects/fetchProjectWithTitle",
  async (title: string) => {
    const normalized = normalize<
      any,
      {
        projects: { [key: string]: ProjectModel };
        projectRows: { [key: string]: ProjectRowModel };
      }
    >(await fakeProjectAPI.fetchWithTitle(title), projectEntity);

    return normalized.entities;
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState: projectsAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllProjects.fulfilled, (state, action) => {
        projectsAdapter.upsertMany(state, action.payload.projects);
      })
      .addCase(fetchProjectWithTitle.fulfilled, (state, action) => {
        projectsAdapter.upsertMany(state, action.payload.projects);
      });
  },
});

export default projectsSlice;
export { projectsAdapter, fetchAllProjects, fetchProjectWithTitle };
