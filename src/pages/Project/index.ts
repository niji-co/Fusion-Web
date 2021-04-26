import Project from "./Project";

import projectsReducer, {
  projectsAdapter,
  fetchAllProjects,
  fetchProjectWithTitle,
} from "./services/projectsReducer";

import {
  selectProjectById,
  selectProjectIds,
  selectProjectEntities,
  selectAllProject,
  selectTotalProjects,
} from "./services/projectSelectors";

export default Project;

export {
  projectsReducer,
  projectsAdapter,
  fetchAllProjects,
  fetchProjectWithTitle,
  selectProjectById,
  selectProjectIds,
  selectProjectEntities,
  selectAllProject,
  selectTotalProjects,
};
