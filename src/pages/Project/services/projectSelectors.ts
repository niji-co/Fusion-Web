import { RootState } from "../../../services/store";

import { projectsAdapter } from "./projectsReducer";

export const {
  selectById: selectProjectById,
  selectIds: selectProjectIds,
  selectEntities: selectProjectEntities,
  selectAll: selectAllProject,
  selectTotal: selectTotalProjects,
} = projectsAdapter.getSelectors((state: RootState) => state.projects);
