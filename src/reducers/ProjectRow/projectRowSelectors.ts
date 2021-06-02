import { RootState } from "@/store";

import { projectRowsAdapter } from "./projectRowsSlice";

export const {
  selectById: selectProjectRowById,
  selectIds: selectProjectRowIds,
  selectEntities: selectProjectRowEntities,
  selectAll: selectAllProjectRows,
  selectTotal: selectTotalProjectRows,
} = projectRowsAdapter.getSelectors((state: RootState) => state.projectRows);
