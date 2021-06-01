import { createSelector, EntityState, OutputSelector } from "@reduxjs/toolkit";

import ProjectModel from "models/Project";
import ProjectRowModel from "models/Project/Row";
import { RootState } from "@/store";

import { projectsAdapter } from "./projectsSlice";

export const {
  selectById: selectProjectById,
  selectIds: selectProjectIds,
  selectEntities: selectProjectEntities,
  selectAll: selectAllProject,
  selectTotal: selectTotalProjects,
} = projectsAdapter.getSelectors((state: RootState) => state.projects);

export const selectRowsByProjectId = (
  projectId: string
): OutputSelector<
  {
    projects: EntityState<ProjectModel>;
    projectRows: EntityState<ProjectRowModel>;
  },
  ProjectRowModel[],
  (
    res1: ProjectModel | undefined,
    res2: (ProjectRowModel | undefined)[]
  ) => ProjectRowModel[]
> =>
  createSelector(
    [
      (state: RootState) => selectProjectById(state, projectId),
      (state: RootState) =>
        state.projectRows.ids.map(id => state.projectRows.entities[id]),
    ],
    (project, rows): ProjectRowModel[] => {
      if (project === undefined) {
        return [];
      }

      const filtered: ProjectRowModel[] = rows.filter(
        row => row !== undefined
      ) as ProjectRowModel[];

      return filtered.filter(row => project.rows.includes(row.id));
    }
  );