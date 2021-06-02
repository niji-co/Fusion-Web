import projectRowsSlice, { projectRowsAdapter } from "./projectRowsSlice";

import {
  selectProjectRowById,
  selectProjectRowIds,
  selectProjectRowEntities,
  selectAllProjectRows,
  selectTotalProjectRows,
} from "./projectRowSelectors";

const { reducer } = projectRowsSlice;

export default reducer;
export {
  projectRowsAdapter,
  selectProjectRowById,
  selectProjectRowIds,
  selectProjectRowEntities,
  selectAllProjectRows,
  selectTotalProjectRows,
};
