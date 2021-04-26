import { createSelector, EntityState, OutputSelector } from "@reduxjs/toolkit";

import { RootState } from "../../../services/store";
import { projectsAdapter } from "./projectsReducer";
import ProjectModel from "../models/ProjectModel";
import { ProjectRowProps } from "../Row";

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
    projectRows: EntityState<ProjectRowProps>;
  },
  ProjectRowProps[],
  (
    res1: ProjectModel | undefined,
    res2: (ProjectRowProps | undefined)[]
  ) => ProjectRowProps[]
> =>
  createSelector(
    [
      (state: RootState) => selectProjectById(state, projectId),
      (state: RootState) =>
        state.projectRows.ids.map(id => state.projectRows.entities[id]),
    ],
    (project, rows): ProjectRowProps[] => {
      if (project === undefined) {
        return [];
      }

      const filtered: ProjectRowProps[] = rows.filter(
        row => row !== undefined
      ) as ProjectRowProps[];

      return filtered.filter(row => project.rows.includes(row.id));
    }
  );
