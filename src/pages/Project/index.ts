import Project from "./Project";

import projectReducer, {
  setTitle as setProjectTitle,
} from "./services/projectReducer";

import selectProject from "./services/projectSelector";

export default Project;

export { projectReducer, setProjectTitle, selectProject };
