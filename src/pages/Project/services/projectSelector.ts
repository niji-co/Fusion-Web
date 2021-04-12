import { RootState } from "../../../services/store";

import IProject from "./IProject";

const selectProject = (state: RootState): IProject => state.project;

export default selectProject;
