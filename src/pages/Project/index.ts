import Project from "./Project";

import ProjectModel from "./models/ProjectModel";

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
  ProjectModel,
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
