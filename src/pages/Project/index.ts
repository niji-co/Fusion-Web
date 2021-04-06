import Project from "./Project";

import projectReducer, {
  setTitle as setProjectTitle,
  selectProject,
} from "./projectSlice";

export default Project;

export { projectReducer, setProjectTitle, selectProject };
