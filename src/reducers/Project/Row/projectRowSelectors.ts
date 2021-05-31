import { RootState } from "@/store";

import { projectRowsAdapter } from "./projectRowsReducer";

export const {
  selectById: selectProjectRowById,
  selectIds: selectProjectRowIds,
  selectEntities: selectProjectRowEntities,
  selectAll: selectAllProjectRows,
  selectTotal: selectTotalProjectRows,
} = projectRowsAdapter.getSelectors((state: RootState) => state.projectRows);
