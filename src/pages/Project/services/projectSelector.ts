import { RootState } from "../../../services/store";

import ProjectProps from "../models/ProjectProps";

const selectProject = (state: RootState): ProjectProps => state.project;

export default selectProject;
