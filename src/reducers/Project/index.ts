import { projectRowEntity, projectEntity } from "./ProjectSchemas"

import projectsSlice, {
  projectsAdapter,
  fetchAllProjects,
  fetchProjectWithTitle,
} from "./projectsSlice";

import {
  selectProjectById,
  selectProjectIds,
  selectProjectEntities,
  selectAllProject,
  selectTotalProjects,
} from "./projectSelectors";

const { reducer } = projectsSlice;

export default reducer;
export {
  projectRowEntity,
  projectEntity,
  projectsAdapter,
  fetchAllProjects,
  fetchProjectWithTitle,
  selectProjectById,
  selectProjectIds,
  selectProjectEntities,
  selectAllProject,
  selectTotalProjects,
};
