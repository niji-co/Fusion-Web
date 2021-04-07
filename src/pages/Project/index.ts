import Project from "./Project";

import projectReducer, {
  setTitle as setProjectTitle,
  selectProject,
} from "./services/projectReducer";

export default Project;

export { projectReducer, setProjectTitle, selectProject };
