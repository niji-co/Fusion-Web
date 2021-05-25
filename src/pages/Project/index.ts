import Project from "./Project";

import ProjectModel from "./models/ProjectModel";
import ProjectQueryModel from "./models/ProjectQueryModel";

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
  ProjectQueryModel,
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
